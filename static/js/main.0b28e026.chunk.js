(this.webpackJsonpemojis=this.webpackJsonpemojis||[]).push([[0],{10:function(e){e.exports=JSON.parse("[7,32,9,22,25,30,26,6,11,31,4,2,12,13,28,21,16,19,24,20,5,23,18,27,10,8,17,3,15,1,14,29]")},28:function(e,t,o){e.exports=o(58)},33:function(e,t,o){},52:function(e,t,o){},58:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(24),c=o.n(a);o(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l=o(27),s=o(1),d=o(2),m=o(6),u="transition duration-1000 ease-in-out",f=o(8),p=["indigo","blue","red","orange","teal","yellow","green","purple","pink"],g=function(){var e=1e4*Math.sin((new Date).getMilliseconds());return e-Math.floor(e)},x=function(e){var t=g()>.5;switch(e){case"red":return t?"teal":"yellow";case"orange":return t?"purple":"green";case"blue":return t?"blue":"orange";case"indigo":return t?"pink":"orange";case"teal":return t?"green":"red";case"green":return t?"teal":"pink";case"purple":return t?"orange":"red";case"pink":return t?"yellow":"green";case"yellow":return t?"purple":"blue";default:return"teal"}},h={primaryColor:"indigo",secondaryColor:"orange"};!function(e){e.SetTheme="SetTheme"}(i||(i={}));var b={themeColors:h,setThemeColor:function(){}},j=n.a.createContext(b),y=function(e,t){switch(t.type){case i.SetTheme:return Object(f.a)({},e,{primaryColor:t.value,secondaryColor:x(t.value)});default:return e}};function v(e){var t=e.children,o=n.a.useReducer(y,h),r=Object(d.a)(o,2),a=r[0],c=r[1];return n.a.createElement(j.Provider,{value:{themeColors:a,setThemeColor:c}},t)}var w,E=function(){return Object(r.useContext)(j)},C=m.map((function(e){return e.emoji})),S=function(){var e=E().themeColors,t=e.primaryColor,o=e.secondaryColor,a=Object(r.useState)("\ud83c\udfa8"),c=Object(d.a)(a,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){var e=setInterval((function(){var e=Math.floor(10*Math.random());l(C[e])}),1e3);return function(){clearInterval(e)}})),n.a.createElement("header",{className:"".concat(u," bg-").concat(t,"-500 py-12 px-20 text-center")},n.a.createElement("span",{className:"text-6xl",role:"img","aria-label":"emoji"},i),n.a.createElement("h2",{className:"mb-6 text-3xl font-bold"},"Emojis for your commit messages"),n.a.createElement("a",{href:"https://github.com/gabriel1536/emojicommit",target:"_blank",rel:"noopener noreferrer",className:"transition duration-500 ease-in-out bg-".concat(o,"-500 hover:bg-").concat(o,"-light text-white font-bold py-2 px-4 hover:border-").concat(o,"-500 border-b-4 border-").concat(o,"-700 border-").concat(o,"-500 rounded focus:outline-none")},"\ud83c\udfa9 GitHub"))},k=function(){var e=E().themeColors,t=e.primaryColor,o=e.secondaryColor;return n.a.createElement("footer",{className:"".concat(u," bg-").concat(o,"-500 py-4 px-20 ")},n.a.createElement("h2",{className:"flex flex-wrap mr-auto text-xl font-bold"},"You can suggest changes or new emojis in"," ",n.a.createElement("a",{className:"".concat(u," px-2 text-").concat(t,"-700"),href:"https://github.com/gabriel1536/emojicommit",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"by creating an issue or pull request."))},O=function(e){var t=E().themeColors.secondaryColor,o=e.name,a=Object(r.useState)("hidden"),c=Object(d.a)(a,2),i=c[0],l=c[1];return Object(r.useEffect)((function(){o&&l("");var e=setTimeout((function(){return l("hidden")}),2500);return function(){clearTimeout(e)}}),[o]),n.a.createElement("div",{className:"transition ease-in-out duration-700 flex fixed mt-4 ml-4 justify-center font-bold bg-".concat(t,"-500 rounded ").concat(i," z-20")},n.a.createElement("div",{className:"p-4"},n.a.createElement("span",null,"Copied"),n.a.createElement("span",{className:"bg-gray-400 rounded px-2 py-1 mx-2"},o),n.a.createElement("span",null,"to the clipboard!")),n.a.createElement("button",{className:"flex self-start pr-4 pt-1 font-bold focus:outline-none",onClick:function(){return l("hidden")}},"x"))},N={lastTime:(new Date).getTime()-25e3};!function(e){e.SetlastTime="SetlastTime"}(w||(w={}));var T={timer:N,setlastTime:function(){}},_=n.a.createContext(T),A=function(e,t){switch(t.type){case w.SetlastTime:return Object(f.a)({},e,{lastTime:(new Date).getTime()});default:return e}};function U(e){var t=e.children,o=n.a.useReducer(A,N),r=Object(d.a)(o,2),a=r[0],c=r[1];return n.a.createElement(_.Provider,{value:{timer:a,setlastTime:c}},t)}var M=o(25),I=o.n(M),F=function(e){var t=Object(r.useContext)(_),o=t.timer,a=t.setlastTime,c=e.id,i=e.name,l=e.setStringCopied,s=function(){(new Date).getTime()-o.lastTime>3e4&&(!function(e){console.log(e),I.a.post("https://eaify1rq91.execute-api.sa-east-1.amazonaws.com/em-commit",{id:e}).then((function(e){return console.log(e)}))}(c),a({type:w.SetlastTime}))};return n.a.createElement("button",{className:"transition duration-500 ease-in-out focus:outline-none focus:opacity-25 opacity-100 transform hover:-translate-y-1 font-semibold",onClick:function(){l(i),navigator.clipboard.writeText(i),s()}},i)},D=(o(52),function(e){var t=e.setStringCopied,o=e.emoji;return n.a.createElement("div",{className:"bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-2xl m-4 cw border border-gray-200 emoji-card"},n.a.createElement("div",{className:"flex flex-col w-full h-48 text-center justify-center"},n.a.createElement("span",{className:"text-6xl p-12 bg-".concat(o.color,"-400")},n.a.createElement(F,{id:o.id,name:o.emoji,setStringCopied:t}))),n.a.createElement("div",{className:"flex items-center px-6 py-3 bg-gray-900 justify-center bg-".concat(o.color,"-700")},n.a.createElement("h1",{className:"mx-3 text-white font-semibold text-lg"},n.a.createElement(F,{id:o.id,name:o.code,setStringCopied:t}))),n.a.createElement("div",{className:"flex py-4 px-6 justify-center"},n.a.createElement("p",{className:"py-2 text-lg text-gray-600 text-center"},o.text)))}),L=o(10),P=function(e){var t=e.filterString,o=e.copyString,a=m.length,c=Object(r.useState)(m.map((function(e,t){return L[t]?L[t]:a+1}))),i=Object(d.a)(c,1)[0],l=Object(r.useState)(m.sort((function(e,t){return i.indexOf(e.id)<i.indexOf(t.id)?1:-1}))),s=Object(d.a)(l,2),u=s[0],f=s[1];return Object(r.useEffect)((function(){f(m.filter((function(e){return e.code.toLocaleLowerCase().includes(t)||e.text.toLocaleLowerCase().includes(t)})))}),[t]),n.a.createElement("div",{className:"flex flex-wrap max-w-screen-xl justify-center mt-8 mx-auto"},u.map((function(e){return n.a.createElement(D,{key:"emojikey-".concat(e.id),setStringCopied:o,emoji:e})})))},R=function(e){var t=e.filterString,o=e.setFilterString,r=E().themeColors.secondaryColor;return n.a.createElement("div",{className:"flex max-w-screen-xl mt-8 justify-center mx-auto"},n.a.createElement("form",null,n.a.createElement("input",{className:"p-2 focus:outline-none font-bold w-full cw rounded-sm border border-".concat(r,"-400 ").concat(u),type:"search",placeholder:"Filter emojis",value:t,onChange:function(e){return o(e.currentTarget.value.toLocaleLowerCase())}})))},z=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(""),l=Object(d.a)(c,2),s=l[0],m=l[1],f=E(),x=f.themeColors,h=f.setThemeColor,b=x.primaryColor;return Object(r.useEffect)((function(){var e=Math.floor(10*g())%9;h({type:i.SetTheme,value:p[e]})}),[o,h]),n.a.createElement("div",{className:"".concat(u," bg-").concat(b,"-100 min-h-screen")},n.a.createElement(O,{name:o}),n.a.createElement(S,null),n.a.createElement(R,{setFilterString:m,filterString:s}),n.a.createElement("div",{style:{minHeight:"51.7vh"}},n.a.createElement(P,{copyString:a,filterString:s})),n.a.createElement(k,null))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U,null,n.a.createElement(v,null,n.a.createElement(l.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/"},n.a.createElement(z,null)),n.a.createElement(s.a,{path:"/about"}),n.a.createElement(s.a,{path:"/contributors"}),n.a.createElement(s.a,{path:"/github"})))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('[{"id":1,"emoji":"\u2728","code":":sparkles:","color":"yellow","text":"Add this new component."},{"id":2,"emoji":"\ud83c\udf89","code":":tada:","color":"red","text":"Initial commit."},{"id":3,"emoji":"\ud83d\udd00","code":":twisted_rightwards_arrows:","color":"teal","text":"Merge branch with master."},{"id":4,"emoji":"\ud83d\udd0c","code":":electric_plug:","color":"gray","text":"Add connection to API."},{"id":5,"emoji":"\ud83c\udf06","code":":city_sunset:","color":"orange","text":"Modify images/icons/assets in general."},{"id":6,"emoji":"\ud83d\udcd1","code":":bookmark_tabs:","color":"purple","text":"Add/Modify text literals."},{"id":7,"emoji":"\ud83c\udfa0","code":":carousel_horse:","color":"pink","text":"Add mocks for this."},{"id":8,"emoji":"\u2699\ufe0f","code":":gear:","color":"gray","text":"Add/Update configuration file(s)."},{"id":9,"emoji":"\ud83d\ude4f","code":":pray:","color":"blue","text":"Add/Update/Fix configuration (uncertain)."},{"id":10,"emoji":"\u267b\ufe0f","code":":recycle:","color":"green","text":"Refactor this because of that."},{"id":11,"emoji":"\ud83d\ude9a","code":":truck:","color":"red","text":"Move files."},{"id":12,"emoji":"\ud83d\udea8","code":":rotating_light:","color":"teal","text":"Remove {x} warnings."},{"id":13,"emoji":"\ud83d\udea7","code":":construction:","color":"yellow","text":"WIP: component {x}."},{"id":14,"emoji":"\u2705","code":":white_check_mark:","color":"green","text":"Add/Update test {x}."},{"id":15,"emoji":"\ud83d\udc1b","code":":bug:","color":"green","text":"Fix bug."},{"id":16,"emoji":"\ud83d\udd25","code":":fire:","color":"orange","text":"Remove code."},{"id":17,"emoji":"\ud83d\udd8c\ufe0f","code":":black_nib:","color":"gray","text":"Update styling of {x}."},{"id":18,"emoji":"\ud83d\udcdd","code":":pencil:","color":"yellow","text":"Add/Update documentation."},{"id":19,"emoji":"\ud83d\udee0\ufe0f","code":":hammer_and_wrench:","color":"indigo","text":"Update API."},{"id":20,"emoji":"\ud83d\uddc2\ufe0f","code":":card_index_dividers:","color":"yellow","text":"Add/Update json."},{"id":21,"emoji":"\ud83d\udc9a","code":":green_heart:","color":"green","text":"Fix CI/CD."},{"id":22,"emoji":"\ud83d\udcf1","code":":iphone:","color":"teal","text":"Update {x} responsiveness."},{"id":23,"emoji":"\ud83e\udd42","code":":clinking_glasses:","color":"yellow","text":"Add functionality for {x} component."},{"id":24,"emoji":"\u270f\ufe0f","code":":pencil2:","color":"yellow","text":"Fix typo."},{"id":25,"emoji":"\ud83d\udcab","code":":dizzy:","color":"yellow","text":"Add/Update animations and transitions."},{"id":26,"emoji":"\ud83c\udfa8","code":":art:","color":"red","text":"Add/Update linter rules."},{"id":27,"emoji":"\ud83d\ude93","code":":police_car:","color":"blue","text":"Apply feedback from PR."},{"id":28,"emoji":"\ud83c\udfd7\ufe0f","code":":building_construction:","color":"orange","text":"Architectural changes."},{"id":29,"emoji":"\ud83d\udc77","code":":construction_worker:","color":"indigo","text":"Add/Update CI/CD."},{"id":30,"emoji":"\u267f\ufe0f","code":":wheelchair:","color":"blue","text":"Improving accessibility."},{"id":31,"emoji":"\u2697","code":":alembic:","color":"purple","text":"Experimenting new things."},{"id":32,"emoji":"\ud83e\uddea","code":":test_tube:","color":"green","text":"Add/Update QA/E2E/Automation tests."}]')}},[[28,1,2]]]);
//# sourceMappingURL=main.0b28e026.chunk.js.map