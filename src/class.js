/**
 * @class Class
 * @description Abstract class implement
 */

(function() {
    "use strict";
    
    var Class = function(constructor) {
        if (constructor === undefined) constructor = function() {};
        return Class.extend(constructor);
    };

    Class.extend = function() {
        if (arguments.length < 2)
           var c = arguments[0], p = this;
        else
           var c = arguments[1], p = arguments[0];
        
        if (typeof p === 'function')
        {
            var Class = function() {};
            Class.prototype = p.prototype;

            Class.prototype = new Class();
            c.prototype.constructor = c;
        }
        
        for(var k in p)
            c[k] = p[k];
        
        if (typeof(c) === 'function')
            c.superclass = p.prototype;
        
        return c;
    };
    
    Class.extends = function(c) {
        return Class.extend(this, c);
    };
    
    Class.mixin = function() {
        for(var i=0; i<arguments.length; i++)
        {
            for (var k in arguments[i])
                if (arguments[i].hasOwnProperty(k))
                    this[k] = arguments[i][k];
            arguments[i].call(this.prototype);
        }
        
        return this;
    };
    
    this.Class = Class;
    
}).call(window);
