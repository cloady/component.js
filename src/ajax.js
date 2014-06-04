/**
 * @class Ajax
 * @description Abstract ajax component
 */

(function() {
    "use strict";
    
    var Ajax = this.Observable.extend(function(options) {
        Ajax.superclass.constructor.call(this);
        
        this.xhr = new XMLHttpRequest;
    });
    
    Ajax.setHeader = function(name, value) {
        this.xhr.setRequestHeader(name, value);
    };
    
    Ajax.request = function(options) {
        var     xhr = this.xhr,
                url = options.url, 
                self = this;
        
        xhr.open(options.type, url, true);
        
        xhr.send((options.data) ? this.encode(options.data) : undefined);
        
        if (options.timeout)
            xhr.timeout = options.timeout;
        
        this.trigger('before', [xhr]);
        
        xhr.onreadystatechange = 
                function() {
                      if(xhr.readyState === 4) {
                          self.trigger('ready', [xhr]);
                          
                          if (xhr.status === 200)
                          {
                            switch(options.dataType)
                            {
                              case 'json':
                                self.trigger('done', [JSON.parse(xhr.responseText), xhr]);
                              break;
                              default:
                                  
                              break;
                            }
                          } else {
                                self.trigger('error', [xhr]);
                          }
                      }
                };
        
        return this;
    };
    
    Ajax.prototype.abort = function() {
        this.xhr.abort();
        
        return this;
    };
    
    Ajax.prototype.encode = function(data) {
        return Object.keys(data).map(function(k) { 
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        }).join('&');
    };
    
    this.Ajax = AJAX;
    
}).call(window);
