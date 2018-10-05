
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

firstPolyharmonicalChart = () => {
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

secondPolyharmonicalChart = () => {
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
  firstPolyharmonicalChart();
  secondPolyharmonicalChart();
};

main();