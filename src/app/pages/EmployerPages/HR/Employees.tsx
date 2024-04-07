import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import EmployeeTable from '../../../components/EmployeeTable/EmployeeDataTable'


const EmployeePage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <EmployeeTable/>
        </div>
    </>
)


const Employees: FC = () => {
    return (
      <>
        {/* <PageTitle breadcrumbs={[]}>Employees</PageTitle> */}
        <EmployeePage />
      </>
    )
  }
                    
export {Employees}