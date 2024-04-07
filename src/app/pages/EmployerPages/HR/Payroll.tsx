import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import PayrollTable from '../../../components/PayrollTable/PayrollTable'


const RenewalStatusPage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <PayrollTable/>
        </div>
    </>
)


const Payroll: FC = () => {
    return (
      <>
        {/* <PageTitle breadcrumbs={[]}>Payroll</PageTitle> */}
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {Payroll}