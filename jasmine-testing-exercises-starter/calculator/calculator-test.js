
it('should calculate the monthly rate correctly', function () {
  const values ={
    amount: 2000,
    years: 5,
    rate: 5
    };
  
    expect(calculateMonthlyPayment(values)).toEqual('37.74');
  
});


it("should return a result with 2 decimal places", function() {
 const values ={
  amount: 1004,
  years: 10,
  rate: 10
  };

  expect(calculateMonthlyPayment(values)).toEqual('13.22');

});


it("should work with very large loan amounts", function() {
  const values ={
   amount: 20000,
   years: 5,
   rate: 90
   };
 
   expect(calculateMonthlyPayment(values)).toEqual('15198.28');
 
 });
