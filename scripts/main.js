const firstChart = () => {
    const A = 6;
    const F = 3;

    const CHART_1 = new Chart(CONTEXT_CHART_1, {
        type: 'line',
        data: {
            datasets: [{
                label: 'φ = 2π',
                fill: false,
                backgroundColor: CHART_COLORS.red,
                borderColor: CHART_COLORS.red,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, F, 2 * Math.PI))
            }, {
                label: 'φ = π / 6',
                fill: false,
                backgroundColor: CHART_COLORS.orange,
                borderColor: CHART_COLORS.orange,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, F, Math.PI / 6))
            }, {
                label: 'φ = π / 2',
                fill: false,
                backgroundColor: CHART_COLORS.yellow,
                borderColor: CHART_COLORS.yellow,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, F, 2 * Math.PI / 2))
            }, {
                label: 'φ = 0',
                fill: false,
                backgroundColor: CHART_COLORS.green,
                borderColor: CHART_COLORS.green,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, F, 0))
            }, {
                label: 'φ = 3π / 4',
                fill: false,
                backgroundColor: CHART_COLORS.grey,
                borderColor: CHART_COLORS.grey,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, F, 3 * Math.PI / 4))
            }],
            labels: N_ARRAY,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'A = 6, F = 3'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: -5,
                        suggestedMax: 5
                    },
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }]
            }
        }
    });
};

const secondChart = () => {
    const A = 8;
    const ANGLE = Math.PI / 4;

    const CHART_2 = new Chart(CONTEXT_CHART_2, {
        type: 'line',
        data: {
            datasets: [{
                label: 'f = 2',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.red,
                borderColor: CHART_COLORS.red,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, 2, ANGLE))
            }, {
                label: 'f = 4',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.orange,
                borderColor: CHART_COLORS.orange,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, 4, ANGLE))
            }, {
                label: 'f = 3',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.yellow,
                borderColor: CHART_COLORS.yellow,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, 3, ANGLE))
            }, {
                label: 'f = 7',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.green,
                borderColor: CHART_COLORS.green,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, 7, ANGLE))
            }, {
                label: 'f = 5',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.grey,
                borderColor: CHART_COLORS.grey,
                data: N_ARRAY.map(n => harmonicalSignal(A, n, 5, ANGLE))
            }],
            labels: N_ARRAY,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'A = 8, φ = π / 4'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: -5,
                        suggestedMax: 5
                    },
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }]
            }
        }
    });
};

const thirdChart = () => {
    const F = 5;
    const ANGLE = Math.PI / 4;

    const CHART_3 = new Chart(CONTEXT_CHART_3, {
        type: 'line',
        data: {
            datasets: [{
                label: 'A = 2',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.red,
                borderColor: CHART_COLORS.red,
                data: N_ARRAY.map(n => harmonicalSignal(2, n, F, ANGLE))
            }, {
                label: 'A = 2',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.orange,
                borderColor: CHART_COLORS.orange,
                data: N_ARRAY.map(n => harmonicalSignal(2, n, F, ANGLE))
            }, {
                label: 'A = 8',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.yellow,
                borderColor: CHART_COLORS.yellow,
                data: N_ARRAY.map(n => harmonicalSignal(8, n, F, ANGLE))
            }, {
                label: 'A = 3',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.green,
                borderColor: CHART_COLORS.green,
                data: N_ARRAY.map(n => harmonicalSignal(3, n, F, ANGLE))
            }, {
                label: 'A = 1',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.grey,
                borderColor: CHART_COLORS.grey,
                data: N_ARRAY.map(n => harmonicalSignal(1, n, F, ANGLE))
            }],
            labels: N_ARRAY,
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'f = 5, φ = π / 4'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: -5,
                        suggestedMax: 5
                    },
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }]
            }
        }
    });
};

const firstPolyharmonicalChart = () => {
    const CHART_4 = new Chart(CONTEXT_CHART_4, {
        type: 'line',
        data: {
            datasets: [{
                label: 'polyharmonical signal',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.red,
                borderColor: CHART_COLORS.red,
                data: N_ARRAY.map(n => polyharmonicalSignal(n))
            }],
            labels: N_ARRAY,
        },
        options: {
            responsive: true,
            title:{
                display: true,
                text:'Polyharmonical signal'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: -5,
                        suggestedMax: 5
                    },
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }]
            }
        }
    });
};

const secondPolyharmonicalChart = () => {
    const CHART_5 = new Chart(CONTEXT_CHART_5, {
        type: 'line',
        data: {
            datasets: [{
                label: 'polyharmonical signal',
                fill: false,
                pointStyle: 'line',
                backgroundColor: CHART_COLORS.red,
                borderColor: CHART_COLORS.red,
                data: polyharmonicalSignalLinear(N_ARRAY)
            }],
            labels: N_ARRAY
        },
        options: {
            responsive: true,
            title:{
                display: true,
                text: 'Polyharmonical signal'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: -5,
                        suggestedMax: 5
                    },
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }]
            }
        }
    });
};

const main = () => {
  firstChart();
  secondChart();
  thirdChart();
  firstPolyharmonicalChart();
  secondPolyharmonicalChart();
};

main();