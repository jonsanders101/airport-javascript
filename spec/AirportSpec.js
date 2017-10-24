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
      console.log(airport['_capacity']);
      expect(airport._capacity).toEqual(defaultCapacity);
    });
    it("raises an error if capacity is less than 1", function(){
      expect(function(){ Airport(0) }).toThrowError("Capacity must be greater than 1");
    });
  });
  describe("land", function(){
    it("stores a plane in the airport", function(){
      var airport = new Airport();
      var plane = jasmine.createSpyObj('plane', ['method']);
      airport.land(plane);
      expect(airport._planes).toContain(plane);
    });
    it("raises an error if airport is full of planes", function(){
      var airport = new Airport(1);
      var plane = jasmine.createSpyObj('plane', ['method']);
      airport.land(plane);
      expect(function(){ airport.land(plane) }).toThrowError("Airport full")
    });
  });
  describe("fly", function(){
    it("releases a plane from its stored planes", function(){
      var airport = new Airport(1);
      var plane = jasmine.createSpyObj('plane', ['method']);
      airport.takeOff(plane)
      expect(airport).not.toContain(plane)
    })
  })
});
describe("Plane", function(){
  describe("Airport constructor", function(){
    it("creates a plane that is flying by default", function(){
      var plane = new Plane();
      expect(plane.flying).toEqual(true);
    })
    it("creates a plane that is not flying if passed false", function(){
      var plane = new Plane(false);
      expect(plane.flying).toEqual(false);
    })
  })
  describe("ground", function(){
    it("sets 'flying' to false", function(){
      var plane = new Plane();
      plane.ground()
      expect(plane.flying).toEqual(false);
    })
  })
})
