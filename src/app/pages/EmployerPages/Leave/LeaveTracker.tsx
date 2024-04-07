import { FC, useState, useEffect, useMemo, useRef } from 'react'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import { PageTitle } from '../../../../_metronic/layout/core'
import { TextField, Autocomplete } from '@mui/material'
import { addDays } from 'date-fns'
import {
    CardsWidget21,
} from '../../../../_metronic/partials/widgets'

import Calendar from '../../../components/Calendar/MonthView'

import Data from './data/data.json'

const data: LeaveDetails[] = Data

export type EmployeeLeaveDetails = {
    date: Date
    type: string
}

export type LeaveDetails = {
    name: string
    startDate: string
    endDate: string
    type: string
}

type Days = {
    Sick: number
    Marriage: number
    Maternity: number
    Annual: number
    Compassionate: number
    Unpaid: number
    Hajj: number
    Others: number
}


const LeaveTrackerPage: FC = () => {
    const presentYear = new Date().getFullYear()
    const [employeeName, setEmployeeName] = useState<string | null>(null);
    const [year, setYear] = useState<number>(presentYear);
    const [employeeLeaveDetails, setEmployeeLeaveDetails] = useState<EmployeeLeaveDetails[]>([])
    const [type, setType] = useState<string>("All")
    const col1 = useRef<HTMLDivElement>(null)
    const col2 = useRef<HTMLDivElement>(null)
    const col3 = useRef<HTMLDivElement>(null)
    const col4 = useRef<HTMLDivElement>(null)
    const [noTickets, setNoTIckets] = useState<number>(0)
    const [ticketAmt, setAmt] = useState<number>(0)

    const [days, setdays] = useState<Days>({
        Sick: 0,
        Marriage: 0,
        Maternity: 0,
        Annual: 0,
        Compassionate: 0,
        Unpaid: 0,
        Hajj: 0,
        Others: 0
    })


    const employeeOptions = useMemo(() => {
        return ["employee1", "employee2", "employee3", "employee4"]
    }, []);

    const yearOptions = useMemo(() => {
        return ['2020', '2021', '2022', '2023', '2024', '2025']
    }, []);

    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    useEffect(() => {
        const listofLeaveDetails: EmployeeLeaveDetails[] = [];
        let noOfDays: Days = {
            Sick: 0,
            Marriage: 0,
            Maternity: 0,
            Annual: 0,
            Compassionate: 0,
            Unpaid: 0,
            Hajj: 0,
            Others: 0
        }
        for (let item of data) {
            if (item.name === employeeName) {
                const startDate = new Date(item.startDate)
                const endDate = new Date(item.endDate)
                let date = startDate
                if (startDate.getFullYear() === year || endDate.getFullYear() === year) {
                    while (date < endDate) {
                        if (date.getFullYear() === year) {
                            const ld = { date: date, type: item.type }
                            listofLeaveDetails.push(ld)
                            noOfDays[item.type as keyof Days] = noOfDays[item.type as keyof Days] + 1
                        }
                        date = addDays(date, 1)
                    }
                }
            }
        }
        setdays(noOfDays)
        setEmployeeLeaveDetails(listofLeaveDetails)
    }, [employeeName, year])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log("click recorded")
            console.log(col1.current)
            console.log(col2.current)
            console.log(col3.current)
            console.log(col4.current)
            if (col1.current && !col1.current.contains(event.target as Node) &&
                col2.current && !col2.current.contains(event.target as Node) &&
                col3.current && !col3.current.contains(event.target as Node) &&
                col4.current && !col4.current.contains(event.target as Node)
            ) {
                setType("All")
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [])

    return (
        <>

            <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-1 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Leave Trackerrr</h5>

            <div className='row g-5 g-xl-8 mb-md-5 mb-xl-5 d-flex justify-content-evenly'>
                <div className='col-md-5 col-xl-5 me-13'>
                    <div className='card h-md-auto mb-8'>
                        <div className='card-body'>
                            <h5 className='text-primary'><i className="bi bi-person-fill fs-2 me-3 svg-icon-muted text-primary"></i>Select Employee Name </h5>
                            <Autocomplete
                                fullWidth
                                color="primary"
                                id='employeeNameField'
                                options={employeeOptions}
                                onInputChange={(event, value) => {
                                    setEmployeeName(value)
                                }}
                                onChange={(event, value) => {
                                    setEmployeeName(value)
                                }}
                                classes={{
                                    input: 'text-primary'
                                }}
                                className='mt-md-5 mt-xl-4 mb-5'
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        required
                                        focused
                                        label="Employee Name"
                                    />
                                }
                            />
                            <h5 className='text-primary mb-3'><i className="bi bi-calendar-check fs-2 me-3 svg-icon-muted text-primary"></i>Select Year </h5>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id='yearField'
                                color="primary"
                                options={yearOptions}
                                onInputChange={(event, value) => {
                                    setYear(parseInt(value ?? presentYear.toString()))
                                }}
                                onChange={(event, value) => {
                                    setYear(parseInt(value ?? presentYear.toString()))
                                }}
                                classes={{
                                    input: 'text-primary'
                                }}
                                defaultValue={presentYear.toString()}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        required
                                        focused
                                        label="Year"
                                    />
                                }

                            />
                            <div className='mt-4'>
                                <span className="badge badge-primary fs-7 p-3 mb-2"><i className="bi bi-airplane-fill fs-2 svg-icon-muted text-white me-5"></i>Tickets Compensated: 1</span>
                                <span className="badge badge-primary fs-7 p-3"><i className="bi bi-cash-coin fs-2 svg-icon-muted text-white me-5"></i> Amount Compensation: 150 OMR</span>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='col-md-2 col-xl-2 flex-fill align-self-stretch' ref={col1}>
                    AAAAAAAAA
                </div>

                <div className='col-md-2 col-xl-2 flex-fill align-self-stretch' ref={col3}>
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Annual Leave'
                        description={days.Annual.toString()}
                        onClick={() => setType("Annual")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Emergency Leave'
                        description={days.Compassionate.toString()}
                        onClick={() => setType("Compassionate")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#34a8cb'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Unpaid Leave'
                        description={days.Unpaid.toString()}
                        onClick={() => setType("Unpaid")}
                    />
                </div>
                <div className='col-md-2 col-xl-2 flex-fill align-self-stretch' ref={col4}>
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Hajj Leave'
                        description={days.Hajj.toString()}
                        onClick={() => setType("Hajj")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#34a8cb'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Paternity Leave'
                        description={days.Hajj.toString()}
                        onClick={() => setType("Hajj")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Additional Leave'
                        description={days.Others.toString()}
                        onClick={() => setType("Others")}
                    />
                </div>
            </div>
            <div className='card'>
                <div className='accordion' id='kt_accordion_1'>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='kt_accordion_1_header_1'>
                            <button
                                className='accordion-button fs-4 fw-bold collapsed text-primary'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#kt_accordion_1_body_1'
                                aria-expanded='false'
                                aria-controls='kt_accordion_1_body_1'
                            >
                                Ticket Compensation
                            </button>
                        </h2>
                        <div
                            id='kt_accordion_1_body_1'
                            className='accordion-collapse collapse'
                            aria-labelledby='kt_accordion_1_header_1'
                            data-bs-parent='#kt_accordion_1'
                        >
                            <div className='accordion-body'>
                                <div className='row g-5 g-xl-20 mb-2'>
                                    <div className='col-md-8 col-xl-3 me-10'>
                                        <h6 className='text-primary'><i className="bi bi-airplane-fill fs-2 svg-icon-muted text-primary me-5"></i>Number of Tickets Compensated</h6>
                                        <TextField
                                            fullWidth
                                            required
                                            defaultValue={noTickets}
                                            id='noTickets'
                                            color='primary'
                                            focused
                                            onChange={(event) => setNoTIckets(parseInt(event.target.value))}
                                            inputProps={{
                                                className: 'text-dark fs-4'
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-8 col-xl-3'>
                                        <h6 className='text-primary'><i className="bi bi-cash-coin fs-2 svg-icon-muted text-primary me-5"></i>Amount of Tickets Compensated</h6>
                                        <TextField
                                            fullWidth
                                            required
                                            defaultValue={ticketAmt}
                                            id='ticketAmt'
                                            color='primary'
                                            focused
                                            onChange={(event) => setAmt(parseInt(event.target.value))}
                                            inputProps={{
                                                className: 'text-dark fs-4'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='row g-5 g-xl-8 mb-2'>
                                    <div className='col-md-3'>
                                        <div className='btn btn-sm btn-primary mt-3' onClick={() => { }}>
                                            SAVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2 className='accordion-header' id='kt_accordion_1_header_1'>
                            <button
                                className='accordion-button fs-4 fw-bold collapsed text-primary'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#kt_accordion_1_body_2'
                                aria-expanded='false'
                                aria-controls='kt_accordion_1_body_2'
                            >
                                Calendar
                            </button>
                        </h2>
                        <div
                            id='kt_accordion_1_body_2'
                            className='accordion-collapse collapse'
                            aria-labelledby='kt_accordion_1_header_2'
                            data-bs-parent='#kt_accordion_1'
                        >
                            <div className='accordion-body'>
                                <div className='row g-5 g-xl-8 mx-5 mx-xl-10'>
                                    {
                                        months.map((value) => {
                                            return (
                                                <div className='col-md-6 col-xl-4' >
                                                    <Calendar
                                                        className='m-3'
                                                        year={year > 2000 && year << 2100 ? year : presentYear}
                                                        month={value}
                                                        type={type}
                                                        employeeLeaveDetails={employeeLeaveDetails}
                                                    // minDetail='month'
                                                    // prevLabel={null}
                                                    // prev2Label={null}
                                                    // nextLabel={null}
                                                    // next2Label={null}
                                                    // showNeighboringMonth={false}
                                                    // activeStartDate={new Date(year,value,1)}
                                                    />
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const LeaveTracker: FC = () => {
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>Leave Tracker</PageTitle> */}
            <LeaveTrackerPage />
        </>
    )
}

export { LeaveTracker }