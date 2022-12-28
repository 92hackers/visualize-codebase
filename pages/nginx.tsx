/**
 * Nginx visualization.
 *
 */

import React from 'react'
import ReactECharts from 'echarts-for-react';
import data from './flare.json';


export default function fn() {
  data.children.forEach((datum, index) => {
      index % 2 === 0 && (datum.collapsed = true)
  })

  const options = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 14,
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        emphasis: {
          focus: 'descendant'
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  }

  return (
    <div>
      <h1>Visualize Nginx</h1>
      <hr/>
      <ReactECharts
        style={{ height: 500  }}
        option={options}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  )
}
