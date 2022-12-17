/**
 * Nginx visualization.
 *
 */

import React from 'react'
import ReactECharts from 'echarts-for-react';


const options = {
  grid: { top: 8, right: 8, bottom: 24, left: 36  },
        xAxis: {
  type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Next'],
        },
  yAxis: {
  type: 'value',
         },
  series: [
          {
  data: [820, 932, 901, 934, 1290, 1330, 1320, 999],
        type: 'line',
        smooth: true,
          },
          {
  data: [820, 932, 901, 934, 1290, 1330, 1320, 999],
        type: 'bar',
        smooth: true,
          },
  ],
  tooltip: {
  trigger: 'axis',
  },
};

export default function fn() {
  return (
    <div style={{ width: 500, margin: '0 auto' }}>
      <ReactECharts option={options} opts={{ renderer: 'svg' }} />
    </div>
  )
}
