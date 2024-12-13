import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SchedulePage from './pages/Schedule';
import ContactPage from './pages/Contact';
import DJProfilesPage from './pages/DJProfiles';
import BlogPost from './pages/BlogPost';
import BlogPostList from './pages/BlogPostList';

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/DJProfiles" element={<DJProfilesPage />} />
          <Route path="/blog" element={<BlogPostList />} />
          <Route path="/blog/:postID" element={<BlogPost />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    paddingBottom: '60px', // Add padding to avoid overlap with navbar
  },
  contentContainer: {
    flex: 1,
  },
};


export default App;
// import React, { useEffect, useState } from "react";

// interface Show {
//   name: string;
//   email: string;
//   timeSlot: string;
//   showTitle: string;
//   remote: string;
//   year: string;
// }

// const App: React.FC = () => {
//   const [shows, setShows] = useState<Show[]>([]);
//   const [currentShow, setCurrentShow] = useState<Show | null>(null);
//   const [nextShow, setNextShow] = useState<Show | null>(null);

//   useEffect(() => {
//     // Fetch the CSV data from the Google Sheets link
//     async function fetchData() {
//       const response = await fetch(
//         "https://docs.google.com/spreadsheets/d/e/2PACX-1vTop9nu_-dZStbRarV3QxYa3dqYHf-AdcTIhL4_-CTFkMwJVRcO5eCxfYcxrtJgGvLibMEmGd81dfUm/pub?output=csv"
//       );
//       const text = await response.text();
//       const rows = text.split("\n").slice(1); // Skip the header row
//       const parsedShows: Show[] = rows.map((row) => {
//         const [name, email, timeSlot, showTitle, remote, year] = row.split(",");
//         return { name, email, timeSlot, showTitle, remote, year};
//       });
//       setShows(parsedShows);
//     }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (shows.length > 0) {
//       // Get the current time and day
//       const now = new Date();
//       const currentDay = now.toLocaleString("en-US", { weekday: "long" });
//       const currentHour = now.getHours();
//       const currentMinute = now.getMinutes();
//       const currentTime = currentHour + currentMinute / 60;
  
//       let foundCurrentShow: Show | null = null;
//       let foundNextShow: Show | null = null;
//       let smallestTimeDiff = Number.POSITIVE_INFINITY;
  
//       // Loop through shows to find current and next shows
//       shows.forEach((show) => {
  
//         const [day, timeRange] = show.timeSlot.split(" ");
  
//         if (!timeRange || !timeRange.includes("-")) {
//           console.log(timeRange);
//           console.warn(`Invalid time range for show: ${show.name}`);
//           return;
//         }

//         // Calculate day difference
//         const dayDifference = getDayDifference(currentDay, day);
//         if (dayDifference !== 0) {
//           return;
//         }
//         console.log(show.showTitle);

//         const [start, end] = timeRange.split("-");
//         let startTime = parseTime(start);
//         const endTime = parseTime(end);
  
//         // Check if this is the current show
//         if (endTime >= 12){
//           startTime = startTime + 12;
//         }

//         if (
//           currentTime >= startTime &&
//           currentTime < endTime
//         ) {
//           console.log(currentTime);
//           console.log(startTime);
//           console.log(endTime);
//           foundCurrentShow = show;
//         }
  
//         // Check for the next upcoming show
//         const timeDiff = startTime - currentTime;
//         if (timeDiff > 0 && timeDiff < smallestTimeDiff) {
//           smallestTimeDiff = timeDiff;
//           foundNextShow = show;
//         }
//       });
  
//       console.log("Current show:", foundCurrentShow);
//       console.log("Next show:", foundNextShow);
  
//       setCurrentShow(foundCurrentShow);
//       setNextShow(foundNextShow);
//     }
//   }, [shows]);
  

//   const parseTime = (timeStr: string): number => {
//     if (!timeStr) return 0;
  
//     // Extract the hour and minute from the time string
//     const [hour, minute] = timeStr.match(/\d+/g)!.map(Number);
  
//     // Check if the time is in AM or PM
//     const isPM = timeStr.toLowerCase().includes("pm");
//     const isAM = timeStr.toLowerCase().includes("am");
  
//     // Handle conversions:
//     if (isPM && hour !== 12) {
//       return hour + 12 + (minute || 0) / 60; // Convert PM hours (except 12pm) to 24-hour format
//     } else if (isAM && hour === 12) {
//       return 0 + (minute || 0) / 60; // Midnight (12am) is 0 in 24-hour format
//     } else {
//       return hour + (minute || 0) / 60; // Handle all other cases (AM or 12pm)
//     }
//   };  
  
  
//   const getDayDifference = (currentDay: string, targetDay: string): number => {
//     const days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     const currentIndex = days.indexOf(currentDay);
//     const targetIndex = days.indexOf(targetDay);
//     return targetIndex >= currentIndex
//       ? targetIndex - currentIndex
//       : 7 - (currentIndex - targetIndex);
//   };

//   return (
//     <div>
//       <h1>Current Show</h1>
//       {currentShow ? (
//         <div>
//           <p>
//             <strong>Show Title:</strong> {currentShow.showTitle}
//           </p>
//           <p>
//             <strong>DJ:</strong> {currentShow.name}
//           </p>
//         </div>
//       ) : (
//         <p>No show is currently airing.</p>
//       )}

//       <h1>Next Show</h1>
//       {nextShow ? (
//         <div>
//           <p>
//             <strong>Show Title:</strong> {nextShow.showTitle}
//           </p>
//           <p>
//             <strong>DJ:</strong> {nextShow.name}
//           </p>
//         </div>
//       ) : (
//         <p>No upcoming shows.</p>
//       )}
//     </div>
//   );
// };

// export default App;
