container.jquery.js
==========

Abstract Container class.

Examples
==========

* Create container, select item#0.

```
  $('#myList').container({ children: 'li' }).select(0);
```

* Create container with buttons, drop disabled state when active.

```
  $('#myList').container({ children: 'button', activeCls: null }).on('select', function() {
      this.disabled=false;
  }).select(0);
```

* Render data array as childrens

```
  $('#myList').container({
      data: [ { html: 'Item One' }, { html: 'Item Two' } ],
      children: 'li.item',
      append: function(data) {
        return $('<li />').addClass('item').html(data.html);
      }
  });
```

* Utils

```
  $('#myList').container({ children: 'li'  }).filter(':even').css('background', 'gray');
  
  var myList = $('#myList').container({ children: 'li'  });
  myList.select(myList.index('#foo')).css('background', 'black');
  
  myList.children().map(function(v) {
      console.log($(this).html());
  });
  
  myList.append({ html: 'Item Three' });
  
  myList.remove();
  
  myList.render([ {html: 'Item New'} ]);
  
  myList.on('select', function() { console.log(this.data); });
```
