(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{18:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(14),n=a(8),c=a(9),i=a(23),r=a(11),o=a(10),d=a(0),l=a.n(d),y=a(21),h=a.n(y),j=(a(18),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))}),p=a(19),b=a(4),x=a.p+"static/media/lzhu17.dd58acd7.jpg",u=a(2),O=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"section-header",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"about me"}),Object(u.jsxs)("div",{className:"about-me",children:[Object(u.jsx)("img",{className:"my-picture",src:x}),Object(u.jsx)("p",{style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,className:"my-description",children:"Hi! My name is Livia and I'm a sophomore CS student at Brown University. "})]})]})}}]),a}(l.a.Component),g=a.p+"static/media/sun.07c4690a.png",m=a.p+"static/media/moon.d8bd4c71.png",S=a(22),T=a(33),f=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(S.a,{expand:"lg",sticky:"top",id:"nav",className:"navbar-expand-md",children:[Object(u.jsxs)(S.a.Brand,{className:"header-left",children:[Object(u.jsx)("img",{onClick:function(){e.props.setDayMode(!e.props.dayMode)},src:this.props.dayMode?g:m,alt:"picture of sun",className:"logo"}),Object(u.jsx)("h1",{className:"header-brand",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"LIVIA ZHU"})]}),Object(u.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(S.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(u.jsxs)(T.a,{children:[Object(u.jsx)(p.b,{to:"/",className:"header-link",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"ABOUT"}),Object(u.jsx)(p.b,{to:"/projects",className:"header-link",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"PROJECTS"}),Object(u.jsx)(p.b,{to:"/experience",className:"header-link",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"EXPERIENCE"}),Object(u.jsx)(p.b,{to:"/skills",className:"header-link",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"SKILLS"})]})})]})}}]),a}(l.a.Component),v=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"hello"})}}]),a}(l.a.Component),M=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{className:"section-header",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"my projects"})})}}]),a}(l.a.Component),k=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{className:"section-header",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"my experience"})})}}]),a}(l.a.Component),C=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{className:"section-header",style:this.props.dayMode?this.props.dayTextStyle:this.props.nightTextStyle,children:"my skills"})})}}]),a}(l.a.Component),N=a.p+"static/media/day-background.4bcaadb1.jpg",B=a.p+"static/media/night-background.d915b78f.jpg",I=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).dayBackground={backgroundImage:"url(".concat(N,")")},s.nightBackground={backgroundImage:"url(".concat(B,")")},s.dayCard={backgroundColor:"white"},s.nightCard={backgroundColor:"black"},s.dayTextStyle={color:"black"},s.nightTextStyle={color:"white"},s.state={dayMode:!0},s.setDayMode=s.setDayMode.bind(Object(i.a)(s)),s}return Object(c.a)(a,[{key:"setDayMode",value:function(e){this.setState({dayMode:e})}},{key:"render",value:function(){var e=this;return Object(u.jsx)(p.a,{children:Object(u.jsxs)("div",{className:"website",style:this.state.dayMode?this.dayBackground:this.nightBackground,children:[Object(u.jsx)(f,{dayMode:this.state.dayMode,setDayMode:this.setDayMode,dayTextStyle:this.dayTextStyle,nightTextStyle:this.nightTextStyle}),Object(u.jsx)("div",{className:"section",style:this.state.dayMode?this.dayCard:this.nightCard,children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",component:function(t){return Object(u.jsx)(O,Object(s.a)(Object(s.a)({},t),{},{dayMode:e.state.dayMode,dayTextStyle:e.dayTextStyle,nightTextStyle:e.nightTextStyle}))}}),Object(u.jsx)(b.a,{exact:!0,path:"/projects",component:function(t){return Object(u.jsx)(M,Object(s.a)(Object(s.a)({},t),{},{dayMode:e.state.dayMode,dayTextStyle:e.dayTextStyle,nightTextStyle:e.nightTextStyle}))}}),Object(u.jsx)(b.a,{exact:!0,path:"/experience",component:function(t){return Object(u.jsx)(k,Object(s.a)(Object(s.a)({},t),{},{dayMode:e.state.dayMode,dayTextStyle:e.dayTextStyle,nightTextStyle:e.nightTextStyle}))}}),Object(u.jsx)(b.a,{exact:!0,path:"/skills",component:function(t){return Object(u.jsx)(C,Object(s.a)(Object(s.a)({},t),{},{dayMode:e.state.dayMode,dayTextStyle:e.dayTextStyle,nightTextStyle:e.nightTextStyle}))}}),Object(u.jsx)(b.a,{component:function(t){return Object(u.jsx)(v,Object(s.a)(Object(s.a)({},t),{},{dayMode:e.state.dayMode,dayTextStyle:e.dayTextStyle,nightTextStyle:e.nightTextStyle}))}})]})})]})})}}]),a}(l.a.Component);h.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),j()}},[[47,1,2]]]);
//# sourceMappingURL=main.6a3fed56.chunk.js.map