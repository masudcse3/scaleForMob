/** @format */

const clock = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const period = hour >= 12 ? "PM" : "AM";
  return setTimeout(() => {
    return {
      date: ``,
    };
  }, 1000);
};

module.exports = clock;
