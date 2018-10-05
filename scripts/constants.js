const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

const N_ARRAY = [...Array(512).keys()];

const CONTEXT_CHART_1 = document.getElementById("chart-1").getContext("2d");
const CONTEXT_CHART_2 = document.getElementById("chart-2").getContext("2d");
const CONTEXT_CHART_3 = document.getElementById("chart-3").getContext("2d");
const CONTEXT_CHART_4 = document.getElementById("chart-4").getContext("2d");
const CONTEXT_CHART_5 = document.getElementById("chart-5").getContext("2d");

const defaultMatrix = [
  {
    A: 6,
    f: 1,
    angle: Math.PI / 6
  },
  {
    A: 6,
    f: 2,
    angle: Math.PI / 2
  },
  {
    A: 6,
    f: 3,
    angle: Math.PI / 3
  },
  {
    A: 6,
    f: 4,
    angle: Math.PI / 9
  },
  {
    A: 6,
    f: 5,
    angle: 0
  }
];