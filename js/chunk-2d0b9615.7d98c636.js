(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9615"],{3365:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o={class:"page"},a=Object(c["i"])("article",null,[Object(c["i"])("p",null,"By the time you're reading this, The M Library provides you with :"),Object(c["i"])("ul",null,[Object(c["i"])("li",null,[Object(c["i"])("a",{href:"#theming"}," Automatic Dark & Light theming based on your colors. ")]),Object(c["i"])("li",null,[Object(c["i"])("a",{href:"#variables"}," Variables for colors, fonts and UI variables. ")]),Object(c["i"])("li",null,[Object(c["i"])("a",{href:"#functions"}," Color editing functions. ")]),Object(c["i"])("li",null,[Object(c["i"])("a",{href:"#animations"}," Vue fade & slide animations. ")])])],-1),r={id:"theming"},l=Object(c["i"])("h3",null,"Theming",-1),i=Object(c["j"])(" The M Libraray makes multiple themes feature for you. All you have to do is to choose the colors for the themes you want then you can toggle the "),b=Object(c["j"])(" to your body tag. "),s=Object(c["i"])("br",null,null,-1),u=Object(c["j"])(" In your app component import the "),j=Object(c["j"])(", "),h=Object(c["j"])(" and "),O=Object(c["j"])(" functions and call them in the "),d=Object(c["j"])(" hook for example. "),m=Object(c["i"])("br",null,null,-1),g=Object(c["j"])(" the color names are not changable you'll have to use these specific color names in order for the M components to work. "),f={id:"variables"},k=Object(c["i"])("h3",null,"M Variables",-1),p=Object(c["j"])(" The library converts your colors to both css & sass variables, for example the accent color shown in the object above can be accessed with "),y=Object(c["j"])(" and "),v=Object(c["j"])(". if you choose to add more colors you'll have to register your sass variables manually while your css variables are created automatically. "),w=Object(c["i"])("br",null,null,-1),x=Object(c["j"])(" beside color variables, the there are more variables for UI, fonts and animations. "),T={id:"functions"},A=Object(c["i"])("h3",null,"Custom Functions",-1),I=Object(c["i"])("p",null,"Shows the power of the theme engine and the hsla colors.",-1),S=Object(c["i"])("h4",null,'darker("color-name", amount) :',-1),V=Object(c["i"])("p",null," darkens the color with color-name by the percent amount (positive only). ",-1),D=Object(c["i"])("h4",null,'lighter("color-name", amount) :',-1),M=Object(c["i"])("p",null," lightens the color with color-name by the percent amount (positive only). ",-1),U=Object(c["i"])("h4",null,'changeOpacity("color-name", amount) :',-1),_=Object(c["i"])("p",null," darkens the color with color-name by the fraction amount (positive or negative). ",-1),C={id:"animations"},F=Object(c["j"])("Vue animations "),L=Object(c["j"])(" Still in beta state, this feature provides classes for Vue transitions. It uses the animation variables in "),$=Object(c["j"])(" like duration and directions. "),J=Object(c["i"])("br",null,null,-1),N=Object(c["j"])(" use "),B=Object(c["j"])(" class like "),P=Object(c["j"])(" to make your component fade from & to left. "),q=Object(c["j"])(" use "),z=Object(c["j"])(" class like "),E=Object(c["j"])(" to make your component slide from & to left. ");function G(e,t,n,G,H,K){var Q=Object(c["D"])("m-code"),R=Object(c["D"])("m-light");return Object(c["v"])(),Object(c["h"])("div",o,[a,Object(c["i"])("article",r,[l,Object(c["i"])("p",null,[i,Object(c["k"])(Q,{code:"m-themeName"}),b,s,u,Object(c["k"])(Q,{code:"setDefaultTheme({main, text, accent, onAccent})"}),j,Object(c["k"])(Q,{code:"setTheme(<theme-name>, {main, text, accent, onAccent})"}),h,Object(c["k"])(Q,{code:"configUI({arFont, enFont}, <ui-radius>px)"}),O,Object(c["k"])(Q,{code:"mounted"}),d,m,Object(c["k"])(R,{text:"Note :"}),g]),Object(c["k"])(Q,{type:"block",language:"Vue",code:"\r\nmounted() {\r\n\r\n  // setup your themes\r\n\r\n  setDefaultTheme({\r\n    main: 'rgba(255, 255, 255, 1)',\r\n    text: 'rgba(0, 0, 0, 1)',\r\n    accent: 'rgb(82, 0, 224)',\r\n    onAccent: 'rgba(255, 255, 255, 1)',\r\n  });\r\n\r\n  setTheme('dark', {\r\n    main: 'rgba(0, 0, 0, 1)',\r\n    text: 'rgba(255, 255, 255, 1)',\r\n    accent: 'rgba(82, 0, 224, 1)',\r\n    onAccent: 'rgba(255, 255, 255, 1)',\r\n  });\r\n\r\n  configUI({en: 'Cairo', ar: 'Poppins'}, '6px');\r\n\r\n  // change one of your theme colors :\r\n\r\n  setTheme('dark', {main: 'rgba(0, 0, 0, 1)'});\r\n}\r\n"})]),Object(c["i"])("article",f,[k,Object(c["i"])("p",null,[p,Object(c["k"])(Q,{code:"$color_accent"}),y,Object(c["k"])(Q,{code:"var(--m-color-accent)"}),v,w,x])]),Object(c["i"])("article",T,[A,I,Object(c["i"])("ul",null,[Object(c["i"])("li",null,[S,V,Object(c["k"])(Q,{type:"block",language:"Sass",code:"\r\nbutton {\r\n  background: $color_accent;\r\n  &:hover {\r\n    background: darker('accent', 20%);\r\n    transform: scale(1.04);\r\n  }\r\n}\r\n"})]),Object(c["i"])("li",null,[D,M,Object(c["k"])(Q,{type:"block",language:"Sass",code:"\r\nbutton {\r\n  background: $color_accent;\r\n  &:hover {\r\n    background: lighter('accent', 20%);\r\n    transform: scale(1.04);\r\n  }\r\n}\r\n"})]),Object(c["i"])("li",null,[U,_,Object(c["k"])(Q,{type:"block",language:"Sass",code:"\r\n.tab {\r\n  background-color: changeOpacity('main', -.4);\r\n}\r\n"})])])]),Object(c["i"])("article",C,[Object(c["i"])("h3",null,[F,Object(c["k"])(R,{text:"alpha"})]),Object(c["i"])("p",null,[L,Object(c["k"])(Q,{code:"_configs.scss"}),$,J,Object(c["i"])("ul",null,[Object(c["i"])("li",null,[N,Object(c["k"])(Q,{code:"fade-'direction'"}),B,Object(c["k"])(Q,{code:"fade-left"}),P]),Object(c["i"])("li",null,[q,Object(c["k"])(Q,{code:"slide-'direction'"}),z,Object(c["k"])(Q,{code:"slide-left"}),E])])])])])}var H={name:"Sass"},K=n("6b0d"),Q=n.n(K);const R=Q()(H,[["render",G]]);t["default"]=R}}]);
//# sourceMappingURL=chunk-2d0b9615.7d98c636.js.map