webpackJsonp([1],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorHistoriPageModule", function() { return MonitorHistoriPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monitor_histori__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MonitorHistoriPageModule = (function () {
    function MonitorHistoriPageModule() {
    }
    MonitorHistoriPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__monitor_histori__["a" /* MonitorHistoriPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__monitor_histori__["a" /* MonitorHistoriPage */]),
            ],
        })
    ], MonitorHistoriPageModule);
    return MonitorHistoriPageModule;
}());

//# sourceMappingURL=monitor-histori.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorHistoriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_market_market__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonitorHistoriPage = (function () {
    function MonitorHistoriPage(navCtrl, navParams, tool, lgn, platform, mkt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tool = tool;
        this.lgn = lgn;
        this.platform = platform;
        this.mkt = mkt;
        this.search = '';
    }
    MonitorHistoriPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.checkLogin();
        });
    };
    MonitorHistoriPage.prototype.checkLogin = function () {
        var _this = this;
        this.tool.getStg('login').then(function (data) {
            if (!data || data.level !== '1') {
                _this.navCtrl.setRoot('LoginPage');
            }
            else {
                _this.clientId = data.clientId;
                _this.tool.getStg('ip').then(function (data) {
                    if (data) {
                        _this.lgn.logger(_this.clientId, 'Masuk halaman monitor-history', data.ip).subscribe();
                    }
                });
            }
        }, function (err) {
            console.log('Monitor History-> checkLogin', err);
        });
    };
    MonitorHistoriPage.prototype.getSearchData = function () {
        if (this.search.length > 3) {
            this.getData();
        }
    };
    MonitorHistoriPage.prototype.getData = function () {
        var _this = this;
        this.tool.showLoading();
        this.mkt.getData(this.search).subscribe(function (data) {
            var result;
            result = data;
            _this.items = result.records;
            _this.tool.stopLoading();
        }, function (err) {
            console.log('History-> getData()', err);
            _this.tool.stopLoading();
        });
    };
    MonitorHistoriPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-monitor-histori',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\monitor-histori\monitor-histori.html"*/'<ion-header>\n  <ion-navbar color="light" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n</ion-header>\n  \n<ion-content no-padding>\n    <ion-grid>\n      <ion-row>\n          <ion-col class="sideCol"></ion-col>\n          <ion-col class="mainCol">\n  \n            <ion-card>\n              <ion-card-header>\n                  <ion-grid no-padding no-margin>\n                    <ion-row no-padding>\n                      <ion-col col-4 no-padding no-margin style="left: -7px; top: 0px;">\n                          <ion-searchbar [(ngModel)]="search" (ionInput)="getSearchData()"></ion-searchbar>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <button ion-button full icon-end color="primary" float-right class="small_icon">\n                    <h2 ion-text color="light">Histori Pengiriman Formulir</h2>          \n                    <ion-icon name="arrow-dropdown" ></ion-icon>\n                  </button>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-grid>\n                  <ion-row class="header">\n                    <ion-col>\n                      Tanggal\n                    </ion-col>\n                    <ion-col text-right>\n                      jumlah\n                    </ion-col>\n                    <ion-col text-right>\n                      harga\n                    </ion-col>\n                    <ion-col text-center>\n                      status\n                    </ion-col>\n                  </ion-row>\n                  <ion-row *ngFor="let item of items;let index=index; let odd=odd; let even=even;" class="row" [ngClass]="{ odd: odd, even: even }">\n                    <ion-col>\n                      {{item.tglJual}}\n                    </ion-col>\n                    <ion-col text-right>\n                      {{item.jumlah| number:"1.0-0"}} lbr\n                    </ion-col>\n                    <ion-col text-right>\n                      {{item.harga|currency:"Rp ":true:"1.0-0"}}\n                    </ion-col>\n                    <ion-col text-center>\n                      {{item.status}}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </ion-card>\n  \n          </ion-col>\n          <ion-col class="sideCol"></ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\monitor-histori\monitor-histori.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_market_market__["a" /* MarketProvider */]])
    ], MonitorHistoriPage);
    return MonitorHistoriPage;
}());

//# sourceMappingURL=monitor-histori.js.map

/***/ })

});
//# sourceMappingURL=1.js.map