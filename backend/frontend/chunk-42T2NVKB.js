import{a as f,d as r}from"./chunk-Q6FBKUVX.js";import{Z as m,d as n,da as l,db as a,e as d,f as c,gc as E}from"./chunk-BYU4RTY2.js";var y=(()=>{var i;let e=class e{constructor(){d(this,i);c(this,i,l(f)),this.$medications=a([]),this.$show=a(!1),this.$medicine=a({name:"",generic_name:"",medication_class:"",availability:"",added_by:{user_id:"",fullname:"",email:""},image:{filename:"",originalname:""},reviews:[{review:"",rating:0,by:{user_id:"",fullname:""},date:0}]}),E(()=>{this.$medications(),this.$medicine()})}postMeddication(t){return n(this,i).post(r.BACKEND_SERVER_URL+"/medications",t)}getMedicationsByFirstLetter(t){return n(this,i).get(r.BACKEND_SERVER_URL+`/medications?first_letter=${t}`)}getMedicationById(t){return n(this,i).get(r.BACKEND_SERVER_URL+"/medications/"+t)}updateMedicationById(t,o){return n(this,i).put(r.BACKEND_SERVER_URL+"/medications/"+t,o)}deleteMedicationById(t){return n(this,i).delete(r.BACKEND_SERVER_URL+"/medications/"+t)}verifyMedicationExist(t){return n(this,i).post(r.BACKEND_SERVER_URL+"/medications/verify",t)}};i=new WeakMap,e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{y as a};
