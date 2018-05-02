webpackJsonp([8],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		288,
		6
	],
	"../pages/create-user/create-user.module": [
		289,
		5
	],
	"../pages/history/history.module": [
		290,
		4
	],
	"../pages/home/home.module": [
		291,
		3
	],
	"../pages/keterangan/keterangan.module": [
		292,
		2
	],
	"../pages/login/login.module": [
		293,
		1
	],
	"../pages/register/register.module": [
		294,
		7
	],
	"../pages/syarat/syarat.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DscmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_market_market__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DscmPage = (function () {
    function DscmPage(navCtrl, navParams, viewCtrl, render, mkt, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.render = render;
        this.mkt = mkt;
        this.platform = platform;
        this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'my-disclaim', true);
    }
    DscmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.mkt.getAturanWeb().subscribe(function (data) {
                console.log(data);
                _this.syarat = data;
            });
        });
    };
    DscmPage.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    DscmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dscm',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\dscm\dscm.html"*/'<ion-header>\n\n  <ion-navbar text-center color="primary">\n    <ion-title>Syarat dan Ketentuan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ol text-left padding>\n    <li *ngFor="let items of syarat">{{items.item}}</li>\n  </ol>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col col-6>\n        <button ion-button full outline item-end color="danger" (click)="dismiss(false)">Tidak Setuju</button>\n    </ion-col>\n    <ion-col col-6>\n        <button ion-button full outline item-end color="secondary" (click)="dismiss(true)">Setuju</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\dscm\dscm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_2__providers_market_market__["a" /* MarketProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], DscmPage);
    return DscmPage;
}());

//# sourceMappingURL=dscm.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DsclComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_market_market__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DsclComponent = (function () {
    function DsclComponent(tools, viewCtrl, render, mkt) {
        var _this = this;
        this.tools = tools;
        this.viewCtrl = viewCtrl;
        this.render = render;
        this.mkt = mkt;
        this.tools.getStg('dscl').then(function (res) {
            if (res) {
                _this.disclaimer = res;
            }
            else {
                _this.getDisclaim();
            }
        }, function (err) {
            _this.getDisclaim();
        });
        this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'my-disclaim', true);
    }
    DsclComponent.prototype.getDisclaim = function () {
        var _this = this;
        this.mkt.getDisclalimWeb().subscribe(function (data) {
            // console.log(data);
            _this.tools.setStg('dscl', data);
            _this.disclaimer = data;
        });
    };
    DsclComponent.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    DsclComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dscl',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\components\dscl\dscl.html"*/'<ion-header>\n\n  <ion-navbar text-center color="primary">\n    <ion-title>Disclaimer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ol text-justify padding>\n    <li *ngFor="let items of disclaimer">{{items.item}}</li>\n  </ol>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col col-6>\n        \n    </ion-col>\n    <ion-col col-6>\n        <ion-item no-lines>\n            <button ion-button round float-right outline item-end color="secondary" (click)="dismiss(true)">Ok</button>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\components\dscl\dscl.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_2__providers_market_market__["a" /* MarketProvider */]])
    ], DsclComponent);
    return DsclComponent;
}());

//# sourceMappingURL=dscl.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdktComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_market_market__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the SdktComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SdktComponent = (function () {
    function SdktComponent(mkt, tools, viewCtrl, render) {
        var _this = this;
        this.mkt = mkt;
        this.tools = tools;
        this.viewCtrl = viewCtrl;
        this.render = render;
        this.tools.getStg('sdkt').then(function (res) {
            if (res) {
                // console.log('res=>',res);
                _this.syarat = res;
            }
            else {
                _this.getSK();
            }
        }, function (err) {
            _this.getSK();
        });
        this.render.setElementClass(viewCtrl.pageRef().nativeElement, 'my-disclaim', true);
    }
    SdktComponent.prototype.getSK = function () {
        var _this = this;
        this.mkt.getAturanWeb().subscribe(function (data) {
            // console.log(data);
            _this.tools.setStg('sdkt', data);
            _this.syarat = data;
        }, function (err) {
            console.log('getSKErr', err);
        });
    };
    SdktComponent.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    SdktComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sdkt',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\components\sdkt\sdkt.html"*/'<ion-header>\n\n  <ion-navbar text-center color="primary">\n    <ion-title>Syarat & Ketentuan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ol text-justify padding>\n    <li *ngFor="let items of syarat">{{items.item}}</li>\n  </ol>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col col-6>\n        \n    </ion-col>\n    <ion-col col-6>\n      <ion-item no-lines>\n          <button ion-button round float-right outline item-end color="secondary" (click)="dismiss(true)">Ok</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\components\sdkt\sdkt.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_market_market__["a" /* MarketProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], SdktComponent);
    return SdktComponent;
}());

//# sourceMappingURL=sdkt.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShowModal; });
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





var RegisterPage = (function () {
    function RegisterPage(navCtrl, mdlCtrl, fb, platform, lgn, tool, menu) {
        this.navCtrl = navCtrl;
        this.mdlCtrl = mdlCtrl;
        this.fb = fb;
        this.platform = platform;
        this.lgn = lgn;
        this.tool = tool;
        this.menu = menu;
        this.dataValid = {};
        this.errClientId = '';
        this.errNik = '';
        this.errKtp = '';
        this.errTglLahir = '';
        this.validate = false;
        this.menu.enable(false);
        this.formValid = this.fb.group({
            clientId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(4)])],
            nik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ktp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tglLahir: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var dsc = _this.lgn.showSK();
            dsc.present();
            _this.tool.getStg('ip').then(function (data) {
                if (data) {
                    _this.ipAdr = data.ip;
                    // console.log('IP addr',this.ipAdr);
                }
            });
        });
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.doValidasi = function () {
        var _this = this;
        this.tool.showLoading();
        this.tool.getStg('net').then(function (data) {
            if (data.conn != "offline") {
                _this.validasi();
            }
            else {
                _this.tool.showAlert('Error', 'tidak ditemukan jaringan internet');
                _this.tool.stopLoading();
            }
        }, function (error) {
            console.log('Register->doValidasi()', error);
            _this.tool.stopLoading();
        });
    };
    RegisterPage.prototype.validasi = function () {
        var _this = this;
        this.lgn.getValidasi(this.formValid.value.clientId).subscribe(function (data) {
            // console.log(data);
            _this.tool.stopLoading();
            var res;
            res = data;
            _this.dataValid = data;
            if (res.result == '1') {
                _this.errClientId = '';
                var ok = true;
                _this.validate = true;
                if (!(res.nik == _this.formValid.value.nik)) {
                    _this.lgn.logger(_this.formValid.value.clientId, 'Mencoba validasi tapi nik salah', _this.ipAdr).subscribe();
                    _this.errNik = 'Data Nomor Induk Karyawan tidak sesuai';
                    ok = false;
                }
                if (!(res.ktp == _this.formValid.value.ktp)) {
                    _this.lgn.logger(_this.formValid.value.clientId, 'Mencoba validasi tapi tapi ktp salah', _this.ipAdr).subscribe();
                    _this.errKtp = 'Data Nomor Identitas(KTP) tidak sesuai';
                    ok = false;
                }
                if (!(res.tglLahir == _this.formValid.value.tglLahir)) {
                    _this.lgn.logger(_this.formValid.value.clientId, 'Mencoba validasi tapi tapi tglLahir salah', _this.ipAdr).subscribe();
                    _this.errTglLahir = 'Data Tanggal Lahir tidak sesuai';
                    ok = false;
                }
                if (ok) {
                    _this.lgn.logger(_this.formValid.value.clientId, 'Berhasil Validasi', _this.ipAdr).subscribe();
                    _this.validate = false;
                    _this.openModal(res.clientId, res.nama);
                }
            }
            else {
                _this.lgn.logger(_this.formValid.value.clientId, 'Mencoba validasi tapi data tidak ada', _this.ipAdr).subscribe();
                _this.errClientId = "tidak ada Kode Nasabah [" + _this.formValid.value.clientId + "]";
                _this.errKtp = '';
                _this.errNik = '';
                _this.errTglLahir = '';
            }
        }, function (error) {
            console.log('Register->validasi()', error);
            _this.tool.stopLoading();
        });
    };
    RegisterPage.prototype.checkInput = function () {
        if (this.dataValid.nik == this.formValid.value.nik) {
            this.errNik = '';
        }
        else {
            if (this.validate) {
                this.errNik = 'Data Nomor Induk Karyawan tidak sesuai';
            }
        }
        if (this.dataValid.ktp == this.formValid.value.ktp) {
            this.errKtp = '';
        }
        else {
            if (this.validate) {
                this.errKtp = 'Data Nomor Identitas(KTP) tidak sesuai';
            }
        }
        if (this.dataValid.tglLahir == this.formValid.value.tglLahir) {
            this.errTglLahir = '';
        }
        else {
            if (this.validate) {
                this.errTglLahir = 'Data Tanggal Lahir tidak sesuai';
            }
        }
    };
    RegisterPage.prototype.openModal = function (clientId, nama) {
        var _this = this;
        var modal = this.mdlCtrl.create(ShowModal, { clientId: clientId, nama: nama }, { enableBackdropDismiss: false });
        modal.present();
        modal.onDidDismiss(function (res) {
            if (res) {
                _this.navCtrl.popTo('HomePage');
            }
        });
        if (this.platform.is('android') && !this.platform.is('mobileweb')) {
            this.navCtrl.popTo('HomePage');
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="light" text-center>\n    <img src="assets/imgs/logo-front.png">\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n        <ion-col class="sideCol"></ion-col>\n        <ion-col class="mainCol">\n\n          <ion-card>\n            <ion-item text-center color="primary">\n              <h1 ion-text color="light">REGISTRASI</h1>    \n            </ion-item>\n            <form [formGroup]="formValid" (ngSubmit)="doValidasi()">\n              <ion-item>\n                <ion-label floating>Kode Nasabah <a ion-text text-small class="kecil">(4 digit)</a></ion-label>\n                <ion-input type="text" formControlName="clientId" class="chg"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="!errClientId == \'\'">\n                  <ion-label class="error"><span ion-text color="danger" class="kecil">{{errClientId}}</span></ion-label>          \n              </ion-item>\n              <ion-item>\n                <ion-label floating>Nomor Induk Pegawai</ion-label>\n                <ion-input type="text" formControlName="nik" (input)="checkInput()" class="chg"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="!errNik == \'\'">\n                  <ion-label class="error"><span ion-text color="danger" class="kecil" >{{errNik}}</span></ion-label>          \n              </ion-item>\n              <ion-item>\n                <ion-label floating>Nomor Identitas <a ion-text text-small class="kecil">(KTP)</a></ion-label>\n                <ion-input type="text" formControlName="ktp" (input)="checkInput()" class="chg"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="!errKtp == \'\'">\n                  <ion-label class="error"><span ion-text color="danger" class="kecil">{{errKtp}}</span></ion-label>          \n              </ion-item>\n              <ion-item>\n                <ion-label floating>Tanggal Lahir <a ion-text text-small class="kecil">(ddmmyyyy)</a></ion-label>\n                <ion-input type="text" formControlName="tglLahir" (input)="checkInput()" class="chg"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="!errTglLahir == \'\'">\n                  <ion-label class="error"><span ion-text color="danger" class="kecil">{{errTglLahir}}</span></ion-label>          \n              </ion-item>\n              <ion-item>\n                <a ion-button outline round float-left (click)="goBack()">Batal</a>\n                <button ion-button round float-right [disabled]="!formValid.valid">Lanjut</button>\n              </ion-item>\n            </form>\n          </ion-card>\n\n        </ion-col>\n        <ion-col class="sideCol"></ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//==================================================================================================================================================
//   MODAL
//==================================================================================================================================================
var ShowModal = (function () {
    function ShowModal(render, viewCtdl, params, tool, lgn, platform) {
        this.render = render;
        this.viewCtdl = viewCtdl;
        this.params = params;
        this.tool = tool;
        this.lgn = lgn;
        this.platform = platform;
        this.disclaim = false;
        this.clientId = '';
        this.pass = '';
        this.conf = '';
        this.nama = '';
        this.color = '';
        this.strength = '';
        this.strong = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");
        this.medium = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{5,})");
        this.weak = new RegExp("^((?=.*[0-9])|(?=.*[a-zA-Z]))(?=.{1,})");
        this.render.setElementClass(viewCtdl.pageRef().nativeElement, 'my-popup', true);
        this.clientId = params.get('clientId');
        this.nama = params.get('nama');
        console.log(this.conf);
    }
    ShowModal.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.tool.getStg('ip').then(function (data) {
                if (data) {
                    _this.ipAdr = data.ip;
                    // console.log('IP addr',this.ipAdr);
                }
            });
            _this.tool.showRegisInfo();
        });
    };
    ShowModal.prototype.daftar = function () {
        var _this = this;
        this.tool.showLoading();
        this.tool.getStg('net').then(function (data) {
            if (data.conn != "offline") {
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
    ShowModal.prototype.simpan = function () {
        var _this = this;
        this.lgn.createLogin(this.clientId, this.pass, this.nama).subscribe(function (data) {
            _this.tool.stopLoading();
            if (data.result == '1') {
                _this.lgn.logger(_this.clientId, 'Berhasil Mendaftar', _this.ipAdr).subscribe();
                _this.tool.showAlert('Berhasil', data.message);
                _this.dismiss(true);
            }
            else {
                _this.lgn.logger(_this.clientId, 'Mencoba mendaftar tapi data sudah ada', _this.ipAdr).subscribe();
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
    ShowModal.prototype.ubah = function () {
        var _this = this;
        this.lgn.updateLogin(this.clientId, this.pass, this.nama).subscribe(function (data) {
            _this.tool.stopLoading();
            if (data.result == '1') {
                _this.lgn.logger(_this.clientId, 'Berhasil ubah data', _this.ipAdr).subscribe();
                _this.tool.showAlert('Berhasil', data.message);
                _this.dismiss(true);
            }
            else {
                _this.tool.showAlert('Gagal', data.message);
            }
        }, function (error) {
            console.log('Register->ubah()', error);
        });
    };
    ShowModal.prototype.policy = function () {
        var _this = this;
        if (this.disclaim) {
            var dsc = this.lgn.showSK();
            dsc.present();
            dsc.onDidDismiss(function (res) {
                _this.disclaim = res;
                if (res) {
                    _this.lgn.logger(_this.clientId, 'Setuju Disclaimer', _this.ipAdr).subscribe();
                }
                else {
                    _this.lgn.logger(_this.clientId, 'Tidak Setuju Disclaimer', _this.ipAdr).subscribe();
                }
            });
        }
    };
    ShowModal.prototype.showSK = function () {
        var dsc = this.lgn.showSK();
        dsc.present();
    };
    ShowModal.prototype.showDC = function () {
        var dsc = this.lgn.showDisclaimer();
        dsc.present();
    };
    ShowModal.prototype.info = function () {
        this.tool.showRegisInfo();
    };
    ShowModal.prototype.passInput = function (input) {
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
    ShowModal.prototype.dismiss = function (ret) {
        this.viewCtdl.dismiss(ret);
    };
    ShowModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\pages\register\modal.html"*/'<ion-header>\n\n    <ion-navbar text-center color="primary">\n\n        <ion-title>Registrasi Password</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content no-bounce>\n\n    <form>\n\n        <ion-item>\n\n            <ion-label floating>Kode Nasabah</ion-label>\n\n            <ion-input type="text" [(ngModel)]="clientId" [ngModelOptions]="{standalone:true}" disabled class="block"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Password  <ion-badge *ngIf="strength.length>0" item-end class="kecil" [color]="color">{{strength}}</ion-badge></ion-label>\n\n            <ion-input type="password" [(ngModel)]="pass" [ngModelOptions]="{standalone:true}" (ngModelChange)="passInput($event)" class="chg"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Konfirmasi Password <ion-badge *ngIf="conf==pass && (conf.length>7)" color="secondary"><ion-icon name="checkmark"></ion-icon></ion-badge><ion-badge *ngIf="(conf!=pass) && (conf.length>7)" color="danger"><ion-icon name="close"></ion-icon></ion-badge></ion-label>\n\n            <ion-input type="password" [(ngModel)]="conf" [ngModelOptions]="{standalone:true}" class="chg"></ion-input>\n\n        </ion-item>\n\n    </form>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-item no-lines >\n\n        <ion-label ><span ion-text class="kecil">Saya menyetujui S&K, dan Disclaimer</span></ion-label>\n\n        <ion-checkbox color="secondary" [(ngModel)]="disclaim" class="no-padding"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-row class="info">\n\n        <ion-col col-6>\n\n            <a ion-button float-start outline round small icon-start (click)="showSK()" color="secondary"><ion-icon name="eye"></ion-icon>S&K</a>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <a ion-button float-right outline round small icon-start (click)="showDC()" color="secondary"><ion-icon name="eye"></ion-icon>Disclaimer</a>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-item no-lines>\n\n        <a ion-button outline round float-left (click)="dismiss(false)">Batal</a>\n\n        <button ion-button round float-right [disabled]="!(disclaim && (strength==\'kuat\') && (conf==pass))" (click)="daftar()">Daftar</button>\n\n        <a ion-button outline round color="secondary" float-end (click)="info()"><ion-icon name="help"></ion-icon></a>\n\n    </ion-item>\n\n</ion-footer>'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\pages\register\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], ShowModal);
    return ShowModal;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_market_market__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dscm_dscm__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_minimize__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_version__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dscl_dscl__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_sdkt_sdkt__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["b" /* ShowModal */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dscm_dscm__["a" /* DscmPage */],
                __WEBPACK_IMPORTED_MODULE_17__components_dscl_dscl__["a" /* DsclComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_sdkt_sdkt__["a" /* SdktComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: "md" }, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-user/create-user.module#CreateUserPageModule', name: 'CreateUserPage', segment: 'create-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#LoginPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/keterangan/keterangan.module#KeteranganPageModule', name: 'KeteranganPage', segment: 'keterangan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/syarat/syarat.module#SyaratPageModule', name: 'SyaratPage', segment: 'syarat', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["b" /* ShowModal */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dscm_dscm__["a" /* DscmPage */],
                __WEBPACK_IMPORTED_MODULE_17__components_dscl_dscl__["a" /* DsclComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_sdkt_sdkt__["a" /* SdktComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_tools_tools__["a" /* ToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_market_market__["a" /* MarketProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_version__["a" /* AppVersion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_minimize__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, net, ev, tool, appMinimize, lgn, ver) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.net = net;
        this.ev = ev;
        this.tool = tool;
        this.appMinimize = appMinimize;
        this.lgn = lgn;
        this.ver = ver;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        this.tool.setStg('net', { conn: null });
    }
    MyApp.prototype.setPage = function (user) {
        if (user) {
            this.clientId = user.clientId;
            this.nama = user.nama;
            if (user.level === '1') {
                if (user.clientId === 'Admin') {
                    this.pages = [
                        { title: 'Penjualan BBCA', component: 'AdminPage', icon: 'cart' },
                        { title: 'Buat User', component: 'CreateUserPage', icon: 'people' }
                    ];
                }
                else {
                    this.pages = [
                        { title: 'Penjualan BBCA', component: 'AdminPage', icon: 'cart' }
                    ];
                }
            }
            else {
                this.pages = [
                    { title: 'Formulir Penjualan', component: 'HomePage', icon: 'cart' },
                    { title: 'Histori Pengiriman Formulir', component: 'HistoryPage', icon: 'list-box' },
                    { title: 'Syarat dan Ketentuan', component: 'SyaratPage', icon: 'information-circle' },
                    { title: 'Disclaimer', component: 'KeteranganPage', icon: 'information-circle' }
                ];
            }
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.platform.registerBackButtonAction(function () {
                _this.appMinimize.minimize();
            });
            _this.ev.subscribe('user', function (user) {
                _this.setPage(user);
            });
            _this.tool.getStg('login').then(function (data) {
                _this.setPage(data);
            }, function (error) {
                console.log('getStgLogin', error);
            });
            _this.checkUpdate();
            _this.getIp();
            _this.subscribeNetwork();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.checkUpdate = function () {
        var _this = this;
        if (this.platform.is("android") && !this.platform.is('mobileweb')) {
            this.ver.getVersionNumber().then(function (data) {
                _this.version = data;
                _this.lgn.getData('version', '123').subscribe(function (data) {
                    if (_this.version < data.nama) {
                        var conf = _this.tool.showConfirm('Versi terbaru untuk aplikasi ini telah tersedia <br><br>Versi saat ini:' + _this.version + ' <br>Versi Terbaru:' + data.nama, 'Pembaruan', 'Lewati', 'Unduh');
                        conf.present();
                        conf.onDidDismiss(function (res) {
                            if (res) {
                                window.open('https://play.google.com/store/apps/details?id=bcas.it5.formbbca');
                            }
                        });
                    }
                });
            });
        }
    };
    MyApp.prototype.subscribeNetwork = function () {
        var _this = this;
        this.net.onConnect().subscribe(function (data) {
            _this.tool.setStg('net', { conn: data.type });
            //this.tool.showToast('koneksi internet anda saat ini: '+data.type);      
        }, function (error) { return console.error(error); });
        this.net.onDisconnect().subscribe(function (data) {
            _this.tool.setStg('net', { conn: data.type });
            _this.tool.showToast('koneksi internet anda saat ini: ' + data.type);
        }, function (error) { return console.error(error); });
    };
    MyApp.prototype.getIp = function () {
        var _this = this;
        this.lgn.getIp().subscribe(function (data) {
            // console.log('get ip',data);
            var res;
            res = data;
            _this.ipAdr = res.ip;
            _this.tool.setStg('ip', data).then();
        }, function (err) {
            console.log('error', err);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.lgn.logger(this.clientId, 'Berhasil Logout', this.ipAdr).subscribe();
        this.tool.clearStg();
        this.lgn.getIp().subscribe(function (data) {
            // console.log('get ip',data);
            var res;
            res = data;
            _this.ipAdr = res.ip;
            _this.tool.setStg('ip', data).then(function () {
                _this.nav.setRoot('LoginPage');
            });
        }, function (err) {
            console.log('error', err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\RSRCH\BESTFormBBCA\src\app\app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar text-left >\n        <ion-title ion-text >{{nama}} ({{clientId}})</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon>\n            {{p.title}}\n        </button>\n        <button menuClose ion-item (click)="logout()">\n          <ion-icon name="power"></ion-icon>\n            Logout</button>\n      </ion-list>\n    </ion-content>\n    <ion-footer padding showWhen="android">\n      Versi {{version}}\n    </ion-footer>\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"D:\RSRCH\BESTFormBBCA\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__["a" /* AppVersion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dscm_dscm__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolsProvider = (function () {
    function ToolsProvider(loadCtrl, alrt, stg, nStg, platform, toastCtrl, mdlCtrl) {
        this.loadCtrl = loadCtrl;
        this.alrt = alrt;
        this.stg = stg;
        this.nStg = nStg;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.mdlCtrl = mdlCtrl;
    }
    ToolsProvider.prototype.showLoading = function () {
        this.loading = this.loadCtrl.create({
            spinner: 'ios',
            content: 'Mohon Tunggu ...',
            cssClass: 'csload'
        });
        this.loading.present();
    };
    ToolsProvider.prototype.stopLoading = function () {
        this.loading.dismiss();
    };
    ToolsProvider.prototype.showAlert = function (judul, pesan) {
        var alert = this.alrt.create({
            title: '<center>' + judul + '</center>',
            message: '<center>' + pesan + '</center>',
            buttons: ['Ok']
        });
        alert.present();
    };
    ToolsProvider.prototype.setAlert = function (judul, pesan) {
        var alert = this.alrt.create({
            title: '<center>' + judul + '</center>',
            message: '<center>' + pesan + '</center>',
            buttons: [{
                    text: 'ok',
                    handler: function () {
                        alert.dismiss(true);
                        return false;
                    }
                }]
        });
        return alert;
    };
    ToolsProvider.prototype.showConfirm = function (msg, title, cc, ok) {
        var alert = this.alrt.create({
            title: title,
            message: msg,
            buttons: [{
                    text: cc,
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss(false);
                        return false;
                    }
                }, {
                    text: ok,
                    handler: function () {
                        alert.dismiss(true);
                        return false;
                    }
                }]
        });
        return alert;
    };
    ToolsProvider.prototype.showRegisInfo = function () {
        var alert = this.alrt.create({
            title: 'Info',
            message: "<ul><li>Isikan Password minimum 8 karakter (alphanumeric)</li><li>Password dan Konfirmasi Password harus sama</li><li>Apabila lupa Password mohon melakukan registrasi ulang</li></ul>",
            buttons: ['OK']
        });
        alert.present();
    };
    ToolsProvider.prototype.showToast = function (pesan) {
        var toast = this.toastCtrl.create({
            message: pesan,
            position: 'middle',
            duration: 1500,
            cssClass: 'toastPunya',
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    ToolsProvider.prototype.getPlatform = function () {
        var res;
        if (this.platform.is('android') && !this.platform.is('mobileweb')) {
            res = "1";
        }
        else if (this.platform.is('core') || this.platform.is('mobile') || this.platform.is('mobileweb')) {
            res = "2";
        }
        return res;
    };
    ToolsProvider.prototype.getStg = function (val) {
        if (this.getPlatform() === "1") {
            return this.nStg.getItem(val);
        }
        else if (this.getPlatform() === "2") {
            return this.stg.get(val);
        }
    };
    ToolsProvider.prototype.setStg = function (id, val) {
        if (this.getPlatform() === "1") {
            return this.nStg.setItem(id, val);
        }
        else if (this.getPlatform() === "2") {
            return this.stg.set(id, val);
        }
    };
    ToolsProvider.prototype.clearStg = function () {
        this.nStg.clear();
        this.stg.clear();
        this.stg.set('login', null);
        this.stg.set('sdkt', null);
    };
    ToolsProvider.prototype.showModal = function () {
        var modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_dscm_dscm__["a" /* DscmPage */], {}, { enableBackdropDismiss: false });
        return modal;
    };
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketProvider = (function () {
    // private apiUrl = 'https://kangpanci.com/api';
    function MarketProvider(http) {
        this.http = http;
        // private apiUrl = 'http://localhost/api';
        this.apiUrl = 'https://eformbbca.bcasekuritas.co.id/api';
    }
    MarketProvider.prototype._getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'x-www-form-urlencoded');
        return headers;
    };
    MarketProvider.prototype.jual = function (id, jml, hrg) {
        var headers = this._getHeaders();
        var data = {
            clientId: id,
            jumlah: jml,
            harga: hrg,
            tglJual: '20180101',
            status: 'sent',
        };
        return this.http.post(this.apiUrl + "/jual/create.php", data, { headers: headers }).map(function (res) { return (res.json()); });
    };
    MarketProvider.prototype.getBBCA = function () {
        return this.http.get(this.apiUrl + "/stock/read_one.php?kode=BBCA")
            .map(function (res) { return (res.json()); });
    };
    MarketProvider.prototype.getData = function (clientId) {
        return this.http.get(this.apiUrl + "/jual/read.php?clientId=" + clientId)
            .map(function (res) { return res.json(); });
    };
    MarketProvider.prototype.getAdminData = function (tglSrc) {
        return this.http.get(this.apiUrl + "/jual/admin.php?tglJual=" + tglSrc)
            .map(function (res) { return res.json().records; });
    };
    MarketProvider.prototype.getOddLot = function (tglSrc) {
        this.http.get(this.apiUrl + "/jual/oddlot.php?tglJual=" + tglSrc).subscribe(function (data) {
            window.open(data.url);
        });
    };
    MarketProvider.prototype.getFixLot = function (tglSrc) {
        this.http.get(this.apiUrl + "/jual/fixlot.php?tglJual=" + tglSrc).subscribe(function (data) {
            window.open(data.url);
        });
    };
    MarketProvider.prototype.getDisclalimWeb = function () {
        return this.http.get(this.apiUrl + "/disclaimer/read.php")
            .map(function (res) { return res.json().records; });
    };
    MarketProvider.prototype.getAturanWeb = function () {
        return this.http.get(this.apiUrl + "/rule/read.php")
            .map(function (res) { return res.json().records; });
    };
    MarketProvider.prototype.getKeterangan = function () {
        return this.http.get(this.apiUrl + "/keterangan/read.php")
            .map(function (res) { return res.json().records; });
    };
    MarketProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MarketProvider);
    return MarketProvider;
}());

//# sourceMappingURL=market.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_tools__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dscl_dscl__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sdkt_sdkt__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginProvider = (function () {
    //private apiUrl = 'https://kangpanci.com/api';
    function LoginProvider(tool, http, mdlCtrl) {
        this.tool = tool;
        this.http = http;
        this.mdlCtrl = mdlCtrl;
        // private apiUrl = 'http://localhost/api';
        // private ipurl = 'http://freegeoip.net/json/';
        this.ipurl = 'https://freegeoip.net/json/';
        this.apiUrl = 'https://eformbbca.bcasekuritas.co.id/api';
    }
    LoginProvider.prototype._getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'x-www-form-urlencoded');
        return headers;
    };
    LoginProvider.prototype.getData = function (clientId, password) {
        var headers = this._getHeaders();
        var data = {
            clientId: clientId,
            password: password
        };
        return this.http.post(this.apiUrl + "/login/read_one.php", data, { headers: headers })
            .map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.getValidasi = function (clientId) {
        return this.http.get(this.apiUrl + "/validasi/read_one.php?clientId=" + clientId)
            .map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.getIp = function () {
        // console.log('req ip');
        return this.http.get("" + this.ipurl)
            .map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.createLogin = function (cId, pass, nama) {
        var headers = this._getHeaders();
        return this.http.post(this.apiUrl + "/login/create.php", {
            clientId: cId,
            password: pass,
            nama: nama,
            level: '0'
        }, { headers: headers }).map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.createAdmin = function (cId, pass, nama) {
        var headers = this._getHeaders();
        return this.http.post(this.apiUrl + "/login/create.php", {
            clientId: cId,
            password: pass,
            nama: nama,
            level: '1'
        }, { headers: headers }).map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.updateLogin = function (cId, pass, nama) {
        var headers = this._getHeaders();
        var data = {
            clientId: cId,
            password: pass,
            nama: nama,
            level: '0'
        };
        var url = this.apiUrl + "/login/update.php";
        return this.http.post(url, data, { headers: headers }).map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.updateAdmin = function (cId, pass, nama) {
        var headers = this._getHeaders();
        var data = {
            clientId: cId,
            password: pass,
            nama: nama,
            level: '1'
        };
        var url = this.apiUrl + "/login/update.php";
        return this.http.post(url, data, { headers: headers }).map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.logger = function (user, log, ip) {
        if (!ip)
            ip = '12345678';
        var headers = this._getHeaders();
        return this.http.post(this.apiUrl + "/logger/create.php", {
            user: user,
            log: log,
            ip: ip
        }, { headers: headers }).map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.getHoliday = function (tgl) {
        // console.log('getHoliday: ',tgl);
        return this.http.get(this.apiUrl + "/holiday/read_one.php?tanggal=" + tgl)
            .map(function (res) { return (res.json()); });
    };
    LoginProvider.prototype.showDisclaimer = function () {
        var modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_dscl_dscl__["a" /* DsclComponent */], {}, { enableBackdropDismiss: false });
        return modal;
    };
    LoginProvider.prototype.showSK = function () {
        var modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_sdkt_sdkt__["a" /* SdktComponent */], {}, { enableBackdropDismiss: false });
        return modal;
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__tools_tools__["a" /* ToolsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tools_tools__["a" /* ToolsProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */]) === "function" && _c || Object])
    ], LoginProvider);
    return LoginProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map