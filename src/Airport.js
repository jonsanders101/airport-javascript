const defaultCapacity = 20;

function Airport(capacity){
    if (capacity < 1) {
      throw new Error("Capacity must be greater than 1");
    }
    if (capacity === undefined) {
      capacity = defaultCapacity;
    }
  this._planes = [];
  this._capacity = capacity;
}

Airport.prototype.land = function(plane){
  this._planes.push(plane);
}

function testError(){
  throw new Error("Test error")
}
