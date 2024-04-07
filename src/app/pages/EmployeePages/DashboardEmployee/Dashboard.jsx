// import { FC } from 'react'
// import { toAbsoluteUrl } from '../../../../_metronic/helpers'
// import { CardsWidget21, } from '../../../../_metronic/partials/widgets'

// import { Announcements } from './Announcements';
// import { EXPdocuments } from './EXPdocuments';
// import { LeaveStatus } from './LeaveStatus';

// const DashboardWrapper: FC = () => {
//   return <>

//     <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Dashboard</h5>

//     <div className='row g-3 g-md-5 g-xl-10 d-flex justify-content-center'>
//       {/* begin::Col 1 */}
//       <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-md-4 text-white'>
//         <a className="text-white" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" data-bs-target="#collapseExample">
//           <CardsWidget21
//             className='h-md-30 mb-1 mb-xl-1 p-2 h-100'
//             color='#6255a3'
//             img={toAbsoluteUrl('/media/patterns/vector-1.png')}
//             title='View All The Latest Announcements'
//             description='Announcements'
//             url='#'
//           />
//         </a>
//       </div>

//       {/* begin::Col 2 */}
//       <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-md-4 text-white'>
//         <a className="text-white" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" data-bs-target="#collapseExample2">
//           <CardsWidget21
//             className='h-md-30 mb-1 mb-xl-1 p-2 h-100'
//             color='#143983'
//             img={toAbsoluteUrl('/media/patterns/vector-1.png')}
//             title='View All Your Expired Documents'
//             description='Expiring Documents'
//             url='#'
//           />
//         </a>
//       </div>

//       {/* begin::Col 3 */}
//       <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-md-4 text-white'>
//         <a className="text-white" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" data-bs-target="#collapseExample3">
//           <CardsWidget21
//             className='h-md-30 mb-1 mb-xl-1 p-2 h-100'
//             color='#34a8cb'
//             img={toAbsoluteUrl('/media/patterns/vector-1.png')}
//             title='View All Your Leaves Status'
//             description='Leave Status'
//             url='#'
//           />
//         </a>
//       </div>
//     </div>


//     <div className='accordion accordion-borderless' id='kt_accordion'>
//       <Announcements />
//       <EXPdocuments />
//       <LeaveStatus />
//     </div>

//   </>
//     ;


// }

// export { DashboardWrapper }

import { toAbsoluteUrl } from '../../../../_metronic/helpers';
import { CardsWidget21 } from '../../../../_metronic/partials/widgets';

import { Announcements } from './Announcements';
import { EXPdocuments } from './EXPdocuments';
import { LeaveStatus } from './LeaveStatus';

const DashboardWrapper = () => (
  <>
    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Dashboard</h5>

    <div className='row g-3 g-md-5 g-xl-10 d-flex justify-content-center'>
      {/* begin::Col 1 */}
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-md-4 text-white'>
        <a className="text-white" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" data-bs-target="#collapseExample">
          <CardsWidget21
            className='h-md-30 mb-1 mb-xl-1 p-2 h-100'
            color='#6255a3' 
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
            title='View All The Latest Announcements'
            description='Announcements'
            url='#'
          />
        </a>
      </div>

      {/* begin::Col 2 */}
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-md-4 text-white'>
        <a className="text-white" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" data-bs-target="#collapseExample2">
          <CardsWidget21
            className='h-md-30 mb-1 mb-xl-1 p-2 h-100'
            color='#143983'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
            title='View All Your Expired Documents'
            description='Expiring Documents'
            url='#'
          />
        </a>
      </div>

      {/* begin::Col 3 */}
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 mb-md-4 text-white'>
        <a className="text-white" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" data-bs-target="#collapseExample3">
          <CardsWidget21
            className='h-md-30 mb-1 mb-xl-1 p-2 h-100'
            color='#34a8cb'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
            title='View All Your Leaves Status'
            description='Leave Status'
            url='#'
          />
        </a>
      </div>
    </div>

    <div className='accordion accordion-borderless' id='kt_accordion'>
      <Announcements />
      <EXPdocuments />
      <LeaveStatus />
    </div>
  </>
);

export { DashboardWrapper };
