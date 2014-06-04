/**
 * @class Ajax
 * @description Abstract ajax component
 */

(function() {
    "use strict";
    
    var AJAX = this.Observable.extend(function(options) {
        AJAX.superclass.constructor.call(this);
        
        this.xhr = null;
        
        var     url = options.url, 
                self = this;
        
        var xhr = new XMLHttpRequest;
        
        xhr.open(options.type, url, true);
        
        xhr.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
        
        xhr.send((options.data) ? this.encode(options.data) : undefined);
        
        if (options.timeout)
            xhr.timeout = options.timeout;
        
        this.xhr = xhr;
        
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
    });
    
    AJAX.prototype.encode = function(data) {
        return Object.keys(data).map(function(k) { 
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        }).join('&');
    };
    
    this.Ajax = AJAX;
    
}).call(window);
