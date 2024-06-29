import{a as G,b as L,c as R,d as V,e as j,f as z}from"./chunk-7DAXQFX5.js";import"./chunk-AZKZJRRS.js";import{b as P}from"./chunk-TEHJRAAM.js";import{b as O,c as g,e as q,f as N,h as T,j as I,k as A,l as k,m as D}from"./chunk-LIAZ27XT.js";import"./chunk-JYTUQL2Z.js";import{a as F}from"./chunk-N2VS3P45.js";import{e as y,f as U}from"./chunk-G3XZPYES.js";import"./chunk-Q6FBKUVX.js";import"./chunk-WXI33M2S.js";import{Bb as E,Cb as v,Lb as r,Qb as M,Ra as l,Rb as w,d as u,da as c,e as _,f as S,fa as b,jb as s,lb as h,pb as m,tb as t,ub as i,vb as f}from"./chunk-BYU4RTY2.js";var B=()=>["","signin"];function H(e,o){e&1&&(t(0,"mat-error"),r(1,"Fullname is required"),i())}function J(e,o){if(e&1&&s(0,H,2,0,"mat-error"),e&2){let n=v();m(n.fullname.hasError("required")?0:-1)}}function K(e,o){e&1&&(t(0,"mat-error"),r(1,"Please enter a valid email address"),i())}function Q(e,o){e&1&&(t(0,"mat-error"),r(1,"Email is "),t(2,"strong"),r(3,"required"),i()())}function W(e,o){if(e&1&&s(0,K,2,0,"mat-error")(1,Q,4,0,"mat-error"),e&2){let n=v();m(n.email.errors!=null&&n.email.errors.email?0:-1),l(),m(n.email.errors!=null&&n.email.errors.required?1:-1)}}function X(e,o){e&1&&(t(0,"mat-error"),r(1,"Password is "),t(2,"strong"),r(3,"required"),i()())}var se=(()=>{var o,n,d;let p=class p{constructor(){_(this,o);_(this,n);_(this,d);S(this,o,c(P)),S(this,n,c(F)),S(this,d,c(y)),this.form=c(k).nonNullable.group({fullname:["",g.required],email:["",[g.required,g.email]],password:["",g.required]})}get fullname(){return this.form.controls.fullname}get email(){return this.form.controls.email}get password(){return this.form.controls.password}signUp(){u(this,o).signUp(this.form.value).subscribe(C=>{C.success?(u(this,n).success("SignUp Successfull"),u(this,d).navigate(["signin"])):u(this,n).error("SignUp Unsuccessfull")})}};o=new WeakMap,n=new WeakMap,d=new WeakMap,p.\u0275fac=function(x){return new(x||p)},p.\u0275cmp=b({type:p,selectors:[["app-sign-up"]],standalone:!0,features:[M],decls:26,vars:7,consts:[[1,"container"],[1,"title"],[1,"example-form",3,"ngSubmit","formGroup"],[1,"example-full-width"],["type","text","matInput","","formControlName","fullname","placeholder","Enter your fullname"],["type","email","matInput","","formControlName","email","placeholder","Enter your email"],["type","password","matInput","","formControlName","password","placeholder","Enter your password"],["type","submit",3,"disabled"],[1,"bottom"],[3,"routerLink"]],template:function(x,a){x&1&&(t(0,"div",0)(1,"div",1),r(2,"SignUp"),i(),t(3,"form",2),E("ngSubmit",function(){return a.signUp()}),t(4,"mat-form-field",3),f(5,"input",4),s(6,J,1,1),i(),t(7,"mat-form-field",3)(8,"mat-label"),r(9,"Email"),i(),f(10,"input",5)(11,"br"),s(12,W,2,2),i(),t(13,"mat-form-field",3),f(14,"input",6),s(15,X,4,0,"mat-error"),i(),f(16,"br"),t(17,"button",7),r(18,"SignUp"),i()(),t(19,"div",8)(20,"p"),r(21,"------OR------"),i(),t(22,"span"),r(23,"Already have an Account ? \xA0 "),i(),t(24,"a",9),r(25,"SignIn"),i()()()),x&2&&(l(3),h("formGroup",a.form),l(3),m(a.fullname.touched?6:-1),l(6),m(a.email.invalid&&a.email.touched&&a.email.dirty?12:-1),l(3),m(a.password.errors!=null&&a.password.errors.required?15:-1),l(2),h("disabled",a.form.invalid),l(7),h("routerLink",w(6,B)))},dependencies:[U,D,T,O,q,N,I,A,V,R,G,L,z,j],styles:[".title[_ngcontent-%COMP%]{font-size:30px;color:#fff;margin-left:130px;margin-top:50px}.example-form[_ngcontent-%COMP%]{min-width:100px;max-width:400px;width:100%;margin-top:20%;border-radius:15px}.example-full-width[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:420px;height:650px;border:1px solid;border-radius:15px;justify-content:center;align-items:center;padding:10px;background-color:#057e9a;margin-left:35%;margin-top:50px}button[_ngcontent-%COMP%]{margin-top:70px;margin-bottom:30px;width:100px;height:30px;border-radius:8px;font-size:18px;margin-left:130px}.bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:130px}.bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:70px}"]});let e=p;return e})();export{se as SignUpComponent};
