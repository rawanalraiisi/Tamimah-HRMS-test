import { FC } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit, DocumentScanner } from '@mui/icons-material';

import {
  CardsWidget21,
  CardsWidget30,
  MixedWidget16,
} from '../../../_metronic/partials/widgets'

import {
  TablesWidget1,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
  TablesWidget5,
  TablesWidget6,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
  TablesWidget10,
  TablesWidget11,
  TablesWidget12,
  TablesWidget13,

} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>

    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Admin / Employer Dashbord</h5>



    <div className='d-flex justify-content-start'>
      <div className='col-xl-40 me-5 flex-fill'>
        <TablesWidget8 className='card-xl-stretch mb-5 mb-xl-8' />
      </div>

      <div className='col-md-8 col-lg-2 mt-5'>
        <a className="col-md-4 col-lg-6 col-xl-4 col-xxl-3" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
          <CardsWidget30
            className='h-md-47 mb-5'
            color='#143983'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
            title='Active Employees'
            description='32/40'
          />
        </a>
        <a className="col-md-4 col-lg-6 col-xl-4 col-xxl-3" data-bs-toggle="collapse" href="#1_months_EX_table" role="button" aria-expanded="false" aria-controls="1_months_EX_table">
          <CardsWidget30
            className='h-md-47 mb-5'
            color='#34a8cb'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
            title='Expired Documents'
            description='8'
          />
        </a>
        <a className="col-md-4 col-lg-6 col-xl-4 col-xxl-3" data-bs-toggle="collapse" href="#pending_leave_request" role="button" aria-expanded="false" aria-controls="pending_leave_request">
          <CardsWidget30
            className='h-md-47'
            color='#831414'
            img={toAbsoluteUrl('/media/patterns/vector-1.png')}
            title='Pending Leaves'
            description='3'
          />
        </a>
      </div>

    </div>




    <div className="d-md-flex justify-content-md-center" >
      <div className="collapse w-100" id="collapseExample5">
        <table className="table table-striped table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-5 gs-7 bg-white shadow">
          <thead>
            <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200" style={{ backgroundColor: '#143983' }}>
              <th style={{ color: 'white' }}><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Active Employees</th>
              <th style={{ color: 'white' }}><i className="bi bi-building-fill fs-3 me-2 svg-icon-muted text-white"></i>TT / TD</th>
              <th style={{ color: 'white' }}><i className="bi bi-flag-fill fs-3 me-2 svg-icon-muted text-white"></i>Country</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-primary fw-bold'>Zubair</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Balqees</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Arjun</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Maya</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Shyjel</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Zainab</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Hyder</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Abdulaziz</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
            <tr>
              <td className='text-primary fw-bold'>Meera</td>
              <td className='text-primary fw-bold'>TT</td>
              <td className='text-primary fw-bold'>Oman</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>









    {/* documents expired in 1 month table */}
    <div className="collapse" id="1_months_EX_table">
      <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
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
          <tr>
            <td className="text-primary fw-bold">Ali</td>
            <td className="text-primary fw-bold">Visa</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">10/1/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 30 Days</span></td>
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
          <tr>
            <td className="text-primary fw-bold">Sara</td>
            <td className="text-primary fw-bold">Passport</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">10/6/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 31 Days</span></td>
            <td className="">
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
        </tbody>
      </table>
    </div>




    {/* pending table */}
    <div className="collapse" id="pending_leave_request">
      <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
        <thead>
          <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
            <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
            <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>
            <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Duration</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-primary fw-bold">Ali</td>
            <td className="text-primary fw-bold">Annual</td>
            <td className="text-primary fw-bold"><span className="badge badge-light-danger p-2">5 Days</span></td>
          </tr>
          <tr>
            <td className="text-primary fw-bold">Sara</td>
            <td className="text-primary fw-bold">Annual</td>
            <td className="text-primary fw-bold"><span className="badge badge-light-danger p-2">5 Days</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="card borcard-borderedder mb-10" >
      <div className="card-header ribbon ribbon-top ribbon-vertical bg-primary-subtle">
        <div className="ribbon-label" style={{ background: "#143983" }}>
          <i className="bi bi-megaphone-fill fs-1 text-white"></i>
        </div>
        <div className="card-title">
          <h3 className='card-title align-items-start px-5'>
            <span className='card-label fw-bold fs-3 mb-1 text-primary'> Add Announcements</span>
          </h3>

          <pre></pre><br></br>


          <div className="card-toolbar">
            <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_7"
                >
                  7/11/2023
                </a>
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#kt_tab_pane_10"
                >

                  <div className='add-Announcements'>
                    <div className="d-flex justify-content-end pb-1">
                      <a className="text-white" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExampleAnnouncemant">
                        <button type="button" className="btn btn-primary btn-sm">+ Add</button>
                      </a>
                    </div>
                  </div>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



      <div className="card-body text-primary fw-bold bg-primary-subtle" >
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="kt_tab_pane_7"
            role="tabpanel"
          >
            <span className="datafield text-primary" contentEditable="true">
              Tamimah is an entrepreneurial company established in 1984 with its main subsidiaries,
              Tamimah Consultancy Group, a pioneer in economics & financial consultancy in the Sultanate
              of Oman and Tamimah Telecom & Computer Technology, a technology management company and specializing
              in the core technologies of Mobile, Internet and Telecommunications.
            </span>
            <div className='edit-Announcements'>
              <div className="d-flex justify-content-end pb-1">

                <button type="button" className="btn btn-primary btn-sm m-2">save</button>
                <button type="button" className="btn btn-danger btn-sm m-2">Delete</button>

              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_tab_pane_8"
            role="tabpanel"
          >
            <span className="datafield text-primary" contentEditable="true">
              Tamimah is an entrepreneurial company established in 1984 with its main subsidiaries,
              Tamimah Consultancy Group, a pioneer in economics & financial consultancy in the Sultanate
              of Oman and Tamimah Telecom & Computer Technology, a technology management company and specializing
              in the core technologies of Mobile, Internet and Telecommunications.
            </span>
            <div className='edit-Announcements'>
              <div className="d-flex justify-content-end pb-1">

                <button type="button" className="btn btn-primary btn-sm m-2">save</button>
                <button type="button" className="btn btn-danger btn-sm m-2">Delete</button>

              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="kt_tab_pane_9"
            role="tabpanel"
          >
            <span className="datafield text-primary" contentEditable="true">
              Tamimah is an entrepreneurial company established in 1984 with its main subsidiaries,
              Tamimah Consultancy Group, a pioneer in economics & financial consultancy in the Sultanate
              of Oman and Tamimah Telecom & Computer Technology
            </span>
            <div className='edit-Announcements'>
              <div className="d-flex justify-content-end pb-1">

                <button type="button" className="btn btn-primary btn-sm m-2">save</button>
                <button type="button" className="btn btn-danger btn-sm m-2">Delete</button>

              </div>
            </div>
          </div>


          <div
            className="tab-pane fade"
            id="kt_tab_pane_10"
            role="tabpanel"
          >
            <div className='justify-content-md-center'>
              <div className='row g-2 g-xl-4 justify-content-md-center'>     {/* justify-content-md-center */}

                {/* begin::Col */}

                <div className='col-xl-10 position-relative'>
                  <textarea
                    className='form-control border-1 pe-5 resize-none min-h-100px'
                    data-kt-autosize='true'
                    rows={6}
                    placeholder='Enter Announcement Details'
                  ></textarea>
                  <button type="button" className="btn btn-outline-primary border border-primary w-100 mt-2" style={{ backgroundColor: '#143983', color: 'white' }}>Send Announcement</button>
                </div>
                {/* end::Col */}


              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



  </>
)

const EmployerDashboard: FC = () => {
  const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}

export { EmployerDashboard }