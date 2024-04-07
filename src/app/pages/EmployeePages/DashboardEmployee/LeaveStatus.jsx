import React, { useEffect, useState } from 'react';
import { MixedWidget16 } from '../../../../_metronic/partials/widgets';
import useFetchData from '../../../hooks/getData';

export function LeaveStatus() {
  const [sickLeaveData, setSickLeaveData] = useState([
    { leaveType: 'Sick Leave', firstDay: '7/22/2023', returnDate: '8/22/2023' },
    { leaveType: 'Sick Leave', firstDay: '6/6/2023', returnDate: '8/22/2023' },
    { leaveType: 'Sick Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
    { leaveType: 'Sick Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
    { leaveType: 'Sick Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
  ]);

  const { fetchedData } = useFetchData('getLeaveStatus');
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(3);
  const [clickedItem, setClickedItem] = useState()


  useEffect(() => {
    if (fetchedData) {
      setStartingIndex(0);
      setEndingIndex(3);
    }
  }, [fetchedData]);

  console.log("clickedItem.....:", clickedItem);

  const filterdArray = fetchedData?.filter((data, index) => clickedItem === index)

  console.log("filterdArray...................:", filterdArray);

  const newArray = []

  filterdArray?.map((data, index) => { newArray?.push(data) })

  console.log("newArray.............:", newArray);


  return (
    <div className='accordion-item bg-transparent pb-2'>
      <div
        id='collapseExample3'
        className='accordion-collapse collapse'
        aria-labelledby='kt_accordion_header_3'
        data-bs-parent='#kt_accordion'
      >
        <div className="card card-body mb-2 bg-primary-subtle">
          <div className="card-body">

            <div className="tab-content" id="myTabContent">
              <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark slide" data-bs-touch="false">
                <div className="carousel-inner pt-5">
                  {fetchedData?.map((data, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} bg-transparent`}>
                      <div className='row g-2 g-xl-4 justify-content-md-center'>
                        <div
                          onClick={() => setClickedItem(index)}
                          className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                          <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Sick_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Sick_Leave_Dates_Table">
                            <MixedWidget16
                              className='h-md-20 mb-5 mb-xl-10'
                              chartProgressColor='#143983'
                              chartTrackColor='#BFCAE2'
                              chartHeight='250px'
                              chartTitle={data?.policytitle}
                              chartCompleted={data?.totalcount}
                              chartTotal={data?.availablecount}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Carousel controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                  <div className='card p-3'>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                  <div className='card p-3'>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="d-md-flex justify-content-md-center">
              <div className="collapse w-50" id="Sick_Leave_Dates_Table">

              


                <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 bg-white gy-5 gs-7 shadow">
                  <thead>
                    <tr className="fw-bold fs-5 bg-primary rounded text-white">
                      <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>
                      <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>First day of Leave:</th>
                      <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Return to work date:</th>
                    </tr>
                  </thead>
                  <tbody>





                    AAAAAAAAAAAAAAA
                    {/* {tableLIstingArray.map((item, index) => {

                      console.log("???????????????iten>..............:", typeof (item));


                    })

                      // return (

                      //   <tr key={index}>
                      //     <td className="text-primary fw-bold">{item?.leaveType}</td>
                      //     <td className="text-primary fw-bold"><span className="badge badge-primary p-2">{2}</span></td>
                      //     <td className="text-primary fw-bold"><span className="badge badge-light-primary p-2">{3}</span></td>
                      //   </tr>

                      // )
                    } */}

                  </tbody>
                </table>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}















// import React, { useState, useEffect } from 'react';
// import { MixedWidget16 } from '../../../../_metronic/partials/widgets';
// import useFetchData from '../../../hooks/getData';

// export function LeaveStatus() {
// const { fetchedData } = useFetchData('getLeaveStatus');
// const [startingIndex, setStartingIndex] = useState(0);
// const [endingIndex, setEndingIndex] = useState(3);
// const [clickedItem, setClickedItem] = useState()


// useEffect(() => {
//   if (fetchedData) {
//     setStartingIndex(0);
//     setEndingIndex(3);
//   }
// }, [fetchedData]);

// const paginationArr = fetchedData?.slice(startingIndex, endingIndex);

// console.log("clickedItem.....:", clickedItem);

// const filterdArray = fetchedData?.filter((data, index) => data?.policytitle == clickedItem)


// const newArray = []

// filterdArray?.map((data, index) => { newArray?.push(data?.leaveDetails) })

// console.log("newArray...........;", newArray);

//   return (
//     <div className='accordion-item bg-transparent pb-2'>
//       <div
//         id='collapseExample3'
//         className='accordion-collapse collapse'
//         aria-labelledby='kt_accordion_header_3'
//         data-bs-parent='#kt_accordion'
//       >
//         <div className="card card-body mb-2 bg-primary-subtle">
//           <div className="card-body">
//             <div className="tab-content" id="myTabContent">
//               <div id="carouselExampleControlsNoTouching" className="carousel carousel-dark slide" data-bs-touch="false">
//                 <div className="carousel-inner pt-5">
//                   {paginationArr && paginationArr.map((data, index) => (
//                     <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} bg-transparent`}>
//                       <div className='row g-2 g-xl-4 justify-content-md-center'>
//                         <div
//                           onClick={() => setClickedItem(data?.policytitle)}
//                           className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
//                           <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Sick_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Sick_Leave_Dates_Table">
//                             <MixedWidget16
//                               className='h-md-20 mb-5 mb-xl-10'
//                               chartProgressColor='#143983'
//                               chartTrackColor='#BFCAE2'
//                               chartHeight='250px'
//                               chartTitle={data?.policytitle}
//                               chartCompleted={data?.totalcount}
//                               chartTotal={data?.availablecount}
//                             />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 {/* Carousel controls */}
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
//                   <div className='card p-3'>
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                   </div>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
//                   <div className='card p-3'>
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
