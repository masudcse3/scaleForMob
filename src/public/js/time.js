/** @format */

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes and seconds to have two digits
  const formattedHours = ("0" + hours).slice(-2);
  const formattedMinutes = ("0" + minutes).slice(-2);
  const formattedSeconds = ("0" + seconds).slice(-2);

  // Combine the parts of the time into a single string
  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
  const dateString = `${day} ${monthNames[month]} ${year}`;
  // Display the time
  document.getElementById("time").textContent = timeString;
  document.getElementById("date").textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately on page load
updateClock();
