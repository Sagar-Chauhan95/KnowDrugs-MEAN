import{a as j,b as z,c as U}from"./chunk-ORWJGCOU.js";import"./chunk-TYSRKM5B.js";import{c as R,d as V,e as k,f as B}from"./chunk-7DAXQFX5.js";import"./chunk-AZKZJRRS.js";import{a as w}from"./chunk-42T2NVKB.js";import{b as A,c as _,e as N,f as q,h as O,j as P,k as D,l as G,m as I}from"./chunk-LIAZ27XT.js";import"./chunk-JYTUQL2Z.js";import{a as T}from"./chunk-N2VS3P45.js";import{e as F}from"./chunk-G3XZPYES.js";import"./chunk-Q6FBKUVX.js";import"./chunk-WXI33M2S.js";import{Bb as x,Cb as h,H as S,Lb as m,Qb as E,Ra as c,d as g,da as f,e as C,f as v,fa as y,jb as s,lb as b,pb as l,tb as t,ub as a,vb as p,w as M}from"./chunk-BYU4RTY2.js";function J(e,o){e&1&&(t(0,"p"),m(1,"Medication name is required"),a())}function K(e,o){e&1&&(t(0,"p"),m(1,"Medication already exist"),a())}function L(e,o){if(e&1&&s(0,J,2,0,"p")(1,K,2,0,"p"),e&2){let r=h();l(r.name.hasError("required")?0:-1),c(),l(r.name.hasError("exist")?1:-1)}}function Q(e,o){e&1&&(t(0,"p"),m(1,"Generic name is required"),a())}function W(e,o){if(e&1&&s(0,Q,2,0,"p"),e&2){let r=h();l(r.generic_name.hasError("required")?0:-1)}}function X(e,o){e&1&&(t(0,"p"),m(1,"Medication class is required"),a())}function Y(e,o){if(e&1&&s(0,X,2,0,"p"),e&2){let r=h();l(r.medication_class.hasError("required")?0:-1)}}var fe=(()=>{var o,r;let u=class u{constructor(){C(this,o);C(this,r);v(this,o,f(T)),v(this,r,f(F)),this.medicationService=f(w),this.form=f(G).nonNullable.group({name:["",_.required],generic_name:["",{validators:[_.required],updateOn:"change"}],medication_class:["",_.required],availability:["",_.required],image:""}),this.name.valueChanges.pipe(S(1e3),M(n=>this.medicationService.verifyMedicationExist({medication_name:n}))).subscribe(n=>{this.name.setErrors(n)})}get name(){return this.form.controls.name}get generic_name(){return this.form.controls.generic_name}get medication_class(){return this.form.controls.medication_class}get availability(){return this.form.controls.availability}setFile(n){this.file=n.target.files[0]}submit(){let n=new FormData;n.append("name",this.name.value),n.append("generic_name",this.generic_name.value),n.append("medication_class",this.medication_class.value),n.append("availability",this.availability.value),n.append("medication_image",this.file),this.medicationService.postMeddication(n).subscribe({next:d=>{d.success&&(g(this,o).success("Medication Successfully added"),this.form.reset(),this.medicationService.$medications.update(i=>[...i,d.data]),g(this,r).navigate(["","medicines","medicines_letters"]))},error:d=>{g(this,o).error("Medication addition Unsuccessfull")}})}};o=new WeakMap,r=new WeakMap,u.\u0275fac=function(d){return new(d||u)},u.\u0275cmp=y({type:u,selectors:[["app-add-medicine"]],standalone:!0,features:[E],decls:25,vars:5,consts:[[1,"container"],[1,"title"],[1,"example-form",3,"ngSubmit","formGroup"],[1,"example-full-width"],["type","text","matInput","","formControlName","name","placeholder","Enter name of medicine"],["type","text","matInput","","formControlName","generic_name","placeholder","Enter generic name"],["type","text","matInput","","formControlName","medication_class","placeholder","Enter medication class"],["formControlName","availability"],["value","Prescription"],["value","OTC"],["type","file","formControlName","image",1,"file",3,"change"],["type","submit",3,"disabled"]],template:function(d,i){d&1&&(t(0,"div",0)(1,"div",1),m(2,"Fill in details to add new medicine"),a(),t(3,"form",2),x("ngSubmit",function(){return i.submit()}),t(4,"mat-form-field",3),p(5,"input",4),s(6,L,2,2),a(),t(7,"mat-form-field",3),p(8,"input",5),s(9,W,1,1),a(),p(10,"br"),t(11,"mat-form-field",3),p(12,"input",6),s(13,Y,1,1),a(),t(14,"mat-radio-group",7),m(15," Availability Status "),t(16,"mat-radio-button",8),m(17,"Prescription"),a(),t(18,"mat-radio-button",9),m(19,"OTC"),a()(),p(20,"br"),t(21,"input",10),x("change",function(H){return i.setFile(H)}),a(),p(22,"br"),t(23,"button",11),m(24,"submit"),a()()()),d&2&&(c(3),b("formGroup",i.form),c(3),l(i.name.touched&&i.name.dirty&&i.name.invalid?6:-1),c(3),l(i.generic_name.touched&&i.generic_name.dirty&&i.generic_name.invalid?9:-1),c(4),l(i.medication_class.touched&&i.medication_class.dirty&&i.medication_class.invalid?13:-1),c(10),b("disabled",i.form.invalid))},dependencies:[I,O,A,N,q,P,D,V,R,B,k,U,j,z],styles:[".container[_ngcontent-%COMP%]{width:900px;height:400px;padding:10px;border:1px solid;margin-left:20px;margin-top:20px;border-radius:8px;align-items:center;background-color:#cbdcf6}.title[_ngcontent-%COMP%]{color:brown}.file[_ngcontent-%COMP%]{margin-left:40%;margin-bottom:20px}.example-full-width[_ngcontent-%COMP%]{width:400px;padding:10px;color:brown}input[_ngcontent-%COMP%]{color:brown}button[_ngcontent-%COMP%]{margin-left:40%;width:120px;height:40px;font-size:16px;padding:4px;align-items:center;border-radius:5px;background-color:#0d6efd;color:#fff}"]});let e=u;return e})();export{fe as AddMedicineComponent};
