var options = {
    chart: {
        height: 280,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Norges behov for IT utviklere",
            data: [42500, 55000]
        }
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: ['2020', '2030']
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();