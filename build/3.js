webpackJsonp([3],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeteranganPageModule", function() { return KeteranganPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keterangan__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KeteranganPageModule = (function () {
    function KeteranganPageModule() {
    }
    KeteranganPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__keterangan__["a" /* KeteranganPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__keterangan__["a" /* KeteranganPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__keterangan__["a" /* KeteranganPage */]
            ]
        })
    ], KeteranganPageModule);
    return KeteranganPageModule;
}());

//# sourceMappingURL=keterangan.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeteranganPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_market_market__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeteranganPage = (function () {
    function KeteranganPage(navCtrl, navParams, mkt, lgn, tools, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mkt = mkt;
        this.lgn = lgn;
        this.tools = tools;
        this.platform = platform;
        this.getDisclaim();
    }
    KeteranganPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.checkLogin();
        });
    };
    KeteranganPage.prototype.checkLogin = function () {
        var _this = this;
        this.tools.getStg('login').then(function (data) {
            // console.log('check login',data);
            if (!data || data.level !== '0') {
                _this.navCtrl.setRoot('LoginPage');
            }
            else {
                _this.clientId = data.clientId;
                _this.tools.getStg('ip').then(function (rslt) {
                    // console.log('ip',rslt);
                    if (rslt) {
                        _this.lgn.logger(_this.clientId, 'Masuk halaman Syarat & Ketentuan', rslt.ip).subscribe();
                        _this.tools.getStg('dscl').then(function (res) {
                            // console.log('stg',res);
                            if (res) {
                                _this.disclaimer = res;
                            }
                            else {
                                _this.getDisclaim();
                            }
                        }, function (err) {
                            _this.getDisclaim();
                        });
                    }
                });
            }
        }, function (err) {
            console.log('History-> getStgLogin', err);
        });
    };
    KeteranganPage.prototype.getDisclaim = function () {
        var _this = this;
        this.mkt.getDisclalimWeb().subscribe(function (data) {
            // console.log('req',data);
            _this.tools.setStg('dscl', data);
            _this.disclaimer = data;
        });
    };
    KeteranganPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-keterangan',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\keterangan\keterangan.html"*/'<ion-header>\n  <ion-navbar color="light" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center no-padding>\n    <ion-grid no-margin no-padding>\n      <ion-row no-margin no-padding>\n        <ion-col class="sideCol"></ion-col>\n        <ion-col class="mainCol" no-margin no-padding>\n          <ion-card>\n            <ion-card-header>\n              <button ion-button full icon-end color="primary" float-right class="small_icon">\n                <h2 ion-text color="light">Disclaimer</h2>          \n                <ion-icon name="arrow-dropdown" ></ion-icon>\n              </button>\n            </ion-card-header>\n            <ion-card-content padding-right>\n                  <ol text-justify no-padding padding-left>\n                  <li *ngFor="let items of disclaimer">{{items.item}}</li>\n                </ol>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col class="sideCol"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n    \n\n<!-- <ion-content text-center>\n  <ion-card showWhen="android,ios">\n    <ion-card-header>\n      <button ion-button full icon-end color="primary" float-right class="small_icon">\n        <h2 ion-text color="light">Disclaimer</h2>          \n        <ion-icon name="arrow-dropdown" ></ion-icon>\n      </button>\n    </ion-card-header>\n    <ion-card-content padding-right>\n        <ol text-justify no-padding padding-left>\n          <li *ngFor="let items of disclaimer">{{items.item}}</li>\n        </ol>\n    </ion-card-content>\n  </ion-card>\n  <ion-row hideWhen="android,ios">\n    <ion-col col-3>\n    </ion-col>\n    <ion-col col-6>\n      <ion-card>\n        <ion-card-header>\n          <button ion-button full icon-end color="primary" float-right class="small_icon">\n            <h2 ion-text color="light">Disclaimer</h2>          \n            <ion-icon name="arrow-dropdown" ></ion-icon>\n          </button>\n        </ion-card-header>\n        <ion-card-content padding-right>       \n            <ol text-justify no-padding padding-left>\n              <li *ngFor="let items of disclaimer">{{items.item}}</li>\n            </ol>  \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content> -->\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\keterangan\keterangan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_market_market__["a" /* MarketProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], KeteranganPage);
    return KeteranganPage;
}());

//# sourceMappingURL=keterangan.js.map

/***/ })

});
//# sourceMappingURL=3.js.map