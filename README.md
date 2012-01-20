What it is.
===========

A super simple library to make things happen when an element is scrolled into the
viewport..

example

```html
<script>
  s = new ScrollyGoRound('ul.items li', function(el,inview){
    if(inview){
      $(el).removeClass('inview');
    }else{
      $(el).addClass('inview');
    }
  });
</script>
```
