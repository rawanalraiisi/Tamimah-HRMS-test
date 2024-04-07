import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import RenewalStatusTable from '../../../components/RenewalStatusTable/RenewalStatusTable'


const RenewalStatusPage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <RenewalStatusTable/>
        </div>
    </>
)


const RenewalStatus: FC = () => {
    return (
      <>
        {/* <PageTitle breadcrumbs={[]}>Vehicle Renewal Status</PageTitle> */}
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {RenewalStatus}