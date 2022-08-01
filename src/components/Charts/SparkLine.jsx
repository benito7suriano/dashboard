import React from 'react'
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts'

const Sparkline = ({ currentColor, id, type, height, width, data, color }) => (
  <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType='Numeric'
    fill={color}
    border={{ color: currentColor, width: 2 }}
    dataSource={data}
    xName='x'
    yName='yval'
    type={type}>
    <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
)

export default Sparkline
