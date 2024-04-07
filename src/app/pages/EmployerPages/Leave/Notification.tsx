import { FC, useState } from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import LeaveNotificationTable from '../../../components/LeaveNotificationTable/LeaveNotificationTable'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { IconButton, TextField } from '@mui/material'


const LeaveNotification: FC = () => {
  const [comment, setComment] = useState<String>();
  return (
    <>


      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Pending Leave Request <span className="badge badge-circle badge-danger mx-3">3</span></h5>


      <div className="accordion accordion-icon-toggle" id="kt_accordion_1">
        <div className="card text-white mb-2 mb-xl-5" style={{ backgroundColor: '#143983' }}>
          <div
            className="card-header px-4 d-flex align-items-center justify-content-center"
            style={{
              border: 'none',
            }}
          >
            <div className="symbol symbol-50px">
              <img src={toAbsoluteUrl("/media/avatars/300-20.jpg")} alt="" />
            </div>
            <div
              className='d-flex justify-content-start accordion-header flex-grow-1 m-4'
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_1_item_1"
            >
              <h2 className="text-white fw-bold mx-2 mx-xl-5">
                Reem Ali Mohamed
              </h2>
            </div>
            <div className='m-4'>
              <TextField
                className='text-white'
                fullWidth
                label='Comments'
                id='Comments'
                onChange={(event: any) => setComment(event.target.value)}
                inputProps={{
                  className: 'text-white fs-4'
                }}
                InputLabelProps={{
                  className: 'text-white'
                }}
                sx={{
                  color: 'white', // Text color
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color for the default state
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // Border color when hovering
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // Border color when focused
                    },
                  },
                }}
              />
            </div>
            <div className='m-4'>
              <IconButton
                className='px-2'
                onClick={() => { }}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-success svg-icon-2hx" />
              </IconButton>
              <IconButton
                className='px-2'
                onClick={() => { }}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr015.svg" className="svg-icon-muted text-danger svg-icon-2hx" />
              </IconButton>
            </div>
          </div>
          <div
            id="kt_accordion_1_item_1"
            className="fs-6 collapse ps-10 pe-10"
            data-bs-parent="#kt_accordion_1"
          >
            <div className='d-flex'>
              <div className='flex-grow-1 p-2'>

                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-telephone-fill p-2 text-primary fs-3 "></i> Contact During Leave  </span> 97678776 </h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-buildings-fill p-2 text-primary fs-3"></i>Place of Work  </span> Tamimah Telecom</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-check-all p-2 text-primary fs-2"></i>Leave Type  </span> Annual Leave</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-envelope-at-fill p-2 text-primary fs-3"></i>Mail ID  </span> 103</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-diagram-3-fill p-2 text-primary fs-3"></i>Job Title  </span>HR Manager</h6>


                <button className="btn btn-sm badge badge-danger fw-bold fs-6 mb-3" type="button" title="View Document" >
                  View Submitted Document <i className="bi bi-file-earmark-arrow-down-fill fs-2 mx-2 m-1 text-white"></i>
                </button>



                <h6 className='text-white mb-5'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-chat-left-text-fill text-primary p-2 fs-3"></i>Employee Comments</span></h6>
                <div className="mb-3 w-100">
                  <textarea className="form-control bg-info-subtle bg-opacity-75 text-light fs-7" id="exampleFormControlTextarea1" style={{ height: "110px" }}>
                    I have ensured that my workload is up to date and have informed my team members about my absence.
                    I believe that my absence will not hinder any critical projects, and my colleagues are well-prepared to manage any tasks that might arise in my absence.
                  </textarea>
                </div>

              </div>
              <div className='p-2'>
                <h4 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-calendar2-day-fill p-1 text-primary fs-2"></i> Start Date: 10-10-2023</span></h4>
                <h4 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-calendar2-day-fill p-1 text-primary fs-2"></i> End Date: 15-10-2023</span></h4>
                <h4 className='text-white mb-3'><span className="badge badge-light-danger me-5 fs-6 pe-3"><i className="bi bi-hourglass-top p-1 text-danger fs-2"></i>Duration: 5 Days</span></h4>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion accordion-icon-toggle" id="kt_accordion_2">
        <div className="card text-white mb-2 mb-xl-5" style={{ backgroundColor: '#34a8cb' }}>
          <div
            className="card-header px-4 d-flex align-items-center justify-content-center"
            style={{
              border: 'none',
            }}
          >
            <div className="symbol symbol-50px">
              <img src={toAbsoluteUrl("/media/avatars/300-6.jpg")} alt="" />
            </div>
            <div
              className='d-flex justify-content-start accordion-header flex-grow-1 m-4'
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_2_item_1"
            >
              <h2 className="text-white fw-bold mx-2 mx-xl-5">
                Razan Saeed Alamri
              </h2>
            </div>
            <div className='m-4'>
              <TextField
                className='text-white'
                fullWidth
                label='Comments'
                id='Comments'
                onChange={(event: any) => setComment(event.target.value)}
                inputProps={{
                  className: 'text-white fs-4'
                }}
                InputLabelProps={{
                  className: 'text-white'
                }}
                sx={{
                  color: 'white', // Text color
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color for the default state
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // Border color when hovering
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // Border color when focused
                    },
                  },
                }}
              />
            </div>
            <div className='m-4'>
              <IconButton
                className='px-2'
                onClick={() => { }}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-success svg-icon-2hx" />
              </IconButton>
              <IconButton
                className='px-2'
                onClick={() => { }}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr015.svg" className="svg-icon-muted text-danger svg-icon-2hx" />
              </IconButton>
            </div>
          </div>
          <div
            id="kt_accordion_2_item_1"
            className="fs-6 collapse ps-10 pe-10"
            data-bs-parent="#kt_accordion_2"
          >
            <div className='d-flex'>
              <div className='flex-grow-1 p-2'>

                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-telephone-fill p-2 text-primary fs-3 "></i> Contact During Leave  </span> 97678776 </h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-buildings-fill p-2 text-primary fs-3"></i>Place of Work  </span> Tamimah Telecom</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-check-all p-2 text-primary fs-2"></i>Leave Type  </span> Annual Leave</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-envelope-at-fill p-2 text-primary fs-3"></i>Mail ID  </span> 103</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-diagram-3-fill p-2 text-primary fs-3"></i>Job Title  </span>HR Manager</h6>


                <button className="btn btn-sm badge badge-danger fw-bold fs-6 mb-3" type="button" title="View Document" >
                  View Submitted Document <i className="bi bi-file-earmark-arrow-down-fill fs-2 mx-2 m-1 text-white"></i>
                </button>



                <h6 className='text-white mb-5'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-chat-left-text-fill text-primary p-2 fs-3"></i>Employee Comments</span></h6>
                <div className="mb-3 w-100">
                  <textarea className="form-control bg-info-subtle bg-opacity-75 text-light fs-7" id="exampleFormControlTextarea1" style={{ height: "110px" }}>
                    I have ensured that my workload is up to date and have informed my team members about my absence.
                    I believe that my absence will not hinder any critical projects, and my colleagues are well-prepared to manage any tasks that might arise in my absence.
                  </textarea>
                </div>

              </div>
              <div className='p-2'>
                <h4 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-calendar2-day-fill p-1 text-primary fs-2"></i> Start Date: 10-10-2023</span></h4>
                <h4 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-calendar2-day-fill p-1 text-primary fs-2"></i> End Date: 15-10-2023</span></h4>
                <h4 className='text-white mb-3'><span className="badge badge-light-danger me-5 fs-6 pe-3"><i className="bi bi-hourglass-top p-1 text-danger fs-2"></i>Duration: 5 Days</span></h4>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion accordion-icon-toggle" id="kt_accordion_3">
        <div className="card text-white mb-2 mb-xl-5" style={{ backgroundColor: '#6255a3' }}>
          <div
            className="card-header px-4 d-flex align-items-center justify-content-center"
            style={{
              border: 'none',
            }}
          >
            <div className="symbol symbol-50px">
              <img src={toAbsoluteUrl("/media/avatars/300-15.jpg")} alt="" />
            </div>
            <div
              className='d-flex justify-content-start accordion-header flex-grow-1 m-4'
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_3_item_1"
            >
              <h2 className="text-white fw-bold mx-2 mx-xl-5">
                Kalid Mohammed Alsaidi
              </h2>
            </div>
            <div className='m-4'>
              <TextField
                className='text-white'
                fullWidth
                label='Comments'
                id='Comments'
                onChange={(event: any) => setComment(event.target.value)}
                inputProps={{
                  className: 'text-white fs-4'
                }}
                InputLabelProps={{
                  className: 'text-white'
                }}
                sx={{
                  color: 'white', // Text color
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color for the default state
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // Border color when hovering
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // Border color when focused
                    },
                  },
                }}
              />
            </div>
            <div className='m-4'>
              <IconButton
                className='px-2'
                onClick={() => { }}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-success svg-icon-2hx" />
              </IconButton>
              <IconButton
                className='px-2'
                onClick={() => { }}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr015.svg" className="svg-icon-muted text-danger svg-icon-2hx" />
              </IconButton>
            </div>
          </div>
          <div
            id="kt_accordion_3_item_1"
            className="fs-6 collapse ps-10 pe-10"
            data-bs-parent="#kt_accordion_3"
          >
            <div className='d-flex'>
              <div className='flex-grow-1 p-2'>

                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-telephone-fill p-2 text-primary fs-3 "></i> Contact During Leave  </span> 97678776 </h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-buildings-fill p-2 text-primary fs-3"></i>Place of Work  </span> Tamimah Telecom</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-check-all p-2 text-primary fs-2"></i>Leave Type  </span> Annual Leave</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-envelope-at-fill p-2 text-primary fs-3"></i>Mail ID  </span> 103</h6>
                <h6 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-diagram-3-fill p-2 text-primary fs-3"></i>Job Title  </span>HR Manager</h6>


                <button className="btn btn-sm badge badge-danger fw-bold fs-6 mb-3" type="button" title="View Document" >
                  View Submitted Document <i className="bi bi-file-earmark-arrow-down-fill fs-2 mx-2 m-1 text-white"></i>
                </button>



                <h6 className='text-white mb-5'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-chat-left-text-fill text-primary p-2 fs-3"></i>Employee Comments</span></h6>
                <div className="mb-3 w-100">
                  <textarea className="form-control bg-info-subtle bg-opacity-75 text-light fs-7" id="exampleFormControlTextarea1" style={{ height: "110px" }}>
                    I have ensured that my workload is up to date and have informed my team members about my absence.
                    I believe that my absence will not hinder any critical projects, and my colleagues are well-prepared to manage any tasks that might arise in my absence.
                  </textarea>
                </div>

              </div>
              <div className='p-2'>
                <h4 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-calendar2-day-fill p-1 text-primary fs-2"></i> Start Date: 10-10-2023</span></h4>
                <h4 className='text-white mb-3'><span className="badge badge-light-primary me-5 fs-6 pe-3"><i className="bi bi-calendar2-day-fill p-1 text-primary fs-2"></i> End Date: 15-10-2023</span></h4>
                <h4 className='text-white mb-3'><span className="badge badge-light-danger me-5 fs-6 pe-3"><i className="bi bi-hourglass-top p-1 text-danger fs-2"></i>Duration: 5 Days</span></h4>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const LeaveNotificationPage: FC = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>Notifications</PageTitle> */}
      <LeaveNotification />
    </>
  )
}

export { LeaveNotificationPage }