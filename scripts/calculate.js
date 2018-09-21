const harmonicalSignal = (A, n, f, angle) =>
    A * Math.sin((2 * Math.PI * f * n) / 512 + angle);

const polyharmonicalSignal = (n, newMatrix) => {
    const matrix = newMatrix || defaultMatrix;
    const results = matrix.map((item) => {
        const sinAngle = (2 * Math.PI * item.f * n) / 512 + item.angle;
        return item.A * Math.sin(sinAngle);
    });
    return results.reduce((a, b) => a + b);
};

const polyharmonicalSignalLinear = (nArr) => {
  let matrix = defaultMatrix;
  return nArr.map((n) => {
    let s = polyharmonicalSignal(n, matrix);
    matrix = matrix.map((item) => {
      return {
        A: item.A + item.A * 0.005,
        f: item.f + item.f * 0.005,
        angle: item.angle - item.angle * 0.005
      };
    });
    return s;
  });
};
