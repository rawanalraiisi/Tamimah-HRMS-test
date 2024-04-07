import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../../_metronic/helpers'

import {
  CardsWidget7,
  CardsWidget21,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
  MixedWidget16,
} from '../../../../_metronic/partials/widgets'


import {
  StatisticsWidget1,
  StatisticsWidget2,
  StatisticsWidget3,
  StatisticsWidget4,
  StatisticsWidget5,
  StatisticsWidget6,
} from '../../../../_metronic/partials/widgets'
import useFetchData from '../../../hooks/getData'


const OverallPolicies: FC = () => {

  const { fetchedData } = useFetchData('getCompanyDocuments');
  console.log("fetchedData", fetchedData);


  const image_path = [
    '/media/stock/600x400/Visa.jpg', '/media/stock/600x400/Company_structure.jpg',
    '/media/stock/600x400/Company_Policy.jpg', '/media/stock/600x400/Car_insurance.jpg',
    '/media/stock/600x400/Health_Insurance_Providers.jpg', '/media/stock/600x400/Company_structure.jpg',
    '/media/stock/600x400/Visa.jpg',
  ]

  const a = [
    {
      "docTitle": "Visa Application"
    },
    {
      "docTitle": "Employee Hierarchy"
    },
    {
      "docTitle": "Overall Policies"
    },
    {
      "docTitle": "Car Insurance"
    },
    {
      "docTitle": "Health Insurance Benefits"
    }
  ]

  const arr = fetchedData?.map((item, index) => ({
    title: item.docTitle,
    path: image_path[index]
  }));

  console.log("A", arr);



  return <>




    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Download Company Documents / Company Overall Policies</h5>

    <div className="row mb-10">
      {/* Visa Application document */}
      {
        arr?.map((data, index) =>
          <div className="col-lg-3 mb-5">
            <div className="card card-custom overlay overflow-hidden">
              <div className="card-body p-0">
                <div className="overlay-wrapper">
                  <img
                    src={toAbsoluteUrl(data?.path)}
                    alt=""
                    className="w-100 rounded"
                  />
                </div>
                <div className="overlay-layer bg-dark bg-opacity-50">
                  <a href=" https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
                </div>
              </div>
            </div>
            <p className='text-primary fw-bold px-5 mt-3'> {data?.title} </p>
          </div>
        )
      }

      {/* Employee Hierarchy */}
      {/* <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Company_structure.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5 mt-3'> Employee Hierarchy </p>
      </div> */}
      {/* Overall Policies */}
      {/* <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Company_Policy.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5 mt-3'> Overall Policies </p>
      </div> */}



      {/* Car Insurance documents */}
      {/* <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Car_insurance.jpg ')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5 mt-3'> Car Insurance</p>
      </div> */}
      {/* Health Insurance Benefits documents */}
      {/* <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Health_insurance.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5 mt-3'> Health Insurance Benefits </p>
      </div> */}
      {/* Health Insurance Providers documents */}
      {/* <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/Health_Insurance_Providers.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-success btn-active-success btn-shadow ms-2 "><i className="bi bi-file-earmark-ruled fs-1"></i></a>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5 mt-3'> Health Insurance Providers </p>
      </div> */}

      {/*KPI documents */}
      {/* <div className="col-lg-3 mb-5">
        <div className="card card-custom overlay overflow-hidden">
          <div className="card-body p-0">
            <div className="overlay-wrapper">
              <img
                src={toAbsoluteUrl('/media/stock/600x400/KPI.jpg')}
                alt=""
                className="w-100 rounded"
              />
            </div>
            <div className="overlay-layer bg-dark bg-opacity-50">
              <a href="https://me-qr.com/gIlvcDfL" className="btn btn-icon btn-light-danger btn-active-danger btn-shadow ms-2 "><i className="bi bi-file-earmark-pdf fs-1"></i></a>
            </div>
          </div>
        </div>
        <p className='text-primary fw-bold px-5 mt-3'> KPI Documents </p>
      </div> */}

    </div>








  </>
}




export { OverallPolicies }