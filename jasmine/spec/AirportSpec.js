describe ('Airport', () => {
  beforeEach(function () {
    airport = new Airport();
  }) 
    
  it('Returns the airport name', ()  => {
    expect(airport.constructor.name).toEqual('Gatwick');    
  })
})