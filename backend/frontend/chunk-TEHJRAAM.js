import{a as m,d as n}from"./chunk-Q6FBKUVX.js";import{Z as c,d as s,da as f,db as l,e as o,f as a,gc as p}from"./chunk-BYU4RTY2.js";var u={_id:"",fullname:"",email:"",jwt:""};var y=(()=>{var i;let t=class t{constructor(){o(this,i);this.$state=l(u),a(this,i,f(m)),p(()=>{localStorage.setItem("record",JSON.stringify(this.$state()))})}signIn(e){return s(this,i).post(n.BACKEND_SERVER_URL+"/users/signin",e)}signUp(e){return s(this,i).post(n.BACKEND_SERVER_URL+"/users/signup",e)}is_logged_in(){return!!this.$state()._id}};i=new WeakMap,t.\u0275fac=function(g){return new(g||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a,y as b};