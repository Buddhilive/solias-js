import { SoliasChartOptions, SoliasDefaultChartData } from "../types";
import { SoliasCommonShapes } from "../utils/commonshapes";
import { SoliasTextUtil } from "../utils";

export class SoliasBarchartUtil {

    private commonShapes: SoliasCommonShapes;
    private textUtil: SoliasTextUtil;

    private scale = 1;

    constructor(
        public chartCanvas: HTMLCanvasElement,
        public chartCtx: CanvasRenderingContext2D,
        public data: SoliasDefaultChartData,
        public options: SoliasChartOptions
    ) {
        this.commonShapes = new SoliasCommonShapes(chartCtx);
        this.textUtil = new SoliasTextUtil(chartCtx);
    }

    drawChart() {
        try {
            const maxValue = Math.max(...Object.values(this.data));
            const values = Object.values(this.data);
            const keys = Object.keys(this.data);
            const barWidth = ((this.chartCanvas.width - 32) / values.length);
            const barScale = ((this.chartCanvas.height - 32) / maxValue);
            const ratioX = (values.length * barWidth) / this.chartCanvas.width;
            const ratioY = (maxValue * barScale) / this.chartCanvas.height;
            this.scale = this.textUtil.getLabelScale(barScale, maxValue, ratioY);

            this.drawGrid(maxValue, barWidth, barScale, ratioX, ratioY, values);
            this.addLabels(maxValue, barWidth, barScale, ratioX, ratioY, keys);

            for (let item in values) {
                const startPointX = 24 + ((barWidth * parseInt(item))) * ratioX;
                const startPointY = 16 + (((maxValue * barScale) - (values[item] * barScale))) * ratioY;
                this.drawChartBar(startPointX, startPointY, (barWidth - 5) * ratioX, ((values[item] * barScale) * ratioY));
            }
        } catch (error) {
            console.log('%c Chart draw error ', 'background: #BA1A1A; color: #fff; padding: 2px;', error);
        }
    }

    private drawGrid(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, values: Array<number>) {
        const axisX = ((values.length * barWidth) * ratioX) + 24;
        const axisY = ((maxValue * barScale) * ratioY);
        this.commonShapes.drawGridLine(16, 16, 16, (axisY + 16));
        this.commonShapes.drawGridLine(16, (axisY + 16), axisX, (axisY + 16));
    }

    private addLabels(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, keys: Array<string>) {
        for (let item = 0; item < (maxValue + 1); item++) {
            if((item % this.scale) === 0) {
                const vPosX = 0;
                const vPosY = (((maxValue - item) * barScale) * ratioY) + 16;
                this.textUtil.addLabel(`${item}`, vPosX, vPosY, true);
            }
        }

        for (let item in keys) {
            const hPosX = (24 + (barWidth * parseInt(item))) + ((barWidth * ratioX) / 2);
            const hPosY = 16 + ((maxValue * barScale));
            this.textUtil.addLabel(keys[item], hPosX * ratioX, hPosY, false);
        }
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