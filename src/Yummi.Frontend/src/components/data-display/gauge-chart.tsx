import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more.js';
import GaugeModule from 'highcharts/modules/solid-gauge.js';

highchartsMore(Highcharts);
GaugeModule(Highcharts);

type Props = {
  value: number;
  width?: number;
  height?: number;
};

const getOptions = ({ value, height = 200, width = 300 }: Props) => ({
  chart: {
    type: 'solidgauge',
    width,
    height
  },
  title: null,

  pane: {
    center: ['25%', '40%'],
    size: '80%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  exporting: {
    enabled: false
  },

  yAxis: {
    stops: [
      [0.1, '#DF5353'],
      [0.5, '#DDDF0D'],
      [0.9, '#55BF3B']
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: false,
    labels: {
      enabled: false
    },
    min: 0,
    max: 100
  },

  credits: {
    enabled: false
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: -30,
        borderWidth: 0,
        useHTML: true
      }
    }
  },
  tooltip: {
    enabled: false
  },

  series: [
    {
      name: '',
      data: [value],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y}</span><br/>' +
          '</div>'
      }
    }
  ]
});
GaugeModule(Highcharts);

export const GaugeChart = (props: Props): JSX.Element => {
  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions(props)} />
  );
};
