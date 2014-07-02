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

    Class.extend = function(c) {
        var Class = function() {};
        Class.prototype = this.prototype;
        
        Class.prototype = new Class();
        c.prototype.constructor = c;
        
        for(var k in this)
            c[k] = this[k];
        
        c.superclass = this.prototype;
        
        return c;
    };
    
    Class.extends = function(c) {
        return c.extend(this);
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
