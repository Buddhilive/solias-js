import { SoliasChartOptions, SoliasDefaultChartData } from "../types";
import { SoliasCommonShapes } from "./commonshapes";

export class SoliasBarchartUtil {

    private commonShapes: SoliasCommonShapes;

    constructor(
        public chartCanvas: HTMLCanvasElement,
        public chartCtx: CanvasRenderingContext2D,
        public data: SoliasDefaultChartData,
        public options: SoliasChartOptions
        ) {
            this.commonShapes = new SoliasCommonShapes(chartCtx);
    }

    drawChart() {
        try {
          const maxValue = Math.max(...Object.values(this.data));
          const values = Object.values(this.data);
          const keys = Object.keys(this.data);
          const barWidth = ((this.chartCanvas.width - 30) / values.length);
          const barScale = ((this.chartCanvas.height - 30) / maxValue);
          const ratioX = (maxValue * barWidth) / this.chartCanvas.width;
          const ratioY = (maxValue * barScale) / this.chartCanvas.width;
    
          if (true) {
            this.drawGrid(maxValue, barWidth, barScale, ratioX, ratioY, values);
          }
    
          for (let item in values) {
            const startPointX = 24 + (barWidth * parseInt(item));
            const startPointY = 16 + ((maxValue * barScale) - (values[item] * barScale));
            this.drawChartBar(startPointX, startPointY, (barWidth - 5), ((values[item] * barScale) - 30));
          }
        } catch (error) {
          console.log('%c Chart draw error ', 'background: #BA1A1A; color: #fff; padding: 2px;', error);
        }
      }
    
      private drawGrid(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, values: Array<number>) {
        const axisX = ((values.length * barWidth) * ratioX);
        const axisY = ((maxValue * barScale) * ratioY);
        this.commonShapes.drawGridLine(16, 16, 16, (axisY + 16));
        this.commonShapes.drawGridLine(16, (axisY + 16), axisX, (axisY + 16));
      }
    
      private drawChartBar(upperLeftCornerX, upperLeftCornerY, width, height) {
        let color = '#5390F1';
        if (this.options?.color) {
          color = this.options.color;
        }
        this.chartCtx.save();
        this.chartCtx.fillStyle = color;
        this.chartCtx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
        this.chartCtx.restore();
      }
}