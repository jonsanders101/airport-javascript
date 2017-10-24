describe("Airport", function () {
  describe("Airport constructor", function(){
    it("should create an airport with an empty array of planes", function(){
      var airport = new Airport();
      expect(airport._planes).toEqual([]);
    });
    it("should create an airport with a given maximum capacity", function(){
      var airport = new Airport(10);
      expect(airport._capacity).toEqual(10);
    });
    it("has a default maximum capacity", function(){
      var airport = new Airport();
      expect(airport._capacity).toEqual(defaultCapacity);
    });
  });
});
