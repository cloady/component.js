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
        var i = function() {};
        i.prototype = this.prototype;

        c.prototype = new i();
        c.prototype.constructor = c;
            
        c.superclass = this.prototype;
        c.extend = this.extend;
        
        return c;
    };
    
    this.Class = Class;
    
}).call(window);
