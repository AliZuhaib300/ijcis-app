import numeral from 'numeral';

export const priceCalculator = amount => {
  const currencyType = '$';
  let fixedPrice;
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  if (amount) {
    fixedPrice = Number(amount).toLocaleString('en', options);
  } else {
    fixedPrice = 0;
  }
  return `${currencyType}${fixedPrice}`;
};

export const priceCalculatorWithoutSign = amount => {
  let fixedPrice;
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  if (amount) {
    fixedPrice = Number(amount).toLocaleString('en', options);
  } else {
    fixedPrice = 0;
  }
  return fixedPrice;
};

export const formatPrice = amount => {
  const price = amount || 0;
  return numeral(price).format('($0.00a)');
};
