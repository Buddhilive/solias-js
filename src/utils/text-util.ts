export class SoliasTextUtil {
    constructor(
        public chartCtx: CanvasRenderingContext2D
    ) {}

    /**
     * Adds bar char labels
     * @param text Label text
     * @param posX X position
     * @param posY Y position
     * @param isVerticle Verticle label or not?
     */
    addLabel(text: string, posX: number, posY: number, isVerticle: boolean) {
        this.chartCtx.save();
        this.chartCtx.font = "12px";
        this.chartCtx.fillStyle = '#4f4f4f';
        if(isVerticle) {
            this.chartCtx.textBaseline = 'middle';
            this.chartCtx.textAlign = 'right';
            this.chartCtx.fillText(text, posX, posY);
        } else {
            this.chartCtx.textAlign = 'center';
            this.chartCtx.fillText(text, posX, (posY + 4));
        }
        this.chartCtx.restore();
    }

    /**
     * Get scale for the chart
     * @param barScale Chart scale
     * @param maxValue Maximum value
     * @param ratio Ratio
     * @returns Scale
     */
    getLabelScale(barScale: number, maxValue: number, ratio: number) {
        let scale = this.calculateScale(barScale, maxValue, ratio);
        if(scale === maxValue) {
            return scale = this.calculateScale(barScale, maxValue - 1, ratio);
        } else {
            return scale;
        }
    }

    /**
     * Return actual scale
     * @param barScale Chart scale
     * @param maxValue Maximum value
     * @param ratio Ratio
     * @returns Scale
     */
    private calculateScale(barScale: number, maxValue: number, ratio: number) {
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