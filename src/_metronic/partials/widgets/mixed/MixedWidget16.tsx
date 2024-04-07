/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  chartProgressColor: string
  chartTrackColor: string
  chartHeight: string
  chartTitle: string
  chartCompleted: string
  chartTotal?: string
}

const MixedWidget16: React.FC<Props> = ({className, chartProgressColor, chartTrackColor, chartHeight, chartTitle, chartCompleted, chartTotal}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartProgressColor, chartTrackColor, chartHeight, chartTitle, chartCompleted, chartTotal))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, mode])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      {/* <div className='card-header border-0' style={{height: '50px', minHeight: '50px', padding: '0.5rem 2.25rem 0rem 2.25rem'}}>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-4 mb-1'>{chartTitle}</span>
        </h3>
      </div> */}
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex flex-column' style={{padding: '1rem 2.25rem 1rem 2.25rem'}}>
        <div className='flex-grow-1'>
          <div ref={chartRef} className='mixed-widget-4-chart'></div>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (
  chartProgressColor: string,
  chartTrackColor: string,
  chartHeight: string,
  chartTitle: string,
  chartCompleted: string,
  chartTotal?: string,
  ): ApexOptions => {
//   const baseColor = getCSSVariableValue('--bs-' + chartColor)
//   const lightColor = getCSSVariableValue('--bs-' + chartColor + '-light')
  const labelColor = getCSSVariableValue('--bs-gray-700')

  return {
    series: [parseInt(chartCompleted)*100/parseInt(chartTotal??'50')],
    chart: {
      fontFamily: 'inherit',
      height: chartHeight,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%',
        },
        dataLabels: {
          name: {
            show: true,
            offsetY: -5,
            fontWeight: '700',
          },
          value: {
            color: labelColor,
            fontSize: '22px',
            fontWeight: '500',
            offsetY: 4,
            show: true,
            formatter: function () {
              if (chartTotal==null){
                return chartCompleted
              } else{
                return chartCompleted + "/" + chartTotal
              }
            },
          },
        },
        track: {
          background: chartTrackColor,
          strokeWidth: '100%',
        },
      },
    },
    colors: [chartProgressColor],
    stroke: {
      lineCap: 'round',
    },
    labels: [chartTitle],
  }
}

export {MixedWidget16}