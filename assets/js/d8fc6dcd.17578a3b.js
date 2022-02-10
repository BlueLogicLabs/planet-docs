"use strict";(self.webpackChunkwindidocs=self.webpackChunkwindidocs||[]).push([[817],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:7},c="Linking Notion pages",l={unversionedId:"taking-notes/notion",id:"taking-notes/notion",title:"Linking Notion pages",description:"This feature needs a Pro plan subscription.",source:"@site/docs/taking-notes/notion.md",sourceDirName:"taking-notes",slug:"/taking-notes/notion",permalink:"/taking-notes/notion",editUrl:"https://github.com/BlueLogicLabs/windi-docs/blob/main/docs/taking-notes/notion.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Save from Telegram",permalink:"/taking-notes/save-from-telegram"},next:{title:"Version history",permalink:"/data/version-history"}},p=[{value:"Connect to a Notion workspace",id:"connect-to-a-notion-workspace",children:[],level:2},{value:"Access control",id:"access-control",children:[],level:2},{value:"Bidirectional links",id:"bidirectional-links",children:[],level:2},{value:"Caching",id:"caching",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linking-notion-pages"},"Linking Notion pages"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature needs a Pro plan subscription."))),(0,i.kt)("p",null,"Windi focuses on short notes because there are already many nice tools for writing and sharing long notes - for example, ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so"},"Notion"),". We integrate with ",(0,i.kt)("a",{parentName:"p",href:"https://developers.notion.com/"},"Notion API")," to make it possible to link Notion pages from a Windi note, and have Windi take care of ",(0,i.kt)("em",{parentName:"p"},"rendering")," and ",(0,i.kt)("em",{parentName:"p"},"networking")," these pages. An example rendered page is ",(0,i.kt)("a",{parentName:"p",href:"https://windi.app/people/zhy/page/99fa70ed9c6d4dc38fe3db97eaa53d3d?note=2022-02-05-4c25e02115c7"},"here"),"."),(0,i.kt)("p",null,"To create a link, paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"notion.so")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"www.notion.so")," URL of the page you want to link to:"),(0,i.kt)("img",{alt:"example",width:"600px",src:"/img/notion-link-example-2.png"}),(0,i.kt)("p",null,'save the note, and the Notion page will appear in the "page" section:'),(0,i.kt)("img",{alt:"example",width:"600px",src:"/img/notion-link-example-1.png"}),(0,i.kt)("h2",{id:"connect-to-a-notion-workspace"},"Connect to a Notion workspace"),(0,i.kt)("p",null,"Windi needs to have access to your Notion workspace to be able to render the pages inside."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Settings->Integration"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Link")," under ",(0,i.kt)("strong",{parentName:"li"},"Notion")," and authorize Windi to access your Notion workspace.")),(0,i.kt)("h2",{id:"access-control"},"Access control"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"witness")," mechanism is used to control access to Notion pages through Windi. The ",(0,i.kt)("em",{parentName:"p"},"witness")," is a note that contains a link to the Notion page. To access a page:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"viewer")," needs to have read access to a note that contains a link to the page."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"owner")," of the above note must have connected to the workspace that the page belongs to, and have read access to the page.")),(0,i.kt)("p",null,"Additionally, Windi detects the page property ",(0,i.kt)("inlineCode",{parentName:"p"},"windi.alwaysPublic")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"checkbox")," type that, when set to true, skips checking for condition 1 and grants access as long as condition 2 is met."),(0,i.kt)("h2",{id:"bidirectional-links"},"Bidirectional links"),(0,i.kt)("p",null,"At the bottom of a Windi-rendered Notion page is a ",(0,i.kt)("em",{parentName:"p"},"Linked by")," section, where backlinks to the note that links to the page are shown. This can be used as a discussion area."),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"Notion's API has a relatively low request rate limit (3 requests per second), so we can't fetch the page from Notion every time we need it. Instead, pages are cached at the edge when rendered for the first time."),(0,i.kt)("p",null,"The owner of a note can refresh the linked pages to keep them up to date by clicking the refresh button below the title of the page."))}m.isMDXComponent=!0}}]);