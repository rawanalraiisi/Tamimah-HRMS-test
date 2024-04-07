import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import BankGuaranteeTable from '../../../components/BankGuaranteeTable/BankGuaranteeTable'


const RenewalStatusPage: FC = () => (
    <>
     <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Bank Gurantee</h5>
        <div className='row g-5 g-xl-10'>
            <BankGuaranteeTable/>
        </div>
    </>
)


const BankGuarantee: FC = () => {
    return (
      <>
       
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {BankGuarantee}