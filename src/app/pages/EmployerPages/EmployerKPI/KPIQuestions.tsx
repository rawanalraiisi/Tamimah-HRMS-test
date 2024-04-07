import {FC} from 'react'
import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit } from '@mui/icons-material';
import { KTSVG } from '../../../../_metronic/helpers';


const KPIQuestions :FC = () =>{
    return <>
    

      

  
<h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Add / Edit KPI Question</h5>


<div className="modal fade" tabIndex={-1} id="kt_modal_1">
  <div className="modal-dialog" style={{ maxWidth: '800px'}}>
    <div className="modal-content">
      <div className="modal-header bg-primary-subtle">
        <h5 className="modal-title text-primary"> <i className="bi bi-plus-lg fs-2 px-3 svg-icon-muted text-primary"></i>   Add New Question </h5>
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
        <label className='col-lg-5 col-form-label fw-bold fs-6'>Question Type</label>
            <div className='col-lg-6 fv-row' 
            >
            <select className="form-select text-white fs-7 bg-primary fw-bold" aria-label="Default select example">
            <option className="fw-bold p-10" value="General Question" selected>General Question</option>
            <option className="fw-bold p-10" value="Professional Question">Professional Question</option>
            </select>

            </div>
      </div>

      <div className='row mt-5 mb-1 fw-bold'>
      <label className='col-lg-5 col-form-label fw-bold fs-6'>Select Divisions</label>
      <div className='col-lg-6 fv-row'>
        <div className="row">
          {/* First Column */}
          <div className="col-md-6">
            {/* **Admin** */}
            <div className="form-check mb-2">
              <input className="form-check-input border border-primary" type="checkbox" value="Admin" id="Admin" />
              <label className="form-check-label text-primary" htmlFor="Admin">
                Admin
              </label>
            </div>

            
             {/* **Accounts** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Accounts" id="Accounts" />
                <label className="form-check-label text-primary" htmlFor="Accounts">
                Accounts
                </label>
            </div>

            
             {/* **HR** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="HR" id="HR" />
                <label className="form-check-label text-primary" htmlFor="HR">
                HR
                </label>
            </div>

            
             {/* **Mass support** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Mass support" id="Mass support" />
                <label className="form-check-label text-primary" htmlFor="Mass support">
                Mass support
                </label>
            </div>


            
             {/* **Public relation Officer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Public relation Officer" id="Public relation Officer" />
                <label className="form-check-label text-primary" htmlFor="Public relation Officer">
                Public relation Officer
                </label>
            </div>

             {/* **Data Entry** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Data Entry" id="Data Entry" />
                <label className="form-check-label text-primary" htmlFor="Data Entry">
                Data Entry
                </label>
            </div>

            
             {/* **Digital Marketing** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Digital Marketing" id="Digital Marketing" />
                <label className="form-check-label text-primary" htmlFor="Digital Marketing">
                Digital Marketing
                </label>
            </div>

            {/* **Graphic Designer** */}
            <div className="form-check mb-2">
                  <input className="form-check-input border border-primary" type="checkbox" value="Graphic Designer" id="Graphic Designer" />
                <label className="form-check-label text-primary" htmlFor="Graphic Designer">
                Graphic Designer
                </label>
            </div>



          </div>

          {/* Second Column */}
          <div className="col-md-6">
            {/* **Finance** */}
            <div className="form-check mb-2">
              <input className="form-check-input border border-primary" type="checkbox" value="Finance" id="Finance" />
              <label className="form-check-label text-primary" htmlFor="Finance">
                Finance
              </label>
            </div>


            
           
            
             {/* **Software Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Engineer" id="Software Engineer" />
                <label className="form-check-label text-primary" htmlFor="Software Engineer">
                Software Engineer
                </label>
            </div>

            
             {/* **Project Management** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Project Management" id="Project Management" />
                <label className="form-check-label text-primary" htmlFor="Project Management">
                Project Management
                </label>
            </div>

           
             {/* **Support Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Support Engineer" id="Support Engineer" />
                <label className="form-check-label text-primary" htmlFor="Support Engineer">
                Support Engineer
                </label>
            </div>


             {/* **Software Developer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Developer" id="Software Developer" />
                <label className="form-check-label text-primary" htmlFor="Software Developer">
                Software Developer
                </label>
            </div>


             {/* **Programmer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Programmer" id="Programmer" />
                <label className="form-check-label text-primary" htmlFor="Programmer">
                Programmer
                </label>
            </div>

            {/* **Sales** */}
            <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Sales" id="Sales" />
                <label className="form-check-label text-primary" htmlFor="Sales">
                Sales
                </label>
            </div>


          </div>
        </div>
      </div>
    </div>



     <div className='row mb-1 mt-5'>
            <label className='col-lg-5 col-form-label fw-bold fs-6'>Question Content</label>
            <div className='col-lg-6 fv-row'>
              <div className="mb-3 w-100">
              <textarea className="form-control" id="exampleFormControlTextarea1" style={{height: "150px"}}></textarea>
              </div>
            </div>
     </div>




      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn bg-body-secondary"
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





{/* All Questions Details */}


<div className="d-grid gap-2 d-md-flex justify-content-md-end" >
<button className="btn btn-sm bg-primary text-white" type="button"  data-bs-toggle="modal" data-bs-target="#kt_modal_1"><i className="bi bi-plus-circle fs-2 svg-icon-muted text-white me-3"></i>Add</button>
    <button className="btn btn-sm bg-primary text-white" type="button"><i className="bi bi-check-circle-fill fs-2 svg-icon-muted text-white me-3"></i>Save</button>
</div>

<table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{background:"#e8e6e6"}}>
<thead>

    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white bg-primary">


        <th style={{width: "20px"}}></th>

        <th colSpan={3}>
        
             <div className="d-flex flex-row">
                <select className="form-select text-white fs-7 bg-primary fw-bold mx-5" aria-label="Default select example"  style={{width: "200px"}}>
                <option className="fw-bold" value="General Question">General Question</option>
                <option className="fw-bold" value="Professional Question">Professional Question</option>
                </select>

                <select className="form-select text-white fs-7 bg-primary fw-bold" aria-label="Default select example"  style={{width: "200px"}}>
                <option className="fw-bold" value="Admin">Admin</option>
                <option className="fw-bold" value="Finance">Finance</option>
                <option className="fw-bold" value="Accounts">Accounts</option>
                <option className="fw-bold" value="HR">HR</option>
                <option className="fw-bold" value="Mass support">Mass support</option>
                <option className="fw-bold" value="Public relation Officer">Public relation Officer</option>
                <option className="fw-bold" value="Software Engineer">Software Engineer</option>
                <option className="fw-bold" value="Project Management">Project Management</option>
                <option className="fw-bold" value="Support Engineer">Support Engineer</option>
                <option className="fw-bold" value="Software Developer">Software Developer</option>
                <option className="fw-bold" value="Programmer">Programmer</option>
                <option className="fw-bold" value="Data Entry">Data Entry</option>
                <option className="fw-bold" value="Digital Marketing">Digital Marketing</option>
                <option className="fw-bold" value="Sales">Sales</option>
                <option className="fw-bold" value="Graphic Designer">Graphic Designer</option>
                </select>
             </div>
        </th>
        <th></th>
        
    </tr>
</thead>
<tbody>

    <tr>
        <td className="text-primary fw-bold" colSpan={1} >1</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>
        </td>
    </tr>

    <tr>
        <td className="text-primary fw-bold" colSpan={1} >2</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>
        </td>
    </tr>


    <tr>
        <td className="text-primary fw-bold" colSpan={1} >3</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>
        </td>
    </tr>
    <tr>
        <td className="text-primary fw-bold" colSpan={1} >4</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
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




<div className="modal fade" tabIndex={-1} id="kt_modal_2">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content shadow-none">
    <div className="modal-header bg-primary-subtle">
      <h5 className="modal-title pb-2 pt-2 ms-2 text-primary">
        <i className="bi bi-file-earmark-bar-graph-fill fs-1 px-1 svg-icon-muted text-primary"></i> Edit / View Question Details
      </h5>
      <div
        className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white"
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




<table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{background:"#e8e6e6"}}>


<thead>

    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white bg-primary">

        <th style={{width: "200px"}}><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Question Type </th>
        <th colSpan={2}><i className="bi bi-check-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Divition Type </th>
        <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>Question Content</th>
    
       
        
    </tr>
</thead>

<tbody>

    <tr>
        <td className="text-primary fw-bold">
        
             <p className='border border-primary rounded-3 text-white bg-primary p-3 fs-7'>
             Professional Question
             </p>
        </td>

        <td className="text-primary fw-bold">


            {/* **Admin** */}
            <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Admin" id="Admin" />
                <label className="form-check-label text-primary" htmlFor="Admin">
                Admin
                </label>
            </div>

             {/* **Finance** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Finance" id="Finance" checked />
                <label className="form-check-label text-primary" htmlFor="Finance">
                Finance
                </label>
            </div>

            
             {/* **Accounts** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Accounts" id="Accounts" checked/>
                <label className="form-check-label text-primary" htmlFor="Accounts">
                Accounts
                </label>
            </div>

            
             {/* **HR** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="HR" id="HR" checked/>
                <label className="form-check-label text-primary" htmlFor="HR">
                HR
                </label>
            </div>

            
             {/* **Mass support** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Mass support" id="Mass support" />
                <label className="form-check-label text-primary" htmlFor="Mass support">
                Mass support
                </label>
            </div>


            
             {/* **Public relation Officer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Public relation Officer" id="Public relation Officer" />
                <label className="form-check-label text-primary" htmlFor="Public relation Officer">
                Public relation Officer
                </label>
            </div>

            
             {/* **Software Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Engineer" id="Software Engineer" />
                <label className="form-check-label text-primary" htmlFor="Software Engineer">
                Software Engineer
                </label>
            </div>

            
             {/* **Project Management** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Project Management" id="Project Management" />
                <label className="form-check-label text-primary" htmlFor="Project Management">
                Project Management
                </label>
            </div>

            </td>

            <td className="text-primary fw-bold">
             {/* **Support Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Support Engineer" id="Support Engineer" checked/>
                <label className="form-check-label text-primary" htmlFor="Support Engineer">
                Support Engineer
                </label>
            </div>

            
             {/* **Software Developer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Developer" id="Software Developer" />
                <label className="form-check-label text-primary" htmlFor="Software Developer">
                Software Developer
                </label>
            </div>


             {/* **Programmer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Programmer" id="Programmer" />
                <label className="form-check-label text-primary" htmlFor="Programmer">
                Programmer
                </label>
            </div>

            
             {/* **Data Entry** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Data Entry" id="Data Entry" />
                <label className="form-check-label text-primary" htmlFor="Data Entry">
                Data Entry
                </label>
            </div>

            
             {/* **Digital Marketing** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Digital Marketing" id="Digital Marketing" />
                <label className="form-check-label text-primary" htmlFor="Digital Marketing">
                Digital Marketing
                </label>
            </div>

            
             {/* **Sales** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Sales" id="Sales" checked/>
                <label className="form-check-label text-primary" htmlFor="Sales">
                Sales
                </label>
            </div>

            
             {/* **Graphic Designer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Graphic Designer" id="Graphic Designer" />
                <label className="form-check-label text-primary" htmlFor="Graphic Designer">
                Graphic Designer
                </label>
            </div>
                
        </td>

        <td className="text-primary fw-bold">
        
        <div className="mb-3 w-100">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{height: "180px"}}> 
        Can you share how you believe your current performance aligns with the company's objectives and KPIs? 
        </textarea>
        </div>

        </td>

        

    </tr>
    
</tbody>


</table>
       






      </div>
      <div className="modal-footer">
        {/* <button
          type="button"
          className="btn btn-outline-primary text-primary fw-bold"
          data-bs-dismiss="modal"
        >
          Close
        </button> */}
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>




    </>

}
export {KPIQuestions}