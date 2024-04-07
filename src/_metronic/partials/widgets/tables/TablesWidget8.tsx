/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget8: React.FC<Props> = ({className}) => {
  return (
    <>



    <div className={`card ${className}`} style={{background: "#6255a3"}}>
      {/* begin::Header */}
      <div className='card-header pt-5 pl-10 pb-5 border-bottom-1 border-white ribbon ribbon-top ribbon-vertical'>
      <div className="ribbon-label bg-danger">
      <i className="bi bi-balloon-fill fs-1 text-white"></i>
    </div>
        {/* <h4 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-5 mb-1 text-white'>Date Of Birth</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>More than 15 B-Dates</span>
        </h4> */}
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info active fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_1'
              >
                Jan
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_2'
              >
                Feb
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_3'
              >
                Mar
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_4'
              >
                Apr
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_5'
              >
                May
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_6'
              >
                Jun
              </a>
            </li>
            <br></br>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_7'
              >
                Jul
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_8'
              >
                Aug
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_9'
              >
                Sep
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab' 
                href='#kt_table_widget_8_tab_10'
              >
                Oct
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_11'
              >
                Nov
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-info fw-bold px-5 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_8_tab_12'
              >
                Dec
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_8_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody className='text-primary'>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Zubair
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'> 02/01/1996</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Faheem
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>10/01/1997</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Arya
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'> 25/01/1997</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                 
                 


                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Mihal
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>14/02/1985</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Suhara
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>17/02/1985</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        O.K. Ravi
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>23/02/1965</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-danger'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Adil
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>by Rose Liam</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>26/02/1992</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Kabeela
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>01/03/1985</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Meera
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>12/03/1994</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>

                {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_4'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                      Salman
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light  fw-bold d-block fs-7'>15/04/1993</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Hilal
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>17/04/1976</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Midhun
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>23/04/1998</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}


      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_5'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Zainab
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>01/05/1998</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Thanveer
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>10/05/1989</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Milad
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>11/05/1992</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Jerry
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>13/05/1984</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Abdulrahman
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>17/05/19969</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>



      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_6'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Arun
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>13/06/1994</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Balqees
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>14/06/1994</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Musab DPC
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>25/06/1987</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Safal (TI)
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>26/06/1998</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>



      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_7'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Smilu
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>11/07/1984</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Saji
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>22/07/1973</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Karishma
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>29/07/1992</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Sinitha (TI)
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>28/07/1991</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>

      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_8'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                      Abdulaziz
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>06/08/1994</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Vishnu (TI)
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>22/08/1997</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Ammena (TI)
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>08/08/1998</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>


                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>


      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_9'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Hyder
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>22/09/1990</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>


      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_10'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Hafza
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>01/10/1994</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Shyjel
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>15/10/1986</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Shafeeq
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>19/10/1979</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Arvindo
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>31/10/1982</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>

      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_11'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Nujoom
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>02/11/1998</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Arjun
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>13/11/1992</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Rajeev
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>16/11/1984</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Mahi
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>28/11/1997</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>



      {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_8_tab_12'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                       Musab
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Tom Gere</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>03/12/1999</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Muhsina
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>23/12/1991</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Maya
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>25/12/1978</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Tabarak
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>27/12/1997</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                      <span className='symbol-label bg-light-info'>
                        <KTIcon iconName='user' className='fs-2x text-info' />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-light fw-bold text-hover-primary mb-1 fs-6'>
                        Abdul Rashik (TI)
                      </a>
                      {/* <span className='text-muted fw-semibold d-block fs-7'>By Zoey Dylan</span> */}
                    </td>
                    <td className='text-end'>
                      <span className='text-light fw-bold d-block fs-7'>30/12/1992</span>
                      <span className='text-muted fw-semibold d-block fs-8'>Date Of Birth</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-info'
                      >
                        <i className='bi bi-gift-fill fs-5' title="Send Birthday Wish"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>






        </div>
      </div>
      {/* end::Body */}
    </div>
   

    </>
  )
}

export {TablesWidget8}
