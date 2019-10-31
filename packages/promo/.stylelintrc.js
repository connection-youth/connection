module.exports = {
  root: true,
  extends: 'stylelint-config-airbnb',
  rules: {
    'max-nesting-depth': [3, {
      'ignoreAtRules': ['media'],
    }],
  },
};
