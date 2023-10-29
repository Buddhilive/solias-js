export class SoliasCommonShapes {

    constructor(
        public chartCtx: CanvasRenderingContext2D
    ) {}

    /**
     * Draws grid lines
     * @param startX X axis starting point
     * @param startY Y axis starting point
     * @param endX X axis ending point
     * @param endY Y axis ending point
     * @param color Line fill color
     */
    drawGridLine(startX: number, startY: number, endX: number, endY: number, color = '#d1d1d1') {
        this.chartCtx.save();
        this.chartCtx.strokeStyle = color;
        this.chartCtx.beginPath();
        this.chartCtx.moveTo(startX, startY);
        this.chartCtx.lineTo(endX, endY);
        this.chartCtx.stroke();
        this.chartCtx.restore();
    }
}