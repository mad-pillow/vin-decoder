(this["webpackJsonpvin-decoder"]=this["webpackJsonpvin-decoder"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);a(17);var n=a(7),s=a(8),c=a(13),r=a(12),i=(a(18),a(1)),l=a.n(i),o=(a(20),a(5)),u=a(0),j=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).toggleNavMenu=function(){e.state.isMenuClose?e.setState({isMenuClose:!1}):e.setState({isMenuClose:!0})},e.closeNavMenu=function(){e.setState({isMenuClose:!0})},e.state={isMenuClose:!0},e}return Object(s.a)(a,[{key:"render",value:function(){var e="";return this.state.isMenuClose?document.body.style.overflow="auto":(e=" header__nav-container--visible",document.body.style.overflow="hidden"),Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("div",{className:"header__logo-container",children:Object(u.jsx)(o.b,{className:"header__logo-link",to:"/",children:"VIN DECODER"})}),Object(u.jsx)("nav",{className:"header__nav-container".concat(e),onClick:this.closeNavMenu,children:Object(u.jsxs)("ul",{className:"header__nav-list",children:[Object(u.jsx)("li",{className:"header__nav-item",children:Object(u.jsx)(o.b,{to:"/",className:"header__nav-link",children:"Main page"})}),Object(u.jsx)("li",{className:"header__nav-item",children:Object(u.jsx)(o.b,{to:"/variables",className:"header__nav-link",children:"Variables"})})]})}),Object(u.jsx)("div",{className:"header__menu-btn-container",onClick:this.toggleNavMenu,children:Object(u.jsx)("span",{className:"header__menu-btn"})})]})}}]),a}(i.Component),b=(a(22),a(2));var d=function(e){var t,a=e.info,n=e.isNavigable,s=["Header 1","Header 2"],c=Object(b.f)(),r=n?" info__row--clickable":"";return a||Array.isArray(a)?(s=Object.keys(a[0]).map((function(e,t){return Object(u.jsx)("th",{className:"info__header",children:e},t)})),t=a.map((function(e,t){var a=Object.values(e).map((function(e,t){return Object(u.jsx)("td",{className:"info__data",dangerouslySetInnerHTML:{__html:e}},t)}));return Object(u.jsx)("tr",{className:"info__row".concat(r),onClick:function(){var t;t="".concat(e.Id),n&&c(t)},children:a},t)})),Object(u.jsx)("div",{className:"info__container",children:Object(u.jsx)("table",{className:"info__table",children:Object(u.jsxs)("tbody",{children:[Object(u.jsx)("tr",{className:"info__row",children:s}),t]})})})):Object(u.jsx)("p",{children:"If you like to get description of a car by its VIN code enter the code above"})};a(23);var h=function(){return Object(u.jsx)("div",{className:"spinner__container",children:Object(u.jsx)("div",{className:"loadingio-spinner-dual-ball-4ss68ps5fu9",children:Object(u.jsxs)("div",{className:"ldio-np3unrjzfxn",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})})},f=a(3),O=(a(24),a(16)),v=a(6),m=a.n(v),x=a(11),g=function(){function e(){Object(n.a)(this,e),this.API_URL="https://vpic.nhtsa.dot.gov/api/vehicles/",this.getCarData=this.getCarData.bind(this),this.getVariables=this.getVariables.bind(this)}return Object(s.a)(e,[{key:"getData",value:function(){var e=Object(x.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Cannot fetch data from ".concat(t,". Status - ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCarData",value:function(){var e=Object(x.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData("".concat(this.API_URL,"decodevin/").concat(t,"?format=json"));case 2:return a=e.sent,n=(n=a.Results.map((function(e){return{Variable:e.Variable,Value:e.Value}}))).filter((function(e){return e.Value})),e.abrupt("return",{message:a.Message,carData:n});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getVariables",value:function(){var e=Object(x.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData("".concat(this.API_URL,"getvehiclevariablelist?format=json"));case 2:return t=e.sent,a=t.Results.map((function(e){return{Id:e.ID,Name:e.Name,Description:e.Description}})),e.abrupt("return",{message:t.Message,variables:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getVariableDetails",value:function(){var e=Object(x.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData("".concat(this.API_URL,"getvehiclevariablelist?format=json"));case 2:return a=e.sent,n={},a.Results.forEach((function(e){e.ID!==Number(t)||(n=Object.assign({},e))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),_=new g,p=l.a.createContext(),N=function(){return Object(i.useContext)(p)};function y(e){var t=e.children,a=JSON.parse(localStorage.getItem("vinList")),n=JSON.parse(localStorage.getItem("carDataList")),s=Object(i.useState)(""),c=Object(f.a)(s,2),r=c[0],l=c[1],o=Object(i.useState)(a||[null,null,null,null,null]),j=Object(f.a)(o,2),b=j[0],d=j[1],h=Object(i.useState)(n||{}),v=Object(f.a)(h,2),m=v[0],x=v[1],g=Object(i.useState)(""),N=Object(f.a)(g,2),y=N[0],S=N[1],V=Object(i.useState)(null),D=Object(f.a)(V,2),C=D[0],k=D[1],I=function(e){l(e),function(e){b.includes(e)||(k(!0),_.getCarData(e).then((function(t){var a=JSON.parse(JSON.stringify(m));a[e]=t.carData,localStorage.setItem("carDataList",JSON.stringify(a)),x(a),S(t.message),k(!1)})))}(e)};return Object(u.jsx)(p.Provider,{value:{fetchCarDataMessage:y,isCarDataFetching:C,activeVin:r,carDataList:m,vinList:b,handleVinSubmit:function(e){I(e);var t=Object(O.a)(b),a=t[t.length-1];b.includes(e)?t=t.filter((function(t){return t!==e})):function(e){var t=JSON.parse(JSON.stringify(m));delete t[e],x(t)}(a),t.unshift(e),t.splice(5),function(e){localStorage.setItem("vinList",JSON.stringify(e)),d(e)}(t)},handleVinListChoise:function(e){var t=e.target.dataset.value,a=b;t&&"Empty slot"!==t&&((a=a.filter((function(e){return e!==t}))).unshift(t),localStorage.setItem("vinList",JSON.stringify(a)),d(a),I(a[0]))}},children:t})}var S=function(){var e=Object(i.createRef)(),t=Object(i.useState)(""),a=Object(f.a)(t,2),n=a[0],s=a[1],c=Object(i.useState)(!0),r=Object(f.a)(c,2),l=r[0],o=r[1],j=N(),b=j.vinList,d=j.handleVinSubmit,h=j.handleVinListChoise,O=/^([A-Z0-9])*$/gi,v=b.map((function(e,t){var a=e||"Empty slot";return Object(u.jsx)("li",{"data-value":a,className:"vin-code__history-item",onClick:function(e){h(e),o(!0)},children:a},t)})),m=l?"vin-code__request-form":"vin-code__request-form vin-code__request-form--wrong";return Object(u.jsxs)("div",{className:"vin-code__container",children:[Object(u.jsx)("div",{className:"vin-code__request-block",children:Object(u.jsxs)("form",{className:m,onSubmit:function(t){t.preventDefault(),n&&17===n.length&&(d(n),e.current.focus(),e.current.value="")},children:[Object(u.jsx)("input",{type:"text",className:"vin-code__request-input",ref:e,minLength:"17",maxLength:"17",placeholder:"Enter VIN code",onChange:function(e){var t=e.target.value;O.test(t)?o(!0):o(!1),s(t.toUpperCase())}}),Object(u.jsx)("button",{type:"submit",className:"vin-code__request-btn",disabled:!l,children:"Request VIN"})]})}),Object(u.jsx)("div",{className:"vin-code__history-block",children:Object(u.jsx)("ul",{className:"vin-code__history-list",children:v})})]})};a(26);var V=function(e){var t=e.fetchMessage;return null===e.isFetching?null:Object(u.jsx)("div",{className:"fetch-message__container",children:Object(u.jsx)("p",{className:"fetch-message__message",children:t})})};function D(){var e=N(),t=e.fetchCarDataMessage,a=e.isCarDataFetching,n=e.activeVin,s=e.carDataList;return a?Object(u.jsx)(h,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{info:s[n],isNavigable:!0}),Object(u.jsx)(V,{fetchMessage:t,isFetching:a})]})}var C=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(D,{})]})},k=(a(27),l.a.createContext());function I(e){var t=e.children,a=JSON.parse(localStorage.getItem("storedVariablesData")),n=Object(i.useState)(a&&a.variables),s=Object(f.a)(n,2),c=s[0],r=s[1],l=Object(i.useState)(a&&a.fetchVariablesMessage),o=Object(f.a)(l,2),j=o[0],b=o[1],d=Object(i.useState)(null),h=Object(f.a)(d,2),O=h[0],v=h[1];return Object(i.useEffect)((function(){a||(v(!0),_.getVariables().then((function(e){r(e.variables),b(e.message),v(!1),localStorage.setItem("storedVariablesData",JSON.stringify({variables:c,fetchVariablesMessage:j}))})))}),[a,c,j]),Object(u.jsx)(k.Provider,{value:{variables:c,fetchVariablesMessage:j,isVariablesFetching:O},children:t})}var w=function(){var e=Object(i.useContext)(k),t=e.variables,a=e.fetchVariablesMessage,n=e.isVariablesFetching;return n?Object(u.jsx)(h,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"page-title",children:"You can find the list of all available VIN decryption variables below:"}),Object(u.jsx)(d,{info:t,isNavigable:!0}),Object(u.jsx)(V,{fetchMessage:a,isFetching:n})]})};a(28);var M=function(){var e=Object(b.g)().id,t=Object(i.useState)({}),a=Object(f.a)(t,2),n=a[0],s=a[1],c=Object(i.useState)(!1),r=Object(f.a)(c,2),l=r[0],o=r[1];Object(i.useEffect)((function(t){o(!0),_.getVariableDetails(e).then((function(e){s(e),o(!1)}))}),[e]);var j=Object.keys(n).map((function(e,t){return Object(u.jsxs)("tr",{className:"details__row",children:[Object(u.jsx)("td",{className:"details__data",children:e}),Object(u.jsx)("td",{className:"details__data",dangerouslySetInnerHTML:{__html:n[e]}})]},t)}));return l?Object(u.jsx)(h,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"page-title",children:"Details for the variable with Id ".concat(e," as follows:")}),Object(u.jsx)("div",{className:"details__container",children:Object(u.jsx)("table",{className:"details__table",children:Object(u.jsx)("tbody",{children:j})})})]})},L=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){localStorage.removeItem("storedVariablesData")}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(j,{}),Object(u.jsx)("main",{className:"main-container",children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",element:Object(u.jsxs)(y,{children:[Object(u.jsx)(C,{})," "]})}),Object(u.jsx)(b.a,{exact:!0,path:"/variables",element:Object(u.jsx)(I,{children:Object(u.jsx)(w,{})})}),Object(u.jsx)(b.a,{exact:!0,path:"/variables/:id",element:Object(u.jsx)(M,{})})]})})]})}}]),a}(i.Component),J=L,F=a(15);a.n(F).a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.675e0f6d.chunk.js.map