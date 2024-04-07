/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown4'
import { differenceInDays } from 'date-fns'
import { IconButton } from '@mui/material'
import { Upload, Download, GridView, DocumentScanner, Wallpaper, CheckBoxRounded } from '@mui/icons-material'

type renewalDetails = {
  name: string
  date: string
  completed: boolean
}

type Props = {
  className: string
  name:string
  details: renewalDetails[]
}

const ListsWidget10: React.FC<Props> = ({className,name,details}) => {
  return (
    <>
    
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-primary'>{name}</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-primary me-2'
            // data-kt-menu-trigger='click'
            // data-kt-menu-placement='bottom-end'
            // data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='plus' className='fs-2'/> 
          </button>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-success'
            // data-kt-menu-trigger='click'
            // data-kt-menu-placement='bottom-end'
            // data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='check-circle' className='fs-2'/> 
          </button>
          {/* <Dropdown1 /> */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
      {
        details.map((item) => {
          const date = new Date(item.date)
          const nowDate = new Date()
          const dateDiff = differenceInDays(date,nowDate)
          return(
          <div className='d-flex align-items-center mb-8'>
            <span className='bullet bullet-vertical h-40px bg-primary'></span>
            {/* <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' value='' defaultChecked={item.completed}/>
            </div> */}
            <div className='flex-grow-1 mx-3'>
              <span className='text-gray-800 text-hover-primary fw-bold fs-6'>
                {item.name}
              </span>
              <span className='datafield text-muted fw-semibold d-block' contentEditable="true">{date.toLocaleDateString()}</span>
            </div>
            {/* <span className={`badge ${item.completed ?'badge-light-success' :(dateDiff<0 ?'bag')} fs-8 fw-bold`}>New</span> */}
            <div className='d-flex justify-content-between' style={{flex: '0 0 35%'}}>
              {
                item.completed 
                ? (<span className='badge badge-light-success fs-8 fw-bold'>Completed</span>)
                : (
                  dateDiff<0
                  ? (
                    <div className='d-flex flex-column justify-content-start mx-2'>
                      <span className='badge badge-light-danger fs-8 fw-bold'>Overdue by</span>
                      <span className='badge badge-light-danger fs-8 fw-bold'>{-dateDiff} days</span>
                    </div>
                    )
                  : (
                    dateDiff>30
                    ? (
                      <div className='d-flex flex-column justify-content-start mx-2'>
                        <span className='badge badge-light-primary fs-8 fw-bold'>Due in</span>
                        <span className='badge badge-light-primary fs-8 fw-bold'>{dateDiff} days</span>
                      </div>
                      )
                    : (
                        <div className='d-flex flex-column justify-content-start mx-2'>
                          <span className='badge badge-light-warning fs-8 fw-bold'>Due in</span>
                          <span className='badge badge-light-warning fs-8 fw-bold'>{dateDiff} days</span>
                        </div>
                      )
                  )
                )
              }
              <div>
                <IconButton className='text-primary'>
                  <Upload/>
                </IconButton>
                <IconButton className='text-primary'>
                  <DocumentScanner />
                </IconButton>
              </div>
            </div>
          </div>
          )
        })}
      </div>
      {/* end::Body */}
    </div>
    </>
  )
}

export {ListsWidget10}
