import{Aa as ae,D as H,G as ee,M as ne,U as te,X as re,Z as I,_a as ce,a as Z,aa as A,ca as R,da as g,g as V,ia as se,ib as le,j as X,ka as oe,la as ie,lc as he,oc as de,p as Q,q as J,u as k,yc as ue}from"./chunk-BYU4RTY2.js";var L=class{},B=class{},w=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(r=>{let t=r.indexOf(":");if(t>0){let s=r.slice(0,t),o=s.toLowerCase(),a=r.slice(t+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((r,t)=>{this.setHeaderEntries(t,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([r,t])=>{this.setHeaderEntries(r,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let r=this.headers.get(e.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,r){return this.clone({name:e,value:r,op:"a"})}set(e,r){return this.clone({name:e,value:r,op:"s"})}delete(e,r){return this.clone({name:e,value:r,op:"d"})}maybeSetNormalizedName(e,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(r=>{this.headers.set(r,e.headers.get(r)),this.normalizedNames.set(r,e.normalizedNames.get(r))})}clone(e){let r=new n;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([e]),r}applyUpdate(e){let r=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,r);let s=(e.op==="a"?this.headers.get(r):void 0)||[];s.push(...t),this.headers.set(r,s);break;case"d":let o=e.value;if(!o)this.headers.delete(r),this.normalizedNames.delete(r);else{let a=this.headers.get(r);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,a)}break}}setHeaderEntries(e,r){let t=(Array.isArray(r)?r:[r]).map(o=>o.toString()),s=e.toLowerCase();this.headers.set(s,t),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>e(this.normalizedNames.get(r),this.headers.get(r)))}};var G=class{encodeKey(e){return fe(e)}encodeValue(e){return fe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function be(n,e){let r=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[a,i]=o==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,o)),e.decodeValue(s.slice(o+1))],d=r.get(a)||[];d.push(i),r.set(a,d)}),r}var Pe=/%(\d[a-f0-9])/gi,Ne={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function fe(n){return encodeURIComponent(n).replace(Pe,(e,r)=>Ne[r]??e)}function _(n){return`${n}`}var b=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new G,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=be(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(r=>{let t=e.fromObject[r],s=Array.isArray(t)?t.map(_):[_(t)];this.map.set(r,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let r=this.map.get(e);return r?r[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,r){return this.clone({param:e,value:r,op:"a"})}appendAll(e){let r=[];return Object.keys(e).forEach(t=>{let s=e[t];Array.isArray(s)?s.forEach(o=>{r.push({param:t,value:o,op:"a"})}):r.push({param:t,value:s,op:"a"})}),this.clone(r)}set(e,r){return this.clone({param:e,value:r,op:"s"})}delete(e,r){return this.clone({param:e,value:r,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let r=this.encoder.encodeKey(e);return this.map.get(e).map(t=>r+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let r=new n({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(e),r}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let r=(e.op==="a"?this.map.get(e.param):void 0)||[];r.push(_(e.value)),this.map.set(e.param,r);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],s=t.indexOf(_(e.value));s!==-1&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var C=class{constructor(){this.map=new Map}set(e,r){return this.map.set(e,r),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Ae(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function pe(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ye(n){return typeof Blob<"u"&&n instanceof Blob}function me(n){return typeof FormData<"u"&&n instanceof FormData}function Oe(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var F=class n{constructor(e,r,t,s){this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Ae(this.method)||s?(this.body=t!==void 0?t:null,o=s):o=t,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new w,this.context??=new C,!this.params)this.params=new b,this.urlWithParams=r;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=r;else{let i=r.indexOf("?"),d=i===-1?"?":i<r.length-1?"&":"";this.urlWithParams=r+d+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||pe(this.body)||ye(this.body)||me(this.body)||Oe(this.body)?this.body:this.body instanceof b?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||me(this.body)?null:ye(this.body)?this.body.type||null:pe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof b?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let r=e.method||this.method,t=e.url||this.url,s=e.responseType||this.responseType,o=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,d=e.reportProgress??this.reportProgress,c=e.headers||this.headers,f=e.params||this.params,m=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((p,T)=>p.set(T,e.setHeaders[T]),c)),e.setParams&&(f=Object.keys(e.setParams).reduce((p,T)=>p.set(T,e.setParams[T]),f)),new n(r,t,a,{params:f,headers:c,context:m,reportProgress:d,responseType:s,withCredentials:i,transferCache:o})}},P=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(P||{}),j=class{constructor(e,r=200,t="OK"){this.headers=e.headers||new w,this.status=e.status!==void 0?e.status:r,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},z=class n extends j{constructor(e={}){super(e),this.type=P.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},U=class n extends j{constructor(e={}){super(e),this.type=P.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},v=class extends j{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Ee=200,Ie=204;function $(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var Me=(()=>{let e=class e{constructor(t){this.handler=t}request(t,s,o={}){let a;if(t instanceof F)a=t;else{let c;o.headers instanceof w?c=o.headers:c=new w(o.headers);let f;o.params&&(o.params instanceof b?f=o.params:f=new b({fromObject:o.params})),a=new F(t,s,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:f,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=J(a).pipe(ee(c=>this.handler.handle(c)));if(t instanceof F||o.observe==="events")return i;let d=i.pipe(H(c=>c instanceof U));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return d.pipe(k(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe(k(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe(k(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return d.pipe(k(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,s={}){return this.request("DELETE",t,s)}get(t,s={}){return this.request("GET",t,s)}head(t,s={}){return this.request("HEAD",t,s)}jsonp(t,s){return this.request("JSONP",t,{params:new b().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,s={}){return this.request("OPTIONS",t,s)}patch(t,s,o={}){return this.request("PATCH",t,$(o,s))}post(t,s,o={}){return this.request("POST",t,$(o,s))}put(t,s,o={}){return this.request("PUT",t,$(o,s))}};e.\u0275fac=function(s){return new(s||e)(R(L))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),De=/^\)\]\}',?\n/,xe="X-Request-URL";function ge(n){if(n.url)return n.url;let e=xe.toLocaleLowerCase();return n.headers.get(e)}var ke=(()=>{let e=class e{constructor(){this.fetchImpl=g(W,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=g(ce)}handle(t){return new X(s=>{let o=new AbortController;return this.doRequest(t,o.signal,s).then(q,a=>s.error(new v({error:a}))),()=>o.abort()})}doRequest(t,s,o){return V(this,null,function*(){let a=this.createRequestInit(t),i;try{let y=this.fetchImpl(t.urlWithParams,Z({signal:s},a));Fe(y),o.next({type:P.Sent}),i=yield y}catch(y){o.error(new v({error:y,status:y.status??0,statusText:y.statusText,url:t.urlWithParams,headers:y.headers}));return}let d=new w(i.headers),c=i.statusText,f=ge(i)??t.urlWithParams,m=i.status,p=null;if(t.reportProgress&&o.next(new z({headers:d,status:m,statusText:c,url:f})),i.body){let y=i.headers.get("content-length"),M=[],l=i.body.getReader(),h=0,E,O,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>V(this,null,function*(){for(;;){let{done:N,value:x}=yield l.read();if(N)break;if(M.push(x),h+=x.length,t.reportProgress){O=t.responseType==="text"?(O??"")+(E??=new TextDecoder).decode(x,{stream:!0}):void 0;let Y=()=>o.next({type:P.DownloadProgress,total:y?+y:void 0,loaded:h,partialText:O});u?u.run(Y):Y()}}}));let D=this.concatChunks(M,h);try{let N=i.headers.get("Content-Type")??"";p=this.parseBody(t,D,N)}catch(N){o.error(new v({error:N,headers:new w(i.headers),status:i.status,statusText:i.statusText,url:ge(i)??t.urlWithParams}));return}}m===0&&(m=p?Ee:0),m>=200&&m<300?(o.next(new U({body:p,headers:d,status:m,statusText:c,url:f})),o.complete()):o.error(new v({error:p,headers:d,status:m,statusText:c,url:f}))})}parseBody(t,s,o){switch(t.responseType){case"json":let a=new TextDecoder().decode(s).replace(De,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(s);case"blob":return new Blob([s],{type:o});case"arraybuffer":return s.buffer}}createRequestInit(t){let s={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((a,i)=>s[a]=i.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){let a=t.detectContentTypeHeader();a!==null&&(s["Content-Type"]=a)}return{body:t.serializeBody(),method:t.method,headers:s,credentials:o}}concatChunks(t,s){let o=new Uint8Array(s),a=0;for(let i of t)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),W=class{};function q(){}function Fe(n){n.then(q,q)}function Le(n,e){return e(n)}function je(n,e,r){return(t,s)=>ie(r,()=>e(t,o=>n(o,s)))}var K=new A(""),Ue=new A(""),_e=new A("",{providedIn:"root",factory:()=>!0});var Te=(()=>{let e=class e extends L{constructor(t,s){super(),this.backend=t,this.injector=s,this.chain=null,this.pendingTasks=g(le),this.contributeToStability=g(_e)}handle(t){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(K),...this.injector.get(Ue,[])]));this.chain=s.reduceRight((o,a)=>je(o,a,this.injector),Le)}if(this.contributeToStability){let s=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(ne(()=>this.pendingTasks.remove(s)))}else return this.chain(t,s=>this.backend.handle(s))}};e.\u0275fac=function(s){return new(s||e)(R(B),R(oe))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})();var Be=/^\)\]\}',?\n/;function ze(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var we=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new re(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?Q(s.\u0275loadImpl()):J(null)).pipe(te(()=>new X(a=>{let i=s.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((l,h)=>i.setRequestHeader(l,h.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let l=t.detectContentTypeHeader();l!==null&&i.setRequestHeader("Content-Type",l)}if(t.responseType){let l=t.responseType.toLowerCase();i.responseType=l!=="json"?l:"text"}let d=t.serializeBody(),c=null,f=()=>{if(c!==null)return c;let l=i.statusText||"OK",h=new w(i.getAllResponseHeaders()),E=ze(i)||t.url;return c=new z({headers:h,status:i.status,statusText:l,url:E}),c},m=()=>{let{headers:l,status:h,statusText:E,url:O}=f(),u=null;h!==Ie&&(u=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=u?Ee:0);let D=h>=200&&h<300;if(t.responseType==="json"&&typeof u=="string"){let N=u;u=u.replace(Be,"");try{u=u!==""?JSON.parse(u):null}catch(x){u=N,D&&(D=!1,u={error:x,text:u})}}D?(a.next(new U({body:u,headers:l,status:h,statusText:E,url:O||void 0})),a.complete()):a.error(new v({error:u,headers:l,status:h,statusText:E,url:O||void 0}))},p=l=>{let{url:h}=f(),E=new v({error:l,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});a.error(E)},T=!1,y=l=>{T||(a.next(f()),T=!0);let h={type:P.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(h.total=l.total),t.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),a.next(h)},M=l=>{let h={type:P.UploadProgress,loaded:l.loaded};l.lengthComputable&&(h.total=l.total),a.next(h)};return i.addEventListener("load",m),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),t.reportProgress&&(i.addEventListener("progress",y),d!==null&&i.upload&&i.upload.addEventListener("progress",M)),i.send(d),a.next({type:P.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",m),i.removeEventListener("timeout",p),t.reportProgress&&(i.removeEventListener("progress",y),d!==null&&i.upload&&i.upload.removeEventListener("progress",M)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(s){return new(s||e)(R(ue))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),Re=new A(""),Se="XSRF-TOKEN",Ve=new A("",{providedIn:"root",factory:()=>Se}),Xe="X-XSRF-TOKEN",Je=new A("",{providedIn:"root",factory:()=>Xe}),S=class{},$e=(()=>{let e=class e{constructor(t,s,o){this.doc=t,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=de(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(s){return new(s||e)(R(he),R(ae),R(Ve))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})();function Ge(n,e){let r=n.url.toLowerCase();if(!g(Re)||n.method==="GET"||n.method==="HEAD"||r.startsWith("http://")||r.startsWith("https://"))return e(n);let t=g(S).getToken(),s=g(Je);return t!=null&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,t)})),e(n)}var ve=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(ve||{});function Ce(n,e){return{\u0275kind:n,\u0275providers:e}}function gn(...n){let e=[Me,we,Te,{provide:L,useExisting:Te},{provide:B,useFactory:()=>g(ke,{optional:!0})??g(we)},{provide:K,useValue:Ge,multi:!0},{provide:Re,useValue:!0},{provide:S,useClass:$e}];for(let r of n)e.push(...r.\u0275providers);return se(e)}function Tn(n){return Ce(ve.Interceptors,n.map(e=>({provide:K,useValue:e,multi:!0})))}var Rn={BACKEND_SERVER_URL:"http://localhost:3000"};export{Me as a,gn as b,Tn as c,Rn as d};