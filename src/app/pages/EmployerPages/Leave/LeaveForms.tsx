import {FC} from 'react'
import {KTIcon} from '../../../../_metronic/helpers'
import {Card4} from '../../../../_metronic/partials/content/cards/Card4'
import PDFViewer from '../../../components/pdfViewer'


const LeaveForms :FC = () =>{
    return <>
    
    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Leave Forms Submitted </h5>
      <div className='d-flex flex-wrap flex-stack mb-6'>

        <div className='d-flex my-2'>
          <div className='d-flex align-items-center position-relative me-4'>
            <KTIcon iconName='magnifier' className='fs-3 position-absolute ms-3' />
            <input
              type='text'
              id='kt_filter_search'
              className='form-control form-control-white form-control-sm w-150px ps-9'
              placeholder='Search'
            />
          </div>

          <a href='' className='btn btn-primary btn-sm'>
            File Manager
          </a>
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/download.svg'
           
            title='2020'
            description='7 files'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/download.svg'
            title='2021'
            description='3 files'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/download.svg'
            title='2022'
            description='25 files'
          />
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl' onClick={() => {
          console.log("clicked")
          return(
            <PDFViewer path="./data/sample.pdf"/>
          )
        }}>
          <Card4 icon='/media/svg/files/pdf.svg' title='Project Reqs..' description='3 days ago' />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/doc.svg' title='CRM App Docs..' description='3 days ago' />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/css.svg'
            title='User CRUD Styles'
            description='4 days ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/ai.svg' title='Metronic Logo' description='5 days ago' />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4 icon='/media/svg/files/sql.svg' title='Orders backup' description='1 week ago' />
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/xml.svg'
            title='UTAIR CRM API Co..'
            description='2 week ago'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='/media/svg/files/tif.svg'
            title='Tower Hill App..'
            description='3 week ago'
          />
        </div>
      </div>
    
    </>
} 

export {LeaveForms}