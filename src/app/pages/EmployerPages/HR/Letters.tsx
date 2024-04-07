import React, { useState } from 'react';
import { KTSVG } from '../../../../_metronic/helpers';

function HRLetters() {

  return (
    <>


<h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */}  HR Letters and Forms</h5>
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

<div className="row">
<div className="col-4">
  <div className="list-group" id="list-tab" role="tablist">
    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-1-list" data-bs-toggle="list" href="#Letter-1" role="tab" aria-controls="Letter-1"
        style={{background:"#CFE0FD"}}>
         Salary Transfer Letter
    </a>


    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-2-list" data-bs-toggle="list" href="#Letter-2" role="tab" aria-controls="Letter-2"
        style={{background:"#CFE0FD"}}>
         Residence Proof Letter
    </a>

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-3-list" data-bs-toggle="list" href="#Letter-3" role="tab" aria-controls="Letter-3"
        style={{background:"#CFE0FD"}}>
         NOC for Company Transfer
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-4-list" data-bs-toggle="list" href="#Letter-4" role="tab" aria-controls="Letter-4"
        style={{background:"#CFE0FD"}}>
          Pay Slip / Oman
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-5-list" data-bs-toggle="list" href="#Letter-5" role="tab" aria-controls="Letter-5"
        style={{background:"#CFE0FD"}}>
         Pay Slip / India
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-6-list" data-bs-toggle="list" href="#Letter-6" role="tab" aria-controls="Letter-6"
        style={{background:"#CFE0FD"}}>
        Visa Transfer / Arabic
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-7-list" data-bs-toggle="list" href="#Letter-7" role="tab" aria-controls="Letter-7"
        style={{background:"#CFE0FD"}}>
         Relieving letter / Arabic
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-8-list" data-bs-toggle="list" href="#Letter-8" role="tab" aria-controls="Letter-8"
        style={{background:"#CFE0FD"}}>
         Experience Certificate
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-9-list" data-bs-toggle="list" href="#Letter-9" role="tab" aria-controls="Letter-9"
        style={{background:"#CFE0FD"}}>
         Visa Clearance Certificate / Arabic
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-10-list" data-bs-toggle="list" href="#Letter-10" role="tab" aria-controls="Letter-10"
        style={{background:"#CFE0FD"}}>
         Bank Muscat Salary Certificate
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger p-2 mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-11-list" data-bs-toggle="list" href="#Letter-11" role="tab" aria-controls="Letter-11"
        style={{background:"#CFE0FD"}}>
        NOC Schengen 
    </a>

    
    <a className="btn btn-outline btn-outline-light-primary btn-active-danger  mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-12-list" data-bs-toggle="list" href="#Letter-12" role="tab" aria-controls="Letter-12"
        style={{background:"#CFE0FD"}}>
         Salary Transfer Letter / Oman Housing Bank
    </a>  

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-13-list" data-bs-toggle="list" href="#Letter-13" role="tab" aria-controls="Letter-13"
        style={{background:"#CFE0FD"}}>
        Salary Transfer Letter / Arabic
    </a>  


    <a className="btn btn-outline btn-outline-light-primary btn-active-danger mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-14-list" data-bs-toggle="list" href="#Letter-14" role="tab" aria-controls="Letter-14"
        style={{background:"#CFE0FD"}}>
         Request New Sim Card / E-Sim
    </a> 

    <a className="btn btn-outline btn-outline-light-primary btn-active-danger  mx-3 mb-3 fs-7 fw-bold text-body-secondary"
        id="Letter-15-list" data-bs-toggle="list" href="#Letter-15" role="tab" aria-controls="Letter-15"
        style={{background:"#CFE0FD"}}>
         Certificate of Training
    </a> 

  </div>
</div>
<div className="col-8">
  <div className="tab-content" id="nav-tabContent">
  {/* Salary Transfer Letter / Letter-1*/}
     <div className="tab-pane fade" id="Letter-1" role="tabpanel" aria-labelledby="Letter-1-list"> {/*show active */}
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    <b>Date: <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span></b>  
                    <br></br><br></br>
                     To Whom It May Concern 
                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>SALARY TRANSFER LETTER</b>
                            <br></br><br></br>
                        </p>
                    </div>

                    This is to certify that <span className="datafield text-danger" contentEditable="true">(Mr.   XXX)</span>, holder of Passport <span className="datafield text-danger" contentEditable="true">(no.M6522555)</span>, <span className="datafield text-danger" contentEditable="true">(Civil ID no.1032228404)</span> is currently working with our organization in the position of General System Analyst. He is employed with us since <span className="datafield text-danger" contentEditable="true">(12/10/2021)</span>.
                    <br></br><br></br>
                    He withdraws a monthly gross salary of OMR <span className="datafield text-danger" contentEditable="true">(900/- Nine Hundred Rials Only)</span> . His salary is being transferred to his account with bank muscat having account <span className="datafield text-danger" contentEditable="true">(no. 003330000000X)</span> .
                    <br></br><br></br>
                    This letter is issued on behalf of the employee’s request and bears no financial responsibility on or behalf of any of the authorized signatories.
                    <br></br><br></br>
                    For and on behalf of Tamimah Marketing 

                    <br></br><br></br><br></br><br></br>
                    <b>Balqees Abdullah</b> 
                    <br></br>
                    <b>HR</b> 
            
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>
     
  {/* Residence Proof Letter / Letter-2*/}
    <div className="tab-pane fade" id="Letter-2" role="tabpanel" aria-labelledby="Letter-2-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    <b>Date: <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span></b>  <br></br><br></br>

                    To Whom It May Concern 
                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>RESIDENCE PROOF LETTER</b>
                            <br></br><br></br>
                        </p>
                    </div>
                    This is to certify that <span className="datafield text-danger" contentEditable="true">(Mr.   XXX)</span>, holder of Passport <span className="datafield text-danger" contentEditable="true">(no.M60000085)</span>, <span className="datafield text-danger" contentEditable="true">(Civil ID no.103000000)</span> is currently working with our organization in the position of General System Analyst and is residing in the below address: 
                    <br></br><br></br>
                    Flat No. <span className="datafield text-danger" contentEditable="true">(00)</span>, Building No <span className="datafield text-danger" contentEditable="true">(100)</span>, Way No:<span className="datafield text-danger" contentEditable="true">(000)</span>  Block No. <span className="datafield text-danger" contentEditable="true">(000)</span>, <br></br>
                    Area: <span className="datafield text-danger" contentEditable="true">(Al Mahaj Al Shamaliya, AL Amirat)</span><br></br>
                    Muscat, Sultanate of Oman <br></br><br></br><br></br>
                    This letter is issued on behalf of the employee’s request and bears no financial responsibility on or behalf of any of the authorized signatories.
                    <br></br><br></br>
                    For and on behalf of Tamimah Telecom & Computer Technology 
                    <br></br><br></br><br></br><br></br>
                    <b>Balqees Abdullah</b> 
                    <br></br>
                    <b>HR</b> 
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>
    

      {/* NOC for Company Transfer / Letter-3*/}
    <div className="tab-pane fade" id="Letter-3" role="tabpanel" aria-labelledby="Letter-3-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    <b>Date: <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span></b>  <br></br><br></br>

                    To Whom It May Concern 
                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>NOC for Company Transfer</b>
                            <br></br><br></br>
                        </p>
                    </div>
                    On behalf of Tamimah Marketing SPC, we have no objection to <span className="datafield text-danger" contentEditable="true">(Mr.   XXX)</span>
                     Holder of Passport number <span className="datafield text-danger" contentEditable="true">(L000000007)</span>. family visa to be transferred to 
                    Oman Investment & Finance Co. SAOG (OIFC).
                    <br></br><br></br>
                    We wish him all the best in his future endeavours.
                    <br></br><br></br><br></br><br></br>
                    <b>O.K Ravi</b> 
                    <br></br>
                    <b>Chief Executive Officer</b> 
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>

{/* Pay Slip / Oman / Letter-4*/}
   <div className="tab-pane fade" id="Letter-4" role="tabpanel" aria-labelledby="Letter-4-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    <b>PAYSLIP FOR THE MONTH OF <span className="datafield text-danger" contentEditable="true">(JUNE  2023)</span></b>  <br></br><br></br>

                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>PAYSlIP</b> 
                            <br></br><br></br>
                        </p>
                    </div>


                    <table className="table table-bordered border-gray-600">
                        <thead>
                            <tr>
                            <th scope="col">Name of the Employee:  <span className="datafield text-danger" contentEditable="true">(XXXXXX)</span> </th>
                            <th scope="col">Date of joining: <span className="datafield text-danger" contentEditable="true">(15/6/2023)</span></th>
                            </tr>
                            <tr>
                            <th scope="col">Designation: <span className="datafield text-danger" contentEditable="true">(Sales  Executive)</span> </th>
                            <th scope="col">ID Number: <span className="datafield text-danger" contentEditable="true">(1XXXXX73)</span></th>
                            </tr>
                            <tr className='bg-dark-subtle'>
                            <th scope="col">EARNINGS </th>
                            <th scope="col">DEDUCTIONS</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                            <td>Total Salary   OMR <span className="datafield text-danger" contentEditable="true">(000.00)</span> 
                                <br></br><br></br><br></br><br></br>
                                Sales Transportation Allowance OMR <span className="datafield text-danger" contentEditable="true">(5.100)</span> 
                                <br></br><span className="datafield text-danger" contentEditable="true">(Bank Transfer)</span>
                            </td>
                            <td>P.A.S.I Deduction <span className="datafield text-danger" contentEditable="true">(8%)</span>     OMR <span className="datafield text-danger" contentEditable="true">(00.00)</span>
                            </td>
                            </tr>
                            <tr>
                            <td>Total Earnings: OMR <span className="datafield text-danger" contentEditable="true">(000.00)</span></td>
                            <td>Total Deductions:  OMR <span className="datafield text-danger" contentEditable="true">(00.00)</span>   </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>Total Salary for this Month:  OMR <span className="datafield text-danger" contentEditable="true">(00.00)</span> </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>Amount In Words: <span className="datafield text-danger" contentEditable="true">(-)</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <p> <b>NOTE: </b>Your salary has been transferred to Bank Muscat with account NO. <span className="datafield text-danger" contentEditable="true">(0XXXXXXXXXXXXX)</span></p>
                    
                    <br></br><br></br><br></br><br></br>
                    <b >HR Signature </b>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b> Employee Signature </b>
                    <br></br>
                   
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>
    

    
{/* Pay Slip / India / Letter-5*/}
   <div className="tab-pane fade" id="Letter-5" role="tabpanel" aria-labelledby="Letter-5-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    <b>PAYSLIP FOR THE MONTH OF <span className="datafield text-danger" contentEditable="true">(JUNE  2023)</span></b>  <br></br><br></br>
                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>PAYSlIP</b> 
                            <br></br><br></br>
                        </p>
                    </div>
                    <table className="table table-bordered border-gray-600">
                        <thead>
                            <tr>
                            <th scope="col">Name of the Employee:  <span className="datafield text-danger" contentEditable="true">(XXXXXX)</span> </th>
                            <th scope="col">Designation: <span className="datafield text-danger" contentEditable="true">(XXXXXXXX)</span></th>
                            </tr>
                            <tr className='bg-dark-subtle'>
                            <th scope="col" colSpan={2}>EARNINGS </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td colSpan={2}>
                                Consultant Fees Pay  INR <span className="datafield text-danger" contentEditable="true">(25,000)</span>
                                <br></br><br></br>
                                Special Allowance  INR <span className="datafield text-danger" contentEditable="true">(6,000)</span>
                                <br></br><br></br>
                                Internet and Phone Allowance INR <span className="datafield text-danger" contentEditable="true">(4,000)</span>
                                <br></br><br></br>
                                Conveyance Allowance INR <span className="datafield text-danger" contentEditable="true">(5,000)</span>
                                <br></br><br></br>

                            </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>Amount In Words: <span className="datafield text-danger" contentEditable="true">(Forty Thousand Indian Rupees Only)</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br><br></br>
                    Ref: <span className="datafield text-danger" contentEditable="true">(Tamimah/2022/033)</span>
                    <br></br>
                    Date: <span className="datafield text-danger" contentEditable="true">(1/10/2022)</span>
                    <br></br>
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>

       
  {/* Visa Transfer / Arabic / Letter-6*/}
  <div className="tab-pane fade" id="Letter-6" role="tabpanel" aria-labelledby="Letter-6-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify text-end" style={{textAlign: 'justify'}}>   
                    <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span> التاريخ
                     <br></br><br></br>
                     تحية طيبة و بعد 
                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>الموضوع/ عدم ممانعة من نقل تأشيرة</b>
                            <br></br><br></br>
                        </p>
                    </div>
                    بلإشارة إلى الموضوع أعلاه نحن تميمة للتسويق ش.ش.و  ان ليس لدينا اي مانع من المذكور: <span className="datafield text-danger" contentEditable="true">(روان علي)</span> بأن تتم تحويل تأشيرة اسرته الي شركه عمان للاستثمارات والتمويل ش.م.ع.ع 
                    <div className="d-flex align-items-center justify-content-center">
                                    شاكرين لكم حسن تعاونكم...
                                    <br></br>
                                     و تفضلوا بقبول فائق الاحترام و التقدير...

                    </div>
                    <br></br><br></br>
                    تميمة للتسويق ش ش و 
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>


  {/* Relieving letter / Arabic / Letter-7*/}
  <div className="tab-pane fade" id="Letter-7" role="tabpanel" aria-labelledby="Letter-7-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify text-end" style={{textAlign: 'justify'}}>          
                        <br></br> الفاضل / مدير دائرة التشغيل
                        <br></br> المحترم
                        <br></br> وزارة العمل
                        <br></br> مسقط – سلطنة عمان
                        <br></br> تحية طيبة و بعد،،،

                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>الموضوع/ عدم ممانعة من الإستقالة</b>
                            <br></br><br></br>
                        </p>
                    </div>
                    بلإشارة إلى الموضوع أعلاه نحن تميمة للتسويق ش م م، قد قبلنا إستقالة الفاضلة/ زهرة بنت علي بن سالم الهاشميه حاملة بطاقة شخصية رقم 155555543 و
                    التي تعمل لدينا بوظيفة إخصائية موارد بشرية، بناءا على طلبها و ليس لدينا مانع من استقالتها حيث أنها تقدمت بطلب الإستقالة بتاريخ 25/02/2021م.
                    
                    <br></br><br></br>
                    .و لذا نطلب من الله ثم منكم الموافقة و المساعدة في الموضوع المذكور اعلاه على حسب الأنظمة و القوانين المتبعة لدى دائرتكم الموقرة
                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                                    شاكرين لكم حسن تعاونكم...
                                    <br></br>
                                     و تفضلوا بقبول فائق الاحترام و التقدير...

                    </div>

                    <br></br><br></br>
                    تميمة للتسويق ش ش و 
                    
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>


   
  {/* Experience Certificate / Letter-8*/}
    <div className="tab-pane fade" id="Letter-8" role="tabpanel" aria-labelledby="Letter-8-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    
                    To Whom It May Concern 
                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>Experience Certificate</b>
                            <br></br><br></br>
                        </p>
                    </div>
                 
                    This is to certify that <span className="datafield text-danger" contentEditable="true">(Ms. AXxxxx Hussain)</span>  
                    was a full-time employee with Tamimah Telecom as a <span className="datafield text-danger" contentEditable="true">(Sales Executive)</span> 
                    from <span className="datafield text-danger" contentEditable="true">(01st April 2021)</span> to <span className="datafield text-danger" contentEditable="true">(01st September 2022)</span>. 
                    During her employment she was professional, hardworking, and adapted very quickly to the working environment. 
                    <br></br><br></br>
                    We highly recommend her working with any organization as she would add immense value. We wish her all the best for all his future endeavors. 

                    <br></br><br></br>
                    For Tamimah Telecom & Computer Technology 
                    <br></br><br></br><br></br><br></br>
                    <b>Balqees Abdullah</b> 
                    <br></br>
                    <b>HR</b> 
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>


 {/* Visa Clearance Certificate / Arabic */}
  <div className="tab-pane fade" id="Letter-9" role="tabpanel" aria-labelledby="Letter-9-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify text-end" style={{textAlign: 'justify'}}>          
                الفاضل / مديرعام  الادارة العامة للجوازات والاحوال المدنية المحترم 
                    <br></br>
                    شرطة عمان السلطانية
                    <br></br>
                    تحية طيبه وبعد ...
                    <br></br><br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>الموضوع /  طلب إستخراج تأشيرة إلتحاق عائلي</b>
                            <br></br><br></br>
                        </p>
                    </div>
                    بالإشاره الى الموضوع أعلاه نرجو بالموافقه بإستخراج تأشيرة إلتحاق عائلي 
                        للمدعو/  Rxxxx Pillaiهندي الجنسيه ، يحمل جواز سفر رقم  U6555590938 حيث أنه والد المدعوه/ ميرا ميني وهي تعمل لدينا بمهنة فني صيانة اجهزة حاسب الي  بموجب بطاقة المقيم رقم1555554491 . وتحمل جواز سفر رقم  S2055522 وهي تحت  كفالتنا.
                    
                    <br></br><br></br>
                    عليه نرجو التكرم بالموافقه باستخراج هذه التأشيره وعلية نتحمل كافة المسؤوليه خلال فترة وجودها بالسطنة. 
                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                                    شاكرين لكم حسن تعاونكم...
                                    <br></br>
                                     و تفضلوا بقبول فائق الاحترام و التقدير...

                    </div>

                    <br></br><br></br>
                    تميمة للتسويق ش ش و 
                    
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>

       
  {/* Bank Muscat Salary Certificate / Letter-10*/}
  <div className="tab-pane fade" id="Letter-10" role="tabpanel" aria-labelledby="Letter-10-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                    <b>Date: <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span></b>  <br></br><br></br>

                        Ref: 4585<br></br>							
                        The Manager<br></br>	
                        Bank Muscat<br></br>	
                        PO Box 134 Ruwi -112<br></br>	
                        Sultanate of Oman<br></br>	
                        Dear Sir,<br></br>	
                        Re: Request for Credit Facility for <span className="datafield text-danger" contentEditable="true">(Mr. O.K Ravi )</span>

                    <br></br><br></br>
                
                    We have received a request from our above named employee to credit his/her salary and allowances into his/her account No: <span className="datafield text-danger" contentEditable="true">(0322000162060018 )</span>
                    with you so as to enable him to approach you for a credit facility
                    <br></br>
                    In this connection, we certify as under:
                    <br></br>
                    1.	Mr. O.K Ravi is employed with us since 07/05/2002 and his present gross salary is R.O 5000
                    <br></br>
                    2.	The accrued end of service benefits payable to Mr. O.K Ravi As of 31/12/2017 are as under
                    <br></br>
                    Gratuity	: R.O 12000/-
                    <br></br>
                    Any Other	: Nil
                    <br></br>
                    Total		: R.O 12000/-
                    <br></br>
                    3.	We undertake to transfer his total salary to his account with you as long as he is employed with us and in case he is leaving our services, we also undertake to transfer the end of service benefits due to him to his account with you. The undertaking is irrevocable and will not be cancelled until the Bank’s agreement to this effect is obtained in writing.
                    You will enjoy a preferential right on the end of the service benefits over the claims of any other creditors of the employee, including our Company.
                    <br></br>
                    4.	We also undertake to inform the Bank of any event that might adversely affect the repayment of the employee facility from the Bank.
                    For Tamimah Marketing SPC
                    <br></br><br></br><br></br><br></br>
                    <b>Balqees Abdullah</b> 
                    <br></br>
                    <b>HR</b> 

                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>

  {/* NOC Schengen / Letter-11*/}
  <div className="tab-pane fade" id="Letter-11" role="tabpanel" aria-labelledby="Letter-11-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                <b>Date: <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span></b>  
                    <br></br><br></br>
                     To Whom It May Concern 
                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>NOC Schengen</b>
                            <br></br><br></br>
                        </p>
                    </div>

                    <br></br><br></br>
                    Dear Sir/Madam, <br></br>
                    Greetings! <br></br>


                    This is to certify that Mr. Ravindranath Kumar holding an Indian Passport with Passport Number: Z4681573 & a Valid Resident Card with 
                    ID Number: 67838188  has been working at Tamimah Telecom as CEO, he is a full time employee since August of 2002. He is currently 
                    based in Muscat and being paid a total monthly salary of Five Thousand Omani riyals. 

                    <br></br><br></br>
                    I as the HR Specialist of Tamimah Telecom, have approved annual leave from 20th   of February to 10th of March 2023
                     and have no objection for Ravindranath Kumar to travel to Spain for the same.In this connection, we certify as under:
                    <br></br><br></br>

                   He would be back to Sultanate of Oman as agreed, due to the employment contract with us. 
                    <br></br><br></br>

                    This letter is issued to support his visa application and to confirm his current employment status and residency in the Sultanate. 
                    <br></br><br></br>

                    
                    <br></br><br></br><br></br><br></br>
                    <b>Yours Sincerely, <br></br> Balqees Al Fadhli <br></br> HR Specialist – Tamimah Telecom</b> 
                    <br></br>
               

                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>




 {/* Letter-12*/}
 <div className="tab-pane fade" id="Letter-12" role="tabpanel" aria-labelledby="Letter-12-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify text-end" style={{textAlign: 'justify'}}>          
                الأفاضل بنك الإسكان العماني  ش.م.ع.م.                                                    المحترمين
                    <br></br>
                    السلام عليكم ورحمة الله وبركاته ...
                    <br></br>
                    <br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>الموضوع/ استمرارية تحويل راتب شهري للموظف راشد عبيد الجرداني</b><br></br>
                            <b>الى حسابة لدى بنك مسقط : رقم الحساب (0446024104720013)</b>
                            <br></br><br></br>
                        </p>
                    </div>
                    نود الإفادة بأن المذكور أعلاه يعمل لدى الشركة بوظيفة مبرمج حاسب الي والرقم الوظيفي (11322231) وما زال مستمرا بوظيفته لدى تميمة للتسويق. 
                    وصافي الراتب الاجمالي المذكور (710) سبع مائة وعشر ريالات فقط ولا يشمل استقطاع الضمان الإجتماعي.
                    <br></br><br></br>
                        أعطيت له هذه الشهادة دون تحمل الشركة ادنى مسوؤلية اتجاه الغير  ...

                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                                    
                                    
                                     و تفضلوا بقبول فائق الاحترام و التقدير...

                    </div>

                    <br></br><br></br>
                    تميمة للتسويق ش ش و 
                    
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>


    
 {/*  Letter-13*/}
 <div className="tab-pane fade" id="Letter-13" role="tabpanel" aria-labelledby="Letter-13-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify text-end" style={{textAlign: 'justify'}}>          
                <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span> التاريخ
                     <br></br><br></br>
                     تحية طيبة و بعد 
                     <br></br>
                    السلام عليكم ورحمة الله وبركاته ...
                    <br></br>
                    <br></br>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>الموضوع/ شهادة استمرارية راتب للموظف محمد بن صالح الهاشمي</b><br></br>
                            <br></br><br></br>
                        </p>
                    </div>

                    نود الإفادة بأن المذكور أعلاه يعمل لدى شركة تميمة للتسويق ش ش و بوظيفة مدير العلاقات العامة  منذ 1/1/2015 م والرقم الوظيفي 
                    (1300052) وصافي الراتب الاجمالي المذكور (1000) الف ريال عماني  فقط وما زال المذكور مستمراً معنا
                    <br></br><br></br>
                        أعطيت له هذه الشهادة دون تحمل الشركة ادنى مسوؤلية اتجاه الغير  ...

                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                                    
                                    
                                     و تفضلوا بقبول فائق الاحترام و التقدير...

                    </div>

                    <br></br><br></br>
                    تميمة للتسويق ش ش و 
                    
                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>




  {/* Request New Sim Card\E-Sim / Letter-14*/}
  <div className="tab-pane fade" id="Letter-14" role="tabpanel" aria-labelledby="Letter-14-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
                <b>Date: <span className="datafield text-danger" contentEditable="true">(08/11/2022)</span></b>  
                    <br></br><br></br>
                     To Whom It May Concern 
                    <br></br><br></br>

                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>Request New Sim Card\E-Sim</b>
                            <br></br><br></br>
                        </p>
                    </div>

                    <br></br><br></br>
                    
                    Dear Ooredoo customer service,  <br></br>


                    We hereby authorize Arun Mohanan Girija holder of ID card number (118743339) permission to act on our behalf (Tamimah Marketing SPC)
                     to get a new SIM card of the number 79189426. 

                    <br></br><br></br>
                    Sincerely, 
                    

                    
                    <br></br><br></br><br></br><br></br>
                    <b>Balqees Abdullah  <br></br> HR Specialist  </b> 
                    <br></br>
               

                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>


  {/* CERTIFICATE OF TRAINING  / Letter-15*/}
  <div className="tab-pane fade" id="Letter-15" role="tabpanel" aria-labelledby="Letter-15-list">
        <div className="card">
            <div className="card-body p-15">
                <p className="text-dark-emphasis text-justify" style={{textAlign: 'justify'}}>   
                
              

                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center">
                         
                            <b>Certification of Training</b>
                            <br></br><br></br>
                        </p>
                    </div>

                    <br></br><br></br>
                    
                    This is to certify that Ms. Rawan Al Raiisi has successfully completed two months of training with Tamimah Telecom & Computer Technology in 
                    “IT Department” from the period: 1/08/2022 to 29/09/2022. Her responsibilities and learnings were as follow:

                    <br></br>
                    •	Managing Micro website pages for Bawwaba platform 
                    <br></br>
                    •	Participated in learning programming languages from: HTML, CSS, JavaScript, Bootstrap.
                    <br></br>
                    •	Monitoring her Graduation Project 
                    <br></br><br></br>
                  
                    

                    Her association with us was very fruitful and we wish her all the best in her future endeavours.
                    
                    <br></br><br></br>
                    For Tamimah Telecom & Computer Technology  
                    <br></br><br></br>

                    <b>Balqees Abdullah  <br></br> HR Specialist  </b> 
                    <br></br>
               

                </p>  
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-file-earmark-word fs-2 px-3 svg-icon-muted text-white"></i>Download</a>
                    <a href='#' className="btn btn-sm mt-10 me-5" type="button" style={{background:"#36454F" , color:"#fff"}}><i className="bi bi-arrow-clockwise fs-2 px-3 svg-icon-muted text-white"></i>Update</a>
            </div>
        </div>
    </div>



  </div>
</div>
</div>




</>
  );
}

export {HRLetters}
