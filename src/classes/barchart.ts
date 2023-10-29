import { SoliasChartOptions, SoliasDefaultChartData } from "../types";
import { SoliasCommonShapes } from "../utils/commonshapes";
import { SoliasTextUtil } from "../utils";

export class SoliasBarchart {

    private commonShapes: SoliasCommonShapes;
    private textUtil: SoliasTextUtil;

    private scale = 1;

    paddingTopBottom = 16;
    paddingLeftRight = 16;
    gutterSpace = 8;

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
            const barWidth = ((this.chartCanvas.width - (this.paddingTopBottom + this.paddingLeftRight)) / values.length);
            const barScale = ((this.chartCanvas.height - (this.paddingTopBottom + this.paddingLeftRight)) / maxValue);
            const ratioX = (values.length * barWidth) / this.chartCanvas.width;
            const ratioY = (maxValue * barScale) / this.chartCanvas.height;
            this.scale = this.textUtil.getLabelScale(barScale, maxValue, ratioY);

            this.drawGrid(maxValue, barWidth, barScale, ratioX, ratioY, values);
            this.addLabels(maxValue, barWidth, barScale, ratioX, ratioY, keys);

            for (let item in values) {
                const startPointX = (this.paddingLeftRight + this.gutterSpace) + ((barWidth * parseInt(item))) * ratioX;
                const startPointY = this.paddingTopBottom + (((maxValue * barScale) - (values[item] * barScale))) * ratioY;
                this.drawChartBar(startPointX, startPointY, (barWidth - this.gutterSpace) * ratioX, ((values[item] * barScale) * ratioY));
            }
        } catch (error) {
            console.log('%c Chart draw error ', 'background: #BA1A1A; color: #fff; padding: 2px;', error);
        }
    }

    private drawGrid(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, values: Array<number>) {
        const axisX = ((values.length * barWidth) * ratioX) + (this.paddingLeftRight + this.gutterSpace);
        const axisY = ((maxValue * barScale) * ratioY);
        this.commonShapes.drawGridLine(this.paddingLeftRight, this.paddingTopBottom, this.paddingLeftRight, (axisY + this.paddingTopBottom));
        this.commonShapes.drawGridLine(this.paddingLeftRight, (axisY + this.paddingTopBottom), axisX, (axisY + this.paddingTopBottom));
    }

    private addLabels(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, keys: Array<string>) {
        for (let item = 0; item < (maxValue + 1); item++) {
            if((item % this.scale) === 0) {
                const vPosX = 0;
                const vPosY = (((maxValue - item) * barScale) * ratioY) + this.paddingTopBottom;
                this.textUtil.addLabel(`${item}`, vPosX, vPosY, true);
            }
        }

        for (let item in keys) {
            const hPosX = ((this.paddingLeftRight + this.gutterSpace) + (barWidth * parseInt(item))) + ((barWidth * ratioX) / 2);
            const hPosY = this.paddingTopBottom + ((maxValue * barScale));
            this.textUtil.addLabel(keys[item], hPosX * ratioX, hPosY, false);
        }
    }

    private drawChartBar(upperLeftCornerX, upperLeftCornerY, width, height) {
        let color = '#e9488b';
        if (this.options?.color) {
            color = this.options.color;
        }
        this.chartCtx.save();
        this.chartCtx.fillStyle = color;
        this.chartCtx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
        this.chartCtx.restore();
    }
}