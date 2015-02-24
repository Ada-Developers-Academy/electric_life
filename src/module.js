// an example module for require

// this will be run when the module is required
console.log("test");

// let's define some code that we want to use from another
// file
var Module = {
  // a property
  foo: "foo",
  // a method
  bar: function () {
    return "bar";
  }
}

// in order to use code that we define in a module, we
// need to export it. we use the module.exports property
// to sepcify what we want to export

module.exports = Module;
