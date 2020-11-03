class Airport {
  constructor (capacity = 10) {
    this.capacity = capacity;
    this.landed_planes = []
  };

  land(plane) {
    console.log(this.capacity);
    console.log(this.landed_planes)
    if(this._full()) { 
      throw "The bunker is at capacity!";
    }
    this.landed_planes.push(plane);
  }

  _full() {
    return this.capacity === this.landed_planes.length
  }

}