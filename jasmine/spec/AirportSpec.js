describe ('Airport', () => {
  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['isLanded', 'takeOff']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    plane.isLanded();
    plane.takeOff();
    weather.isStormy();
  }); 

    
  it('has a default capacity of 10', ()  => {
    expect(airport.capacity).toEqual(10);    
  })

  it('can change capacity', () => {
    new_port = new Airport(1500);
    expect(new_port.capacity).toEqual(1500);
  })

  describe('#land', () => {
    it('can land a plane in the airport', () => {
      airport.land(plane)
      expect(airport.landed_planes).toContain(plane)
    })

    it('does not allow planes to land if at capacity', () => {
      new_port = new Airport(0);
      expect( function() {new_port.land(plane);} ).toThrow("The bunker is at capacity!");
    })

    it('does not allow planes to land if already landed', () => {
      airport.land(plane);
      expect( function() {airport.land(plane);} ).toThrow("This plane has already landed");
    })

    it('does not allow planes to land if the weather is stormy', () => {
      weather.isStormy.and.returnValue(true);
      mockPort = new Airport('', weather);
      expect( function() {mockPort.land(plane);} ).toThrow("It's too stormy to land!");
    })
  
  describe('#takeOff', () => {
    it("does not allow planes to take off if the weather is stormy", () =>{
      weather.isStormy.and.returnValues(false, true);
      mockPort = new Airport('', weather);
      mockPort.land(plane);

      expect( function() {mockPort.takeOff(plane);} ).toThrow("It's too stormy to fly!");
    })
  })
    // describe "#take_off" do
    // it "does not allow planes to take off if the weather is stormy" do
    //   allow(@home_ap.weather).to receive(:stormy?).and_return(true)
    //   expect { @home_ap.take_off(@plane) }.to raise_error 'It is too stormy to fly'
    // end
      
      // notes for future reference:
      // plane.is_landed.and.callFake(function() {
      //   return true
      // });

  })

})
