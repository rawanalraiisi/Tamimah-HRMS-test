import React, {FC} from 'react'
import {KTIcon} from '../../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
     
      
      <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Employee Corporate Details</h4>

        <div className='text-gray-400 fw-bold fs-7'>
          You need to enter all the information for the employee that is related to the organisation.
          {/* <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a> */}
          
        </div>
      </div>
           
       
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Employee ID <span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid fs-7 bg-body-secondary" aria-label="Select example">
                {[...Array(300)].map((_, index) => (
                  <option key={index + 1} value={String(index + 1).padStart(3, '0')}>
                    {String(index + 1).padStart(3, '0')}
                  </option>
                ))}
              </select>

              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Date Of joining<span className='text-danger'>*</span></label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Workplace<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder='Ooredoo, TM, TD'
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Car Insurance Policy no.</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Access Door Number<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>



            

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Exp date<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Number<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Department<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Internal Job Title<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'> MP JobTitle<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>MP Joining Date<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>

              <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Total Salary<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Basic Salary<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>
            
           
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Position<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Health Insurance Policy no.<span className='text-danger'>*</span></label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Email ID<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='email'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Division<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid fs-7 bg-body-secondary" aria-label="Select example">
              <option value="Admin">Admin</option>
              <option value="Finance">Finance</option>
              <option value="Accounts">Accounts</option>
              <option value="HR">HR</option>
              <option value="Mass support">Mass support</option>
              <option value="Public relation Officer">Public relation Officer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Project Management">Project Management</option>
              <option value="Support Engineer">Support Engineer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Programmer">Programmer</option>
              <option value="Data Entry">Data Entry</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Graphic Designer">Graphic Designer</option>
              </select>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Contract (From)<span className='text-danger'>*</span></label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-8 bg-body-secondary'
                      placeholder=''
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>(To)<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Employee Work Status<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid fs-7 bg-body-secondary" aria-label="Select example">
              <option value="On Leave">On Leave</option>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
              <option value="Retired">Retired</option>
              </select>
              </div>
              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>ID access door card no.<span className='text-danger'>*</span></label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>



    </div>
  )
}

export {Step2}
