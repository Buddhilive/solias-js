import { Component, Element, h, Prop } from '@stencil/core';
import { SoliasChartOptions, SoliasDefaultChartData } from '../../types';
import { SoliasBarchart } from '../../classes';

@Component({
  tag: 'solias-chart',
  shadow: true,
})
export class SoliasChartComponent {

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

  /**
   * An unique identifier for the element
   */
  @Prop()
  id: string;

  @Element() elmnt: HTMLElement;

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
    this.initResizeObserver();
    // console.log(this.elmnt.clientWidth);
    this.chartCtx = this.chartCanvas.getContext('2d');
    this.drawBasicBarChart();
  }

  componentDidUpdate() {
    this.drawBasicBarChart();
  }

  /**
   * Draws a basic bar chart
   */
  private drawBasicBarChart() {
    this.clearCanvas();
    const soliasChart = new SoliasBarchart(this.chartCanvas, this.chartCtx, this.data, this.options);
    soliasChart.drawChart();
  }

  /**
   * Initialize the resize observer
   */
  private initResizeObserver() {
    const resizeObserver = new ResizeObserver(entries => {
      // console.log(entries[0].contentRect.width);
      if (this.chartCanvas.width > entries[0].contentRect.width) {
        this.chartCanvas.width = entries[0].contentRect.width;
      } else {
        this.chartCanvas.width = this.options?.width | 300;
      }
      this.drawBasicBarChart();
    });
    resizeObserver.observe(this.elmnt);
  }

  /**
   * Clears the canvas
   */
  private clearCanvas() {
    // Store the current transformation matrix
    this.chartCtx.save();

    // Use the identity matrix while clearing the canvas
    this.chartCtx.setTransform(1, 0, 0, 1, 0, 0);
    this.chartCtx.clearRect(0, 0, this.chartCanvas.width, this.chartCanvas.height);

    // Restore the transform
    this.chartCtx.restore()
  }

  render() {
    return (
      <canvas
        ref={(el) => this.chartCanvas = el as HTMLCanvasElement}
        id={this.id}
      ></canvas>
    );
  }

}
