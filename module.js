// Object literals
// -----------------------------------------------------------------------------
// Object literals don't require instantiation using the `new` operator but
// shouldn't be used at the start of a statement as the opening `{`
// may be interpreted as the beginning of a block. Outside of an object,
// new members may be added to it using assignment as follows
// myModule.property = "someValue";
var myModule = {

  myProperty: "someValue",

  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },

  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },

  // override the current configuration
  updateMyConfig: function( newConfig ) {

    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();

// Module pattern
// -----------------------------------------------------------------------------
// Here, other parts of the code are unable to directly read the value of our
// incrementCounter() or resetCounter(). The counter variable is actually fully
// shielded from our global scope so it acts just like a private variable would
// - its existence is limited to within the module's closure so that the only
// code able to access its scope are our two functions. Our methods are
// effectively namespaced so in the test section of our code, we need to prefix
// any calls with the name of the module

var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
