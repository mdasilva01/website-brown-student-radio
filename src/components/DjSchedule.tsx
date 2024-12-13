import React, { useEffect, useState } from "react";

interface Show {
  name: string;
  email: string;
  timeSlot: string;
  showTitle: string;
  remote: string;
  year: string;
}

const DJSchedule: React.FC<{
  onCurrentShowChange: (currentShow: Show | null) => void;
}> = ({ onCurrentShowChange }) => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    // Fetch the CSV data from the Google Sheets link
    async function fetchData() {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTop9nu_-dZStbRarV3QxYa3dqYHf-AdcTIhL4_-CTFkMwJVRcO5eCxfYcxrtJgGvLibMEmGd81dfUm/pub?output=csv"
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

  useEffect(() => {
    if (shows.length > 0) {
      const now = new Date();
      const currentDay = now.toLocaleString("en-US", { weekday: "long" });
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour + currentMinute / 60;

      let foundCurrentShow: Show | null = null;
      let smallestTimeDiff = Number.POSITIVE_INFINITY;

      shows.forEach((show) => {
        if (!show.timeSlot || !show.timeSlot.includes(" ")) return;

        const [day, timeRange] = show.timeSlot.split(" ");
        if (!timeRange || !timeRange.includes("-")) return;

        const [start, end] = timeRange.split("-");
        let startTime = parseTime(start);
        const endTime = parseTime(end);

        if (getDayDifference(currentDay, day) === 0) {
          if (currentTime >= startTime && currentTime < endTime) {
            foundCurrentShow = show;
          }

          const timeDiff = startTime - currentTime;
          if (timeDiff > 0 && timeDiff < smallestTimeDiff) {
            smallestTimeDiff = timeDiff;
          }
        }
      });

      onCurrentShowChange(foundCurrentShow);
    }
  }, [shows, onCurrentShowChange]);

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

  return null; // This component does not render anything itself
};

export default DJSchedule;
