(function(){var t=this;(function(){(function(){var t=[].slice;this.LocalTime={config:{},run:function(){return this.getController().processElements()},process:function(){var e,r,n,a;for(r=1<=arguments.length?t.call(arguments,0):[],n=0,a=r.length;n<a;n++)e=r[n],this.getController().processElement(e);return r.length},getController:function(){return null!=this.controller?this.controller:this.controller=new e.Controller}}}).call(this)}).call(t);var e=t.LocalTime;(function(){(function(){e.config.i18n={en:{date:{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbrDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbrMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yesterday:"yesterday",today:"today",tomorrow:"tomorrow",on:"on {date}",formats:{"default":"%b %e, %Y",thisYear:"%b %e"}},time:{am:"am",pm:"pm",singular:"a {time}",singularAn:"an {time}",elapsed:"{time} ago",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",formats:{"default":"%l:%M%P"}},datetime:{at:"{date} at {time}",formats:{"default":"%B %e, %Y at %l:%M%P %Z"}}}}}).call(this),function(){e.config.locale="en",e.config.defaultLocale="en"}.call(this),function(){e.config.timerInterval=6e4}.call(this),function(){var t,r,n;n=!isNaN(Date.parse("2011-01-01T12:00:00-05:00")),e.parseDate=function(t){return t=t.toString(),n||(t=r(t)),new Date(Date.parse(t))},t=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/,r=function(e){var r,n,a,i,o,s,u,c,l;if(a=e.match(t))return a[0],c=a[1],o=a[2],r=a[3],n=a[4],i=a[5],u=a[6],l=a[7],"Z"!==l&&(s=l.replace(":","")),c+"/"+o+"/"+r+" "+n+":"+i+":"+u+" GMT"+[s]}}.call(this),function(){e.elementMatchesSelector=function(){var t,e,r,n,a,i;return t=document.documentElement,e=null!=(r=null!=(n=null!=(a=null!=(i=t.matches)?i:t.matchesSelector)?a:t.webkitMatchesSelector)?n:t.mozMatchesSelector)?r:t.msMatchesSelector,function(t,r){if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE)return e.call(t,r)}}()}.call(this),function(){var t,r,n,a,i;r=e.config,a=r.i18n,e.getI18nValue=function(t,i){var o,s;return null==t&&(t=""),o=(null!=i?i:{locale:r.locale}).locale,s=n(a[o],t),null!=s?s:o!==r.defaultLocale?e.getI18nValue(t,{locale:r.defaultLocale}):void 0},e.translate=function(t,r,n){var a,i,o;null==r&&(r={}),o=e.getI18nValue(t,n);for(a in r)i=r[a],o=o.replace("{"+a+"}",i);return o},e.transform=function(e,r){if("string"!=typeof e)return e;switch(r){case"capitalize":return t(e);case"titleize":return i(e);default:return e}},n=function(t,e){var r,n,a,i,o;for(o=t,i=e.split("."),r=0,a=i.length;r<a;r++){if(n=i[r],null==o[n])return null;o=o[n]}return o},t=function(t){return""+t.charAt(0).toUpperCase()+t.slice(1)},i=function(t){return t.toLowerCase().replace(/(?:^|\s|-)\S/g,function(t){return t.toUpperCase()})}}.call(this),function(){var t,r,n,a,i;t=e.getI18nValue,i=e.translate,e.strftime=a=function(e,o){var s,u,c,l,d,h,f;return u=e.getDay(),s=e.getDate(),d=e.getMonth(),f=e.getFullYear(),c=e.getHours(),l=e.getMinutes(),h=e.getSeconds(),o.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g,function(o,m,p){switch(p){case"%":return"%";case"a":return t("date.abbrDayNames")[u];case"A":return t("date.dayNames")[u];case"b":return t("date.abbrMonthNames")[d];case"B":return t("date.monthNames")[d];case"c":return e.toString();case"d":return r(s,m);case"e":return s;case"H":return r(c,m);case"I":return r(a(e,"%l"),m);case"l":return 0===c||12===c?12:(c+12)%12;case"m":return r(d+1,m);case"M":return r(l,m);case"p":return i("time."+(c>11?"pm":"am")).toUpperCase();case"P":return i("time."+(c>11?"pm":"am"));case"S":return r(h,m);case"w":return u;case"y":return r(f%100,m);case"Y":return f;case"Z":return n(e)}})},r=function(t,e){switch(e){case"-":return t;default:return("0"+t).slice(-2)}},n=function(t){var e,r,n,a,i;return i=t.toString(),(e=null!=(r=i.match(/\(([\w\s]+)\)$/))?r[1]:void 0)?/\s/.test(e)?e.match(/\b(\w)/g).join(""):e:(e=null!=(n=i.match(/(\w{3,4})\s\d{4}$/))?n[1]:void 0)?e:(e=null!=(a=i.match(/(UTC[\+\-]\d+)/))?a[1]:void 0)?e:""}}.call(this),function(){e.CalendarDate=function(){function t(t,e,r){this.date=new Date(Date.UTC(t,e-1)),this.date.setUTCDate(r),this.year=this.date.getUTCFullYear(),this.month=this.date.getUTCMonth()+1,this.day=this.date.getUTCDate(),this.value=this.date.getTime()}return t.fromDate=function(t){return new this(t.getFullYear(),t.getMonth()+1,t.getDate())},t.today=function(){return this.fromDate(new Date)},t.prototype.equals=function(t){return(null!=t?t.value:void 0)===this.value},t.prototype.is=function(t){return this.equals(t)},t.prototype.isToday=function(){return this.is(this.constructor.today())},t.prototype.occursOnSameYearAs=function(t){return this.year===(null!=t?t.year:void 0)},t.prototype.occursThisYear=function(){return this.occursOnSameYearAs(this.constructor.today())},t.prototype.daysSince=function(t){if(t)return(this.date-t.date)/864e5},t.prototype.daysPassed=function(){return this.constructor.today().daysSince(this)},t}()}.call(this),function(){var t,r,n;r=e.strftime,n=e.translate,t=e.getI18nValue,e.RelativeTime=function(){function a(t){this.date=t,this.calendarDate=e.CalendarDate.fromDate(this.date)}return a.prototype.toString=function(){var t,e;return(e=this.toTimeElapsedString())?n("time.elapsed",{time:e}):(t=this.toWeekdayString())?(e=this.toTimeString(),n("datetime.at",{date:t,time:e})):n("date.on",{date:this.toDateString()})},a.prototype.toTimeOrDateString=function(){return this.calendarDate.isToday()?this.toTimeString():this.toDateString()},a.prototype.toTimeElapsedString=function(){var t,e,r,a,i;return r=(new Date).getTime()-this.date.getTime(),a=Math.round(r/1e3),e=Math.round(a/60),t=Math.round(e/60),r<0?null:a<10?(i=n("time.second"),n("time.singular",{time:i})):a<45?a+" "+n("time.seconds"):a<90?(i=n("time.minute"),n("time.singular",{time:i})):e<45?e+" "+n("time.minutes"):e<90?(i=n("time.hour"),n("time.singularAn",{time:i})):t<24?t+" "+n("time.hours"):""},a.prototype.toWeekdayString=function(){switch(this.calendarDate.daysPassed()){case 0:return n("date.today");case 1:return n("date.yesterday");case-1:return n("date.tomorrow");case 2:case 3:case 4:case 5:case 6:return r(this.date,"%A");default:return""}},a.prototype.toDateString=function(){var e;return e=t(this.calendarDate.occursThisYear()?"date.formats.thisYear":"date.formats.default"),r(this.date,e)},a.prototype.toTimeString=function(){return r(this.date,t("time.formats.default"))},a}()}.call(this),function(){var t,r=function(t,e){return function(){return t.apply(e,arguments)}};t=e.elementMatchesSelector,e.PageObserver=function(){function e(t,e){this.selector=t,this.callback=e,this.processInsertion=r(this.processInsertion,this),this.processMutations=r(this.processMutations,this)}return e.prototype.start=function(){if(!this.started)return this.observeWithMutationObserver()||this.observeWithMutationEvent(),this.started=!0},e.prototype.observeWithMutationObserver=function(){var t;if("undefined"!=typeof MutationObserver&&null!==MutationObserver)return t=new MutationObserver(this.processMutations),t.observe(document.documentElement,{childList:!0,subtree:!0}),!0},e.prototype.observeWithMutationEvent=function(){return addEventListener("DOMNodeInserted",this.processInsertion,!1),!0},e.prototype.findSignificantElements=function(e){var r;return r=[],(null!=e?e.nodeType:void 0)===Node.ELEMENT_NODE&&(t(e,this.selector)&&r.push(e),r.push.apply(r,e.querySelectorAll(this.selector))),r},e.prototype.processMutations=function(t){var e,r,n,a,i,o,s,u;for(e=[],r=0,a=t.length;r<a;r++)switch(o=t[r],o.type){case"childList":for(u=o.addedNodes,n=0,i=u.length;n<i;n++)s=u[n],e.push.apply(e,this.findSignificantElements(s))}return this.notify(e)},e.prototype.processInsertion=function(t){var e;return e=this.findSignificantElements(t.target),this.notify(e)},e.prototype.notify=function(t){if(null!=t?t.length:void 0)return"function"==typeof this.callback?this.callback(t):void 0},e}()}.call(this),function(){var t,r,n,a,i,o=function(t,e){return function(){return t.apply(e,arguments)}};n=e.parseDate,a=e.strftime,r=e.getI18nValue,t=e.config,i=e.transform,e.Controller=function(){function s(){this.processElements=o(this.processElements,this),this.pageObserver=new e.PageObserver(u,this.processElements)}var u,c,l;return u="time[data-local]:not([data-localized])",s.prototype.start=function(){if(!this.started)return this.processElements(),this.startTimer(),this.pageObserver.start(),this.started=!0},s.prototype.startTimer=function(){var e;if(e=t.timerInterval)return null!=this.timer?this.timer:this.timer=setInterval(this.processElements,e)},s.prototype.processElements=function(t){var e,r,n;for(null==t&&(t=document.querySelectorAll(u)),r=0,n=t.length;r<n;r++)e=t[r],this.processElement(e);return t.length},s.prototype.processElement=function(t){var e,o,s,u,d,h,f;if(o=t.getAttribute("datetime"),s=t.getAttribute("data-format"),u=t.getAttribute("data-local"),f=t.getAttribute("data-transform"),d=n(o),!isNaN(d))return t.hasAttribute("title")||(h=a(d,r("datetime.formats.default")),t.setAttribute("title",h)),e=function(){switch(u){case"time":return c(t),a(d,s);case"date":return c(t),l(d).toDateString();case"time-ago":return l(d).toString();case"time-or-date":return l(d).toTimeOrDateString();case"weekday":return l(d).toWeekdayString();case"weekday-or-date":return l(d).toWeekdayString()||l(d,{transform:i}).toDateString()}}(),e=i(e,f),t.textContent=e,t.hasAttribute("aria-label")?void 0:t.setAttribute("aria-label",e)},c=function(t){return t.setAttribute("data-localized","")},l=function(t,r){return null==r&&(r={}),new e.RelativeTime(t,r)},s}()}.call(this),function(){var t,r,n,a;a=!1,t=function(){return document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState},r=function(t){var e;return null!=(e="function"==typeof requestAnimationFrame?requestAnimationFrame(t):void 0)?e:setTimeout(t,17)},n=function(){var t;return t=e.getController(),t.start()},e.start=function(){if(!a)return a=!0,"undefined"!=typeof MutationObserver&&null!==MutationObserver||t()?n():r(n)},window.LocalTime===e&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);