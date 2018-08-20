module.exports = function encodeStr2Int(str) {
  try {
    return str.split('').map(function(c) {
      return c.charCodeAt();
    }).reduce(function (a, b) {
      return a + b;
    });
  }catch (err) {
    return 0;
  }
}
