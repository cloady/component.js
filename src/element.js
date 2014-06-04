(function() {
    var Element = function(el) {
        if (typeof(el) === 'string') el = document.querySelector(el);
        this.el = el;
    };
    
    Element.prototype.getStyle = function(k) {
        return (this.el.style[k]) ? this.el.style[k] : window.getComputedStyle(this.el)[k]; 
    };

    Element.prototype.setStyle = function(k,v) {
        this.el.style[k] = v;
    };
    
    Element.prototype.addClass = function(cls) {
        if (this.el.classList)
            this.el.classList.add(cls);
        else if(!this.hasClass(cls))
            this.el.className += ' '+cls;
    };
    
    Element.prototype.hasClass = function(cls) {
        if (this.el.classList)
            return this.el.classList.contains(cls);
        else
            return (this.el.className.split(' ').indexOf(cls) === -1) ? false : true;
    };
    
    Element.prototype.show = function(as) {
        if (!as) as = 'block';
        this.el.style.display = as;
    };
    
    Element.prototype.hide = function() {
        this.el.style.display = 'none';
    };
    
    Element.prototype.isVisible = function() {
        return (this.getStyle('display') !== 'none');
    };
    
    Element.prototype.removeClass = function(cls) {
        if (this.el.classList)
            return this.el.classList.remove(cls);
        else
        {
            var classList = this.el.className.split(' ');
            if (classList.indexOf(cls) !== -1) 
                classList.splice(classList.indexOf(cls), 1);
            this.el.className = classList.join(' ');
        }
    };
    
    Element.prototype.next = function() {
        return this.el.nextElementSibling;
    };
    
    Element.prototype.prev = function() {
        return this.el.previousElementSibling;
    };
    
    Element.prototype.children = function(cls) {
        return this.el.children;
    };
    
    Element.prototype.remove = function() {
        this.el.parentNode.removeChild(this.el);
    };
    
    this.Element = Element;
    
}).call(window);
