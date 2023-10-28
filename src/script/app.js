import { cities } from './sample-data.js';

window.onload = () => {
    loadSimpleBarchart();
};

function loadSimpleBarchart() {
    try {
        const refElement = document.getElementsByTagName('solias-barchart');
        refElement[0].data = cities;
        /* refElement[0].options = {
            height: 500,
            width: 500
        } */
    } catch (error) {
        console.log(error);
    }
}