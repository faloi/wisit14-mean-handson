'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wisitTrackerApp'));

  beforeEach(function () {
    _.mixin({
      assignAndTransform: function(destination, source, transformations) {
        _.forIn(source, function(value, key) {
          if (transformations[key] != undefined)
            destination[key] = transformations[key](source[key]);
          else
            destination[key] = source[key];
        });

        return destination;
      }
    });
  });

  it('assignAndTransform', function () {
    var destination = _.assignAndTransform(
      {},
      { inicio: "14", nombre: "hola" },
      { inicio: parseInt }
    );

    expect(destination).toEqual({inicio: 14, nombre: "hola"});
  });
});
