import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(DateTime.local())

  useEffect(() => {
    const interval = setInterval(() => {
      const nowDateString = DateTime.local().toLocaleString(DateTime.DATE_SHORT);
      const currentDateString = currentDate.toLocaleString(DateTime.DATE_SHORT);
      if (currentDateString !== nowDateString) {
        setCurrentDate(DateTime.local());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentDate;
}

export default useCurrentDate;