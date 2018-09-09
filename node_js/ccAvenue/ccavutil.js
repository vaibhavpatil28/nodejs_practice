var crypto = require("crypto");
exports.encrypt = function(plainText, workingKey) {
  //   var m = crypto.createHash("md5");
  //   m.update(workingKey);
  //   var key = m.digest("binary");
  //   var iv = "\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f";
  //   var cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  //   var encoded = cipher.update(plainText, "utf8", "hex");
  //   encoded += cipher.final("hex");
  //   return encoded;

  const cipher = crypto.createCipher(plainText, workingKey);

  var encrypted = "";
  cipher.on("readable", () => {
    var data = cipher.read();
    if (data) encrypted += data.toString("hex");
  });
  cipher.on("end", () => {
    console.log(encrypted);
    // return encrypted;
    // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
  });
  return encrypted;

};

exports.decrypt = function(encText, workingKey) {
  // 	var m = crypto.createHash('md5');
  // 	m.update(workingKey)
  // 	var key = m.digest('binary');
  // var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
  // var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  // 	var decoded = decipher.update(encText,'hex','utf8');
  // decoded += decipher.final('utf8');
  // 	return decoded;

  const decipher = crypto.createDecipher(encText, workingKey);

  var decrypted = "";
  decipher.on("readable", () => {
    var data = decipher.read();
    if (data) decrypted += data.toString("utf8");
  });
  decipher.on("end", () => {
    console.log(decrypted);
    // Prints: some clear text data
    // return decrypted;
  });
  return decrypted;
};
