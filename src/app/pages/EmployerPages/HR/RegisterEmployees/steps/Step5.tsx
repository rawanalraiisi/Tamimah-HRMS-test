import React, {FC} from 'react'
import {KTIcon} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'

const Step5: FC = () => {
  return (
    <div className='w-100'>


      <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Create Employee Username & Password</h4>
      </div>

      <div className='mb-0'>
        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-4'>
          <KTIcon iconName='information-5' className='fs-1 text-warning me-4' />
          <div className='d-flex flex-stack flex-grow-1'>
            <div className='fw-bold'>
              <h4 className='text-gray-800 fw-bolder fs-6'>Note!</h4>
              <div className='fs-8 text-gray-600'>
                An email and a SMS message will be sent to the employee which contains his username and password.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row mb-5 mt-10'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'><i className="bi bi-person-fill fs-3 me-2"></i>Username</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'><i className="bi bi-lock-fill fs-3 me-2"></i>Password</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


    </div>
  )
}

export {Step5}
