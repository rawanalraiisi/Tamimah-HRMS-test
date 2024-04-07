import React, { useState, useRef } from 'react';
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers';
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../../../modules/accounts/components/settings/SettingsModel';
import { Formik, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import useFetchCommon from '../../../hooks/getCommonData';
import axios from 'axios';
// import { setEnvironmentData } from 'worker_threads';


const validate = (values: { contactDuringLeave: any }) => {

  const errors: { contactDuringLeave?: string } = {};

  if (!values.contactDuringLeave) {
    errors.contactDuringLeave = 'Required Field, Please enter your contact number during leave.';

  } else if (!/^\d+$/.test(values.contactDuringLeave)) {
    errors.contactDuringLeave = 'Only numbers are allowed.';

  } else if (values.contactDuringLeave.length > 13) {
    errors.contactDuringLeave = 'Must be 13 characters or less';
  }

  return errors;
};





const Requestleaves = () => {
  // Terms and conditions variables
  const [showInitialText, setShowInitialText] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [policyId, setPolicyId] = useState();
  const [selectedTicket, seTSelectedTicket] = useState('');

  const [startedDate, setStartedDate] = useState();
  const [endedDate, setEndedDate] = useState();

  const toggleContent = () => {
    setShowInitialText(false);
    setShowAdditionalInfo(true);
  };

  const dropDownData = useFetchCommon('getLeaveTypes').commonDataFetch

  const headers = {
    'token': '2ccff43ecfb-6cab-440b-95fa-d',
    'Content-Type': 'application/json'
  };

  const [dateState, setDateState] = useState({
    startDate: null,
    endDate: null,
    selectedDays: 0 // New state to store the number of selected days
  });
  const inputRef = useRef < HTMLInputElement > (null);



  const handleDateRangeChange = (event: any, picker: { startDate: { toDate: () => any; }; endDate: { toDate: () => any; }; }) => {
    const startDate = new Date(picker.startDate.toDate()).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });

    const endDate = new Date(picker.endDate.toDate()).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    setStartedDate(startDate);
    setEndedDate(endDate)

    // Calculate the difference in milliseconds between the start and end dates
    const differenceInMs = endDate.getTime() - startDate.getTime();
    // Convert the difference to days
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    setDateState({
      startDate: startDate,
      endDate: endDate,
      selectedDays: differenceInDays // Update the number of selected days
    });

    if (inputRef.current) {
      inputRef.current.value = formatDateRange(startDate, endDate);
    }
  };

  const formatDateRange = (startDate: Date | null, endDate: Date | null) => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()} (${dateState.selectedDays} days)`;
    }
    return '';
  };


  const handleRadioChange = (event) => {
    seTSelectedTicket(event.target.value);
  };

  const [base64String, setBase64String] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;
      setBase64String(base64);
    };

    // Read the file as a data URL (Base64)
    reader.readAsDataURL(file);
  };

  console.log("base64String................:", base64String);



  // Formik configurations
  const formik = useFormik({
    initialValues: {
      contactDuringLeave: '',
      policyId: '',
      comments: '',
      dates: ''
    },
    validate,
    onSubmit: values => {
      console.log("Form Valuse..............;", values);
      axios.post('https://wpr.intertoons.net/hrmsapi/', {
        "sp": "insLeaveRequest",
        "userId": 9,
        "contactDuringLeave": values?.contactDuringLeave,
        "startDate": startedDate,
        "endDate": endedDate,
        "policyId": policyId,
        "documentPath": base64String,
        "reason": values?.comments
      }, { headers }).then((res) => { console.log("result", res); })
    },
  });


  return (
    <>



      {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" >
          <div className="modal-header">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <img src={toAbsoluteUrl('/media/logos/T-colour.png')} className="rounded me-2" alt="..." width="30px" height="30px" />
                <h1 className="modal-title fs-5 text-body-secondary fw-bold mx-2" id="staticBackdropLabel">Tamimah Telecom</h1>
              </div>
              <small className="text-black-50 mx-2">1 minute ago</small>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-black-50 fw-bold">
            Your leave request has been submitted successfully. Please wait for the approval from the management. Thank you.
          </div>
        </div>
      </div>
    </div> */}




      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Request New Leave </h5>
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center">
          <div className='card mb-5 mb-xl-10 w-75'>
            <div
              className='card-header border-0 cursor-pointer bg-primary'
              role='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_account_profile_details'
              aria-expanded='true'
              aria-controls='kt_account_profile_details'

            >
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0 text-white'>Request Leave</h3>
              </div>
            </div>
            <div id='kt_account_profile_details' className='collapse show'>
              <form onSubmit={formik.handleSubmit} className='form'>
                <div className='card-body border-top p-9 text-primary'>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'>
                        <i className="bi bi-telephone-fill text-primary me-3 fs-3"></i>Contact During Leave
                      </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <input
                            id='ContactDuringLeave'
                            name='contactDuringLeave'
                            type='number'
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.contactDuringLeave}
                          />
                          {formik.touched.contactDuringLeave && formik.errors.contactDuringLeave && (
                            <div className="text-danger fw-bold fs-8">{formik.errors.contactDuringLeave}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'>
                        <i className="bi bi-calendar-check text-primary me-3 fs-2"></i> Date (Starting Date - Return to Office Date)
                      </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-12 fv-row'>
                          <DateRangePicker
                            initialSettings={{
                              autoUpdateInput: false
                            }}
                            onApply={handleDateRangeChange}
                          >
                            <input
                              className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                              type="text"
                              readOnly={true}
                              ref={inputRef}
                              name='dates'
                              // value={formik.values.contactDuringLeave}
                              value={formatDateRange(dateState.startDate, dateState.endDate)}
                            />
                          </DateRangePicker>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'> <i className="bi bi-collection text-primary me-3 fs-2"></i> Select Leave Type</span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>

                          <select
                            onChange={(event) => setPolicyId(event.target.value)}
                            className="form-select form-select-solid bg-body-secondary border border-primary" aria-label="Select example">

                            {
                              dropDownData?.map((data, index) =>
                                <option value={data?.policyid}>{data?.policyTitle}</option>

                              )
                            }



                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='text-primary'> <i className="bi bi-file-earmark-check-fill  text-primary me-3 fs-2"></i> Upload Document </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <input
                            type='file'
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary fs-6'
                            placeholder=''
                            onChange={handleFileInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='text-primary'><i className="bi bi bi-text-left text-primary me-3 fs-2 "></i>Other / Comments </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <textarea
                            className="form-control bg-body-secondary border border-primary"
                            name='comments'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.comments}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'> <i className="bi bi-airplane-fill text-primary me-3 fs-2"></i>AriLine Ticket </span>
                    </label>


                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-3 fv-row'>
                          <div className="form-check">
                            <input
                              className="form-check-input border border-primary"
                              type="radio"
                              value="Company"
                              id="radio1"
                              onChange={handleRadioChange}
                              checked={selectedTicket === 'Company'}
                            />
                            <label className="form-check-label fw-bold" htmlFor="radio1">
                              Company
                            </label>
                          </div>
                        </div>
                        <div className='col-lg-3 fv-row'>
                          <div className="form-check">
                            <input
                              className="form-check-input border border-primary"
                              type="radio"
                              value="Self"
                              id="radio2"
                              onChange={handleRadioChange}
                              checked={selectedTicket === 'Self'}
                            />
                            <label className="form-check-label fw-bold" htmlFor="radio2">
                              Self
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-3 fv-row'>
                          <div className="form-check">
                            <input className="form-check-input border border-primary" type="checkbox" value="" id="checkbox1" />
                            <label className="form-check-label fw-bold " htmlFor="checkbox1">
                              Company
                            </label>
                          </div>
                        </div>
                        <div className='col-lg-3 fv-row'>
                          <div className="form-check">
                            <input className="form-check-input border border-primary" type="checkbox" value="" id="checkbox2" />
                            <label className="form-check-label fw-bold " htmlFor="checkbox2">
                              Self
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> */}














                  </div>

                  <div className="container-fluid mt-5">
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                      <div className="d-flex flex-stack flex-grow-1">
                        <div className="fw-bold">
                          <div className="fs-7 text-gray-600">
                            {showInitialText && (
                              <>
                                <div className='me-50'>
                                  {showInitialText && (
                                    <>
                                      <a href="#"
                                        className="btn btn-icon btn-active-light-primary pulse pulse-primary me-3" onClick={toggleContent}>
                                        <i className="bi-shield-fill-exclamation fs-1 text-primary"></i>
                                        <span className="pulse-ring"></span>
                                      </a>
                                      <span className='text-primary fs-6'>View Terms & Conditions</span>
                                    </>
                                  )}
                                </div>
                              </>
                            )}
                            {showAdditionalInfo && (
                              <>
                                <div className="d-flex flex-column me-10" id="additional-info">
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span><span>The 30-day calculation of leave period excludes the initial and final weekends. This adjustment applies if you start your leave on Thursday night and resume work on Sunday morning. If your leave overlaps with a public holiday, it will be included in your annual leave calculation.</span>
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span><span>Employees must ensure they transfer their tasks, client information, and responsibilities before taking leave, as failure to do so may result in their leave request being denied.</span>
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span><span>Employee will be responsible to communicate his/ her requested leave to their line manager and complete the necessary task handover.</span>
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span><span>Leaves such as emergencies, sickness, and compassionate leave must be submitted at least 5 days after the leave has been taken. Failure to submit leave requests within this timeframe will result in the leave being calculated as an absence and will be deducted from annual leave entitlement.</span>
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span><span>Leave approval will only be notified after submitting the handover.</span>
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span><span>Terms and conditions will apply to all leave requests.</span>
                                  </li>
                                </div>
                                <div className='col-lg-9 fv-row'>
                                  <span>
                                    <div className='d-flex align-items-center mt-3'>
                                      <label className='form-check form-check-inline form-check-solid'>
                                        <input
                                          className='form-check-input border border-primary-subtle'
                                          name='communication[]'
                                          id="flexCheckDefault"
                                          type='checkbox'
                                        />
                                        <span className='fw-bold ps-2 fs-6 required text-primary'>I have read and accepted all the terms & conditions.
                                        </span>
                                      </label>
                                    </div>
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card-footer d-flex py-6 px-9 justify-content-end'>
                  <div className=''>
                    <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    </>
  );


};

export default Requestleaves;