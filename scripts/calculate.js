const harmonicalSignal = (A, n, f, angle) =>
    A * Math.sin((2 * Math.PI * f * n) / 512 + angle);

const polyharmonicalSignal = (n, newMatrix) => {
    const matrix = newMatrix || defaultMatrix;
    const results = matrix.map((item) => 
        harmonicalSignal(item.A, n, item.f, item.angle));
    return results.reduce((a, b) => a + b);
};

const polyharmonicalSignalLinear = (nArr) => {
    let matrix = defaultMatrix;
    return nArr.map((n) => {
        let signal = polyharmonicalSignal(n, matrix);
        matrix = matrix.map((item) => {
            return {
                A: item.A + item.A * 0.005,
                f: item.f + item.f * 0.005,
                angle: item.angle - item.angle * 0.005
            };
        });
        return signal;
    });
};
