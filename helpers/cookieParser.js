module.exports = {
  parse: (cookie) => {
    var cookieObject = {};
    var keyValueStringPairs = cookie.split(';');

    for (var i = 0; i < keyValueStringPairs.length; i++) {
      var keyValuePair = keyValueStringPairs[i].split('=');
      var key = keyValuePair[0];
      var value = keyValuePair[1];
      cookieObject[key] = value;
    }

    return cookieObject;
  }
}
