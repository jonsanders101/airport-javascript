function Airport(capacity){
    if (capacity === undefined) {
      capacity = 20;
    }
  this._planes = [];
  this._capacity = capacity;
};
