/**
 * @copyright Matthew Bill
 */

/**
 * Class representing static strings for environment-names.
 * @class EnvironmentNames
 */
class EnvironmentNames {
  static get PRODUCTION() { return 'production'; }

  static get STAGING() { return 'staging'; }

  static get TEST() { return 'test'; }

  static get DEVELOPMENT() { return 'development'; }
}

module.exports = EnvironmentNames;
