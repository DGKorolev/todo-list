(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),s=n.n(c),i=n(16),o=n(5),u=n.n(o),p=n(11),l=n(19),j=(n(79),n(127)),d=n(119),f=n(120),b=n(121),h=n(122),O=n(62),x=n.n(O),m=n(63),k=n.n(m),v=n(3),g="asc",y="desc",w=function(e){var t=e.setFilter,n=function(e){return function(){return t((function(t){return Object(i.a)(Object(i.a)({},t),{},{filterType:e})}))}},r=function(e){return function(){return t((function(t){return Object(i.a)(Object(i.a)({},t),{},{sortDirection:e})}))}};return Object(v.jsx)(j.a,{mt:2,children:Object(v.jsxs)(d.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(v.jsxs)(j.a,{children:[Object(v.jsx)(f.a,{onClick:n(""),children:"All"}),Object(v.jsx)(f.a,{onClick:n("done"),children:"Done"}),Object(v.jsx)(f.a,{onClick:n("undone"),children:"Undone"})]}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{display:"inline",children:"Sort by Date"}),Object(v.jsx)(h.a,{onClick:r(y),children:Object(v.jsx)(x.a,{})}),Object(v.jsx)(h.a,{onClick:r(g),children:Object(v.jsx)(k.a,{})})]})]})})},T=n(123),F=n(129),C=Object(T.a)((function(e){return{inputForm:{padding:[e.spacing(1),e.spacing(1)].join(" "),marginTop:e.spacing(2),width:"100%"}}})),D=function(e){var t=e.createTaskFetch,n=C(),a=Object(r.useState)(""),c=Object(l.a)(a,2),s=c[0],i=c[1],o=function(){var e=Object(p.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==n.code||!s.trim()){e.next=4;break}return e.next=3,t(s);case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(F.a,{className:n.inputForm,type:"text",placeholder:"i want to ...",value:s,onChange:function(e){i(e.target.value)},onKeyDown:o})})},E=n(124),I=n(64),N=n.n(I),S=n(65),A=n.n(S),B=Object(T.a)((function(e){return{listItem:{borderRadius:"5px",border:"1px solid"+e.palette.grey[400],marginTop:e.spacing(1)},completed:{background:"#eaffe9",transition:"all .4s",borderColor:e.palette.success.main},hiddenInput:{width:"100px"}}})),M=function(e){var t=e.task,n=e.editTaskFetch,a=e.deleteTaskFetch,c=B(),s=Object(r.useState)(!0),i=Object(l.a)(s,2),o=i[0],f=i[1],O=function(){var e=Object(p.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.stopPropagation(),a(t.uuid);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(E.a,{className:t.done?[c.listItem,c.completed].join(" "):c.listItem,onClick:function(e){e.stopPropagation(),f(!1)},children:Object(v.jsxs)(d.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(v.jsxs)(j.a,{children:[Object(v.jsx)(h.a,{size:"small",onClick:function(e){e.stopPropagation(),n(t.uuid,{done:!0})},className:"icon-button",children:Object(v.jsx)(N.a,{})}),o?Object(v.jsx)(b.a,{component:"span",children:t.name}):Object(v.jsx)(F.a,{autoFocus:!0,onBlur:function(){return f(!0)},onKeyDown:function(e){"Enter"===e.code&&(n(t.uuid,{name:e.target.value}),f(!0)),"Escape"===e.code&&f(!0)},defaultValue:t.name})]}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{component:"span",children:t.createdAt.substr(0,10)}),Object(v.jsx)(h.a,{size:"small",onClick:O,className:"icon-button",children:Object(v.jsx)(A.a,{})})]})]})})},P=n(125),R=function(e){var t=e.displayedTasks,n=e.editTaskFetch,r=e.deleteTaskFetch;return Object(v.jsx)(P.a,{children:t.map((function(e){return Object(v.jsx)(M,{task:e,editTaskFetch:n,deleteTaskFetch:r},e.uuid)}))})},z=n(126),J=n(128),K=n(66),U=n(67),L=n(23),V=n.n(L),W=function(){function e(){Object(K.a)(this,e)}return Object(U.a)(e,null,[{key:"getAll",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n,r,a,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:g,r={order:n},t&&(r.filterBy=t),e.next=6,V.a.get("/tasks/2",{params:r});case 6:if(200===(a=e.sent).status){e.next=9;break}throw Error("Failed to get the task list");case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("/task/2",{name:t,done:!1});case 2:if(200===(n=e.sent).status){e.next=5;break}throw Error("Task not created");case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.patch("/task/2/".concat(t),n);case 2:if(200===(r=e.sent).status){e.next=5;break}throw Error("Data change error");case 5:return e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.delete("/task/2/".concat(t));case 2:if(204===(n=e.sent).status){e.next=5;break}throw Error("Data deletion error");case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),q=Object(T.a)((function(e){return{error:{display:"block",textAlign:"center",background:e.palette.error.light,borderRadius:"5px",padding:"8px 24px"}}})),G=function(e){var t=e.children,n=e.setError,a=e.time,c=q();return Object(r.useEffect)((function(){setTimeout((function(){n("")}),a)})),Object(v.jsx)(j.a,{p:1,children:Object(v.jsx)(b.a,{component:"span",className:c.error,children:t})})},H=function(e,t){return Object(p.a)(u.a.mark((function n(){var r=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.apply(void 0,r);case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),t(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))};V.a.defaults.baseURL="https://todo-api-learning.herokuapp.com/v1";var Q=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(l.a)(c,2),o=s[0],j=s[1],f=Object(r.useState)({sortDirection:y,filterType:""}),h=Object(l.a)(f,2),O=h[0],x=h[1],m=Object(r.useState)({page:1,limit:5}),k=Object(l.a)(m,2),g=k[0],T=k[1],F=H(function(){var e=Object(p.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getAll(t,n);case 2:r=e.sent,j(r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a),C=H(function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.create(t);case 2:T((function(e){return Object(i.a)(Object(i.a)({},e),{},{page:1})})),x({sortDirection:y,filterType:""}),F(O.filterType,O.sortDirection);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a),E=H(function(){var e=Object(p.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.edit(t,n);case 2:F(O.filterType,O.sortDirection);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a),I=H(function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.delete(t);case 2:F(O.filterType,O.sortDirection);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a);Object(r.useEffect)((function(){F(O.filterType,O.sortDirection)}),[O]),Object(r.useEffect)((function(){T((function(e){return Object(i.a)(Object(i.a)({},e),{},{page:1})}))}),[O]);var N=Object(r.useMemo)((function(){return o.slice((g.page-1)*g.limit,(g.page-1)*g.limit+g.limit)}),[o,g]);return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(d.a,{container:!0,alignItems:"center",justifyContent:"center",className:"gridContainer",children:Object(v.jsx)(z.a,{maxWidth:"sm",children:Object(v.jsxs)(d.a,{container:!0,direction:"column",children:[n&&Object(v.jsx)(G,{time:2e3,setError:a,children:n}),Object(v.jsx)(b.a,{variant:"h4",component:"h1",align:"center",children:"ToDo"}),Object(v.jsx)(D,{setTasks:j,createTaskFetch:C}),Object(v.jsx)(w,{setFilter:x}),Object(v.jsx)(R,{displayedTasks:N,deleteTaskFetch:I,editTaskFetch:E}),Object(v.jsx)(J.a,{count:Math.ceil(o.length/g.limit),onChange:function(e,t){return T((function(e){return Object(i.a)(Object(i.a)({},e),{},{page:t})}))},page:g.page,className:"todo-pagination"})]})})})})};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.e0a70c75.chunk.js.map