import { Component, h, Prop } from '@stencil/core';
import { SoliasChartOptions, SoliasDefaultChartData } from '../../types';
import { SoliasBarchartUtil } from '../../utils';

@Component({
  tag: 'solias-barchart',
  shadow: true,
})
export class SoliasBarchart {

  /**
   * Input data
   */
  @Prop()
  data: SoliasDefaultChartData;

  /**
   * Chart Options
   */
  @Prop()
  options: SoliasChartOptions;

  chartCanvas: HTMLCanvasElement;

  chartCtx: any;

  componentDidLoad() {
    if (this.options?.height && this.options?.width) {
      this.chartCanvas.height = this.options.height;
      this.chartCanvas.width = this.options.width;
    } else {
      this.chartCanvas.height = 300;
      this.chartCanvas.width = 300;
    }
    // console.log(this.data);
    this.chartCtx = this.chartCanvas.getContext('2d');
    this.drawBasicBarChart();
  }

  componentDidUpdate() {
    this.drawBasicBarChart();
  }

  drawBasicBarChart() {
    const soliasChart = new SoliasBarchartUtil(this.chartCanvas, this.chartCtx, this.data, this.options);
    soliasChart.drawChart();
  }

  render() {
    return (
      <canvas ref={(el) => this.chartCanvas = el as HTMLCanvasElement}></canvas>
    );
  }

}