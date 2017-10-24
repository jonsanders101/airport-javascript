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

  if (this._isFull()) {
    throw new Error("Airport full");
  }
  this._planes.push(plane);
}

Airport.prototype._isFull = function(){
  return (this._planes.length === this._capacity)
}

function Plane(flying){
  if (flying === undefined) {
    flying = true;
  }
  this.flying = flying
}

Plane.prototype.ground = function(){
  this.flying = false;
}
