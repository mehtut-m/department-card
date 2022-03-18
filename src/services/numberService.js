const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {}).format(Math.ceil(number));
};

export { formatNumber };
