const reverseString = (str) => {
  return str.split("").reverse().join("");
};

module.exports = { reverseString };

// test if it works
console.log((reverseString("hello world") === "dlrow olleh").toString());
