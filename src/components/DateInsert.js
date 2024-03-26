// src/components/DateInsert.js

const DateInsert = ({ date }) => {
    const getCurrentYear = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth(); // 0-indexed month number
  
      // If current month is before July (6), return previous year's school year
      return currentMonth < 6 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
    };
  
    const getCurrentSchoolYear = () => {
      const currentYear = getCurrentYear();
      const startDate = new Date(currentYear, 6, 1); // July 1st
      const endDate = new Date(currentYear + 1, 5, 30); // June 30th
      const currentDate = new Date(); // Define currentDate here
  
      return currentDate >= startDate && currentDate <= endDate
        ? currentYear
        : currentYear - 1;
    };
  
    const getFirstBusinessDayOfOctober = (year) => {
      const octFirstDate = new Date(year, 9, 1); // October 1st
      const dayOfWeek = octFirstDate.getDay();
  
      if (dayOfWeek === 6) {
        // If October 1st is a Saturday, add 2 days to move to Monday
        octFirstDate.setDate(octFirstDate.getDate() + 2);
      } else if (dayOfWeek === 0) {
        // If October 1st is a Sunday, add 1 day to move to Monday
        octFirstDate.setDate(octFirstDate.getDate() + 1);
      }
  
      return octFirstDate.toISOString().slice(0, 10);
    };
  
    const getFullSchoolYear = () => {
      const currentSchoolYear = getCurrentSchoolYear();
      return `${currentSchoolYear}-${currentSchoolYear + 1}`;
    };
  
    const getPreviousFullSchoolYear = () => {
      const currentSchoolYear = getCurrentSchoolYear();
      return `${currentSchoolYear - 1}-${currentSchoolYear}`;
    };
  
    const getCurrentFullSchoolYear = () => {
      const currentSchoolYear = getCurrentSchoolYear();
      return `${currentSchoolYear}-${currentSchoolYear + 1}`;
    };
  
    const getDate = (date) => {
      const currentYear = getCurrentYear();
      const currentSchoolYear = getCurrentSchoolYear();
  
      switch (date) {
        case 'currentYear':
          return currentYear;
        case 'previousYear':
          return currentYear - 1;
        case 'currentSchoolYear':
          return `${currentSchoolYear + 1}-06-30`;
        case 'previousSchoolYear':
          return `${currentSchoolYear}-06-30`;
        case 'firstBusinessDayOctober':
          return getFirstBusinessDayOfOctober(currentSchoolYear);
        case 'fullSchoolYear':
          return getFullSchoolYear();
        case 'previousFullSchoolYear':
          return getPreviousFullSchoolYear();
        case 'currentFullSchoolYear':
          return getCurrentFullSchoolYear();
        default:
          return '';
      }
    };
  
    return <span>{getDate(date)}</span>;
  };
  
  export default DateInsert;