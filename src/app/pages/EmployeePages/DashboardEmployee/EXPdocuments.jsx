import { MixedWidget16 } from '../../../../_metronic/partials/widgets'
import { Box, IconButton } from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetchData from '../../../hooks/getData';


export function EXPdocuments() {

    const [clickedIndex, setClickedIndex] = useState()

    const { fetchedData } = useFetchData('GetExpiredDocuments');

    const filterdArray = fetchedData?.filter((data, index) => index == clickedIndex)

    const newArray = []

    filterdArray?.map((data, index) => { newArray?.push(data?.ExpiredDocuments) })

    return (
        <div className='accordion-item bg-transparent'>
            <div
                id='collapseExample2'
                className='accordion-collapse collapse'
                aria-labelledby='kt_accordion_header_2'
                data-bs-parent='#kt_accordion'
            >
                <div className="card card-body mb-2 text-dark bg-primary-subtle">

                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className='row g-2 g-xl-4 justify-content-md-center'>

                                {
                                    fetchedData?.map((data, index) =>

                                        <a
                                            onClick={() => setClickedIndex(index)}
                                            className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#6_months_EX_table" role="button" aria-expanded="false" aria-controls="6_months_EX_table" data-bs-target="#6_months_EX_table">
                                            <MixedWidget16
                                                className='h-md-20'
                                                chartProgressColor={data?.progresscolor}
                                                chartTrackColor={data?.charttrackcolor}
                                                chartHeight='250px'
                                                chartTitle={data?.ExpiryType}
                                                chartCompleted='11'
                                            // chartTotal='7'
                                            />
                                        </a>

                                    )
                                }


                                <br></br>


                                {/* documents expired in 6 months table */}

                                <div className='accordion accordion-borderless' id='kt_accordion2'>
                                    {/* Accordion Item 1 */}
                                    <div className='accordion-item bg-transparent'>
                                        <div id='6_months_EX_table' className='accordion-collapse collapse' aria-labelledby='kt_accordion2_header_1' data-bs-parent='#kt_accordion2'>

                                            <p className="text-black-50 mb-5 mt-2 fw-bold"><i className="bi bi-dot fs-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Documents That Will Expire Within 6 - 4 Months</p>

                                            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-5 gs-7 bg-white shadow">
                                                <thead>
                                                    <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
                                                        <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
                                                        <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
                                                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
                                                        <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
                                                        <th style={{ width: "15px" }}>View</th>
                                                    </tr>
                                                </thead>
                                                
                                                <tbody>
                                                    {
                                                        newArray?.map((data, index) =>

                                                            JSON.parse(data)?.map((item, index) => {

                                                                console.log("................:", item);

                                                                return (
                                                                    < tr >
                                                                        <td className="text-primary fw-bold">{item?.Name}</td>
                                                                        <td className="text-primary fw-bold">{item?.documentType}</td>
                                                                        <td className="text-primary fw-bold"><span className="badge badge-primary p-2">{item?.expiryDate}</span></td>
                                                                        <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">{item?.expirationstatus}</span></td>
                                                                        <td>
                                                                            <Box sx={{ justifyContent: 'center' }}>
                                                                                <IconButton
                                                                                    onClick={() => {
                                                                                    }}
                                                                                >
                                                                                    <DocumentScanner className='text-primary' />
                                                                                </IconButton>
                                                                            </Box>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })

                                                        )
                                                    }


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}
