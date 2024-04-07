import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import ProductsServicesTable from '../../../components/ProductsServicesTable/ProductsServicesTable'


const RenewalStatusPage: FC = () => (
    <>
    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Products and Services</h5>
        <div className='row g-5 g-xl-10'>
            <ProductsServicesTable/>
        </div>
    </>
)


const ProductsServices: FC = () => {
    return (
      <>
       
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {ProductsServices}