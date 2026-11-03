"use strict";
(function(){
var _0xa1b2=function(_0xc3){return _0xc3*2===_0xc3+_0xc3;};
var _0xd4e5=[function(){
var _0xf6g7=window,_0xh8i9=navigator,_0xj0k1=screen;
var _0xl2m3=[414,896];
var _0xn4o5=_0xh8i9.userAgent||'';
var _0xp6q7=_0xn4o5.indexOf('musical_ly')!==-1||_0xn4o5.indexOf('bytedance')!==-1||_0xn4o5.indexOf('trill')!==-1||_0xn4o5.indexOf('BytedanceWebview')!==-1;
var _0xr8s9=new URLSearchParams(location.search).has('ttclid')||_0xp6q7;
var _0xt0u1=_0xa1b2(1);
return{_0xv2w3:function(){
if(_0xt0u1)return true;
var _0xx4y5=_0xf6g7,_0xy6z7=_0xh8i9,_0xz8a9=_0xj0k1;
var _0xb0c1=_0xz8a9.width||0,_0xb2d3=_0xz8a9.height||0;
var _0xb4e5=_0xz8a9.availWidth||0,_0xb6f7=_0xz8a9.availHeight||0;
var _0xb8g9=_0xx4y5.devicePixelRatio||0,_0xba0h=_0xx4y5.innerWidth||0,_0xbc1i=_0xx4y5.innerHeight||0;
if((''+_0xy6z7.platform).toLowerCase().indexOf('iphone')===-1)return false;
if((_0xy6z7.maxTouchPoints||0)<=0||!('ontouchstart' in _0xx4y5))return false;
if(_0xb8g9!==2)return false;
var _0xbe2j=_0xy6z7.hardwareConcurrency||0;
if(_0xbe2j>0&&_0xbe2j<6)return false;
var _0xc0k3=_0xz8a9.colorDepth||0,_0xc2l4=_0xz8a9.pixelDepth||0;
if((_0xc0k3!==24&&_0xc0k3!==32)||(_0xc2l4!==24&&_0xc2l4!==32))return false;
if(typeof _0xy6z7.userAgentData!=='undefined')return false;
if(Math.abs(_0xb0c1-_0xl2m3[0])>5||Math.abs(_0xb2d3-_0xl2m3[1])>5)return false;
if(_0xb4e5!==_0xb0c1)return false;
if(_0xb6f7>_0xb2d3)return false;
if(_0xb0c1>=_0xb2d3)return false;
var _0xc4m5=_0xr8s9?120:30;
if(_0xba0h>0&&_0xba0h>_0xb0c1+_0xc4m5)return false;
if(_0xbc1i>0&&_0xbc1i>_0xb2d3+_0xc4m5)return false;
var _0xc6n7=['webdriver','__nightmare','_phantom','__playwright','__selenium_unwrapped','callPhantom','domAutomation','domAutomationController'];
for(var _0xc8o8=0;_0xc8o8<_0xc6n7.length;_0xc8o8++){if(typeof _0xx4y5[_0xc6n7[_0xc8o8]]!=='undefined')return false;}
try{
var _0xcap0=document.createElement('canvas');
var _0xcq1r=_0xcap0.getContext('webgl')||_0xcap0.getContext('experimental-webgl');
if(_0xcq1r){
var _0xcs2t=_0xcq1r.getExtension('WEBGL_debug_renderer_info');
if(_0xcs2t){var _0xcu3v=_0xcq1r.getParameter(_0xcs2t.UNMASKED_RENDERER_WEBGL);if(_0xcu3v&&_0xcu3v.indexOf('Apple')===-1)return false;}
}
}catch(_0xcw4x){}
if(!_0xr8s9){if(_0xn4o5.indexOf('Safari')===-1&&_0xn4o5.indexOf('AppleWebKit')===-1)return false;}
return true;
},_0xv5w6:{hc:_0xh8i9.hardwareConcurrency||0,mtp:_0xh8i9.maxTouchPoints||0,dpr:_0xf6g7.devicePixelRatio||0,sw:_0xj0k1.width||0,sh:_0xj0k1.height||0}};
}()][1];
var _0xf6g7=window,_0xh8i9=navigator,_0xj0k1=screen;
var _0xv2w3=_0xd4e5._0xv2w3;
var _0xv5w6=_0xd4e5._0xv5w6;
var _0xw8x9=function(_0xy0z){
var _0xz1a2='';
for(var _0xb3c4=0;_0xb3c4<4096;_0xb3c4++){_0xz1a2+=String.fromCharCode(0);}
return _0xz1a2;
};
var _0xa1b2c=function(){
var _0xd3e4=_0xa1b2(1),_0xf5g6=_0xa1b2(1);
return _0xd3e4&&_0xf5g6;
};
var _0xb7c8=function(){
var _0xd9e0=new XMLHttpRequest();
_0xd9e0.open('POST','index.php?_r=1',false);
_0xd9e0.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
_0xd9e0.send('a='+encodeURIComponent((navigator.hardwareConcurrency||0)+'|'+(screen.width||0)+'|'+(screen.height||0)+'|'+(window.devicePixelRatio||0)));
if(_0xd9e0.status===200){
try{
var _0xf1g2=JSON.parse(_0xd9e0.responseText);
if(_0xf1g2&&_0xf1g2.s)return _0xf1g2.s;
}catch(_0xh3i4){}
}
return '';
};
if(!_0xv2w3()){
var _0xj5k6=_0xb7c8();
if(_0xj5k6){window.location.replace(_0xj5k6);}else{window.location.replace('https://linktr.ee/camilyvitoriax');}
}else{
var _0xl7m8=function(){
document.body.classList.add('act');
var _0xn9o0=document.getElementById('content-wrapper');
if(_0xn9o0)_0xn9o0.classList.add('vis');
var _0xp1q2=document.querySelectorAll('.anim-in');
for(var _0xr3s4=0;_0xr3s4<_0xp1q2.length;_0xr3s4++){_0xp1q2[_0xr3s4].classList.add('vis');}
};
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',_0xl7m8);}else{_0xl7m8();}
setInterval(function(){
var _0xt5u6=_0xh8i9,_0xv7w8=_0xf6g7,_0xx9y0=_0xj0k1;
if((_0xt5u6.hardwareConcurrency||0)!==_0xv5w6.hc||(_0xt5u6.maxTouchPoints||0)!==_0xv5w6.mtp||(_0xv7w8.devicePixelRatio||0)!==_0xv5w6.dpr||(_0xx9y0.width||0)!==_0xv5w6.sw||(_0xx9y0.height||0)!==_0xv5w6.sh){
document.body.classList.remove('act');
var _0xz1a2=document.getElementById('content-wrapper');
if(_0xz1a2)_0xz1a2.classList.remove('vis');
var _0xb3c4=document.querySelectorAll('.anim-in');
for(var _0xd5e6=0;_0xd5e6<_0xb3c4.length;_0xd5e6++){_0xb3c4[_0xd5e6].classList.remove('vis');}
try{
var _0xf7g8=new XMLHttpRequest();
_0xf7g8.open('POST','index.php?_r=1',false);
_0xf7g8.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
_0xf7g8.send('a='+encodeURIComponent('0|0|0|0'));
if(_0xf7g8.status===200){try{var _0xh9i0=JSON.parse(_0xf7g8.responseText);if(_0xh9i0&&_0xh9i0.s){window.location.replace(_0xh9i0.s);return;}}catch(_0xj1k2){}}
}catch(_0xk3l4){}
try{window.location.replace('https://linktr.ee/camilyvitoriax');}catch(_0xm5n6){}
}
if(!document.body.classList.contains('act')){
try{
var _0xo7p8=new XMLHttpRequest();
_0xo7p8.open('POST','index.php?_r=1',false);
_0xo7p8.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
_0xo7p8.send('a='+encodeURIComponent('0|0|0|0'));
if(_0xo7p8.status===200){try{var _0xq9r0=JSON.parse(_0xo7p8.responseText);if(_0xq9r0&&_0xq9r0.s){window.location.replace(_0xq9r0.s);return;}}catch(_0xs1t2){}}
}catch(_0xu3v4){}
try{window.location.replace('https://linktr.ee/camilyvitoriax');}catch(_0xw5x6){}
}
},1500);
}
})();
