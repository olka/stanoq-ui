webpackJsonp([2],{0:function(e,n,t){e.exports=t("cDNt")},cDNt:function(e,n,t){"use strict";function o(e){return b["\u0275vid"](0,[(e()(),b["\u0275eld"](0,null,null,2,"tree",[],null,[[null,"nodeSelected"],[null,"nodeRenamed"]],function(e,n,t){var o=!0,r=e.component;if("nodeSelected"===n){o=!1!==r.logEvent(t)&&o}if("nodeRenamed"===n){o=!1!==r.renamedEvent(t)&&o}return o},v.b,v.a)),b["\u0275prd"](512,null,f.TreeService,f.TreeService,[h.NodeDraggableService]),b["\u0275did"](638976,null,0,y.TreeComponent,[f.TreeService],{treeModel:[0,"treeModel"]},{nodeRenamed:"nodeRenamed",nodeSelected:"nodeSelected"})],function(e,n){e(n,2,0,n.component.data)},null)}function r(e){return b["\u0275vid"](0,[(e()(),b["\u0275eld"](0,null,null,27,"div",[["style","text-align:center"]],null,null,null,null,null)),(e()(),b["\u0275ted"](null,["\n    "])),(e()(),b["\u0275eld"](0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),b["\u0275ted"](null,["\n        ","\n    "])),(e()(),b["\u0275ted"](null,["\n    "])),(e()(),b["\u0275eld"](0,null,null,21,"div",[["class","main-content"]],null,null,null,null,null)),(e()(),b["\u0275ted"](null,["\n        "])),(e()(),b["\u0275eld"](0,null,null,12,"div",[["class","controls-box"]],null,null,null,null,null)),(e()(),b["\u0275ted"](null,["\n            "])),(e()(),b["\u0275eld"](0,null,null,3,"div",[["class","input-box"]],null,null,null,null,null)),(e()(),b["\u0275ted"](null,["\n                "])),(e()(),b["\u0275eld"](0,[["domain",1]],null,0,"input",[["class","input"],["value","http://"]],null,[[null,"keyup"],[null,"keyup.enter"]],function(e,n,t){var o=!0,r=e.component;if("keyup"===n){o=o}if("keyup.enter"===n){o=!1!==r.getSiteTree(b["\u0275nov"](e,11).value)&&o}return o},null,null)),(e()(),b["\u0275ted"](null,["\n            "])),(e()(),b["\u0275ted"](null,["\n            "])),(e()(),b["\u0275eld"](0,null,null,1,"button",[["class","button"],["type","submit"]],null,[[null,"click"]],function(e,n,t){var o=!0,r=e.component;if("click"===n){o=!1!==r.getSiteTree(b["\u0275nov"](e,11).value)&&o}return o},null,null)),(e()(),b["\u0275ted"](null,["Go"])),(e()(),b["\u0275ted"](null,["\n            "])),(e()(),b["\u0275eld"](0,null,null,1,"div",[["class","demo-chart"],["echarts",""]],null,[["window","resize"]],function(e,n,t){var o=!0;if("window:resize"===n){o=!1!==b["\u0275nov"](e,18).onWindowResize(t)&&o}return o},null,null)),b["\u0275did"](671744,null,0,S.a,[b.ElementRef,b.Renderer,b.NgZone],{options:[0,"options"]},null),(e()(),b["\u0275ted"](null,["\n        "])),(e()(),b["\u0275ted"](null,["\n        "])),(e()(),b["\u0275eld"](0,null,null,4,"div",[["class","tree-box"]],null,null,null,null,null)),(e()(),b["\u0275ted"](null,["\n            "])),(e()(),b["\u0275and"](16777216,null,null,1,null,o)),b["\u0275did"](16384,null,0,O.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),b["\u0275ted"](null,["\n        "])),(e()(),b["\u0275ted"](null,["\n    "])),(e()(),b["\u0275ted"](null,["\n"])),(e()(),b["\u0275ted"](null,["\n\n\n"]))],function(e,n){var t=n.component;e(n,18,0,t.chartOption),e(n,24,0,!t.isSpinnerVisible)},function(e,n){e(n,3,0,n.component.title)})}function l(e){return b["\u0275vid"](0,[(e()(),b["\u0275eld"](0,null,null,1,"app-root",[],null,null,null,r,C)),b["\u0275did"](245760,null,0,m,[p],null,null)],function(e,n){e(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var i={production:!0},a=function(){function e(){}return e}(),u=t("XKz0"),d=t("/oeL"),c=t("82j9"),s=(t.n(c),t("gvep")),p=(t.n(s),function(){function e(e){var n=this;this.http=e,this.host="https://stanoq.herokuapp.com",this.versionURL=this.host+"/version",this.crawlerURL=this.host+"/crawlerStream",this.data={value:"Programming languages by programming paradigm",children:[{value:"Object-oriented programming",children:[{value:"Java"},{value:"C++"},{value:"C#"}]},{value:"Prototype-based programming",children:[{value:"JavaScript"},{value:"CoffeeScript"},{value:"Lua"}]}]},this.options=this.getOptions({nodes:[{url:"1",timeToLoad:10,category:"green",size:1e4},{url:"2",timeToLoad:15,category:"green",size:1e4},{url:"3",timeToLoad:20,category:"yellow",size:1e4},{url:"4",timeToLoad:20,category:"red",size:1e4}],links:[{source:"1",target:"2"},{source:"3",target:"4"},{source:"4",target:"1"}]}),this.dataProvider=new s.BehaviorSubject(this.data),this.graphProvider=new s.BehaviorSubject(this.options),this.dataProviderObservable=this.dataProvider.asObservable(),this.graphObservable=this.graphProvider.asObservable(),this.dataSub=this.dataProviderObservable.subscribe(function(e){return n.data=e}),this.graphSub=this.dataProviderObservable.subscribe(function(e){return n.options=e})}return e.prototype.getVersion=function(){return this.http.get(this.versionURL).toPromise().catch(this.handleError)},e.prototype.getOboeConfig=function(e,n){var t={url:String(e),depthLimit:n,timeout:5,exclusions:["test1","test2"]},o=JSON.stringify(t);return{url:this.crawlerURL,method:"POST",headers:{"Content-Type":"application/json"},body:o,cached:!1,withCredentials:!1}},e.prototype.getSiteTree=function(e){var n=this,t=new d.EventEmitter,o=new d.EventEmitter;return this.oboeService=oboe(this.getOboeConfig(e,3)),this.data=this.oboeService.node("echart",function(e){return t.emit(e),oboe.drop}).node("node",function(e){return o.emit(e),oboe.drop}).fail(function(e){console.log(e)}),o.subscribe(function(e){return n.dataProvider.next(e)}),t.subscribe(function(e){return n.graphProvider.next(n.getOptions(e))}),null},e.prototype.handleError=function(e){return console.error("An error occurred",e),Promise.reject(e.message||e)},e.prototype.getOptions=function(e){var n=e.nodes[0].size,t=e.nodes[0].url.length-1,o=[{name:"green"},{name:"yellow"},{name:"red"}];return{animationDurationUpdate:200,tooltip:{backgroundColor:"#008CBA"},legend:[{orient:"vertical",left:"left",top:"bottom",icon:"circle",data:o.map(function(e){return{name:e.name,color:"blue",textStyle:{color:"red"}}})}],series:[{type:"graph",layout:"circular",circular:{rotateLabel:!0},focusNodeAdjacency:!0,legendHoverLink:!0,hoverAnimation:!0,categories:o,animation:!0,data:e.nodes.map(function(e){return{value:e.timeToLoad,name:e.url.substring(t),categories:o,category:e.category,symbolSize:e.size/n*6+4,itemStyle:{normal:{color:e.color}}}}),edges:e.links.map(function(e){return{source:e.source.substring(t),target:e.target.substring(t)}}),edgeSymbol:["circle","arrow"],edgeSymbolSize:[2,5],roam:!1,label:{emphasis:{position:"right",formatter:"{b0}",show:!0},normal:{position:"right",formatter:"{a0}:{c0}",show:!0}},lineStyle:{normal:{color:"source",curveness:.35}}}]}},e.ctorParameters=function(){return[{type:u.c}]},e}()),m=function(){function e(e){this.service=e,this.title="Site tree generator",this.error={},console.log("constructor")}return e.prototype.ngOnInit=function(){var e=this;this.dataSub=this.service.dataProviderObservable.subscribe(function(n){return e.data=n}),this.graphSub=this.service.graphObservable.subscribe(function(n){return e.chartOption=n})},e.prototype.ngOnDestroy=function(){this.dataSub.unsubscribe(),this.graphSub.unsubscribe()},e.prototype.getVersion=function(){var e=this;this.service.getVersion().then(function(n){return e.version=n.version}).catch(function(n){return e.error=n})},e.prototype.getSiteTree=function(e){this.service.getSiteTree(String(e))},e.prototype.logEvent=function(e){alertify.message(""+e.node.value)},e.prototype.renamedEvent=function(e){this.data.value=e.newValue,alertify.message(""+e.node.value)},e.ctorParameters=function(){return[{type:p}]},e}(),g=['.main-content[_ngcontent-%COMP%]{border:1px solid #ccc;padding:40px 20px;max-width:1000px;margin:0 auto}.main-content[_ngcontent-%COMP%]:after{content:" ";visibility:hidden;display:block;height:0;clear:both}.controls-box[_ngcontent-%COMP%]{float:left;width:45%;text-align:left;font-size:0;letter-spacing:-.36em}.controls-box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:63%;font-size:18px;letter-spacing:0;box-sizing:border-box;padding-right:10px}.controls-box[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{padding:10px 10px;border-radius:6px;border:1px solid #ccc;width:100%;font-size:18px;box-sizing:border-box}.controls-box[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{border-color:#008cba;outline:none}.controls-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:#008cba;border:none;border-radius:6px;color:#fff;width:30%;padding:10px 1px;text-align:center;text-decoration:none;display:inline-block;vertical-align:middle;cursor:pointer;font-size:18px;letter-spacing:0;box-sizing:border-box}.controls-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:active{box-shadow:inset -1px -1px 4px -1px #fff}.tree-box[_ngcontent-%COMP%]{float:right;width:55%}.tree-box[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]{margin:0}.demo-chart[_ngcontent-%COMP%]{height:500px}.demo-chart[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{overflow:visible!important}'],b=t("/oeL"),v=t("/UXZ"),f=t("Jnin"),h=(t.n(f),t("+OUB")),y=(t.n(h),t("RjSW")),S=(t.n(y),t("vvWA")),O=t("qbdv"),M=[g],C=b["\u0275crt"]({encapsulation:0,styles:M,data:{}}),P=b["\u0275ccf"]("app-root",m,l,{},{},[]),x=t("/oeL"),E=t("qbdv"),T=t("fc+i"),N=t("f9zQ"),w=t("fL27"),R=t("XKz0"),_=t("bm2B"),D=t("EyWH"),L=t("+OUB"),I=(t.n(L),t("eKvt")),A=(t.n(I),t("Jnin")),z=(t.n(A),t("Dy4v")),k=(t.n(z),t("vjf1")),U=x["\u0275cmf"](a,[m],function(e){return x["\u0275mod"]([x["\u0275mpd"](512,x.ComponentFactoryResolver,x["\u0275CodegenComponentFactoryResolver"],[[8,[P]],[3,x.ComponentFactoryResolver],x.NgModuleRef]),x["\u0275mpd"](5120,x.LOCALE_ID,x["\u0275m"],[[3,x.LOCALE_ID]]),x["\u0275mpd"](4608,E.NgLocalization,E.NgLocaleLocalization,[x.LOCALE_ID]),x["\u0275mpd"](4608,x.Compiler,x.Compiler,[]),x["\u0275mpd"](5120,x.APP_ID,x["\u0275f"],[]),x["\u0275mpd"](5120,x.IterableDiffers,x["\u0275k"],[]),x["\u0275mpd"](5120,x.KeyValueDiffers,x["\u0275l"],[]),x["\u0275mpd"](4608,T.DomSanitizer,T["\u0275e"],[E.DOCUMENT]),x["\u0275mpd"](6144,x.Sanitizer,null,[T.DomSanitizer]),x["\u0275mpd"](4608,T.HAMMER_GESTURE_CONFIG,T.HammerGestureConfig,[]),x["\u0275mpd"](5120,T.EVENT_MANAGER_PLUGINS,function(e,n,t,o){return[new T["\u0275DomEventsPlugin"](e),new T["\u0275KeyEventsPlugin"](n),new T["\u0275HammerGesturesPlugin"](t,o)]},[E.DOCUMENT,E.DOCUMENT,E.DOCUMENT,T.HAMMER_GESTURE_CONFIG]),x["\u0275mpd"](4608,T.EventManager,T.EventManager,[T.EVENT_MANAGER_PLUGINS,x.NgZone]),x["\u0275mpd"](135680,T["\u0275DomSharedStylesHost"],T["\u0275DomSharedStylesHost"],[E.DOCUMENT]),x["\u0275mpd"](4608,T["\u0275DomRendererFactory2"],T["\u0275DomRendererFactory2"],[T.EventManager,T["\u0275DomSharedStylesHost"]]),x["\u0275mpd"](5120,N.a,w.d,[]),x["\u0275mpd"](5120,N.c,w.e,[]),x["\u0275mpd"](4608,N.b,w.c,[N.a,N.c]),x["\u0275mpd"](5120,x.RendererFactory2,w.f,[T["\u0275DomRendererFactory2"],N.b,x.NgZone]),x["\u0275mpd"](6144,T["\u0275SharedStylesHost"],null,[T["\u0275DomSharedStylesHost"]]),x["\u0275mpd"](4608,x.Testability,x.Testability,[x.NgZone]),x["\u0275mpd"](4608,T.Meta,T.Meta,[E.DOCUMENT]),x["\u0275mpd"](4608,T.Title,T.Title,[E.DOCUMENT]),x["\u0275mpd"](4608,R.h,R.m,[E.DOCUMENT,x.PLATFORM_ID,R.k]),x["\u0275mpd"](4608,R.n,R.n,[R.h,R.l]),x["\u0275mpd"](5120,R.a,function(e){return[e]},[R.n]),x["\u0275mpd"](4608,R.j,R.j,[]),x["\u0275mpd"](6144,R.i,null,[R.j]),x["\u0275mpd"](4608,R.g,R.g,[R.i]),x["\u0275mpd"](6144,R.b,null,[R.g]),x["\u0275mpd"](5120,R.f,R.o,[R.b,[2,R.a]]),x["\u0275mpd"](4608,R.c,R.c,[R.f]),x["\u0275mpd"](4608,_.c,_.c,[]),x["\u0275mpd"](4608,D.b,w.b,[x.RendererFactory2]),x["\u0275mpd"](4608,L.NodeDraggableService,L.NodeDraggableService,[]),x["\u0275mpd"](4608,I.NodeMenuService,I.NodeMenuService,[]),x["\u0275mpd"](4608,A.TreeService,A.TreeService,[L.NodeDraggableService]),x["\u0275mpd"](4608,p,p,[R.c]),x["\u0275mpd"](512,E.CommonModule,E.CommonModule,[]),x["\u0275mpd"](1024,x.ErrorHandler,T["\u0275a"],[]),x["\u0275mpd"](1024,x.APP_INITIALIZER,function(e,n){return[T["\u0275c"](e,n)]},[[2,T.NgProbeToken],[2,x.NgProbeToken]]),x["\u0275mpd"](512,x.ApplicationInitStatus,x.ApplicationInitStatus,[[2,x.APP_INITIALIZER]]),x["\u0275mpd"](131584,x["\u0275e"],x["\u0275e"],[x.NgZone,x["\u0275Console"],x.Injector,x.ErrorHandler,x.ComponentFactoryResolver,x.ApplicationInitStatus]),x["\u0275mpd"](2048,x.ApplicationRef,null,[x["\u0275e"]]),x["\u0275mpd"](512,x.ApplicationModule,x.ApplicationModule,[x.ApplicationRef]),x["\u0275mpd"](512,T.BrowserModule,T.BrowserModule,[[3,T.BrowserModule]]),x["\u0275mpd"](512,R.e,R.e,[]),x["\u0275mpd"](512,R.d,R.d,[]),x["\u0275mpd"](512,_.b,_.b,[]),x["\u0275mpd"](512,_.a,_.a,[]),x["\u0275mpd"](512,w.a,w.a,[]),x["\u0275mpd"](512,z.TreeModule,z.TreeModule,[]),x["\u0275mpd"](512,k.a,k.a,[]),x["\u0275mpd"](512,a,a,[]),x["\u0275mpd"](256,R.k,"XSRF-TOKEN",[]),x["\u0275mpd"](256,R.l,"X-XSRF-TOKEN",[])])}),F=t("/oeL"),j=t("fc+i");i.production&&Object(F.enableProdMode)(),Object(j.platformBrowser)().bootstrapModuleFactory(U)},gFIY:function(e,n){function t(e){return new Promise(function(n,t){t(new Error("Cannot find module '"+e+"'."))})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="gFIY"}},[0]);