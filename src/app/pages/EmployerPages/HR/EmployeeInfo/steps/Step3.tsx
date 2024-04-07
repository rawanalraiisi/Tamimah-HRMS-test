import React, {FC, useState} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {

  // Initialize the state for the textarea value
  const [jobDescription, setjobDescription] = useState('Address employee concerns, Forecast workforce needs and grievances and Foster a positive work environment, Develop and implement performance appraisal systems, Administer employee benefits and compensation., Ensure adherence to labor laws and regulations and Develop succession plans for key roles. Align HR initiatives with business goals.');

  // Create a function to handle changes in the textarea
  const handlejobDescriptionChange = (event: { target: { value: any; }; }) => {
    setjobDescription(event.target.value);
  };
  
  return (
    <div className='w-100'>
      

      <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Job Description & Company Benefits</h4>
      </div>


      <div className='fv-row mb-10'>
      <label className='form-label text-primary fw-bold'><i className="bi bi-person-lines-fill fs-3 svg-icon-muted text-primary me-3"></i>Job Description / Employee Responsibilities</label>
      
        <textarea
          name='businessDescription'
          className='form-control form-control-lg form-control-solid bg-body-secondary fs-7'
          rows={4}
          value={jobDescription}
          onChange={handlejobDescriptionChange}
        />
      </div>


      <div className="d-md-flex justify-content-md-end"> 
      <a className="text-white" data-bs-toggle="collapse" href="#addBenefits" role="button" aria-expanded="false" aria-controls="addBenefits"> 
        <button type="button" className="btn btn-sm btn-primary btn-active-light-primary me-1 fs-8" title='add new benefits'><i className="bi bi-plus-circle fs-4 me-1 svg-icon-muted"></i> Add</button>
      </a>
     
        <button type="button" className="btn btn-sm btn-danger btn-active-light-danger fs-8" title='save all'><i className="bi bi-check-circle fs-4 me-1 svg-icon-muted"></i> save</button>
    
      </div>


      <div className="d-md-flex justify-content-md-center" > 
       <table className="table table-striped table-hover table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gs-7 shadow">
        <thead>
          <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200" style={{backgroundColor: '#143983'}}>
              <th style={{ color: 'white'}}><i className="bi bi-ui-checks-grid fs-3 me-3 svg-icon-muted text-white"></i>Benefit Name</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      checked
                    />
                    <span className='fw-bold ps-2 fs-8'>Medical</span>
                  </label>
                </td>
            </tr>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                    />
                    <span className='fw-bold ps-2 fs-8'>Accommodation</span>
                  </label>
                </td>
            </tr>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      checked
                    />
                    <span className='fw-bold ps-2 fs-8'>Fuel Allowance</span>
                  </label>
                </td>
            </tr>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      checked
                    />
                    <span className='fw-bold ps-2 fs-8'>Car</span>
                  </label>
                </td>
            </tr>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                    />
                    <span className='fw-bold ps-2 fs-8'>Flight Ticket</span>
                  </label>
                </td>
            </tr>
            <div className="collapse py-3" id="addBenefits">
              <tr>
                <td className='text-primary fw-bold'>
                  <div className="form-check form-check-custom form-check-solid">
                  <input className="form-check-input border border-primary" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label">
                  <span className='fw-bold text-danger mt-1 fs-8'><span className="datafield" contentEditable="true">Enter New Benefit Name</span></span>
                  </label>
                 </div>

                </td>
              </tr>
           </div>

        </tbody>
     </table>
    </div>



     

      
    </div>
  )
}

export {Step3}
