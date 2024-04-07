
import React, {useState} from 'react'
import {toAbsoluteUrl, KTSVG} from '../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../modules/accounts/components/settings/SettingsModel'
// import * as Yup from 'yup'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {FC} from 'react'
import {
  CardsWidget7,
  CardsWidget21,
  CardsWidget20,
  CardsWidget30,
  ListsWidget26,
  EngageWidget10,
  MixedWidget16,
} from '../../../../_metronic/partials/widgets'





const Policy :FC = () =>{
    return <>

        
<h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-1 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */}Edit Leave Policy</h5>


<div className='row g-6 g-xl-30 mb-10 mb-xl-4 justify-content-md-center'>

      <div className='col-md-8 col-lg-2 mb-md-5'>
        <a className="text-white" data-bs-toggle="collapse" href="#Sick_Leave" role="button" aria-expanded="false" aria-controls="Sick_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#34a8cb'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Sick Leave'
                        description=''
                    />
          </a>
          <a className="text-white" data-bs-toggle="collapse" href="#Maternity_Leave" role="button" aria-expanded="false" aria-controls="Maternity_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Maternity Leave'
                        description=''
                    />
            </a>
            <a className="text-white" data-bs-toggle="collapse" href="#Paternity_Leave" role="button" aria-expanded="false" aria-controls="Paternity_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Paternity Leave'
                        description=''
                    />
                    </a>
        </div>

             
                <div className='col-md-8 col-lg-2 mb-md-5' >
                <a className="text-white" data-bs-toggle="collapse" href="#Marrige_Leave" role="button" aria-expanded="false" aria-controls="Marrige_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Marriage Leave'
                        description=''
                        
                    /> 
                    </a>

                    <a className="text-white" data-bs-toggle="collapse" href="#Unpaid_Leave" role="button" aria-expanded="false" aria-controls="Unpaid_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Unpaid Leave'
                        description=''
                       
                    />
                     <a className="text-white" data-bs-toggle="collapse" href="#Hajj_Leave" role="button" aria-expanded="false" aria-controls="Hajj_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Hajj Leave'
                        description=''
                    />
                    </a>

                    </a>
                </div>

            <div className='col-md-8 col-lg-2 mb-md-5' >

              <a className="text-white" data-bs-toggle="collapse" href="#Emergency_Leave" role="button" aria-expanded="false" aria-controls="Emergency_Leave"> 
                  <CardsWidget30
                      className='h-md-45 mb-5'
                      color='#143983'
                      img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                      title='Emergency Leave'
                      description=''
                  />

              </a>

              <a className="text-white" data-bs-toggle="collapse" href="#Annual_Leave" role="button" aria-expanded="false" aria-controls="Annual_Leave"> 
                    <CardsWidget30
                        className='h-md-45 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Annual Leave'
                        description=''
                    />
              </a>

              <a className="text-white" data-bs-toggle="collapse" href="#Additional_Leave" role="button" aria-expanded="false" aria-controls="Additional_Leave"> 
                  <CardsWidget30
                      className='h-md-45 mb-5'
                      color='#34a8cb'
                      img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                      title='Additional Leave'
                      description=''
                  />
                </a>
                
        </div>
</div>







<div className='accordion accordion-borderless' id='kt_accordion_1' style={{border: 'shadow-white'}}>

<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Sick_Leave'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_1'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body text-body-secondary rounded-4 p-15 container bg-primary-subtle text-primary'>
    <p className='text-justify'>
    <span className="datafield p-5" contentEditable="true">
         <strong> 
          On certain occasions, employees may not be able to attend work due to sickness. Sick leave is defined as an employee being unfit for work due to illness.
        </strong>
          <ul className='p-5'>
            <li>An employee is entitled to 9 days of paid sick leave in a calendar year.</li>
            <li>In cases of sick leave of 10 days or more in one year, they will be required to provide a medical certificate obtained from an appropriate licensed medical practitioner. If a certificate is not provided on request, sick leave will not be paid unless authorized and justified by the Line Manager and it may result in being considered unauthorized.</li>
            <li>If an employee is absent, he/she is required to contact the Line Manager and the HR no later than the employees’ normal office starting time on the day of absence. The employee must notify the Line Manager of the nature of the illness and approximate time they will be absent.</li>
          </ul>
        <strong>
          Where an employee needs to extend his/her sick leave the Line Manager should be notified so that appropriate pay leave arrangement may be made. HR department will monitor sick leave taken during the year, and issue leave status on monthly basis.
        </strong>
    
    </span>
    </p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
    </div>
    </div>
  </div>
</div>





<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Annual_Leave'
    className='accordion-collapse collapse '
    aria-labelledby='kt_accordion_1_header_2'
    data-bs-parent='#kt_accordion_1'
  >
  <div className='accordion-body bg-primary-subtle  rounded-4 p-15 container text-primary'>
  <span className="datafield p-5" contentEditable="true">
      As per the labour law article (61) An employee shall have a right to an annual leave with full salary based on completing 6 months of the joining date. All employees are requested to take the business needs into consideration when planning their annual leave. Request for leave has to be approved from Line Manager and the CEO and may be amended based on business needs. Leave requests should be made as far in advance as possible to ensure the company is able to plan cover, for employees work effectively.
      Leave entitlement that are not taken during the year, the company only allow 10 days that can be carried forward to the next year.
      A printed copy and a soft copy of the annual leave form must be submitted through email to the HR department, once it’s approved the HR will inform the employee and will send a copy of the approved leave.
      The employee will send the details of the destination to the administration department. For annual leave ticket payments will be taken care of by the accounting team in collaboration with Administration.
      </span>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
    </div>
    </div>
  </div>
</div>


<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Maternity_Leave'
    className='accordion-collapse collapse '
    aria-labelledby='kt_accordion_1_header_3'
    data-bs-parent='#kt_accordion_1'
  >
  <div className='accordion-body bg-primary-subtle  rounded-4 p-15 container text-primary'>
  <span className="datafield p-5" contentEditable="true">
      <strong>
        As per Labour law article (83) & (84), a female employee shall be entitled to maternity leave of fifty (50) calendar days with full pay which includes the period before and after the delivery but no more than 3 maternity leaves throughout the service,
      </strong>
      <ul>
        <li>A female employee is also entitled to an additional period of unpaid leave in the event of sickness attributable to pregnancy or delivery (if proven by a medical certificate), which shall be 6 months and supporting documents must be provided.</li>
        <li>The female employee should apply for the paid maternity leave on the application form at least 30 days before starting the leave period to allow enough time for Tamimah to make alternative arrangements for the role requirements.</li>
      </ul>
      <br></br> An application for leave form must be completed and approved by the Line Manager and HR
      </span>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
    </div>
    </div>
  </div>
</div>

<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Paternity_Leave'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_4'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body bg-primary-subtle  rounded-4 p-15 container text-primary'>
    <span className="datafield p-5" contentEditable="true">
    <ul>
      <li>Tamimah allows fathers for a period of 5 working days as paternity leave. The leave application form must be submitted and approved by the line manager.</li>
    </ul>
    </span>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
    </div>
    </div>
  </div>
</div>


<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Hajj_Leave'
    className='accordion-collapse collapse '
    aria-labelledby='kt_accordion_1_header_5'
    data-bs-parent='#kt_accordion_1'
  >
      <div className='accordion-body bg-primary-subtle  rounded-4 p-15 container text-primary'>
      <span className="datafield p-5" contentEditable="true">
      <ul>
        <li>In reference to Oman labour law article (67) employee is guaranteed Fifteen days for the performance of Al-Hajj once throughout the period of his service if he/she has completed one year in the service of the employer.</li>
      </ul>
      </span>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
    </div>
    </div>
  </div>
</div>



<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Marrige_Leave'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_6'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body bg-primary-subtle  rounded-4 p-15 container text-primary'>
    <span className="datafield p-5" contentEditable="true">
        <ul>
          <li>Employee is entitled to a special leave of 10 days in case of marriage and shall not be granted more than one throughout the period of their service.</li>
        </ul>
        </span>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
        </div>
      </div>
  </div>
</div>



<div className='accordion-item bg-transparent pb-3'>
  <div
    id='Unpaid_Leave'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_7'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body  bg-primary-subtle  rounded-4 p-15 container text-primary'>
    <span className="datafield p-5" contentEditable="true">
      An employee may request unpaid days off in cases of personal or professional need using Leave application form. It should be applied for at least 5 days in advance whenever possible.

      Unpaid leave can be applied for by an employee for a maximum period of 30 days. All supporting documentation should be provided at the time of application.
      </span>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
    </div>
    </div>
  </div>
</div>


  <div className='accordion-item bg-transparent pb-3'>
    <div
      id='Emergency_Leave'
      className='accordion-collapse collapse'
      aria-labelledby='kt_accordion_1_header_8'
      data-bs-parent='#kt_accordion_1'
    >
    <div className='accordion-body bg-primary-subtle  rounded-4 p-15 container text-primary'>
    <span className="datafield p-5" contentEditable="true">
        <strong> In reference to the article (67) of Oman labour Law. Compassionate leave is granted to an employee in cases of death, life threatening illness or serious injury to a member of the employee’s immediate family or close relation. </strong>
        <ul>
          <li>Three days in case of the death of a son, daughter, mother, father, wife, grandfather, grandmother, brother or sister.</li>
          <li>Two days in case of the death of an uncle, or an aunt.</li>
          <li>One hundred and thirty days for a working Muslim wife in the event of her husband's death.</li>
          <li> Fifteen days during the year for the purpose of sitting for examination in case of an Omani worker who is an associate student with one of the schools, institutes, colleges or universities.</li>
        </ul>
        </span>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
        </div>
      </div>
    </div>
  </div>

  <div className='accordion-item bg-transparent pb-3'>
    <div
      id='Additional_Leave'
      className='accordion-collapse collapse'
      aria-labelledby='kt_accordion_1_header_9'
      data-bs-parent='#kt_accordion_1'
    >
    <div className='accordion-body bg-primary-subtle rounded-4 p-15 container text-primary'>
    <span className="datafield p-5" contentEditable="true">
        <ul>
          <li>HOLIDAYS: All official and public holidays will be observed in accordance with the laws of the Sultanate of Oman.</li>
        </ul>
        </span>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-sm btn-primary btn-active-light-primary" type="button"><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Save Changes</button>
      </div>
      </div>
    </div>
  </div>
</div>


    
    </>
} 

export {Policy}