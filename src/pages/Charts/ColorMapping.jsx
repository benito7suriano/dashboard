import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts'

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const ColorMapping = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category='Color Mappping'
        title='USA CLIMATE - WEATHER BY MONTH'
      />
      <div className='w-full'></div>
    </div>
  )
}

export default ColorMapping
