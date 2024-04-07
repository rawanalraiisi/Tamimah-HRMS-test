import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import InsuredStaffTable  from '../../../components/InsuredStaffTable/InsuredStaffTable'


const InsuredStaffPage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <InsuredStaffTable/>
        </div>
    </>
)


const InsuredStaff: FC = () => {
    return (
      <>
        {/* <PageTitle breadcrumbs={[]}>Insured Staffs and Family</PageTitle> */}
        <InsuredStaffPage/>
      </>
    )
  }
                    
export {InsuredStaff}