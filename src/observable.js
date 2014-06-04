(function() {
    "use strict";
    
    var Observable = this.Class.extend(function() {
        var listeners = [];
        
        this.on = function(evt, fn) {
            if (!fn) return false;
            
            listeners.push(Array.prototype.slice.call(arguments, 0)); 
        };
        
        this.un = function(evt, fn) {
            for(var i=0;i<listeners.length;i++)
                if ((listeners[i][0] === evt) && (listeners[i][1] === fn))
                    listeners.splice(i, 1);
        };
        
        this.trigger = function(evt,params) {
            for(var i=0;i<listeners.length;i++)
                if ((listeners[i][0] === evt))
                    listeners[i][1].apply(this,params);
        };
    });
    
    this.Observable = Observable;
}).call(window);
