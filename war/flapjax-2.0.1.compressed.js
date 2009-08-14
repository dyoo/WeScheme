(function(){
var _1={};
(function(){
var $B;
var $E;
var _2;
var _3;
var _4;
var _5;
var _6;
var _7;
var _8;
var _9;
var _a=this;
var _b=function(_c,_d,_e){
var i,_f=_c.length,r=[];
if(!_e){
_e=_f;
}
if(_e<0){
_e=_f+_e;
}
if(_d<0){
_d=_f-_d;
}
if(_e<_d){
i=_d;
_d=_e;
_e=i;
}
for(i=0;i<_e-_d;i++){
r[i]=_c[_d+i];
}
return r;
};
var _10=function(a,b){
return (a==b)||((((typeof (a)=="number")&&isNaN(a))||a=="NaN")&&(((typeof (b)=="number")&&isNaN(b))||b=="NaN"));
};
var _11=function(fn,arr){
for(var i=0;i<arr.length;i++){
fn(arr[i]);
}
};
var _12=function(elt,lst){
for(var i=0;i<lst.length;i++){
if(_10(lst[i],elt)){
return true;
}
}
return false;
};
var zip=function(_13){
if(_13.length==0){
return [];
}
var ret=[];
for(var i=0;i<_13[0].length;i++){
ret.push([]);
for(var j=0;j<_13.length;j++){
ret[i].push(_13[j][i]);
}
}
return ret;
};
var map=function(fn){
var _14=_b(arguments,1);
if(_14.length===0){
return [];
}else{
if(_14.length===1){
var ret=[];
for(var i=0;i<_14[0].length;i++){
ret.push(fn(_14[0][i]));
}
return ret;
}else{
var ret=zip(_14);
var o=new Object();
for(var i=0;i<ret.length;i++){
ret[i]=fn.apply(o,ret[i]);
}
return ret;
}
}
};
var _15=function(_16,arr){
var res=[];
for(var i=0;i<arr.length;i++){
if(_16(arr[i])){
res.push(arr[i]);
}
}
return res;
};
var _17=function(fn,_18){
var _19=_b(arguments,2);
if(_19.length===0){
return _18;
}else{
if(_19.length===1){
var acc=_18;
for(var i=0;i<_19[0].length;i++){
acc=fn(_19[0][i],acc);
}
return acc;
}else{
var acc=_18;
for(var i=0;i<_19[0].length;i++){
var _1a=map(function(lst){
return lst[i];
},_19);
_1a.push(acc);
acc=fn.apply({},_1a);
}
return acc;
}
}
};
var _1b=function(fn,_1c){
var _1d=_b(arguments,2);
if(_1d.length===0){
return _1c;
}else{
if(_1d.length===1){
var acc=_1c;
for(var i=_1d[0].length-1;i>-1;i--){
acc=fn(_1d[0][i],acc);
}
return acc;
}else{
var acc=_1c;
for(var i=_1d[0].length-1;i>-1;i--){
var _1e=map(function(lst){
return lst[i];
},_1d);
_1e.push(acc);
acc=fn.apply({},_1e);
}
return acc;
}
}
};
var _1f=function(_20,_21){
this.stamp=_20;
this.value=_21;
};
var PQ=function(){
var ctx=this;
ctx.val=[];
this.insert=function(kv){
ctx.val.push(kv);
var _22=ctx.val.length-1;
while(_22>0&&kv.k<ctx.val[Math.floor((_22-1)/2)].k){
var _23=_22;
_22=Math.floor((_22-1)/2);
ctx.val[_23]=ctx.val[_22];
ctx.val[_22]=kv;
}
};
this.isEmpty=function(){
return ctx.val.length===0;
};
this.pop=function(){
if(ctx.val.length==1){
return ctx.val.pop();
}
var ret=ctx.val.shift();
ctx.val.unshift(ctx.val.pop());
var _24=0;
var kv=ctx.val[0];
while(1){
var _25=(_24*2+1<ctx.val.length?ctx.val[_24*2+1].k:kv.k+1);
var _26=(_24*2+2<ctx.val.length?ctx.val[_24*2+2].k:kv.k+1);
if(_25>kv.k&&_26>kv.k){
break;
}else{
if(_25<_26){
ctx.val[_24]=ctx.val[_24*2+1];
ctx.val[_24*2+1]=kv;
_24=_24*2+1;
}else{
ctx.val[_24]=ctx.val[_24*2+2];
ctx.val[_24*2+2]=kv;
_24=_24*2+2;
}
}
}
return ret;
};
};
var _27=0;
var _28=1;
var _29=function(){
return ++_28;
};
var _2a=function(_2b,_2c){
var _2d=new PQ();
_2d.insert({k:_2c.rank,n:_2c,v:_2b});
while(!(_2d.isEmpty())){
var qv=_2d.pop();
qv.n.updater(function(_2e){
for(var i=0;i<qv.n.sendsTo.length;i++){
_2d.insert({k:qv.n.sendsTo[i].rank,n:qv.n.sendsTo[i],v:_2e});
}
},new _1f(qv.v.stamp,qv.v.value));
}
};
var _2f=function(_30,_31){
this.updater=_31;
this.sendsTo=[];
for(var i=0;i<_30.length;i++){
_30[i].sendsTo.push(this);
}
this.rank=++_27;
};
_2f.prototype=new Object();
var _32=function(_33,_34){
return new _2f(_33,_34);
};
attachListener=function(_35,_36){
if(!(_35 instanceof _2f)){
throw "attachListenenerNode: expects event as first arg";
}
if(!(_36 instanceof _2f)){
throw "attachListenenerNode: expects event as second arg";
}
_35.sendsTo.push(_36);
if(_35.rank>_36.rank){
var _37=_27+1;
var q=[_36];
while(q.length){
var cur=q.splice(0,1)[0];
cur.rank=++_27;
q=q.concat(cur.sendsTo);
}
}
};
removeListener=function(_38,_39){
if(!(_38 instanceof _2f)){
throw "removeListenerNode: expects event as first arg";
}
if(!(_39 instanceof _2f)){
throw "removeListenenerNode: expects event as second arg";
}
var _3a=false;
for(var i=0;i<_38.sendsTo.length&&!_3a;i++){
if(_38.sendsTo[i]==_39){
_38.sendsTo.splice(i,1);
_3a=true;
}
}
return _3a;
};
var _3b=function(_3c){
return _32(_3c||[],function(_3d,_3e){
_3d(_3e);
});
};
var _3f=function(){
return _32([],function(_40,_41){
throw ("zeroE : received a value; zeroE should not receive a value; the value was "+_41.value);
});
};
var _42=function(val){
var _43=false;
var evt=_32([],function(_44,_45){
if(_43){
throw ("oneE : received an extra value");
}
_43=true;
_44(_45);
});
window.setTimeout(function(){
_46(evt,val);
},0);
return evt;
};
var _47=function(){
if(arguments.length==0){
return _3f();
}else{
var _48=_b(arguments,0);
return _3b(_48);
}
};
_2f.prototype.mergeE=function(){
var _49=_b(arguments,0);
_49.push(this);
return _3b(_49);
};
_2f.prototype.constantE=function(_4a){
return _32([this],function(_4b,_4c){
_4c.value=_4a;
_4b(_4c);
});
};
var _4d=function(e,v){
return e.constantE(v);
};
var _4e=function(_4f){
var nqs=map(function(n){
var _50=[];
return {q:_50,v:_32([n],function(s,p){
_50.push(p.value);
s(p);
},_4f)};
},_4f);
return _32(map(function(n){
return n.v;
},nqs),function(s,p){
var _51=_17(function(n,acc){
return n.q.length&&acc;
},true,nqs);
if(_51){
p.value=map(function(n){
return n.q.shift();
},nqs);
s(p);
}
});
};
var _52=function(_53,_54,_55){
if(!(_53 instanceof _2f)){
throw "Behavior: expected event as second arg";
}
var _56=this;
this.last=_54;
this.underlyingRaw=_53;
this.underlying=_32([_53],(_55?function(s,p){
_56.last=_55(p.value);
p.value=_56.last;
s(p);
}:function(s,p){
_56.last=p.value;
s(p);
}));
};
_52.prototype=new Object();
var _57=function(){
var evt=_3b();
evt.sendEvent=function(_58){
_2a(new _1f(_29(),_58),evt);
};
return evt;
};
var _46=function(_59,_5a){
if(!(_59 instanceof _2f)){
throw "sendEvent: expected Event as first arg";
}
_2a(new _1f(_29(),_5a),_59);
};
_2f.prototype.bindE=function(k){
var m=this;
var _5b=false;
var _5c=_32([],function(_5d,_5e){
_5d(_5e);
});
_5c.name="bind outE";
var inE=_32([m],function(_5f,_60){
if(_5b){
removeListener(_5b,_5c);
}
_5b=k(_60.value);
if(_5b instanceof _2f){
attachListener(_5b,_5c);
}else{
throw "bindE : expected EventStream";
}
});
inE.name="bind inE";
return _5c;
};
_2f.prototype.mapE=function(f){
if(!(f instanceof Function)){
throw ("mapE : expected a function as the first argument; received "+f);
}
return _32([this],function(_61,_62){
_62.value=f(_62.value);
_61(_62);
});
};
_2f.prototype.notE=function(){
return this.mapE(function(v){
return !v;
});
};
var _63=function(e){
return e.notE();
};
_2f.prototype.filterE=function(_64){
if(!(_64 instanceof Function)){
throw ("filterE : expected predicate; received "+_64);
}
return _32([this],function(_65,_66){
if(_64(_66.value)){
_65(_66);
}
});
};
var _67=function(e,p){
return e.filterE(p);
};
_2f.prototype.onceE=function(){
var _68=false;
return _32([this],function(_69,_6a){
if(!_68){
_68=true;
_69(_6a);
}
});
};
var _6b=function(e){
return e.onceE();
};
_2f.prototype.skipFirstE=function(){
var _6c=false;
return _32([this],function(_6d,_6e){
if(_6c){
_6d(_6e);
}else{
_6c=true;
}
});
};
var _6f=function(e){
return e.skipFirstE();
};
_2f.prototype.collectE=function(_70,_71){
var acc=_70;
return this.mapE(function(n){
var _72=_71(n,acc);
acc=_72;
return _72;
});
};
var _73=function(e,i,f){
return e.collectE(i,f);
};
_2f.prototype.switchE=function(){
return this.bindE(function(v){
return v;
});
};
var _74=function(e){
return e.switchE();
};
_2f.prototype.ifE=function(_75,_76){
var _77=-1;
var _78=false;
_32([this],function(_79,_7a){
_77=_7a.stamp;
_78=_7a.value;
});
return _47(_32([_75],function(_7b,_7c){
if(_78&&(_77==_7c.stamp)){
_7b(_7c);
}
}),_32([_76],function(_7d,_7e){
if(!_78&&(_77==_7e.stamp)){
_7d(_7e);
}
}));
};
var ifE=function(_7f,_80,_81){
if(_7f instanceof _2f){
return _7f.ifE(_80,_81);
}else{
return _7f?_80:_81;
}
};
var _82=function(){
var _83=_b(arguments,0);
var acc=(_83.length>0)?_83[_83.length-1]:_42(true);
for(var i=_83.length-2;i>-1;i--){
acc=ifE(_83[i],acc,_83[i].constantE(false));
}
return acc;
};
_2f.prototype.andE=function(){
var _84=[this].concat(_b(arguments,0));
return _82.apply(this,_84);
};
var orE=function(){
var _85=_b(arguments,0);
var acc=(_85.length>2)?_85[_85.length-1]:_42(false);
for(var i=_85.length-2;i>-1;i--){
acc=ifE(_85[i],_85[i],acc);
}
return acc;
};
_2f.prototype.orE=function(){
var _86=[this].concat(_b(arguments,0));
return orE.apply(this,_86);
};
var _87=function(_88,_89){
var _8a=_3b();
_32([_88],function(s,p){
setTimeout(function(){
_46(_8a,p.value);
},_89);
});
return _8a;
};
_2f.prototype.delayE=function(_8b){
var _8c=this;
if(_8b instanceof _52){
var _8d=_3b();
var _8e={from:_8c,towards:_87(_8c,_8f(_8b))};
var _90=_32([_91(_8b)],function(s,p){
removeListener(_8e.from,_8e.towards);
_8e={from:_8c,towards:_87(_8c,p.value)};
_46(_8d,_8e.towards);
});
var _92=_8d.switchE();
_46(_90,_8f(_8b));
return _92;
}else{
return _87(_8c,_8b);
}
};
var _93=function(_94,_95){
return _94.delayE(_95);
};
var _96=function(fn){
var _97=_b(arguments,0);
var _98=[];
var _99=0;
var _9a=[];
for(var i=0;i<_97.length;i++){
if(_97[i] instanceof _2f){
_9a.push(_97[i]);
_98.push((function(ii){
return function(_9b){
return _9b[ii];
};
})(_99));
_99++;
}else{
_98.push((function(aa){
return function(){
return aa;
};
})(_97[i]));
}
}
var _9c=this;
var _9d=_b(_98,1);
if(_9a.length===0){
return _42(fn.apply(_9c,_97));
}else{
if((_9a.length===1)&&(fn instanceof Function)){
return _9a[0].mapE(function(){
var _9e=arguments;
return fn.apply(_9c,map(function(s){
return s(_9e);
},_9d));
});
}else{
if(_9a.length===1){
return fn.mapE(function(v){
var _9f=arguments;
return v.apply(_9c,map(function(s){
return s(_9f);
},_9d));
});
}else{
if(fn instanceof Function){
return _4e(_9a).mapE(function(arr){
return fn.apply(this,map(function(s){
return s(arr);
},_9d));
});
}else{
if(fn instanceof _2f){
return _4e(_9a).mapE(function(arr){
return arr[0].apply(this,map(function(s){
return s(arr);
},_9d));
});
}else{
throw "unknown mapE case";
}
}
}
}
}
};
_2f.prototype.snapshotE=function(_a0){
return _32([this],function(s,p){
p.value=_8f(_a0);
s(p);
});
};
var _a1=function(_a2,_a3){
return _a2.snapshotE(_a3);
};
_2f.prototype.filterRepeatsE=function(_a4){
var _a5=_a4===undefined?false:true;
var _a6=_a4;
return this.filterE(function(v){
if(!_a5||!(_10(_a6,v))){
_a5=true;
_a6=v;
return true;
}else{
return false;
}
});
};
var _a7=function(_a8,_a9){
return _a8.filterRepeatsE(_a9);
};
var _aa=function(_ab,_ac){
var out=_3b();
_32([_ab],function(){
var _ad=null;
return function(s,p){
if(_ad!==null){
clearTimeout(_ad);
}
_ad=setTimeout(function(){
_ad=null;
_46(out,p.value);
},_ac);
};
}());
return out;
};
_2f.prototype.calmE=function(_ae){
if(_ae instanceof _52){
var out=_3b();
_32([this],function(){
var _af=null;
return function(s,p){
if(_af!==null){
clearTimeout(_af);
}
_af=setTimeout(function(){
_af=null;
_46(out,p.value);
},_8f(_ae));
};
}());
return out;
}else{
return _aa(this,_ae);
}
};
var _b0=function(_b1,_b2){
return _b1.calmE(_b2);
};
_2f.prototype.blindE=function(_b3){
return _32([this],function(){
var _b4=_b3 instanceof _52?function(){
return _8f(_b3);
}:function(){
return _b3;
};
var _b5=(new Date()).getTime()-_b4()-1;
return function(s,p){
var _b6=(new Date()).getTime();
if(_b6-_b5>_b4()){
_b5=_b6;
s(p);
}
};
}());
};
var _b7=function(_b8,_b9){
return _b8.blindE(_b9);
};
_2f.prototype.startsWith=function(_ba){
return new _52(this,_ba);
};
var _bb=function(e,_bc){
if(!(e instanceof _2f)){
throw "startsWith: expected EventStream; received "+e;
}
return e.startsWith(_bc);
};
_52.prototype.valueNow=function(){
return this.last;
};
var _8f=function(_bd){
return _bd.valueNow();
};
_52.prototype.changes=function(){
return this.underlying;
};
var _91=function(_be){
return _be.changes();
};
_52.prototype.switchB=function(){
var _bf=this;
var _c0=_8f(_bf);
var _c1=null;
var _c2=new _3b();
var _c3=_32([_91(_bf)],function(_c4,p){
if(!(p.value instanceof _52)){
throw "switchB: expected Behavior as value of Behavior of first argument";
}
if(_c1!=null){
removeListener(_c1,_c2);
}
_c1=_91(p.value);
attachListener(_c1,_c2);
_46(_c2,_8f(p.value));
});
if(_c0 instanceof _52){
_46(_c3,_c0);
}
return _bb(_c2,_c0 instanceof _52?_8f(_c0):_c0);
};
var _c5=function(b){
return b.switchB();
};
var _c6=function(_c7){
return _bb(_c8(_c7),(new Date()).getTime());
};
var _c9=function(_ca,_cb,_cc){
return _bb(_87(_91(_ca),_cb),_cc);
};
_52.prototype.delayB=function(_cd,_ce){
var _cf=this;
if(_cd instanceof _52){
return _bb(_93(_91(_cf),_cd),arguments.length>3?_ce:_8f(_cf));
}else{
return _c9(_cf,_cd,arguments.length>3?_ce:_8f(_cf));
}
};
var _d0=function(_d1,_d2,_d3){
return _d1.delayB(_d2,_d3);
};
_52.prototype.sendBehavior=function(val){
_46(this.underlyingRaw,val);
};
_52.prototype.sendBehavior=_52.prototype.sendBehavior;
var _d4=function(b,v){
b.sendBehavior(v);
};
_52.prototype.ifB=function(_d5,_d6){
var _d7=this;
if(!(_d5 instanceof _52)){
_d5=_d8(_d5);
}
if(!(_d6 instanceof _52)){
_d6=_d8(_d6);
}
return _d9(function(te,t,f){
return te?t:f;
},_d7,_d5,_d6);
};
var ifB=function(_da,_db,_dc){
if(!(_da instanceof _52)){
_da=_d8(_da);
}
return _da.ifB(_db,_dc);
};
var _dd=function(){
var _de=_b(arguments,0);
return _d9.apply({},[function(){
for(var i=0;i<_de.length;i++){
if(arguments[i]){
return arguments[_de.length+i];
}
}
return undefined;
}].concat(map(function(_df){
return _df[0];
},_de).concat(map(function(_e0){
return _e0[1];
},_de))));
};
var _d8=function(val){
return new _52(_3b(),val);
};
var _d9=function(fn){
var _e1=_b(arguments,1);
var _e2=map(_91,_15(function(v){
return v instanceof _52;
},arguments));
var _e3=function(v){
return v instanceof _52?v.last:v;
};
var ctx=this;
var _e4=function(){
return _e3(fn).apply(ctx,map(_e3,_e1));
};
if(_e2.length==1){
return new _52(_e2[0],_e4(),_e4);
}
var _e5=-1;
var mid=_32(_e2,function(s,p){
if(p.stamp!=_e5){
_e5=p.stamp;
s(p);
}
});
return new _52(mid,_e4(),_e4);
};
_52.prototype.liftB=function(){
var _e6=_b(arguments,0).concat([this]);
return _d9.apply(this,_e6);
};
var _e7=function(){
return _d9.apply({},[function(){
for(var i=0;i<arguments.length;i++){
if(!arguments[i]){
return false;
}
}
return true;
}].concat(_b(arguments,0)));
};
_52.prototype.andB=function(){
return _e7([this].concat(arguments));
};
var orB=function(){
return _d9.apply({},[function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]){
return true;
}
}
return false;
}].concat(_b(arguments,0)));
};
_52.prototype.orB=function(){
return orB([this].concat(arguments));
};
_52.prototype.notB=function(){
return this.liftB(function(v){
return !v;
});
};
var _e8=function(b){
return b.notB();
};
_52.prototype.blindB=function(_e9){
return _91(this).blindE(_e9).startsWith(this.valueNow());
};
var _ea=function(_eb,_ec){
return _eb.blindB(_ec);
};
_52.prototype.calmB=function(_ed){
return this.changes().calmE(_ed).startsWith(this.valueNow());
};
var _ee=function(_ef,_f0){
return _ef.calmB(_f0);
};
var _f1=function(obj,_f2,fn){
if(obj.addEventListener){
obj.addEventListener(_f2,fn,false);
return true;
}else{
if(obj.attachEvent){
return obj.attachEvent("on"+_f2,fn);
}else{
return false;
}
}
};
var _f3=function(_f4,_f5,tag){
var _f6=[];
if((_f5===null)||(_f5===undefined)){
_f5=document;
}
if((tag===null)||(tag===undefined)){
tag="*";
}
var els=_f5.getElementsByTagName(tag);
var _f7=els.length;
var _f8=new RegExp("(^|\\s)"+_f4+"(\\s|$)");
for(var i=0,j=0;i<_f7;i++){
if(_f8.test(els[i].className)){
_f6.push(els[i]);
}
}
return _f6;
};
var _f9=function(_fa,_fb){
if((_fa===null)||(_fa===undefined)){
throw ("swapDom: expected dom node or id, received: "+_fa);
}
var _fc=_fd(_fa);
if(!(_fc.nodeType>0)){
throw ("swapDom expected a Dom node as first arg, received "+_fc);
}
if(_fb){
var _fe=_fd(_fb);
if(!(_fe.nodeType>0)){
throw "swapDom: can only swap with a DOM object";
}
try{
if(_fc.parentNode==null){
return _fe;
}
if(_fe!=_fc){
_fc.parentNode.replaceChild(_fe,_fc);
}
}
catch(e){
throw ("swapDom error in replace call: withMeD: "+_fe+", replaceMe Parent: "+_fc+", "+e+", parent: "+_fc.parentNode);
}
}else{
_fc.parentNode.removeChild(_fc);
}
return _fc;
};
var _fd=function(_ff){
if(typeof (_ff)=="object"){
return _ff;
}else{
if((typeof (_ff)=="null")||(typeof (_ff)=="undefined")){
throw "getObj: expects a Dom obj or Dom id as first arg";
}else{
var res=document.getElementById?document.getElementById(_ff):document.all?document.all[_ff]:document.layers?document.layers[_ff]:(function(){
throw "getObj: flapjax: cannot access object";
})();
if((res===null)||(res===undefined)){
throw ("getObj: no obj to get: "+_ff);
}
return res;
}
}
};
var $=_fd;
var _100=function(_101,_102){
var acc=_fd(_101);
if((_102===null)||(_102===undefined)||(_102.length<1)){
return acc;
}else{
for(var i=0;i<_102.length-1;i++){
acc=acc[_102[i]];
}
return acc;
}
};
var _103=function(_104,_105){
var val=_100(_104,_105);
if(_105&&_105.length>0){
val=val[_105[_105.length-1]];
}
return val;
};
var _106=0;
var _107=function(){
return ++_106;
};
var _108=[];
var _109=function(node){
_108[node.__timerId]();
};
var _10a=function(v){
if(v instanceof _52){
_109(v.underlyingRaw);
}else{
if(v instanceof _2f){
_109(v);
}
}
};
var _10b=function(_10c){
var node=_3b();
node.__timerId=_107();
var fn=function(){
_46(node,(new Date()).getTime());
};
var _10d=setInterval(fn,_10c);
_108[node.__timerId]=function(){
clearInterval(_10d);
};
return node;
};
var _c8=function(_10e){
if(_10e instanceof _52){
var _10f=_3b();
var res=_10f.switchE();
var _110=_10b(_8f(_10e));
_46(_10f,_110);
_32([_91(_10e)],function(_111,p){
_109(_110);
_110=_10b(p.value);
_46(_10f,_110);
});
res.__timerId=_107();
_108[res.__timerId]=function(){
_109[_110]();
return;
};
return res;
}else{
return _10b(_10e);
}
};
var TagB=function(_112,args){
this.resE=_3b();
this.currentTag=document.createElement(_112);
this.extractParameters(args);
this.insertChildrenNodes();
this.styleHooks=[];
this.styleChangedE=_3b();
var ctx=this;
this.styleChangedE.mapE(function(_113){
var _114=ctx.currentTag;
ctx.currentTag=document.createElement(_112);
while(_114.firstChild){
ctx.currentTag.appendChild(_114.removeChild(_114.firstChild));
}
while(ctx.styleHooks.length){
removeListener(ctx.styleHooks.pop(),ctx.styleChangedE);
}
ctx.enstyle(ctx.currentTag,ctx.attribs);
_46(ctx.resE,ctx.currentTag);
});
this.enstyle(this.currentTag,this.attribs);
this.resB=_bb(this.resE,this.currentTag);
};
TagB.prototype={extractParameters:function(args){
this.arrs=[];
var _115=[];
var _116=[];
this.arrs.push(_116);
for(var i=0;i<args.length;i++){
if(args[i] instanceof _52){
var vn=_8f(args[i]);
if(vn instanceof Array){
this.arrs.push(args[i]);
_116=[];
this.arrs.push(_116);
}else{
if(((typeof (vn)=="object")&&(vn.nodeType==1))||(typeof (vn)=="string")||(vn==undefined)){
_116.push(args[i]);
}else{
if(typeof (vn)=="object"){
_115.push(args[i]);
}else{
throw ("createParameterizedTagB: unknown behaviour argument argument "+i);
}
}
}
}else{
if(args[i] instanceof Array){
var arr=args[i];
for(var j=0;j<arr.length;j++){
_116.push(arr[j]);
}
}else{
var vn=args[i];
if(((typeof (vn)=="object")&&(vn.nodeType==1))||(typeof (vn)=="string")||(vn==undefined)){
_116.push(args[i]);
}else{
if(typeof (vn)=="object"){
_115.push(args[i]);
}
}
}
}
}
if(_115.length>1){
throw ("createParameterizedTagB "+tagName+": more than one attribute ("+_115.length+")");
}
this.attribs=_115.length>0?_115[0]:{};
},insertChildrenNodes:function(){
var ctx=this;
function _117(e){
if((typeof (e)=="object")&&(e.nodeType)){
return e;
}else{
if(e==undefined){
return document.createTextNode("");
}else{
return document.createTextNode(e);
}
}
};
function _118(arr){
return map(function(n){
return (n instanceof _52)?_8f(n):n;
},arr);
};
var _119=map(function(){
return [];
},this.arrs);
var _11a=map(_118,_118(this.arrs));
var _11b=_3b();
var _11c=_3b();
function _11d(i,arr){
for(var j=0;j<arr.length;j++){
var _11e=arr[j];
if(_11e instanceof _52){
var _11f=(function(jj){
return _91(_11e).mapE(function(n){
return {index:i,jdex:jj,val:n};
});
})(j);
_119[i].push(_11f);
attachListener(_11f,_11c);
_11e=_8f(_11e);
}
}
};
var _120=_47(_11b.mapE(function(ai){
var i=ai.index;
var _121=ai.val;
while(_119[i].length){
var ln=_119[i].pop();
removeListener(ln,_11c);
}
var _122=map(function(n){
return _117(n);
},_118(_121));
for(var j=0;j<_11a[i].length;j++){
try{
ctx.currentTag.removeChild(_11a[i][j]);
}
catch(e){
}
}
if(_122.length){
var _123=null;
for(var ii=i+1;ii<_11a.length&&!(_11a[ii].length);ii++){
}
if(ii<_11a.length){
_123=_11a[ii][0];
}
for(var j=0;j<_122.length;j++){
ctx.currentTag.insertBefore(_122[j],_123);
}
}
_11a[i]=_122;
_11d(i,_121);
return ctx.currentTag;
}),_11c.mapE(function(ni){
var i=ni.index;
var j=ni.jdex;
var _124=_117(ni.val);
_f9(_11a[i][j],_124);
_11a[i][j]=_124;
return ctx.currentTag;
}));
_120.mapE(function(cc){
_46(ctx.resE,cc);
});
for(var i=0;i<this.arrs.length;i++){
for(var j=0;j<_11a[i].length;j++){
_11a[i][j]=_117(_11a[i][j]);
this.currentTag.appendChild(_11a[i][j]);
}
if(this.arrs[i] instanceof _52){
_11d(i,_8f(this.arrs[i]));
var _125=(function(ii){
return _91(ctx.arrs[ii]).mapE(function(na){
return {index:ii,val:na};
});
})(i);
attachListener(_125,_11b);
}else{
_11d(i,this.arrs[i]);
}
}
},enstyle:function(obj,vals){
if(vals instanceof _52){
if(!(typeof (_8f(vals))=="object")){
throw "enstyle: expected object literal as behaviour value";
}
this.styleHooks.push(_91(vals));
attachListener(_91(vals),this.styleChangedE);
}
var _126=vals instanceof _52?_8f(vals):vals;
if(typeof (_126)=="object"){
for(var i in _126){
if(!(Object.prototype)||!(Object.prototype[i])){
this.enstyleProperty(obj,_126,i);
}
}
}else{
throw "enstyle: expected object literals";
}
},enstyleProperty:function(obj,vals,i){
if(vals[i] instanceof _52){
if(typeof (_8f(vals[i]))=="object"){
this.enstyle(obj[i],vals[i]);
}else{
obj[i]=_8f(vals[i]);
_91(vals[i]).mapE(function(v){
obj[i]=v;
});
}
}else{
if(typeof (vals[i])=="object"){
this.enstyle(obj[i],vals[i]);
}else{
obj[i]=vals[i];
}
}
}};
enstyleStaticProperty=function(obj,_127,_128){
if(typeof (_127[_128])=="object"){
for(var i in _127[_128]){
if(!(Object.prototype)||!(Object.prototype[i])){
enstyleStaticProperty(obj[_128],_127[_128],i);
}
}
}else{
obj[_128]=_127[_128];
if(_128=="checked"){
obj["defaultChecked"]=_127[_128];
}
if(_128=="selected"){
obj["defaultSelected"]=_127[_128];
}
}
};
staticTagMaker=function(_129){
return function(){
var tagD=document.createElement(_129);
if(!(tagD.nodeType>0)){
throw (_129+": invalid tag name");
}
var _12a=[];
for(var i=0;i<arguments.length;i++){
if(arguments[i] instanceof Array){
for(var j=0;j<arguments[i].length;j++){
if(arguments[i][j]){
tagD.appendChild((typeof (arguments[i][j])=="object"&&arguments[i][j].nodeType>0)?arguments[i][j]:document.createTextNode(arguments[i][j]));
}
}
}else{
if(!arguments[i]){
}else{
if((typeof (arguments[i])=="object")&&(arguments[i].nodeType>0)){
tagD.appendChild(arguments[i]);
}else{
if(typeof (arguments[i])=="object"){
_12a.push(arguments[i]);
}else{
tagD.appendChild(document.createTextNode(arguments[i]));
}
}
}
}
}
if(_12a.length==1){
for(var k in _12a[0]){
if(!(Object.prototype)||!(Object.prototype[k])){
enstyleStaticProperty(tagD,_12a[0],k);
}
}
}else{
if(_12a.length>0){
throw "static enstyle: expected object literals";
}
}
return tagD;
};
};
var _12b=["a","b","blockquote","br","button","canvas","div","fieldset","form","font","h1","h2","h3","h4","hr","img","iframe","input","label","legend","li","ol","optgroup","option","p","pre","select","span","strong","table","tbody","td","textarea","tfoot","th","thead","tr","tt","ul"];
_11(function(_12c){
var _12d=_12c.toUpperCase();
this[_12d]=function(){
var _12e=new TagB(_12c,_b(arguments,0));
return _12e.resB;
};
this[_12d+"_"]=staticTagMaker(_12c);
},_12b);
TEXTB=function(strB){
if(!(strB instanceof _52)){
strB=_d8(strB);
}
return _bb(_91(strB).mapE(function(txt){
return document.createTextNode(txt);
}),document.createTextNode(_8f(strB)));
};
var TEXT=function(str){
return document.createTextNode(str);
};
var _12f=function(_130,_131){
if(!(_130 instanceof Array)){
throw "tagRec: expected array of event names as first arg";
}
if(!(_131 instanceof Function)){
throw "tagRec: expected function as second arg";
}
var _132=_130.length;
var _133=[];
var _134=[];
for(var i=0;i<_132;i++){
_133[i]=_3b();
_134[i]=_133[i].switchE();
}
var domB=_131.apply(this,_134);
var _135;
var _136=_32([domB.changes()],function(_137,p){
if(_10(p.value,_135)){
return;
}
_135=p.value;
for(var i=0;i<_132;i++){
_46(_133[i],_138(_135,_130[i]));
}
});
_46(_136,domB.valueNow());
return domB;
};
var _139=function(_13a,_13b){
if(!_13b){
throw "extractEventE : no event name specified";
}
if(!_13a){
throw "extractEventE : no DOM element specified";
}
_13a=_fd(_13a);
var _13c=_3b();
_f1(_13a,_13b,function(evt){
_46(_13c,evt||window.event);
return true;
});
return _13c;
};
var _138=function(domB,_13d){
if(!(domB instanceof _52)){
return _139(domB,_13d);
}else{
var domE=domB.changes();
var _13e=domE.mapE(function(dom){
return _139(dom,_13d);
});
var _13f=_13e.switchE();
_46(domE,domB.valueNow());
return _13f;
}
};
$E=_138;
extractEventsE=function(_140){
var _141=_b(arguments,1);
var _142=map(function(_143){
return _138(_140,_143);
},_141.length===0?[]:_141);
return _47.apply(this,_142);
};
_5=function(_144,_145){
if(!(_144 instanceof _2f)){
throw "extractValueOnEventE: expected Event as first arg";
}
return _91(extractValueOnEventB.apply(this,arguments));
};
extractDomFieldOnEventE=function(_146,_147){
if(!(_146 instanceof _2f)){
throw "extractDomFieldOnEventE: expected Event as first arg";
}
var _148=_b(arguments,2);
var res=_146.mapE(function(){
return _103(_147,_148);
});
return res;
};
_4=function(_149){
return _91(_3.apply(this,arguments));
};
extractValueOnEventB=function(_14a,_14b){
return extractValueStaticB(_14b,_14a);
};
extractValueStaticB=function(_14c,_14d){
var objD;
try{
objD=_fd(_14c);
if(typeof (_14c)=="string"&&objD.id!=_14c){
throw "Make a radio group";
}
}
catch(e){
objD={type:"radio-group",name:_14c};
}
var _14e;
switch(objD.type){
case "checkbox":
return _bb(_a7(extractDomFieldOnEventE(_14d?_14d:extractEventsE(objD,"click","keyup","change"),objD,"checked"),objD.checked),objD.checked);
case "select-one":
_14e=function(_14f){
return objD.selectedIndex>-1?(objD.options[objD.selectedIndex].value?objD.options[objD.selectedIndex].value:objD.options[objD.selectedIndex].innerText):undefined;
};
return _bb(_a7((_14d?_14d:extractEventsE(objD,"click","keyup","change")).mapE(_14e)),_14e(),_14e());
case "select-multiple":
_14e=function(_150){
var res=[];
for(var i=0;i<objD.options.length;i++){
if(objD.options[i].selected){
res.push(objD.options[i].value?objD.options[i].value:objD.options[i].innerText);
}
}
return res;
};
return _bb((_14d?_14d:extractEventsE(objD,"click","keyup","change")).mapE(_14e),_14e());
case "text":
case "textarea":
case "hidden":
case "password":
return _bb(_a7(extractDomFieldOnEventE(_14d?_14d:extractEventsE(objD,"click","keyup","change"),objD,"value"),objD.value),objD.value);
case "button":
return _bb(extractDomFieldOnEventE(_14d?_14d:extractEventsE(objD,"click","keyup","change"),objD,"value"),objD.value);
case "radio":
case "radio-group":
var _151=_15(function(elt){
return (elt.type=="radio")&&(elt.getAttribute("name")==objD.name);
},document.getElementsByTagName("input"));
_14e=objD.type=="radio"?function(_152){
return objD.checked;
}:function(_153){
for(var i=0;i<_151.length;i++){
if(_151[i].checked){
return _151[i].value;
}
}
return undefined;
};
var _154=_14d?_14d:_47.apply(this,map(function(_155){
return extractEventsE(_155,"click","keyup","change");
},_151));
return _bb(_a7(_154.mapE(_14e),_14e()),_14e());
default:
throw ("extractValueStaticB: unknown value type \""+objD.type+"\"");
}
};
_3=function(_156){
if(_156 instanceof _52){
return _d9(function(dom){
return extractValueStaticB(dom);
},_156).switchB();
}else{
return extractValueStaticB(_156);
}
};
$B=_3;
deepStaticUpdate=function(into,from,_157){
var fV=(from instanceof _52)?_8f(from):from;
if(typeof (fV)=="object"){
for(var i in fV){
if(!(Object.prototype)||!(Object.prototype[i])){
deepStaticUpdate(_157?into[_157]:into,fV[i],i);
}
}
}else{
var old=into[_157];
into[_157]=fV;
}
};
deepDynamicUpdate=function(into,from,_158){
var fV=(from instanceof _52)?_8f(from):from;
if(typeof (fV)=="object"){
if(from instanceof _52){
throw "deepDynamicUpdate: dynamic collections not supported";
}
for(var i in fV){
if(!(Object.prototype)||!(Object.prototype[i])){
deepDynamicUpdate(_158?into[_158]:into,fV[i],i);
}
}
}else{
if(from instanceof _52){
_32([_91(from)],function(s,p){
if(_158){
var old=into[_158];
into[_158]=p.value;
}else{
into=p.value;
}
});
}
}
};
insertValue=function(val,_159){
var _15a=_b(arguments,2);
var _15b=_100(_159,_15a);
deepStaticUpdate(_15b,val,_15a?_15a[_15a.length-1]:undefined);
};
_9=function(_15c,_15d){
if(!(_15c instanceof _2f)){
throw "insertValueE: expected Event as first arg";
}
var _15e=_b(arguments,2);
var _15f=_100(_15d,_15e);
_15c.mapE(function(v){
deepStaticUpdate(_15f,v,_15e?_15e[_15e.length-1]:undefined);
});
};
_8=function(_160,_161){
var _162=_b(arguments,2);
var _163=_100(_161,_162);
deepStaticUpdate(_163,_160,_162?_162[_162.length-1]:undefined);
deepDynamicUpdate(_163,_160,_162?_162[_162.length-1]:undefined);
};
_7=function(_164,_165){
if(!(_164 instanceof _2f)){
throw "insertDomE: expected Event as first arg";
}
var objD=_fd(_165);
var res=_164.mapE(function(_166){
if(!((typeof (_166)=="object")&&(_166.nodeType==1))){
_166=_a.SPAN({},_166);
}
_f9(objD,_166);
objD=_166;
return _166;
});
return res;
};
insertDomInternal=function(_167,_168,_169){
switch(_169){
case undefined:
case null:
case "over":
_f9(_167,_168);
break;
case "before":
_167.parentNode.insertBefore(_168,_167);
break;
case "after":
if(_167.nextSibling){
_167.parentNode.insertBefore(_168,_167.nextSibling);
}else{
_167.parentNode.appendChild(_168);
}
break;
case "leftMost":
if(_167.parentNode.firstChild){
_167.parentNode.insertBefore(_168,_167.parentNode.firstChild);
}else{
_167.parentNode.appendChild(_168);
}
break;
case "rightMost":
_167.parentNode.appendChild(_168);
break;
case "beginning":
if(_167.firstChild){
_167.insertBefore(_168,_167.firstChild);
}else{
_167.appendChild(_168);
}
break;
case "end":
_167.appendChild(_168);
break;
default:
throw ("domInsert: unknown position: "+_169);
}
};
insertDom=function(_16a,hook,_16b){
insertDomInternal(_fd(hook),((typeof (_16a)=="object")&&(_16a.nodeType>0))?_16a:document.createTextNode(_16a),_16b);
};
_6=function(_16c,_16d,_16e){
if(!(_16c instanceof _52)){
_16c=_d8(_16c);
}
var _16f=_d9(function(d){
if((typeof (d)=="object")&&(d.nodeType>0)){
return d;
}else{
var res=document.createElement("span");
res.appendChild(document.createTextNode(d));
return res;
}
},_16c);
var _170=_8f(_16f);
if(!((typeof (_170)=="object")&&(_170.nodeType==1))){
throw ("insertDomB: initial value conversion failed: "+_170);
}
insertDomInternal(_16d===null||_16d===undefined?_fd(_170.getAttribute("id")):_fd(_16d),_170,_16e);
var resB=_bb(_7(_91(_16f),_170),_170);
return resB;
};
_2=function(id,_171){
return _bb(_32(_171 instanceof _52?[_91(_171)]:[],function(s,p){
p.value=_fd(id);
s(p);
}),_fd(id));
};
var _172=function(elem){
return _138(elem,"mousemove").mapE(function(evt){
if(evt.pageX|evt.pageY){
return {left:evt.pageX,top:evt.pageY};
}else{
if(evt.clientX||evt.clientY){
return {left:evt.clientX+document.body.scrollLeft,top:evt.clientY+document.body.scrollTop};
}else{
return {left:0,top:0};
}
}
});
};
var _173=function(elem){
return _172(elem).startsWith({left:0,top:0});
};
var _174=function(elem){
return _d9(function(v){
return v.left;
},_173(elem));
};
var _175=function(elem){
return _173(elem).liftB(function(v){
return v.top;
});
};
var _176=function(elem){
return _138(elem,"click");
};
var _177=function(_178){
var _179=_178.toLowerCase();
var _17a=[];
var _17b=window.location.href;
var _17c=(_17b.indexOf("#")>-1)?_17b.indexOf("#"):_17b.length;
if(_17b.indexOf("?")>-1){
var _17d=_17b.substring(_17b.indexOf("?")+1,_17c);
map(function(qp){
var eq=qp.indexOf("=");
var _17e=qp.substr(0,eq+1).toLowerCase();
if(_17e==_179+"="){
_17a.push(decodeURIComponent(qp.substr(eq+1)));
}
},_17d.split("&"));
}
if(_17a.length==0){
return undefined;
}else{
if(_17a.length==1){
return _17a[0];
}else{
return _17a;
}
}
};
var _17f=function(name){
var _180=name+"=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var co=ca[i];
while(co.charAt(0)==" "){
co=co.substring(1,co.length);
}
if(co.indexOf(_180)===0){
return co.substring(_180.length,co.length);
}
}
return undefined;
};
var _181=0;
var _182=function(_183){
var _184=_fd(_183);
_184.parentNode.removeChild(_184);
};
var _185=function(url,fn,_186){
var _187=document.createElement("script");
_187.src=url;
var _188="scriptFnRPC"+_181++;
_187.setAttribute("id",_188);
document.getElementsByTagName("head").item(0).appendChild(_187);
var _189={};
var _18a=function(){
eval("try { if ("+_186+"!== undefined) {var stat = "+_186+";}} catch (e) {}");
if(stat!==undefined){
eval(_186+" = undefined;");
clearInterval(_189.timer);
clearInterval(_189.timeout);
if(fn instanceof Function){
fn(stat);
}
_182(_188);
}
};
_189.timer=setInterval(_18a,3500);
_189.timeout=setTimeout(function(){
try{
clearInterval(_189.timer);
}
catch(e){
}
},5000);
};
var _18b=function(_18c){
var _18d=_57();
_18c.mapE(function(_18e){
_185(_18e.url,function(val){
_18d.sendEvent(val);
},_18e.globalArg);
});
return _18d;
};
var _18f=function(_190,url,body,_191,_192,_193){
var xhr;
if(_192){
xhr=new FlashXMLHttpRequest();
xhr.onload=function(){
_193(xhr);
};
}else{
if(window.XMLHttpRequest&&!(window.ActiveXObject)){
xhr=new window.XMLHttpRequest();
xhr.onload=function(){
_193(xhr);
};
}else{
if(window.ActiveXObject){
try{
xhr=new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e){
xhr=new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.onreadystatechange=function(){
if(xhr.readyState==4){
_193(xhr);
}
};
}
}
}
xhr.open(_190,url,_191);
if(_190=="POST"){
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
xhr.send(body);
return xhr;
};
var _194=function(obj){
var str="";
for(var _195 in obj){
if(typeof (obj[_195])!=="function"){
if(str!=""){
str+="&";
}
str+=_195+"="+encodeURIComponent(obj[_195]);
}
}
return str;
};
var _196=function(str){
try{
return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(str.replace(/"(\\.|[^"\\])*"/g,"")))&&eval("("+str+")");
}
catch(e){
throw "cannot parse JSON string: "+e;
}
};
var _197=(function(){
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};
var s={array:function(x){
var a=["["],b,f,i,l=x.length,v;
for(i=0;i<l;i+=1){
v=x[i];
f=s[typeof v];
if(f){
v=f(v);
if(typeof v=="string"){
if(b){
a[a.length]=",";
}
a[a.length]=v;
b=true;
}
}
}
a[a.length]="]";
return a.join("");
},"boolean":function(x){
return String(x);
},"null":function(x){
return "null";
},number:function(x){
return isFinite(x)?String(x):"null";
},object:function(x){
if(x){
if(x instanceof Array){
return s.array(x);
}
var a=["{"],b,f,i,v;
for(i in x){
v=x[i];
f=s[typeof v];
if(f){
v=f(v);
if(typeof v=="string"){
if(b){
a[a.length]=",";
}
a.push(s.string(i),":",v);
b=true;
}
}
}
a[a.length]="}";
return a.join("");
}
return "null";
},string:function(x){
if(/["\\\x00-\x1f]/.test(x)){
x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){
var c=m[b];
if(c){
return c;
}
c=b.charCodeAt();
return "\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16);
});
}
return "\""+x+"\"";
}};
return function(val){
var f=s[typeof val];
if(f){
return f(val);
}else{
throw "parseJSON: unknown object type: "+(typeof val);
}
};
})();
var _198=function(_199,_19a){
var _19b=_57();
_19a.mapE(function(obj){
var body="";
var _19c="GET";
var url=obj.url;
var _19d=obj.request?obj.request:(obj.fields?"post":"get");
if(obj.request=="get"){
url+="?"+_194(obj.fields);
body="";
_19c="GET";
}else{
if(obj.request=="post"){
body=_197(obj.fields);
_19c="POST";
}else{
if(obj.request=="rawPost"){
body=obj.body;
_19c="POST";
}else{
if(obj.request=="rest"){
body=_194(obj.fields);
_19c="POST";
}else{
throw ("Invalid request type: "+obj.request);
}
}
}
}
var _19e=obj.async;
var xhr;
if(obj.response=="json"){
xhr=_18f(_19c,url,body,_19e,_199,function(xhr){
_19b.sendEvent(_196(xhr.responseText));
});
}else{
if(obj.response=="xml"){
_18f(_19c,url,body,_19e,_199,function(xhr){
_19b.sendEvent(xhr.responseXML);
});
}else{
if(obj.response=="plain"||!obj.response){
_18f(_19c,url,body,_19e,_199,function(xhr){
_19b.sendEvent(xhr.responseText);
});
}else{
throw ("Unknown response format: "+obj.response);
}
}
}
});
return _19b;
};
var _19f=function(_1a0){
return _198(false,_1a0);
};
var _1a1=function(_1a2){
return _198(true,_1a2);
};
var _1a3=function(_1a4){
var _1a5=0,_1a6=0;
do{
_1a5+=_1a4.offsetTop||0;
_1a6+=_1a4.offsetLeft||0;
_1a4=_1a4.offsetParent;
}while(_1a4);
return {left:_1a6,top:_1a5};
};
var _1a7=function(_1a8){
var init=_8f(_1a8);
var _1a9=null;
var _1aa=_3b();
var _1ab=_32([_91(_1a8)],function(_1ac,p){
if(_1a9!=null){
removeListener(_1a9,_1aa);
_1a9=null;
}
if(p.value instanceof _52){
_1a9=_91(p.value);
attachListener(_1a9,_1aa);
_46(_1aa,_8f(p.value));
}else{
_46(_1aa,p.value);
}
});
if(init instanceof _52){
_46(_1ab,init);
}
return _bb(_1aa,init instanceof _52?_8f(init):init);
};
var _1ad=function(_1ae,_1af){
_6(_1a7(_1ae),_1af,"over");
};
var _1b0=function(_1b1,_1b2,_1b3){
console.log(_1b1);
if(typeof (_1b1)=="object"){
for(var ix in _1b1){
if(Object.prototype&&Object.prototype[ix]){
continue;
}
if(_1b1[ix] instanceof _52){
_8(_1a7(_1b1[ix]),_1b2,_1b3,ix);
}else{
_8(_d8(_1b1[ix]),_1b2,_1b3,ix);
}
}
}else{
_8(_1a7(_1b1),_1b2,_1b3);
}
};
var _1b4=function(f){
checkBehavior:
{for(var i=0;i<arguments.length;i++){
if(arguments[i] instanceof _52){
break checkBehavior;
}
}
return f.apply(this,_b(arguments,1));
}
var _1b5=_3b();
var r=_d9.apply(this,arguments);
if(!(r instanceof _52)){
return r;
}
if(r.valueNow() instanceof _2f){
return r.valueNow();
}else{
return _1a7(r);
}
};
var _1b6=function(f){
return _1b4.apply(this,arguments);
};
var _1b7=function(test,cons,alt){
if(test instanceof _52){
return test.liftB(function(v){
return v?cons:alt;
}).switchB();
}else{
return test?cons:alt;
}
};
var _1b8=function(_1b9){
return function(v){
if(v instanceof _52){
if(v.valueNow() instanceof _52){
return _1b8(_1b9)(v.valueNow());
}else{
attachListener(v.changes(),_1b9(v.changes()));
return _1b8()(v.valueNow());
}
}else{
if(typeof v=="function"){
return function(){
var r=v.apply(this,arguments);
return _1b8(_1b9)(r);
};
}else{
return v;
}
}
};
};
var _1ba=function(x){
if(x instanceof _52){
return _1ba(x.valueNow());
}else{
if(typeof (x)=="function"){
return function(){
return _1ba(x.apply(this,arguments));
};
}else{
return x;
}
}
};
var map1=function(f,src){
var dest=[];
for(var i=0;i<src.length;i++){
dest.push(f(src[i]));
}
return dest;
};
var _1bb=function(v){
if(typeof v=="function"){
return function(){
var _1bc=_b(arguments,0);
var srcs=[];
var _1bd=function(src){
srcs.push(src);
return _1be;
};
var _1bf=_3b();
var _1be=_32([],function(send,_1c0){
map1(function(src){
removeListener(src,_1be);
},srcs);
srcs=[];
var args=map1(_1b8(_1bd),_1bc);
var r=v.apply(this,args);
_46(_1bf,r);
});
return _1bf.startsWith(v.apply(this,map1(_1b8(_1bd),_1bc)));
};
}else{
return v;
}
};
this.attachListener=attachListener;
this.removeListener=removeListener;
try{
if(_d8!==undefined){
this.constantB=_d8;
}
}
catch(_){
}
try{
if(_d0!==undefined){
this.delayB=_d0;
}
}
catch(_){
}
try{
if(_ee!==undefined){
this.calmB=_ee;
}
}
catch(_){
}
try{
if(_ea!==undefined){
this.blindB=_ea;
}
}
catch(_){
}
try{
if(_8f!==undefined){
this.valueNow=_8f;
}
}
catch(_){
}
try{
if(_c5!==undefined){
this.switchB=_c5;
}
}
catch(_){
}
try{
if(_e7!==undefined){
this.andB=_e7;
}
}
catch(_){
}
try{
if(orB!==undefined){
this.orB=orB;
}
}
catch(_){
}
try{
if(_e8!==undefined){
this.notB=_e8;
}
}
catch(_){
}
try{
if(_d9!==undefined){
this.liftB=_d9;
}
}
catch(_){
}
try{
if(_dd!==undefined){
this.condB=_dd;
}
}
catch(_){
}
try{
if(ifB!==undefined){
this.ifB=ifB;
}
}
catch(_){
}
try{
if(_c6!==undefined){
this.timerB=_c6;
}
}
catch(_){
}
try{
if(_10a!==undefined){
this.disableTimer=_10a;
}
}
catch(_){
}
try{
if(_6!==undefined){
this.insertDomB=_6;
}
}
catch(_){
}
try{
if(_175!==undefined){
this.mouseTopB=_175;
}
}
catch(_){
}
try{
if(_174!==undefined){
this.mouseLeftB=_174;
}
}
catch(_){
}
try{
if(_173!==undefined){
this.mouseB=_173;
}
}
catch(_){
}
try{
if(_3!==undefined){
this.extractValueB=_3;
}
}
catch(_){
}
try{
if($B!==undefined){
this.$B=$B;
}
}
catch(_){
}
try{
if(_4!==undefined){
this.extractValueE=_4;
}
}
catch(_){
}
try{
if(_138!==undefined){
this.extractEventE=_138;
}
}
catch(_){
}
try{
if($E!==undefined){
this.$E=$E;
}
}
catch(_){
}
try{
if(_176!==undefined){
this.clicksE=_176;
}
}
catch(_){
}
try{
if(_c8!==undefined){
this.timerE=_c8;
}
}
catch(_){
}
try{
if(_5!==undefined){
this.extractValueOnEventE=_5;
}
}
catch(_){
}
try{
if(_2!==undefined){
this.extractIdB=_2;
}
}
catch(_){
}
try{
if(_7!==undefined){
this.insertDomE=_7;
}
}
catch(_){
}
try{
if(_9!==undefined){
this.insertValueE=_9;
}
}
catch(_){
}
try{
if(_8!==undefined){
this.insertValueB=_8;
}
}
catch(_){
}
try{
if(_12f!==undefined){
this.tagRec=_12f;
}
}
catch(_){
}
try{
if(_19f!==undefined){
this.getWebServiceObjectE=_19f;
}
}
catch(_){
}
try{
if(_1a1!==undefined){
this.getForeignWebServiceObjectE=_1a1;
}
}
catch(_){
}
try{
if(_18b!==undefined){
this.evalForeignScriptValE=_18b;
}
}
catch(_){
}
try{
if(_42!==undefined){
this.oneE=_42;
}
}
catch(_){
}
try{
if(_3f!==undefined){
this.zeroE=_3f;
}
}
catch(_){
}
try{
if(_96!==undefined){
this.mapE=_96;
}
}
catch(_){
}
try{
if(_47!==undefined){
this.mergeE=_47;
}
}
catch(_){
}
try{
if(_74!==undefined){
this.switchE=_74;
}
}
catch(_){
}
try{
if(_67!==undefined){
this.filterE=_67;
}
}
catch(_){
}
try{
if(ifE!==undefined){
this.ifE=ifE;
}
}
catch(_){
}
try{
if(_4d!==undefined){
this.constantE=_4d;
}
}
catch(_){
}
try{
if(_73!==undefined){
this.collectE=_73;
}
}
catch(_){
}
try{
if(_82!==undefined){
this.andE=_82;
}
}
catch(_){
}
try{
if(orE!==undefined){
this.orE=orE;
}
}
catch(_){
}
try{
if(_63!==undefined){
this.notE=_63;
}
}
catch(_){
}
try{
if(_a7!==undefined){
this.filterRepeatsE=_a7;
}
}
catch(_){
}
try{
if(_57!==undefined){
this.receiverE=_57;
}
}
catch(_){
}
try{
if(_46!==undefined){
this.sendEvent=_46;
}
}
catch(_){
}
try{
if(_a1!==undefined){
this.snapshotE=_a1;
}
}
catch(_){
}
try{
if(_6b!==undefined){
this.onceE=_6b;
}
}
catch(_){
}
try{
if(_6f!==undefined){
this.skipFirstE=_6f;
}
}
catch(_){
}
try{
if(_93!==undefined){
this.delayE=_93;
}
}
catch(_){
}
try{
if(_b7!==undefined){
this.blindE=_b7;
}
}
catch(_){
}
try{
if(_b0!==undefined){
this.calmE=_b0;
}
}
catch(_){
}
try{
if(_bb!==undefined){
this.startsWith=_bb;
}
}
catch(_){
}
try{
if(_91!==undefined){
this.changes=_91;
}
}
catch(_){
}
try{
if(_f3!==undefined){
this.getElementsByClass=_f3;
}
}
catch(_){
}
try{
if($$!==undefined){
this.$$=$$;
}
}
catch(_){
}
try{
if(_fd!==undefined){
this.getObj=_fd;
}
}
catch(_){
}
try{
if($!==undefined){
this.$=$;
}
}
catch(_){
}
try{
if(_17f!==undefined){
this.readCookie=_17f;
}
}
catch(_){
}
try{
if(_f9!==undefined){
this.swapDom=_f9;
}
}
catch(_){
}
try{
if(_177!==undefined){
this.getURLParam=_177;
}
}
catch(_){
}
try{
if(_1a3!==undefined){
this.cumulativeOffset=_1a3;
}
}
catch(_){
}
try{
if(map!==undefined){
this.map=map;
}
}
catch(_){
}
try{
if(A!==undefined){
this.A=A;
}
}
catch(_){
}
try{
if(B!==undefined){
this.B=B;
}
}
catch(_){
}
try{
if(BLOCKQUOTE!==undefined){
this.BLOCKQUOTE=BLOCKQUOTE;
}
}
catch(_){
}
try{
if(BR!==undefined){
this.BR=BR;
}
}
catch(_){
}
try{
if(BUTTON!==undefined){
this.BUTTON=BUTTON;
}
}
catch(_){
}
try{
if(CANVAS!==undefined){
this.CANVAS=CANVAS;
}
}
catch(_){
}
try{
if(DIV!==undefined){
this.DIV=DIV;
}
}
catch(_){
}
try{
if(FIELDSET!==undefined){
this.FIELDSET=FIELDSET;
}
}
catch(_){
}
try{
if(FORM!==undefined){
this.FORM=FORM;
}
}
catch(_){
}
try{
if(FONT!==undefined){
this.FONT=FONT;
}
}
catch(_){
}
try{
if(H1!==undefined){
this.H1=H1;
}
}
catch(_){
}
try{
if(H2!==undefined){
this.H2=H2;
}
}
catch(_){
}
try{
if(H3!==undefined){
this.H3=H3;
}
}
catch(_){
}
try{
if(H4!==undefined){
this.H4=H4;
}
}
catch(_){
}
try{
if(HR!==undefined){
this.HR=HR;
}
}
catch(_){
}
try{
if(IMG!==undefined){
this.IMG=IMG;
}
}
catch(_){
}
try{
if(IFRAME!==undefined){
this.IFRAME=IFRAME;
}
}
catch(_){
}
try{
if(INPUT!==undefined){
this.INPUT=INPUT;
}
}
catch(_){
}
try{
if(LABEL!==undefined){
this.LABEL=LABEL;
}
}
catch(_){
}
try{
if(LEGEND!==undefined){
this.LEGEND=LEGEND;
}
}
catch(_){
}
try{
if(LI!==undefined){
this.LI=LI;
}
}
catch(_){
}
try{
if(OL!==undefined){
this.OL=OL;
}
}
catch(_){
}
try{
if(OPTGROUP!==undefined){
this.OPTGROUP=OPTGROUP;
}
}
catch(_){
}
try{
if(OPTION!==undefined){
this.OPTION=OPTION;
}
}
catch(_){
}
try{
if(P!==undefined){
this.P=P;
}
}
catch(_){
}
try{
if(PRE!==undefined){
this.PRE=PRE;
}
}
catch(_){
}
try{
if(SELECT!==undefined){
this.SELECT=SELECT;
}
}
catch(_){
}
try{
if(SPAN!==undefined){
this.SPAN=SPAN;
}
}
catch(_){
}
try{
if(STRONG!==undefined){
this.STRONG=STRONG;
}
}
catch(_){
}
try{
if(TABLE!==undefined){
this.TABLE=TABLE;
}
}
catch(_){
}
try{
if(TBODY!==undefined){
this.TBODY=TBODY;
}
}
catch(_){
}
try{
if(TD!==undefined){
this.TD=TD;
}
}
catch(_){
}
try{
if(TEXTAREA!==undefined){
this.TEXTAREA=TEXTAREA;
}
}
catch(_){
}
try{
if(TFOOT!==undefined){
this.TFOOT=TFOOT;
}
}
catch(_){
}
try{
if(TH!==undefined){
this.TH=TH;
}
}
catch(_){
}
try{
if(THEAD!==undefined){
this.THEAD=THEAD;
}
}
catch(_){
}
try{
if(TR!==undefined){
this.TR=TR;
}
}
catch(_){
}
try{
if(TT!==undefined){
this.TT=TT;
}
}
catch(_){
}
try{
if(UL!==undefined){
this.UL=UL;
}
}
catch(_){
}
try{
if(TEXT!==undefined){
this.TEXT=TEXT;
}
}
catch(_){
}
try{
if(A_!==undefined){
this.A_=A_;
}
}
catch(_){
}
try{
if(B_!==undefined){
this.B_=B_;
}
}
catch(_){
}
try{
if(BLOCKQUOTE_!==undefined){
this.BLOCKQUOTE_=BLOCKQUOTE_;
}
}
catch(_){
}
try{
if(BR_!==undefined){
this.BR_=BR_;
}
}
catch(_){
}
try{
if(BUTTON_!==undefined){
this.BUTTON_=BUTTON_;
}
}
catch(_){
}
try{
if(CANVAS_!==undefined){
this.CANVAS_=CANVAS_;
}
}
catch(_){
}
try{
if(DIV_!==undefined){
this.DIV_=DIV_;
}
}
catch(_){
}
try{
if(FIELDSET_!==undefined){
this.FIELDSET_=FIELDSET_;
}
}
catch(_){
}
try{
if(FORM_!==undefined){
this.FORM_=FORM_;
}
}
catch(_){
}
try{
if(FONT_!==undefined){
this.FONT_=FONT_;
}
}
catch(_){
}
try{
if(H1_!==undefined){
this.H1_=H1_;
}
}
catch(_){
}
try{
if(H2_!==undefined){
this.H2_=H2_;
}
}
catch(_){
}
try{
if(H3_!==undefined){
this.H3_=H3_;
}
}
catch(_){
}
try{
if(H4_!==undefined){
this.H4_=H4_;
}
}
catch(_){
}
try{
if(HR_!==undefined){
this.HR_=HR_;
}
}
catch(_){
}
try{
if(IMG_!==undefined){
this.IMG_=IMG_;
}
}
catch(_){
}
try{
if(IFRAME_!==undefined){
this.IFRAME_=IFRAME_;
}
}
catch(_){
}
try{
if(INPUT_!==undefined){
this.INPUT_=INPUT_;
}
}
catch(_){
}
try{
if(LABEL_!==undefined){
this.LABEL_=LABEL_;
}
}
catch(_){
}
try{
if(LEGEND_!==undefined){
this.LEGEND_=LEGEND_;
}
}
catch(_){
}
try{
if(LI_!==undefined){
this.LI_=LI_;
}
}
catch(_){
}
try{
if(OL_!==undefined){
this.OL_=OL_;
}
}
catch(_){
}
try{
if(OPTGROUP_!==undefined){
this.OPTGROUP_=OPTGROUP_;
}
}
catch(_){
}
try{
if(OPTION_!==undefined){
this.OPTION_=OPTION_;
}
}
catch(_){
}
try{
if(P_!==undefined){
this.P_=P_;
}
}
catch(_){
}
try{
if(PRE_!==undefined){
this.PRE_=PRE_;
}
}
catch(_){
}
try{
if(SELECT_!==undefined){
this.SELECT_=SELECT_;
}
}
catch(_){
}
try{
if(SPAN_!==undefined){
this.SPAN_=SPAN_;
}
}
catch(_){
}
try{
if(STRONG_!==undefined){
this.STRONG_=STRONG_;
}
}
catch(_){
}
try{
if(TABLE_!==undefined){
this.TABLE_=TABLE_;
}
}
catch(_){
}
try{
if(TBODY_!==undefined){
this.TBODY_=TBODY_;
}
}
catch(_){
}
try{
if(TD_!==undefined){
this.TD_=TD_;
}
}
catch(_){
}
try{
if(TEXTAREA_!==undefined){
this.TEXTAREA_=TEXTAREA_;
}
}
catch(_){
}
try{
if(TFOOT_!==undefined){
this.TFOOT_=TFOOT_;
}
}
catch(_){
}
try{
if(TH_!==undefined){
this.TH_=TH_;
}
}
catch(_){
}
try{
if(THEAD_!==undefined){
this.THEAD_=THEAD_;
}
}
catch(_){
}
try{
if(TR_!==undefined){
this.TR_=TR_;
}
}
catch(_){
}
try{
if(TT_!==undefined){
this.TT_=TT_;
}
}
catch(_){
}
try{
if(UL_!==undefined){
this.UL_=UL_;
}
}
catch(_){
}
try{
if(TEXT_!==undefined){
this.TEXT_=TEXT_;
}
}
catch(_){
}
try{
if(_17!==undefined){
this.fold=_17;
}
}
catch(_){
}
try{
if(map!==undefined){
this.map=map;
}
}
catch(_){
}
try{
if(_15!==undefined){
this.filter=_15;
}
}
catch(_){
}
try{
if(_12!==undefined){
this.member=_12;
}
}
catch(_){
}
try{
if(_b!==undefined){
this.slice=_b;
}
}
catch(_){
}
try{
if(_11!==undefined){
this.forEach=_11;
}
}
catch(_){
}
try{
if(_1ad!==undefined){
this.compilerInsertDomB=_1ad;
}
}
catch(_){
}
try{
if(_1b0!==undefined){
this.compilerInsertValueB=_1b0;
}
}
catch(_){
}
try{
if(_1b4!==undefined){
this.compilerLift=_1b4;
}
}
catch(_){
}
try{
if(_1b6!==undefined){
this.compilerCall=_1b6;
}
}
catch(_){
}
try{
if(_1b7!==undefined){
this.compilerIf=_1b7;
}
}
catch(_){
}
try{
if(_1bb!==undefined){
this.compilerUnbehavior=_1bb;
}
}
catch(_){
}
try{
if(_1ba!==undefined){
this.compilerEventStreamArg=_1ba;
}
}
catch(_){
}
try{
if(_52!==undefined){
this.Behavior=_52;
}
}
catch(_){
}
try{
if(_2f!==undefined){
this.EventStream=_2f;
}
}
catch(_){
}
}).apply(_1,[]);
this.constantB=_1.constantB;
this.delayB=_1.delayB;
this.calmB=_1.calmB;
this.blindB=_1.blindB;
this.valueNow=_1.valueNow;
this.switchB=_1.switchB;
this.andB=_1.andB;
this.orB=_1.orB;
this.notB=_1.notB;
this.liftB=_1.liftB;
this.condB=_1.condB;
this.ifB=_1.ifB;
this.timerB=_1.timerB;
this.disableTimer=_1.disableTimer;
this.insertDomB=_1.insertDomB;
this.mouseTopB=_1.mouseTopB;
this.mouseLeftB=_1.mouseLeftB;
this.mouseB=_1.mouseB;
this.extractValueB=_1.extractValueB;
this.$B=_1.$B;
this.extractValueE=_1.extractValueE;
this.extractEventE=_1.extractEventE;
this.$E=_1.$E;
this.clicksE=_1.clicksE;
this.timerE=_1.timerE;
this.extractValueOnEventE=_1.extractValueOnEventE;
this.extractIdB=_1.extractIdB;
this.insertDomE=_1.insertDomE;
this.insertValueE=_1.insertValueE;
this.insertValueB=_1.insertValueB;
this.tagRec=_1.tagRec;
this.getWebServiceObjectE=_1.getWebServiceObjectE;
this.getForeignWebServiceObjectE=_1.getForeignWebServiceObjectE;
this.evalForeignScriptValE=_1.evalForeignScriptValE;
this.oneE=_1.oneE;
this.zeroE=_1.zeroE;
this.mapE=_1.mapE;
this.mergeE=_1.mergeE;
this.switchE=_1.switchE;
this.filterE=_1.filterE;
this.ifE=_1.ifE;
this.constantE=_1.constantE;
this.collectE=_1.collectE;
this.andE=_1.andE;
this.orE=_1.orE;
this.notE=_1.notE;
this.filterRepeatsE=_1.filterRepeatsE;
this.receiverE=_1.receiverE;
this.sendEvent=_1.sendEvent;
this.snapshotE=_1.snapshotE;
this.onceE=_1.onceE;
this.skipFirstE=_1.skipFirstE;
this.delayE=_1.delayE;
this.blindE=_1.blindE;
this.calmE=_1.calmE;
this.startsWith=_1.startsWith;
this.changes=_1.changes;
this.getElementsByClass=_1.getElementsByClass;
this.$$=_1.$$;
this.getObj=_1.getObj;
this.$=_1.$;
this.readCookie=_1.readCookie;
this.swapDom=_1.swapDom;
this.getURLParam=_1.getURLParam;
this.cumulativeOffset=_1.cumulativeOffset;
this.map=_1.map;
this.A=_1.A;
this.B=_1.B;
this.BLOCKQUOTE=_1.BLOCKQUOTE;
this.BR=_1.BR;
this.BUTTON=_1.BUTTON;
this.CANVAS=_1.CANVAS;
this.DIV=_1.DIV;
this.FIELDSET=_1.FIELDSET;
this.FORM=_1.FORM;
this.FONT=_1.FONT;
this.H1=_1.H1;
this.H2=_1.H2;
this.H3=_1.H3;
this.H4=_1.H4;
this.HR=_1.HR;
this.IMG=_1.IMG;
this.IFRAME=_1.IFRAME;
this.INPUT=_1.INPUT;
this.LABEL=_1.LABEL;
this.LEGEND=_1.LEGEND;
this.LI=_1.LI;
this.OL=_1.OL;
this.OPTGROUP=_1.OPTGROUP;
this.OPTION=_1.OPTION;
this.P=_1.P;
this.PRE=_1.PRE;
this.SELECT=_1.SELECT;
this.SPAN=_1.SPAN;
this.STRONG=_1.STRONG;
this.TABLE=_1.TABLE;
this.TBODY=_1.TBODY;
this.TD=_1.TD;
this.TEXTAREA=_1.TEXTAREA;
this.TFOOT=_1.TFOOT;
this.TH=_1.TH;
this.THEAD=_1.THEAD;
this.TR=_1.TR;
this.TT=_1.TT;
this.UL=_1.UL;
this.TEXT=_1.TEXT;
this.A_=_1.A_;
this.B_=_1.B_;
this.BLOCKQUOTE_=_1.BLOCKQUOTE_;
this.BR_=_1.BR_;
this.BUTTON_=_1.BUTTON_;
this.CANVAS_=_1.CANVAS_;
this.DIV_=_1.DIV_;
this.FIELDSET_=_1.FIELDSET_;
this.FORM_=_1.FORM_;
this.FONT_=_1.FONT_;
this.H1_=_1.H1_;
this.H2_=_1.H2_;
this.H3_=_1.H3_;
this.H4_=_1.H4_;
this.HR_=_1.HR_;
this.IMG_=_1.IMG_;
this.IFRAME_=_1.IFRAME_;
this.INPUT_=_1.INPUT_;
this.LABEL_=_1.LABEL_;
this.LEGEND_=_1.LEGEND_;
this.LI_=_1.LI_;
this.OL_=_1.OL_;
this.OPTGROUP_=_1.OPTGROUP_;
this.OPTION_=_1.OPTION_;
this.P_=_1.P_;
this.PRE_=_1.PRE_;
this.SELECT_=_1.SELECT_;
this.SPAN_=_1.SPAN_;
this.STRONG_=_1.STRONG_;
this.TABLE_=_1.TABLE_;
this.TBODY_=_1.TBODY_;
this.TD_=_1.TD_;
this.TEXTAREA_=_1.TEXTAREA_;
this.TFOOT_=_1.TFOOT_;
this.TH_=_1.TH_;
this.THEAD_=_1.THEAD_;
this.TR_=_1.TR_;
this.TT_=_1.TT_;
this.UL_=_1.UL_;
this.TEXT_=_1.TEXT_;
this.fold=_1.fold;
this.map=_1.map;
this.filter=_1.filter;
this.member=_1.member;
this.slice=_1.slice;
this.forEach=_1.forEach;
this.compilerInsertDomB=_1.compilerInsertDomB;
this.compilerInsertValueB=_1.compilerInsertValueB;
this.compilerLift=_1.compilerLift;
this.compilerCall=_1.compilerCall;
this.compilerIf=_1.compilerIf;
this.compilerUnbehavior=_1.compilerUnbehavior;
this.compilerEventStreamArg=_1.compilerEventStreamArg;
window.flapjax={};
for(var ix in _1){
window.flapjax[ix]=_1[ix];
}
})();

