const defaultCapacity = 20;

function Airport(capacity){
    if (capacity === undefined) {
      capacity = defaultCapacity;
    }
  this._planes = [];
  this._capacity = capacity;
};
