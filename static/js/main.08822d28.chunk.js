(this["webpackJsonpform-deploy"]=this["webpackJsonpform-deploy"]||[]).push([[0],{190:function(e,t,n){},191:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n(0),i=n.n(c),r=n(12),l=n.n(r),o=(n(190),n(191),n(184)),s=n(44),u=n(45),b=n(47),j=n(46),h=n(42),p=n.n(h),x=n(43),f=n.n(x),O=n(18),d=n.n(O),m=(n(64),n(57)),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange;return Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(f.a,{title:"Enter Personal Details"}),Object(a.jsx)(d.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:n("occupation"),defaultValue:t.occupation}),Object(a.jsx)("br",{}),Object(a.jsx)(d.a,{hintText:"Enter Your city",floatingLabelText:"City",onChange:n("city"),defaultValue:t.city}),Object(a.jsx)("br",{}),Object(a.jsx)(d.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:n("bio"),defaultValue:t.bio}),Object(a.jsx)("br",{}),Object(a.jsx)(m.a,{label:"Back",primary:!1,style:g.button,onClick:this.back}),Object(a.jsx)(m.a,{label:"Continue",primary:!0,style:g.button,onClick:this.continue})]})})})}}]),n}(c.Component),g={button:{margin:15}},C=v,y=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange;return Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(f.a,{title:"Enter User Details"}),Object(a.jsx)(d.a,{hintText:"Enter Your Full Name",floatingLabelText:"Full Name",onChange:n("fullName"),defaultValue:t.firstName}),Object(a.jsx)("br",{}),Object(a.jsx)(d.a,{hintText:"Enter Your email",floatingLabelText:"Email",onChange:n("email"),defaultValue:t.email}),Object(a.jsx)("br",{}),Object(a.jsx)(d.a,{hintText:"Enter Your Mobile Number",floatingLabelText:"Mobile No.",onChange:n("mobile"),defaultValue:t.mobile}),Object(a.jsx)("br",{}),Object(a.jsx)(m.a,{label:"Continue",primary:"true",style:S.button,onClick:this.continue})]})})})}}]),n}(c.Component),S={button:{margin:15}},T=y,k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={step:1,fullName:"",mobile:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(n){e.setState(Object(o.a)({},t,n.target.value))}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.step,t=this.state,n=t.fullName,c=t.mobile,i={fullName:n,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio,mobile:c};switch(e){case 1:return Object(a.jsx)(T,{nextStep:this.nextStep,handleChange:this.handleChange,values:i});case 2:return Object(a.jsx)(C,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:i});case 3:return Object(a.jsx)("h1",{children:"Confirm"});case 4:return Object(a.jsx)("h1",{children:"Success"})}}}]),n}(c.Component);var E=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(k,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,385)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),N()}},[[384,1,2]]]);
//# sourceMappingURL=main.08822d28.chunk.js.map