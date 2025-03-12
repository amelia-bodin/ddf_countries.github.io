document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById('placeholder');

    // Function to update the chart based on selected chart type
    function updateChart(chartType) {
        let config;
        switch (chartType) {
            case 'BubbleChart':
                config = CONFIG_BUBBLE;
                break;
            case 'BarRankChart':
                config = CONFIG_BARRANK;
                break;
            default:
                config = CONFIG_BUBBLE;
                break;
        }

    }

    // Set up event listeners for the buttons
    document.getElementById('tab-bubble').addEventListener('click', function () {
        updateChart('BubbleChart');
    });


    document.getElementById('tab-bar').addEventListener('click', function () {
        updateChart('BarRankChart');
    });

    updateChart('BubbleChart');
});