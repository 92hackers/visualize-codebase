/**
 * Visualize turbopack: the next-generation Webpack!
 */

import ReactECharts from 'echarts-for-react';
import graph from './new-new-result.json';

import type { EChartOption } from 'echarts';

export default function turbopack() {
  graph.functions.forEach((node) => {
      node.symbolSize = 10;
  })

  console.log(graph.functions.length);

  const options: EChartOption = {
    title: {
      text: 'Visualize turbopack top title',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    // legend: [
    //   {
    //     data: graph.categories.map((category) => category.name),
    //   }
    // ],
    series: [
      {
        name: 'Visualize turbopack ----',
        type: 'graph',
        layout: 'force',
        data: graph.functions, // Represent functions
        links: graph.calls, // Function-call relationships
        categories: graph.categories, // Represent files
        roam: true,
        label: {
          position: 'right',
          show: true, // Show label text with node circle.
        },
        edgeLabel: {
          show: false,
        },
        force: {
          repulsion: 500,
          gravity: 0.1,
        },
        draggable: false,
        symbol: 'circle',
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 10,
        itemStyle: {
          opacity: 1,
        },
        // emphasis: {
        //   focus: 'adjacency', // Focus all related nodes with the Hovering node.
        //   blurScope: 'global',
        // },

        // hideOverlap: true,
        // moveOverlap: "shiftY",

        selectedMode: 'multiple', // Only select one node once, so you have to click multiple times to select more nodes.

        // select: {
        //   itemStyle: {
        //     borderColor: 'red',
        //     borderWidth: '1px',
        //   },
        //   lineStyle: {
        //     width: 5,
        //   },
        //   label: {
        //     color: 'red',
        //   },
        // },
      }
    ],
  }

  return (
    <div>
      <h1>Visualize Turbopack</h1>
      <hr/>
      <ReactECharts
        style={{ height: 1200  }}
        option={options}
        opts={{ renderer: 'svg' }}
      />
    </div>
  )
}
