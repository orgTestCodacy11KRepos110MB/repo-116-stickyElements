var stickyElements=function(){"use strict";var s={};s.classCallCheck=function(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")},s.createClass=function(){function s(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var t=function(){function t(e){var i=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];s.classCallCheck(this,t),this.el=e,this.setOpts(n),e._stickyEvents&&(e.removeEventListener("mouseenter",e._stickyEvents.mouseEnter,!1),e.removeEventListener("mouseleave",e._stickyEvents.mouseLeave,!1),e.removeEventListener("mousemove",e._stickyEvents.mouseMove,!1),e._stickyEvents=void 0),e._stickyEvents={mouseEnter:function(){return i.onMouseEnter()},mouseLeave:function(){return i.onMouseLeave()},mouseMove:function(s){return i.onMouseMove(s)}},e.addEventListener("mouseenter",e._stickyEvents.mouseEnter,!1),e.addEventListener("mouseleave",e._stickyEvents.mouseLeave,!1),e.addEventListener("mousemove",e._stickyEvents.mouseMove,!1)}return s.createClass(t,[{key:"setOpts",value:function(s){this.positions={},this.isGripped=!1,this.stickiness={},this.grip={x:4,y:4},this.duration=s.duration||450,this.setStickiness(s)}},{key:"setStickiness",value:function(s){var t={1:10,2:6.6,3:4.5,4:3.2,5:2.4,6:1.9,7:1.6,8:1.4,9:1.3,10:1.2,0:0},e={stickiness:{x:3,y:3}};(s.stickiness||0===s.stickiness)&&("number"==typeof s.stickiness&&(e.stickiness={x:s.stickiness,y:s.stickiness}),(s.stickiness.x||0===s.stickiness.x)&&(e.stickiness.x=s.stickiness.x),(s.stickiness.y||0===s.stickiness.y)&&(e.stickiness.y=s.stickiness.y)),this.stickiness.x=t[Math.min(10,e.stickiness.x)],this.stickiness.y=t[Math.min(10,e.stickiness.y)]}},{key:"getPositions",value:function(s,t){var e=0!==this.stickiness.x?s/this.stickiness.x:0,i=0!==this.stickiness.y?t/this.stickiness.y:0;return{posx:e,posy:i}}},{key:"onMouseEnter",value:function(){var s=this.el,t=s.offsetWidth,e=s.offsetHeight,i=s.offsetLeft,n=s.offsetTop,o={width:t,height:e,centerx:i+t/2,centery:n+e/2-document.documentElement.scrollTop};this.positions=o}},{key:"onMouseLeave",value:function(){if(this.lastGripped){var s=(new Date).getTime();if(s-this.lastGripped<30)return}var t=this.el;animate.stop(t);var e=this.getPositions(this.positions.deltax,this.positions.deltay),i=e.posx,n=e.posy;this.isGripped&&(this.lastGripped=(new Date).getTime(),animate({el:t,translateX:[i,0],translateY:[n,0],duration:this.duration})),this.isGripped=!1}},{key:"onMouseMove",value:function(s){var t=this.el;animate.stop(t),this.positions.deltax=-(this.positions.centerx-s.clientX),this.positions.deltay=-(this.positions.centery-s.clientY);var e={x:Math.abs(this.positions.deltax)<this.positions.width/this.grip.x,y:Math.abs(this.positions.deltay)<this.positions.height/this.grip.y};if(e.x&&e.y&&(this.isGripped=!0),this.isGripped){var i=this.getPositions(this.positions.deltax,this.positions.deltay),n=i.posx,o=i.posy;t.style.transform="translate3d("+n+"px, "+o+"px, 0)"}}}]),t}(),e=function(){return function(s,e){for(var i=[],n=[].slice.call(document.querySelectorAll(s)),o=0;o<n.length;o++)i.push(new t(n[o],e));return i}}();return e}();