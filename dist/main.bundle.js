webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_admin_guard__ = __webpack_require__("../../../../../src/app/core/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__core_admin_guard__["a" /* AdminGuard */]]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_5__core_admin_guard__["a" /* AdminGuard */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n    <div id=\"wrapper\">\n      <app-header></app-header>\n      <br>\n      <div id=\"content\" class=\"container\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  ",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_misc_loading_component__ = __webpack_require__("../../../../../src/app/core/misc/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_places_places_component__ = __webpack_require__("../../../../../src/app/pages/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_misc_search_filter_pipe__ = __webpack_require__("../../../../../src/app/core/misc/search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_misc_type_filter_pipe__ = __webpack_require__("../../../../../src/app/core/misc/type-filter.pipe.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_12__core_misc_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_places_places_component__["a" /* PlacesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__core_misc_search_filter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_17__core_misc_type_filter_pipe__["a" /* TypeFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__core_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__core_api_service__["a" /* ApiService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isAdmin && this.auth.validToken) {
            return true;
        }
        return false;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/core/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("../../../../../src/app/core/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
    }
    Object.defineProperty(ApiService.prototype, "authHeader", {
        get: function () {
            return "Bearer " + (localStorage.getItem('access_token') || '');
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.handleError = function (err) {
        var errorMsg = err.error ? err.error.message : 'Unabled to complete request';
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(errorMsg);
    };
    ApiService.prototype.getPlaces$ = function (location) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* base_url */] + '/api/search/' + location, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authHeader)
        })
            .catch(this.handleError);
    };
    ApiService.prototype.optIn$ = function (barName) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* base_url */] + '/api/add/' + barName, {}, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authHeader)
        })
            .catch(this.handleError);
    };
    ApiService.prototype.optOut$ = function (barName) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* base_url */] + '/api/remove/' + barName, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authHeader)
        })
            .catch(this.handleError);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.validToken) {
            return true;
        }
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__("../../../../../src/app/core/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Used https://auth0.com/blog/real-world-angular-series-part-1/ as a reference








var AuthService = (function () {
    function AuthService(router, route, location, http) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.location = location;
        this.http = http;
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.loggedIn);
        var previous = localStorage.getItem('previousPath'); // || '/'
        localStorage.removeItem('previousPath');
        if (previous !== null && this.location.path() !== '/error') {
            this.postTwitterLogin$()
                .subscribe(function (res) {
                _this.loading = false;
                _this.storeUserInfo(res);
                _this.router.navigateByUrl(previous);
            }, function (err) {
                _this.loading = false;
            });
        }
        else {
            if (this.validToken) {
                this.setLoggedIn(true);
            }
            else {
                this.removeUserInfo();
                this.router.navigateByUrl('/');
            }
        }
    }
    Object.defineProperty(AuthService.prototype, "authHeader", {
        get: function () {
            return "Bearer " + (localStorage.getItem('access_token') || '');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.handleError = function (err) {
        var errorMsg = err.error ? err.error.message : 'Unabled to complete request';
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(errorMsg);
    };
    AuthService.prototype.postTwitterLogin$ = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_7__config__["a" /* base_url */] + '/auth/get-user', { withCredentials: true })
            .catch(this.handleError);
    };
    AuthService.prototype.twitterLogin = function () {
        this.setCurrentPath();
        // TODO: Is there a way to do this with angular?
        window.location.href = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* base_url */] + '/auth/twitter';
    };
    AuthService.prototype.logout = function () {
        this.removeUserInfo();
        // this.router.navigateByUrl('/')
        window.location.reload();
    };
    AuthService.prototype.storeUserInfo = function (user) {
        localStorage.setItem('access_token', user.token);
        localStorage.setItem('exp', JSON.stringify(user.exp * 1000));
        localStorage.setItem('_id', user._id);
        localStorage.setItem('username', user.username);
        localStorage.setItem('role', user.role);
        var twitter = JSON.parse(user.twitter);
        localStorage.setItem('twitter_id', twitter.id || '');
        this.setLoggedIn(true);
    };
    AuthService.prototype.redirectTo = function (redirect) {
        var redirectTo = redirect ? redirect : '/';
        if (redirectTo.indexOf('http:') > -1) {
            window.location.href = redirectTo;
        }
        this.router.navigateByUrl(redirectTo);
    };
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    AuthService.prototype.removeUserInfo = function (redirect) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('exp');
        localStorage.removeItem('_id');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('twitter_id');
        this.setLoggedIn(false);
    };
    AuthService.prototype.setCurrentPath = function () {
        var previousPath = this.location.path();
        localStorage.setItem('previousPath', previousPath);
    };
    Object.defineProperty(AuthService.prototype, "validToken", {
        get: function () {
            var expiration = JSON.parse(localStorage.getItem('exp'));
            return Date.now() < expiration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAdmin", {
        // TODO: Just assign to a variable instead?
        get: function () {
            return localStorage.getItem('role') === 'admin';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user_id", {
        get: function () {
            return localStorage.getItem('_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "username", {
        get: function () {
            return localStorage.getItem('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "twitter_id", {
        get: function () {
            return localStorage.getItem('twitter_id');
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base_url; });
var base_url = window.location.hostname !== 'localhost' ? window.location.origin : 'http://localhost:8080';


/***/ }),

/***/ "../../../../../src/app/core/misc/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: "\n      <img src=\"/assets/loading.svg\">\n  ",
            styles: ["\n  img {\n    margin: -20px auto;\n    width: 50px;\n  }\n  "]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/misc/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (places, filter) {
        return places.filter(function (place) { return place['name'].toLowerCase().indexOf(filter.toLowerCase()) > -1; });
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'searchFilter'
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/misc/type-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypeFilterPipe = (function () {
    function TypeFilterPipe() {
    }
    TypeFilterPipe.prototype.transform = function (places, filter) {
        filter = filter ? filter.toLowerCase() : undefined;
        // ['Name', 'Rating', 'People', 'Going']\
        var sorted = JSON.parse(JSON.stringify(places));
        switch (filter) {
            case 'name':
                return sorted.sort(function (a, b) { return a[filter] < b[filter] ? -1 : 1; });
            case 'rating':
                return sorted.sort(function (a, b) { return b[filter] - a[filter]; });
            case 'people':
                return sorted.sort(function (a, b) { return a[filter] - b[filter]; });
            case 'going':
                return sorted.filter(function (place) { return place[filter]; });
            default:
                return sorted;
        }
    };
    TypeFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'typeFilter'
        })
    ], TypeFilterPipe);
    return TypeFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: "\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p><small>\n        <a href=\"https://www.freecodecamp.com/challenges/build-a-nightlife-coordination-app\" target=\"_blank\">FCC Night Life App</a> | \n        <a href=\"https://github.com/mtharmen/night-life-app\" target=\"_blank\">GitHub Repo <i class=\"fa fa-github\" aria-hidden=\"true\"></i></a> | \n        <a href=\"http://fontawesome.io/\" target=\"_blank\">Font Awesome <i class=\"fa fa-font-awesome\" aria-hidden=\"true\"></i></a> | \n        <a href=\"https://www.yelp.com/\" target=\"_blank\">Search Results from Yelp <i class=\"fa fa-yelp\" aria-hidden=\"true\"></i></a>\n      </small></p>\n    </div>\n  </footer>\n  ",
            styles: ["\n    .footer {\n       text-align: center;\n    }\n  "]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-end\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" routerLink=\"/\">Night Life App</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\" [ngbCollapse]=\"isCollapsed\">\r\n        <app-loading *ngIf=\"this.auth.loading\"></app-loading>\r\n        <div class=\"navbar-nav ml-auto\" *ngIf=\"!this.auth.loading\">\r\n          <a class=\"nav-item nav-link\" *ngIf=\"auth.isAdmin\" routerLink=\"/admin\">Admin</a>\r\n          <a class=\"nav-item nav-link\" *ngIf=\"!auth.loggedIn\" (click)=\"open()\">\r\n            <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login with Twitter\r\n          </a>\r\n          <a class=\"nav-item nav-link\" *ngIf=\"auth.loggedIn\" (click)=\"logout()\">\r\n            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.open = function () {
        this.auth.twitterLogin();
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin Page</h1>\r\n\r\n<p>Admin Stuff</p>"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/pages/admin/admin.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Search\r\n           Filtering Options -->\r\n\r\n<form class=\"input-group\">\r\n  <input class=\"form-control\" name=\"input\" type=\"text\" placeholder=\"{{location}}\" [(ngModel)]=\"search.value\" #value=\"ngModel\" required/>\r\n  <span class=\"input-group-btn\">\r\n    <button class=\"btn btn-secondary\" type=\"submit\" [disabled]=\"!search.value\" (click)=\"submit(search.value)\">Search</button>\r\n  </span>\r\n</form>\r\n\r\n<br>\r\n\r\n<h2 *ngIf=\"location\">Results For: {{location}}</h2>\r\n<app-loading *ngIf=\"loading\"></app-loading>\r\n<div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n<app-places *ngIf=\"places && !error\" [places]=\"places\"></app-places>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.search = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var clear = JSON.parse(localStorage.getItem('clearLocation'));
        if (clear < Date.now()) {
            localStorage.removeItem('clearLocation');
            localStorage.removeItem('pastLocation');
        }
        this.location = localStorage.getItem('pastLocation') || '';
        this.logSub = this.auth.loggedIn$.subscribe(function (res) {
            // Page is loaded, but login status is uncertain
            if (res === undefined || (!res && _this.places)) {
                return;
            }
            if (_this.location) {
                _this.getPlaces();
            }
        });
    };
    HomeComponent.prototype.getPlaces = function () {
        var _this = this;
        this.loading = true;
        this.error = '';
        this.placeSub = this.api
            .getPlaces$(this.location)
            .subscribe(function (res) {
            _this.loading = false;
            _this.places = res.bars;
            _this.location = res.location;
        }, function (err) {
            _this.loading = false;
            console.error(err);
            _this.error = 'Error';
        });
    };
    HomeComponent.prototype.submit = function (location) {
        this.location = location;
        localStorage.setItem('pastLocation', location);
        var expire = Date.now() + 1000 * 60 * 60 * 24;
        localStorage.setItem('clearLocation', expire.toString());
        this.getPlaces();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.placeSub.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/places/places.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"input-group col\">\r\n    <span class=\"input-group-addon\">Filter</span>\r\n    <input class=\"form-control\" name=\"input\" type=\"text\" [(ngModel)]=\"filters.name\" #name=\"ngModel\" required/>\r\n    <div class=\"input-group-btn\" role=\"group\"> \r\n        <ng-container *ngFor=\"let type of filters.type\">\r\n          <button type=\"button\" class=\"btn\" [ngClass]=\"active === type ? 'btn-primary' : 'btn-outline-primary'\" (click)=\"sort(type)\">{{type}}</button>\r\n        </ng-container>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngFor=\"let place of places | searchFilter:filters.name | typeFilter:active\">\r\n  <div class=\"card mt-3\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <h2 class=\"col-7\">{{ place.name }}</h2>\r\n        <div class=\"col-5 mr-auto text-right\">\r\n          <span *ngFor=\"let star of place.stars; let i = index\"><i class=\"{{star}} fa-2x\" aria-hidden=\"true\"></i></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-5\">\r\n          <img class=\"img-thumbnail\" src=\"{{place.image || './../../../assets/noimg.png'}}\">\r\n        </div>\r\n        <div class=\"col-7 text-right\">\r\n          <span *ngFor=\"let line of place.address\">\r\n            {{ line }}<br>\r\n          </span>\r\n          <p>{{ place.phone.substr(3) }}</p>\r\n        </div>\r\n        <hr>\r\n        <p class=\"col\"><a href=\"{{ place.yelpUrl }}\" target=\"_blank\">{{ place.snippet }}</a></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <h4>{{ place.people }} Going\r\n        <button *ngIf=\"!auth.loggedIn\" class=\"btn btn-info float-right\" disabled>Log In to Opt In</button>\r\n        <button *ngIf=\"auth.loggedIn\" class=\"btn float-right\" [ngClass]=\"place.going ? 'btn-danger' : 'btn-success'\" (click)=\"opting(place)\" [disabled]=\"!auth.loggedIn\">\r\n            {{ place.going ? \"I'm Out\" : \"I'm In\" }}\r\n        </button>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<h4 class=\"text-center\" *ngIf=\"!(places | searchFilter:filters.name | typeFilter:active).length\">\r\n    No matches\r\n</h4>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/places/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("../../../../../src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacesComponent = (function () {
    function PlacesComponent(api, auth) {
        this.api = api;
        this.auth = auth;
        this.filters = {
            type: ['Name', 'Rating', 'People', 'Going'],
            name: ''
        };
    }
    PlacesComponent.prototype.opting = function (place) {
        var _this = this;
        var type = place.going ? 'optOut$' : 'optIn$';
        this.optSub = this.api[type](place.name)
            .subscribe(function (res) {
            _this.updatePlaces(place.name, !place.going);
            place.people += place.going ? -1 : 1;
            place.going = !place.going;
        }, function (err) {
            console.error(err);
        });
    };
    PlacesComponent.prototype.updatePlaces = function (name, going) {
        // TODO: figure out how to retrigger the pipes rather than updating the filtered list and the original list
        var i = this.places.findIndex(function (place) { return place.name === name; });
        this.places[i].people += !going ? -1 : 1;
        this.places[i].going = going;
    };
    // TODO: Test this vs Pipe
    PlacesComponent.prototype.sort = function (filter) {
        if (this.active !== filter) {
            this.active = filter;
        }
    };
    PlacesComponent.prototype.ngOnDestroy = function () {
        if (this.optSub) {
            this.optSub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], PlacesComponent.prototype, "places", void 0);
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-places',
            template: __webpack_require__("../../../../../src/app/pages/places/places.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map