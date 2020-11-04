class Airport {
  constructor (capacity = 10, weather = 'weather') {
    this.capacity = capacity;
    this.landed_planes = []
    this.weather = weather
  };

  land(plane) {
    debugger
    if(this._full()) { 
      throw "The bunker is at capacity!";
    }else if(this._inBunker(plane)) {
      throw "This plane has already landed";
    }else if(this.weather.isStormy()) {
      throw "It's too stormy to land!";
    }else {
    this.landed_planes.push(plane);
    }
  };

  takeOff(plane) {
    if(this.weather.isStormy()) {
      throw "It's too stormy to fly!";
    }
  };

  _full() {
    return this.capacity === this.landed_planes.length
  }

  _inBunker(plane) {
    return this.landed_planes.includes(plane)
  }
}