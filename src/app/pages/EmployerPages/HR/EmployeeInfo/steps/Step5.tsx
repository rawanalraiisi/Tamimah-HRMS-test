import React, {FC} from 'react'
import {KTIcon} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'

const Step5: FC = () => {
  
  return (
    <div className='w-100'>


      {/* <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Create Employee Username & Password</h4>
        <div className='text-gray-400 fw-bold fs-7'>
          You need to enter the employee family members details.
        </div>
      </div> */}

      <div className='mb-0'>
        <div className='notice d-flex bg-light-danger rounded border-danger border border-dashed p-5'>
          <KTIcon iconName='information-5' className='fs-1 text-danger me-4' />
          <div className='d-flex flex-stack flex-grow-1'>
            <div className='fw-bold'>
              <h4 className='text-danger fw-bolder fs-6'>You Are Deactivating This Account</h4>
              <div className='fs-8 text-gray-600'>
               Username (Saji1234), Employee Full Name (Saji Babu), Employee ID (023).
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* <div className='form-check form-check-solid fv-row mt-10'>
              <input
                className='form-check-input'
                type='checkbox'
              />
              <label className='form-check-label fw-bold ps-2 fs-6' htmlFor='deactivate'>
                I confirm that I want to deactivate this account
              </label>
            </div> */}


            <div className="form-check form-switch form-check-custom form-check-solid me-10 mt-10">
              <input className="form-check-input h-30px w-50px" type="checkbox" value="" id="flexSwitch40x60"/>
              <label className="form-check-label fw-bold text-primary" htmlFor="flexSwitch40x60">
              Deactivate Account
              </label>
            </div>


    </div>
  )
}

export {Step5}
