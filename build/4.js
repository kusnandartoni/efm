webpackJsonp([4],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_market_market__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(fb, navCtrl, menu, mkt, tool, lgn, platform) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.mkt = mkt;
        this.tool = tool;
        this.lgn = lgn;
        this.platform = platform;
        this.holiday = false;
        this.menu.enable(true);
        this.oRule = false;
        this.oForm = true;
        this.formJual = this.fb.group({
            jumlah: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            harga: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.setTanggal();
            _this.checkLogin();
            _this.getPrevPrice();
            _this.tool.getStg('aturan').then(function (rslt) {
                if (rslt) {
                    _this.aturan = rslt;
                }
                else {
                    _this.getAturan();
                }
            }, function (er) {
                _this.getAturan();
            });
        });
    };
    HomePage.prototype.setTanggal = function () {
        var _this = this;
        this.dow = new Date().getDay();
        this.time = new Date().getUTCHours() + 7;
        var dy = new Date().getDate().toString();
        if (dy.length < 2)
            dy = '0' + dy;
        var mo = (new Date().getMonth() + 1).toString();
        if (mo.length < 2)
            mo = '0' + mo;
        var yr = new Date().getFullYear();
        var tgl = yr + '-' + mo + '-' + dy;
        this.lgn.getHoliday(tgl).subscribe(function (data) {
            if (data.result === '1')
                _this.holiday = true;
        });
    };
    HomePage.prototype.checkLogin = function () {
        var _this = this;
        this.tool.getStg('login').then(function (data) {
            if (data && data.level === '0') {
                _this.clientId = data.clientId;
                _this.tool.getStg('ip').then(function (data) {
                    if (data) {
                        _this.ipAdr = data.ip;
                        _this.lgn.logger(_this.clientId, 'Masuk halaman penjualan', _this.ipAdr).subscribe();
                    }
                });
            }
            else {
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (err) {
            console.log('Home->getLoginStg()', err);
        });
    };
    HomePage.prototype.getAturan = function () {
        var _this = this;
        this.mkt.getAturanWeb().subscribe(function (res) {
            _this.aturan = res;
            _this.tool.setStg('aturan', res).then();
        }, function (error) {
            console.log('getAturan', error);
        });
    };
    HomePage.prototype.getPrevPrice = function () {
        var _this = this;
        var today = new Date();
        var dd = today.getDate();
        this.tool.showLoading();
        this.tool.getStg('price').then(function (data) {
            if ((data && typeof (data) !== "undefined") && data.dd === dd) {
                _this.code = data.code;
                _this.prevPrice = data.prevPrice;
                _this.tool.getStg('porto').then(function (res) {
                    _this.maxLbr = res.qty;
                });
                _this.tool.stopLoading();
            }
            else {
                _this.reqPrevPrice(dd);
            }
        }, function (err) {
            console.log('Home-> getPrevPrice()', err);
            if (err.code === 2) {
                _this.reqPrevPrice(dd);
            }
        });
    };
    HomePage.prototype.reqPrevPrice = function (dd) {
        var _this = this;
        this.mkt.getBBCA().subscribe(function (data) {
            _this.code = data.kode;
            _this.prevPrice = data.harga;
            _this.tool.setStg('price', { code: data.kode, prevPrice: data.harga, dd: dd });
            _this.lgn.getValidasi(_this.clientId).subscribe(function (res) {
                _this.maxLbr = res.bbca;
                _this.tool.setStg('porto', { clientId: res.clientId, nama: res.nama, qty: res.bbca });
            }, function (err) {
                console.log('error storing data 2', err);
            });
            _this.tool.stopLoading();
        }, function (err) {
            console.log('Home->reqPrevPrice()', err);
            _this.tool.stopLoading();
        });
    };
    HomePage.prototype.doJual = function () {
        var _this = this;
        this.tool.showLoading();
        this.tool.getStg('net').then(function (data) {
            if (data.conn != "offline") {
                _this.jual();
            }
            else {
                _this.tool.showAlert('Error', 'tidak ditemukan jaringan internet');
                _this.tool.stopLoading();
            }
        }, function (error) {
            console.log('Home->doJual()', error);
            _this.tool.stopLoading();
        });
    };
    HomePage.prototype.jual = function () {
        var _this = this;
        if (this.validasiJual()) {
            this.mkt.jual(this.clientId, this.formJual.value.jumlah, this.formJual.value.harga)
                .subscribe(function (data) {
                var res = data;
                _this.tool.stopLoading();
                if (res.result == '1') {
                    _this.lgn.logger(_this.clientId, 'Berhasil jual sejumlah[' + _this.formJual.value.jumlah + '] di harga[' + _this.formJual.value.harga + ']', _this.ipAdr).subscribe();
                    _this.tool.showAlert('Berhasil', res.message);
                }
                else {
                    _this.tool.showAlert('Gagal', res.message);
                }
            }, function (error) {
                console.log('Home->jual()', error);
            });
        }
    };
    HomePage.prototype.validasiJual = function () {
        var res = true;
        if (!this.checkHariLibur())
            res = false;
        else if (!this.checkWaktu())
            res = false;
        else if (!this.checkFraksi())
            res = false;
        else if (!this.checkJumlah())
            res = false;
        return res;
    };
    HomePage.prototype.checkHariLibur = function () {
        var res = true;
        if (this.holiday || this.dow === 6 || this.dow === 0) {
            res = false;
            this.lgn.logger(this.clientId, 'Mencoba Jual Tapi ditolak karena libur ', this.ipAdr).subscribe();
            this.tool.showAlert('Info', 'Tidak bisa mengirim form di hari libur');
            this.tool.stopLoading();
        }
        return res;
    };
    HomePage.prototype.checkWaktu = function () {
        var res = true;
        if (this.time > 14 || this.time < 6) {
            res = false;
            this.lgn.logger(this.clientId, 'Mencoba jual tapi ditolak karena melebihi batas waktu[' + this.time + ']', this.ipAdr).subscribe();
            this.tool.showAlert('Info', 'Penjualan saham melalui E-Form hanya bisa dilakukan jam 06.00 - 15.00 WIB');
            this.tool.stopLoading();
        }
        return res;
    };
    HomePage.prototype.checkFraksi = function () {
        var res = true;
        if (!(parseInt(this.formJual.value.harga) % 25 === 0)) {
            res = false;
            this.lgn.logger(this.clientId, 'Mencoba jual tapi ditolak karena fraksi harga tidak sesuai [' + this.formJual.value.harga + ']', this.ipAdr).subscribe();
            this.tool.showAlert('Info', 'Harga jual harus kelipatan Rp 25,-');
            this.tool.stopLoading();
        }
        return res;
    };
    HomePage.prototype.checkJumlah = function () {
        var res = true;
        if (!(parseInt(this.formJual.value.jumlah) <= parseInt(this.maxLbr))) {
            res = false;
            this.lgn.logger(this.clientId, 'Mencoba jual tapi ditolak karena Jumlah [' + this.formJual.value.jumlah + '] lebih besar dari max [' + this.maxLbr + ']', this.ipAdr).subscribe();
            this.tool.showAlert('Info', 'Jumlah efek yang dijual tidak boleh lebih besar dari jumlah efek yang tersedia');
            this.tool.stopLoading();
        }
        else if ((parseInt(this.formJual.value.jumlah) <= 100)) {
            res = false;
            this.lgn.logger(this.clientId, 'Mencoba jual tapi ditolak karena Jumlah [' + this.formJual.value.jumlah + '] kurang dari 100 ', this.ipAdr).subscribe();
            this.tool.showAlert('Info', 'Jumlah efek yang dijual tidak boleh kurang dari 100 lembar');
            this.tool.stopLoading();
        }
        return res;
    };
    HomePage.prototype.openForm = function () {
        this.oForm = !this.oForm;
        this.oRule = false;
    };
    HomePage.prototype.openRule = function () {
        this.oForm = false;
        this.oRule = !this.oRule;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="light" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row>\n        <ion-col class="sideCol"></ion-col>\n        <ion-col class="mainCol">\n\n          <ion-card>\n            <ion-card-header>\n              <button ion-button full icon-end color="primary" float-right class="small_icon" (click)="openForm()">\n                <h2 ion-text color="light">Formulir Penjualan Saham</h2>          \n                <ion-icon name="arrow-dropdown" ></ion-icon>\n              </button>\n            </ion-card-header>\n            <ion-card-content *ngIf="oForm">\n              <form [formGroup]="formJual" (ngSubmit)="doJual()">\n                <ion-row >\n                  <ion-col>\n                    <ion-item>\n                      <ion-label floating>Kode Saham</ion-label>\n                      <ion-input type="text" class="block" disabled [value]="code" text-center></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label floating>Harga Penutupan kemarin</ion-label>\n                      <ion-input type="text" disabled class="block" value=\'{{prevPrice|currency:"Rp ":true:"1.0-0"}}\' text-center></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-item>\n                    <ion-label floating>Harga jual</ion-label>\n                    <ion-input type="number" formControlName="harga" class="chg" text-center></ion-input>\n                  </ion-item>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label floating>Jumlah Efek yang dijual</ion-label>\n                      <ion-input type="number" formControlName="jumlah" class="chg" text-center></ion-input>\n                    </ion-item>\n                  </ion-col>\n        \n                  <ion-col>\n                    <ion-item>\n                      <ion-label floating>Jumlah Efek yang tersedia</ion-label>\n                      <ion-input type="text" disabled class="block" value=\'{{maxLbr|number:"1.0-0"}}\' text-center></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n        \n                <ion-item>\n                  <button ion-button round float-right [disabled]="!formJual.valid">Kirim</button>\n                </ion-item>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        \n          <ion-card>\n            <ion-card-header text-center>\n                <button ion-button full icon-end color="sekuritas" float-right class="small_icon" (click)="openRule()">\n                  <h2 ion-text color="light">Keterangan</h2>          \n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n            </ion-card-header>\n            <ion-card-content *ngIf="oRule" >\n              <ion-grid text-left>\n                <ion-row class="odd">\n                  <ion-col col-3>Kode Nasabah</ion-col>\n                  <ion-col col-9>:Kode Nasabah di BCA Sekuritas (alphanumeric 4 karakter)</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-3>Kode Saham</ion-col>\n                  <ion-col col-9>:Kode Saham BBCA</ion-col>\n                </ion-row>\n                <ion-row class="odd">\n                  <ion-col col-3>Jumlah Efek Tersedia</ion-col>\n                  <ion-col col-9>:Saham BBCA yang dimiliki (dalam bentuk lembar)</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-3>Jumlah Efek yang dijual	</ion-col>\n                  <ion-col col-9>:Saham BBCA yang akan dijual (dalam bentuk lembar)</ion-col>\n                </ion-row>\n                <ion-row class="odd">\n                  <ion-col col-3>Harga Penutupan kemarin</ion-col>\n                  <ion-col col-9>:Harga Saham BBCA pada penutupan kemarin di BEI</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-3>Status Penjualan</ion-col>\n                  <ion-col col-9>: </ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-1></ion-col>          \n                  <ion-col col-2>Sent </ion-col>\n                  <ion-col col-8>: permintaan jual sudah terkirim.</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-1></ion-col>          \n                  <ion-col col-2>Process </ion-col>\n                  <ion-col col-8>: permintaan jual sedang di proses oleh BCA Sekuritas.</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-1></ion-col>          \n                  <ion-col col-2>Sold </ion-col>\n                  <ion-col col-8>: saham BBCA sudah terjual.</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-1></ion-col>          \n                  <ion-col col-2>Failed </ion-col>\n                  <ion-col col-8>: saham BBCA tidak terjual .</ion-col>\n                </ion-row>\n                <ion-row class="even">\n                  <ion-col col-1></ion-col>          \n                  <ion-col col-2>Cancel </ion-col>\n                  <ion-col col-8>: permintaan dibatalkan karena ada permintaan jual yang baru dari nasabah.</ion-col>\n                </ion-row>\n                <ion-row class="odd">\n                  <ion-col col-3>Untuk pertanyaan mohon hubungi Call Centre pada no telp :</ion-col>\n                  <ion-col col-9>:•	CISCO Ext : 63222</ion-col>\n                </ion-row>\n                <ion-row class="odd">\n                  <ion-col col-3></ion-col>          \n                  <ion-col col-9> •	021-25563000 ext : 63222</ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n        <ion-col class="sideCol"></ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_market_market__["a" /* MarketProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map