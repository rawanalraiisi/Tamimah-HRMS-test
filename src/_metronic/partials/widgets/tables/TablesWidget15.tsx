/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../helpers'
import { IconButton } from '@mui/material'
import { CheckCircleOutlineRounded, Download, Delete } from '@mui/icons-material'

type Bills = {
  name: string
  amount: number
  status: boolean
}

type Props = {
  className: string
  data: Bills[][]
}

const months = [
  'Annual',
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const TablesWidget15: React.FC<Props> = ({ className, data }) => {
  const now = new Date()
  const nowMonth = now.getMonth()
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 pl-10'>
        <h3 className='card-title px-5'>
          <span className='card-label fw-bold fs-3 mb-1'>Utility Bills</span>
          {/* <span className='text-muted mt-1 fw-semibold fs-7'>More than 15 B-Dates</span> */}
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <div className='card-toolbar me-5'>
            <a href='/' className='btn btn-sm btn-primary'>
              <KTIcon iconName='file-down' className='fs-2' />
              Export to Excel
            </a>
          </div>
          <div className='card-toolbar me-5'>
            <a href='/' className='btn btn-sm btn-primary'>
              <KTIcon iconName='add-item' className='fs-2' />
              Add Bill
            </a>
          </div>
          {/* <Dropdown1 /> */}
          {/* end::Menu */}
        </div>
        <div className='d-flex justify-content-center container-fluid'>
          <ul className='nav'>
            {months.map((month, index) => (
              <li className='nav-item' key={index}>
                <a
                  className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-9 me-1 ${index === nowMonth + 1 ? 'active' : null}`}
                  data-bs-toggle='tab'
                  href={`#kt_table_widget_8_tab_${index + 1}`}
                >
                  {month}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {
            months.map((month, index) => (
              <div className={`tab-pane fade ${index === nowMonth + 1 ? 'show active' : null}`} id={`kt_table_widget_8_tab_${index + 1}`}>
                {/* <div className='table-responsive'> */}
                {/* <table className='table table-hover align-middle gs-0 gy-3'> */}
                <div className='align-middle gs-0 gy-3'>
                  {/* <thead>
                    <tr>
                      <th className='p-0 w-50px'></th>
                      <th className='p-0 min-w-150px'></th>
                      <th className='p-0 min-w-120px'></th>
                    </tr>
                  </thead> */}
                  {/* <tbody> */}
                  {
                    data[index].map((monthData, index) => (
                      <div className='d-flex align-items-center mb-2 bg-hover-light'>
                        <span className='bullet bullet-vertical h-40px bg-primary'></span>
                        {/* <div className='form-check form-check-custom form-check-solid mx-5'>
                          <input className='form-check-input' type='checkbox' value='' defaultChecked={item.completed}/>
                        </div> */}
                        <div className='flex-grow-1 mx-3'>
                          <span className='text-gray-800 text-hover-primary fw-bold fs-6'>
                            {monthData.name}
                          </span>
                          {/* <span className='text-muted fw-semibold d-block'>{date.toLocaleDateString()}</span> */}
                        </div>
                        {/* <span className={`badge ${item.completed ?'badge-light-success' :(dateDiff<0 ?'bag')} fs-8 fw-bold`}>New</span> */}
                        <div className='d-flex p-2 justify-content-between' style={{ flex: '0 0 35%' }}>
                          <div className='d-flex flex-column justify-content-start mx-2'>
                            <span className={`datafield badge fw-bold d-block fs-7 ${monthData.status ? 'badge-light-success' : 'badge-light-danger'}`} contentEditable="true">{monthData.amount}</span>
                            <span className={`badge fw-bold d-block fs-7 ${monthData.status ? 'badge-light-success' : 'badge-light-danger'}`}>OMR</span>
                          </div>
                          <div>
                            <IconButton className='text-success'>
                              <CheckCircleOutlineRounded className='fs-1' />
                            </IconButton>
                            <IconButton className='text-danger'>
                              <Delete className='fs-1' />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      // <tr>
                      //   <td>
                      //     <span className='text-dark fw-bold mb-1 mx-2 fs-6'>
                      //       {monthData.name}
                      //     </span>
                      //   </td>
                      //   <td className='text-end'>
                      //     <span className={`text-dark fw-bold d-block fs-7 ${monthData.status ?'text-success' :'text-warning'}`}>{monthData.amount}</span>
                      //     <span className='text-muted fw-semibold d-block fs-8'>OMR</span>
                      //   </td>
                      //   <td className='text-end'>
                      //     <a
                      //       href='#'
                      //       className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      //     >
                      //       <i className='bi bi-three-dots fs-5'></i>
                      //     </a>
                      //   </td>
                      // </tr>
                    ))}
                  {/* </tbody> */}
                </div>
                {/* </div> */}
              </div>
            )
            )}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export { TablesWidget15 }
