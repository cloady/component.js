(function() {
	this.Container = (function() {
		  function Container(config) {
		  	((!config) && (config = {}));
		  	this._children = (config.children) ? config.children : [];
		  	this._el = (config.el) ? config.el : null;
		  }

		  Container.prototype.indexOf = function(e) {
		  	for(var key in this._children)
		  		if (this._children[key] === e) return key;
		  };

		  Container.prototype.getAt = function(index) {
		  	return this._children[index];
		  };

		  Container.prototype.render = function(data) {
		  		for(var key in this._children) 
		  			this._children[key] = this.renderItem(data);
		  };

		  Container.prototype.select = function(e) {
		  	this.trigger('select', e);
		  };

		  Container.prototype.deselect = function(e) {
		  	this.trigger('deselect', e);
		  };

		  Container.prototype.on = function(evt, method) {
		  	this._el.addEventListener(evt, method, true);
		  };

		  Container.prototype.off = function(evt, method) {
		  	this._el.removeEventListener(evt, method);
		  };

		  Container.prototype.trigger = function() {
		  	(document.createEvent) 
		  		? this._el.dispatchEvent(event)
		  		: this._el.fireEvent("on" + event.eventType, event);
		  };

		  return Container;
	})();
}).call(window);
