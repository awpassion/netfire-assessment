export const formatNumber = (number: number, minimumIntegerDigits: number) => {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: minimumIntegerDigits < 2 ? 2 : minimumIntegerDigits,
    useGrouping: false,
  });
};

export const formatTime = (seconds: number) => {
  const currentSecond = seconds % 60;

  return `00:${formatNumber(+currentSecond.toFixed(), 2)}`;
};
