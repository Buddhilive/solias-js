import { SoliasChartOptions, SoliasDefaultChartData } from "../types";
import { SoliasCommonShapes } from "../utils/commonshapes";
import { SoliasTextUtil } from "../utils";

export class SoliasBarchart {

    private commonShapes: SoliasCommonShapes;
    private textUtil: SoliasTextUtil;

    private scale = 1;

    paddingTopBottom = 16;
    paddingLeftRight = 24;
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

    /**
     * Star drawing barchart
     */
    drawChart() {
        try {
            const maxValue = Math.max(...Object.values(this.data));
            const values = Object.values(this.data);
            const keys = Object.keys(this.data);
            const barWidth = ((this.chartCanvas.width - (this.paddingTopBottom + this.paddingLeftRight)) / values.length);
            const barScale = ((this.chartCanvas.height - (this.paddingTopBottom + this.paddingLeftRight)) / maxValue);
            const ratioX = (values.length * barWidth) / this.chartCanvas.width;
            const ratioY = (maxValue * barScale) / this.chartCanvas.height;
            this.scale = this.textUtil.getLabelScale(barScale, maxValue + 2, ratioY);

            this.drawGrid(maxValue + 2, barWidth, barScale, ratioX, ratioY, values);
            this.addLabels(maxValue + 2, barWidth, barScale, ratioX, ratioY, keys);

            /**
             * Draws bars for basic bar chart
             */
            for (let item in values) {
                const startPointX = ((this.paddingLeftRight + this.gutterSpace) + ((barWidth * parseInt(item))) * ratioX);
                const startPointY = this.paddingTopBottom + ((((maxValue + 2) * barScale) - (values[item] * barScale))) * ratioY;
                this.drawChartBar(startPointX, startPointY, (barWidth - (this.gutterSpace * 2)) * ratioX, ((values[item] * barScale) * ratioY));
            }
        } catch (error) {
            console.log('%c Chart draw error ', 'background: #BA1A1A; color: #fff; padding: 2px;', error);
        }
    }

    /**
     * Draws the base grid lines
     * @param maxValue Maximum value of data
     * @param barWidth Width of a bar
     * @param barScale Scale of a bar
     * @param ratioX X axis ratio
     * @param ratioY Y axis ratio
     * @param values All data values
     */
    private drawGrid(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, values: Array<number>) {
        const axisX = ((values.length * barWidth) * ratioX) + this.paddingLeftRight;
        const axisY = ((maxValue * barScale) * ratioY);
        this.commonShapes.drawGridLine(this.paddingLeftRight, this.paddingTopBottom, this.paddingLeftRight, (axisY + this.paddingTopBottom));
        this.commonShapes.drawGridLine(this.paddingLeftRight, (axisY + this.paddingTopBottom), axisX, (axisY + this.paddingTopBottom));
    }

    /**
     * Adds labels to the chart
     * @param maxValue Maximum value of data
     * @param barWidth Width of a bar
     * @param barScale Scale of a bar
     * @param ratioX X axis ratio
     * @param ratioY Y axis ratio
     * @param keys All data keys
     */
    private addLabels(maxValue: number, barWidth: number, barScale: number, ratioX: number, ratioY: number, keys: Array<string>) {
        // Adding scale labels and horizontal grid lines
        for (let item = 0; item < (maxValue + 2); item++) {
            if((item % this.scale) === 0) {
                const vPosX = (this.paddingLeftRight - this.gutterSpace) * ratioX;
                const vPosY = (((maxValue - item) * barScale) * ratioY) + this.paddingTopBottom;
                this.textUtil.addLabel(`${item}`, vPosX, vPosY, true);
                this.commonShapes.drawGridLine(vPosX + (this.gutterSpace / 2), vPosY, ((barWidth * keys.length) * ratioX) + this.paddingLeftRight, vPosY, '#d1d1d1');
            }
        }

        // Adding class labels and verticle grid lines
        for (let item in keys) {
            const hPosX = ((this.paddingLeftRight + this.gutterSpace) + (barWidth * parseInt(item))) + ((barWidth * ratioX) / 2);
            const hPosY = (this.paddingTopBottom * 2) + (((maxValue * barScale)) * ratioY);
            const girdPosX = ((barWidth * (parseInt(item) + 1)) * ratioX) + this.paddingLeftRight;
            this.textUtil.addLabel(keys[item], hPosX * ratioX, hPosY, false);
            this.commonShapes.drawGridLine(girdPosX, this.paddingTopBottom, girdPosX, ((maxValue * barScale) * ratioY) + this.paddingTopBottom, '#d1d1d1');
        }
    }

    /**
     * Draws bars
     * @param upperLeftCornerX Upper left corner of the bar's X axis
     * @param upperLeftCornerY Upper left corner of the bar's Y axis 
     * @param width Width of the bar
     * @param height Height of the bar
     */
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