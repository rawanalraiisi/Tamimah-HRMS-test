import React from 'react';
import './monthView.css'

export type EmployeeLeaveDetails = {
  date: Date
  type: string
}


interface CalendarProps {
  year: number;
  month: number;
  type: string;
  employeeLeaveDetails: EmployeeLeaveDetails[];
  className?: string;
  dateDetails?: string
  // dateDetails?: dateDetails[];
}

const Calendar: React.FC<CalendarProps> = ({ year, month, className, type, employeeLeaveDetails, dateDetails }) => {
  const today = new Date(); // Get today's date
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayVal = -firstDay.getDay() + 1;
  const startDate = new Date(year, month, firstDayVal);
  const totalWeeks = 6;
  const weeks: JSX.Element[] = [];

  let currentDate = startDate;

  // console.log("dateDetails from calendar>>>>>>>>>>>>", dateDetails);

  // dateDetails?.map((data, index) => {
  //   console.log("data from calendar", data)
  // })

  let start = '';
  let end = ''

  if (Array.isArray(dateDetails)) {
    const date = dateDetails.map((data, index) => {
      start = start + data.startedDate
      end = end + data.ReturnDate
    }
      // console.log(data.startedDate)
    )
  }

  // console.log("start:", start);


  // for (let i = 0; i <= 1; i++) {


  //   console.log(dateDetails[i])

  // }





  for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex++) {
    const week: JSX.Element[] = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      if (
        (weekIndex * 7 + dayIndex + firstDayVal < 1) ||
        (weekIndex * 7 + dayIndex + firstDayVal > totalDays)
      ) {
        week.push(
          <div className="col calendar-day border d-flex align-items-center justify-content-center" key={`${weekIndex}-${dayIndex}`}></div>
        );
      } else {
        const object = employeeLeaveDetails.find(obj => obj.date.getTime() === currentDate.getTime())
        // const isToday = currentDate.toDateString() === today.toDateString(); // Check if current date is today's date
        const isInRange = currentDate >= new Date(start) && currentDate <= new Date(end); // Check if current date is within range

        let backgroundColor = ''; // Default background color

        if (isInRange) {
          backgroundColor = 'green'; // Change background color if within range
        }

        if (object !== undefined ? (type === "All" || object.type === type) : false) {
          week.push(
            <div
              // Apply different background color based on conditions
              className={`col calendar-day ${object!.type} border d-flex align-items-center justify-content-center`}
              key={currentDate.toString()}
            >
              {currentDate.getDate()}
            </div>
          );
        } else {
          week.push(
            <div style={{ background: isInRange ? '#00000066' : backgroundColor }} className={`col calendar-day border d-flex align-items-center justify-content-center`} key={currentDate.toString()}>
              {currentDate.getDate()}
            </div>
          );
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(
      <div className="row calendar-week" key={weekIndex}>
        {week}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="calendar-header d-flex align-items-center justify-content-center">
        <h2>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      </div>
      <div className="calendar-body">
        <div className="row calendar-weekdays d-flex flex-row-fluid">
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">S</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">M</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">T</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">W</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">T</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary text-info">F</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary text-info">S</div>
        </div>
        {weeks}
      </div>
    </div>
  );
};

export default Calendar;
