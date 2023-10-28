import { cities } from './sample-data.js';

window.onload = () => {
    loadSimpleBarchart();
};

function loadSimpleBarchart() {
    try {
        const refElement = document.getElementsByTagName('solias-barchart');
        refElement[0].data = cities;
        refElement[0].options = {
            height: 200,
            width: 500,
            color: '#00A0AF'
        }
    } catch (error) {
        console.log(error);
    }
}