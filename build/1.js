webpackJsonp([1],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(301);
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
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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





var LoginPage = (function () {
    function LoginPage(fb, navCtrl, menu, tool, lgn, ev, platform) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.tool = tool;
        this.lgn = lgn;
        this.ev = ev;
        this.platform = platform;
        this.formLogin = this.fb.group({
            clientId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.menu.enable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.checkLogin();
            _this.tool.setStg('net', { conn: null });
            _this.tool.getStg('ip').then(function (data) {
                if (data) {
                    _this.ipAdr = data.ip;
                }
                else {
                    _this.lgn.getIp().subscribe(function (data) {
                        // console.log('get ip',data);
                        var res;
                        res = data;
                        _this.ipAdr = res.ip;
                        _this.tool.setStg('ip', data).then();
                    }, function (err) {
                        console.log('error', err);
                    });
                }
            });
        });
    };
    LoginPage.prototype.checkLogin = function () {
        var _this = this;
        this.tool.getStg('login').then(function (data) {
            if (data) {
                var save = { clientId: data.clientId, level: data.level, nama: data.nama };
                _this.publishUser(save);
                if (data.level === '1') {
                    _this.navCtrl.setRoot('AdminPage');
                }
                else {
                    _this.navCtrl.setRoot('HomePage');
                }
            }
        }, function (error) {
            console.log('Login-> getStgLogin()', error);
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.tool.showLoading();
        this.tool.getStg('net').then(function (data) {
            if (data.conn != "ofline") {
                _this.login();
            }
            else {
                _this.tool.showAlert('Error', 'tidak ditemukan jaringan internet');
                _this.tool.stopLoading();
            }
        }, function (error) {
            console.log('Login-> doLogin()', error);
            _this.tool.stopLoading();
        });
    };
    LoginPage.prototype.publishUser = function (data) {
        this.ev.publish('user', data);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.lgn.getData(this.formLogin.value.clientId, this.formLogin.value.password).subscribe(function (data) {
            var res;
            res = data;
            _this.tool.stopLoading();
            if (res.result == "1") {
                if (res.auth) {
                    var save = { clientId: res.clientId, level: res.level, nama: res.nama };
                    _this.publishUser(save);
                    _this.lgn.logger(_this.formLogin.value.clientId, 'Berhasil Login', _this.ipAdr).subscribe();
                    _this.tool.setStg('login', save).then(function () {
                        var alrt = _this.tool.setAlert('Login', 'Selamat Datang ' + res.nama);
                        alrt.present();
                        alrt.onDidDismiss(function () {
                            _this.menu.enable(true);
                            if (res.level === '1') {
                                _this.navCtrl.setRoot('AdminPage');
                            }
                            else {
                                _this.navCtrl.setRoot('HomePage');
                            }
                        });
                    }, function (error) {
                        console.log('error storing data', error);
                    });
                    _this.lgn.getValidasi(_this.formLogin.value.clientId).subscribe(function (data) {
                        _this.tool.setStg('porto', { clientId: data.clientId, nama: data.nama, qty: data.bbca });
                    }, function (err) {
                        console.log('error storing data 2', err);
                    });
                }
                else {
                    _this.lgn.logger(_this.formLogin.value.clientId, 'Mencoba login tapi password salah', _this.ipAdr).subscribe();
                    _this.tool.showAlert('Login', 'Password Salah');
                }
            }
            else {
                _this.lgn.logger(_this.formLogin.value.clientId, 'Mencoba login tapi belum terdaftar', _this.ipAdr).subscribe();
                _this.tool.showAlert('Login', 'User ID[' + _this.formLogin.value.clientId + '] belum terdaftar, <br>silahkan mendaftar terlebih dahulu');
            }
        }, function (err) {
            console.log('Login -> login()', err);
        });
    };
    LoginPage.prototype.goToRegis = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.gotoGooglePlay = function () {
        window.open('https://play.google.com/store/apps/details?id=bcas.it5.formbbca');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="light" text-center>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid text-center>\n    <ion-row>\n      <ion-col class="sideCol"></ion-col>\n      <ion-col class="mainCol">\n\n        <ion-card>\n          <ion-item text-center color="primary">\n            <h1 ion-text color="light">Login</h1>    \n          </ion-item>\n          <form [formGroup]="formLogin" (ngSubmit)="doLogin()">\n            <ion-item class="input">\n              <ion-label floating class="label">Kode Nasabah</ion-label>\n              <ion-input type="text" formControlName="clientId" class="chg"></ion-input>\n            </ion-item>\n            <ion-item class="input" >\n              <ion-label floating class="label">Password</ion-label>\n              <ion-input type="password" formControlName="password" class="chg"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-row>\n                <ion-col  col-6>\n                    <a ion-button outline small round (click)="goToRegis()" float-right>Daftar</a>\n                </ion-col>\n                <ion-col  col-6>\n                    <button ion-button round small [disabled]="!formLogin.valid">Masuk</button>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </form>\n        </ion-card>\n        <br><br><br><br><br>\n        <div hideWhen="ios,android" text-center>\n          <img src="assets/imgs/google-play-badge.png" width="150" (click)="gotoGooglePlay()" >\n        </div>\n        <div text-center>\n          <span id="siteseal"></span>\n        </div>\n\n      </ion-col>\n      <ion-col class="sideCol"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-label>BCAS@2018</ion-label>\n    <ion-label text-end></ion-label>\n  </ion-item>\n</ion-footer>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map