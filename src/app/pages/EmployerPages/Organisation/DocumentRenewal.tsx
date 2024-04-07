import { FC } from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import RenewalStatusTable from '../../../components/RenewalCompanyDocument/DocumentRenewalTable'
import { ListsWidget10 } from '../../../../_metronic/partials/widgets/lists/ListWidget10'
import { ListsWidget11 } from '../../../../_metronic/partials/widgets/lists/ListWidget11'
import { TablesWidget15 } from '../../../../_metronic/partials/widgets'


const TamimahTelecomData = [
  { name: "Chamber of Commerce", date: "10/15/2024", completed: false },
  { name: "Company registration paper", date: "1/18/2025", completed: false },
  { name: "Muscat Municipality ML", date: "6/18/2023", completed: false },
  { name: "Shafeeq Tenancy agreement", date: "1/1/2024", completed: false },
  { name: "Riyada card", date: "8/1/2023", completed: false },
  { name: "Sheikh Tenancy agreement	", date: "2/13/2025", completed: false },
  { name: "Tamimah Digital Tenancy Agreement	", date: "2/13/2025", completed: false }
]

const DigitalData = [
  { name: "Chamber of Commerce", date: "10/15/2024", completed: false },
  { name: "Company registration paper", date: "1/18/2025", completed: false },
  { name: "Tax Card", date: "6/18/2023", completed: false },
  { name: "VAT Card", date: "1/1/2024", completed: false },
  { name: "Riyada card", date: "8/1/2023", completed: false },
  { name: "Tamimah Digital Tenancy Agreement	", date: "2/13/2025", completed: false }
]

const UtilityBills = [
  [
    { name: "Webtec Internet", amount: 70, status: true },
    { name: "Telephone(24664402)", amount: 70, status: false },
  ],
  [
    { name: "Electricity", amount: 70, status: true },
    { name: "Water", amount: 50, status: false },
    { name: "Fixed Line", amount: 40, status: false },
    { name: "Awasr", amount: 40, status: false },
  ],
  [
    { name: "Electricity", amount: 70, status: false },
    { name: "Water", amount: 50, status: false },
    { name: "Fixed Line", amount: 40, status: false },
    { name: "Awasr", amount: 40, status: true },
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]




const RenewalStatusPage: FC = () => {
  return (
    <>
      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Renewal Company Documents</h5>
      <div className='row g-5 g-xl-10 mb-4 mb-xl-10 d-flex flex-wrap align-content-stretch'>
        <div className="col-md-12 col-lg-6">
          <ListsWidget10 className='h-100 bg-primary-subtle' name='Tamimah Telecom' details={TamimahTelecomData} />
        </div>
        <div className="col-md-12 col-lg-6">
          <ListsWidget10 className='h-100 bg-info-subtle' name='Tamimah Digital' details={DigitalData} />
        </div>
        {/* <div className="col-md-12 col-l-6 col-xl-4">
              <ListsWidget11 className='h-100' name='Utility Bills' details={UtilityBills}/>
            </div> */}
      </div>
      {/* <div className='row g-5 g-xl-10'>
              <RenewalStatusTable/>
          </div> */}
      <div className='row g-5 g-xl-10 mb-md-4 mb-xl-10'>
        <div className='col-12'>
          <TablesWidget15 className='bg-body-secondary' data={UtilityBills} />
        </div>
      </div>
    </>
  )
}


const DocumentRenewal: FC = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>Company Documents Renewal Notification</PageTitle> */}
      <RenewalStatusPage />
    </>
  )
}

export { DocumentRenewal }