import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import DatePresets from "./DatePresets";
export default function Calendar() {
  const dateFormat = "DD/MM/YYYY";
  const [startDate, setStartDate] = useState(null);
  const [dateEnd, setEndDate] = useState(null);
  const [dateInput, setDateInput] = useState(null);
  return (
    <div>
      <DateRangePicker
        startDate={startDate}
        startDateId="s_id"
        endDate={dateEnd}
        endDateId="e_id"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={dateInput}
        onFocusChange={(e) => setDateInput(e)}
        dateFormat={dateFormat}
        renderCalendarInfo={() => (
          <DatePresets
            startDate={startDate}
            endDate={dateEnd}
            dateFormat={dateFormat}
            handlePresets={(start, end) => {
              setStartDate(start);
              setEndDate(end);
            }}
          />
        )}
      />
      <div className="mt-3">
        <div>
          <strong>Start date: </strong>
          {startDate && startDate.format("ll")}
        </div>
        <div>
          <strong>End date: </strong>
          {dateEnd && dateEnd.format("ll")}
        </div>
      </div>
    </div>
  );
}