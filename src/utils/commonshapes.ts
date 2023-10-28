export class SoliasCommonShapes {

    constructor(
        public chartCtx: CanvasRenderingContext2D
    ) {}

    drawGridLine(startX: number, startY: number, endX: number, endY: number, color = '#1A1B1F') {
        this.chartCtx.save();
        this.chartCtx.strokeStyle = color;
        this.chartCtx.beginPath();
        this.chartCtx.moveTo(startX, startY);
        this.chartCtx.lineTo(endX, endY);
        this.chartCtx.stroke();
        this.chartCtx.restore();
    }
}