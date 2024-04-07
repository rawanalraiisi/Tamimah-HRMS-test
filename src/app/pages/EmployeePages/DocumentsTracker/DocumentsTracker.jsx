import { FC } from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import RenewalStatusTable from '../../../components/EmployeeDocumentRenewalTable/DocumentRenewalTable'
import { ListsWidget12 } from '../../../../_metronic/partials/widgets/lists/ListWidget12'
import useFetchData from '../../../hooks/getData'
import { IconButton } from '@mui/material';
import { Upload, Download, GridView, DocumentScanner, Wallpaper, CheckBoxRounded } from '@mui/icons-material'



// type renewalDetails = {
//   name: string
//   date: string
//   completed: boolean
// }

const data1 = [
  { name: "Passport", date: "10/10/2023", completed: false },
  { name: "Visa", date: "10/10/2023", completed: false },
  { name: "License", date: "7/10/2023", completed: false },
  { name: "Mulkiya", date: "10/10/2023", completed: false }
]

const data2 = [
  { name: "Passport", date: "10/10/2023", completed: false },
  { name: "Visa", date: "10/10/2023", completed: false },
  { name: "License", date: "8/10/2023", completed: false },
  { name: "Mulkiya", date: "10/10/2023", completed: false }
]

const data3 = [
  { name: "Passport", date: "10/10/2023", completed: false },
  { name: "Visa", date: "10/10/2023", completed: false },
]



const RenewalStatusPage: FC = () => {

  const { fetchedData } = useFetchData('getEmployeeDocuments')

  console.log("fetchedData...............:", fetchedData);

  return (
    <>

      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} My Documents / Family Members Documents</h5>

      <div className='row g-5 g-xl-10 mb-md-4 mb-xl-10 d-flex flex-wrap align-content-stretch'>

        {
          fetchedData?.map((data, index) => {

            const details = JSON.parse(data.documentdetails)


            // console.log("data......:", JSON.parse(A.documentdetails));

            return (
              <div className="col-md-12 col-l-6 col-xl-4">
                {/* <ListsWidget12 className='h-100' name={data?.firstname} details={JSON.parse(data.documentdetails)} /> */}

                <div className={`card h-100}`}>
                  {/* begin::Header */}
                  <div className='card-header border-0'>
                    <h3 className='card-title fw-bold text-primary'>{data?.firstname}</h3>
                    <div className='card-toolbar'>
                      {/* begin::Menu */}

                    </div>
                  </div>
                  {/* end::Header */}
                  {/* begin::Body */}
                  <div className='card-body pt-2'>
                    {
                      details?.map((item, index) => {
                        const date = item.expirydate
                        const nowDate = new Date().toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric'
                        });

                        const daysdiff = Math.ceil((new Date(date) - new Date(nowDate)) / (1000 * 60 * 60 * 24))

                        // console.log("diff.............", diff);

                        // const dateDiff = differenceInDays(date, nowDate)

                        // console.log("item JSON............:", item);

                        console.log("Date...............", date);
                        console.log("nowDate...............", nowDate);

                        return (
                          <div className='d-flex align-items-center mb-8'>
                            <span className='bullet bullet-vertical h-40px bg-primary'></span>
                            {/* <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' value='' defaultChecked={item.completed}/>
            </div> */}
                            <div className='flex-grow-1 mx-3'>
                              <span className='text-gray-800 text-hover-primary fw-bold fs-6'>
                                {item.documenttype}
                                {/* any */}
                              </span>
                              <span className='text-muted fw-semibold d-block'>
                                {/* any */}
                                {item.expirydate}
                              </span>
                            </div>
                            {/* <span className={`badge ${item.completed ?'badge-light-success' :(dateDiff<0 ?'bag')} fs-8 fw-bold`}>New</span> */}
                            <div className='d-flex justify-content-between' style={{ flex: '0 0 35%' }}>
                              {
                                item.completed
                                  ? (<span className='badge badge-light-success fs-8 fw-bold'>Completed</span>)
                                  : (
                                    daysdiff < 0
                                      ? (
                                        <div className='d-flex flex-column justify-content-start mx-2'>
                                          <span className='badge badge-light-danger fs-8 fw-bold'>Overdue by</span>
                                          <span className='badge badge-light-danger fs-8 fw-bold'>{daysdiff} days</span>
                                        </div>
                                      )
                                      : (
                                        daysdiff > 30
                                          ? (
                                            <div className='d-flex flex-column justify-content-start mx-2'>
                                              <span className='badge badge-light-primary fs-8 fw-bold'>Due in</span>
                                              <span className='badge badge-light-primary fs-8 fw-bold'>{daysdiff} days</span>
                                            </div>
                                          )
                                          : (
                                            <div className='d-flex flex-column justify-content-start mx-2'>
                                              <span className='badge badge-light-warning fs-8 fw-bold'>Due in</span>
                                              <span className='badge badge-light-warning fs-8 fw-bold'>{daysdiff} days</span>
                                            </div>
                                          )
                                      )
                                  )
                              }
                              <div>
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
















              </div>
            )
          }
          )

        }



        {/* <div className="col-md-12 col-l-6 col-xl-4">
          <ListsWidget12 className='h-100' name='Mera' details={data2} />
        </div>
        <div className="col-md-12 col-l-6 col-xl-4">
          <ListsWidget12 className='h-100' name='Arya' details={data3} />
        </div> */}

      </div >
      {/* <div className='row g-5 g-xl-10'>
              <RenewalStatusTable/>
          </div> */}
    </>
  )
}


const DocumentsTracker: FC = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>Employee Document Renewal Notifications</PageTitle> */}
      <RenewalStatusPage />
    </>
  )
}

export { DocumentsTracker }