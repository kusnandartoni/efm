webpackJsonp([7],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminPageModule = (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]
            ]
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
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





var AdminPage = (function () {
    function AdminPage(menu, navCtrl, navParams, mkt, tool, lgn, platform) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mkt = mkt;
        this.tool = tool;
        this.lgn = lgn;
        this.platform = platform;
        this.dataJual = "";
        this.vld = true;
        this.searchTerm = '';
        this.bln = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.vld = true;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.menu.enable(true);
            _this.checkLogin();
        });
    };
    AdminPage.prototype.checkLogin = function () {
        var _this = this;
        this.tool.getStg('login').then(function (data) {
            if (!data || data.level !== '1') {
                _this.navCtrl.setRoot('LoginPage');
            }
            else {
                _this.clientId = data.clientId;
                _this.tool.getStg('ip').then(function (data) {
                    if (data) {
                        _this.ipAdr = data.ip;
                        _this.lgn.logger(_this.clientId, 'Membuka halaman Penjualan BBCA', data.ip).subscribe();
                    }
                });
            }
        }, function (err) {
            console.log('Home->getLoginStg()', err);
        });
    };
    AdminPage.prototype.change = function () {
        var _this = this;
        var tgl;
        tgl = this.tanggal.toString();
        var dd = tgl.substr(8, 2);
        var mm = tgl.substr(5, 2);
        var yy = tgl.substr(2, 2);
        this.vld = false;
        this.tglSrc = dd + ' ' + this.bln[parseInt(mm) - 1] + " " + yy;
        this.mkt.getAdminData(this.tglSrc).subscribe(function (data) {
            _this.lgn.logger(_this.clientId, 'Mengambil data tanggal ' + _this.tglSrc, _this.ipAdr).subscribe();
            _this.dataJual = data;
            _this.count();
        });
    };
    AdminPage.prototype.getOddLot = function () {
        this.mkt.getOddLot(this.tglSrc);
        this.lgn.logger(this.clientId, 'Mengunduh data OddLot tanggal ' + this.tglSrc, this.ipAdr).subscribe();
    };
    AdminPage.prototype.getFixLot = function () {
        this.mkt.getFixLot(this.tglSrc);
        this.lgn.logger(this.clientId, 'Mengunduh data FixLot tanggal ' + this.tglSrc, this.ipAdr).subscribe();
    };
    AdminPage.prototype.getFilteredData = function () {
        var _this = this;
        if (this.tglSrc) {
            this.mkt.getAdminData(this.tglSrc).subscribe(function (data) {
                _this.dataJual = data.filter(function (res) {
                    return res.clientId.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                });
                _this.count();
            });
        }
    };
    AdminPage.prototype.count = function () {
        this.Total = this.dataJual.length;
        this.Failed = 0;
        this.Sold = 0;
        for (var i = 0; i < this.Total; i++) {
            if (this.dataJual[i].sendTime == 'Failed')
                this.Failed++;
            if (this.dataJual[i].sendTime == 'Sold')
                this.Sold++;
        }
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\admin\admin.html"*/'<ion-header>\n    <ion-navbar color="light" text-center>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <img src="assets/imgs/logo-front.png">\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content>\n  <ion-card>\n    <ion-row>\n      <ion-col col-12 style="padding-bottom: 0 ;">\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="getFilteredData()" float-left style="margin: 0; width: 20%; top:-5px;"></ion-searchbar>\n        <ion-item float-right class="tgl" style="width: 20%">\n          <ion-label class="tgl" float-right>Pilih Tanggal</ion-label>\n          <ion-datetime cancelText="Batal" doneText="Pilih" displayFormat="DD MMM YY" [(ngModel)]="tanggal" (ionChange)="change()" class="tgl" text-right></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card *ngIf="dataJual.length > 0">\n    <ion-row>\n        <ion-col col-2><h1 ion-text color="primary">TOTAL : {{Total}}</h1></ion-col>\n        <ion-col col-2><h1 ion-text color="secondary">SOLD : {{Sold}}</h1></ion-col>\n        <ion-col col-2><h1 ion-text color="danger">FAILED : {{Failed}}</h1></ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <button ion-button full icon-end color="primary" float-right class="small_icon">\n        <h2 ion-text color="light">Data Penjualan Saham Bonus BBCA</h2>          \n      </button>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row class="header">\n          <ion-col text-center>\n            No\n          </ion-col>\n          <ion-col text-center>\n            Client\n          </ion-col>\n          <ion-col text-center>\n            B/S\n          </ion-col>\n          <ion-col text-center>\n            Stock\n          </ion-col>\n          <ion-col text-center>\n            Volume\n          </ion-col>\n          <ion-col text-center>\n            Shares\n          </ion-col>\n          <ion-col text-center>\n            Price\n          </ion-col>\n          <ion-col text-center>\n            (M)Market/(Limit)\n          </ion-col>\n          <ion-col text-center>\n            Day/GTC/One\n          </ion-col>\n          <ion-col text-center>\n            Status\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let item of dataJual; let i = index; let odd=odd; let even=even;" class="row" [ngClass]="{ odd: odd, even: even }">\n          <ion-col text-center>{{i+1}}</ion-col>\n          <ion-col text-center>{{item.clientId}}</ion-col>\n          <ion-col text-center>{{item.bs}}</ion-col>\n          <ion-col text-center>{{item.stock}}</ion-col>\n          <ion-col text-center>{{item.jumlah|number:\'1.0-0\'}}</ion-col>\n          <ion-col text-center>{{item.share}}</ion-col>\n          <ion-col text-center>{{item.harga}}</ion-col>\n          <ion-col text-center>{{item.market}}</ion-col>\n          <ion-col text-center>{{item.state}}</ion-col>\n          <ion-col text-center>{{item.sendTime}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    <ion-row class="cardfooter">\n      <ion-col col-9>\n      </ion-col>\n      <ion-col col-3>\n        <ion-item>\n          <button ion-button outline round item-start icon-start (click)="getOddLot()" [disabled]="vld"><ion-icon name="download"></ion-icon>  Odd Lot</button>\n          <button ion-button outline round item-end icon-start (click)="getFixLot()" [disabled]="vld"> <ion-icon name="download" ></ion-icon> Fixed Lot</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_market_market__["a" /* MarketProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ })

});
//# sourceMappingURL=7.js.map