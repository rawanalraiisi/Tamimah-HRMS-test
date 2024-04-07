

import React, { FC, useState } from 'react';
import { KTIcon, toAbsoluteUrl } from '../../../../_metronic/helpers';
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../../../modules/accounts/components/settings/SettingsModel';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Grid } from '@mui/material';
import useFetchDataByCheck from '../../../hooks/getDataByCheck';

const MyAccount = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const MyAccounts = () => {
  const [data, setData] = useState(initialValues);

  const [loading, setLoading] = useState(false);

  const [clickedItem, setClickedItem] = useState(1);

  const { fetchedData } = useFetchDataByCheck('getEmployeeDetails');


  console.log("fetchedData.............;", fetchedData?.result5);

  console.log("clickedItem", clickedItem);

  console.log(">>>>>>>>>>>>.....<<<<<<<<<<<<<", fetchedData?.[`result${clickedItem}`]);

  const transformedArray = fetchedData?.[`result${clickedItem}`]?.map((item) => {
    const transformedObject = {};
    for (const key in item) {
      const newKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      transformedObject[newKey] = item[key];
    }
    return transformedObject;
  });


  let structuredArray = [];
  transformedArray?.forEach((data) => {
    Object.keys(data).forEach(key => {
      structuredArray.push({ [key]: data[key] });
    });
  });

  const newBenifitArray = []
  structuredArray?.slice(1, 2)?.map((data, index) => { newBenifitArray.push(data?.Benefits) });


  console.log("transformedArray", transformedArray);
  console.log("structuredArray", structuredArray);


  return (
    <>
      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i> My Details / Job Description / Family Members Details</h5>

      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-100px symbol-lg-150px symbol-fixed position-relative'>
                <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
              </div>
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      Saji Babu
                    </a>
                    <a href='#'>
                      <KTIcon iconName='verify' className='fs-1 text-primary' />
                    </a>
                  </div>

                  <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                      Software Developer
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    >
                      <KTIcon iconName='geolocation' className='fs-4 me-1' />
                      TM
                    </a>
                    <a
                      href='#'
                      className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                    >
                      <KTIcon iconName='sms' className='fs-4 me-1' />
                      Saji@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>

              <li onClick={() => setClickedItem(1)} className='nav-item mb-5'>
                <a className="nav-link active" data-bs-toggle="tab" href="#Personal_info" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                    <span className="fs-5 fw-bolder text-hover-primary">Personal Details</span>
                  </span>
                </a>
              </li>

              <li onClick={() => setClickedItem(2)} className='nav-item mb-5'>
                <a className="nav-link" data-bs-toggle="tab" href="#Corporate_info" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                    <span className="fs-5 fw-bolder text-hover-primary">
                      Corporate Details
                    </span>
                  </span>
                </a>
              </li>
              <li onClick={() => setClickedItem(3)} className='nav-item mb-5'>
                <a className="nav-link" data-bs-toggle="tab" href="#JobDescription" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                    <span className="fs-5 fw-bolder text-hover-primary">Job Description & Company Benefits</span>
                  </span>
                </a>
              </li>
              <li onClick={() => setClickedItem(4)} className='nav-item mb-5'>
                <a className="nav-link" data-bs-toggle="tab" href="#Family_Members" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                    <span className="fs-5 fw-bolder text-hover-primary">Family Members Details</span>
                  </span>
                </a>
              </li>
              <li onClick={() => setClickedItem(5)} className='nav-item mb-5'>
                <a className="nav-link" data-bs-toggle="tab" href="#courses" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                    <span className="fs-5 fw-bolder text-hover-primary">Courses</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="Personal_info" role="tabpanel">
          <div className='card d-flex flex-row-fluid flex-center rounded'>
            <div className='card-body py-10 w-100 w-xl-1000px'>
              <Grid container sx={{ bgcolor: '' }}>

                {structuredArray?.map((data, index) => (
                  <Grid container md={6} lg={6} mb={1} key={index}>
                    <Grid container md={6} lg={4}>
                      <label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>{Object.keys(data).join(',')}</label>
                    </Grid>
                    <Grid container md={6} lg={6}>
                      <div className='col-lg-9 fv-row'>
                        <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> {Object.values(data)?.join(',')} </p>
                      </div>
                    </Grid>
                  </Grid>
                ))}

              </Grid>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="Corporate_info" role="tabpanel">
          <div className='card d-flex flex-row-fluid flex-center rounded'>
            <div className='card-body py-10 w-100 w-xl-1000px'>

              <Grid container sx={{ bgcolor: '' }}>
                {structuredArray?.map((data, index) => (
                  <Grid container md={6} lg={6} mb={1} key={index}>
                    <Grid container md={6} lg={4}>
                      <label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>{Object.keys(data).join(',')}</label>
                    </Grid>
                    <Grid container md={6} lg={6}>
                      <div className='col-lg-9 fv-row'>
                        <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> {Object.values(data)?.join(',')} </p>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Grid>

            </div>
          </div>
        </div>
      </div>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="JobDescription" role="tabpanel">
          <div className='card d-flex flex-row-fluid flex-center rounded'>
            <div className='card-body py-10 w-100 w-xl-1000px'>
              <div className='w-100'>
                <div className='fv-row mb-10'>
                  <label className='form-label text-primary fw-bold'><i className="bi bi-person-lines-fill fs-3 svg-icon-muted text-primary me-3"></i>Job Description / Employee Responsibilities</label>
                  {structuredArray?.slice(0, 1)?.map((data, index) => (
                    <textarea
                      key={index}
                      name='businessDescription'
                      className='form-control form-control-lg form-control-solid bg-body-secondary fs-7'
                      rows={4}
                      value={Object.values(data).join(',')}
                    />
                  ))}
                </div>

                <div className="d-md-flex justify-content-md-center" >
                  <table className="table table-striped table-hover table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gs-7 shadow">
                    <thead>
                      <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200" style={{ backgroundColor: '#143983' }}>
                        <th style={{ color: 'white' }}><i className="bi bi-ui-checks-grid fs-3 me-3 svg-icon-muted text-white"></i>Benefit Name</th>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="Family_Members" role="tabpanel">
          <div className='card d-flex flex-row-fluid flex-center rounded'>
            <div className='card-body py-10 w-100 w-xl-1000px'>
              <div className='w-100'>
                <Grid container>
                  {
                    fetchedData?.result4.map((data, index) => (

                      <Grid container sx={{ bgcolor: '' }} key={index}>

                        <Grid container>
                          <p className="fw-bold mb-5 mt-5"><span className="badge badge-primary fs-9"><i className="bi bi-person text-white fs-5 me-3"></i>{data.firstName} {data.lastName}</span></p>
                        </Grid>


                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>First Name</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.firstName}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Last Name</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.lastName}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Date Of Birth</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.dateOfBirth}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Visa Type</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.visaType}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Passport Number</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.passportNumber}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Gender</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.gender}</p>
                            </div>
                          </Grid>
                        </Grid>


                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Relationship</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.relationship}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>ID/RC Number</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.iDRCNumber}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>RC/Visa expiry date</label></Grid>
                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.passportExpDate}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Nationality</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.nationality}</p>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container md={6} lg={6} >
                          <Grid container md={6} lg={4}><label className='col-lg-12 col-form-label fw-bold fs-7 text-black-50'>Health Insurance Policy no.</label></Grid>

                          <Grid container md={6} lg={7}>
                            <div className='col-lg-9 fv-row'>
                              <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>{data.healthInsurancePolicyNumber}</p>
                            </div>
                          </Grid>
                        </Grid>

                      </Grid>
                    ))
                  }
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content mb-10" id="myTabContent">
        <div className="tab-pane fade" id="courses" role="tabpanel">
          <div className={`card}`}>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Recent Courses</span>
                <span className='text-muted mt-1 fw-semibold fs-7'>Over 10 Courses</span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className="table table-hover table-striped gs-7" style={{ background: "rgba(20, 57, 131, 0.2)" }}>
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
                  <tbody>
                    {
                      fetchedData?.result5?.map((data, index) => (
                        <tr key={index}>
                          <td></td>

                          <td key={index}><a href='#' className='text-dark fw-bold text-hover-primary fs-7'>{data?.courseName}</a></td>
                          <td key={index}><a href='#' className='text-dark fw-bold text-hover-primary fs-7'>{data?.academyName}</a></td>
                          <td key={index}><a href='#' className='text-dark fw-bold text-hover-primary fs-7'>{data?.startDate}</a></td>
                          <td key={index}><a href='#' className='text-dark fw-bold text-hover-primary fs-7'>{data?.endDate}</a></td>
                          <td key={index}><a href='#' className='text-dark fw-bold text-hover-primary fs-7'>{data?.duration} Days</a></td>
                          <td><span className='badge badge-warning fs-7'>{data?.status}</span> </td>
                          <td className='text-end'>
                            <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                              <KTIcon iconName='document' className='fs-2x' />
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MyAccount };
export { MyAccounts };
