import React, { useState } from 'react'

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  inside,
} from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'

import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
const Pie = () => {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={'Chart'} title='Expenses Report' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pie-chart'
          height='480px'
          legendSettings={{ visible: true, background: 'white' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}>
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName='x'
              yName='y'
              explode
              explodeOffset='10%'
              innerRadius='40%'
              startAngle={0}
              endAngle={0}
              radius={'70%'}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font: { fontWeight: '600' },
              }}></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pie
