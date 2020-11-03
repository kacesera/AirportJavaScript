describe ('Airport', () => {
  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['is_landed']);
    plane.is_landed()
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
      
      // notes for future reference:
      // plane.is_landed.and.callFake(function() {
      //   return true
      // });

  })

})
