import React, { FC, ReactNode, useMemo, useState } from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for cards
import { KTSVG } from '../../../../_metronic/helpers';
import { Autocomplete, AutocompleteRenderInputParams, TextField } from '@mui/material';

function EmployeeKPI() {
  const [currentTableIndex, setCurrentTableIndex] = useState(0);
  const [currentTableIndexSummary, setCurrentTableIndexSummary] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);




  // **********************************************************KPI Report and Summary 
  const tablesDataSummary = [
  {
    tableId: 1,
    title: 'Question 1',
    customHeadersSummary: [
      'Question',
      'Employee Rating',
      'Employee Comments',
      'Line Manager 1 Rating',
      'Line Manager 1 Comments',
      'Line Manager 2 Rating',
      'Line Manager 2 Comments',
    ],
    customRowsSummary: [
      {
        Question: 'What strategies have you employed to enhance your performance in these areas?',
        'Employee Rating': (
          <div className="rating">
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
          </div>
        ),
        'Employee Comments': 'i have no comment',
        'Line Manager 1 Rating': (
          <div className="rating">
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
          </div>
        ),
        
       
        'Line Manager 1 Comments': 'proactive approach to professional growth, along with their consistent achievements, exemplify their dedication to both personal development and the betterment of our organization.',
        'Line Manager 2 Rating': (
          <div className="rating">
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
          </div>
        ),
        'Line Manager 2 Comments': 'Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.',
      },
      // Add more rows as needed
    ],
  },
  {
    tableId: 2,
    title: 'Question 2',
    customHeadersSummary: [
      'Question',
      'Employee Rating',
      'Employee Comments',
      'Line Manager 1 Rating',
      'Line Manager 1 Comments',
      'Line Manager 2 Rating',
      'Line Manager 2 Comments',
    ],
    customRowsSummary: [
      {
        Question: 'Can you share how you believe your current performance aligns with the companys objectives and KPIs?',
        'Employee Rating': (
          <div className="rating">
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
          </div>
        ),
        'Employee Comments': 'i have no comment',
        'Line Manager 1 Rating': (
          <div className="rating">
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
          </div>
        ),
        
       
        'Line Manager 1 Comments': 'proactive approach to professional growth, along with their consistent achievements, exemplify their dedication to both personal development and the betterment of our organization.',
        'Line Manager 2 Rating': (
          <div className="rating">
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label checked">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
            <div className="rating-label">
              <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
            </div>
          </div>
        ),
        'Line Manager 2 Comments': 'Your performance sets improvement but you can do better.',
      },
      // Add more rows as needed
    ],
  },
];



  
 

 // Create an array to store the text values for each textarea
 const [textValuesSummary, settextValuesSummary] = useState(new Array(tablesDataSummary.length).fill(''));

  


  const handleContinueClickSummary = () => {
    if (currentTableIndexSummary < tablesDataSummary.length - 1) {
      setCurrentTableIndexSummary(currentTableIndexSummary + 1);
    }
  };

  const handlePreviousClickSummary = () => {
    if (currentTableIndexSummary > 0) {
      setCurrentTableIndexSummary(currentTableIndexSummary - 1);
    }
  };

  const currentTableDataSummary = tablesDataSummary[currentTableIndexSummary];







  const presentYear = new Date().getFullYear()
  const [year,setYear] = useState<number>(presentYear);

  const yearOptions = useMemo(() => {
    return ['2020','2021', '2022','2023','2024','2025']
  },[]);

  return ( 
  <>
<h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} KPI Summary</h5>

<div className="alert alert-dismissible bg-warning-subtle d-flex flex-column flex-sm-row mb-15">
  <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><i className="bi bi-exclamation-triangle-fill fs-2hx px-5 svg-icon-muted text-warning"></i></span>
  <div className="d-flex flex-column pe-0 pe-sm-10">
    <h5 className="mb-1 text-primary">KPI Report</h5>
    <span className='fw-bold fs-7 text-gray-600'>
    At Tamimah, we hold high respect for individuals who display solid dedication and exceed their job responsibilities, thereby driving the company's development. For a clearer insight into KPI results, feel free to engage with your respective line manager. Exceptional performance is recognized at a rate of 75% and higher.
    </span>
  </div>
  <button type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span className="svg-icon svg-icon-1 svg-icon-primary"><i className="bi bi-x fs-2hx px-5 svg-icon-muted text-primary"></i></span>
  </button>
</div>


<div className='row g-5 g-xl-8 mb-md-5 mb-xl-10'>
  <div className='col-md-12 col-xl-4'>
    <div className='card h-md-100'>
        <div className='card-body' style={{ background: "#f0eded" }}>
          {/* <h3 className='mb-5 text-primary'>Enter the  year </h3> */}
            <Autocomplete
              disablePortal
              fullWidth
              id='yearField'
              color="primary"
              options={yearOptions}
              onInputChange={(event, value) => {
              setYear(parseInt(value ?? presentYear.toString()))
              }}
              onChange={(event,value) => {
              setYear(parseInt(value ?? presentYear.toString()))
              }}
              classes={{
              input: 'text-primary'
              }}
              renderInput={(params) => 
               <TextField
                {...params}
                required
                focused
                label="Year"
                 />
              }
            />
        </div>
      </div>
    </div>
</div>



<Card style={{ background: "#f0eded" }}>
  <Card.Header className="d-flex justify-content-center">
      {/* Additional div */}
      <div className='d-flex align-items-center w-600px w-sm-600px flex-column mt-3'>
        <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
          <span className='fw-bold fs-6 text-gray-600'>Question Completion</span>
          <span className='fw-bolder fs-6 text-primary'>{currentTableIndexSummary + 1}/{tablesDataSummary.length}</span>
        </div>
        <div className='h-8px mx-3 w-100 bg-body-secondary mb-3'>
          <div
            className='bg-primary rounded h-8px'
            role='progressbar'
            style={{ width: `${((currentTableIndexSummary + 1) / tablesDataSummary.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* End of additional div */}
      {/* <h1>{currentTableDataSummary.title}</h1> */}
    </Card.Header>
      <Card.Body className='mb-10 mt-5 p-20'>
        <div>
          <table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100 gy-4 gs-7 shadow" style={{ background: "#f0eded" }}>
            <tbody>
              {currentTableDataSummary.customHeadersSummary.map((header, indexHeader) => (
                <tr key={indexHeader}>
                  {header === 'Line Manager 1 Rating' || header === 'Line Manager 1 Comments' || header === 'Line Manager 2 Rating' || header === 'Line Manager 2 Comments' ? (
                    <th className="fw-bold text-white" style={{ background: "#143983", width: "150px" }}>
                      {header}
                    </th>
                  ) : (
                    <>
                      <th className="fw-bold text-white" style={{ background: "#6255a3", width: "150px" }}>
                        {header}
                      </th>
                    </>
                  )}
                  <td className="fw-bold text-primary" key={indexHeader} style={{ height: '60px' }}>
                    {(currentTableDataSummary.customRowsSummary[0] as any)[header]} {/* Type assertion */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-between mt-5">
          <Button className="btn btn-sm" variant="primary" onClick={handlePreviousClickSummary} disabled={currentTableIndexSummary === 0}>
            Previous
          </Button>
          <Button className="btn btn-sm" variant="primary" onClick={handleContinueClickSummary}>
            {currentTableIndexSummary === tablesDataSummary.length - 1 ? 'Done' : 'Next'}
          </Button>
        </div>
      </Card.Body>
    </Card>













</>
  );
} 

export {EmployeeKPI}

function renderInput(params: AutocompleteRenderInputParams): ReactNode {
  throw new Error('Function not implemented.');
}
