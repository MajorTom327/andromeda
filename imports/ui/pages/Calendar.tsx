import React, { useState } from 'react';
import { DateTime } from 'luxon';
import ListTask from '../components/ListTask';

type Props = {
};

const Calendar: React.FC<Props> = ({ }) => {
  const [selectedDate, setSelectedDate] = useState<string>(DateTime.local().toISODate());

  const onChangeDateHandler = ({ target }) => (setSelectedDate(target.value))

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <div>Choisissez une date:</div>
          <input className="input input-bordered" type="date" value={selectedDate} onChange={onChangeDateHandler} />

        </div>

      </div>

      <ListTask date={selectedDate} />
    </div>
  );
}

Calendar.defaultProps = {
};

export default Calendar;