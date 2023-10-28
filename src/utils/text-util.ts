export class SoliasTextUtil {
    constructor(
        public chartCtx: CanvasRenderingContext2D
    ) {}

    addLabel(text: string, posX: number, posY: number, isVerticle: boolean) {
        this.chartCtx.save();
        this.chartCtx.font = "12px";
        if(isVerticle) {
            this.chartCtx.textBaseline = 'middle';
            this.chartCtx.fillText(text, posX, posY);
        } else {
            this.chartCtx.textAlign = 'center';
            this.chartCtx.fillText(text, posX, (posY + 4));
        }
        this.chartCtx.restore();
    }

    getLabelScale(barScale: number, maxValue: number, ratio: number) {
        if(barScale < 12) {
            for(let i = 2; i <= maxValue; i++) {
                if((maxValue % i) === 0 && ((barScale * i) * ratio) > 12) {
                    return i;
                }
            }
        } else {
            return 1;
        }
    }
}