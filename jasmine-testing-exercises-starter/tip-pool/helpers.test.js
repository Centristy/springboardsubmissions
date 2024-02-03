describe("Helpers test (with setup and tear-down)", function() {

    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    
    });

  
    it('should sum the total tip amount of payments on sumPaymentTotal()', function () {

        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(50);

    });

    it('should sum the total bill amount of payments on sumPaymentTotal()', function () {

        expect(sumPaymentTotal('billAmt')).toEqual(50);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toEqual(250);

    });
  
  
    
    afterEach(function() {

        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;

    });
  
    
  });