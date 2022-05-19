var AMtoMQ=function(){var A,r,i,c=".",g=0,s=1,a=2,$=3,o=4,w=5,m=6,x=7,y=8,_=9,h=10,t={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:s},e={input:"root",tag:"mroot",output:"root",tex:null,ttype:a},u={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:a},p={input:"/",tag:"mfrac",output:"/",tex:null,ttype:$},n={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:a},l={input:"_",tag:"msub",output:"_",tex:null,ttype:$},f={input:"^",tag:"msup",output:"^",tex:null,ttype:$},b={input:"text",tag:"mtext",output:"text",tex:null,ttype:h},M={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:h},d={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:h},v=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:g},{input:"beta",tag:"mi",output:"β",tex:null,ttype:g},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:g},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:g},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:g},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:g},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:g},{input:"eta",tag:"mi",output:"η",tex:null,ttype:g},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:g},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:g},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:g},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:g},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:g},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:g},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:g},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:g},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:g},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:g},{input:"phi",tag:"mi",output:"φ",tex:null,ttype:g},{input:"varphi",tag:"mi",output:"ϕ",tex:null,ttype:g},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:g},{input:"pi",tag:"mi",output:"π",tex:null,ttype:g},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:g},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:g},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:g},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:g},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:g},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:g},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:g},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:g},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:g},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:g},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:g},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:g},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:g},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:g},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:g},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:g},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:x},{input:"^^",tag:"mo",output:"∧",tex:"wedge",ttype:g},{input:"xor",tag:"mo",output:"⊕",tex:"oplus",ttype:g},{input:"oplus",tag:"mo",output:"⊕",tex:"oplus",ttype:g},{input:"ominus",tag:"mo",output:"⊖",tex:"ominus",ttype:g},{input:"neg",tag:"mo",output:"¬",tex:"neg",ttype:g},{input:"vv",tag:"mo",output:"∨",tex:"vee",ttype:g},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:g},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:g},{input:"xx",tex:"times",ttype:g},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:g},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:g},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:g},{input:"geq",tag:"mo",output:"≥",tex:null,ttype:g},{input:"in",tag:"mo",output:"∈",tex:null,ttype:g},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:g},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:g},{input:"(",tag:"mo",output:"(",tex:null,ttype:o},{input:")",tag:"mo",output:")",tex:null,ttype:w},{input:"[",tag:"mo",output:"[",tex:null,ttype:o},{input:"]",tag:"mo",output:"]",tex:null,ttype:w},{input:"{",tag:"mo",output:"{",tex:"{",ttype:o,notexcopy:!0},{input:"}",tag:"mo",output:"}",tex:"}",ttype:w,notexcopy:!0},{input:"|",tag:"mo",output:"|",tex:null,ttype:_},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:o},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:w},{input:"<<",tag:"mo",output:"〈",tex:"langle",ttype:o},{input:">>",tag:"mo",output:"〉",tex:"rangle",ttype:w},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:o,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:w,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:g},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:g},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:g},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:g},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:g},{input:"->",tag:"mo",output:"→",tex:"to",ttype:g},{input:"=>",tag:"mo",output:"⇒",tex:"implies",ttype:g},{input:"<=>",tag:"mo",output:"⇔",tex:"iff",ttype:g},{input:"RR",tag:"mo",output:"ℝ",tex:"mathbb{R}",ttype:g,notexcopy:!0},{input:"f",tag:"mi",output:"f",tex:null,ttype:s,func:!0,val:!0},{input:"degree",tag:"mo",tex:null,ttype:g},{input:"degrees",output:"degree",ttype:y},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:s,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:s,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:s,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:s,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:s,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:s,func:!0},{input:"arcsec",tag:"mo",output:"arcsec",tex:null,ttype:s,func:!0},{input:"arccsc",tag:"mo",output:"arccsc",tex:null,ttype:s,func:!0},{input:"arccot",tag:"mo",output:"arccot",tex:null,ttype:s,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:s,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:s,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:s,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:s,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:s,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:s,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:s,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:s,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:s,func:!0},{input:"log",tag:"mo",output:"log",tex:null,ttype:s,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:s,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:s},{input:"Sin",tag:"mo",output:"sin",tex:null,ttype:s,func:!0},{input:"Cos",tag:"mo",output:"cos",tex:null,ttype:s,func:!0},{input:"Tan",tag:"mo",output:"tan",tex:null,ttype:s,func:!0},{input:"Arcsin",tag:"mo",output:"arcsin",tex:null,ttype:s,func:!0},{input:"Arccos",tag:"mo",output:"arccos",tex:null,ttype:s,func:!0},{input:"Arctan",tag:"mo",output:"arctan",tex:null,ttype:s,func:!0},{input:"Sinh",tag:"mo",output:"sinh",tex:null,ttype:s,func:!0},{input:"Sosh",tag:"mo",output:"cosh",tex:null,ttype:s,func:!0},{input:"Tanh",tag:"mo",output:"tanh",tex:null,ttype:s,func:!0},{input:"Cot",tag:"mo",output:"cot",tex:null,ttype:s,func:!0},{input:"Sec",tag:"mo",output:"sec",tex:null,ttype:s,func:!0},{input:"Csc",tag:"mo",output:"csc",tex:null,ttype:s,func:!0},{input:"Log",tag:"mo",output:"log",tex:null,ttype:s,func:!0},{input:"Ln",tag:"mo",output:"ln",tex:null,ttype:s,func:!0},{input:"Abs",tag:"mo",output:"abs",tex:null,ttype:s,func:!0},t,e,u,p,n,l,f,{input:"Sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:s},{input:"hat",tag:"mover",output:"^",tex:null,ttype:s,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:s,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:s,acc:!0},b,M,d];function k(t,e){return t.input>e.input?1:-1}function q(t,e){for(var u="\\"==t.charAt(e)&&"\\"!=t.charAt(e+1)&&" "!=t.charAt(e+1)?t.slice(e+1):t.slice(e),p=0;p<u.length&&u.charCodeAt(p)<=32;p+=1);return u.slice(p)}function O(t){for(var e,u,p,n=0,l="",a=!0,o=1;o<=t.length&&a;o++)u=t.slice(0,o),(n=function(t,e,u){var p,n,l;if(0==u){for(u=-1,p=t.length;u+1<p;)t[n=u+p>>1]<e?u=n:p=n;return p}for(l=u;l<t.length&&t[l]<e;l++);return l}(Z,u,n))<Z.length&&t.slice(0,Z[n].length)==Z[n]&&(o=(l=Z[e=n]).length),a=n<Z.length&&t.slice(0,Z[n].length)>=Z[n];if(r=i,""!=l)return i=v[e].ttype,v[e];for(i=g,u=t.slice(0,n=1),p=!0;"0"<=u&&u<="9"&&n<=t.length;)u=t.slice(n,n+1),n++;if(u==c&&"0"<=(u=t.slice(n,n+1))&&u<="9")for(p=!1,n++;"0"<=u&&u<="9"&&n<=t.length;)u=t.slice(n,n+1),n++;return p=p&&1<n||2<n?(u=t.slice(0,n-1),"mn"):(n=2,((u=t.slice(0,1))<"A"||"Z"<u)&&(u<"a"||"z"<u)?"mo":"mi"),"-"==u&&" "!==t.charAt(1)&&r==$?(i=$,{input:u,tag:p,output:u,ttype:s,func:!0,val:!0}):{input:u,tag:p,output:u,ttype:g,val:!0}}function R(t){var e,u;return"{"==t.charAt(0)&&"}"==t.charAt(t.length-1)&&(u=0,"\\left"==(e=t.substr(1,5))?"("==(e=t.charAt(6))||"["==e||"{"==e?u=7:"\\lbrace"==(e=t.substr(6,7))&&(u=13):"("!=(e=t.charAt(1))&&"["!=e||(u=2),0<u&&("\\right)}"==(e=t.substr(t.length-8))||"\\right]}"==e||"\\right.}"==e?t=(t="{"+t.substr(u)).substr(0,t.length-8)+"}":"\\rbrace}"==e&&(t=(t="{"+t.substr(u)).substr(0,t.length-14)+"}"))),t}function E(t){return pre="boolean"==typeof t.val&&t.val?"":"\\",null==t.tex?pre+t.input:pre+t.tex}function S(t){return null==t.tex?t.input:"\\"+t.tex}function z(t){var e,u,p,n,l="";if(null==(e=O(t=q(t,0)))||e.ttype==w&&0<A)return[null,t];switch((e=e.ttype==y?O(t=e.output+q(t,e.input.length)):e).ttype){case x:case g:return t=q(t,e.input.length),"\\"==(n=E(e)).charAt(0)||"mo"==e.tag?[n,t]:["{"+n+"}",t];case o:return(A++,u=N(t=q(t,e.input.length),!0),A--,u[0].match(/bmatrix/))?[u[0].substring(0,u[0].length-7),u[1]]:("\\right"==u[n=0].substr(0,6)&&(")"==(p=u[0].charAt(6))||"]"==p||"}"==p?n=6:"."==p?n=7:"\\rbrace"==(p=u[0].substr(6,7))&&(n=13)),[0<n?(u[0]=u[0].substr(n),"boolean"==typeof e.invisible&&e.invisible?"{"+u[0]+"}":"{"+S(e)+u[0]+"}"):"boolean"==typeof e.invisible&&e.invisible?"{"+u[0]+"}":"{\\left"+S(e)+u[0]+"}",u[1]]);case h:return-1==(n="{"==(t=e!=d?q(t,e.input.length):t).charAt(0)?t.indexOf("}"):"("==t.charAt(0)?t.indexOf(")"):"["==t.charAt(0)?t.indexOf("]"):e==d?t.slice(1).indexOf('"')+1:0)&&(n=t.length),[l+="\\text{"+(p=t.slice(1,n))+"}",t=q(t,n+1)];case s:return null==(u=z(t=q(t,e.input.length)))[0]?["{"+E(e)+"}",t]:"boolean"==typeof e.func&&e.func?"^"==(p=t.charAt(0))||"_"==p||"/"==p||"|"==p||","==p||1==e.input.length&&e.input.match(/\w/)&&"("!=p?["{"+E(e)+"}",t]:["{"+E(e)+"{"+u[0]+"}}",u[1]]:(u[0]=R(u[0]),"sqrt"==e.input?["\\sqrt{"+u[0]+"}",u[1]]:"abs"==e.input?["\\left|{"+u[0]+"}\\right|",u[1]]:"cancel"==e.input?["\\cancel{"+u[0]+"}",u[1]]:void 0!==e.rewriteleftright?["{\\left"+e.rewriteleftright[0]+u[0]+"\\right"+e.rewriteleftright[1]+"}",u[1]]:"boolean"==typeof e.acc&&e.acc?[E(e)+"{"+u[0]+"}",u[1]]:["{"+E(e)+"{"+u[0]+"}}",u[1]]);case a:return null==(u=z(t=q(t,e.input.length)))[0]?["{"+E(e)+"}",t]:(u[0]=R(u[0]),null==(n=z(u[1]))[0]?["{"+E(e)+"}",t]:(n[0]=R(n[0]),[l="color"==e.input?"{\\color{"+u[0].replace(/[\{\}]/g,"")+"}"+n[0]+"}":"root"==e.input?"{\\sqrt["+u[0]+"]{"+n[0]+"}}":"{"+E(e)+"{"+u[0]+"}{"+n[0]+"}}",n[1]]));case $:return t=q(t,e.input.length),[e.output,t];case m:return t=q(t,e.input.length),["{\\quad\\text{"+e.input+"}\\quad}",t];case _:return A++,u=N(t=q(t,e.input.length),!1),A--,p="","|"==(p=u[0].charAt(u[0].length-1))?["{\\left|"+u[0]+"}",u[1]]:["{\\mid}",t];default:return t=q(t,e.input.length),["{"+E(e)+"}",t]}}function D(t){var e,u,p,n=O(t=q(t,0)),l=(u=z(t))[0];return(p=O(t=u[1])).ttype==$&&"/"!=p.input&&(null==(u=z(t=q(t,p.input.length)))[0]?u[0]="{}":u[0]=R(u[0]),t=u[1],"_"==p.input?"^"==(e=O(t)).input?((p=z(t=q(t,e.input.length)))[0]=R(p[0]),t=p[1],l="{"+l,l=(l+="_{"+u[0]+"}")+"^{"+p[0]+"}}"):l+="_{"+u[0]+"}":l=l+"^{"+u[0]+"}",void 0!==n.func&&n.func&&(e=O(t)).ttype!=$&&e.ttype!=w&&(l="{"+l+(u=D(t))[0]+"}",t=u[1])),[l,t]}function N(t,e){for(var u,p,n,l,a,o,r,i,c,g,s,m,x,y,h,f,b,d="",v=!1;p=(n=D(t=q(t,0)))[0],(u=O(t=n[1])).ttype==$&&"/"==u.input?(null==(n=D(t=q(t,u.input.length)))[0]?n[0]="{}":n[0]=R(n[0]),t=n[1],p="\\frac{"+(p=R(p))+"}",d+=p+="{"+n[0]+"}",u=O(t)):null!=p&&(d+=p),(u.ttype!=w&&(u.ttype!=_||e)||0==A)&&null!=u&&""!=u.output;);if(u.ttype==w||u.ttype==_){if(2<(a=d.length)&&"{"==d.charAt(0)&&0<d.indexOf(",")&&(")"==(o=d.charAt(a-2))||"]"==o)&&("("==(r=d.charAt(6))&&")"==o&&"}"!=u.output||"["==r&&"]"==o)){for(i="\\begin{bmatrix}",(c=new Array).push(0),g=!0,(m=[])[s=0]=[0],y=x=0,l=1;l<a-1;l++)d.charAt(l)==r&&s++,d.charAt(l)==o&&0==--s&&","==d.charAt(l+2)&&"{"==d.charAt(l+3)&&(c.push(l+2),m[x=l+2]=[l+2]),"["!=d.charAt(l)&&"("!=d.charAt(l)&&"{"!=d.charAt(l)||y++,"]"!=d.charAt(l)&&")"!=d.charAt(l)&&"}"!=d.charAt(l)||y--,","==d.charAt(l)&&1==y&&m[x].push(l);if(c.push(a),h=-1,0==s&&0<c.length)for(l=0;l<c.length-1;l++){if(0<l&&(i+="\\\\"),0==l)if(1==m[c[l]].length)f=[d.substr(c[l]+7,c[l+1]-c[l]-15)];else{for(f=[d.substring(c[l]+7,m[c[l]][1])],b=2;b<m[c[l]].length;b++)f.push(d.substring(m[c[l]][b-1]+1,m[c[l]][b]));f.push(d.substring(m[c[l]][m[c[l]].length-1]+1,c[l+1]-8))}else if(1==m[c[l]].length)f=[d.substr(c[l]+8,c[l+1]-c[l]-16)];else{for(f=[d.substring(c[l]+8,m[c[l]][1])],b=2;b<m[c[l]].length;b++)f.push(d.substring(m[c[l]][b-1]+1,m[c[l]][b]));f.push(d.substring(m[c[l]][m[c[l]].length-1]+1,c[l+1]-8))}0<h&&f.length!=h?g=!1:-1==h&&(h=f.length),i+=f.join("&")}i+="\\end{bmatrix}",g&&(d=i)}t=q(t,u.input.length),v=("boolean"==typeof u.invisible&&u.invisible||(d+=p="\\right"+S(u)),!0)}return 0<A&&!v&&(d+="\\right)"),[d,t]}for(var Z=[],C=[],L=0;L<v.length;L++)!v[L].tex||"boolean"==typeof v[L].notexcopy&&v[L].notexcopy||(C[C.length]={input:v[L].tex,tag:v[L].tag,output:v[L].output,ttype:v[L].ttype,acc:v[L].acc||!1});for((v=v.concat(C)).sort(k),L=0;L<v.length;L++)Z[L]=v[L].input;return function(t,e){return A=0,t=(t=(t=(t=(t=(t=(t=(t=t.replace(/(&nbsp;|\u00a0|&#160;|{::})/g,"")).replace(/<([^<].*?,.*?[^>])>/g,"<<$1>>")).replace(/&gt;/g,">")).replace(/&lt;/g,"<")).replace(/\s*\bor\b\s*/g,'" or "')).replace(/all\s+real\s+numbers/g,'"all real numbers"')).replace(/(\)|\])\s*u\s*(\(|\[)/g,"$1U$2")).replace(/\bDNE\b/gi,'"DNE"'),null==(t=document.getElementById(e)&&document.getElementById(e).getAttribute("data-mq").match(/interval/)?t.replace(/\bU\b/g,"cup"):t).match(/\S/)?"":N(t.replace(/^\s+/g,""),!1)[0]}}();function MQtoAM(t,e){var u,p,n,l,a,o;if(t=(t=t.replace(/\\:/g," ")).replace(/\\operatorname{(\w+)}/g," $1"),e)t=t.replace(/\\Re/g,"RR");else{for(;-1!=(o=t.lastIndexOf("\\left|"));)t=-1!=(p=t.indexOf("\\right|",o+1))?(n=t.substring(0,o).match(/(arcsinh|arccosh|arctanh|arcsech|arccsch|arccoth|arcsin|arccos|arctan|arcsec|arccsc|arccot|sinh|cosh|tanh|sech|csch|coth|ln|log|exp|sin|cos|tan|sec|csc|cot)(\^\d+)?$/),(t=t.substring(0,p)+")"+(n?")":"")+t.substring(p+7)).substring(0,o)+(n?"(":"")+"abs("+t.substring(o+6)):t.substring(0,o)+"|"+t.substring(o+6);t=(t=(t=(t=(t=t.replace(/\\text{\s*or\s*}/g," or ")).replace(/\\text{all\s+real\s+numbers}/g,"all real numbers")).replace(/\\text{DNE}/g,"DNE")).replace(/\\varnothing/g,"DNE")).replace(/\\Re/g,"all real numbers")}for(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\\begin{.?matrix}(.*?)\\end{.?matrix}/g,function(t,e){return"[("+e.replace(/\\\\/g,"),(").replace(/&/g,",")+")]"})).replace(/\\le(?=(\b|\d))/g,"<=")).replace(/\\ge(?=(\b|\d))/g,">=")).replace(/\\ne(?=(\b|\d))/g,"!=")).replace(/\\pm/g,"+-")).replace(/\\approx/g,"~~")).replace(/(\\arrow|\\rightarrow)/g,"rarr")).replace(/\\cup/g,"U")).replace(/\\sim/g,"~")).replace(/\\vee/g,"vv").replace(/\\wedge/g,"^^")).replace(/\\Rightarrow/g,"=>").replace(/\\Leftrightarrow/g,"<=>")).replace(/\\times/g,"xx")).replace(/\\left\\{/g,"lbrace").replace(/\\right\\}/g,"rbrace")).replace(/\\left/g,"")).replace(/\\right/g,"")).replace(/\\langle/g,"<<")).replace(/\\rangle/g,">>")).replace(/\\cdot/g,"*")).replace(/\\infty/g,"oo")).replace(/\\nthroot/g,"root")).replace(/\\mid/g,"|")).replace(/\\/g,"")).replace(/sqrt\[(.*?)\]/g,"root($1)")).replace(/(\d)frac/g,"$1 frac");-1!=(o=t.indexOf("frac{"));){for(u=1,l=o+5;0<u&&l<t.length-1;)l++,"{"==(a=t.charAt(l))?u++:"}"==a&&u--;t=0==u?t.substring(0,o)+"("+t.substring(o+5,l)+")/"+t.substring(l+1):t.substring(0,o)+t.substring(o+4)}return(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/_(\w)(\w)/g,"_$1 $2")).replace(/(\^|_)([+\-])([^\^])/g,"$1$2 $3")).replace(/\^(\w)(\w)/g,"^$1 $2")).replace(/_{([\d\.]+)}\^/g,"_$1^")).replace(/_{([\d\.]+)}([^\^])/g,"_$1 $2")).replace(/_{([\d\.]+)}$/g,"_$1")).replace(/_{(\w+)}$/g,"_($1)")).replace(/{/g,"(").replace(/}/g,")")).replace(/lbrace/g,"{").replace(/rbrace/g,"}")).replace(/\(([\d\.]+)\)\/\(([\d\.]+)\)/g,"$1/$2 ")).replace(/\/\(([\d\.]+)\)/g,"/$1")).replace(/\(([\d\.]+)\)\//g,"$1/")).replace(/\/\(([\a-zA-Z])\)/g,"/$1")).replace(/\(([\a-zA-Z])\)\//g,"$1/")).replace(/\^\((-?[\d\.]+)\)(\d)/g,"^$1 $2")).replace(/\^\(-1\)/g,"^-1")).replace(/\^\((-?[\d\.]+)\)/g,"^$1")).replace(/\/\(([\a-zA-Z])\^([\d\.]+)\)/g,"/$1^$2 ")).replace(/\(([\a-zA-Z])\^([\d\.]+)\)\//g,"$1^$2/")).replace(/\+\-/g,"+ -")).replace(/text\(([^)]*)\)/g,"$1")).replace(/\(\s*(\w)/g,"($1").replace(/(\w)\s*\)/g,"$1)")).replace(/^\s+|\s+$/g,"")}