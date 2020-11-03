class Airport {
  constructor (capacity = 10) {
    this.capacity = capacity;
    this.landed_planes = []
  };

  land(plane) {
    if(this._full()) { 
      throw "The bunker is at capacity!";
    }else if(this._inBunker(plane)) {
      throw "This plane has already landed";
    }else {
    this.landed_planes.push(plane);
    }
  };

  _full() {
    return this.capacity === this.landed_planes.length
  }

  _inBunker(plane) {
    return this.landed_planes.includes(plane)
  }
}