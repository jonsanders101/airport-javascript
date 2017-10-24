const defaultCapacity = 20;

function Airport(capacity){
    if (capacity === undefined) {
      capacity = defaultCapacity;
    }
  this._planes = [];
  this._capacity = capacity;
}

Airport.prototype.land = function(plane){
  this._planes.push(plane);
}
