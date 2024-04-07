
import React, { useEffect, useState } from 'react'
import { toAbsoluteUrl, KTSVG } from '../../../../_metronic/helpers'
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../../../modules/accounts/components/settings/SettingsModel'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FC } from 'react'
import {
  CardsWidget7,
  CardsWidget21,
  CardsWidget20,
  CardsWidget30,
  ListsWidget26,
  EngageWidget10,
  MixedWidget16,
} from '../../../../_metronic/partials/widgets'
import axios from 'axios'
import useFetchData from '../../../hooks/getData'

const LeavePolicy: FC = () => {

  const { fetchedData } = useFetchData('getCompanyPolicies');

  const leaveItems = [
    { title: 'Sick Leave', color: '#34a8cb' },
    { title: 'Maternity Leave', color: '#6255a3' },
    { title: 'Paternity Leave', color: '#143983' },
    { title: 'Marriage Leave', color: '#6255a3' },
    { title: 'Unpaid Leave', color: '#143983' },
    { title: 'Hajj Leave', color: '#6255a3' },
    { title: 'Emergency Leave', color: '#143983' },
    { title: 'Annual Leave', color: '#6255a3' },
    { title: 'Additional Leave', color: '#34a8cb' },
  ];

  const [checkTitle, setCheckTitle] = useState()

  const filteredData = fetchedData?.filter((data, index) => data?.policyTitle == checkTitle)

  return <>

    <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Leave Policy</h5>

    <div className='row g-6 g-xl-30 mb-10 mb-xl-4 justify-content-md-center'>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}></div>
      <div className='row col-md-6 g-6 g-xl-30 mb-5 mb-xl-2 justify-content-md-center' style={{ background: '' }}>
        {leaveItems?.map((item: any, index: any) => (
          <div
            onClick={() => setCheckTitle(item?.title)}
            key={index} className='col-md-4 col-sm-6 mb-md-2 bg-red-400'>
            <a className="text-white" data-bs-toggle="collapse" href={`#${item.title.replace(/\s+/g, '_')}`} role="button" aria-expanded="false" aria-controls={item.title.replace(/\s+/g, '_')}>
              <CardsWidget30
                className='h-md-45 mb-1'
                color={item?.color}
                img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                title={item?.title}
                description=''
              />
            </a>
          </div>
        ))}
      </div>
    </div>

    {
      filteredData?.map((data, index) =>
        <div className='accordion accordion-borderless' id='kt_accordion_1' style={{ border: 'shadow-white' }}>
          <div className='accordion-item bg-transparent pb-3'>
            <div className='accordion-body text-body-secondary rounded-4 p-15 container bg-primary-subtle text-primary'>

              <p className='text-justify'>


                <div dangerouslySetInnerHTML={{ __html: data?.description }} />

                {/* <h1>{data?.policyId}</h1> */}

              </p>
            </div>

            <div
              id='Sick_Leave'
              className='accordion-collapse collapse'
              aria-labelledby='kt_accordion_1_header_1'
              data-bs-parent='#kt_accordion_1'
            >
            </div>
          </div>
        </div>

      )
    }

  </>
}

export { LeavePolicy }









