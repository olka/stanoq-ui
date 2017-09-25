webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\n    padding: 10px 20px;\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.input-content {\n  max-width: 1200px;\n  margin: 0 auto;\n  horiz-align: left;\n}\n\n.main-content:after {\n   content: \" \";\n   visibility: hidden;\n   display: block;\n   height: 0;\n   clear: both;\n}\n\n.controls-box {\n    float: left;\n    width: 45%;\n    text-align: left;\n    font-size: 0;\n    letter-spacing: -0.36em;\n}\n\n.input-box {\n    display: inline-block;\n    vertical-align: middle;\n    width: 63%;\n    font-size: 16px;\n    letter-spacing: 0;\n    box-sizing: border-box;\n}\n\n.input {\n    padding: 11px 10px;\n    border-radius: 6px;\n    border: solid 1px #ccc;\n    width: 100%;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\n.input:focus {\n   border-color: #008CBA;\n   outline: none;\n}\n\n.select {\n  border: none;\n  border-radius: 0px;\n  width: 2%;\n  padding: 10px 1px;\n  text-align: left;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 16px;\n  cursor: pointer;\n  letter-spacing: 0;\n  border-radius: 6px;\n  border: solid 1px #ccc;\n  margin-right: 10px;\n  box-sizing: border-box;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: '';\n}\n\n.button {\n    background-color: #008CBA;\n    border: none;\n    border-radius: 6px;\n    color: white;\n    width: 20%;\n    padding: 10px 1px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 18px;\n    cursor: pointer;\n    letter-spacing: 0;\n    box-sizing: border-box;\n}\n\n\n\n.button:active {\n    box-shadow: -1px -1px 4px -1px #fff inset;\n}\n\n.tree-box {\n    float: right;\n    width: 55%;\n}\n\n.tree-box .tree {\n    margin: 0;\n}\n\n.demo-chart {\n  height: 580px;\n  width: 580px;\n}\n\n.demo-chart > div {\n  overflow: visible !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <div class=\"input-content\" >\n    <div class=\"input-box\">\n      <input class=\"input\" #domain (keyup)=\"0\" value=\"http://\" (keyup.enter)=\"getSiteTree(domain.value, depth.value)\">\n    </div>\n    <select #depth class=\"select\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n    <button class=\"button\" type=\"submit\" (click)=\"getSiteTree(domain.value, depth.value)\">Go</button>\n\n  </div>\n    <div class=\"main-content\">\n        <div class=\"controls-box\">\n            <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n        </div>\n        <div class=\"tree-box\">\n            <tree [tree]=\"data\" (nodeSelected)=\"logEvent($event)\" (nodeRenamed)=\"renamedEvent($event)\" *ngIf=\"!isSpinnerVisible\"></tree>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crawler_service__ = __webpack_require__("../../../../../src/app/crawler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.error = {};
        console.log('constructor');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSub = this.service.dataProviderObservable.subscribe(function (data) { return _this.data = data; });
        this.graphSub = this.service.graphObservable.subscribe(function (options) { return _this.chartOption = options; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.dataSub.unsubscribe();
        this.graphSub.unsubscribe();
    };
    AppComponent.prototype.getVersion = function () {
        var _this = this;
        this.service.getVersion().then(function (data) { return _this.version = data.version; }).catch(function (error) { return _this.error = error; });
    };
    AppComponent.prototype.getSiteTree = function (domain, depth) {
        this.service.getSiteTree(String(domain), Number(depth));
    };
    AppComponent.prototype.logEvent = function (e) {
        //window.open(String(e.node.node.id));
        alertify.message("" + e.node.value);
    };
    AppComponent.prototype.renamedEvent = function (e) {
        this.data.value = e.newValue;
        alertify.message("" + e.node.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__crawler_service__["a" /* CrawlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__crawler_service__["a" /* CrawlerService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crawler_service__ = __webpack_require__("../../../../../src/app/crawler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_tree__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_echarts__["a" /* AngularEchartsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__crawler_service__["a" /* CrawlerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/crawler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrawlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrawlerService = (function () {
    function CrawlerService(http) {
        var _this = this;
        this.http = http;
        this.host = 'https://stanoq.herokuapp.com'; //'http://localhost:9000'
        this.versionURL = this.host + '/version';
        this.crawlerURL = this.host + '/crawlerStream';
        this.data = {
            value: 'Programming languages by programming paradigm',
            children: [
                {
                    value: 'Object-oriented programming',
                    children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
                },
                {
                    value: 'Prototype-based programming',
                    children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
                }
            ]
        };
        this.options = this.getOptions({
            'nodes': [{
                    'url': '1', 'timeToLoad': 10, 'category': 'green', 'size': 10000
                }, {
                    'url': '2', 'timeToLoad': 15, 'category': 'green', 'size': 10000
                }, {
                    'url': '3', 'timeToLoad': 20, 'category': 'yellow', 'size': 10000
                }, {
                    'url': '4', 'timeToLoad': 20, 'category': 'red', 'size': 10000
                }],
            'links': [{
                    'source': '1', 'target': '2'
                }, {
                    'source': '3', 'target': '4'
                }, {
                    'source': '4', 'target': '1'
                }]
        });
        this.dataProvider = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.data);
        this.graphProvider = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.options);
        this.dataProviderObservable = this.dataProvider.asObservable();
        this.graphObservable = this.graphProvider.asObservable();
        this.dataSub = this.dataProviderObservable.subscribe(function (data) { return _this.data = data; });
        this.graphSub = this.dataProviderObservable.subscribe(function (opts) { return _this.options = opts; });
    }
    CrawlerService.prototype.getVersion = function () {
        return this.http.get(this.versionURL).toPromise()
            .catch(this.handleError);
    };
    CrawlerService.prototype.getOboeConfig = function (url, depth) {
        var rawData = {
            'url': url,
            'depthLimit': depth,
            'timeout': 5,
            'exclusions': ['test1', 'test2']
        };
        var data = JSON.stringify(rawData);
        var config = {
            'url': this.crawlerURL,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data,
            cached: false,
            withCredentials: false
        };
        return config;
    };
    CrawlerService.prototype.getSiteTree = function (url, depth) {
        var _this = this;
        var echartEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        var treeEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.oboeService = oboe(this.getOboeConfig(url, depth));
        this.data = this.oboeService
            .node('echart', function (el) {
            echartEmitter.emit(el);
            return oboe.drop;
        })
            .node('node', function (el) {
            treeEmitter.emit(el);
            return oboe.drop;
        })
            .fail(function (errorReport) {
            console.log(errorReport);
        });
        treeEmitter.subscribe(function (el) { return _this.dataProvider.next(el); });
        echartEmitter.subscribe(function (el) { return _this.graphProvider.next(_this.getOptions(el)); });
        return null;
    };
    CrawlerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CrawlerService.prototype.getOptions = function (data) {
        var initialSize = data.nodes[0].size;
        var urlLength = data.nodes[0].url.length - 1;
        var categories = [{ name: 'green' }, { name: 'yellow' }, { name: 'red' }];
        return {
            animationDurationUpdate: 200,
            tooltip: {
                backgroundColor: '#008CBA'
            },
            legend: [{
                    orient: 'vertical',
                    left: 'left',
                    top: 'bottom',
                    icon: 'circle',
                    data: [{ name: 'green', inactiveColor: '#749f83' },
                        { name: 'yellow', inactiveColor: '#ca8622' },
                        { name: 'red', inactiveColor: '#008CBA' }]
                }],
            series: [{
                    type: 'graph',
                    layout: 'circular',
                    circular: {
                        rotateLabel: true
                    },
                    focusNodeAdjacency: true,
                    legendHoverLink: true,
                    hoverAnimation: true,
                    categories: categories,
                    animation: true,
                    data: data.nodes.map(function (node) {
                        return {
                            value: node.timeToLoad,
                            name: node.url,
                            categories: categories,
                            category: node.category,
                            symbolSize: ((node.size / initialSize) * 6) + 4,
                            itemStyle: {
                                normal: {
                                    color: node.color
                                }
                            }
                        };
                    }),
                    // edges: data.links,
                    edges: data.links.map(function (link) {
                        return {
                            source: link.source,
                            target: link.target
                        };
                    }),
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [2, 5],
                    roam: false,
                    label: {
                        emphasis: {
                            position: 'right',
                            formatter: '{c0}',
                            show: true
                        },
                        normal: {
                            position: 'right',
                            formatter: '{a0}:{c0}',
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0.35
                        }
                    }
                }]
        };
    };
    return CrawlerService;
}());
CrawlerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CrawlerService);

var _a;
//# sourceMappingURL=crawler.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map