const calculatePercentage = (donationTotal, donationGoal) => {
  return (donationTotal / donationGoal) * 100 > 100
    ? 100
    : (donationTotal / donationGoal) * 100;
};

export default calculatePercentage;
