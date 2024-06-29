import{a as E}from"./chunk-VX6S6O3F.js";import{b as y,c as o,e as N,f as R,h as F,i as M,j as D,k as G,l as V,m as A}from"./chunk-LIAZ27XT.js";import{a as _}from"./chunk-N2VS3P45.js";import{e as C}from"./chunk-G3XZPYES.js";import"./chunk-Q6FBKUVX.js";import"./chunk-WXI33M2S.js";import{Bb as x,Lb as w,Qb as S,Ra as c,d,da as r,e as p,f as u,fa as g,lb as l,ta as v,tb as f,ub as h,vb as b}from"./chunk-BYU4RTY2.js";var I=(()=>{var i,t;let e=class e{constructor(){p(this,i);p(this,t);this.medicine_id=v(),this.reviewService=r(E),u(this,i,r(_)),u(this,t,r(C)),this.form=r(V).nonNullable.group({review:["",o.required],rating:["",[o.required,o.min(1),o.max(10)]]})}get review(){return this.form.controls.review}get rating(){return this.form.controls.rating}submit(){this.reviewService.postReview(this.medicine_id(),this.form.value).subscribe(s=>{s.data&&(d(this,i).success("Review Successfully added"),d(this,t).navigate(["","medicines","details",this.medicine_id(),"reviews"]))})}};i=new WeakMap,t=new WeakMap,e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-add-review"]],inputs:{medicine_id:[1,"medicine_id"]},standalone:!0,features:[S],decls:8,vars:2,consts:[[1,"container"],[3,"ngSubmit","formGroup"],["type","text","formControlName","review","placeholder","Enter Review"],["type","number","formControlName","rating","placeholder","Enter rating from 1 - 10"],["type","submit",3,"disabled"]],template:function(n,m){n&1&&(f(0,"div",0)(1,"form",1),x("ngSubmit",function(){return m.submit()}),b(2,"input",2)(3,"br")(4,"input",3)(5,"br"),f(6,"button",4),w(7,"submit"),h()()()),n&2&&(c(),l("formGroup",m.form),c(5),l("disabled",m.form.invalid))},dependencies:[A,F,y,M,N,R,D,G],styles:[".container[_ngcontent-%COMP%]{width:400px;height:200px;border:1px solid;border-radius:8px;padding:10px;align-content:center;margin-left:30px;margin-top:30px}input[_ngcontent-%COMP%]{width:300px;height:30px;border-radius:5px;margin-left:15px;padding:5px;margin-bottom:10px}button[_ngcontent-%COMP%]{width:100px;height:35px;border-radius:8px;padding:5px;margin-left:33%;font-size:16px;background-color:#568de4;color:#fff}"]});let a=e;return a})();export{I as AddReviewComponent};