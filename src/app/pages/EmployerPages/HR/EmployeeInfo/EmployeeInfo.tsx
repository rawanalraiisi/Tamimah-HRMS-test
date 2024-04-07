import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {KTIcon, KTSVG} from '../../../../../_metronic/helpers'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountWizardHelper'

const EmployeeInfo: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totalStepsNumber)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
<>
    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} View / Edit Employee Information</h5>





    <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6 mb-10 d-md-flex justify-content-md-center">
    <li className="nav-item">
  <a className="nav-link active" data-bs-toggle="tab" href="#Employee_info">
    <div className="custom-width">
      <a href="#" className="btn btn-flex btn-primary px-6">
        <span className="svg-icon svg-icon-2x">
          <i className="bi bi-search fs-2 px-5 svg-icon-muted text-white"></i>
        </span>
        <div className="d-flex align-items-center py-2">
          <span className="bullet bullet-vertical me-5 h-20px w-3px text-white"></span>
        </div>
        <span className="d-flex flex-column align-items-start ms-2">
          <span className="fs-5 fw-bolder">Employee Details</span>
        </span>
      </a>
    </div>
  </a>
</li>

  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#courses"
    >
           <a href="#" className="btn btn-flex btn-primary px-6">
  <span className="svg-icon svg-icon-2x"><i className="bi bi-search fs-2 px-5 svg-icon-muted text-white"></i></span>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical me-5 h-20px w-3px text-white"></span>
  </li>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-5 fw-bolder">Courses Details</span>
  </span>
  </a>
    </a>
  </li>
</ul>

<div className="tab-content mb-10" id="myTabContent">
  <div className="tab-pane fade show active" id="Employee_info" role="tabpanel">
  
    <div className='card'>
      <div className='card-body'>

            <div className="d-flex flex-wrap flex-stack mb-6">
              <div className="d-flex my-2">
                <div className="d-flex align-items-center position-relative me-4">
                  <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-3">
                    <span className="path1"></span><span className="path2"></span></i>
                    <input type="text" id="kt_filter_search" className="form-control form-control-white form-control-sm w-150px ps-9" placeholder="Employee Name"/>
                </div><a href="" className="btn btn-primary btn-sm">Search</a>
              </div>
            </div>

        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h6 className='stepper-title fs-6'>Personal Details</h6>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h6 className='stepper-title fs-6'>Corporate Details</h6>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h6 className='stepper-title fs-6'>Job Description & Company Benefits</h6>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h6 className='stepper-title fs-6'>Family Members Details</h6>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h6 className='stepper-title fs-6'>Account Details</h6>
            </div>
          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-700px w-100 pt-15 pb-10' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <Step1 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step2 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step3 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step4 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step5 />
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Continue'}
                        {isSubmitButton && 'Save All'}
                        <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* courses */}
  <div className="tab-content mb-10" id="myTabContent">
  <div className="tab-pane fade" id="courses" role="tabpane2">

{/* table start from here  */}
    <div className={`card`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent Courses</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 10 Courses</span>
        </h3>

          <div className="d-flex flex-wrap flex-stack mb-6">
              <div className="d-flex my-2">
                <div className="d-flex align-items-center position-relative me-4">
                  <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-3">
                    <span className="path1"></span><span className="path2"></span></i>
                    <input type="text" id="kt_filter_search" className="form-control form-control-white form-control-sm w-150px ps-9" placeholder="Employee Name"/>
                </div><a href="" className="btn btn-primary btn-sm">Search</a>
              </div>
            </div>

        <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
            title="Add Course"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_1"
          >
            <KTIcon iconName='plus-square' className='fs-1' />
          </button>
          
      <div className="modal fade" tabIndex={-1} id="kt_modal_1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary-subtle">
              <h5 className="modal-title text-primary"> <i className="bi bi-plus-lg fs-2 px-3 svg-icon-muted text-primary"></i>   Add New Course </h5>
              <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr061.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
              
            </div>
            <div className="modal-body">
              

            <div className='row mb-1'>
              <label className='col-lg-4 col-form-label fw-bold fs-8 text-light-emphasis'>Courses Name</label>
                  <div className='col-lg-6 fv-row'>
                    <input
                            type='text'
                            className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                            placeholder=''
                          />
                  </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-4 col-form-label fw-bold fs-8 text-light-emphasis'>Academy Name</label>
                  <div className='col-lg-6 fv-row'>
                    <input
                            type='text'
                            className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                            placeholder=''
                          />
                  </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-4 col-form-label fw-bold fs-8 text-light-emphasis'>Start Date</label>
                  <div className='col-lg-6 fv-row'>
                    <input
                            type='date'
                            className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                            placeholder=''
                          />
                  </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-4 col-form-label fw-bold fs-8 text-light-emphasis'>End Date</label>
                  <div className='col-lg-6 fv-row'>
                    <input
                            type='date'
                            className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                            placeholder=''
                          />
                  </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-4 col-form-label fw-bold fs-8 text-light-emphasis'>Duration</label>
                  <div className='col-lg-6 fv-row'>
                    <input
                            type='text'
                            className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                            placeholder=''
                          />
                  </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-4 col-form-label fw-bold fs-8 text-light-emphasis'>Status</label>
                  <div className='col-lg-6 fv-row'>
                      <select
                        className="form-select form-select-solid border fs-7 bg-body-secondary"
                        aria-label="Select example"
                      >
                        <option value="In-Process">In-Process</option>
                        <option value="Passed">Passed</option>
                        <option value="Failed">Failed</option>
                      </select>
                  </div>
            </div>


          <div className='row mb-1'>
                  <label className='col-lg-4  col-form-label fw-bold fs-8 text-light-emphasis'>Uplad Certificate</label>
                  <div className='col-lg-6 fv-row'>
                    <input
                            type="file"
                            id="imageUpload"
                            className='form-control-file form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                            placeholder=''
                          />
                  </div>
          </div>




            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className="table table-hover table-striped gs-7" style={{ background: "rgba(20, 57, 131, 0.2)"}}>
            {/* begin::Table head */}
            <thead className="bg-primary">
              <tr className='fw-bold text-white'>
                <th className='w-25px'>
                <i className="bi bi-patch-check-fill fs-3 me-2 svg-icon-muted text-white"></i>
                </th>
                <th className='min-w-150px'>Courses Name</th>
                <th className='min-w-140px'>Academy Name</th>
                <th className='min-w-120px'>Start Date</th>
                <th className='min-w-120px'>End Date</th>
                <th className='min-w-120px'>Duration</th>
                <th className='min-w-120px'>Status</th>
                <th className='min-w-100px text-end'>View Certificate</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                   .NET Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'><span className="datafield" contentEditable="true">Passed</span></span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  ReactJS Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'><span className="datafield" contentEditable="true">Passed</span></span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  PL/SQL Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>221 Days</span>
                </td>
                <td>
                  <span className='badge badge-warning fs-7'><span className="datafield" contentEditable="true">In-Process</span></span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  Database Programming
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-warning fs-7'><span className="datafield" contentEditable="true">In-Process</span></span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  UI / UX for Beginners
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>30 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'><span className="datafield" contentEditable="true">Passed</span></span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  CSS/SCSS 
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-danger fs-7'><span className="datafield" contentEditable="true">Faild</span></span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  .NET Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'>Passed</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>

  </div>
</div>


    </>
  )
}

export {EmployeeInfo}
