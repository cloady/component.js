Class = function() {
    
};

Class.extend = function(protoProps, staticProps) {
    var parent = this;
    var child, constructor;

    constructor = parent;

    if (typeof(protoProps)==='function') {
        constructor = protoProps;
        for(var k in protoProps)
            child[k] = protoProps[k];
        protoProps = protoProps.prototype;
    }

    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return constructor.apply(this, arguments); };
    }

    for(var k in parent)
        child[k] = parent[k];

    if (staticProps)
        for(var k in staticProps)
            child[k] = staticProps[k];

    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    if (protoProps)
        for(var k in protoProps)
            child.prototype[k] = protoProps[k];

    child.__super__ = parent.prototype;

    return child;
};
