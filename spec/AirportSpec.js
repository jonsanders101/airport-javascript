describe("Airport", function () {
  describe("Airport constructor", function(){
    it("should create an airport with an empty array of planes", function(){
      var airport = new Airport();
      expect(airport._planes).toEqual([]);
    });
    it("creates an airport with a given maximum capacity", function(){
      var airport = new Airport(10);
      expect(airport._capacity).toEqual(10);
    });
    it("sets a default maximum capacity", function(){
      var airport = new Airport();
      expect(airport._capacity).toEqual(defaultCapacity);
    });
  });
  describe("land", function(){
    it("stores a plane in the airport", function(){
      var airport = new Airport();
      var plane = jasmine.createSpyObj('plane', ['method']);
      airport.land(plane);
      expect(airport._planes).toContain(plane);
    });
  });
});
