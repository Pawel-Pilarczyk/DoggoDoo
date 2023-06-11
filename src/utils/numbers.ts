export const getPrecentValue = (value: number, fullValue: number): number =>
    Math.floor((value / fullValue) * 100);
