import { cities } from './sample-data.js';

window.onload = () => {
    loadSimpleBarchart();
};

function loadSimpleBarchart() {
    try {
        const refElement = document.getElementsByTagName('solias-chart');
        refElement[0].data = cities;
        refElement[0].options = {
            height: 200,
            width: 1000,
            color: '#e9488b'
        }
    } catch (error) {
        console.log(error);
    }
}