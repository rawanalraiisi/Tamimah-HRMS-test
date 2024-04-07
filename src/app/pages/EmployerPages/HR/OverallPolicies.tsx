import { FC } from 'react'
import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit } from '@mui/icons-material';
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers';



const CompanyOverallPolicies: FC = () => {


  return <>
    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */}  View / Add / Delete Company Documents</h5>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button"
        className="btn btn-primary btn-sm mb-5"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_1"
      >
        <i className="bi bi-plus-circle fs-4 px-3 svg-icon-muted text-white"></i>
        Add
      </button>
    </div>

    <div className="modal fade" tabIndex={-1} id="kt_modal_1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary-subtle">
            <h5 className="modal-title text-primary"> <i className="bi bi-plus-lg fs-2 px-3 svg-icon-muted text-primary"></i>   Add New Document </h5>
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
              <label className='col-lg-5 col-form-label fw-bold fs-6'>Document Name</label>
              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                  placeholder=''
                />
              </div>
            </div>
            <div className='row mb-1'>
              <label className='col-lg-5 col-form-label fw-bold fs-6'>Document URL / Link</label>
              <div className='col-lg-6 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                  placeholder=''
                />
              </div>
            </div>
            <div className='row mb-1'>
              <label className='col-lg-5 col-form-label fw-bold fs-6'>Uplad Document Image</label>
              <div className='col-lg-6 fv-row'>
                <input
                  type="file"
                  id="imageUpload"
                  className='form-control-file form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
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




    <div className="row mb-10">
      {/* Visa Application document */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Visa.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> Visa Application </p>
      </div>
      {/* Employee Hierarchy */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Company_structure.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> Employee Hierarchy </p>
      </div>
      {/* Overall Policies */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Company_Policy.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> Overall Policies </p>
      </div>
      {/* Car Insurance documents */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Car_insurance.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> Car Insurance</p>
      </div>
      {/* Health Insurance Benefits documents */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Health_insurance.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> Health Insurance Benefits </p>
      </div>
      {/* Health Insurance Providers documents */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Health_Insurance_Providers.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-success btn-active-success btn-shadow ms-2 "><i className="bi bi-file-earmark-ruled fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> Health Insurance Providers </p>
      </div>

      {/* KPI documents */}
      <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/KPI.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
              <div className="btn btn-icon btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5'> KPI Documents </p>
      </div>

    </div>



    {/* Edit Terms & Conditions */}
    <h1 className="text-primary mb-10"><i className="bi bi-shield-exclamation fs-2hx me-3 svg-icon-muted text-primary"></i>  {/* icon  */} Edit The Terms & Conditions</h1>
    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
      <i className="bi-shield-fill-exclamation fs-1 text-primary me-4">
        <span className="path1"></span>
        <span className="path2"></span>
      </i>
      <div className="d-flex flex-stack flex-grow-1">
        <div className="fw-bold">
          <div className="fs-7 text-gray-600">
            <div className="d-flex flex-column" id="additional-info">
              <li className="d-flex align-items-center py-2">
                <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>The first and last weekends of the leave period are not counted as part of the 30-day calculation. If your leave coincides with a public holiday, it will be calculated as part of your annual leave.
              </li>
              <li className="d-flex align-items-center py-2">
                <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>I have submitted task, client details and responsibilities to the person in charge of my work during my leave.
              </li>
              <li className="d-flex align-items-center py-2">
                <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>I have communicated my requested leave to my line manager and completed the necessary task handover.
              </li>
              <li className="d-flex align-items-center py-2">
                <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>For emergencies, sickness, and compassionate leave, I have up to 5 working days to submit the leave request after the leave has been taken.
              </li>
              <li className="d-flex align-items-center py-2">
                <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> Leaves such as emergencies, sickness, and compassionate leave must be submitted at least 5 days after the leave has been taken. Failure to submit leave requests within this timeframe will result in the leave being calculated as an absence and deducted from my annual leave entitlement. Your leave approval will only be notified after submitting the handover.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>





    {/* Terms and conditions Table */}
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-sm bg-primary text-white" type="button"><i className="bi bi-plus-circle fs-4 px-3 svg-icon-muted text-white"></i>Add</button>
    </div>


    <table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{ background: "#e8e6e6" }}>
      <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white bg-primary">
          <th style={{ width: "20px" }}> no. </th>
          <th colSpan={3}>
            <i className="bi bi-shield-fill-exclamation fs-2 px-5 svg-icon-muted text-white"></i> Terms & Conditions
          </th>
          <th style={{ width: "20px" }}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={1} >
            <p className="text-primary fw-bold py-5">1</p>
          </td>
          <td className="text-primary fw-bold" colSpan={3} >
            <div className="mb-3 w-100">
              <textarea className="form-control text-primary fs-7 fw-bold" id="exampleFormControlTextarea1">
                The first and last weekends of the leave period are not counted as part of the 30-day calculation.
                If your leave coincides with a public holiday, it will be calculated as part of your annual leave.
              </textarea>
            </div>
          </td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
              {/* save button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-success ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2" title="Save">
                <KTSVG
                  path="/media/icons/duotune/general/gen043.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
              {/* delete button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close" title="Delete">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} >
            <p className="text-primary fw-bold py-5">2</p>
          </td>
          <td className="text-primary fw-bold" colSpan={3} >
            <div className="mb-3 w-100">
              <textarea className="form-control text-primary fs-7 fw-bold" id="exampleFormControlTextarea1">
                I have submitted task, client details and responsibilities to the person in charge of my work during my leave.
              </textarea>
            </div>
          </td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
              {/* save button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-success ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2" title="Save">
                <KTSVG
                  path="/media/icons/duotune/general/gen043.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
              {/* delete button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close" title="Delete">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} >
            <p className="text-primary fw-bold py-5">3</p>
          </td>
          <td className="text-primary fw-bold" colSpan={3} >
            <div className="mb-3 w-100">
              <textarea className="form-control text-primary fs-7 fw-bold" id="exampleFormControlTextarea1">
                I have communicated my requested leave to my line manager and completed the necessary task handover.
              </textarea>
            </div>
          </td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
              {/* save button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-success ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2" title="Save">
                <KTSVG
                  path="/media/icons/duotune/general/gen043.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
              {/* delete button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close" title="Delete">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} >
            <p className="text-primary fw-bold py-5">4</p>
          </td>
          <td className="text-primary fw-bold" colSpan={3} >
            <div className="mb-3 w-100">
              <textarea className="form-control text-primary fs-7 fw-bold" id="exampleFormControlTextarea1">
                For emergencies, sickness, and compassionate leave, I have up to 5 working days to submit the leave request after the leave has been taken.
              </textarea>
            </div>
          </td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
              {/* save button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-success ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2" title="Save">
                <KTSVG
                  path="/media/icons/duotune/general/gen043.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
              {/* delete button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close" title="Delete">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} >
            <p className="text-primary fw-bold py-5">5</p>
          </td>
          <td className="text-primary fw-bold" colSpan={3} >
            <div className="mb-3 w-100">
              <textarea className="form-control text-primary fs-7 fw-bold" id="exampleFormControlTextarea1">
                Leaves such as emergencies, sickness, and compassionate leave must be submitted at least 5 days after the leave has been taken.
                Failure to submit leave requests within this timeframe will result in the leave being calculated as an absence and deducted from
                my annual leave entitlement. Your leave approval will only be notified after submitting the handover.
              </textarea>
            </div>
          </td>
          <td>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
              {/* save button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-success ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2" title="Save">
                <KTSVG
                  path="/media/icons/duotune/general/gen043.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
              {/* delete button */}
              <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close" title="Delete">
                <KTSVG
                  path="/media/icons/duotune/general/gen027.svg"
                  className="svg-icon svg-icon-2x"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>







  </>

}
export { CompanyOverallPolicies }