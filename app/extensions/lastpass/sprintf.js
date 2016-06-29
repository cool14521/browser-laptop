var lp_global_sprintf;
(function(n){function c(){var d=arguments[0],e=c.cache;if(!e[d]||!e.hasOwnProperty(d))e[d]=c.parse(d);return c.format.call(null,e[d],arguments)}function m(d){return Object.prototype.toString.call(d).slice(8,-1).toLowerCase()}var r=/[^s]/,p=/[dief]/,s=/^[^\x25]+/,t=/^\x25{2}/,u=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fiosuxX])/,v=/^([a-z_][a-z_\d]*)/i,w=/^\.([a-z_][a-z_\d]*)/i,x=/^\[(\d+)\]/,y=/^[\+\-]/;c.format=function(d,e){var q=1,z=d.length,a="",h=[],g,j,b,
k,f=!0,l="";for(g=0;g<z;g++)if(a=m(d[g]),"string"===a)h[h.length]=d[g];else if("array"===a){b=d[g];if(b[2]){a=e[q];for(j=0;j<b[2].length;j++){if(!a.hasOwnProperty(b[2][j]))throw Error(c("[sprintf] property '%s' does not exist",b[2][j]));a=a[b[2][j]]}}else a=b[1]?e[b[1]]:e[q++];"function"==m(a)&&(a=a());if(r.test(b[8])&&"number"!=m(a)&&isNaN(a))throw new TypeError(c("[sprintf] expecting number but found %s",m(a)));p.test(b[8])&&(f=0<=a);switch(b[8]){case "b":a=a.toString(2);break;case "c":a=String.fromCharCode(a);
break;case "d":case "i":a=parseInt(a,10);break;case "e":a=b[7]?a.toExponential(b[7]):a.toExponential();break;case "f":a=b[7]?parseFloat(a).toFixed(b[7]):parseFloat(a);break;case "o":a=a.toString(8);break;case "s":a=(a=String(a))&&b[7]?a.substring(0,b[7]):a;break;case "u":a>>>=0;break;case "x":a=a.toString(16);break;case "X":a=a.toString(16).toUpperCase()}p.test(b[8])&&(!f||b[3])?(l=f?"+":"-",a=a.toString().replace(y,"")):l="";j=b[4]?"0"===b[4]?"0":b[4].charAt(1):" ";k=b[6]-(l+a).length;k=b[6]?0<k?
Array(k+1).join(j):"":"";h[h.length]=b[5]?l+a+k:"0"===j?l+k+a:k+l+a}return h.join("")};c.cache={};c.parse=function(d){for(var e=[],c=[],f=0;d;){if(null!==(e=s.exec(d)))c[c.length]=e[0];else if(null!==(e=t.exec(d)))c[c.length]="%";else if(null!==(e=u.exec(d))){if(e[2]){var f=f|1,a=[],h=e[2],g=[];if(null!==(g=v.exec(h)))for(a[a.length]=g[1];""!==(h=h.substring(g[0].length));)if(null!==(g=w.exec(h)))a[a.length]=g[1];else if(null!==(g=x.exec(h)))a[a.length]=g[1];else throw new SyntaxError("[sprintf] failed to parse named argument key");
else throw new SyntaxError("[sprintf] failed to parse named argument key");e[2]=a}else f|=2;if(3===f)throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");c[c.length]=e}else throw new SyntaxError("[sprintf] unexpected placeholder");d=d.substring(e[0].length)}return c};var f=function(d,e,f){f=(e||[]).slice(0);f.splice(0,0,d);return c.apply(null,f)};"undefined"!=typeof g_isie&&g_isie?(init_LPfn(),"undefined"!==typeof LPfn&&(LPfn.sprintf=c,LPfn.vsprintf=f)):(n.sprintf=
c,n.vsprintf=f,"function"===typeof define&&define.amd&&define(function(){return{sprintf:c,vsprintf:f}}));if("undefined"!=typeof LP||"undefined"!=typeof is_firefox&&is_firefox())lp_global_sprintf=c;"undefined"!=typeof g_isie&&g_isie&&(lp_global_sprintf=c)})("undefined"===typeof window?this:window);"undefined"!=typeof is_firefox&&is_firefox()&&(sprintf=lp_global_sprintf);