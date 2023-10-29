import { cities } from '../script/sample-data';

export const createChart = ({
    data = cities,
    options = {
        color: '#00A0AF'
    }
}) => {
    const soliasChart = document.createElement('solias-barchart');
    soliasChart.data = data;
    soliasChart.options = options;

    return soliasChart;
};