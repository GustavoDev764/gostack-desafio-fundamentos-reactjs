const formatValue = (value: number): string => {
  if (value) {
    return Intl.NumberFormat().format(value);
  }
  return '0,0';
};

export default formatValue;
