import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import VehicleDetailsTable from '../../../components/VehiclesTable/VehicleDetailsTable'
import VehicleFinesTable from '../../../components/VehiclesTable/VehicleFinesTable'


const RenewalStatusPage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <VehicleDetailsTable/>
        </div>
        <div className='row g-5 g-xl-10'>
            <VehicleFinesTable year={2023}/>
        </div>
    </>
)


const Vehicles: FC = () => {
    return (
      <>
        {/* <PageTitle breadcrumbs={[]}>Vehicle Details</PageTitle> */}
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {Vehicles}