import React, {FC, useState} from 'react'
import {KTIcon} from '../../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step2: FC = () => {

  //Form input values 
  const [EmployeeID, setEmployeeID] = useState('033'); // Initial value

  // Handle changes to the first name input
    const handleEmployeeIDChange = (event: { target: { value: React.SetStateAction<string> } }) => {
      setEmployeeID(event.target.value);
    };

  
  //Form input values 
  const [PlaceOfWork, setPlaceOfWork] = useState('TM'); // Initial value

  // Handle changes to the first name input
    const handlePlaceOfWorkChange = (event: { target: { value: React.SetStateAction<string> } }) => {
      setPlaceOfWork(event.target.value);
    };


    //Form input values 
  const [CarInsurance, setCarInsurance] = useState('8277272'); // Initial value

  // Handle changes to the first name input
    const handleCarInsuranceChange = (event: { target: { value: React.SetStateAction<string> } }) => {
      setCarInsurance(event.target.value);
    };

      //Form input values 
  const [VisaType, setVisaType] = useState('TM'); // Initial value

  // Handle changes to the first name input
    const handleVisaTypeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
      setVisaType(event.target.value);
    };

      //Form input values 
      const [AccessDoorNumber, setAccessDoorNumber] = useState('123'); // Initial value

      // Handle changes to the first name input
        const handleAccessDoorNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setAccessDoorNumber(event.target.value);
        };
    
        //Form input values 
        const [VisaNumber, setVisaNumber] = useState('13456282'); // Initial value

        // Handle changes to the first name input
          const handleVisaNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setVisaNumber(event.target.value);
          };

      //Form input values 
        const [Department, setDepartment] = useState('Information Technology'); // Initial value

        // Handle changes to the first name input
          const handleDepartmentChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setDepartment(event.target.value);
          };
      
      //Form input values 
      const [InternalJobTitle, setInternalJobTitle] = useState('IT Specialist'); // Initial value

      // Handle changes to the first name input
        const handleInternalJobTitleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setInternalJobTitle(event.target.value);
        };

          //Form input values 
          const [MPJobTitle, setMPJobTitle] = useState('IT Specialist'); // Initial value

          // Handle changes to the first name input
            const handleMPJobTitleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
              setMPJobTitle(event.target.value);
            };
        

          //Form input values 
          const [TotalSalary, setTotalSalary] = useState('800'); // Initial value

          // Handle changes to the first name input
            const handleTotalSalaryChange = (event: { target: { value: React.SetStateAction<string> } }) => {
              setMPJobTitle(event.target.value);
            };

        //Form input values 
          const [BasicSalary, setBasicSalary] = useState('1900'); // Initial value

          // Handle changes to the first name input
            const handleBasicSalaryChange = (event: { target: { value: React.SetStateAction<string> } }) => {
              setBasicSalary(event.target.value);
            };
  

        //Form input values 
        const [Email, setEmail] = useState('saji@gmail.com'); // Initial value

        // Handle changes to the first name input
          const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setEmail(event.target.value);
          };

        //Form input values 
          const [Position, setPosition] = useState('IT Manager'); // Initial value

          // Handle changes to the first name input
            const handlePositionChange = (event: { target: { value: React.SetStateAction<string> } }) => {
              setPosition(event.target.value);
            };

        //Form input values 
        const [EmployeeStatus, setEmployeeStatus] = useState('TM'); // Initial value

        // Handle changes to the first name input
          const handleEmployeeStatusChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setEmployeeStatus(event.target.value);
          };

        //Form input values 
        const [HealthInsurance, setHealthInsurance] = useState('228288222'); // Initial value

        // Handle changes to the first name input
          const handleHealthInsuranceChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setHealthInsurance(event.target.value);
          };

          
        //Form input values 
        const [WorkStatus, setWorkStatus] = useState('Active'); // Initial value

        // Handle changes to the first name input
          const handleWorkStatusChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setWorkStatus(event.target.value);
          };

       //Form input values 
        const [Division, setDivision] = useState('Software Engineer'); // Initial value

        // Handle changes to the first name input
          const handleDivisionChange = (event: { target: { value: React.SetStateAction<string> } }) => {
            setDivision(event.target.value);
          };



 // Date Values
        // Initialize the state for the date input
        const [dateValue, setDateValue] = useState('2024-08-19');
      
        // Function to handle changes in the date input
        const handleDateChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          // Update the state with the new date value
          setDateValue(event.target.value);
        };

  return (
    <div className='w-100'>
      
      <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Corporate Details</h4>
      </div>
           
       
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Employee ID</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid fs-7 bg-body-secondary" aria-label="Select example"
              value={EmployeeID}
              onChange={handleEmployeeIDChange}>
                {[...Array(999)].map((_, index) => (
                  <option key={index + 1} value={String(index + 1).padStart(3, '0')}>
                    {String(index + 1).padStart(3, '0')}
                  </option>
                ))}
              </select>

              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Date Of joining</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Workplace</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      value={PlaceOfWork} // Bind the value to the state
                      onChange={handlePlaceOfWorkChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Car Insurance Policy no.</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={CarInsurance} // Bind the value to the state
                      onChange={handleCarInsuranceChange} // Handle changes in the input
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
                      value={VisaType} // Bind the value to the state
                      onChange={handleVisaTypeChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Access Door Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={AccessDoorNumber} // Bind the value to the state
                      onChange={handleAccessDoorNumberChange} // Handle changes in the input
                    />
              </div>
            </div>



            

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Exp date</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Number</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={VisaNumber} // Bind the value to the state
                      onChange={handleVisaNumberChange} // Handle changes in the input
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Department </label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={Department} // Bind the value to the state
                      onChange={handleDepartmentChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Internal Job Title</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={InternalJobTitle} // Bind the value to the state
                      onChange={handleInternalJobTitleChange} // Handle changes in the input
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'> MP JobTitle</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={MPJobTitle} // Bind the value to the state
                      onChange={handleMPJobTitleChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>MP Joining Date</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
            </div>

              <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Total Salary </label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={TotalSalary} // Bind the value to the state
                      onChange={handleTotalSalaryChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Basic Salary</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={BasicSalary} // Bind the value to the state
                      onChange={handleBasicSalaryChange} // Handle changes in the input
                    />
              </div>
            </div>
            
           
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Position</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={Position} // Bind the value to the state
                      onChange={handlePositionChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={HealthInsurance} // Bind the value to the state
                      onChange={handleHealthInsuranceChange} // Handle changes in the input
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Email ID</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='email'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={Email} // Bind the value to the state
                      onChange={handleEmailChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Division</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid fs-7 bg-body-secondary" aria-label="Select example"
              value={Division} // Bind the value to the state
              onChange={handleDivisionChange} // Handle changes in the input 
              >
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
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Contract (From)  </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-8 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>(To)</label>
              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Employee Work Status</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid fs-7 bg-body-secondary" aria-label="Select example"
               value={WorkStatus} // Bind the value to the state
               onChange={handleWorkStatusChange} // Handle changes in the input 
               >
              <option value="On Leave">On Leave</option>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
              <option value="Retired">Retired</option>
              </select>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>ID access door card no.</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={VisaNumber} // Bind the value to the state
                      onChange={handleVisaNumberChange} // Handle changes in the input
                    />
              </div>
            </div>



    </div>
  )
}

export {Step2}
