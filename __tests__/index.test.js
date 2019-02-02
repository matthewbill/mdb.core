describe('exports', () => {
  test('exports work correctly', () => {

      const { EnvironmentNames } = require('../index');
      expect(EnvironmentNames).toBeDefined();
      
  });
});
