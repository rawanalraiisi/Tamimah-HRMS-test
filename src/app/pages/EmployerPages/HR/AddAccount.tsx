import {FC} from 'react'

import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../modules/accounts/components/settings/SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { IconButton } from '@mui/material'

const AddAccount = Yup.object().shape({
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
  
  
  
  const AddAccounts: React.FC = () => {
    const [data, setData] = useState<IProfileDetails>(initialValues)
    const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
      const updatedData = Object.assign(data, fieldsToUpdate)
      setData(updatedData)

    
    }
  
    const [loading, setLoading] = useState(false)
    const formik = useFormik<IProfileDetails>({
      initialValues,
      validationSchema: AddAccount,
      onSubmit: (values) => {
        setLoading(true)
        setTimeout(() => {
          values.communications.email = data.communications.email
          values.communications.phone = data.communications.phone
          values.allowMarketing = data.allowMarketing
          const updatedData = Object.assign(data, values)
          setData(updatedData)
          setLoading(false)
        }, 1000)
      },
    })



    
    

    return ( <>



 {/* edit employee profile form**************************************************************************************************************************
 ************************************************************************************************************************************************************/}



 <div className='card mb-2 mb-xl-5'>
      <div
        className='border-0 rounded-3 cursor-pointer p-3'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#Edit_Employee_Information_Form'
        aria-expanded='true'
        aria-controls='Edit_Employee_Information_Form'
        style={{background: "#6255a3"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <i className="bi bi-person-fill-gear fs-2x px-5 svg-icon-muted text-warning"></i>  {/* icon  */}


                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0 text-white'>Edit Employee Information </h3>
                </div>
        </IconButton>

        
      </div>

      <div id='Edit_Employee_Information_Form' className='collapse'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-9'>

          <div className='d-flex justify-content-center'>
          <div className='col-lg-5 fv-row mb-10 d-flex'>

              <select className="col-lg-1 form-select form-select-solid border-3 border-primary" aria-label="Select example"  style={{background: "#d9f3fa"}}>

                <option value="">Employee (Name) / ID (000)</option>
                <option value="Rawan / 040">Rawan / 040</option>
                <option value="Balqees / 019">Balqees / 019</option>
                <option value="Zainab / 003">Zainab / 003</option>
                <option value="Saji / 022">Saji / 022</option>

              </select>

              <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-primary svg-icon-2hx" />

              </IconButton>


            </div>

          </div>
           
<hr className='text-muted pb-5'></hr>



            <div className='row'>
            
              <div className='col-lg-20'>
                <span>
                <div
                  className='image-input image-input-outline col-lg-2'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>

                <label className="text-primary" htmlFor="photo">Click here to Update photo!</label>

                <input 
                  type="file"
                  id="photo" 
                  name="photo"
                  accept="image/*"
                  style={{display: "none"}}
                  />
                  
                </div>
                </span>
                
               
             
              </div>
            </div>

          
            
  

           
<hr className='text-muted'></hr>
            

      <div className='row mb-1'>
        <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>
             <div className='col-lg-3 fv-row'>
              
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder='First name'
                      required
                      {...formik.getFieldProps('fName')}
                    />
              </div>
              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>
                <div className='col-lg-3 fv-row'>
                
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                        placeholder='First name'
                        {...formik.getFieldProps('lName')}
                      />
                </div>
          </div>



 
        


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
              <select
                  className='form-select form-select-solid border border-primary'
                  {...formik.getFieldProps('country')}
                >
                  <option value=''>Select a Country...</option>
                  <option value='AF'>Afghanistan</option>
                  <option value='AX'>Aland Islands</option>
                  <option value='AL'>Albania</option>
                  <option value='DZ'>Algeria</option>
                  <option value='AS'>American Samoa</option>
                  <option value='AD'>Andorra</option>
                  <option value='AO'>Angola</option>
                  <option value='AI'>Anguilla</option>
                  <option value='AQ'>Antarctica</option>
                  <option value='AG'>Antigua and Barbuda</option>
                  <option value='AR'>Argentina</option>
                  <option value='AM'>Armenia</option>
                  <option value='AW'>Aruba</option>
                  <option value='AU'>Australia</option>
                  <option value='AT'>Austria</option>
                  <option value='AZ'>Azerbaijan</option>
                  <option value='BS'>Bahamas</option>
                  <option value='BH'>Bahrain</option>
                  <option value='BD'>Bangladesh</option>
                  <option value='BB'>Barbados</option>
                  <option value='BY'>Belarus</option>
                  <option value='BE'>Belgium</option>
                  <option value='BZ'>Belize</option>
                  <option value='BJ'>Benin</option>
                  <option value='BM'>Bermuda</option>
                  <option value='BT'>Bhutan</option>
                  <option value='BO'>Bolivia, Plurinational State of</option>
                  <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                  <option value='BA'>Bosnia and Herzegovina</option>
                  <option value='BW'>Botswana</option>
                  <option value='BV'>Bouvet Island</option>
                  <option value='BR'>Brazil</option>
                  <option value='IO'>British Indian Ocean Territory</option>
                  <option value='BN'>Brunei Darussalam</option>
                  <option value='BG'>Bulgaria</option>
                  <option value='BF'>Burkina Faso</option>
                  <option value='BI'>Burundi</option>
                  <option value='KH'>Cambodia</option>
                  <option value='CM'>Cameroon</option>
                  <option value='CA'>Canada</option>
                  <option value='CV'>Cape Verde</option>
                  <option value='KY'>Cayman Islands</option>
                  <option value='CF'>Central African Republic</option>
                  <option value='TD'>Chad</option>
                  <option value='CL'>Chile</option>
                  <option value='CN'>China</option>
                  <option value='CX'>Christmas Island</option>
                  <option value='CC'>Cocos (Keeling) Islands</option>
                  <option value='CO'>Colombia</option>
                  <option value='KM'>Comoros</option>
                  <option value='CG'>Congo</option>
                  <option value='CD'>Congo, the Democratic Republic of the</option>
                  <option value='CK'>Cook Islands</option>
                  <option value='CR'>Costa Rica</option>
                  <option value='CI'>Côte d'Ivoire</option>
                  <option value='HR'>Croatia</option>
                  <option value='CU'>Cuba</option>
                  <option value='CW'>Curaçao</option>
                  <option value='CY'>Cyprus</option>
                  <option value='CZ'>Czech Republic</option>
                  <option value='DK'>Denmark</option>
                  <option value='DJ'>Djibouti</option>
                  <option value='DM'>Dominica</option>
                  <option value='DO'>Dominican Republic</option>
                  <option value='EC'>Ecuador</option>
                  <option value='EG'>Egypt</option>
                  <option value='SV'>El Salvador</option>
                  <option value='GQ'>Equatorial Guinea</option>
                  <option value='ER'>Eritrea</option>
                  <option value='EE'>Estonia</option>
                  <option value='ET'>Ethiopia</option>
                  <option value='FK'>Falkland Islands (Malvinas)</option>
                  <option value='FO'>Faroe Islands</option>
                  <option value='FJ'>Fiji</option>
                  <option value='FI'>Finland</option>
                  <option value='FR'>France</option>
                  <option value='GF'>French Guiana</option>
                  <option value='PF'>French Polynesia</option>
                  <option value='TF'>French Southern Territories</option>
                  <option value='GA'>Gabon</option>
                  <option value='GM'>Gambia</option>
                  <option value='GE'>Georgia</option>
                  <option value='DE'>Germany</option>
                  <option value='GH'>Ghana</option>
                  <option value='GI'>Gibraltar</option>
                  <option value='GR'>Greece</option>
                  <option value='GL'>Greenland</option>
                  <option value='GD'>Grenada</option>
                  <option value='GP'>Guadeloupe</option>
                  <option value='GU'>Guam</option>
                  <option value='GT'>Guatemala</option>
                  <option value='GG'>Guernsey</option>
                  <option value='GN'>Guinea</option>
                  <option value='GW'>Guinea-Bissau</option>
                  <option value='GY'>Guyana</option>
                  <option value='HT'>Haiti</option>
                  <option value='HM'>Heard Island and McDonald Islands</option>
                  <option value='VA'>Holy See (Vatican City State)</option>
                  <option value='HN'>Honduras</option>
                  <option value='HK'>Hong Kong</option>
                  <option value='HU'>Hungary</option>
                  <option value='IS'>Iceland</option>
                  <option value='IN'>India</option>
                  <option value='ID'>Indonesia</option>
                  <option value='IR'>Iran, Islamic Republic of</option>
                  <option value='IQ'>Iraq</option>
                  <option value='IE'>Ireland</option>
                  <option value='IM'>Isle of Man</option>
                  <option value='IL'>Israel</option>
                  <option value='IT'>Italy</option>
                  <option value='JM'>Jamaica</option>
                  <option value='JP'>Japan</option>
                  <option value='JE'>Jersey</option>
                  <option value='JO'>Jordan</option>
                  <option value='KZ'>Kazakhstan</option>
                  <option value='KE'>Kenya</option>
                  <option value='KI'>Kiribati</option>
                  <option value='KP'>Korea, Democratic People's Republic of</option>
                  <option value='KW'>Kuwait</option>
                  <option value='KG'>Kyrgyzstan</option>
                  <option value='LA'>Lao People's Democratic Republic</option>
                  <option value='LV'>Latvia</option>
                  <option value='LB'>Lebanon</option>
                  <option value='LS'>Lesotho</option>
                  <option value='LR'>Liberia</option>
                  <option value='LY'>Libya</option>
                  <option value='LI'>Liechtenstein</option>
                  <option value='LT'>Lithuania</option>
                  <option value='LU'>Luxembourg</option>
                  <option value='MO'>Macao</option>
                  <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                  <option value='MG'>Madagascar</option>
                  <option value='MW'>Malawi</option>
                  <option value='MY'>Malaysia</option>
                  <option value='MV'>Maldives</option>
                  <option value='ML'>Mali</option>
                  <option value='MT'>Malta</option>
                  <option value='MH'>Marshall Islands</option>
                  <option value='MQ'>Martinique</option>
                  <option value='MR'>Mauritania</option>
                  <option value='MU'>Mauritius</option>
                  <option value='YT'>Mayotte</option>
                  <option value='MX'>Mexico</option>
                  <option value='FM'>Micronesia, Federated States of</option>
                  <option value='MD'>Moldova, Republic of</option>
                  <option value='MC'>Monaco</option>
                  <option value='MN'>Mongolia</option>
                  <option value='ME'>Montenegro</option>
                  <option value='MS'>Montserrat</option>
                  <option value='MA'>Morocco</option>
                  <option value='MZ'>Mozambique</option>
                  <option value='MM'>Myanmar</option>
                  <option value='NA'>Namibia</option>
                  <option value='NR'>Nauru</option>
                  <option value='NP'>Nepal</option>
                  <option value='NL'>Netherlands</option>
                  <option value='NC'>New Caledonia</option>
                  <option value='NZ'>New Zealand</option>
                  <option value='NI'>Nicaragua</option>
                  <option value='NE'>Niger</option>
                  <option value='NG'>Nigeria</option>
                  <option value='NU'>Niue</option>
                  <option value='NF'>Norfolk Island</option>
                  <option value='MP'>Northern Mariana Islands</option>
                  <option value='NO'>Norway</option>
                  <option value='OM'>Oman</option>
                  <option value='PK'>Pakistan</option>
                  <option value='PW'>Palau</option>
                  <option value='PS'>Palestinian Territory, Occupied</option>
                  <option value='PA'>Panama</option>
                  <option value='PG'>Papua New Guinea</option>
                  <option value='PY'>Paraguay</option>
                  <option value='PE'>Peru</option>
                  <option value='PH'>Philippines</option>
                  <option value='PN'>Pitcairn</option>
                  <option value='PL'>Poland</option>
                  <option value='PT'>Portugal</option>
                  <option value='PR'>Puerto Rico</option>
                  <option value='QA'>Qatar</option>
                  <option value='RE'>Réunion</option>
                  <option value='RO'>Romania</option>
                  <option value='RU'>Russian Federation</option>
                  <option value='RW'>Rwanda</option>
                  <option value='BL'>Saint Barthélemy</option>
                  <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value='KN'>Saint Kitts and Nevis</option>
                  <option value='LC'>Saint Lucia</option>
                  <option value='MF'>Saint Martin (French part)</option>
                  <option value='PM'>Saint Pierre and Miquelon</option>
                  <option value='VC'>Saint Vincent and the Grenadines</option>
                  <option value='WS'>Samoa</option>
                  <option value='SM'>San Marino</option>
                  <option value='ST'>Sao Tome and Principe</option>
                  <option value='SA'>Saudi Arabia</option>
                  <option value='SN'>Senegal</option>
                  <option value='RS'>Serbia</option>
                  <option value='SC'>Seychelles</option>
                  <option value='SL'>Sierra Leone</option>
                  <option value='SG'>Singapore</option>
                  <option value='SX'>Sint Maarten (Dutch part)</option>
                  <option value='SK'>Slovakia</option>
                  <option value='SI'>Slovenia</option>
                  <option value='SB'>Solomon Islands</option>
                  <option value='SO'>Somalia</option>
                  <option value='ZA'>South Africa</option>
                  <option value='GS'>South Georgia and the South Sandwich Islands</option>
                  <option value='KR'>South Korea</option>
                  <option value='SS'>South Sudan</option>
                  <option value='ES'>Spain</option>
                  <option value='LK'>Sri Lanka</option>
                  <option value='SD'>Sudan</option>
                  <option value='SR'>Suriname</option>
                  <option value='SJ'>Svalbard and Jan Mayen</option>
                  <option value='SZ'>Swaziland</option>
                  <option value='SE'>Sweden</option>
                  <option value='CH'>Switzerland</option>
                  <option value='SY'>Syrian Arab Republic</option>
                  <option value='TW'>Taiwan, Province of China</option>
                  <option value='TJ'>Tajikistan</option>
                  <option value='TZ'>Tanzania, United Republic of</option>
                  <option value='TH'>Thailand</option>
                  <option value='TL'>Timor-Leste</option>
                  <option value='TG'>Togo</option>
                  <option value='TK'>Tokelau</option>
                  <option value='TO'>Tonga</option>
                  <option value='TT'>Trinidad and Tobago</option>
                  <option value='TN'>Tunisia</option>
                  <option value='TR'>Turkey</option>
                  <option value='TM'>Turkmenistan</option>
                  <option value='TC'>Turks and Caicos Islands</option>
                  <option value='TV'>Tuvalu</option>
                  <option value='UG'>Uganda</option>
                  <option value='UA'>Ukraine</option>
                  <option value='AE'>United Arab Emirates</option>
                  <option value='GB'>United Kingdom</option>
                  <option value='US'>United States</option>
                  <option value='UY'>Uruguay</option>
                  <option value='UZ'>Uzbekistan</option>
                  <option value='VU'>Vanuatu</option>
                  <option value='VE'>Venezuela, Bolivarian Republic of</option>
                  <option value='VN'>Vietnam</option>
                  <option value='VI'>Virgin Islands</option>
                  <option value='WF'>Wallis and Futuna</option>
                  <option value='EH'>Western Sahara</option>
                  <option value='YE'>Yemen</option>
                  <option value='ZM'>Zambia</option>
                  <option value='ZW'>Zimbabwe</option>
                </select>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border border-primary" aria-label="Select example">

                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
              </div>
            </div>



        <div className='row mb-1'>
        <label className='col-lg-2 col-form-label fw-bold fs-6'>Employee ID</label>
             <div className='col-lg-3 fv-row'>
              
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      maxLength={3}
                      placeholder='ID'
                      {...formik.getFieldProps('EmployeeID')}
                    />
              </div>
              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>India Phone no.</label>
                <div className='col-lg-3 fv-row'>
                
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                        placeholder=''
                        {...formik.getFieldProps('IndiaPhoneNo')}
                      />
                </div>
          </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Marital Status</label>

              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border border-primary" aria-label="Select example">
              <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                </select>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>ID Card Number</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                      {...formik.getFieldProps('IDCardNumber')}
                    />
              </div>
            </div>


            
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date Of Birth</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date Of joining</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>



            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Access Door Number</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                      {...formik.getFieldProps('AccessDoorNumber')}
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport Number</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                      {...formik.getFieldProps('PassportNumber')}
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                      {...formik.getFieldProps('VisaType')}
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Place of Work</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                      {...formik.getFieldProps('PlaceOfWork')}
                    />
              </div>
            </div>



            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Exp Date</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Resident Card Exp Date</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Exp date</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Number</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                      {...formik.getFieldProps('VisaNumber')}
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Department </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Internal Job Title</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'> MP JobTitle</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>MP Joining Date</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
 </div>

              <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Total Salary </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Basic Salary</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>
            
           
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Position</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            

            </div>





            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Email ID</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='email'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Employee Status /Co.</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Contact Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Emergency Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Contract (From)  </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>(To)</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>



            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Status  </label>

              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border border-primary" aria-label="Select example">
              <option value="On Leave">On Leave</option>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
              <option value="Retired">Retired</option>
              </select>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Division</label>

              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border border-primary" aria-label="Select example">
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
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Current Work Exp (Years) </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Insurance Policy Number</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

            
            </div>


            
          

              <div className='row mb-6 pt-10'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Benefits</label>

              <div className='col-lg-10 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                     
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Medical</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input border border-primary'
                     
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Accommodation</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Fuel Allowance</span>
                  </label>


                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Car</span>
                  </label>


                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input border border-primary'
                      
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Flight Ticket</span>
                  </label>

                 



                </div>
               
              </div>
            </div>  



<div className='add-Benefits'>   
  <div  className="d-flex justify-content-start pb-1">
            <a className="text-white" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1"> 
                <button type="button" className="btn btn-primary btn-sm">+ Add Benefits</button>
            </a> 
                </div>
      <div className="collapse" id="collapseExample1">
      <div className='row mb-1 d-flex'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Enter Benefit Name</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />

              <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-primary svg-icon-2hx" />

              </IconButton>

              </div>
            </div>
      </div>
</div>



<div className='add-family'>   
  <div  className="d-flex justify-content-start pb-5">
            <a className="text-white" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2"> 
                <button type="button" className="btn btn-primary btn-sm">+ Add Family Member</button>
            </a> 
                </div>
      <div className="collapse" id="collapseExample2">

      <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

            </div>

            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

            </div>

            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border border-primary" aria-label="Select example">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              </select>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border border-primary" aria-label="Select example">
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Sibling">Sibling</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              </select>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border border-primary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>
              <div className='col-lg-3 fv-row'>
              <select
                  className='form-select form-select-solid border border-primary'
                  {...formik.getFieldProps('country')}
                >
                  <option value=''>Select a Country...</option>
                  <option value='AF'>Afghanistan</option>
                  <option value='AX'>Aland Islands</option>
                  <option value='AL'>Albania</option>
                  <option value='DZ'>Algeria</option>
                  <option value='AS'>American Samoa</option>
                  <option value='AD'>Andorra</option>
                  <option value='AO'>Angola</option>
                  <option value='AI'>Anguilla</option>
                  <option value='AQ'>Antarctica</option>
                  <option value='AG'>Antigua and Barbuda</option>
                  <option value='AR'>Argentina</option>
                  <option value='AM'>Armenia</option>
                  <option value='AW'>Aruba</option>
                  <option value='AU'>Australia</option>
                  <option value='AT'>Austria</option>
                  <option value='AZ'>Azerbaijan</option>
                  <option value='BS'>Bahamas</option>
                  <option value='BH'>Bahrain</option>
                  <option value='BD'>Bangladesh</option>
                  <option value='BB'>Barbados</option>
                  <option value='BY'>Belarus</option>
                  <option value='BE'>Belgium</option>
                  <option value='BZ'>Belize</option>
                  <option value='BJ'>Benin</option>
                  <option value='BM'>Bermuda</option>
                  <option value='BT'>Bhutan</option>
                  <option value='BO'>Bolivia, Plurinational State of</option>
                  <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                  <option value='BA'>Bosnia and Herzegovina</option>
                  <option value='BW'>Botswana</option>
                  <option value='BV'>Bouvet Island</option>
                  <option value='BR'>Brazil</option>
                  <option value='IO'>British Indian Ocean Territory</option>
                  <option value='BN'>Brunei Darussalam</option>
                  <option value='BG'>Bulgaria</option>
                  <option value='BF'>Burkina Faso</option>
                  <option value='BI'>Burundi</option>
                  <option value='KH'>Cambodia</option>
                  <option value='CM'>Cameroon</option>
                  <option value='CA'>Canada</option>
                  <option value='CV'>Cape Verde</option>
                  <option value='KY'>Cayman Islands</option>
                  <option value='CF'>Central African Republic</option>
                  <option value='TD'>Chad</option>
                  <option value='CL'>Chile</option>
                  <option value='CN'>China</option>
                  <option value='CX'>Christmas Island</option>
                  <option value='CC'>Cocos (Keeling) Islands</option>
                  <option value='CO'>Colombia</option>
                  <option value='KM'>Comoros</option>
                  <option value='CG'>Congo</option>
                  <option value='CD'>Congo, the Democratic Republic of the</option>
                  <option value='CK'>Cook Islands</option>
                  <option value='CR'>Costa Rica</option>
                  <option value='CI'>Côte d'Ivoire</option>
                  <option value='HR'>Croatia</option>
                  <option value='CU'>Cuba</option>
                  <option value='CW'>Curaçao</option>
                  <option value='CY'>Cyprus</option>
                  <option value='CZ'>Czech Republic</option>
                  <option value='DK'>Denmark</option>
                  <option value='DJ'>Djibouti</option>
                  <option value='DM'>Dominica</option>
                  <option value='DO'>Dominican Republic</option>
                  <option value='EC'>Ecuador</option>
                  <option value='EG'>Egypt</option>
                  <option value='SV'>El Salvador</option>
                  <option value='GQ'>Equatorial Guinea</option>
                  <option value='ER'>Eritrea</option>
                  <option value='EE'>Estonia</option>
                  <option value='ET'>Ethiopia</option>
                  <option value='FK'>Falkland Islands (Malvinas)</option>
                  <option value='FO'>Faroe Islands</option>
                  <option value='FJ'>Fiji</option>
                  <option value='FI'>Finland</option>
                  <option value='FR'>France</option>
                  <option value='GF'>French Guiana</option>
                  <option value='PF'>French Polynesia</option>
                  <option value='TF'>French Southern Territories</option>
                  <option value='GA'>Gabon</option>
                  <option value='GM'>Gambia</option>
                  <option value='GE'>Georgia</option>
                  <option value='DE'>Germany</option>
                  <option value='GH'>Ghana</option>
                  <option value='GI'>Gibraltar</option>
                  <option value='GR'>Greece</option>
                  <option value='GL'>Greenland</option>
                  <option value='GD'>Grenada</option>
                  <option value='GP'>Guadeloupe</option>
                  <option value='GU'>Guam</option>
                  <option value='GT'>Guatemala</option>
                  <option value='GG'>Guernsey</option>
                  <option value='GN'>Guinea</option>
                  <option value='GW'>Guinea-Bissau</option>
                  <option value='GY'>Guyana</option>
                  <option value='HT'>Haiti</option>
                  <option value='HM'>Heard Island and McDonald Islands</option>
                  <option value='VA'>Holy See (Vatican City State)</option>
                  <option value='HN'>Honduras</option>
                  <option value='HK'>Hong Kong</option>
                  <option value='HU'>Hungary</option>
                  <option value='IS'>Iceland</option>
                  <option value='IN'>India</option>
                  <option value='ID'>Indonesia</option>
                  <option value='IR'>Iran, Islamic Republic of</option>
                  <option value='IQ'>Iraq</option>
                  <option value='IE'>Ireland</option>
                  <option value='IM'>Isle of Man</option>
                  <option value='IL'>Israel</option>
                  <option value='IT'>Italy</option>
                  <option value='JM'>Jamaica</option>
                  <option value='JP'>Japan</option>
                  <option value='JE'>Jersey</option>
                  <option value='JO'>Jordan</option>
                  <option value='KZ'>Kazakhstan</option>
                  <option value='KE'>Kenya</option>
                  <option value='KI'>Kiribati</option>
                  <option value='KP'>Korea, Democratic People's Republic of</option>
                  <option value='KW'>Kuwait</option>
                  <option value='KG'>Kyrgyzstan</option>
                  <option value='LA'>Lao People's Democratic Republic</option>
                  <option value='LV'>Latvia</option>
                  <option value='LB'>Lebanon</option>
                  <option value='LS'>Lesotho</option>
                  <option value='LR'>Liberia</option>
                  <option value='LY'>Libya</option>
                  <option value='LI'>Liechtenstein</option>
                  <option value='LT'>Lithuania</option>
                  <option value='LU'>Luxembourg</option>
                  <option value='MO'>Macao</option>
                  <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                  <option value='MG'>Madagascar</option>
                  <option value='MW'>Malawi</option>
                  <option value='MY'>Malaysia</option>
                  <option value='MV'>Maldives</option>
                  <option value='ML'>Mali</option>
                  <option value='MT'>Malta</option>
                  <option value='MH'>Marshall Islands</option>
                  <option value='MQ'>Martinique</option>
                  <option value='MR'>Mauritania</option>
                  <option value='MU'>Mauritius</option>
                  <option value='YT'>Mayotte</option>
                  <option value='MX'>Mexico</option>
                  <option value='FM'>Micronesia, Federated States of</option>
                  <option value='MD'>Moldova, Republic of</option>
                  <option value='MC'>Monaco</option>
                  <option value='MN'>Mongolia</option>
                  <option value='ME'>Montenegro</option>
                  <option value='MS'>Montserrat</option>
                  <option value='MA'>Morocco</option>
                  <option value='MZ'>Mozambique</option>
                  <option value='MM'>Myanmar</option>
                  <option value='NA'>Namibia</option>
                  <option value='NR'>Nauru</option>
                  <option value='NP'>Nepal</option>
                  <option value='NL'>Netherlands</option>
                  <option value='NC'>New Caledonia</option>
                  <option value='NZ'>New Zealand</option>
                  <option value='NI'>Nicaragua</option>
                  <option value='NE'>Niger</option>
                  <option value='NG'>Nigeria</option>
                  <option value='NU'>Niue</option>
                  <option value='NF'>Norfolk Island</option>
                  <option value='MP'>Northern Mariana Islands</option>
                  <option value='NO'>Norway</option>
                  <option value='OM'>Oman</option>
                  <option value='PK'>Pakistan</option>
                  <option value='PW'>Palau</option>
                  <option value='PS'>Palestinian Territory, Occupied</option>
                  <option value='PA'>Panama</option>
                  <option value='PG'>Papua New Guinea</option>
                  <option value='PY'>Paraguay</option>
                  <option value='PE'>Peru</option>
                  <option value='PH'>Philippines</option>
                  <option value='PN'>Pitcairn</option>
                  <option value='PL'>Poland</option>
                  <option value='PT'>Portugal</option>
                  <option value='PR'>Puerto Rico</option>
                  <option value='QA'>Qatar</option>
                  <option value='RE'>Réunion</option>
                  <option value='RO'>Romania</option>
                  <option value='RU'>Russian Federation</option>
                  <option value='RW'>Rwanda</option>
                  <option value='BL'>Saint Barthélemy</option>
                  <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value='KN'>Saint Kitts and Nevis</option>
                  <option value='LC'>Saint Lucia</option>
                  <option value='MF'>Saint Martin (French part)</option>
                  <option value='PM'>Saint Pierre and Miquelon</option>
                  <option value='VC'>Saint Vincent and the Grenadines</option>
                  <option value='WS'>Samoa</option>
                  <option value='SM'>San Marino</option>
                  <option value='ST'>Sao Tome and Principe</option>
                  <option value='SA'>Saudi Arabia</option>
                  <option value='SN'>Senegal</option>
                  <option value='RS'>Serbia</option>
                  <option value='SC'>Seychelles</option>
                  <option value='SL'>Sierra Leone</option>
                  <option value='SG'>Singapore</option>
                  <option value='SX'>Sint Maarten (Dutch part)</option>
                  <option value='SK'>Slovakia</option>
                  <option value='SI'>Slovenia</option>
                  <option value='SB'>Solomon Islands</option>
                  <option value='SO'>Somalia</option>
                  <option value='ZA'>South Africa</option>
                  <option value='GS'>South Georgia and the South Sandwich Islands</option>
                  <option value='KR'>South Korea</option>
                  <option value='SS'>South Sudan</option>
                  <option value='ES'>Spain</option>
                  <option value='LK'>Sri Lanka</option>
                  <option value='SD'>Sudan</option>
                  <option value='SR'>Suriname</option>
                  <option value='SJ'>Svalbard and Jan Mayen</option>
                  <option value='SZ'>Swaziland</option>
                  <option value='SE'>Sweden</option>
                  <option value='CH'>Switzerland</option>
                  <option value='SY'>Syrian Arab Republic</option>
                  <option value='TW'>Taiwan, Province of China</option>
                  <option value='TJ'>Tajikistan</option>
                  <option value='TZ'>Tanzania, United Republic of</option>
                  <option value='TH'>Thailand</option>
                  <option value='TL'>Timor-Leste</option>
                  <option value='TG'>Togo</option>
                  <option value='TK'>Tokelau</option>
                  <option value='TO'>Tonga</option>
                  <option value='TT'>Trinidad and Tobago</option>
                  <option value='TN'>Tunisia</option>
                  <option value='TR'>Turkey</option>
                  <option value='TM'>Turkmenistan</option>
                  <option value='TC'>Turks and Caicos Islands</option>
                  <option value='TV'>Tuvalu</option>
                  <option value='UG'>Uganda</option>
                  <option value='UA'>Ukraine</option>
                  <option value='AE'>United Arab Emirates</option>
                  <option value='GB'>United Kingdom</option>
                  <option value='US'>United States</option>
                  <option value='UY'>Uruguay</option>
                  <option value='UZ'>Uzbekistan</option>
                  <option value='VU'>Vanuatu</option>
                  <option value='VE'>Venezuela, Bolivarian Republic of</option>
                  <option value='VN'>Vietnam</option>
                  <option value='VI'>Virgin Islands</option>
                  <option value='WF'>Wallis and Futuna</option>
                  <option value='EH'>Western Sahara</option>
                  <option value='YE'>Yemen</option>
                  <option value='ZM'>Zambia</option>
                  <option value='ZW'>Zimbabwe</option>
                </select>
              </div>
            </div>

      </div>


</div>


      
            <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Update'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>

          

          </div>
        </form>
      </div>
    </div>

    



    {/* search for an employee information form 
    ******************************************************************************************************************/}

    <div className='card mb-2 mb-xl-5'>
      <div
        className='border-0 rounded-3 cursor-pointer p-3'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#search_employee_info'
        aria-expanded='true'
        aria-controls='search_employee_info'
        style={{background: "#34a8cb"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <i className="bi bi-person-lines-fill fs-2x  px-5 svg-icon-muted text-warning"></i>  {/* icon  */}

                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0 text-white'>View Employee Information</h3>
                </div>
        </IconButton>

    


      </div>

      <div id='search_employee_info' className='collapse'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-9'>




  
   <div className='d-flex justify-content-center'>
          <div className='col-lg-5 fv-row mb-10 d-flex'>

              <select className="col-lg-1 form-select form-select-solid border-3 border-primary" aria-label="Select example"  style={{background: "#d9f3fa"}}>

                <option value="">Employee (Name) / ID (000)</option>
                <option value="Rawan / 040">Rawan / 040</option>
                <option value="Balqees / 019">Balqees / 019</option>
                <option value="Zainab / 003">Zainab / 003</option>
                <option value="Saji / 022">Saji / 022</option>

              </select>

              <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-primary svg-icon-2hx" />

              </IconButton>


            </div>

          </div>

          <hr className='text-muted pb-5'></hr>


          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Saji</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> India</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Male</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Employee ID</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 103</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>India Phone no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Marital Status</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Married</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>ID Card Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>88484884</p>
              </div>
            </div>
            

            
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date Of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 30-3-1992</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date Of joining</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 1-3-2013</p>
              </div>
            </div>



            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Access Door Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3676</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Place of Work</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Tamimah Telecom </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Exp Date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>11/12/2025</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Resident Card Exp Date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>08/07/2023</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Exp date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 08/07/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>4884</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Department</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Business </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Internal Job Title</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>HR Manager</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>MP JobTitle</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> HR Manager</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>MP Joining Date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 23/04/2011</p>
              </div>
            </div>




            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Total Salary</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 800 OMR</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Basic Salary</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 900 OMR</p>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Position</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>HR Manager</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 839273</p>
              </div>
            </div>




            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Email ID</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> saji@gmail.com</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Employee Status</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Tamimah Telecom</p>
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Contact number</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 99119932 </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Emergency number</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 98881818 </p>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Contract (From)</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>09/01/2011</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>(To)</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 09/01/2029</p>
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Status</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Active</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Division</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>HR</p>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Current Work Exp (Years)</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>10</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Insurance Policy Number</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 90292</p>
              </div>
            </div>


            
            <hr className='text-muted'></hr>

                        <div className='row mb-6'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Benefits</label>

              <div className='col-lg-10 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Medical</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Accommodation</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Fuel Allowance</span>
                  </label>


                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Car</span>
                  </label>


                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Flight Ticket</span>
                  </label>


                </div>
              </div>
            </div>       



            <div className='card mb-2 mb-xl-5'>
      <div
        className='border-0 rounded-3 cursor-pointer p-3'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#search_family_info'
        aria-expanded='true'
        aria-controls='search_family_info'
        style={{background: "#6255a3"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
               <i className="bi bi-people-fill fs-2x px-5 svg-icon-muted text-warning"></i>  {/* icon  */}
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0 text-white'>View Family Members Details</h3>
                </div>
        </IconButton>

    

 
      </div>

      <div id='search_family_info' className='collapse'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-9'>





      <p className="fw-bold mb-5"><span className="badge badge-primary fs-6"><i className="bi bi-person text-white fs-3 me-3"></i> Arya Babu</span></p>
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Arya</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3/30/2000</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Female</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Child</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>823682163</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>77262</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>India</p>
              </div>
            </div>

{/* person no. 2 */}
            <p className="fw-bold mb-5 mt-15"><span className="badge badge-primary fs-6"><i className="bi bi-person text-white fs-3 me-3"></i> Arjun Babu</span></p>
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Arjun </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3/30/2000</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Female</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Child</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>823682163</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>77262</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>India</p>
              </div>
            </div>
            
            </div>
              </form>
        </div>
      </div>
            
            
          </div>
        </form>
      </div>
    </div>




    <div className='card mb-2 mb-xl-5'>
      <div
        className='border-0 rounded-3 cursor-pointer p-3'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#search_family_info'
        aria-expanded='true'
        aria-controls='search_family_info'
        style={{background: "#4b7ead"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
               <i className="bi bi-people-fill fs-2x px-5 svg-icon-muted text-warning"></i>  {/* icon  */}
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0 text-white'>View Family Members Details</h3>
                </div>
        </IconButton>

    

 
      </div>

      <div id='search_family_info' className='collapse'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-9'>


          <div className='d-flex justify-content-center pt-5'>
          <div className='col-lg-5 fv-row mb-5 d-flex'>

              <select className="col-lg-1 form-select form-select-solid border-3 border-primary" aria-label="Select example"  style={{background: "#d9f3fa"}}>

                <option value="">Employee (Name) / ID (000)</option>
                <option value="Rawan / 040">Rawan / 040</option>
                <option value="Balqees / 019">Balqees / 019</option>
                <option value="Zainab / 003">Zainab / 003</option>
                <option value="Saji / 022">Saji / 022</option>

              </select>

              <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <KTSVG path="/media/icons/duotune/arrows/arr016.svg" className="svg-icon-muted text-primary svg-icon-2hx" />

              </IconButton>
            </div>
            </div>



      <p className="fw-bold mb-5"><span className="badge badge-primary fs-6"><i className="bi bi-person text-white fs-3 me-3"></i> Arya Babu</span></p>
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Arya</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3/30/2000</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Female</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Child</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>823682163</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>77262</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>India</p>
              </div>
            </div>

{/* person no. 2 */}
            <p className="fw-bold mb-5 mt-15"><span className="badge badge-primary fs-6"><i className="bi bi-person text-white fs-3 me-3"></i> Arjun Babu</span></p>
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Arjun </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3/30/2000</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Female</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Child</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>823682163</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>77262</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>India</p>
              </div>
            </div>
            
            </div>
              </form>
        </div>
      </div>
            

    <br></br><br></br>  
      
    
    </>
    )
} 
  
export {AddAccount}
export {AddAccounts}