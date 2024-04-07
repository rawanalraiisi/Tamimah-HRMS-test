import {FC} from 'react'
import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit } from '@mui/icons-material';
import { KTSVG } from '../../../../_metronic/helpers';


const ReportKPI :FC = () =>{
    return <>
    

     {/* KPI Employee Report Table ******************************************************************************************************************************************************/}
<h1 className="pb-10" style={{color: "#2f574b"}}><i className="bi bi-file-earmark-bar-graph-fill fs-2hx px-1 svg-icon-muted" style={{color: "#2f574b"}}></i>  KPI Report</h1>






<div className="p-5" style={{ overflowX: 'auto'}}>



<table className="table custom-table table-rounded border-3 border-gray-100 table table-bordered gy-5 gs-7 shadow" style={{background:"#e8e6e6" , width: "2400px"}}>
    <thead>
        <tr className="fw-bold fs-6 border-bottom border-gray-200 text-white bg-primary">
            <th className="KPIyear" colSpan={3} style={{background:"#2f574b"}}><span className='badge badge-light-success fs-6 fw-bold'> 2023 </span></th>
           
            <th colSpan={2} style={{background:"#DF9B00", color: "#2f574b"}}>Line Manager <i className="bi bi-1-square fs-2x px-2 svg-icon-muted" style={{color: "#2f574b"}}></i></th>
            <th colSpan={2} style={{background:"#DF9B00", color: "#2f574b"}}>Line Manager <i className="bi bi-2-square fs-2x px-2 svg-icon-muted" style={{color: "#2f574b"}}></i> </th>
            
        </tr>
        <tr className="fw-bold fs-6 border-bottom border-gray-200 text-white" style={{background:"#2f574b"}}>
            
            <th><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Question</th>
            <th>Employee Rating</th>
            <th> Comments</th>
            <th> Rating </th>
            <th > Comments / Suggestions </th>
            <th> Rating </th>
            <th >Comments / Suggestions </th> 
           
        </tr>
        
    </thead>
    <tbody>
        <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}} >What strategies have you employed to enhance your performance in these areas?</td>
            <td className="fw-bold">
            <div className="rating">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
  </div>
  
</td>
            <td  className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>

            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>

</td>
            


          <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>


            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>

            </td>
        </tr>






        <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}}>Can you share how you believe your current performance aligns with the company's objectives and KPIs?</td>
            <td className="text-primary fw-bold">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>

            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>


            </td>
            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>


</td>
            
        </tr>

      

        

      <tr className='text-success fw-bold gy-1' style={{background:"#DF9B00"}}>
      <td colSpan={7}></td>
      </tr>


      <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}} >What strategies have you employed to enhance your performance in these areas?</td>
            <td className="fw-bold">
            <div className="rating">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
  </div>
  
</td>
            <td  className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>

            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
  <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>

</td>
            


<td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>


            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>
            </td>
        </tr>






        <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}}>Can you share how you believe your current performance aligns with the company's objectives and KPIs?</td>
            <td className="text-primary fw-bold">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>

            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>


            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>

            </td>
            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>

<td>
            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>
</td>
            
        </tr>




    </tbody>

  </table>
  

</div>



<div className="d-grid gap-2 d-md-flex justify-content-md-end" >
    <button className="btn btn-sm" type="button" style={{background:"#2f574b" , color:"#fff"}}><i className="bi bi-check-circle-fill fs-2 svg-icon-muted text-white me-3"></i>Submit</button>
</div>




    </>

}
export {ReportKPI}