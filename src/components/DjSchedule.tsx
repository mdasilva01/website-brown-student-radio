import React, { useEffect, useState } from "react";

interface Show {
  name: string;
  email: string;
  timeSlot: string; // Example: "Monday 8:00 AM-10:00 AM"
  showTitle: string;
  remote: string;
  year: string;
}

const DJSchedule: React.FC<{
  onShowChange: (currentShow: Show | null, nextShow: Show | null, nextShowTime: string | null) => void;
}> = ({ onShowChange }) => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ70FHuVv9KwZzefLwLXcQpu4zAPzcxnwgUlvLMRj49HHSLd743FEP-IaPfbj7QXITxWLZEWgSOE82M/pub?output=csv"
      );
      const text = await response.text();
      const rows = text.split("\n").slice(1); // Skip the header row
      const parsedShows: Show[] = rows.map((row) => {
        const [name, email, timeSlot, showTitle, remote, year] = row.split(",");
        return { name, email, timeSlot, showTitle, remote, year };
      });
      setShows(parsedShows);
    }

    fetchData();
  }, []);

  const parseTime = (timeStr: string): number => {
    if (!timeStr) return 0;
    const [hour, minute] = timeStr.match(/\d+/g)!.map(Number);
    const isPM = timeStr.toLowerCase().includes("pm");
    if (isPM && hour !== 12) return hour + 12 + (minute || 0) / 60;
    if (!isPM && hour === 12) return 0 + (minute || 0) / 60;
    return hour + (minute || 0) / 60;
  };

  const getDayDifference = (currentDay: string, targetDay: string): number => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentIndex = days.indexOf(currentDay);
    const targetIndex = days.indexOf(targetDay);
    return targetIndex >= currentIndex
      ? targetIndex - currentIndex
      : 7 - (currentIndex - targetIndex);
  };

  useEffect(() => {
    if (shows.length > 0) {
      const now = new Date();

      const estOptions: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      };
      const estFormatter = new Intl.DateTimeFormat("en-US", estOptions);
      const estParts = estFormatter.formatToParts(now);

      const currentDay = estParts.find((part) => part.type === "weekday")?.value || "Sunday";
      const currentHour = parseInt(estParts.find((part) => part.type === "hour")?.value || "0", 10);
      const currentMinute = parseInt(estParts.find((part) => part.type === "minute")?.value || "0", 10);
      const currentTime = currentHour + currentMinute / 60;

      let foundCurrentShow: Show | null = null;
      let foundNextShow: Show | null = null;
      let nextShowTime: string | null = null;
      let smallestTimeDiff = Number.MAX_VALUE;

      shows.forEach((show) => {
        const [day, timeRange] = show.timeSlot.split(" ");
        if (!timeRange || !timeRange.includes("-")) return;

        const [start, end] = timeRange.split("-");
        let startTime = parseTime(start);
        const endTime = parseTime(end);

        if (endTime >= 12) {
          startTime = startTime + 12;
        }

        const timeDiff = startTime - currentTime;

        if (getDayDifference(currentDay, day) === 0) {
          if (currentTime >= startTime && currentTime < endTime) {
            foundCurrentShow = show;
          } else if (timeDiff > 0 && timeDiff < smallestTimeDiff) {
            smallestTimeDiff = timeDiff;
            foundNextShow = show;
            nextShowTime = show.timeSlot;
          }
        } else if (getDayDifference(currentDay, day) > 0) {
          const futureTimeDiff = getDayDifference(currentDay, day) * 24 - currentTime + startTime;
          if (futureTimeDiff < smallestTimeDiff) {
            smallestTimeDiff = futureTimeDiff;
            foundNextShow = show;
            nextShowTime = show.timeSlot;
          }
        }
      });

      onShowChange(foundCurrentShow, foundNextShow, nextShowTime);
    }
  }, [shows, onShowChange]);

  return null;
};

export default DJSchedule;
