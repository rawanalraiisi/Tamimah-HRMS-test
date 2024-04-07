/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown4'
import { differenceInDays } from 'date-fns'

type renewalDetails = {
  name: string
  amt: number
  completed: boolean
  agregatedamt: number
}

type Props = {
  className: string
  name:string
  details: renewalDetails[]
}

const ListsWidget11: React.FC<Props> = ({className,name,details}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>{name}</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
      {
        details.map((item) => {
          return(
          <div className='d-flex align-items-center mb-8'>
            <span className='bullet bullet-vertical h-40px bg-success'></span>
            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' value='' defaultChecked={item.completed}/>
            </div>
            <div className='flex-grow-1'>
              <span className='text-gray-800 text-hover-primary fw-bold fs-6 pr-2'>
                {item.name}
              </span>
              <span className='text-muted fw-semibold d-block'>Amount this month: {item.amt}</span>
            </div>
            {/* <span className={`badge ${item.completed ?'badge-light-success' :(dateDiff<0 ?'bag')} fs-8 fw-bold`}>New</span> */}
            {
              item.completed 
              ? <span className='badge badge-light-success fs-8 fw-bold'>0 OMR</span>
              : (
                item.agregatedamt>item.amt
                ? <span className='badge badge-light-warning fs-8 fw-bold'>{item.agregatedamt} OMR</span>
                : <span className='badge badge-light-primary fs-8 fw-bold'>{item.agregatedamt} OMR</span>
                )
            }
          </div>
          )
        })}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget11}
