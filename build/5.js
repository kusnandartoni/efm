webpackJsonp([5],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]
            ]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_market_market__ = __webpack_require__(42);
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





var HistoryPage = (function () {
    function HistoryPage(platform, tool, navCtrl, mkt, lgn) {
        this.platform = platform;
        this.tool = tool;
        this.navCtrl = navCtrl;
        this.mkt = mkt;
        this.lgn = lgn;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.checkLogin();
        });
    };
    HistoryPage.prototype.checkLogin = function () {
        var _this = this;
        this.tool.getStg('login').then(function (data) {
            if (!data || data.level !== '0') {
                _this.navCtrl.setRoot('LoginPage');
            }
            else {
                _this.clientId = data.clientId;
                _this.tool.getStg('ip').then(function (data) {
                    if (data) {
                        _this.lgn.logger(_this.clientId, 'Masuk halaman history', data.ip).subscribe();
                    }
                });
                _this.getData();
            }
        }, function (err) {
            console.log('History-> getStgLogin', err);
        });
    };
    HistoryPage.prototype.getData = function () {
        var _this = this;
        this.tool.showLoading();
        this.mkt.getData(this.clientId).subscribe(function (data) {
            var result;
            result = data;
            _this.items = result.records;
            _this.tool.stopLoading();
        }, function (err) {
            console.log('History-> getData()', err);
            _this.tool.stopLoading();
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\history\history.html"*/'<ion-header>\n  <ion-navbar color="light" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n        <ion-col class="sideCol"></ion-col>\n        <ion-col class="mainCol">\n\n          <ion-card>\n            <ion-card-header>\n                <button ion-button full icon-end color="primary" float-right class="small_icon">\n                  <h2 ion-text color="light">Histori Pengiriman Formulir</h2>          \n                  <ion-icon name="arrow-dropdown" ></ion-icon>\n                </button>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-grid>\n                  <ion-row class="header">\n                    <ion-col>\n                      Tanggal\n                    </ion-col>\n                    <ion-col text-right>\n                      jumlah\n                    </ion-col>\n                    <ion-col text-right>\n                      harga\n                    </ion-col>\n                    <ion-col text-center>\n                      status\n                    </ion-col>\n                  </ion-row>\n                  <ion-row *ngFor="let item of items;let index=index; let odd=odd; let even=even;" class="row" [ngClass]="{ odd: odd, even: even }">\n                    <ion-col>\n                      {{item.tglJual}}\n                    </ion-col>\n                    <ion-col text-right>\n                      {{item.jumlah| number:"1.0-0"}} lbr\n                    </ion-col>\n                    <ion-col text-right>\n                      {{item.harga|currency:"Rp ":true:"1.0-0"}}\n                    </ion-col>\n                    <ion-col text-center>\n                      {{item.status}}\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n        <ion-col class="sideCol"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_market_market__["a" /* MarketProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=5.js.map