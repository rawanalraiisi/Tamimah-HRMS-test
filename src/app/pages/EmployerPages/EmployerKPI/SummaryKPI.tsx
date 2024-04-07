import { FC, useState, useEffect, useMemo, useRef } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
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
    Paternity: number
}


const SummaryKPIPage: FC = () => {
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
        Paternity: 0
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
            Paternity: 0
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


            <h3 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-1 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Summary KPI Tracker</h3>

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
                                className='mt-md-5 mt-xl-3 mb-3'
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        required
                                        focused
                                        label="Employee Name"
                                    />
                                }
                            />
                            <h5 className='text-primary mb-3 mt-2'><i className="bi bi-calendar-check fs-2 me-3 svg-icon-muted text-primary"></i>Select Year </h5>
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

                            {/* employee information */}

                            <div className="mt-2">

                                {/* Employee Total Salary */}
                                <li className="d-flex align-items-center me-3">
                                    <span className="bullet bg-primary me-5"></span><h6 className='mt-2 text-primary fs-7 me-5'>Total Salary</h6> <span className="badge badge-primary">700 OMR</span>
                                </li>

                                {/* Employee Internal Job Title */}
                                <li className="d-flex align-items-center me-3">
                                    <span className="bullet bg-primary me-5"></span><h6 className='mt-2 text-primary fs-7 me-5'>Internal Job Title</h6><span className="badge badge-primary">HR Manager</span>
                                </li>

                                {/* Employee Responsibilities */}
                                <li className="d-flex align-items-center me-3">
                                    <span className="bullet bg-primary me-5"></span><h6 className='mt-2 text-primary fs-7 me-5'>Responsibilities</h6>

                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#employee_Responsibilities">
                                            <KTSVG
                                                path="/media/icons/duotune/communication/com005.svg"
                                                className="svg-icon svg-icon-2x"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 col-xl-2 flex-fill align-self-stretch' ref={col1}>
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Sick Leave'
                        description={days.Sick.toString()}
                        onClick={() => setType("Sick")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Marriage Leave'
                        description={days.Marriage.toString()}
                        onClick={() => setType("Marriage")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Maternity Leave'
                        description={days.Maternity.toString()}
                        onClick={() => setType("Maternity")}
                    />
                </div>
                <div className='col-md-2 col-xl-2 flex-fill align-self-stretch' ref={col2}>
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Annual Leave'
                        description={days.Maternity.toString()}
                        onClick={() => setType("Annual")}
                    />
                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Holidays'
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
                </div>
                <div className='col-md-2 col-xl-2 flex-fill align-self-stretch' ref={col3}>

                    <CardsWidget21
                        className='h-md-20 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Unpaid Leave'
                        description={days.Unpaid.toString()}
                        onClick={() => setType("Unpaid")}
                    />
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
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Paternity Leave'
                        description={days.Paternity.toString()}
                        onClick={() => setType("Paternity")}
                    />
                </div>

            </div>









            {/* Employee Responsibilities information *********************************************************************************************************************************************/}
            <div className="modal fade" tabIndex={-1} id="employee_Responsibilities">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary-subtle">
                            <h5 className="modal-title text-primary fw-bold"><i className="bi bi-person-lines-fill fs-1 svg-icon-muted text-primary me-5"></i>  Employee Responsibilities</h5>
                            <div
                                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <KTSVG
                                    path="/media/icons/duotune/arrows/arr061.svg"
                                    className="svg-icon svg-icon-2x"
                                />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column">
                                <li className="d-flex align-items-center">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'> Address employee concerns, Forecast workforce needs and grievances and Foster a positive work environment.</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'> Develop and implement performance appraisal systems.</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'>Administer employee benefits and compensation.</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'>Ensure adherence to labor laws and regulations and Develop succession plans for key roles.</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'>Align HR initiatives with business goals.</p>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>









            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-sm" type="button" style={{ background: "#6255a3", color: "#fff" }}><i className="bi bi-file-pdf-fill fs-2x svg-icon-muted text-white"></i>Print</button>
            </div>




            <div className="p-5" style={{ overflowX: 'auto' }}>



                <table className="table custom-table table-rounded border-3 border-gray-100 table table-bordered gy-5 gs-7 shadow" style={{ background: "#e8e6e6", width: "2400px" }}>
                    <thead>
                        <tr className="fw-bold fs-6 border-bottom border-gray-200 text-white bg-primary">
                            <th className="KPIyear" colSpan={3} style={{ background: "#6255a3" }}><span className='badge badge-light-info fs-6 fw-bold'> 2023 </span></th>

                            <th colSpan={2} style={{ background: "#143983", color: "#fff" }}>Line Manager <i className="bi bi-1-square fs-2x px-2 svg-icon-muted" style={{ color: "#fff" }}></i></th>
                            <th colSpan={2} style={{ background: "#143983", color: "#fff" }}>Line Manager <i className="bi bi-2-square fs-2x px-2 svg-icon-muted" style={{ color: "#fff" }}></i> </th>

                        </tr>
                        <tr className="fw-bold fs-6 border-bottom border-gray-200 text-white" style={{ background: "#6255a3" }}>

                            <th><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Question</th>
                            <th>My Rating</th>
                            <th> Comments / Suggestions</th>
                            <th> Rating </th>
                            <th > Comments / Suggestions </th>
                            <th> Rating </th>
                            <th >Comments / Suggestions </th>

                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td className=" fw-bold" style={{ width: "500px", color: "#6255a3" }} >What strategies have you employed to enhance your performance in these areas?</td>
                            <td className="fw-bold">
                                <div className="rating">
                                    <div className="rating">
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>


                                I have no Comments


                            </td>

                            <td>

                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>
                                Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.

                            </td>



                            <td>
                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>


                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>
                                Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.
                            </td>
                        </tr>






                        <tr>
                            <td className=" fw-bold" style={{ width: "500px", color: "#6255a3" }}>Can you share how you believe your current performance aligns with the company's objectives and KPIs?</td>
                            <td className="text-primary fw-bold">
                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>


                                I have no Comments


                            </td>


                            {/* here */}
                            <td>

                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>


                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>


                                has consistently demonstrated an exceptional commitment to achieving their key performance indicators. Their dedication to quality work,
                                proactive problem-solving, and effective collaboration has significantly contributed to our team's overall success.


                            </td>

                            <td>
                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>
                                proactive approach to professional growth, along with their consistent achievements, exemplify their dedication to
                                both personal development and the betterment of our organization.


                            </td>

                        </tr>

                        <tr className='text-success fw-bold gy-3'>
                            <td colSpan={3}></td>
                            <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>
                            <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>

                        </tr>




                        <tr className='text-success fw-bold gy-1' style={{ background: "#143983" }}>
                            <td colSpan={7}></td>
                        </tr>


                        <tr>
                            <td className=" fw-bold" style={{ width: "500px", color: "#6255a3" }} >What strategies have you employed to enhance your performance in these areas?</td>
                            <td className="fw-bold">
                                <div className="rating">
                                    <div className="rating">
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                        <div className="rating-label checked">
                                            <KTSVG
                                                path="/media/icons/duotune/general/gen029.svg"
                                                className="svg-icon svg-icon-1"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>


                                I have no Comments


                            </td>

                            <td>

                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>
                                Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.

                            </td>



                            <td>
                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>


                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>
                                Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.
                            </td>
                        </tr>






                        <tr>
                            <td className=" fw-bold" style={{ width: "500px", color: "#6255a3" }}>Can you share how you believe your current performance aligns with the company's objectives and KPIs?</td>
                            <td className="text-primary fw-bold">
                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>


                                I have no Comments


                            </td>


                            {/* here */}
                            <td>

                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>


                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>


                                has consistently demonstrated an exceptional commitment to achieving their key performance indicators. Their dedication to quality work,
                                proactive problem-solving, and effective collaboration has significantly contributed to our team's overall success.


                            </td>

                            <td>
                                <div className="rating">
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                    <div className="rating-label checked">
                                        <KTSVG
                                            path="/media/icons/duotune/general/gen029.svg"
                                            className="svg-icon svg-icon-1"
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="fw-bold" style={{ width: "500px", color: "#6255a3" }}>
                                proactive approach to professional growth, along with their consistent achievements, exemplify their dedication to
                                both personal development and the betterment of our organization.


                            </td>

                        </tr>

                        <tr className='text-success fw-bold gy-3'>
                            <td colSpan={3}></td>
                            <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>
                            <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>

                        </tr>


                    </tbody>

                </table>

            </div>





            <br></br><br></br><br></br>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-sm" type="button" style={{ background: "#1e6378", color: "#fff" }}><i className="bi bi-save fs-1hx px-3 svg-icon-muted text-white"></i>Save</button>
            </div>

            {/* <h1 className="pb-10 mt-10" style={{color: "#2f574b"}}><i className="bi bi-file-earmark-bar-graph-fill fs-2hx px-1 svg-icon-muted" style={{color: "#2f574b"}}></i>  General Question</h1> */}


            <table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{ background: "#e8e6e6" }}>
                <thead>
                    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white" style={{ background: "#1e6378" }}>

                        <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>Suggestions for ( Appraisal | Bonus |   Incentive ):</th>



                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>

                            <div className="mb-3 w-100">
                                <textarea className="form-control" id="exampleFormControlTextarea1"> Proactive in addressing employee concerns.
                                    Efficiently managed recruitment, reducing time-to-hire.
                                    Implemented engaging training programs.
                                    Demonstrated strong communication skills.
                                    Collaborated effectively with cross-functional teams.</textarea>
                            </div>

                        </td>
                    </tr>

                </tbody>
                <thead>
                    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white" style={{ background: "#1e6378" }}>

                        <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>New Job Responsibilities:</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>

                            <div className="mb-3 w-100">
                                <textarea className="form-control" id="exampleFormControlTextarea1"> Proactive in addressing employee concerns.
                                    Efficiently managed recruitment, reducing time-to-hire.
                                    Implemented engaging training programs.
                                    Demonstrated strong communication skills.
                                    Collaborated effectively with cross-functional teams.</textarea>
                            </div>

                        </td>

                    </tr>

                </tbody>
            </table>



        </>
    );
}

const SummaryKPI: FC = () => {
    return (
        <>
            {/* <PageTitle breadcrumbs={[]}>    </PageTitle> */}
            <SummaryKPIPage />
        </>
    )
}

export { SummaryKPI }