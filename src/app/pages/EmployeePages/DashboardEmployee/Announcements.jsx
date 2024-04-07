import axios from "axios";
import { useEffect, useState } from "react";
import useFetchData from "../../../hooks/getData";

export function Announcements() {

    // const [fetchedData, setFetchedData] = useState();
    const [clickedIndex, setClickedIndex] = useState(0)


    const { fetchedData } = useFetchData('getAnnouncements');

    console.log("Fetched Data: from component", fetchedData);

    const filterdData = fetchedData?.filter((data, index) => clickedIndex == index)


    console.log(".............");

    return (
        <div className='accordion-item bg-transparent pb-3 mt-5'>
            <div
                id='collapseExample'
                className='accordion-collapse collapse'
                aria-labelledby='kt_accordion_header_1'
                data-bs-parent='#kt_accordion'
            >
                <div className="card borcard-borderedder  bg-primary-subtle">
                    <div className="card-header ribbon ribbon-top ribbon-vertical">
                        <div className="ribbon-label" style={{ background: "#143983" }}>
                            <i className="bi bi-megaphone-fill fs-1 text-white"></i>
                        </div>
                        <div className="card-title">
                            <div className="card-toolbar pb-2">
                                <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold">

                                    {
                                        fetchedData?.map((data: any, index: any) =>

                                            <li onClick={() => setClickedIndex(index)}
                                                className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    data-bs-toggle="tab"
                                                    href="#kt_tab_pane_7"
                                                >
                                                    {data?.createdAt}
                                                </a>
                                            </li>
                                        )
                                    }



                                    {/* <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#kt_tab_pane_8"
                                        >
                                            7/1/2023
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#kt_tab_pane_9"
                                        >
                                            5/21/2023
                                        </a>
                                    </li> */}


                                </ul>
                            </div>
                        </div>
                    </div>





                    <div className="card-body text-primary fw-bold">
                        <div className="tab-content" id="myTabContent">
                            {
                                filterdData?.map((data, index) =>

                                    <div
                                        className="tab-pane fade show active"
                                        id="kt_tab_pane_7"
                                        role="tabpanel"
                                    >
                                        {data?.textContent}
                                        {/* Tamimah is an entrepreneurial company established in 1984 with its main subsidiaries,
                                        Tamimah Consultancy Group, a pioneer in economics & financial consultancy in the Sultanate
                                        of Oman and Tamimah Telecom & Computer Technology, a technology management company and specializing
                                        in the core technologies of Mobile, Internet and Telecommunications. */}
                                    </div>


                                )
                            }



                            <div
                                className="tab-pane fade"
                                id="kt_tab_pane_8"
                                role="tabpanel"
                            >
                                Tamimah has the privilege of being the first Omani Company to provide IVR & SMS based Solutions in Oman.
                                Our burgeoning technology that is Information Technology is fueling IT needs of Oman by spreading the wings of technology.
                            </div>
                            <div
                                className="tab-pane fade"
                                id="kt_tab_pane_9"
                                role="tabpanel"
                            >
                                Tamimah’s Software solution is now getting spread across the middle-east having it’s already presence in UAE and Qatar.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
