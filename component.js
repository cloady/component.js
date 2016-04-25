var component = (function() {
    var components = [];

    return function(id, component) {
        if (typeof(id) != 'string') {
            component = id;
            id = null;
        }

        if (typeof(component) == 'function')
            component = new component;

        if (id) {
            if (component)
                components[id] = component;
            return components[id];
        } else {
            return component;
        }
    };
})();
