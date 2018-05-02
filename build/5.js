webpackJsonp([5],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageModule", function() { return CreateUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_user__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateUserPageModule = (function () {
    function CreateUserPageModule() {
    }
    CreateUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_user__["a" /* CreateUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_user__["a" /* CreateUserPage */]),
            ],
        })
    ], CreateUserPageModule);
    return CreateUserPageModule;
}());

//# sourceMappingURL=create-user.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateUserPage = (function () {
    function CreateUserPage(navCtrl, navParams, tool, lgn, platform, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tool = tool;
        this.lgn = lgn;
        this.platform = platform;
        this.menu = menu;
        this.username = '';
        this.pass = '';
        this.conf = '';
        this.nama = '';
        this.color = '';
        this.strength = '';
        this.strong = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");
        this.medium = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{5,})");
        this.weak = new RegExp("^((?=.*[0-9])|(?=.*[a-zA-Z]))(?=.{1,})");
    }
    CreateUserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.menu.enable(true);
            _this.checkLogin();
        });
    };
    CreateUserPage.prototype.checkLogin = function () {
        var _this = this;
        console.log('check login');
        this.tool.getStg('login').then(function (data) {
            if (!data || data.level !== '1') {
                _this.navCtrl.setRoot('LoginPage');
            }
            else {
                _this.clientId = data.clientId;
                _this.tool.getStg('ip').then(function (data) {
                    if (data) {
                        _this.ipAdr = data.ip;
                        _this.lgn.logger(_this.clientId, 'Membuka halaman Buat User', data.ip).subscribe();
                    }
                });
            }
        }, function (err) {
            console.log('Home->getLoginStg()', err);
        });
    };
    CreateUserPage.prototype.daftar = function () {
        var _this = this;
        this.tool.showLoading();
        this.tool.getStg('net').then(function (data) {
            if (data.conn != "ofline") {
                _this.simpan();
            }
            else {
                _this.tool.showAlert('Error', 'tidak ditemukan jaringan internet');
                _this.tool.stopLoading();
            }
        }, function (error) {
            console.log('Register->daftar()', error);
            _this.tool.stopLoading();
        });
    };
    CreateUserPage.prototype.simpan = function () {
        var _this = this;
        this.lgn.createAdmin(this.username, this.pass, this.nama).subscribe(function (data) {
            _this.tool.stopLoading();
            if (data.result == '1') {
                _this.lgn.logger(_this.clientId, 'Berhasil Mendaftarkan User ' + _this.username, _this.ipAdr).subscribe();
                _this.tool.showAlert('Berhasil', data.message);
            }
            else {
                _this.lgn.logger(_this.clientId, 'Mencoba mendaftarkan user ' + _this.username + ' tapi data sudah ada', _this.ipAdr).subscribe();
                var conf = _this.tool.showConfirm('Anda sudah terdaftar ,<br>Apakah anda ingin mengubah password?', 'Konfirmasi', 'Tidak', 'YA');
                conf.present();
                conf.onDidDismiss(function (res) {
                    if (res) {
                        _this.tool.showLoading();
                        _this.ubah();
                    }
                    else {
                        _this.lgn.logger(_this.clientId, 'Batal ubah data', _this.ipAdr).subscribe();
                    }
                });
            }
        }, function (error) {
            console.log('Register->simpan()', error);
            _this.tool.stopLoading();
        });
    };
    CreateUserPage.prototype.ubah = function () {
        var _this = this;
        this.lgn.updateAdmin(this.username, this.pass, this.nama).subscribe(function (data) {
            _this.tool.stopLoading();
            if (data.result == '1') {
                _this.lgn.logger(_this.clientId, 'Berhasil ubah data ' + _this.username, _this.ipAdr).subscribe();
                _this.tool.showAlert('Berhasil', data.message);
            }
            else {
                _this.tool.showAlert('Gagal', data.message);
            }
        }, function (error) {
            console.log('Register->ubah()', error);
        });
    };
    CreateUserPage.prototype.passInput = function (input) {
        if (this.strong.test(input)) {
            this.strength = 'kuat';
            this.color = 'secondary';
        }
        else if (this.medium.test(input)) {
            this.strength = 'sedang';
            this.color = 'warning';
        }
        else if (this.weak.test(input)) {
            this.strength = 'lemah';
            this.color = 'danger';
        }
        else {
            this.strength = '';
            this.color = 'light';
        }
    };
    CreateUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-user',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\create-user\create-user.html"*/'<ion-header>\n  <ion-navbar color="light" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n        <ion-col class="sideCol"></ion-col>\n        <ion-col class="mainCol">\n\n          <form>\n            <ion-item>\n                <ion-label floating>Username</ion-label>\n                <ion-input type="text" [(ngModel)]="username" [ngModelOptions]="{standalone:true}" class="block"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Nama</ion-label>\n              <ion-input type="text" [(ngModel)]="nama" [ngModelOptions]="{standalone:true}" class="block"></ion-input>\n          </ion-item>\n            <ion-item>\n                <ion-label floating>Password  <ion-badge  item-end class="kecil" [color]="color">{{strength}}</ion-badge></ion-label>\n                <ion-input type="password" [(ngModel)]="pass" [ngModelOptions]="{standalone:true}" (ngModelChange)="passInput($event)" class="chg"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Konfirmasi Password <ion-badge *ngIf="conf==pass && (conf.length>7)" color="secondary"><ion-icon name="checkmark"></ion-icon></ion-badge><ion-badge *ngIf="(conf!=pass) && (conf.length>7)" color="danger"><ion-icon name="close"></ion-icon></ion-badge></ion-label>\n                <ion-input type="password" [(ngModel)]="conf" [ngModelOptions]="{standalone:true}" class="chg"></ion-input>\n            </ion-item>\n          </form>\n          <ion-item no-lines>\n            <button ion-button round float-right [disabled]="!((strength==\'kuat\') && (conf==pass))" (click)="daftar()">Buat</button>\n        </ion-item>\n        </ion-col>\n        <ion-col class="sideCol"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\create-user\create-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], CreateUserPage);
    return CreateUserPage;
}());

//# sourceMappingURL=create-user.js.map

/***/ })

});
//# sourceMappingURL=5.js.map