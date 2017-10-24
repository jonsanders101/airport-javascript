describe("Airport", function () {
  describe("Airport constructor", function(){
    it("should create an airport with an empty array of planes", function(){
      var airport = new Airport();
      expect(airport._planes).toEqual([]);
    });
  });
});
