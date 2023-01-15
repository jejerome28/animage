const config = {
    transform: {
      '\\.[jt]sx?$': 'babel-jest'
    },
    transformIgnorePatterns: ["node_modules/(?!axios)"]

};
  
module.exports = config;