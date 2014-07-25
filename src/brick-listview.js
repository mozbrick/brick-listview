(function () {

  var BrickListviewElementPrototype = Object.create(HTMLElement.prototype);

  // Lifecycle methods

  BrickListviewElementPrototype.createdCallback = function () {

  };

  BrickListviewElementPrototype.attachedCallback = function () {

  };

  BrickListviewElementPrototype.detachedCallback = function () {

  };

  BrickListviewElementPrototype.attributeChangedCallback = function (attr, oldVal, newVal) {
    if (attr in attrs) {
      attrs[attr].call(this, oldVal, newVal);
    }
  };

  // Attribute handlers

  var attrs = {
    'attr': function (oldVal, newVal) {

    }
  };

  // Custom methods

  BrickListviewElementPrototype.foo = function () {

  };

  // Property handlers

  Object.defineProperties(BrickListviewElementPrototype, {
    'prop': {
      get : function () {

      },
      set : function (newVal) {

      }
    }
  });

  // Register the element

  window.BrickListviewElement = document.registerElement('brick-listview', {
    prototype: BrickListviewElementPrototype
  });

})();
