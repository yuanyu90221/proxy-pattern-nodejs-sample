import BankProxy from "../proxy/BankProxy"

test('run_bank_check', async(done)=>{
  try {
    const bankProxy = new BankProxy();
    bankProxy.deposit(1000);
    bankProxy.withdraw(800);
    expect(bankProxy.total()).toBe(200);
  } catch (error){
    console.error(error);
  } finally {
    done();
  }
})