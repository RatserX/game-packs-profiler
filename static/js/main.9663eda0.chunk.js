(this["webpackJsonpgame-packs-profiler"]=this["webpackJsonpgame-packs-profiler"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){var r={"./profile":55,"./profile.json":55};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=107},108:function(e,t,a){"use strict";a.r(t);var r,n=a(2),o=a(0),i=a(13),s=a.n(i),c=(a(80),a(16)),d=a(40),m=a(8),l=function(e){var t=e.children;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:t})})},h=function(e){var t=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(m.c,{children:Object(n.jsx)(m.a,{exact:!0,path:"/"})})}),t]})},u=a(65),f=a(145),p=a(146),g=(a(86),a(144)),w=a(57),b=a(123),j=a(149),v=a(147),x=a(142),O=a(143),y=a(150),k=a(124),S=a(26),M=a(129),P=a(148),T=a(137),I=a(131),C=a(130),_=a(133),A=(a(87),function(e){return void 0===e}),F=function(e){return A(e)||function(e){return 0===Object.getOwnPropertyNames(e).length}(e)},E=function(e){return function(e){return void 0===e}(e)||function(e){return 0===e.length}(e)},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Intl.DateTimeFormat(t,a);return r.format(e)},D="EXPAND_1",q="EXPAND_2",N=function(e,t){return{type:D,instanceKey:e,instanceValue:t}},W=function(e,t){return{type:q,instanceKey:e,instanceValueIsEnabled:t}},z=a(125),L=a(126),U=a(127),H=(a(88),a(128)),B=a(132),G=(a(89),{setInstance:N,setInstanceIsEnabled:W}),X=Object(c.b)((function(e){return{expandState:e.expand,locationState:e.location}}),G),J=Object(b.a)((function(e){return Object(j.a)({collapse:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expand:{transform:"rotate(180deg)"},disablePaddingBottom:{paddingBottom:"0"},disablePaddingTop:{paddingTop:"0"}})})),V=X((function(e){var t,a=e.expandState,r=e.locationState,i=e.setInstance,s=e.setInstanceIsEnabled,c=e.addon,d=e.id,m=J(),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new Date(1e3*e);return R(r,t,a)}(c.timestamp),h=!!A(c.required)||c.required,u="HOMEPACKADDON".concat(d),f=null===(t=a.instance[u])||void 0===t?void 0:t.isEnabled;Object(o.useEffect)((function(){F(a.instance)&&i(u,{isEnabled:!1})}),[a,u,i,s]);return Object(n.jsx)(k.a,{className:"home-pack-addon",item:!0,xs:12,sm:6,md:4,xl:3,zeroMinWidth:!0,children:Object(n.jsx)(v.a,{children:Object(n.jsxs)(z.a,{variant:"outlined",square:!0,children:[Object(n.jsx)(L.a,{avatar:Object(n.jsx)(y.a,{src:c.image||"".concat(r.publicUrl,"/images/ph-addon.png"),variant:"rounded"}),className:"disable-padding-bottom",subheader:Object(n.jsx)(S.a,{noWrap:!0,variant:"subtitle2",children:c.version}),subheaderTypographyProps:{variant:"subtitle2"},title:Object(n.jsx)(S.a,{noWrap:!0,variant:"subtitle1",children:c.name}),titleTypographyProps:{variant:"subtitle1"}}),Object(n.jsxs)(U.a,{children:[Object(n.jsxs)(S.a,{component:"p",color:"textSecondary",noWrap:!0,variant:"caption",children:[Object(n.jsx)("strong",{children:"Date:"})," ",l]}),Object(n.jsxs)(S.a,{component:"p",color:"textSecondary",noWrap:!0,variant:"caption",children:[Object(n.jsx)("strong",{children:"Required:"})," ",h?"Yes":"No"]})]}),Object(n.jsxs)(H.a,{className:"disable-padding-top",disableSpacing:!0,children:[Object(n.jsx)(M.a,{hidden:E(c.download),href:c.download||"#",target:"_blank",children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(M.a,{hidden:E(c.url),href:c.url||"#",target:"_blank",children:Object(n.jsx)(I.a,{})}),Object(n.jsx)(M.a,{hidden:E(c.wiki),href:c.wiki||"#",target:"_blank",children:Object(n.jsx)(B.a,{})}),Object(n.jsx)(M.a,{className:f?m.expand:m.collapse,hidden:E(c.description),onClick:function(){s(u,!f)},style:{marginLeft:"auto"},children:Object(n.jsx)(_.a,{})})]}),Object(n.jsx)(P.a,{in:f,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(U.a,{children:Object(n.jsx)(S.a,{component:"p",color:"textSecondary",variant:"body2",children:c.description})})})]})})})})),K=a(151),Y=a(134),Q=a(136),Z=a(63),$=a.n(Z),ee=a(135),te=Object(b.a)((function(e){return{smallAvatar:{width:e.spacing(3),height:e.spacing(3)}}})),ae=function(e){var t=e.instruction;te();return Object(n.jsxs)(K.a,{className:"disable-padding-bottom disable-padding-top",children:[Object(n.jsx)(Y.a,{children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)(Q.a,{children:Object(n.jsx)(S.a,{component:"p",variant:"body2",children:$()(t)})})]})},re=Object(c.b)((function(e){return{expandState:e.expand,locationState:e.location}}),{})((function(e){var t,a,r=e.locationState,o=e.pack;return Object(n.jsx)(k.a,{className:"home-pack",item:!0,xs:12,zeroMinWidth:!0,children:Object(n.jsx)(v.a,{mt:2,children:Object(n.jsxs)(z.a,{elevation:3,variant:"elevation",square:!0,children:[Object(n.jsx)(L.a,{action:Object(n.jsxs)("div",{children:[Object(n.jsx)(M.a,{hidden:E(o.download),href:o.download||"#",target:"_blank",children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(M.a,{hidden:E(o.url),href:o.url||"#",target:"_blank",children:Object(n.jsx)(I.a,{})})]}),avatar:Object(n.jsx)(y.a,{src:o.image||"".concat(r.publicUrl,"/images/ph-pack.png"),variant:"rounded"}),subheader:Object(n.jsx)(S.a,{noWrap:!0,children:o.version}),subheaderTypographyProps:{variant:"subtitle2"},title:Object(n.jsx)(S.a,{noWrap:!0,children:o.name}),titleTypographyProps:{variant:"subtitle1"}}),Object(n.jsxs)(U.a,{children:[Object(n.jsx)(S.a,{component:"p",color:"textSecondary",variant:"body2",children:o.description}),Object(n.jsxs)(v.a,{mt:2,children:[Object(n.jsx)(S.a,{variant:"h6",children:"Addons"}),Object(n.jsx)(T.a,{})]}),Object(n.jsx)(v.a,{mt:2,children:Object(n.jsx)(k.a,{container:!0,spacing:2,children:null===(t=o.addons)||void 0===t?void 0:t.map((function(e,t){return Object(n.jsx)(V,{addon:e,id:"".concat(t)},t)}))})}),Object(n.jsxs)(v.a,{mt:2,children:[Object(n.jsx)(S.a,{variant:"h6",children:"Instructions"}),Object(n.jsx)(T.a,{})]}),Object(n.jsx)(v.a,{mt:2,children:Object(n.jsx)(k.a,{container:!0,spacing:2,children:null===(a=o.instructions)||void 0===a?void 0:a.map((function(e,t){return Object(n.jsx)(ae,{instruction:e,id:"".concat(t)},t)}))})})]})]})})})})),ne=a(138),oe=a(139),ie=a(140),se=a(141),ce=(a(103),Object(c.b)((function(e){return{locationState:e.location}}),{})((function(e){var t=e.locationState,a=e.server;return Object(n.jsx)(k.a,{className:"home-server",item:!0,xs:12,sm:6,children:Object(n.jsx)(v.a,{mt:2,children:Object(n.jsxs)(z.a,{elevation:3,variant:"elevation",square:!0,children:[Object(n.jsx)(L.a,{avatar:Object(n.jsx)(y.a,{src:a.image||"".concat(t.publicUrl,"/images/ph-server.png"),variant:"rounded"}),subheader:a.description,subheaderTypographyProps:{variant:"subtitle2"},title:a.name,titleTypographyProps:{variant:"subtitle1"}}),Object(n.jsx)(U.a,{children:Object(n.jsxs)(ne.a,{dense:!0,disablePadding:!0,children:[Object(n.jsxs)(K.a,{disableGutters:!0,children:[Object(n.jsx)(oe.a,{children:Object(n.jsx)(ie.a,{})}),Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(S.a,{component:"p",color:"textPrimary",variant:"body1",children:"Address"}),Object(n.jsx)(S.a,{component:"p",color:"textSecondary",variant:"body2",children:a.address})]})]}),Object(n.jsxs)(K.a,{disableGutters:!0,children:[Object(n.jsx)(oe.a,{children:Object(n.jsx)(se.a,{})}),Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(S.a,{component:"p",color:"textPrimary",variant:"body1",children:"Port"}),Object(n.jsx)(S.a,{component:"p",color:"textSecondary",variant:"body2",children:a.port})]})]})]})})]})})})}))),de={setInstance:N,setInstanceIsEnabled:W},me=Object(c.b)((function(e){return{configurationState:e.configuration,expandState:e.expand,locationState:e.location}}),de),le=Object(b.a)((function(e){return Object(j.a)({collapse:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expand:{transform:"rotate(180deg)"}})})),he=me((function(e){var t,a,r,i,s,c,d,m,l,h,u,f,p=e.configurationState,g=e.expandState,w=e.locationState,b=e.setInstance,j=e.setInstanceIsEnabled,A=le(),R="HOME",D=null===(t=g.instance.HOME)||void 0===t?void 0:t.isEnabled;Object(o.useEffect)((function(){F(g.instance)&&b(R,{isEnabled:!1})}),[g,R,b,j]);return Object(n.jsxs)(v.a,{className:"home",children:[Object(n.jsxs)(x.a,{color:"default",position:"fixed",children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)(y.a,{src:(null===(a=p.profile.game)||void 0===a?void 0:a.image)||"".concat(w.publicUrl,"/images/ph-game.png"),style:{marginRight:"16px"},variant:"rounded"}),Object(n.jsxs)(k.a,{item:!0,zeroMinWidth:!0,children:[Object(n.jsx)(S.a,{noWrap:!0,variant:"subtitle1",children:null===(r=p.profile.game)||void 0===r?void 0:r.name}),Object(n.jsx)(S.a,{noWrap:!0,variant:"subtitle2",children:null===(i=p.profile.game)||void 0===i?void 0:i.version})]}),Object(n.jsxs)(k.a,{item:!0,style:{marginLeft:"auto",minWidth:"150px",textAlign:"right"},children:[Object(n.jsx)(M.a,{hidden:E(null===(s=p.profile.game)||void 0===s?void 0:s.url),href:(null===(c=p.profile.game)||void 0===c?void 0:c.url)||"#",target:"_blank",children:Object(n.jsx)(I.a,{})}),Object(n.jsx)(M.a,{hidden:E(null===(d=p.profile.game)||void 0===d?void 0:d.download),href:(null===(m=p.profile.game)||void 0===m?void 0:m.download)||"#",target:"_blank",children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(M.a,{hidden:E(null===(l=p.profile.game)||void 0===l?void 0:l.description),className:D?A.expand:A.collapse,onClick:function(){j(R,!D)},children:Object(n.jsx)(_.a,{})})]})]}),Object(n.jsx)(P.a,{in:D,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(O.a,{children:Object(n.jsx)(S.a,{component:"p",color:"textSecondary",variant:"body2",children:null===(h=p.profile.game)||void 0===h?void 0:h.description})})})]}),Object(n.jsx)(O.a,{}),Object(n.jsxs)(v.a,{mt:2,children:[Object(n.jsx)(S.a,{variant:"h6",children:"Packs"}),Object(n.jsx)(T.a,{})]}),Object(n.jsx)(k.a,{container:!0,children:null===(u=p.profile.packs)||void 0===u?void 0:u.map((function(e,t){return Object(n.jsx)(re,{pack:e},"".concat(t))}))}),Object(n.jsxs)(v.a,{mt:2,children:[Object(n.jsx)(S.a,{variant:"h6",children:"Servers"}),Object(n.jsx)(T.a,{})]}),Object(n.jsx)(k.a,{container:!0,spacing:2,children:null===(f=p.profile.servers)||void 0===f?void 0:f.map((function(e,t){return Object(n.jsx)(ce,{server:e},"".concat(t))}))}),Object(n.jsx)(v.a,{mt:2})]})})),ue=function(e){var t=e.children,a=void 0===t?Object(n.jsx)(n.Fragment,{}):t;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(w.a,{children:[Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",rel:"stylesheet"}),Object(n.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),Object(n.jsx)(g.a,{children:a})]})},fe=function(e){var t=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(d.a,{basename:"/game-packs-profiler",children:Object(n.jsx)(m.c,{children:Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(he,{})})})}),t]})},pe=function(e){var t=e.children,a=Object(u.a)({palette:{type:"dark"}});return Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{theme:a,children:Object(n.jsx)(p.a,{children:Object(n.jsx)(ue,{children:t})})})})},ge=function(e){var t=e.children;return Object(n.jsx)("div",{children:Object(n.jsx)(fe,{children:t})})},we=function(e){var t=e.children,a=Object(u.a)({palette:{type:"light"}});return Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{theme:a,children:Object(n.jsx)(p.a,{children:Object(n.jsx)(ue,{children:t})})})})},be=function(e){var t=e.children;return Object(n.jsx)(fe,{children:t})};!function(e){e[e.Default=0]="Default",e[e.MaterialDark=1]="MaterialDark",e[e.MaterialLight=2]="MaterialLight"}(r||(r={}));var je=function(e){var t=e.themeType,o=e.children;switch(t){case r.MaterialDark:return a(104),Object(n.jsx)(pe,{children:Object(n.jsx)(ge,{children:o})});case r.MaterialLight:return a(105),Object(n.jsx)(we,{children:Object(n.jsx)(be,{children:o})});default:return a(106),Object(n.jsx)(l,{children:Object(n.jsx)(h,{children:o})})}},ve={production:!0,profile:"configuration.json",theme:r.MaterialDark},xe="CONFIGURATION_1",Oe="CONFIGURATION_2",ye="LOCATION_1",ke={setProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"profile.json",t=a(107)("./".concat(e));return{type:xe,profile:t}},setPublicUrl:function(e){return{type:ye,publicUrl:e}}},Se=Object(c.b)((function(e){return{configurationState:e.configuration,locationState:e.location}}),ke)((function(e){var t=e.configurationState,a=e.locationState,r=e.setProfile,i=e.setPublicUrl;return Object(o.useEffect)((function(){F(t.profile)&&r("profile.json"),E(a.publicUrl)&&i(window.location.href)}),[t,a,r,i]),Object(n.jsx)(je,{themeType:ve.theme})})),Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),o(e),i(e)}))},Pe=a(29),Te=a(64),Ie=a(15),Ce={filepath:"configuration.json",profile:{}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Ie.a)(Object(Ie.a)({},e),{},{profile:t.profile});case Oe:return Object(Ie.a)(Object(Ie.a)({},e),{},{filepath:t.filepath});default:return e}},Ae=a(36),Fe={instance:{}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(Ie.a)(Object(Ie.a)({},e),{},{instance:Object(Ae.a)({},t.instanceKey,t.instanceValue)});case q:return Object(Ie.a)(Object(Ie.a)({},e),{},{instance:Object(Ae.a)({},t.instanceKey,{isEnabled:t.instanceValueIsEnabled})});default:return e}},Re={publicUrl:""},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(Ie.a)(Object(Ie.a)({},e),{},{publicUrl:t.publicUrl});default:return e}},qe=Object(Pe.c)({configuration:_e,expand:Ee,location:De}),Ne=Object(Pe.d)(qe,Object(Pe.a)(Te.a));s.a.render(Object(n.jsx)(c.a,{store:Ne,children:Object(n.jsx)(Se,{})}),document.querySelector("#root")),Me()},55:function(e){e.exports=JSON.parse('{"game":{"description":"Minecraft is a sandbox video game created by Swedish developer Markus Persson, released by Mojang in 2011 and purchased by Microsoft in 2014.","download":"https://tlauncher.org/installer","image":"https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/menu/menu-buy.gif","name":"Minecraft","timestamp":1608443872,"url":"https://tlauncher.org/en/","version":"1.16.4"},"packs":[{"description":"Minecraft Forge is a modding API (Application Programming Interface), which makes it easier to create mods, and also make sure mods are compatible with each other.","download":"https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.16.4-35.1.36/forge-1.16.4-35.1.36-installer.jar","image":"https://avatars2.githubusercontent.com/u/1390178?s=200&v=4","name":"Forge - Automatic Installation (Premium)","timestamp":1608443872,"url":"http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.16.4.html","version":"35.1.36","addons":[{"description":"Minecraft Custom Profile with all the completed list of addons used in the server.","download":"https://www.mediafire.com/file/i9shurtmg5i36o5/%2528Completed%2529_Forge_1.16.4.zip/file","image":"","name":"Custom Profile (1.16.4-35.1.36)","required":false,"timestamp":1581794539,"url":"","version":"Completed"},{"description":"Minecraft Custom Profile with only the required list of addons used in the server.","download":"https://www.mediafire.com/file/cxemhzkzpdqtozm/%2528Required%2529_Forge_1.16.4.zip/file","image":"","name":"Custom Profile (1.16.4-35.1.36)","timestamp":1581794539,"url":"","version":"Required"}],"instructions":["Download and install <a href=\\"https://curseforge.overwolf.com/\\" target=\\"_blank\\"><strong>CurseForge</strong></a>","Run the program","Select the <strong>\\"Minecraft\\"</strong> button","Select the <strong>\\"Create Custom Profile\\"</strong> button","Import the downloaded profile","Run the game","<strong><u>Reference</u></strong><br><a href=\\"https://ratserx.github.io/public/images/forge-automatic-installation-premium.gif\\" target=\\"_blank\\"><img src=\\"https://ratserx.github.io/public/images/forge-automatic-installation-premium.gif\\" style=\\"max-height: 300px; max-width: 100%\\">"]},{"description":"Minecraft Forge is a modding API (Application Programming Interface), which makes it easier to create mods, and also make sure mods are compatible with each other.","download":"https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.16.4-35.1.36/forge-1.16.4-35.1.36-installer.jar","image":"https://avatars2.githubusercontent.com/u/1390178?s=200&v=4","name":"Forge - Automatic Installation (Regular)","timestamp":1608443872,"url":"http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.16.4.html","version":"35.1.36","addons":[{"description":"Analyzer for Minecraft instance profiles.","download":"https://github.com/RatserX/minecraft-instance-analyzer/archive/main.zip","image":"https://raw.githubusercontent.com/RatserX/ratserx.github.io/master/public/images/minecraft-instance-analyzer.gif","name":"Analyzer","timestamp":1608443872,"url":"https://github.com/RatserX/minecraft-instance-analyzer","version":"Release","wiki":"https://github.com/RatserX/minecraft-instance-analyzer/blob/main/README.md"}],"instructions":["Download and install <a href=\\"https://tlauncher.org/\\" target=\\"_blank\\"><strong>TLauncher</strong></a>","Check this <a href=\\"https://tlauncher.org/en/install-mods.html\\" target=\\"_blank\\"><strong>Webpage</strong></a> for additional information","Run the program","Change the version from <strong>\\"Latest release\\"</strong> to <strong>\\"Forge\\"</strong>","Select the <strong>\\"Install\\"</strong> button and wait until the download process ends","Download and install <a href=\\"https://github.com/RatserX/minecraft-instance-analyzer/archive/main.zip\\" target=\\"_blank\\"><strong>Minecraft Instance Analyzer</strong></a>","Check this <a href=\\"https://github.com/RatserX/minecraft-instance-analyzer/blob/main/README.md\\" target=\\"_blank\\"><strong>Webpage</strong></a> for additional information","Run either main.bat (Windows) or main.sh (Linux) as administrator","Follow the program instructions","Run the game","<strong><u>Reference</u></strong><br><a href=\\"https://ratserx.github.io/public/images/forge-automatic-installation-regular.gif\\" target=\\"_blank\\"><img src=\\"https://ratserx.github.io/public/images/forge-automatic-installation-regular.gif\\" style=\\"max-height: 300px; max-width: 100%\\">"]},{"description":"Minecraft Forge is a modding API (Application Programming Interface), which makes it easier to create mods, and also make sure mods are compatible with each other.","download":"https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.16.4-35.1.36/forge-1.16.4-35.1.36-installer.jar","image":"https://avatars2.githubusercontent.com/u/1390178?s=200&v=4","name":"Forge - Manual Installation","timestamp":1608443872,"url":"http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.16.4.html","version":"35.1.36","addons":[{"description":"Simplified AI modification mod focused on performance and low-level modifications to AIs in the game. Picking up the slack for the base game and improving it for a modded ecosystem. Handling common problems such as too many animals, performance hits from swarms of zombies, and simple remove tasks skipped by larger AI improvement mods.","download":"https://www.curseforge.com/minecraft/mc-mods/ai-improvements/download/3031978","image":"https://media.forgecdn.net/avatars/thumbnails/21/699/64/64/635731173265581096.png","name":"AI Improvements","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/ai-improvements","version":"0.3.0"},{"description":"Apotheosis is a mod about improving the vanilla experience while attempting to stay true to the base game.  It adds new potions, enchantments, dangers, mechanics, and other interesting things that greatly improve the Minecraft experience.","download":"https://www.curseforge.com/minecraft/mc-mods/apotheosis/download/3095843","image":"https://media.forgecdn.net/avatars/thumbnails/190/392/64/64/636855526449930608.png","name":"Apotheosis","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/apotheosis","version":"4.4.1","wiki":"https://www.curseforge.com/minecraft/mc-mods/apotheosis"},{"description":"Astral Sorcery is a magic mod focused around harnessing the powers of starlight and the constellations. Explore and discover the world and the sky above you; focus starlight to your will, strengthening yourself or enhancing the world around you.","download":"https://www.curseforge.com/minecraft/mc-mods/astral-sorcery/download/3156477","image":"https://media.forgecdn.net/avatars/thumbnails/88/266/64/64/636222656989756330.png","name":"Astral Sorcery","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/astral-sorcery","version":"1.13.9","wiki":"https://www.curseforge.com/minecraft/mc-mods/astral-sorcery"},{"description":"Biomes O\' Plenty is an expansive biome mod for Minecraft that adds a slew of new, unique biomes to the Overworld and Nether!  To go along with the new biomes, it adds new plants, flowers, trees, building blocks, and much more!","download":"https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/download/3159697","image":"https://media.forgecdn.net/avatars/thumbnails/218/291/64/64/637010824665411754.png","name":"Biomes O\' Plenty","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty","version":"13.0.0.427-universal"},{"description":"Have you ever picked up a magic mod for Minecraft, and thought that it was too tame? Was there not enough danger involved when creating your next high-tech gadget? Bored with all of those peaceful animals just staring at you without a care in the world? Well then, I am glad you came here!","download":"https://www.curseforge.com/minecraft/mc-mods/blood-magic/download/3149693","image":"https://media.forgecdn.net/avatars/thumbnails/145/26/64/64/636559774600919459.jpeg","name":"Blood Magic","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/blood-magic","version":"3.0.3-8","wiki":"https://docs.google.com/document/d/1XLX9VgXOBSRBPyEptMprAJh_SE3W-zvXFGfDu-0m60Q/edit"},{"description":"This mod adds several chisels, a wrench and ways to copy designs and store bits. These tools enable you to create new custom decorative blocks and designs to decorate your bases and improve the flexibility of your building style.","download":"https://www.curseforge.com/minecraft/mc-mods/chisels-bits/download/3133859","image":"https://media.forgecdn.net/avatars/thumbnails/29/143/64/64/635840490766549459.png","name":"Chisels & Bits","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/chisels-bits","version":"0.2.8-RELEASE","wiki":"https://chiselsandbits.github.io/Chisels-and-Bits/"},{"description":"Clumps groups XP orbs together into a single entity to reduce lag when there are many in a small area. Ontop of this, it also makes the player immediately collect the orbs once they touch the player, so you are not stuck with a bunch of orbs in your face.","download":"https://www.curseforge.com/minecraft/mc-mods/clumps/download/3137103","image":"https://media.forgecdn.net/avatars/thumbnails/84/193/64/64/636193647832736518_animated.gif","name":"Clumps","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/clumps","version":"6.0.0.13"},{"description":"\\" Corail Tombstone keeps you from losing your belongings on death, with many features of survivability and dimensional teleportation, in a medieval fantasy atmosphere related to the grave\'s souls. \\"","download":"https://www.curseforge.com/minecraft/mc-mods/corail-tombstone/download/3152800","image":"https://media.forgecdn.net/avatars/thumbnails/130/354/64/64/636459742199274923.jpeg","name":"Corail Tombstone","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/corail-tombstone","version":"6.2.3","wiki":"https://www.curseforge.com/minecraft/mc-mods/corail-tombstone"},{"description":"Curios is a flexible and expandable accessory/equipment API for users and developers.","download":"https://www.curseforge.com/minecraft/mc-mods/curios/download/3154866","image":"https://media.forgecdn.net/avatars/thumbnails/195/772/64/64/636881112930494939.png","name":"Curios API (Forge)","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/curios","version":"4.0.3.3"},{"description":"Emojiful adds in emoji to minecraft allowing you to send emotion with ease. It supports animated emojis too! It has emoji autocomplete and emoji selection to easily search all the available emojis.","download":"https://www.curseforge.com/minecraft/mc-mods/emojiful/download/3156116","image":"https://media.forgecdn.net/avatars/thumbnails/170/54/64/64/636719401079186770.png","name":"Emojiful","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/emojiful","version":"2.1.2"},{"description":"A simple Minecraft Forge mod that speeds up leaf decay after you cut down the wood in a tree. By default it will only take about five seconds before all leaves are gone.","download":"https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay/download/3052146","image":"https://media.forgecdn.net/avatars/thumbnails/18/699/64/64/635683366119611662.png","name":"Fast Leaf Decay","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay","version":"v25"},{"description":"This mod does a couple things relating to the vanilla furnace, blast furnace, and smoker so that they run faster during their update method, improving TPS.","download":"https://www.curseforge.com/minecraft/mc-mods/fastfurnace/download/3069048","image":"https://media.forgecdn.net/avatars/thumbnails/164/243/64/64/636686097562167838.png","name":"FastFurnace","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fastfurnace","version":"4.3.0"},{"description":"This is a mod aimed at improving performance of all crafting-related functions.  It fixes the bug introduced in Minecraft 1.12 where shift-click crafting a stack of items could cause momentary freezes. However, it does slightly more than just fixing that issue.","download":"https://www.curseforge.com/minecraft/mc-mods/fastworkbench/download/3112661","image":"https://media.forgecdn.net/avatars/thumbnails/164/244/64/64/636686097718417988.png","name":"FastWorkbench","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fastworkbench","version":"4.4.1"},{"description":"Displays current progress in corner of game while backup is running.","download":"https://www.curseforge.com/minecraft/mc-mods/ftb-backups/download/3038811","image":"https://media.forgecdn.net/avatars/thumbnails/275/359/64/64/637261947838118702.png","name":"FTB Backups","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/ftb-backups","version":"2.1.1.6"},{"description":"JEI is an item and recipe viewing mod for Minecraft, built from the ground up for stability and performance.","download":"https://www.curseforge.com/minecraft/mc-mods/jei/download/3157864","image":"https://media.forgecdn.net/avatars/thumbnails/29/69/64/64/635838945588716414.jpeg","name":"Just Enough Items (JEI)","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/jei","version":"7.6.1.65","wiki":"https://www.curseforge.com/minecraft/mc-mods/jei"},{"description":"This simple mod adds small variations of bridges. For now this version has got 24 different types of bridges. Guardrails are now working too!","download":"https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/download/3100993","image":"https://media.forgecdn.net/avatars/thumbnails/237/234/64/64/637098539787193844.jpeg","name":"Macaw\'s Bridges","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/macaws-bridges","version":"1.0.4","wiki":"https://docs.google.com/spreadsheets/d/1dBcTfrt-MH91NuCmJzqbFDjrLftuKMc08fp4bjGJCD4/edit#gid=712741639"},{"description":"This mod currently adds 47+ custom /gamerule options (more in future)","download":"https://www.curseforge.com/minecraft/mc-mods/custom-game-rules/download/3151504","image":"https://media.forgecdn.net/avatars/thumbnails/275/700/64/64/637263098984560016.png","name":"More Powerful Game Rules","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/custom-game-rules","version":"1.1.0"},{"description":"Morpheus is a server-only mod that adds sleep voting to a forge based server. When a player sleeps, all other players in the same dimension are notified so it is easier to coordinate. Also, you can configure a ratio of players that are required to make it morning (default 50%) messages can be customised in the config and alerts can be turned off if needed.","download":"https://www.curseforge.com/minecraft/mc-mods/morpheus/download/3114135","image":"https://media.forgecdn.net/avatars/thumbnails/4/608/64/64/635351426949975481.png","name":"Morpheus","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/morpheus","version":"4.2.68"},{"description":"This mod adds in what Minecraft has been missing for years, furniture! It includes over 80 unique pieces of furniture to decorate your bedroom, kitchen, living room and even your garden! Turn your house into the dream house you have never been able to have until now.","download":"https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod/download/3081350","image":"https://media.forgecdn.net/avatars/thumbnails/178/942/64/64/636782028170955665.png","name":"MrCrayfish\'s Furniture Mod","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod","version":"7.0.0-pre19","wiki":"https://mrcrayfishs-furniture-mod.fandom.com/wiki/MrCrayfish%27s_Furniture_Mod_Wiki"},{"description":"Neat is a mod that adds Unit Frames to the top of every entity. That image is a good example of it.","download":"https://www.curseforge.com/minecraft/mc-mods/neat/download/3163122","image":"https://media.forgecdn.net/avatars/thumbnails/29/326/64/64/635843253254829591.png","name":"Neat","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/neat","version":"1.7-25"},{"description":"ObserverLib is a library mod, usable to reliably observe block changes in a potentially large area with very little performance implications.","download":"https://www.curseforge.com/minecraft/mc-mods/observerlib/download/3162044","image":"https://media.forgecdn.net/avatars/thumbnails/194/895/64/64/636875409389755469.png","name":"ObserverLib","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/observerlib","version":"1.5.1"},{"description":"OptiFine is a Minecraft optimization mod.","download":"http://optifine.net/adloadx?f=preview_OptiFine_1.16.4_HD_U_G6_pre10.jar&x=63c7","image":"","name":"OptiFine HD U G6 pre10","required":false,"timestamp":1608443872,"url":"https://optifine.net/home","version":"1.16.4_HD_U_G6_pre10"},{"description":"Welcome to the brand new HarvestCraft for 1.14.4 and beyond!  Please read carefully as this is NOT a update of Pam\'s HarvestCraft but a re-boot.  Pam\'s HarvestCraft will come in four mods.  This is the second and adds CROPS ONLY.  I did not touch vanilla food at all.","download":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops/download/3076451","image":"https://media.forgecdn.net/avatars/thumbnails/247/685/64/64/637164508107044129.png","name":"Pam\'s HarvestCraft 2 - Crops","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops","version":"1.0.1","wiki":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops"},{"description":"Welcome to the brand new HarvestCraft for 1.14.4 and beyond!  Please read carefully as this is NOT a update of Pam\'s HarvestCraft but a re-boot.  Pam\'s HarvestCraft will come in four mods.  This is the third mod and adds FRUIT TREES ONLY.  I did not touch vanilla trees at all.","download":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees/download/3117043","image":"https://media.forgecdn.net/avatars/thumbnails/252/293/64/64/637187641584077072.png","name":"Pam\'s HarvestCraft 2 - Trees","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees","version":"1.0.0","wiki":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees"},{"description":"Holds shared code for use in my mods.","download":"https://www.curseforge.com/minecraft/mc-mods/placebo/download/3092113","image":"https://media.forgecdn.net/avatars/thumbnails/134/260/64/64/636490526725752670.png","name":"Placebo","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/placebo","version":"4.3.3"},{"description":"RandomPatches is a mod that contains a bunch of miscellaneous patches for Minecraft. RandomPatches only contains features that require ASM transformers. Tweaks that don\'t require ASM transformers go in RandomTweaks, which I recommend as a companion mod.","download":"https://www.curseforge.com/minecraft/mc-mods/randompatches-forge/download/3158999","image":"https://media.forgecdn.net/avatars/thumbnails/137/948/64/64/636518346385385655.png","name":"RandomPatches (Forge)","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/randompatches-forge","version":"2.1.5-forge"},{"description":"Serene Seasons is a Minecraft mod that adds seasons.  Grass and foliage colors will change throughout the year, and in the winter, temperatures will shift and allow for snow to fall in some biomes that don\'t normally receive any.  Seasons also affect various other features, like crop growth (Different crops are limited to different seasons), weather (More rain in Spring, more storms in Summer, etc.), and more!","download":"https://www.curseforge.com/minecraft/mc-mods/serene-seasons/download/3154197","image":"https://media.forgecdn.net/avatars/thumbnails/241/247/64/64/637126527280083825.png","name":"Serene Seasons","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/serene-seasons","version":"4.0.0.86-universal","wiki":"https://github.com/Glitchfiend/SereneSeasons/wiki"},{"description":"This mod allows you to change your Minecraft server skin on the fly even if it is in offline mode.","download":"https://www.curseforge.com/minecraft/mc-mods/skinchanger/download/3109348","image":"https://media.forgecdn.net/avatars/thumbnails/266/829/64/64/637233714503353824.png","name":"SkinChanger","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/skinchanger","version":"0.2.0","wiki":"https://www.curseforge.com/minecraft/mc-mods/skinchanger"},{"description":"Put your most frequently used items within convenient reach. Storage Drawers borrows ideas from Jabba and Bibliocraft, resulting in a highly functional, compact, and aesthetic storage solution that is meant to complement rather than replace those mods.","download":"https://www.curseforge.com/minecraft/mc-mods/storage-drawers/download/3092987","image":"https://media.forgecdn.net/avatars/thumbnails/10/842/64/64/635468327818431130.png","name":"Storage Drawers","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/storage-drawers","version":"8.2.1","wiki":"https://www.curseforge.com/minecraft/mc-mods/storage-drawers"},{"description":"Thut\'s Mods are partnered with BisectHosting!","download":"https://www.curseforge.com/minecraft/mc-mods/thut-essentials/download/3147345","image":"https://media.forgecdn.net/avatars/thumbnails/50/839/64/64/636096619694138314.png","name":"Thut Essentials","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/thut-essentials","version":"4.1.3","wiki":"https://github.com/Thutmose/ThutEssentials/wiki"},{"description":"Thut\'s Mods are partnered with BisectHosting!","download":"https://www.curseforge.com/minecraft/mc-mods/thutperms/download/3128898","image":"https://media.forgecdn.net/avatars/thumbnails/44/581/64/64/636033583746094733.png","name":"ThutPerms","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/thutperms","version":"4.0.0","wiki":"https://github.com/Thutmose/ThutPerms/wiki"},{"description":"[Forge] This mod adds tall towers in your world, inspired by The Legend Of Zelda : Breath Of The Wild.","download":"https://www.curseforge.com/minecraft/mc-mods/towers-of-the-wild/download/3103749","image":"https://media.forgecdn.net/avatars/thumbnails/310/342/64/64/637398464252136645.png","name":"Towers Of The Wild","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/towers-of-the-wild","version":"2.0.1"},{"description":"VoxelMap is a minimap and worldmap mod that makes a great effort to be accurate to the colors you see in the world (and your resource pack).   Display your surroundings, or view the entire (explored) world.","download":"https://www.curseforge.com/minecraft/mc-mods/voxelmap/download/3124900","image":"https://media.forgecdn.net/avatars/thumbnails/11/698/64/64/635499892408422072.jpeg","name":"VoxelMap","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/voxelmap","version":"1.10.14"},{"description":"This mod adds waystone blocks that the player can return to once they\'ve been activated, either through a Warp Scroll, a rechargeable Warp Stone, or by using an existing waystone to hop from one to the other.","download":"https://www.curseforge.com/minecraft/mc-mods/waystones/download/3098215","image":"https://media.forgecdn.net/avatars/thumbnails/42/418/64/64/636008504954894502.png","name":"Waystones","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/waystones","version":"7.3.1"}],"instructions":["Download and install <a href=\\"https://tlauncher.org/\\" target=\\"_blank\\"><strong>TLauncher</strong></a>","Check this <a href=\\"https://tlauncher.org/en/install-mods.html\\" target=\\"_blank\\"><strong>Webpage</strong></a> for additional information","Run the program","Change the version from <strong>\\"Latest release\\"</strong> to <strong>\\"Forge\\"</strong>","Select the <strong>\\"Install\\"</strong> button and wait until the download process ends","Select the <strong>\\"Open Folder\\"</strong> button and go to the mods folder (%AppData%\\\\.minecraft\\\\mods\\\\) or create the folder if it does not exists","Move the downloaded addons to the mods folder","Run the game"]}],"servers":[{"address":"192.160.12.12","description":"A server for the game Minecraft - Spigot","image":"","name":"Minecraft Server","port":25565},{"address":"192.160.12.12","description":"A server for the game Minecraft - SpongeForge","image":"","name":"Forge Server","port":25566}]}')},80:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.9663eda0.chunk.js.map