(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Gbwi:function(e,t,n){"use strict";var r=n("SZB9"),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};r.J.touchMouseIgnoreWait=500;var l=0,s=0,c=!1,d=function(){function e(e){var t=this;this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var n=t.createEventFromMouse(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=t.createEventFromMouse(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0;var n=t.createEventFromTouch(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n);var r=e.target;t.shouldIgnoreMove||r.addEventListener("touchmove",t.handleTouchMove),r.addEventListener("touchend",t.handleTouchEnd),r.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=t.createEventFromTouch(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target;n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,l++,setTimeout((function(){l--}),r.J.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var n=window.pageXOffset-t.prevScrollX+t.prevPageX,r=window.pageYOffset-t.prevScrollY+t.prevPageY;t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:n,pageY:r,deltaX:n-t.origPageX,deltaY:r-t.origPageY})}},this.containerEl=e,this.emitter=new r.i,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),s++||window.addEventListener("touchmove",u,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),--s||window.removeEventListener("touchmove",u,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target;return!(!t||this.handleSelector&&!Object(r.X)(n,this.handleSelector)||(this.subjectEl=t,this.downEl=n,this.isDragging=!0,this.wasTouchScroll=!1,0))},e.prototype.cleanup=function(){c=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?Object(r.X)(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return l||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(c=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,i=e.touches,o=0,a=0;return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(o=n-this.origPageX,a=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:o,deltaY:a}},e}();function u(e){c&&e.preventDefault()}var g=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,i=this.sourceEl.getBoundingClientRect();n.style.transition="top "+t+"ms,left "+t+"ms",Object(r.z)(n,{left:i.left,top:i.top}),Object(r.Kb)(n,(function(){n.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(Object(r.Fb)(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&Object(r.z)(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-dragging"),Object(r.z)(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),h=function(e){function t(t,n){var r=e.call(this)||this;return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return o(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(r.p),p=function(e){function t(t,n){return e.call(this,new r.h(t),n)||this}return o(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return Object(r.H)(this.scrollController.el)},t}(h),v=function(e){function t(t){return e.call(this,new r.s,t)||this}return o(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(h),f="function"==typeof performance?performance.now:Date.now,E=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=f();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,i=null===this.pointerScreenY?0:r-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX;i<0?this.everMovedUp=!0:i>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(f()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++)t[e].destroy();this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*a);break;case"top":a=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var a=o[i],l=a.clientRect,s=e-l.left,c=l.right-e,d=t-l.top,u=l.bottom-t;s>=0&&c>=0&&d>=0&&u>=0&&(d<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"top",distance:d}),u<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>u)&&(r={scrollCache:a,name:"bottom",distance:u}),s<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>s)&&(r={scrollCache:a,name:"left",distance:s}),c<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"right",distance:c}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map((function(e){return e===window?new v(!1):new p(e,!1)}))},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}(),m=function(e){function t(t){var n=e.call(this,t)||this;n.delay=null,n.minDistance=0,n.touchScrollAllowed=!0,n.mirrorNeedsRevert=!1,n.isInteracting=!1,n.isDragging=!1,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,n.delayTimeoutId=null,n.onPointerDown=function(e){n.isDragging||(n.isInteracting=!0,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,Object(r.Cb)(document.body),Object(r.Bb)(document.body),e.isTouch||e.origEvent.preventDefault(),n.emitter.trigger("pointerdown",e),n.pointer.shouldIgnoreMove||(n.mirror.setIsVisible(!1),n.mirror.start(e.subjectEl,e.pageX,e.pageY),n.startDelay(e),n.minDistance||n.handleDistanceSurpassed(e)))},n.onPointerMove=function(e){if(n.isInteracting){if(n.emitter.trigger("pointermove",e),!n.isDistanceSurpassed){var t=n.minDistance,r=e.deltaX,i=e.deltaY;r*r+i*i>=t*t&&n.handleDistanceSurpassed(e)}n.isDragging&&("scroll"!==e.origEvent.type&&(n.mirror.handleMove(e.pageX,e.pageY),n.autoScroller.handleMove(e.pageX,e.pageY)),n.emitter.trigger("dragmove",e))}},n.onPointerUp=function(e){n.isInteracting&&(n.isInteracting=!1,Object(r.w)(document.body),Object(r.v)(document.body),n.emitter.trigger("pointerup",e),n.isDragging&&(n.autoScroller.stop(),n.tryStopDrag(e)),n.delayTimeoutId&&(clearTimeout(n.delayTimeoutId),n.delayTimeoutId=null))};var i=n.pointer=new d(t);return i.emitter.on("pointerdown",n.onPointerDown),i.emitter.on("pointermove",n.onPointerMove),i.emitter.on("pointerup",n.onPointerUp),n.mirror=new g,n.autoScroller=new E,n}return o(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(r.g),S=function(){function e(e){this.origRect=Object(r.I)(e),this.scrollCaches=Object(r.db)(e).map((function(e){return new p(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++)t[e].destroy()},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n,i={left:e,top:t},o=0,a=this.scrollCaches;o<a.length;o++){var l=a[o];if("HTML"!==(n=l.getEventTarget().tagName)&&"BODY"!==n&&!Object(r.zb)(i,l.clientRect))return!1}return!0},e}(),y=function(){function e(e,t){var n=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging;n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new r.i}return e.prototype.processFirstCoord=function(e){var t,n={left:e.pageX,top:e.pageY},i=n,o=e.subjectEl;o!==document&&(t=Object(r.I)(o),i=Object(r.K)(i,t));var a=this.initialHit=this.queryHitForOffset(i.left,i.top);if(a){if(this.useSubjectCenter&&t){var l=Object(r.pb)(t,a.rect);l&&(i=Object(r.gb)(l))}this.coordAdjust=Object(r.T)(i,n)}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&b(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=Object(r.tb)(this.droppableStore,(function(e){return e.component.buildPositionCaches(),new S(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var n=this.droppableStore,i=this.offsetTrackers,o=null;for(var a in n){var l=n[a].component,s=i[a];if(s.isWithinClipping(e,t)){var c=s.computeLeft(),d=s.computeTop(),u=e-c,g=t-d,h=s.origRect,p=h.right-h.left,v=h.bottom-h.top;if(u>=0&&u<p&&g>=0&&g<v){var f=l.queryHit(u,g,p,v);!f||l.props.dateProfile&&!Object(r.Eb)(l.props.dateProfile.activeRange,f.dateSpan.range)||o&&!(f.layer>o.layer)||(f.rect.left+=c,f.rect.right+=c,f.rect.top+=d,f.rect.bottom+=d,o=f)}}}return o},e}();function b(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&Object(r.qb)(e.dateSpan,t.dateSpan)}var D=function(e){function t(t){var n=e.call(this,t)||this;n.handlePointerDown=function(e){var t=n.dragging;t.setIgnoreMove(!n.component.isValidDateDownEl(t.pointer.downEl))},n.handleDragEnd=function(e){var t=n.component.context,r=t.calendar,i=t.view;if(!n.dragging.pointer.wasTouchScroll){var o=n.hitDragging,a=o.initialHit,l=o.finalHit;a&&l&&b(a,l)&&r.triggerDateClick(a.dateSpan,a.dayEl,i,e.origEvent)}},n.dragging=new m(t.component.el),n.dragging.autoScroller.isEnabled=!1;var i=n.hitDragging=new y(n.dragging,Object(r.nb)(t));return i.emitter.on("pointerdown",n.handlePointerDown),i.emitter.on("dragend",n.handleDragEnd),n}return o(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(r.m),w=function(e){function t(t){var n=e.call(this,t)||this;n.dragSelection=null,n.handlePointerDown=function(e){var t=n.component,r=n.dragging,i=t.context.options.selectable&&t.isValidDateDownEl(e.origEvent.target);r.setIgnoreMove(!i),r.delay=e.isTouch?function(e){var t=e.context.options,n=t.selectLongPressDelay;return null==n&&(n=t.longPressDelay),n}(t):null},n.handleDragStart=function(e){n.component.context.calendar.unselect(e)},n.handleHitUpdate=function(e,t){var i=n.component.context.calendar,o=null,l=!1;e&&((o=function(e,t,n){var i=e.dateSpan,o=t.dateSpan,l=[i.range.start,i.range.end,o.range.start,o.range.end];l.sort(r.B);for(var s={},c=0,d=n;c<d.length;c++){var u=(0,d[c])(e,t);if(!1===u)return null;u&&a(s,u)}return s.range={start:l[0],end:l[3]},s.allDay=i.allDay,s}(n.hitDragging.initialHit,e,i.pluginSystem.hooks.dateSelectionTransformers))&&n.component.isDateSelectionValid(o)||(l=!0,o=null)),o?i.dispatch({type:"SELECT_DATES",selection:o}):t||i.dispatch({type:"UNSELECT_DATES"}),l?Object(r.V)():Object(r.Z)(),t||(n.dragSelection=o)},n.handlePointerUp=function(e){n.dragSelection&&(n.component.context.calendar.triggerDateSelect(n.dragSelection,e),n.dragSelection=null)};var i=t.component,o=i.context.options,l=n.dragging=new m(i.el);l.touchScrollAllowed=!1,l.minDistance=o.selectMinDistance||0,l.autoScroller.isEnabled=o.dragScroll;var s=n.hitDragging=new y(n.dragging,Object(r.nb)(t));return s.emitter.on("pointerdown",n.handlePointerDown),s.emitter.on("dragstart",n.handleDragStart),s.emitter.on("hitupdate",n.handleHitUpdate),s.emitter.on("pointerup",n.handlePointerUp),n}return o(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(r.m),T=function(e){function t(n){var i=e.call(this,n)||this;i.subjectSeg=null,i.isDragging=!1,i.eventRange=null,i.relevantEvents=null,i.receivingCalendar=null,i.validMutation=null,i.mutatedRelevantEvents=null,i.handlePointerDown=function(e){var t=e.origEvent.target,n=i.component,o=i.dragging,a=o.mirror,l=n.context.options,s=n.context.calendar,c=i.subjectSeg=Object(r.fb)(e.subjectEl),d=(i.eventRange=c.eventRange).instance.instanceId;i.relevantEvents=Object(r.hb)(s.state.eventStore,d),o.minDistance=e.isTouch?0:l.eventDragMinDistance,o.delay=e.isTouch&&d!==n.props.eventSelection?function(e){var t=e.context.options,n=t.eventLongPressDelay;return null==n&&(n=t.longPressDelay),n}(n):null,a.parentNode=s.el,a.revertDuration=l.dragRevertDuration;var u=n.isValidSegDownEl(t)&&!Object(r.X)(t,".fc-resizer");o.setIgnoreMove(!u),i.isDragging=u&&e.subjectEl.classList.contains("fc-draggable")},i.handleDragStart=function(e){var t=i.component.context,n=t.calendar,o=i.eventRange,a=o.instance.instanceId;e.isTouch?a!==i.component.props.eventSelection&&n.dispatch({type:"SELECT_EVENT",eventInstanceId:a}):n.dispatch({type:"UNSELECT_EVENT"}),i.isDragging&&(n.unselect(e),n.publiclyTrigger("eventDragStart",[{el:i.subjectSeg.el,event:new r.j(n,o.def,o.instance),jsEvent:e.origEvent,view:t.view}]))},i.handleHitUpdate=function(e,t){if(i.isDragging){var n=i.relevantEvents,o=i.hitDragging.initialHit,a=i.component.context.calendar,l=null,s=null,c=null,d=!1,u={affectedEvents:n,mutatedEvents:Object(r.N)(),isEvent:!0,origSeg:i.subjectSeg};if(e){var g=e.component,h=g.context.options;a===(l=g.context.calendar)||h.editable&&h.droppable?(s=function(e,t,n){var i=e.dateSpan,o=t.dateSpan,a=i.range.start,l=o.range.start,s={};i.allDay!==o.allDay&&(s.allDay=o.allDay,s.hasEnd=t.component.context.options.allDayMaintainDuration,o.allDay&&(a=Object(r.Gb)(a)));var c=Object(r.S)(a,l,e.component.context.dateEnv,e.component===t.component?e.component.largeUnit:null);c.milliseconds&&(s.allDay=!1);for(var d={datesDelta:c,standardProps:s},u=0,g=n;u<g.length;u++)(0,g[u])(d,e,t);return d}(o,e,l.pluginSystem.hooks.eventDragMutationMassagers))&&(c=Object(r.y)(n,l.eventUiBases,s,l),u.mutatedEvents=c,g.isInteractionValid(u)||(d=!0,s=null,c=null,u.mutatedEvents=Object(r.N)())):l=null}i.displayDrag(l,u),d?Object(r.V)():Object(r.Z)(),t||(a===l&&b(o,e)&&(s=null),i.dragging.setMirrorNeedsRevert(!s),i.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),i.receivingCalendar=l,i.validMutation=s,i.mutatedRelevantEvents=c)}},i.handlePointerUp=function(){i.isDragging||i.cleanup()},i.handleDragEnd=function(e){if(i.isDragging){var t=i.component.context,n=t.calendar,o=t.view,l=i.receivingCalendar,s=i.validMutation,c=i.eventRange.def,d=i.eventRange.instance,u=new r.j(n,c,d),g=i.relevantEvents,h=i.mutatedRelevantEvents,p=i.hitDragging.finalHit;if(i.clearDrag(),n.publiclyTrigger("eventDragStop",[{el:i.subjectSeg.el,event:u,jsEvent:e.origEvent,view:o}]),s){if(l===n){n.dispatch({type:"MERGE_EVENTS",eventStore:h});for(var v={},f=0,E=n.pluginSystem.hooks.eventDropTransformers;f<E.length;f++)a(v,(0,E[f])(s,n));var m=a({},v,{el:e.subjectEl,delta:s.datesDelta,oldEvent:u,event:new r.j(n,h.defs[c.defId],d?h.instances[d.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:g})},jsEvent:e.origEvent,view:o});n.publiclyTrigger("eventDrop",[m])}else if(l){n.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:u,view:o}]),n.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:i.mutatedRelevantEvents.instances}),l.dispatch({type:"MERGE_EVENTS",eventStore:i.mutatedRelevantEvents}),e.isTouch&&l.dispatch({type:"SELECT_EVENT",eventInstanceId:d.instanceId});var S=a({},l.buildDatePointApi(p.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:p.component});l.publiclyTrigger("drop",[S]),l.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new r.j(l,h.defs[c.defId],h.instances[d.instanceId]),view:p.component}])}}else n.publiclyTrigger("_noEventDrop")}i.cleanup()};var o=i.component,l=o.context.options,s=i.dragging=new m(o.el);s.pointer.selector=t.SELECTOR,s.touchScrollAllowed=!1,s.autoScroller.isEnabled=l.dragScroll;var c=i.hitDragging=new y(i.dragging,r.mb);return c.useSubjectCenter=n.useEventCenter,c.emitter.on("pointerdown",i.handlePointerDown),c.emitter.on("dragstart",i.handleDragStart),c.emitter.on("hitupdate",i.handleHitUpdate),c.emitter.on("pointerup",i.handlePointerUp),c.emitter.on("dragend",i.handleDragEnd),i}return o(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch(n===this.component.context.calendar?{type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:Object(r.N)(),isEvent:!0,origSeg:t.origSeg}}:{type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.context.calendar,t=this.receivingCalendar;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-draggable, .fc-resizable",t}(r.m),M=function(e){function t(t){var n=e.call(this,t)||this;n.draggingSeg=null,n.eventRange=null,n.relevantEvents=null,n.validMutation=null,n.mutatedRelevantEvents=null,n.handlePointerDown=function(e){var t=n.component,r=n.querySeg(e),i=n.eventRange=r.eventRange;n.dragging.minDistance=t.context.options.eventDragMinDistance,n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&n.component.props.eventSelection!==i.instance.instanceId)},n.handleDragStart=function(e){var t=n.component.context,i=t.calendar,o=t.view,a=n.eventRange;n.relevantEvents=Object(r.hb)(i.state.eventStore,n.eventRange.instance.instanceId),n.draggingSeg=n.querySeg(e),i.unselect(),i.publiclyTrigger("eventResizeStart",[{el:n.draggingSeg.el,event:new r.j(i,a.def,a.instance),jsEvent:e.origEvent,view:o}])},n.handleHitUpdate=function(e,t,i){var o=n.component.context.calendar,l=n.relevantEvents,s=n.hitDragging.initialHit,c=n.eventRange.instance,d=null,u=null,g=!1,h={affectedEvents:l,mutatedEvents:Object(r.N)(),isEvent:!0,origSeg:n.draggingSeg};e&&(d=function(e,t,n,i,o){for(var l=e.component.context.dateEnv,s=e.dateSpan.range.start,c=t.dateSpan.range.start,d=Object(r.S)(s,c,l,e.component.largeUnit),u={},g=0,h=o;g<h.length;g++){var p=(0,h[g])(e,t);if(!1===p)return null;p&&a(u,p)}if(n){if(l.add(i.start,d)<i.end)return u.startDelta=d,u}else if(l.add(i.end,d)>i.start)return u.endDelta=d,u;return null}(s,e,i.subjectEl.classList.contains("fc-start-resizer"),c.range,o.pluginSystem.hooks.eventResizeJoinTransforms)),d&&(u=Object(r.y)(l,o.eventUiBases,d,o),h.mutatedEvents=u,n.component.isInteractionValid(h)||(g=!0,d=null,u=null,h.mutatedEvents=null)),o.dispatch(u?{type:"SET_EVENT_RESIZE",state:h}:{type:"UNSET_EVENT_RESIZE"}),g?Object(r.V)():Object(r.Z)(),t||(d&&b(s,e)&&(d=null),n.validMutation=d,n.mutatedRelevantEvents=u)},n.handleDragEnd=function(e){var t=n.component.context,i=t.calendar,o=t.view,a=n.eventRange.def,l=n.eventRange.instance,s=new r.j(i,a,l),c=n.relevantEvents,d=n.mutatedRelevantEvents;i.publiclyTrigger("eventResizeStop",[{el:n.draggingSeg.el,event:s,jsEvent:e.origEvent,view:o}]),n.validMutation?(i.dispatch({type:"MERGE_EVENTS",eventStore:d}),i.publiclyTrigger("eventResize",[{el:n.draggingSeg.el,startDelta:n.validMutation.startDelta||Object(r.L)(0),endDelta:n.validMutation.endDelta||Object(r.L)(0),prevEvent:s,event:new r.j(i,d.defs[a.defId],l?d.instances[l.instanceId]:null),revert:function(){i.dispatch({type:"MERGE_EVENTS",eventStore:c})},jsEvent:e.origEvent,view:o}])):i.publiclyTrigger("_noEventResize"),n.draggingSeg=null,n.relevantEvents=null,n.validMutation=null};var i=t.component,o=n.dragging=new m(i.el);o.pointer.selector=".fc-resizer",o.touchScrollAllowed=!1,o.autoScroller.isEnabled=i.context.options.dragScroll;var l=n.hitDragging=new y(n.dragging,Object(r.nb)(t));return l.emitter.on("pointerdown",n.handlePointerDown),l.emitter.on("dragstart",n.handleDragStart),l.emitter.on("hitupdate",n.handleHitUpdate),l.emitter.on("dragend",n.handleDragEnd),n}return o(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySeg=function(e){return Object(r.fb)(Object(r.X)(e.subjectEl,this.component.fgSegSelector))},t}(r.m),j=function(){function e(e){var t=this;this.isRecentPointerDateSelect=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerUp=function(e){var n=t.calendar,i=t.documentPointer,o=n.state;if(!i.wasTouchScroll){if(o.dateSelection&&!t.isRecentPointerDateSelect){var a=n.viewOpt("unselectAuto"),l=n.viewOpt("unselectCancel");!a||a&&Object(r.X)(i.downEl,l)||n.unselect(e)}o.eventSelection&&!Object(r.X)(i.downEl,T.SELECTOR)&&n.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1},this.calendar=e;var n=this.documentPointer=new d(document);n.shouldIgnoreMove=!0,n.shouldWatchScroll=!1,n.emitter.on("pointerup",this.onDocumentPointerUp),e.on("select",this.onSelect)}return e.prototype.destroy=function(){this.calendar.off("select",this.onSelect),this.documentPointer.destroy()},e}();!function(){function e(e,t){var n=this;this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){n.dragMeta=n.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,i){var o=n.hitDragging.dragging,l=null,s=null,c=!1,d={affectedEvents:Object(r.N)(),mutatedEvents:Object(r.N)(),isEvent:n.dragMeta.create,origSeg:null};e&&n.canDropElOnCalendar(i.subjectEl,l=e.component.context.calendar)&&(s=function(e,t,n){for(var i=a({},t.leftoverProps),o=0,l=n.pluginSystem.hooks.externalDefTransforms;o<l.length;o++)a(i,(0,l[o])(e,t));var s=Object(r.yb)(i,t.sourceId,e.allDay,n.opt("forceEventDuration")||Boolean(t.duration),n),c=e.range.start;e.allDay&&t.startTime&&(c=n.dateEnv.add(c,t.startTime));var d=t.duration?n.dateEnv.add(c,t.duration):n.getDefaultEventEnd(e.allDay,c);return{def:s,instance:Object(r.O)(s.defId,{start:c,end:d})}}(e.dateSpan,n.dragMeta,l),d.mutatedEvents=Object(r.ab)(s),(c=!Object(r.rb)(d,l))&&(d.mutatedEvents=Object(r.N)(),s=null)),n.displayDrag(l,d),o.setMirrorIsVisible(t||!s||!document.querySelector(".fc-mirror")),c?Object(r.V)():Object(r.Z)(),t||(o.setMirrorNeedsRevert(!s),n.receivingCalendar=l,n.droppableEvent=s)},this.handleDragEnd=function(e){var t=n.receivingCalendar,i=n.droppableEvent;if(n.clearDrag(),t&&i){var o=n.hitDragging.finalHit,l=o.component.context.view,s=n.dragMeta,c=a({},t.buildDatePointApi(o.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:l});t.publiclyTrigger("drop",[c]),s.create&&(t.dispatch({type:"MERGE_EVENTS",eventStore:Object(r.ab)(i)}),e.isTouch&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:i.instance.instanceId}),t.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new r.j(t,i.def,i.instance),view:l}]))}n.receivingCalendar=null,n.droppableEvent=null};var i=this.hitDragging=new y(e,r.mb);i.requireInitial=!1,i.emitter.on("dragstart",this.handleDragStart),i.emitter.on("hitupdate",this.handleHitUpdate),i.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?Object(r.xb)(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?Object(r.xb)(this.suppliedDragMeta(e)):(n=(t=function(e,t){var n=r.J.dataAttrPrefix;return e.getAttribute("data-"+(n?n+"-":"")+"event")||""}(e))?JSON.parse(t):{create:!1},Object(r.xb)(n));var t,n},e.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,t){var n=t.opt("dropAccept");return"function"==typeof n?n(e):"string"!=typeof n||!n||Boolean(Object(r.Y)(e,n))}}(),r.J.dataAttrPrefix="",function(e){function t(t){var n=e.call(this,t)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var r=n.pointer=new d(t);return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}o(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}}}(r.g);var O=Object(r.Q)({componentInteractions:[D,w,T,M],calendarInteractions:[j],elementDraggingImpl:m});t.a=O}}]);