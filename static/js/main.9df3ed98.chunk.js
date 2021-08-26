(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),i=n.n(a),s=n(18),o=n(17),u=n(8),j=n.n(u),l=n(15),p=n(16),b=(n(82),n(130)),f=n(122),d=n(123),O=n(124),m=n(125),h=n(65),x=n.n(h),v=n(66),g=n.n(v),k=n(3),w=function(e){var t=e.setFilter,n=function(e){return function(){return t((function(t){return Object(s.a)(Object(s.a)({},t),{},{filterType:e})}))}},r=function(e){return function(){return t((function(t){return Object(s.a)(Object(s.a)({},t),{},{sortDirection:e})}))}};return Object(k.jsx)(b.a,{mt:2,children:Object(k.jsxs)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(k.jsxs)(b.a,{children:[Object(k.jsx)(d.a,{onClick:n(Q),children:"All"}),Object(k.jsx)(d.a,{onClick:n(X),children:"Done"}),Object(k.jsx)(d.a,{onClick:n(Y),children:"Undone"})]}),Object(k.jsxs)(b.a,{children:[Object(k.jsx)(O.a,{display:"inline",children:"Sort by Date"}),Object(k.jsx)(m.a,{onClick:r(!0),children:Object(k.jsx)(x.a,{})}),Object(k.jsx)(m.a,{onClick:r(!1),children:Object(k.jsx)(g.a,{})})]})]})})},y=n(126),D=n(132),I=n(67),E=n(68),C=n(34),T=n.n(C),A=function(e){return new Date(e).getTime()},S=function(e){return["https://todo-api-learning.herokuapp.com/v1",e].join("")},L=function(){function e(){Object(I.a)(this,e)}return Object(E.a)(e,null,[{key:"getAll",value:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get(S("/tasks/2"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"creat",value:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(S("/task/2"),{name:t,done:!1});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(l.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/task/2/".concat(t),e.next=3,T.a.patch(S(r),n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/task/2/".concat(t),e.next=3,T.a.delete(S(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),N=Object(y.a)((function(e){return{inputForm:{padding:[e.spacing(1),e.spacing(1)].join(" "),marginTop:e.spacing(2),width:"100%"}}})),F=function(e){var t=e.addItem,n=e.setError,c=N(),a=Object(r.useState)(""),i=Object(p.a)(a,2),s=i[0],u=i[1],b=function(){var e=Object(l.a)(j.a.mark((function e(r){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"===r.code&&s.trim()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,L.creat(s);case 5:c=e.sent,t((function(e){return[].concat(Object(o.a)(e),[c])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n(e.t0.message);case 12:u("");case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(D.a,{className:c.inputForm,type:"text",placeholder:"i want to ...",value:s,onChange:function(e){u(e.target.value)},onKeyDown:b})},M=n(127),P=n(69),z=n.n(P),B=n(70),J=n.n(B),K=Object(y.a)((function(e){return{listItem:{borderRadius:"5px",border:"1px solid"+e.palette.grey[400],marginTop:e.spacing(1)},completed:{background:"#eaffe9",transition:"all .4s",borderColor:e.palette.success.main},hiddenInput:{width:"100px"}}})),R=function(e){var t=e.toDoListItem,n=e.setToDoListItems,c=e.setError,a=K(),i=Object(r.useState)(!0),s=Object(p.a)(i,2),u=s[0],d=s[1],h=function(){var e=Object(l.a)(j.a.mark((function e(r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.stopPropagation(),e.prev=1,e.next=4,L.delete(t.uuid);case 4:e.sent,n((function(e){return Object(o.a)(e).filter((function(e){return e.uuid!==t.uuid}))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(j.a.mark((function e(r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.edit(t.uuid,r);case 3:a=e.sent,n((function(e){return Object(o.a)(e).map((function(e){return e.uuid===t.uuid?a:e}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(M.a,{className:t.done?[a.listItem,a.completed].join(" "):a.listItem,onClick:function(e){e.stopPropagation(),d(!1)},children:Object(k.jsxs)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(k.jsxs)(b.a,{children:[Object(k.jsx)(m.a,{size:"small",onClick:function(e){e.stopPropagation(),x({done:!0})},className:"icon-button",children:Object(k.jsx)(z.a,{})}),u?Object(k.jsx)(O.a,{component:"span",children:t.name}):Object(k.jsx)(D.a,{autoFocus:!0,onBlur:function(){return d(!0)},onKeyDown:function(e){"Enter"===e.code&&(x({name:e.target.value}),d(!0)),"Escape"===e.code&&d(!0)},defaultValue:t.name})]}),Object(k.jsxs)(b.a,{children:[Object(k.jsx)(O.a,{component:"span",children:t.createdAt.substr(0,10)}),Object(k.jsx)(m.a,{size:"small",onClick:h,className:"icon-button",children:Object(k.jsx)(J.a,{})})]})]})})},U=n(128),V=function(e){var t=e.showToDoListItems,n=e.setToDoListItems,r=e.setError;return Object(k.jsx)(U.a,{children:t.map((function(e){return Object(k.jsx)(R,{toDoListItem:e,setToDoListItems:n,setError:r},e.uuid)}))})},W=n(129),q=n(131),G=Object(y.a)((function(e){return{error:{display:"block",textAlign:"center",background:e.palette.error.light,borderRadius:"5px",padding:"8px 24px"}}})),H=function(e){var t=e.children,n=e.setError,c=e.time,a=G();return Object(r.useEffect)((function(){setTimeout((function(){n("")}),c)})),Object(k.jsx)(b.a,{p:1,children:Object(k.jsx)(O.a,{component:"span",className:a.error,children:t})})},Q="all",X="done",Y="undone";var Z=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(p.a)(a,2),u=i[0],b=i[1],d=Object(r.useState)({sortDirection:!0,filterType:Q}),m=Object(p.a)(d,2),h=m[0],x=m[1],v=Object(r.useState)({page:1,limit:5}),g=Object(p.a)(v,2),y=g[0],D=g[1],I=Object(r.useState)([]),E=Object(p.a)(I,2),C=E[0],T=E[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){b((function(e){return Object(o.a)(e).sort((function(e,t){return h.sortDirection?A(t.createdAt)-A(e.createdAt):A(e.createdAt)-A(t.createdAt)}))}))}),[h.sortDirection]),Object(r.useEffect)((function(){switch(h.filterType){case X:T(Object(o.a)(u.filter((function(e){return e.done}))));break;case Y:T(Object(o.a)(u.filter((function(e){return!e.done}))));break;default:T(Object(o.a)(u))}}),[u,h]),Object(r.useEffect)((function(){D((function(e){return Object(s.a)(Object(s.a)({},e),{},{page:1})}))}),[h]);var S=Object(r.useMemo)((function(){return C.slice((y.page-1)*y.limit,(y.page-1)*y.limit+y.limit)}),[C,y.page]);return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(f.a,{container:!0,alignItems:"center",justifyContent:"center",className:"gridContainer",children:Object(k.jsx)(W.a,{maxWidth:"sm",children:Object(k.jsxs)(f.a,{container:!0,direction:"column",children:[n&&Object(k.jsx)(H,{setError:c,time:2e3,children:n}),Object(k.jsx)(O.a,{variant:"h4",component:"h1",align:"center",children:"ToDo"}),Object(k.jsx)(F,{addItem:b,setError:c}),Object(k.jsx)(w,{setFilter:x}),Object(k.jsx)(V,{showToDoListItems:S,setToDoListItems:b,setError:c}),Object(k.jsx)(q.a,{count:Math.ceil(C.length/y.limit),onChange:function(e,t){return D((function(e){return Object(s.a)(Object(s.a)({},e),{},{page:t})}))},page:y.page,className:"todo-pagination"})]})})})})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(Z,{})}),document.getElementById("root"))},82:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.9df3ed98.chunk.js.map