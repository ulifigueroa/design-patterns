// Classical inheritance
// -----------------------------------------------------------------------------
// This is a simple version of the constructor pattern but it does suffer from
// some problems. One is that it makes inheritance difficult and the other is
// that functions such as toString() are redefined for each of the new objects
// created using the Car constructor. This isn't very optimal as the function
// should ideally be shared between all of the instances of the Car type.
var Car = function(model, year, miles) {
    this.model = model;
    this.year  = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + ' has done ' + this.year + ' miles ' + this.miles;
    };
};

var fiesta = new Car('Fiesta', 2011, 100);
var civic = new Car('Civic', 2008, 100);

fiesta.toString();
civic.toString();

// Prototypal inheritance
// -----------------------------------------------------------------------------
// Functions, like almost all objects in JavaScript, contain a "prototype"
// object. When we call a JavaScript constructor to create an object, all the
// properties of the constructor's prototype are then made available to the new
// object. In this fashion, multiple Car objects can be created which access the
// same prototype. We can thus extend the original example as follows:
var Car = function(model, year, miles) {
    this.model = model;
    this.year  = year;
    this.miles = miles;
};

// A single instance of toString() will now be shared between all of the Car
// objects.
Car.prototype.toString = function() {
    return this.model + ' has done ' + this.year + ' miles ' + this.miles;
};

var fiesta = new Car('Fiesta', 2011, 100);
var civic = new Car('Civic', 2008, 100);

fiesta.toString();
civic.toString();
