const { icons } = require("../const");

describe('icons', () => {
  it('should contain the correct number of items', () => {
    expect(icons).toHaveLength(8);
  });

  it('should have the correct structure for each item', () => {
    icons.forEach((item) => {
      expect(item).toHaveProperty('icon');
      expect(item).toHaveProperty('label');
    });
  });
});