component.js
==========

Component.js framework wrapper
Easily create namespaces, classes and components.

Examples
==========

* Create common component and extend one

component('menubar', function() {
  return {
    childs: [],
    childEl: '<li></li>',
    parentEl: '#myDiv',
    el: '<ul></ul>',
    add: function(child) {
      this.childs.push(child);
    },
    render: function() {
      var childs=[];
      this.childs.map(function(v) {
        childs.push( $(this.el).text(this.childs[v]) );
      });
      $(this.parentEl).append($(this.el).html(childs.join('')));
    }
  };
});

component('menubarDiv', function() {
  return $.extend(component('menubar'), {
    childEl: '<div />',
    parentEl: '<div />'
  });
});

component('menubarDiv').render();

* Create subclass components

scene = function(id, fn) {
  return component('scene.'+id, fn);
};

scene('auth', function() {
  return {
  };
});

* Create class using component.js

cls = function(id, fn) {
  return component('class.'+id, fn);
}

cls('Animal', function() {
  return function() {
    this.canWalk = function() { return console.log('Walk'); };
  };
});

cls('Cat', function() {
  return function() {
    var parent = cls('Animal');
    this.canMeow = function() { parent.canWalk(); return console.log('Meow'); };
    return $.extend(this, parent);
  };
});

var cat = new (cls('Cat'));
cat.canMeow();
cat.canWalk();
