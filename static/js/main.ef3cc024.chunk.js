(this["webpackJsonpgame-packs-profiler"]=this["webpackJsonpgame-packs-profiler"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){var n={"./profile":55,"./profile.json":55};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=107},108:function(e,t,a){"use strict";a.r(t);var n,o=a(2),r=a(0),i=a(13),s=a.n(i),c=(a(80),a(16)),d=a(40),m=a(8),l=function(e){var t=e.children;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:t})})},h=function(e){var t=e.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(m.c,{children:Object(o.jsx)(m.a,{exact:!0,path:"/"})})}),t]})},u=a(65),p=a(144),f=a(145),g=(a(86),a(143)),b=a(57),w=a(123),j=a(148),v=a(146),O=a(141),x=a(142),y=a(149),k=a(124),P=a(26),S=a(129),M=a(147),I=a(136),T=a(130),F=a(131),A=a(132),E=(a(87),function(e){return void 0===e}),C=function(e){return E(e)||function(e){return 0===Object.getOwnPropertyNames(e).length}(e)},N=function(e){return function(e){return void 0===e}(e)||function(e){return 0===e.length}(e)},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Intl.DateTimeFormat(t,a);return n.format(e)},D="EXPAND_1",H="EXPAND_2",U=function(e,t){return{type:D,instanceKey:e,instanceValue:t}},W=function(e,t){return{type:H,instanceKey:e,instanceValueIsEnabled:t}},_=a(125),L=a(126),R=a(127),B=(a(88),a(128)),G=(a(89),{setInstance:U,setInstanceIsEnabled:W}),J=Object(c.b)((function(e){return{expandState:e.expand,locationState:e.location}}),G),z=Object(w.a)((function(e){return Object(j.a)({collapse:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expand:{transform:"rotate(180deg)"},disablePaddingBottom:{paddingBottom:"0"},disablePaddingTop:{paddingTop:"0"}})})),K=J((function(e){var t,a=e.expandState,n=e.locationState,i=e.setInstance,s=e.setInstanceIsEnabled,c=e.addon,d=e.id,m=z(),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new Date(1e3*e);return q(n,t,a)}(c.timestamp),h=!!E(c.required)||c.required,u="HOMEPACKADDON".concat(d),p=null===(t=a.instance[u])||void 0===t?void 0:t.isEnabled;Object(r.useEffect)((function(){C(a.instance)&&i(u,{isEnabled:!1})}),[a,u,i,s]);return Object(o.jsx)(k.a,{className:"home-pack-addon",item:!0,xs:12,sm:6,md:4,xl:3,zeroMinWidth:!0,children:Object(o.jsx)(v.a,{children:Object(o.jsxs)(_.a,{variant:"outlined",square:!0,children:[Object(o.jsx)(L.a,{avatar:Object(o.jsx)(y.a,{src:c.image||"".concat(n.publicUrl,"/images/ph-addon.png"),variant:"rounded"}),className:"disable-padding-bottom",subheader:Object(o.jsx)(P.a,{noWrap:!0,variant:"subtitle2",children:c.version}),subheaderTypographyProps:{variant:"subtitle2"},title:Object(o.jsx)(P.a,{noWrap:!0,variant:"subtitle1",children:c.name}),titleTypographyProps:{variant:"subtitle1"}}),Object(o.jsxs)(R.a,{children:[Object(o.jsxs)(P.a,{component:"p",color:"textSecondary",noWrap:!0,variant:"caption",children:[Object(o.jsx)("strong",{children:"Date:"})," ",l]}),Object(o.jsxs)(P.a,{component:"p",color:"textSecondary",noWrap:!0,variant:"caption",children:[Object(o.jsx)("strong",{children:"Required:"})," ",h?"Yes":"No"]})]}),Object(o.jsxs)(B.a,{className:"disable-padding-top",disableSpacing:!0,children:[Object(o.jsx)(S.a,{hidden:N(c.url),href:c.url||"#",target:"_blank",children:Object(o.jsx)(T.a,{})}),Object(o.jsx)(S.a,{hidden:N(c.download),href:c.download||"#",target:"_blank",children:Object(o.jsx)(F.a,{})}),Object(o.jsx)(S.a,{className:p?m.expand:m.collapse,hidden:N(c.description),onClick:function(){s(u,!p)},style:{marginLeft:"auto"},children:Object(o.jsx)(A.a,{})})]}),Object(o.jsx)(M.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(o.jsx)(R.a,{children:Object(o.jsx)(P.a,{component:"p",color:"textSecondary",variant:"body2",children:c.description})})})]})})})})),V=a(150),Y=a(133),X=a(135),Z=a(63),Q=a.n(Z),$=a(134),ee=Object(w.a)((function(e){return{smallAvatar:{width:e.spacing(3),height:e.spacing(3)}}})),te=function(e){var t=e.instruction;ee();return Object(o.jsxs)(V.a,{children:[Object(o.jsx)(Y.a,{children:Object(o.jsx)($.a,{})}),Object(o.jsx)(X.a,{children:Object(o.jsx)(P.a,{component:"p",variant:"body2",children:Q()(t)})})]})},ae=Object(c.b)((function(e){return{expandState:e.expand,locationState:e.location}}),{})((function(e){var t,a,n=e.locationState,r=e.pack;return Object(o.jsx)(k.a,{className:"home-pack",item:!0,xs:12,zeroMinWidth:!0,children:Object(o.jsx)(v.a,{mt:2,children:Object(o.jsxs)(_.a,{elevation:3,variant:"elevation",square:!0,children:[Object(o.jsx)(L.a,{action:Object(o.jsxs)("div",{children:[Object(o.jsx)(S.a,{hidden:N(r.url),href:r.url||"#",target:"_blank",children:Object(o.jsx)(T.a,{})}),Object(o.jsx)(S.a,{hidden:N(r.download),href:r.download||"#",target:"_blank",children:Object(o.jsx)(F.a,{})})]}),avatar:Object(o.jsx)(y.a,{src:r.image||"".concat(n.publicUrl,"/images/ph-pack.png"),variant:"rounded"}),subheader:Object(o.jsx)(P.a,{noWrap:!0,children:r.version}),subheaderTypographyProps:{variant:"subtitle2"},title:Object(o.jsx)(P.a,{noWrap:!0,children:r.name}),titleTypographyProps:{variant:"subtitle1"}}),Object(o.jsxs)(R.a,{children:[Object(o.jsx)(P.a,{component:"p",color:"textSecondary",variant:"body2",children:r.description}),Object(o.jsxs)(v.a,{mt:2,children:[Object(o.jsx)(P.a,{variant:"h6",children:"Addons"}),Object(o.jsx)(I.a,{})]}),Object(o.jsx)(v.a,{mt:2,children:Object(o.jsx)(k.a,{container:!0,spacing:2,children:null===(t=r.addons)||void 0===t?void 0:t.map((function(e,t){return Object(o.jsx)(K,{addon:e,id:"".concat(t)},t)}))})}),Object(o.jsxs)(v.a,{mt:2,children:[Object(o.jsx)(P.a,{variant:"h6",children:"Instructions"}),Object(o.jsx)(I.a,{})]}),Object(o.jsx)(v.a,{mt:2,children:Object(o.jsx)(k.a,{container:!0,spacing:2,children:null===(a=r.instructions)||void 0===a?void 0:a.map((function(e,t){return Object(o.jsx)(te,{instruction:e,id:"".concat(t)},t)}))})})]})]})})})})),ne=a(137),oe=a(138),re=a(139),ie=a(140),se=(a(103),Object(c.b)((function(e){return{locationState:e.location}}),{})((function(e){var t=e.locationState,a=e.server;return Object(o.jsx)(k.a,{className:"home-server",item:!0,xs:12,sm:6,children:Object(o.jsx)(v.a,{mt:2,children:Object(o.jsxs)(_.a,{elevation:3,variant:"elevation",square:!0,children:[Object(o.jsx)(L.a,{avatar:Object(o.jsx)(y.a,{src:a.image||"".concat(t.publicUrl,"/images/ph-server.png"),variant:"rounded"}),subheader:a.description,subheaderTypographyProps:{variant:"subtitle2"},title:a.name,titleTypographyProps:{variant:"subtitle1"}}),Object(o.jsx)(R.a,{children:Object(o.jsxs)(ne.a,{dense:!0,disablePadding:!0,children:[Object(o.jsxs)(V.a,{disableGutters:!0,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(re.a,{})}),Object(o.jsxs)(X.a,{children:[Object(o.jsx)(P.a,{component:"p",color:"textPrimary",variant:"body1",children:"Address"}),Object(o.jsx)(P.a,{component:"p",color:"textSecondary",variant:"body2",children:a.address})]})]}),Object(o.jsxs)(V.a,{disableGutters:!0,children:[Object(o.jsx)(oe.a,{children:Object(o.jsx)(ie.a,{})}),Object(o.jsxs)(X.a,{children:[Object(o.jsx)(P.a,{component:"p",color:"textPrimary",variant:"body1",children:"Port"}),Object(o.jsx)(P.a,{component:"p",color:"textSecondary",variant:"body2",children:a.port})]})]})]})})]})})})}))),ce={setInstance:U,setInstanceIsEnabled:W},de=Object(c.b)((function(e){return{configurationState:e.configuration,expandState:e.expand,locationState:e.location}}),ce),me=Object(w.a)((function(e){return Object(j.a)({collapse:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expand:{transform:"rotate(180deg)"}})})),le=de((function(e){var t,a,n,i,s,c,d,m,l,h,u,p,f=e.configurationState,g=e.expandState,b=e.locationState,w=e.setInstance,j=e.setInstanceIsEnabled,E=me(),q="HOME",D=null===(t=g.instance.HOME)||void 0===t?void 0:t.isEnabled;Object(r.useEffect)((function(){C(g.instance)&&w(q,{isEnabled:!1})}),[g,q,w,j]);return Object(o.jsxs)(v.a,{className:"home",children:[Object(o.jsxs)(O.a,{color:"default",position:"fixed",children:[Object(o.jsxs)(x.a,{children:[Object(o.jsx)(y.a,{src:(null===(a=f.profile.game)||void 0===a?void 0:a.image)||"".concat(b.publicUrl,"/images/ph-game.png"),style:{marginRight:"16px"},variant:"rounded"}),Object(o.jsxs)(k.a,{item:!0,zeroMinWidth:!0,children:[Object(o.jsx)(P.a,{noWrap:!0,variant:"subtitle1",children:null===(n=f.profile.game)||void 0===n?void 0:n.name}),Object(o.jsx)(P.a,{noWrap:!0,variant:"subtitle2",children:null===(i=f.profile.game)||void 0===i?void 0:i.version})]}),Object(o.jsxs)(k.a,{item:!0,style:{marginLeft:"auto",minWidth:"150px",textAlign:"right"},children:[Object(o.jsx)(S.a,{hidden:N(null===(s=f.profile.game)||void 0===s?void 0:s.url),href:(null===(c=f.profile.game)||void 0===c?void 0:c.url)||"#",target:"_blank",children:Object(o.jsx)(T.a,{})}),Object(o.jsx)(S.a,{hidden:N(null===(d=f.profile.game)||void 0===d?void 0:d.download),href:(null===(m=f.profile.game)||void 0===m?void 0:m.download)||"#",target:"_blank",children:Object(o.jsx)(F.a,{})}),Object(o.jsx)(S.a,{hidden:N(null===(l=f.profile.game)||void 0===l?void 0:l.description),className:D?E.expand:E.collapse,onClick:function(){j(q,!D)},children:Object(o.jsx)(A.a,{})})]})]}),Object(o.jsx)(M.a,{in:D,timeout:"auto",unmountOnExit:!0,children:Object(o.jsx)(x.a,{children:Object(o.jsx)(P.a,{component:"p",color:"textSecondary",variant:"body2",children:null===(h=f.profile.game)||void 0===h?void 0:h.description})})})]}),Object(o.jsx)(x.a,{}),Object(o.jsxs)(v.a,{mt:2,children:[Object(o.jsx)(P.a,{variant:"h6",children:"Packs"}),Object(o.jsx)(I.a,{})]}),Object(o.jsx)(k.a,{container:!0,children:null===(u=f.profile.packs)||void 0===u?void 0:u.map((function(e,t){return Object(o.jsx)(ae,{pack:e},"".concat(t))}))}),Object(o.jsxs)(v.a,{mt:2,children:[Object(o.jsx)(P.a,{variant:"h6",children:"Servers"}),Object(o.jsx)(I.a,{})]}),Object(o.jsx)(k.a,{container:!0,spacing:2,children:null===(p=f.profile.servers)||void 0===p?void 0:p.map((function(e,t){return Object(o.jsx)(se,{server:e},"".concat(t))}))}),Object(o.jsx)(v.a,{mt:2})]})})),he=function(e){var t=e.children,a=void 0===t?Object(o.jsx)(o.Fragment,{}):t;return Object(o.jsxs)("div",{children:[Object(o.jsxs)(b.a,{children:[Object(o.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",rel:"stylesheet"}),Object(o.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),Object(o.jsx)(g.a,{children:a})]})},ue=function(e){var t=e.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)(d.a,{basename:"/game-packs-profiler",children:Object(o.jsx)(m.c,{children:Object(o.jsx)(m.a,{exact:!0,path:"/",children:Object(o.jsx)(le,{})})})}),t]})},pe=function(e){var t=e.children,a=Object(u.a)({palette:{type:"dark"}});return Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{theme:a,children:Object(o.jsx)(f.a,{children:Object(o.jsx)(he,{children:t})})})})},fe=function(e){var t=e.children;return Object(o.jsx)("div",{children:Object(o.jsx)(ue,{children:t})})},ge=function(e){var t=e.children,a=Object(u.a)({palette:{type:"light"}});return Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{theme:a,children:Object(o.jsx)(f.a,{children:Object(o.jsx)(he,{children:t})})})})},be=function(e){var t=e.children;return Object(o.jsx)(ue,{children:t})};!function(e){e[e.Default=0]="Default",e[e.MaterialDark=1]="MaterialDark",e[e.MaterialLight=2]="MaterialLight"}(n||(n={}));var we=function(e){var t=e.themeType,r=e.children;switch(t){case n.MaterialDark:return a(104),Object(o.jsx)(pe,{children:Object(o.jsx)(fe,{children:r})});case n.MaterialLight:return a(105),Object(o.jsx)(ge,{children:Object(o.jsx)(be,{children:r})});default:return a(106),Object(o.jsx)(l,{children:Object(o.jsx)(h,{children:r})})}},je={production:!0,profile:"configuration.json",theme:n.MaterialDark},ve="CONFIGURATION_1",Oe="CONFIGURATION_2",xe="LOCATION_1",ye={setProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"profile.json",t=a(107)("./".concat(e));return{type:ve,profile:t}},setPublicUrl:function(e){return{type:xe,publicUrl:e}}},ke=Object(c.b)((function(e){return{configurationState:e.configuration,locationState:e.location}}),ye)((function(e){var t=e.configurationState,a=e.locationState,n=e.setProfile,i=e.setPublicUrl;return Object(r.useEffect)((function(){C(t.profile)&&n("profile.json"),N(a.publicUrl)&&i(window.location.href)}),[t,a,n,i]),Object(o.jsx)(we,{themeType:je.theme})})),Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)}))},Se=a(28),Me=a(64),Ie=a(15),Te={filepath:"configuration.json",profile:{}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(Ie.a)(Object(Ie.a)({},e),{},{profile:t.profile});case Oe:return Object(Ie.a)(Object(Ie.a)({},e),{},{filepath:t.filepath});default:return e}},Ae=a(36),Ee={instance:{}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(Ie.a)(Object(Ie.a)({},e),{},{instance:Object(Ae.a)({},t.instanceKey,t.instanceValue)});case H:return Object(Ie.a)(Object(Ie.a)({},e),{},{instance:Object(Ae.a)({},t.instanceKey,{isEnabled:t.instanceValueIsEnabled})});default:return e}},Ne={publicUrl:""},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Ie.a)(Object(Ie.a)({},e),{},{publicUrl:t.publicUrl});default:return e}},De=Object(Se.c)({configuration:Fe,expand:Ce,location:qe}),He=Object(Se.d)(De,Object(Se.a)(Me.a));s.a.render(Object(o.jsx)(c.a,{store:He,children:Object(o.jsx)(ke,{})}),document.querySelector("#root")),Pe()},55:function(e){e.exports=JSON.parse('{"game":{"description":"Minecraft is a sandbox video game created by Swedish developer Markus Persson, released by Mojang in 2011 and purchased by Microsoft in 2014.","download":"https://tlauncher.org/installer","image":"https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/menu/menu-buy.gif","name":"Minecraft","timestamp":1581794539,"url":"https://tlauncher.org/en/","version":"1.16.3"},"packs":[{"description":"Minecraft Forge is a modding API (Application Programming Interface), which makes it easier to create mods, and also make sure mods are compatible with each other.","download":"https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.16.3-34.1.42/forge-1.16.3-34.1.42-installer.jar","image":"https://avatars2.githubusercontent.com/u/1390178?s=200&v=4","name":"Forge - Manual Installation","timestamp":1608443872,"url":"http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.16.3.html","version":"34.1.42","addons":[{"description":"Simplified AI modification mod focused on performance and low-level modifications to AIs in the game. Picking up the slack for the base game and improving it for a modded ecosystem. Handling common problems such as too many animals, performance hits from swarms of zombies, and simple remove tasks skipped by larger AI improvement mods.","download":"https://www.curseforge.com/minecraft/mc-mods/ai-improvements/download/3031978","image":"https://media.forgecdn.net/avatars/thumbnails/21/699/64/64/635731173265581096.png","name":"AI Improvements","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/ai-improvements","version":"0.3.0"},{"description":"Apotheosis is a mod about improving the vanilla experience while attempting to stay true to the base game.  It adds new potions, enchantments, dangers, mechanics, and other interesting things that greatly improve the Minecraft experience.","download":"https://www.curseforge.com/minecraft/mc-mods/apotheosis/download/3095843","image":"https://media.forgecdn.net/avatars/thumbnails/190/392/64/64/636855526449930608.png","name":"Apotheosis","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/apotheosis","version":"4.4.1"},{"description":"Biomes O\' Plenty is an expansive biome mod for Minecraft that adds a slew of new, unique biomes to the Overworld and Nether!  To go along with the new biomes, it adds new plants, flowers, trees, building blocks, and much more!","download":"https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty/download/3102726","image":"https://media.forgecdn.net/avatars/thumbnails/218/291/64/64/637010824665411754.png","name":"Biomes O\' Plenty","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty","version":"12.0.0.417-universal"},{"description":"Have you ever picked up a magic mod for Minecraft, and thought that it was too tame? Was there not enough danger involved when creating your next high-tech gadget? Bored with all of those peaceful animals just staring at you without a care in the world? Well then, I am glad you came here!","download":"https://www.curseforge.com/minecraft/mc-mods/blood-magic/download/3132991","image":"https://media.forgecdn.net/avatars/thumbnails/145/26/64/64/636559774600919459.jpeg","name":"Blood Magic","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/blood-magic","version":"3.0.2-7"},{"description":"This mod adds several chisels, a wrench and ways to copy designs and store bits. These tools enable you to create new custom decorative blocks and designs to decorate your bases and improve the flexibility of your building style.","download":"https://www.curseforge.com/minecraft/mc-mods/chisels-bits/download/3133859","image":"https://media.forgecdn.net/avatars/thumbnails/29/143/64/64/635840490766549459.png","name":"Chisels & Bits","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/chisels-bits","version":"0.2.8-RELEASE"},{"description":"Clumps groups XP orbs together into a single entity to reduce lag when there are many in a small area. Ontop of this, it also makes the player immediately collect the orbs once they touch the player, so you are not stuck with a bunch of orbs in your face.","download":"https://www.curseforge.com/minecraft/mc-mods/clumps/download/3099275","image":"https://media.forgecdn.net/avatars/thumbnails/84/193/64/64/636193647832736518_animated.gif","name":"Clumps","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/clumps","version":"6.0.0.12"},{"description":"\\" Corail Tombstone keeps you from losing your belongings on death, with many features of survivability and dimensional teleportation, in a medieval fantasy atmosphere related to the grave\'s souls. \\"","download":"https://www.curseforge.com/minecraft/mc-mods/corail-tombstone/download/3146459","image":"https://media.forgecdn.net/avatars/thumbnails/130/354/64/64/636459742199274923.jpeg","name":"Corail Tombstone","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/corail-tombstone","version":"6.2.2"},{"description":"A simple Minecraft Forge mod that speeds up leaf decay after you cut down the wood in a tree. By default it will only take about five seconds before all leaves are gone.","download":"https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay/download/3052146","image":"https://media.forgecdn.net/avatars/thumbnails/18/699/64/64/635683366119611662.png","name":"Fast Leaf Decay","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay","version":"v25"},{"description":"Fabric API is the core library for the most common hooks and intercompatibility measures utilized by mods using the Fabric toolchain","download":"https://www.curseforge.com/minecraft/mc-mods/fabric-api/download/3097415","image":"https://media.forgecdn.net/avatars/thumbnails/185/822/64/64/636829723898798601.png","name":"Fabric API","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fabric-api","version":"0.25.0 build 415"},{"description":"A simple mod that adds seasons to the game, dynamically changing biomes as you play.","download":"https://www.curseforge.com/minecraft/mc-mods/fabric-seasons/download/3117091","image":"https://media.forgecdn.net/avatars/thumbnails/313/575/64/64/637409352215573686.png","name":"Fabric Seasons","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fabric-seasons","version":"1.0.3-BETA"},{"description":"This mod does a couple things relating to the vanilla furnace, blast furnace, and smoker so that they run faster during their update method, improving TPS.","download":"https://www.curseforge.com/minecraft/mc-mods/fastfurnace/download/3069048","image":"https://media.forgecdn.net/avatars/thumbnails/164/243/64/64/636686097562167838.png","name":"FastFurnace","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fastfurnace","version":"4.3.0"},{"description":"This is a mod aimed at improving performance of all crafting-related functions.  It fixes the bug introduced in Minecraft 1.12 where shift-click crafting a stack of items could cause momentary freezes. However, it does slightly more than just fixing that issue.","download":"https://www.curseforge.com/minecraft/mc-mods/fastworkbench/download/3112661","image":"https://media.forgecdn.net/avatars/thumbnails/164/244/64/64/636686097718417988.png","name":"FastWorkbench","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/fastworkbench","version":"4.4.1"},{"description":"HWYLA (Pronounced \\"Hwhy-la\\", similar to \\"Coo-Hwhip\\")","download":"https://www.curseforge.com/minecraft/mc-mods/hwyla/download/3033593","image":"https://media.forgecdn.net/avatars/thumbnails/63/499/64/64/636143286314870563_animated.gif","name":"Hwyla","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/hwyla","version":"1.10.11-B78"},{"description":"JEI is an item and recipe viewing mod for Minecraft, built from the ground up for stability and performance.","download":"https://www.curseforge.com/minecraft/mc-mods/jei/download/3104018","image":"https://media.forgecdn.net/avatars/thumbnails/29/69/64/64/635838945588716414.jpeg","name":"Just Enough Items (JEI)","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/jei","version":"7.6.0.51"},{"description":"Useful commands, homes, kits, warps, server utilities and more...","download":"https://www.curseforge.com/minecraft/mc-mods/maessentials/download/3061859","image":"https://media.forgecdn.net/avatars/thumbnails/283/666/64/64/637294084953067259.png","name":"Ma Essentials","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/maessentials","version":"3.4.0"},{"description":"This simple mod adds small variations of bridges. For now this version has got 24 different types of bridges. Guardrails are now working too!","download":"https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/download/3100993","image":"https://media.forgecdn.net/avatars/thumbnails/237/234/64/64/637098539787193844.jpeg","name":"Macaw\'s Bridges","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/macaws-bridges","version":"1.0.4"},{"description":"This mod currently adds 47+ custom /gamerule options (more in future)","download":"https://www.curseforge.com/minecraft/mc-mods/custom-game-rules/download/3105223","image":"https://media.forgecdn.net/avatars/thumbnails/275/700/64/64/637263098984560016.png","name":"More Powerful Game Rules","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/custom-game-rules","version":"1.0.2"},{"description":"Morpheus is a server-only mod that adds sleep voting to a forge based server. When a player sleeps, all other players in the same dimension are notified so it is easier to coordinate. Also, you can configure a ratio of players that are required to make it morning (default 50%) messages can be customised in the config and alerts can be turned off if needed.","download":"https://www.curseforge.com/minecraft/mc-mods/morpheus/download/3085374","image":"https://media.forgecdn.net/avatars/thumbnails/4/608/64/64/635351426949975481.png","name":"Morpheus","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/morpheus","version":"4.2.63"},{"description":"This mod adds in what Minecraft has been missing for years, furniture! It includes over 80 unique pieces of furniture to decorate your bedroom, kitchen, living room and even your garden! Turn your house into the dream house you have never been able to have until now.","download":"https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod/download/3081350","image":"https://media.forgecdn.net/avatars/thumbnails/178/942/64/64/636782028170955665.png","name":"MrCrayfish\'s Furniture Mod","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod","version":"7.0.0-pre19"},{"description":"Neat is a mod that adds Unit Frames to the top of every entity. That image is a good example of it.","download":"https://www.curseforge.com/minecraft/mc-mods/neat/download/3077588","image":"https://media.forgecdn.net/avatars/thumbnails/29/326/64/64/635843253254829591.png","name":"Neat","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/neat","version":"1.7-24"},{"description":"OptiFine is a Minecraft optimization mod.","download":"http://optifine.net/adloadx?f=OptiFine_1.16.4_HD_U_G5.jar&x=92f1","image":"","name":"OptiFine HD U G5","required":false,"timestamp":1608443872,"url":"https://optifine.net/home","version":"1.16.4_HD_U_G5"},{"description":"Welcome to the brand new HarvestCraft for 1.14.4 and beyond!  Please read carefully as this is NOT a update of Pam\'s HarvestCraft but a re-boot.  Pam\'s HarvestCraft will come in four mods.  This is the second and adds CROPS ONLY.  I did not touch vanilla food at all.","download":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops/download/3076451","image":"https://media.forgecdn.net/avatars/thumbnails/247/685/64/64/637164508107044129.png","name":"Pam\'s HarvestCraft 2 - Crops","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-crops","version":"1.0.1"},{"description":"Welcome to the brand new HarvestCraft for 1.14.4 and beyond!  Please read carefully as this is NOT a update of Pam\'s HarvestCraft but a re-boot.  Pam\'s HarvestCraft will come in four mods.  This is the third mod and adds FRUIT TREES ONLY.  I did not touch vanilla trees at all.","download":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees/download/3117043","image":"https://media.forgecdn.net/avatars/thumbnails/252/293/64/64/637187641584077072.png","name":"Pam\'s HarvestCraft 2 - Trees","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/pams-harvestcraft-2-trees","version":"1.0.0"},{"description":"Holds shared code for use in my mods.","download":"https://www.curseforge.com/minecraft/mc-mods/placebo/download/3092113","image":"https://media.forgecdn.net/avatars/thumbnails/134/260/64/64/636490526725752670.png","name":"Placebo","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/placebo","version":"4.3.3"},{"description":"RandomPatches is a mod that contains a bunch of miscellaneous patches for Minecraft. RandomPatches only contains features that require ASM transformers. Tweaks that don\'t require ASM transformers go in RandomTweaks, which I recommend as a companion mod.","download":"https://www.curseforge.com/minecraft/mc-mods/randompatches/download/3139304","image":"https://media.forgecdn.net/avatars/thumbnails/137/948/64/64/636518346385385655.png","name":"RandomPatches","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/randompatches","version":"1.22.1.11"},{"description":"Serene Seasons is a Minecraft mod that adds seasons.  Grass and foliage colors will change throughout the year, and in the winter, temperatures will shift and allow for snow to fall in some biomes that don\'t normally receive any.  Seasons also affect various other features, like crop growth (Different crops are limited to different seasons), weather (More rain in Spring, more storms in Summer, etc.), and more!","download":"https://www.curseforge.com/minecraft/mc-mods/serene-seasons/download/3145776","image":"https://media.forgecdn.net/avatars/thumbnails/241/247/64/64/637126527280083825.png","name":"Serene Seasons","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/serene-seasons","version":"4.0.0.80"},{"description":"Put your most frequently used items within convenient reach. Storage Drawers borrows ideas from Jabba and Bibliocraft, resulting in a highly functional, compact, and aesthetic storage solution that is meant to complement rather than replace those mods.","download":"https://www.curseforge.com/minecraft/mc-mods/storage-drawers/download/3092987","image":"https://media.forgecdn.net/avatars/thumbnails/10/842/64/64/635468327818431130.png","name":"Storage Drawers","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/storage-drawers","version":"8.2.1"},{"description":"[Forge] This mod adds tall towers in your world, inspired by The Legend Of Zelda : Breath Of The Wild.","download":"https://www.curseforge.com/minecraft/mc-mods/towers-of-the-wild/download/3103749","image":"https://media.forgecdn.net/avatars/thumbnails/310/342/64/64/637398464252136645.png","name":"Towers Of The Wild","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/towers-of-the-wild","version":"2.0.1"},{"description":"VoxelMap is a minimap and worldmap mod that makes a great effort to be accurate to the colors you see in the world (and your resource pack).   Display your surroundings, or view the entire (explored) world.","download":"https://www.curseforge.com/minecraft/mc-mods/voxelmap/download/3058828","image":"https://media.forgecdn.net/avatars/thumbnails/11/698/64/64/635499892408422072.jpeg","name":"VoxelMap","required":false,"timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/voxelmap","version":"1.10.11"},{"description":"This mod adds waystone blocks that the player can return to once they\'ve been activated, either through a Warp Scroll, a rechargeable Warp Stone, or by using an existing waystone to hop from one to the other.","download":"https://www.curseforge.com/minecraft/mc-mods/waystones/download/3098215","image":"https://media.forgecdn.net/avatars/thumbnails/42/418/64/64/636008504954894502.png","name":"Waystones","timestamp":1608443872,"url":"https://www.curseforge.com/minecraft/mc-mods/waystones","version":"7.3.1"}],"instructions":["Download and install <a href=\\"https://tlauncher.org/\\"><strong>TLauncher</strong></a>","Open the launcher and choose the Forge version","Select the <strong>\\"Install\\"</strong> button and wait for the first run","Select the <strong>\\"Open Folder\\"</strong> button and go to the mods folder (%AppData%\\\\.minecraft\\\\mods\\\\)","Move the downloaded addons to the mods folder","Run the game"]},{"description":"Minecraft Forge is a modding API (Application Programming Interface), which makes it easier to create mods, and also make sure mods are compatible with each other.","download":"https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.12.2-14.23.5.2847/forge-1.12.2-14.23.5.2847-universal.jar","image":"https://avatars2.githubusercontent.com/u/1390178?s=200&v=4","name":"Forge - CurseForge Installation","timestamp":1583113389,"url":"https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.12.2.html","version":"14.23.5.2847","addons":[{"description":"Minecraft Custom Profile with all the addons used in the server","download":"https://drive.google.com/open?id=1gXI-K-1MMiRKZpM41tiYUwEFYLmJPXjD","image":"","name":"Custom Profile","timestamp":1581794539,"url":"","version":"All"},{"description":"Minecraft Custom Profile with all the required addons needed to get in the server","download":"https://drive.google.com/open?id=1b0c0FeHJNbTHBOZ9huN00E7hnHH5P-Fj","image":"","name":"Custom Profile","timestamp":1581794539,"url":"","version":"Required"}],"instructions":["Open Twitch","Go to the Mods section","Go to Create Custom Profile","Import the downloaded profile","Play"]}],"servers":[{"address":"192.160.12.12","description":"A server for the game Minecraft - Spigot","image":"","name":"Minecraft Server","port":25565},{"address":"192.160.12.12","description":"A server for the game Minecraft - SpongeForge","image":"","name":"Forge Server","port":25566}]}')},80:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.ef3cc024.chunk.js.map