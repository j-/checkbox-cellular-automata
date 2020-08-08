(this["webpackJsonpcheckbox-cellular-automata"]=this["webpackJsonpcheckbox-cellular-automata"]||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(5),a=n(2),o=n(14),u=n(1),c=n(4),i=function(e,t){return Array(e*t).fill(!1)},m=function(e,t,n){var r=n.width,l=n.height;return(e%r+r)%r+(t%l+l)%l*r},s=function(e,t,n,r){return function(e,t){return e[t]}(e,m(t,n,r))},d=function(e,t,n,r,l){!function(e,t,n){e[t]=n}(e,m(t,n,r),l)},f=function(e,t,n,r){return function(e,t,n,r){return[s(e,t-1,n-1,r),s(e,t,n-1,r),s(e,t+1,n-1,r),s(e,t-1,n,r),s(e,t+1,n,r),s(e,t-1,n+1,r),s(e,t,n+1,r),s(e,t+1,n+1,r)]}(e,t,n,r).filter(Boolean).length},h=function(e,t,n,r,l){return s(e,t,n,r)?function(e,t,n,r,l){var a=f(e,t,n,r);return a>=l.underPopulationThreshold&&a<=l.overPopulationThreshold}(e,t,n,r,l):function(e,t,n,r,l){return f(e,t,n,r)===l.resurrectionCount}(e,t,n,r,l)},b=function(e,t,n){for(var r=t.width,l=t.height,a=i(r,l),o=0;o<l;o++)for(var u=0;u<r;u++){var c=h(e,u,o,{width:r,height:l},n);d(a,u,o,{width:r,height:l},c)}return a},E=function(e){return"RESET"===e.type},p=function(e){return"TICK"===e.type},v=function(e){return"SET_CELL"===e.type},g=function(e){return"SET_DIMENSIONS"===e.type},C=function(e,t){return{type:"SET_DIMENSIONS",payload:{width:e,height:t}}},y=function(e){return"SET_RULES"===e.type},N=function(e){return{type:"SET_RULES",payload:e}},T=function(e){return"CLEAR_BOARD"===e.type},k={rules:{underPopulationThreshold:2,overPopulationThreshold:3,resurrectionCount:3},dimensions:{width:20,height:20},board:i(20,20)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;if(E(t))return k;if(T(t))return Object(u.a)(Object(u.a)({},e),{},{board:i(e.dimensions.width,e.dimensions.height)});if(p(t)){var n=e.rules,r=e.dimensions,l=e.board;return Object(u.a)(Object(u.a)({},e),{},{board:b(l,r,n)})}if(v(t)){var a=e.board,c=e.dimensions,m=t.payload,s=m.x,f=m.y,h=m.isAlive,C=Object(o.a)(a);return d(C,s,f,c,h),Object(u.a)(Object(u.a)({},e),{},{board:C})}if(g(t)){var N=t.payload,O=N.width,S=N.height,w=i(O,S);return Object(u.a)(Object(u.a)({},e),{},{dimensions:{width:O,height:S},board:w})}return y(t)?Object(u.a)(Object(u.a)({},e),{},{rules:t.payload}):e},S=c.c,w=c.b,x=function(e){return e.dimensions.width},j=function(e){return e.dimensions.height},A=function(e){return e.rules.underPopulationThreshold},P=function(e){return e.rules.overPopulationThreshold},D=function(e){return e.rules.resurrectionCount},R=n(12),I=n(13),L=(n(27),function(e){var t=e.x,n=e.y,l=w(),a=S((function(e){return function(e,t,n){return s(e.board,t,n,e.dimensions)}(e,t,n)})),o=r.useCallback((function(e){var r=e.currentTarget.checked;l(function(e,t,n){return{type:"SET_CELL",payload:{x:e,y:t,isAlive:n}}}(t,n,r))}),[l,t,n]);return r.createElement("input",{className:"BoardCell",type:"checkbox",checked:a,onChange:o})});n(28);function _(e,t){return Array.from(Array(e),t)}var B=function(){var e=S(x),t=S(j);return r.createElement("table",{className:"Board"},r.createElement("tbody",null,_(t,(function(t,n){return r.createElement("tr",{key:n},_(e,(function(e,t){return r.createElement("td",{key:t},r.createElement(L,{x:t,y:n}))})))}))))},F=function(){},K=function(){var e=w(),t=S(x),n=S(j),l=S(A),a=S(P),o=S(D),u=r.useCallback((function(t){t.preventDefault(),e({type:"RESET"})}),[e]);return r.createElement("form",{onSubmit:F},r.createElement("fieldset",null,r.createElement("legend",null,"Dimensions"),r.createElement("div",{className:"row"},r.createElement("div",{className:"form-group col-sm"},r.createElement("label",{htmlFor:"Config-width"},"Width"),r.createElement("br",null),r.createElement("input",{id:"Config-width",className:"form-control",type:"number",min:3,max:30,value:t,onChange:function(t){return e(C(t.currentTarget.valueAsNumber,n))}})),r.createElement("div",{className:"form-group col-sm"},r.createElement("label",{htmlFor:"Config-height"},"Height"),r.createElement("br",null),r.createElement("input",{id:"Config-height",className:"form-control",type:"number",min:3,max:30,value:n,onChange:function(n){return e(C(t,n.currentTarget.valueAsNumber))}})))),r.createElement("br",null),r.createElement("fieldset",null,r.createElement("legend",null,"Rules"),r.createElement("div",{className:"row"},r.createElement("div",{className:"form-group col-sm"},r.createElement("label",{htmlFor:"Config-under"},"Under population threshold"),r.createElement("br",null),r.createElement("input",{id:"Config-under",className:"form-control",type:"number",min:0,max:8,value:l,onChange:function(t){return e(N({underPopulationThreshold:t.currentTarget.valueAsNumber,overPopulationThreshold:a,resurrectionCount:o}))}})),r.createElement("div",{className:"form-group col-sm"},r.createElement("label",{htmlFor:"Config-over"},"Over population threshold"),r.createElement("br",null),r.createElement("input",{id:"Config-over",className:"form-control",type:"number",min:0,max:8,value:a,onChange:function(t){return e(N({underPopulationThreshold:l,overPopulationThreshold:t.currentTarget.valueAsNumber,resurrectionCount:o}))}})),r.createElement("div",{className:"form-group col-sm"},r.createElement("label",{htmlFor:"Config-resurrection"},"Resurrection count"),r.createElement("br",null),r.createElement("input",{id:"Config-resurrection",className:"form-control",type:"number",min:0,max:8,value:o,onChange:function(t){return e(N({underPopulationThreshold:l,overPopulationThreshold:a,resurrectionCount:t.currentTarget.valueAsNumber}))}})))),r.createElement("br",null),r.createElement("button",{className:"btn btn-light",type:"submit",onClick:u},"Reset config"))},M=n(15),U=function(){var e=w(),t=r.useState(0),n=Object(M.a)(t,2),l=n[0],a=n[1],o=r.useCallback((function(e){a(Number(e.currentTarget.value))}),[]),u=r.useCallback((function(e){e.preventDefault(),a(1)}),[]),c=r.useCallback((function(e){e.preventDefault(),a(0)}),[]),i=r.useCallback((function(t){t.preventDefault(),e({type:"TICK"})}),[e]),m=r.useCallback((function(t){t.preventDefault(),e({type:"CLEAR_BOARD"})}),[e]);return r.useEffect((function(){if(!(l<=0)){var t=setInterval((function(){e({type:"TICK"})}),1e3/l);return function(){return clearInterval(t)}}}),[e,l]),r.createElement("div",{className:"Controls"},r.createElement("fieldset",null,r.createElement("legend",null,"Controls"),r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"Controls-speed"},"Speed"),r.createElement("br",null),r.createElement("input",{id:"Controls-speed",className:"form-control-range",type:"range",min:0,max:60,value:l,onChange:o}))),r.createElement("br",null),r.createElement("fieldset",null,r.createElement("legend",null,"Actions"),r.createElement("div",{className:"d-flex"},r.createElement("div",{className:"btn-group flex-fill",role:"group"},r.createElement("button",{className:"btn btn-light",type:"button",onClick:u},"Start"),r.createElement("button",{className:"btn btn-light",type:"button",onClick:c},"Stop"),r.createElement("button",{className:"btn btn-light",type:"button",onClick:i},"Tick"),r.createElement("button",{className:"btn btn-light",type:"button",onClick:m},"Clear")))))},J=function(){return r.createElement("div",{className:"App container-fluid"},r.createElement("h1",{className:"mt-5 mb-4"},"Checkbox cellular automata"),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md"},r.createElement("div",{className:"card card-body"},r.createElement(K,null))),r.createElement("div",{className:"col-md"},r.createElement("div",{className:"card card-body"},r.createElement(U,null)))),r.createElement("div",{className:"mt-5 mb-5 d-flex justify-content-center"},r.createElement(B,null)))},W=(n(29),Object(a.createStore)(O,Object(R.composeWithDevTools)(Object(a.applyMiddleware)(I.a))));Object(l.render)(r.createElement(c.a,{store:W},r.createElement(J,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4bc6d200.chunk.js.map