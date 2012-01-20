/* Author: 

*/

ScrollyGoRound = function(selector,callback){
  this.callback = callback;
  this.els = $(selector);
  this.defineViewport();
  this.setObservers();
};

ScrollyGoRound.prototype = {
  getOffset: function(el){
    return $(el).offset().top;
  },
  defineViewport: function(){
    wn  = $(window);
    this.wX = wn.width();
    this.wY = wn.height();
    this.sTop = wn.scrollTop();
    this.sLeft = wn.scrollLeft();
    this.v = this.wY+this.sTop
    this.positionElements();
  },
  setObservers: function(){
    $(document).resize(function(){this.defineViewport()}.bind(this));
    $(document).scroll(function(){this.defineViewport()}.bind(this));
  },
  positionElements: function(){
    $(this.els).each(function(i,el){
      inview = (this.getOffset(el) >= (this.v-($(el).height()/2)) || this.getOffset(el) <= this.sTop)
      this.callback(el,inview);
    }.bind(this));
  }
};





















