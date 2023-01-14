"use strict";
(self["webpackChunksciaku_courses"] = self["webpackChunksciaku_courses"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_client_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/client.guard */ 9649);
/* harmony import */ var _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/client/about/about.component */ 2838);
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/client/client.component */ 6304);
/* harmony import */ var _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/client/contact/contact.component */ 1433);
/* harmony import */ var _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client/courses/course-details/course-details.component */ 9857);
/* harmony import */ var _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/client/courses/course-lecture/course-lecture.component */ 556);
/* harmony import */ var _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/client/courses/courses.component */ 1511);
/* harmony import */ var _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client/error/error.component */ 8846);
/* harmony import */ var _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/client/login/login.component */ 4021);
/* harmony import */ var _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/client/signup/signup.component */ 9846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [{
  path: '',
  component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent,
  pathMatch: 'full'
}, {
  path: 'home',
  component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent
}, {
  path: 'courses',
  component: _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_6__.CoursesComponent
}, {
  path: 'login',
  component: _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent
}, {
  path: 'signup',
  component: _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__.SignupComponent
}, {
  path: 'about',
  component: _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'contact',
  component: _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: 'course-details/:title/:cid',
  component: _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_4__.CourseDetailsComponent
}, {
  path: 'course-lectures/:title/:cid/:id',
  component: _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_5__.CourseLectureComponent,
  canActivate: [_auth_client_guard__WEBPACK_IMPORTED_MODULE_0__.ClientGuard]
}, {
  path: '**',
  component: _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_7__.ErrorComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _master_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master/navbar/navbar.component */ 4068);
/* harmony import */ var _master_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master/footer/footer.component */ 12);






class AppComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.title = 'sciaku-courses';
    this.token = '';
  }
  ngOnInit() {
    // this._title.setTitle(this.title);
    // this._meta.updateTag({name:'keywords',content:'Angular Blog,Blogger'});
    // this._meta.updateTag({name:'description',content:'Angular Blog,Blogger'});
  }
  onActivate(event) {
    // window.scroll(0,0);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _master_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _master_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _master_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master/footer/footer.component */ 12);
/* harmony import */ var _master_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master/navbar/navbar.component */ 4068);
/* harmony import */ var _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client/about/about.component */ 2838);
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/client/client.component */ 6304);
/* harmony import */ var _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/client/contact/contact.component */ 1433);
/* harmony import */ var _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client/courses/course-details/course-details.component */ 9857);
/* harmony import */ var _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/client/courses/course-lecture/course-lecture.component */ 556);
/* harmony import */ var _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/client/courses/courses.component */ 1511);
/* harmony import */ var _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/client/error/error.component */ 8846);
/* harmony import */ var _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/client/login/login.component */ 4021);
/* harmony import */ var _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/client/signup/signup.component */ 9846);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/youtube-player */ 2163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.interceptor */ 4730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__.authInterceptorProviders],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_19__.YouTubePlayerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _master_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _master_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pages_client_client_component__WEBPACK_IMPORTED_MODULE_5__.ClientComponent, _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__.CoursesComponent, _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__.CourseDetailsComponent, _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_8__.CourseLectureComponent, _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent, _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__.SignupComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_19__.YouTubePlayerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
})();

/***/ }),

/***/ 9649:
/*!**************************************!*\
  !*** ./src/app/auth/client.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientGuard": () => (/* binding */ ClientGuard)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class ClientGuard {
  constructor(login, router, platformId) {
    this.login = login;
    this.router = router;
    this.platformId = platformId;
  }
  canActivate(route, state) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (this.login.isLoggedIn() && this.login.getUserRole() == 'NORMAL') {
        return true;
      } else if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
        return true;
      }
      this.router.navigate(['login']);
    }
    return false;
  }
}
ClientGuard.ɵfac = function ClientGuard_Factory(t) {
  return new (t || ClientGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
};
ClientGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ClientGuard,
  factory: ClientGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 12:
/*!***************************************************!*\
  !*** ./src/app/master/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 77,
  vars: 0,
  consts: [[1, "w3l-footer-29-main"], [1, "footer-29", "py-5"], [1, "container", "py-md-4"], [1, "row", "footer-top-29"], [1, "col-lg-4", "col-md-6", "col-sm-7", "footer-list-29", "footer-1", "pr-lg-5"], [1, "footer-title-29"], [1, "my-2"], ["href", "tel:+1(21) 234 4567"], ["href", "mailto:info@example.com"], [1, "main-social-footer-29", "mt-4"], ["href", "#facebook", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#twitter", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#instagram", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#linkedin", 1, "linkedin"], [1, "fa", "fa-linkedin"], [1, "col-lg-3", "col-md-6", "col-sm-5", "col-6", "footer-list-29", "footer-2", "mt-sm-0", "mt-5"], ["href", "about.html"], ["href", "blog.html"], ["href", "#teacher"], ["href", "courses.html"], ["href", "contact.html"], [1, "col-lg-2", "col-md-6", "col-sm-5", "col-6", "footer-list-29", "footer-3", "mt-lg-0", "mt-5"], ["href", "#traning"], ["href", "#documentation"], ["href", "#release"], ["href", "#customers"], ["href", "#helpcenter"], [1, "col-lg-3", "col-md-6", "col-sm-7", "footer-list-29", "footer-4", "mt-lg-0", "mt-5"], ["href", "#playstore"], ["src", "assets/images/googleplay.png", "alt", "", 1, "img-responsive"], ["href", "#appstore"], ["src", "assets/images/appstore.png", "alt", "", 1, "img-responsive", "mt-3"], [1, "w3l-copyright", "text-center"], [1, "container"], [1, "copy-footer-29"], ["href", "https://w3layouts.com/", "target", "_blank"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address : Study course, 343 marketing, #2214 cravel street, NY - 62617.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+1(21) 234 4567");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "info@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9)(18, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18)(27, "ul")(28, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li")(34, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Latest Blog posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li")(37, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Became a teacher ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Online Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24)(46, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Programs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul")(49, "li")(50, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Training Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Release Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Help Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30)(65, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Suppport");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 35)(72, "div", 36)(73, "p", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00A9 2020 Study Course. All rights reserved. Design by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " W3Layouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4068:
/*!***************************************************!*\
  !*** ./src/app/master/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function NavbarComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavbarComponent_li_50_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Admin Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavbarComponent_li_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21)(5, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_li_50_a_8_Template, 3, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_50_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.user.firstname, " ", ctx_r1.user.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.user.authorities[0].authority == "ADMIN");
  }
}
class NavbarComponent {
  constructor(login, router) {
    this.login = login;
    this.router = router;
    this.isLoggedin = false;
  }
  ngOnInit() {
    this.isLoggedin = this.login.isLoggedIn();
    this.user = this.login.getUser();
  }
  homePage() {
    // alert(JSON.stringify(this.user));
    if (this.login.getUserRole() == "ADMIN") {
      // Admin dashboard
      this.router.navigate(["admin"]);
    } else if (this.login.getUserRole() == "NORMAL") {
      this.router.navigate([""]);
    }
  }
  logout() {
    this.login.logout();
    this.isLoggedin = false;
    this.user = null;
    window.location.reload();
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 59,
  vars: 2,
  consts: [["id", "site-header", 1, "fixed-top"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "stroke"], ["href", "", 1, "navbar-brand"], [1, "fa", "fa-diamond"], [1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed", "bg-gradient"], [1, "navbar-toggler-icon", "fa", "icon-expand", "fa-bars"], [1, "navbar-toggler-icon", "fa", "icon-close", "fa-times"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-lg-auto"], [1, "nav-item", "active"], ["href", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "@@about__active"], ["routerLink", "/about", 1, "nav-link"], [1, "nav-item", "@@courses__active"], ["routerLink", "/courses", 1, "nav-link"], [1, "nav-item", "dropdown", "@@pages__active"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-angle-down"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/blogs", 1, "dropdown-item", "@@b__active"], ["routerLink", "/books", 1, "dropdown-item", "@@bs__active"], [1, "nav-item", "@@contact__active"], ["routerLink", "/contact", 1, "nav-link"], [1, "search-right"], ["href", "#search", "title", "search"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["id", "search", 1, "pop-overlay"], [1, "popup"], ["action", "https://demo.w3layouts.com/demos_new/template_demo/18-03-2021/study-course-starter-demo_Free/1612283260/web/error.html", "method", "GET", 1, "search-box"], ["type", "search", "placeholder", "Search", "name", "search", "required", "required", "autofocus", ""], ["type", "submit", 1, "btn"], ["href", "#close", 1, "close"], ["class", "top-quote mr-lg-2 text-center", 4, "ngIf"], ["class", "nav-item dropdown @@pages__active", 4, "ngIf"], [1, "mobile-position"], [1, "navigation"], [1, "theme-switch-wrapper"], ["for", "checkbox", 1, "theme-switch"], ["type", "checkbox", "id", "checkbox"], [1, "mode-container", "py-1"], [1, "gg-sun"], [1, "gg-moon"], [1, "top-quote", "mr-lg-2", "text-center"], ["routerLink", "/login", 1, "login", "mr-2"], [1, "fa", "fa-user"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["routerLink", "/profile", 1, "dropdown-item"], ["class", "dropdown-item", "routerLink", "/admin", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-sign-out"], ["routerLink", "/admin", 1, "dropdown-item"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "h1")(4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sciaku ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Journey to success");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 7)(11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "ul", 10)(14, "li", 11)(15, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "(current)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 14)(20, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 16)(23, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 18)(26, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Services ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21)(30, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Books");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 24)(35, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26)(38, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29)(41, "div", 30)(42, "form", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, NavbarComponent_div_48_Template, 4, 0, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, NavbarComponent_li_50_Template, 12, 3, "li", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 37)(52, "nav", 38)(53, "div", 39)(54, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 43)(58, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedin);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
















const MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule];
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, MaterialComponents, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule]
  });
})();

/***/ }),

/***/ 3349:
/*!***********************************!*\
  !*** ./src/app/model/meta-tag.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaTag": () => (/* binding */ MetaTag)
/* harmony export */ });
class MetaTag {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

/***/ }),

/***/ 2838:
/*!*******************************************************!*\
  !*** ./src/app/pages/client/about/about.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 182,
  vars: 0,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "breadcrumbs-custom-path", "pb-sm-5", "pb-4", "mt-2", "text-center", "mb-5"], ["href", "index.html"], [1, "active"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], ["id", "about", 1, "home-services", "pt-lg-0"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "box-wrap"], [1, "box-wrap-grid"], [1, "icon"], [1, "fa", "fa-graduation-cap"], [1, "info"], ["href", "#url"], [1, "mt-4"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mt-md-0", "mt-4"], [1, "fa", "fa-book"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mt-lg-0", "mt-4"], [1, "fa", "fa-trophy"], ["id", "about", 1, "w3l-aboutblock1", "py-5"], [1, "container", "py-lg-5", "py-md-4", "py-2"], [1, "col-lg-6", "align-self"], [1, "title-small", "mb-2"], [1, "title-big", "mx-0"], [1, "mt-lg-4", "mt-3"], [1, "mt-3", "mb-lg-5"], [1, "col-lg-6", "left-wthree-img", "mt-lg-0", "mt-sm-5", "mt-4"], ["src", "assets/images/about.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["id", "progress", 1, "w3l-servicesblock", "w3l-servicesblock1", "py-5"], [1, "col-lg-6", "align-self", "pr-lg-4"], [1, "progress-info", "info1"], [1, "progress-tittle"], [1, ""], [1, "progress"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "80%"], [1, "progress-info", "info2"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "95%"], [1, "progress-info", "info3"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "90%"], [1, "progress-info", "info4"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "75%"], [1, "progress-info", "info2", "mb-0"], [1, "col-lg-6", "mt-lg-0", "mt-5", "pl-lg-4"], [1, "title-big"], [1, "mt-md-4", "mt-3"], ["href", "#url", 1, "btn", "btn-primary", "btn-style", "mt-md-5", "mt-4"], ["id", "", 1, "w3l-block", "py-5"], [1, "container", "py-lg-5", "py-md-3"], [1, "col-lg-6", "about-right-faq", "align-self"], [1, "mt-lg-4", "mt-3", "mb-lg-5", "mb-4"], [1, "two-grids", "mt-md-0", "mt-md-5", "mt-4"], [1, "grids_info"], [1, "col-lg-3", "col-6", "left-wthree-img", "mt-lg-0", "mt-sm-5", "mt-4"], ["src", "assets/images/about1.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["src", "assets/images/about2.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["id", "stats", 1, "w3l-stats", "py-5"], [1, "gallery-inner", "container", "py-lg-5", "py-md-4"], [1, "title-small", "text-center", "mb-1"], [1, "title-big", "text-center", "mb-5"], [1, "row", "stats-con"], [1, "col-md-3", "col-6", "stats_info", "counter_grid"], [1, "counter"], [1, "plus"], [1, "col-md-3", "col-6", "stats_info", "counter_grid1"], [1, "col-md-3", "col-6", "stats_info", "counter_grid", "mt-md-0", "mt-4"], [1, "col-md-3", "col-6", "stats_info", "counter_grid2", "mt-md-0", "mt-4"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " / About us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Our");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4")(26, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mission");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "If you are looking for high-quality and reliable online courses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21)(31, "div", 14)(32, "div", 15)(33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18)(36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4")(39, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "If you are looking for high-quality and reliable online courses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23)(44, "div", 14)(45, "div", 15)(46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18)(49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Our");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4")(52, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Goal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "If you are looking for high-quality and reliable online courses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 25)(57, "div", 26)(58, "div", 12)(59, "div", 27)(60, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Welcome to the Coursing - all available online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 34)(71, "div", 26)(72, "div", 12)(73, "div", 35)(74, "div", 36)(75, "h6", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Figma illustrations ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41)(82, "h6", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "PHP programming ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "95%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43)(89, "h6", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Web design & development ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "90%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45)(96, "h6", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Adobe Photoshop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "75%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 47)(103, "h6", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Wordpress design ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "95%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 48)(110, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Progress bars");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " What you have in our Popular Online Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Get started now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "section", 52)(119, "div", 53)(120, "div", 12)(121, "div", 54)(122, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Start online course");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Enhance your skills with best online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat libero ut justo, ultrices in ligula amet dolor sit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 56)(129, "div", 57)(130, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Global Certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Pellen tesque libero ut justo, ultrices in ligula elit sed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 57)(135, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Books and library");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Pellen tesque libero ut justo, ultrices in ligula elit sed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "section", 61)(144, "div", 62)(145, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Our Achievements");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Our progress never Ends");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 65)(150, "div", 66)(151, "p", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "500 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Students Enrolled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 69)(159, "p", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "56");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Courses Uploaded");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 70)(167, "p", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "130");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "k");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Certified students");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 71)(175, "p", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "243 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Global Teachers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6304:
/*!**************************************************!*\
  !*** ./src/app/pages/client/client.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponent": () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/courses.service */ 5549);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/meta.service */ 8257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);








function ClientComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 119)(1, "div", 120)(2, "div", 121)(3, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 125)(8, "div", 126)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 127)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 131)(25, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " 20 hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("routerLink", "/course-details/", c_r1.url, "/", c_r1.cId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.imgUrl, "courses/", c_r1.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("routerLink", "/course-details/", c_r1.url, "/", c_r1.cId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r1.title);
  }
}
class ClientComponent {
  constructor(_courses, _snackbar, _meta, _title,
  // private imageService:ImageProcessingService,
  shareService) {
    this._courses = _courses;
    this._snackbar = _snackbar;
    this._meta = _meta;
    this._title = _title;
    this.shareService = shareService;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl;
    this.courses = [{
      cId: 0,
      title: '',
      description: '',
      thumbnail: '',
      date: '',
      status: false,
      url: '',
      rating: '',
      length: 0,
      price: 0,
      imageFiles: [{
        file: File,
        url: ''
      }]
    }];
    this.loader = false;
    this.spinner = false;
  }
  ngOnInit() {
    // this._meta.updateTag({name:'description',content:'Top Free Courses Sciaku ia a Learning platform for Engineering Students'});
    this.getAllCourses();
    // console.log(this.course.length);
  }

  getAllCourses() {
    this._courses.getAllActiveCourses()
    // .pipe(
    //   map((x:Courses[], i) => x.map((course:Courses) => this.imageService.createCoursesImages(course)))
    // )
    .subscribe(res => {
      this.courses = res;
      console.log(this.courses);
      // this.shareService.setFacebookTags(
      //   window.document.location.href,
      //   this.title,
      //   this.title,
      //   this.courses[0].thumbnail);
      // console.log(window.document.location.href,
      //   this.title,
      //   this.title,
      //   this.courses[0].thumbnail); 
      this.spinner = true;
      if (this.courses.length != 0) {
        this.loader = true;
      } else {
        this.loader = false;
      }
    }, error => {
      console.log(error);
      this._snackbar.open('Error in loading data !!', 'Close', {
        duration: 2000
      });
      // Swal.fire('Error','Error in loading data','error');
    });
  }
}

ClientComponent.ɵfac = function ClientComponent_Factory(t) {
  return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__.MetaService));
};
ClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ClientComponent,
  selectors: [["app-client"]],
  decls: 421,
  vars: 1,
  consts: [["id", "home", 1, "w3l-main-slider"], [1, "companies20-content"], [1, "owl-one", "owl-carousel", "owl-theme"], [1, "item"], [1, "slider-info", "banner-view", "bg", "bg2"], [1, "banner-info"], [1, "container"], [1, "banner-info-bg"], [1, "mt-4", "pr-lg-4"], ["routerLink", "about.html", 1, "btn", "btn-style", "btn-primary", "mt-sm-5", "mt-4", "mr-2"], [1, "slider-info", "banner-view", "banner-top1", "bg", "bg2"], [1, "slider-info", "banner-view", "banner-top2", "bg", "bg2"], [1, "slider-info", "banner-view", "banner-top3", "bg", "bg2"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], [1, "w3l-courses"], ["id", "courses", 1, "blog", "pb-5"], [1, "container", "py-lg-5", "py-md-4", "py-2"], [1, "title-small", "text-center", "mb-1"], [1, "title-big", "text-center", "mb-sm-5", "mb-4"], [1, "row"], ["class", "col-lg-4 col-md-6 item mt-md-0 mt-5 pt-lg-2", 4, "ngFor", "ngForOf"], [1, "mt-5", "text-more"], [1, "pt-md-3", "sample", "text-center"], ["routerLink", "/courses"], [1, "pl-2", "fa", "fa-long-arrow-right"], ["id", "facilities", 1, "w3l-features", "py-5"], [1, "call-w3", "py-lg-5", "py-md-4", "py-2"], [1, "row", "main-cont-wthree-2"], [1, "col-lg-5", "feature-grid-left"], [1, "title-small", "mb-1"], [1, "title-big", "mb-4"], [1, "text-para"], [1, "mt-3"], ["routerLink", "#url", 1, "btn", "btn-primary", "btn-style", "mt-md-5", "mt-4"], [1, "col-lg-7", "feature-grid-right", "mt-lg-0", "mt-5"], [1, "call-grids-w3", "d-grid"], [1, "grids-1", "box-wrap"], ["routerLink", "#more", 1, "icon"], [1, "fa", "fa-certificate"], ["routerLink", "#feature", 1, "title-head"], [1, "fa", "fa-book"], [1, "fa", "fa-trophy"], [1, "fa", "fa-graduation-cap"], [1, "w3l-homeblock3", "py-5"], [1, "row", "top-pics"], [1, "col-md-6"], [1, "top-pic1"], [1, "card-body", "blog-details"], ["routerLink", "blog-single.html", 1, "blog-desc"], [1, "author", "align-items-center"], ["src", "assets/images/team1.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "blog-meta"], ["routerLink", "#author"], [1, "meta-item", "blog-lesson"], [1, "meta-value"], [1, "meta-value", "ml-2"], [1, "fa", "fa-clock-o"], [1, "col-md-6", "mt-md-0", "mt-4"], [1, "top-pic2"], ["src", "assets/images/team2.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "mt-4"], [1, "top-pic3"], ["src", "assets/images/team3.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "mt-md-5", "mt-4", "text-more", "text-center"], ["routerLink", "blog.html"], [1, "middle", "py-5"], [1, "welcome-left", "text-center", "py-lg-4"], [1, "title-big"], ["routerLink", "#started", 1, "btn", "btn-style", "btn-outline-light", "mt-sm-5", "mt-4", "mr-2"], ["routerLink", "contact.html", 1, "btn", "btn-style", "btn-primary", "mt-sm-5", "mt-4"], ["id", "team", 1, "w3l-team", "py-5"], [1, "call-w3", "py-lg-5", "py-md-4"], [1, "col-sm-6"], [1, "box16"], ["routerLink", "#url"], ["src", "assets/images/team1.jpg", "alt", "", 1, "img-fluid", "radius-image"], [1, "box-content"], [1, "title"], [1, "post"], [1, "social"], ["routerLink", "#", 1, "facebook"], [1, "fa", "fa-facebook-f"], ["routerLink", "#", 1, "twitter"], [1, "fa", "fa-twitter"], [1, "col-sm-6", "mt-sm-0", "mt-3"], ["src", "assets/images/team2.jpg", "alt", "", 1, "img-fluid", "radius-image"], [1, "col-sm-6", "mt-lg-4", "mt-3"], ["src", "assets/images/team3.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["src", "assets/images/team4.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["id", "clients", 1, "w3l-testimonials"], [1, "cusrtomer-layout", "py-5"], [1, "container", "py-lg-4", "py-md-3", "pb-lg-0"], [1, "testimonial-width"], ["id", "owl-demo1", 1, "owl-two", "owl-carousel", "owl-theme"], [1, "testimonial-content"], [1, "testimonial"], [1, "testi-des"], [1, "test-img"], ["src", "assets/images/team1.jpg", "alt", "client-img", 1, "img-fluid"], [1, "peopl", "align-self"], [1, "indentity"], ["src", "assets/images/team2.jpg", "alt", "client-img", 1, "img-fluid"], ["src", "assets/images/team3.jpg", "alt", "client-img", 1, "img-fluid"], ["src", "assets/images/team4.jpg", "alt", "client-img", 1, "img-fluid"], ["id", "clients", 1, "w3l-clients", "py-5"], [1, "call-w3", "py-md-4", "py-2"], [1, "company-logos", "text-center"], [1, "row", "logos"], [1, "col-lg-2", "col-md-3", "col-4"], ["src", "assets/images/brand1.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/brand2.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/brand3.png", "alt", "", 1, "img-fluid"], [1, "col-lg-2", "col-md-3", "col-4", "mt-md-0", "mt-4"], ["src", "assets/images/brand4.png", "alt", "", 1, "img-fluid"], [1, "col-lg-2", "col-md-3", "col-4", "mt-lg-0", "mt-4"], ["src", "assets/images/brand5.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/brand6.png", "alt", "", 1, "img-fluid"], [1, "col-lg-4", "col-md-6", "item", "mt-md-0", "mt-5", "pt-lg-2"], [1, "card"], [1, "card-header", "p-0", "position-relative"], [1, "zoom", "d-block", 3, "routerLink"], ["alt", "Card image cap", 1, "card-img-bottom", "d-block", 3, "src"], [1, "course-price-badge"], [1, "card-body", "course-details"], [1, "price-review", "d-flex", "justify-content-between", "mb-1align-items-center"], [1, "rating-star"], [1, "fa", "fa-star"], [1, "fa", "fa-star-o"], [1, "course-desc", 3, "routerLink"], [1, "course-meta", "mt-4"], [1, "meta-item", "course-lesson"], [1, "meta-item", "course-"], [1, "fa", "fa-user-o"]],
  template: function ClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "li")(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "50% Discount on all Popular Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Take the first step to your journey to success with us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Ready to get started?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3)(16, "li")(17, "div", 10)(18, "div", 5)(19, "div", 6)(20, "div", 7)(21, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Learn and Improve Yourself in Less Time ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Our self improvement courses is very effective ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Ready to get started?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 3)(28, "li")(29, "div", 11)(30, "div", 5)(31, "div", 6)(32, "div", 7)(33, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Be More Productive to Be More Successful");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Don't waste your time, check out our productive courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Ready to get started?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 3)(40, "li")(41, "div", 12)(42, "div", 5)(43, "div", 6)(44, "div", 7)(45, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Enhance your skills with best online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Take the first step to your journey to success with us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Ready to get started?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "section", 16)(55, "div", 17)(56, "div", 18)(57, "h5", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Join our learn Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h3", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Featured Online ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ClientComponent_div_64_Template, 33, 7, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 23)(66, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Control your personal preference settings to get notified about appropriate courses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "View All Courses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "section", 27)(72, "div", 28)(73, "div", 6)(74, "div", 29)(75, "div", 30)(76, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Study and graduate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "h3", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Our Facilities ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, commodo risus. Nullam sit amet laoreet elit. Suspendisse non magna a velit efficitur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit, libero illo quia sequi quibusdam iure. Error minus quod reprehenderit quae dolor velit soluta animi voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Discover More");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 36)(87, "div", 37)(88, "div", 38)(89, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "h4")(92, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Global Certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 38)(97, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "h4")(100, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Books & Library");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 38)(105, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h4")(108, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Scholarship");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 38)(113, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "h4")(116, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Alumni Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet laoreet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 45)(121, "div", 18)(122, "h5", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "From the news");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "h3", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Latest ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "News");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 46)(129, "div", 47)(130, "div", 48)(131, "div", 49)(132, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Enhance your educational skills and also experience with best online courses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "img", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "ul", 53)(137, "li")(138, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Isabella ava");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "li", 55)(141, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " Nov 19, 2020 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " 1 min");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 59)(148, "div", 60)(149, "div", 49)(150, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Be more productive to be more Successful. Take your first jouney ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "ul", 53)(155, "li")(156, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Charlotte mia");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "li", 55)(159, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " Nov 19, 2020 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, " 1 min");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 62)(166, "div", 63)(167, "div", 49)(168, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " Our self improvement courses are more effective. Start leaarning online ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "ul", 53)(173, "li")(174, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Elizabeth");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "li", 55)(177, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, " Nov 19, 2020 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, " 1 min");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 65)(184, "a", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "View All Posts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 67)(188, "div", 18)(189, "div", 68)(190, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Start learning online");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "h3", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Enhance your skills with best online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Get started now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "a", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "section", 72)(199, "div", 73)(200, "div", 6)(201, "div", 29)(202, "div", 30)(203, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Experienced professionals");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "h3", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Meet our teachers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, commodo risus. Nullam sit amet laoreet elit. Suspendisse non magna a velit efficitur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit, libero illo quia sequi quibusdam iure. Error minus quod reprehenderit quae dolor velit soluta animi voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Discover More");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 36)(214, "div", 21)(215, "div", 74)(216, "div", 75)(217, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "img", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 78)(220, "h3", 79)(221, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "James");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "ul", 81)(226, "li")(227, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "li")(230, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "span", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 86)(233, "div", 75)(234, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](235, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 78)(237, "h3", 79)(238, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "Victoria");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "ul", 81)(243, "li")(244, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](245, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "li")(247, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](248, "span", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 88)(250, "div", 75)(251, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](252, "img", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 78)(254, "h3", 79)(255, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Isabella");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "ul", 81)(260, "li")(261, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "li")(264, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "span", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 88)(267, "div", 75)(268, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "img", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "div", 78)(271, "h3", 79)(272, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "Elizabeth");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "ul", 81)(277, "li")(278, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](279, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "li")(281, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](282, "span", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "section", 91)(284, "div", 92)(285, "div", 93)(286, "h5", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "Testimonials");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "h3", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Happy Clients & Feedbacks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 94)(291, "div", 95)(292, "div", 3)(293, "div", 96)(294, "div", 97)(295, "blockquote")(296, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "div", 98)(299, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 101)(302, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "John wilson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div", 3)(307, "div", 96)(308, "div", 97)(309, "blockquote")(310, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 98)(313, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](314, "img", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 101)(316, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "Julia sakura");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](319, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "div", 3)(321, "div", 96)(322, "div", 97)(323, "blockquote")(324, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](325, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "div", 98)(327, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](328, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "div", 101)(330, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Roy Linderson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 3)(335, "div", 96)(336, "div", 97)(337, "blockquote")(338, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](339, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "div", 98)(341, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](342, "img", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "div", 101)(344, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, "Mike Thyson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 3)(349, "div", 96)(350, "div", 97)(351, "blockquote")(352, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "div", 98)(355, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](356, "img", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "div", 101)(358, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Laura gill");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "div", 3)(363, "div", 96)(364, "div", 97)(365, "blockquote")(366, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "div", 98)(369, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](370, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "div", 101)(372, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](373, "Smith Johnson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 3)(377, "div", 96)(378, "div", 97)(379, "blockquote")(380, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](381, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](382, "div", 98)(383, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](384, "img", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 101)(386, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, "Laura gill");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](389, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "div", 3)(391, "div", 96)(392, "div", 97)(393, "blockquote")(394, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](395, "Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolo amet!.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "div", 98)(397, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](398, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "div", 101)(400, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](401, "Smith Johnson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](402, "p", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](403, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "section", 106)(405, "div", 107)(406, "div", 6)(407, "div", 108)(408, "div", 109)(409, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](410, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](412, "img", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](414, "img", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "div", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](416, "img", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](418, "img", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](420, "img", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.courses);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1433:
/*!***********************************************************!*\
  !*** ./src/app/pages/client/contact/contact.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 66,
  vars: 0,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "breadcrumbs-custom-path", "pb-sm-5", "pb-4", "mt-2", "text-center", "mb-md-5"], ["href", "index.html"], [1, "active"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], ["id", "contact", 1, "w3l-contact-1", "pb-5"], [1, "contacts-9", "py-lg-5", "py-md-4"], [1, "container"], [1, "d-grid", "contact-view"], [1, "cont-details"], [1, "title-small"], [1, "title-big", "mb-4"], [1, "mb-sm-5", "mb-4"], [1, "cont-top"], [1, "cont-left", "text-center"], [1, "fa", "fa-map-marker", "text-primary"], [1, "cont-right"], [1, "pr-lg-5"], [1, "cont-top", "margin-up"], [1, "fa", "fa-phone", "text-primary"], ["href", "tel:+(21) 255 999 8888"], [1, "fa", "fa-envelope-o", "text-primary"], ["href", "mailto:coursing@mail.com", 1, "mail"], [1, "map-content-9"], [1, "mb-sm-4", "mb-3"], ["action", "https://sendmail.w3layouts.com/submitForm", "method", "post"], [1, "twice-two"], ["type", "text", "name", "w3lName", "id", "w3lName", "placeholder", "Name", "required", "", 1, "form-control"], ["type", "email", "name", "w3lSender", "id", "w3lSender", "placeholder", "Email", "required", "", 1, "form-control"], [1, "twice"], ["type", "text", "name", "w3lSubject", "id", "w3lSubject", "placeholder", "Subject", "required", "", 1, "form-control"], ["name", "w3lMessage", "id", "w3lMessage", "placeholder", "Message", "required", "", 1, "form-control"], [1, "text-right"], ["type", "submit", 1, "btn", "btn-primary", "btn-style", "mt-4"], [1, "map-iframe"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14221.47388293077!2d80.9318324!3d26.9868915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1673712472642!5m2!1sen!2sin", "width", "100%", "height", "400", "frameborder", "0", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0px"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " / Contact us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Feel free to contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Start working with Us, We guarantee that you\u2019ll be able to have any issue resolved within 24 hours.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18)(26, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21)(29, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Our head office address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Address here, 208 Trainer Avenue street, Illinois, UK - 62617.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23)(34, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21)(37, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Call for help ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p")(40, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+(21) 255 999 8888");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23)(43, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21)(46, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contact with our support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p")(49, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "coursing@mail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28)(52, "h5", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Write to us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 30)(55, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 32)(57, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37)(62, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "iframe", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9857:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/client/courses/course-details/course-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDetailsComponent": () => (/* binding */ CourseDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/courses.service */ 5549);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/meta.service */ 8257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











function CourseDetailsComponent_mat_accordion_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-accordion", 77)(1, "mat-expansion-panel", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function CourseDetailsComponent_mat_accordion_26_Template_mat_expansion_panel_opened_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.panelOpenState = true);
    })("closed", function CourseDetailsComponent_mat_accordion_26_Template_mat_expansion_panel_closed_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 79)(7, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 82)(10, "mat-card-header")(11, "mat-card-title", 83)(12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-card-actions")(15, "div", 51)(16, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Watch Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Lec:- ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.imgUrl + "courses/" + c_r1.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", c_r1.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r1.v_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate3"]("routerLink", "/course-lectures/", c_r1.v_url, "/", c_r1.courses.cId, "/", c_r1.vId, "");
  }
}
class CourseDetailsComponent {
  constructor(_courses,
  // private imageService:ImageProcessingService,
  _snackbar, _route, _meta, _title, shareService) {
    this._courses = _courses;
    this._snackbar = _snackbar;
    this._route = _route;
    this._meta = _meta;
    this._title = _title;
    this.shareService = shareService;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl;
    this.panelOpenState = false;
    this.course = [{
      vId: 0,
      v_title: '',
      v_description: '',
      v_url: '',
      url: '',
      thumbnail: '',
      date: '',
      status: true,
      courses: {
        cId: 0,
        url: '',
        title: '',
        description: '',
        thumbnail: ''
      }
    }];
    this.loader = false;
    this.spinner = false;
  }
  ngOnInit() {
    this.cid = this._route.snapshot.params['cid'];
    this.getAllCourses();
  }
  getAllCourses() {
    this._courses.getAllActiveCourseVideo(this.cid)
    // .pipe(
    //   map((x:CourseVideo[], i) => x.map((course:CourseVideo) => this.imageService.createCourseVideosImages(course)))
    // )
    .subscribe(res => {
      this.course = res;
      // console.log(res);
      this.shareService.setFacebookTags(window.document.location.href, this.course[0].courses.title, this.course[0].courses.description, this.course[0].courses.thumbnail);
      // this.thumb = this.imgUrl +'/'+ this.course[0].thumbnail;
      this._title.setTitle(this.course[0].courses.title);
      // this._meta.updateTag({property:'og:title', content: this.course[0].courses.title});
      // this._meta.updateTag({name:'description',content: this.course[0].courses.description});
      // this._meta.updateTag({property:'og:description',content: this.course[0].courses.description});
      // this._meta.updateTag({property:'og:image', content: this.thumb});  
      // this._meta.updateTag({property:'og:image:secure_url', content: this.thumb});
      // this._meta.updateTag({property:'og:image:type', content: "image/jpeg/png"});
      // this._meta.updateTag({property:'og:image:width', content: "400"});
      // this._meta.updateTag({property:'og:image:height', content:"300"});
      // this._meta.updateTag({name:'url', content: window.document.location.href});
      // this._meta.updateTag({property:'og:url', content: window.document.location.href});
      this._meta.updateTag({
        name: 'keywords',
        content: 'top free courses, courses' + this.course[0].courses.title
      });
      this.spinner = true;
      if (this.course.length != 0) {
        this.loader = true;
      } else {
        this.loader = false;
      }
    }, error => {
      console.error(error);
      this._snackbar.open('Error in loading data !!', 'Close', {
        duration: 2000
      });
      // Swal.fire('Error','Error in loading data','error');
    });
  }
}

CourseDetailsComponent.ɵfac = function CourseDetailsComponent_Factory(t) {
  return new (t || CourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__.MetaService));
};
CourseDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CourseDetailsComponent,
  selectors: [["app-course-details"]],
  decls: 165,
  vars: 5,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "breadcrumbs-custom-path", "pb-sm-5", "pb-4", "mt-2", "text-center", "mb-md-5"], ["href", "index.html"], [1, "active"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], [1, "text-11", "pb-5"], [1, "text11", "py-lg-5", "py-md-4"], [1, "container"], ["alt", "", 1, "img-fluid", "radius-image", 3, "src"], [1, "text11-content"], [1, ""], [1, "my-3"], [1, "ml10", 3, "innerHtml"], [1, "example-card"], ["style", "margin-bottom:10px", 4, "ngFor", "ngForOf"], [1, "social-share-blog", "mt-md-5", "mt-4"], [1, "column3", "social", "m-0", "p-0"], [1, "m-0", "mr-4"], ["href", "#facebook", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#twitter", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#instagram", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#linkedin", 1, "linkedin"], [1, "fa", "fa-linkedin"], [1, "comments"], [1, "aside-title"], [1, "comments-grids"], [1, "media-grid"], [1, "media"], ["href", "#url", 1, "comment-img"], ["src", "assets/images/team1.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media-body", "comments-grid-right"], [1, "p-0", "comment"], ["href", "#comment", 1, ""], ["src", "assets/images/team2.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media", "mt-4", "mb-0", "border-0", "px-0"], ["src", "assets/images/team3.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], ["id", "comment", 1, "leave-comment-form"], ["action", "#", "method", "post"], [1, "input-grids"], [1, "form-group"], ["type", "text", "name", "Name", "placeholder", "Your Name", "required", "", 1, "form-control"], ["type", "email", "name", "Email", "placeholder", "Email", "required", "", 1, "form-control"], ["name", "Comment", "placeholder", "Your Comment", "required", "", 1, "form-control"], [1, "submit", "text-right", "mt-4"], [1, "btn", "btn-style", "btn-primary"], [1, "item", "mt-5", "w3l-grids-block-5", "w3l-courses"], [1, "row", "w3l-blog"], [1, "col-md-6", "item"], [1, "card"], [1, "card-header", "p-0", "position-relative"], ["href", "blog-single.html", 1, "zoom", "d-block"], ["src", "assets/images/c1.jpg", "alt", "Card image cap", 1, "card-img-bottom", "d-block"], [1, "post-pos"], ["href", "#reciepe", 1, "receipe", "blue"], [1, "card-body", "course-details"], [1, "price-review", "d-flex", "justify-content-between", "mb-1align-items-center"], [1, "author", "align-items-center"], ["src", "assets/images/a2.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "blog-meta"], ["href", "#author"], ["href", "#comments"], [1, "fa", "fa-comments-o"], ["href", "blog-single.html", 1, "course-desc"], [1, "mt-3"], [1, "card-footer"], ["href", "blog-single.html", 1, "read"], [1, "fa", "fa-angle-right", "ml-1"], [1, "col-md-6", "item", "mt-md-0", "mt-5"], ["src", "assets/images/c2.jpg", "alt", "Card image cap", 1, "card-img-bottom", "d-block"], [2, "margin-bottom", "10px"], [3, "opened", "closed"], [1, "row"], [1, "col-md-3", "left"], ["mat-card-image", "", 3, "src", "alt"], [1, "col-md-9"], [1, "title"], [1, "btn", "btn-style", "btn-primary", 3, "routerLink"]],
  template: function CourseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " / pages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " / blog single page ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "section", 10)(17, "div", 11)(18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-card", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, CourseDetailsComponent_mat_accordion_26_Template, 18, 7, "mat-accordion", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20)(28, "ul", 21)(29, "li")(30, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Share this post :");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li")(33, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li")(36, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "li")(39, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li")(42, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 31)(45, "h3", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Recent comments(2)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 33)(48, "div", 34)(49, "div", 35)(50, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 38)(53, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "ul", 39)(56, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Oct 29th, 2020 at 11:00 am");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "li")(59, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 34)(64, "div", 35)(65, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 38)(68, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Charlie");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "ul", 39)(71, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Oct 29th, 2020 at 05:45 pm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "li")(74, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus eu nec purus quis tempor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 42)(79, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 38)(82, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "ul", 39)(85, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Oct 30th, 2020 at 04:00 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "li")(88, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 44)(93, "h3", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Leave a reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "form", 45)(96, "div", 46)(97, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "textarea", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 51)(104, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Post Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 53)(107, "h3", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Maybe you are interested in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 54)(110, "div", 55)(111, "div", 56)(112, "div", 57)(113, "a", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 60)(116, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Beginner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 62)(119, "div", 63)(120, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "ul", 66)(123, "li")(124, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " Charlotte");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "ul", 66)(127, "li")(128, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, " 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Learning to Write as a clean Professional Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Lorem ipsum dolor sit amet dolor et elit. Explicabo, enim.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 72)(136, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 75)(140, "div", 56)(141, "div", 57)(142, "a", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "img", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 62)(145, "div", 63)(146, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "ul", 66)(149, "li")(150, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, " Charlotte");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "ul", 66)(153, "li")(154, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, " 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Learn Master JQuery in a Short Period of Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Lorem ipsum dolor sit amet dolor et elit. Explicabo, enim.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 72)(162, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.course[0].courses.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("src", "", ctx.imgUrl, "courses/", ctx.course[0].courses.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.course[0].courses.description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.course);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm],
  styles: [".left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10rem;\n  margin-bottom: 10px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  max-height: 60px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50L2NvdXJzZXMvY291cnNlLWRldGFpbHMvY291cnNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRydW5jYXRle1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 556:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/client/courses/course-lecture/course-lecture.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseLectureComponent": () => (/* binding */ CourseLectureComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/courses.service */ 5549);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/meta.service */ 8257);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/youtube-player */ 2163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);














function CourseLectureComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74)(1, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseLectureComponent_div_19_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const c_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onVideo(c_r1.v_url, c_r1.vId, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "list", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Lecture ", i_r2 + 1, " ", c_r1.v_title, "");
  }
}
class CourseLectureComponent {
  constructor(_courses, _snackbar, _route, _router, _meta, _title, shareService, platformId) {
    this._courses = _courses;
    this._snackbar = _snackbar;
    this._route = _route;
    this._router = _router;
    this._meta = _meta;
    this._title = _title;
    this.shareService = shareService;
    this.platformId = platformId;
    this.height = 500;
    this.width = 950;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl;
    this.course = [{
      vId: 0,
      v_title: '',
      v_description: '',
      v_url: '',
      url: '',
      thumbnail: '',
      date: '',
      status: true,
      courses: {
        cId: 0,
        url: '',
        title: '',
        description: '',
        thumbnail: ''
      }
    }];
    this.apiLoaded = false;
    this.loader = false;
    this.spinner = false;
    this.courseData = {
      courses: {
        title: ''
      }
    };
  }
  ngOnInit() {
    this.vid = this._route.snapshot.params['id'];
    this.cid = this._route.snapshot.params['cid'];
    // if (window.innerWidth < 600) {
    //   this.width = window.innerWidth - 70;
    //   this.height = window.innerHeight - 430;
    // }
    // else if (window.innerWidth < 600) {
    //   this.width = window.innerWidth - 70;
    //   this.height = window.innerHeight - 430;
    // }
    // else {
    //   this.width = window.innerWidth - 600;
    //   this.height = window.innerHeight - 200;
    // }
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    // console.log(this.width);
    // console.log(this.height);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      this.getCourseById(this.vid);
      this.getAllVideoOfCourse();
    }
  }
  getAllVideoOfCourse() {
    this._courses.getAllActiveCourseVideo(this.cid).subscribe(data => {
      this.course = data;
      this.shareService.setFacebookTags(window.document.location.href, this.course[0].v_title, this.course[0].v_description, this.course[0].thumbnail);
      if (this.course.length != 0) {
        this.loader = true;
      } else {
        this.loader = false;
      }
      this.spinner = true;
    }, error => {
      console.log(error);
      // Swal.fire('Error', 'Error in loading data', 'error');
    });
  }

  getCourseById(vid) {
    this._courses.getCourseVideoById(vid).subscribe(res => {
      this.courseData = res;
      this.shareService.setFacebookTags(window.document.location.href, this.courseData.v_title, this.courseData.courses.description, this.courseData.thumbnail);
      // this.thumb = this.imgUrl + this.course.thumbnail;
      this._title.setTitle(this.courseData.v_title);
      // this._meta.updateTag({property:'og:title', content: this.course.v_title});
      // this._meta.updateTag({name:'description',content: this.course.courses.description});
      // this._meta.updateTag({property:'og:description',content: this.course.courses.description});
      // this._meta.updateTag({property:'og:image', content: this.thumb});  
      // this._meta.updateTag({property:'og:image:secure_url', content: this.thumb});
      // this._meta.updateTag({property:'og:image:type', content: "image/jpeg/png"});
      // this._meta.updateTag({property:'og:image:width', content: "400"});
      // this._meta.updateTag({property:'og:image:height', content:"300"});
      // this._meta.updateTag({property:'og:url', content: window.document.location.href});
      // this._meta.updateTag({name:'keywords',content:'top free courses, courses'});  
      this.videoId = this.courseData.url;
      this.spinner = true;
      if (this.course.length == 0 || this.course == undefined) {
        this.loader = true;
      }
    });
  }
  onVideo(title, vId, index) {
    this._router.navigate(['/course-lectures/' + title + "/" + this.cid + '/' + vId]);
    this.getCourseById(vId);
    // console.log(vId);
    // this.onActive(index);  
  }

  onActive(index) {
    var x = document.getElementById("list" + index);
    const id = index;
    if (id != index) {
      x?.classList.toggle('active');
    }
    if (id == index) {
      var y = document.getElementById("list" + index);
      console.log(y);
      x?.classList.remove('active');
    }
    if (x?.className == "list") {
      x.className += " active";
    } else if (x?.className == "list active") {
      x.classList.remove("active");
    }
    console.log(x);
    // else {
    //   x?.className == "row topnav";
    // }
  }
}

CourseLectureComponent.ɵfac = function CourseLectureComponent_Factory(t) {
  return new (t || CourseLectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__.MetaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
};
CourseLectureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CourseLectureComponent,
  selectors: [["app-course-lecture"]],
  decls: 163,
  vars: 4,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "text-11", "pb-5"], [1, "text11", "py-lg-5", "py-md-4"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "embed-responsive", "embed-responsive-16by9"], ["autoplay", "", "suggestedQuality", "hd720", 1, "embed-responsive-item", 3, "videoId"], [1, "col-md-4", "col-sm-12", "right"], [1, "text-center", "list"], ["matCardContent", "", 4, "ngFor", "ngForOf"], [1, "text11-content"], [1, ""], [1, "my-3", 3, "innerHtml"], [1, "social-share-blog", "mt-md-5", "mt-4"], [1, "column3", "social", "m-0", "p-0"], [1, "m-0", "mr-4"], ["href", "#facebook", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#twitter", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#instagram", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#linkedin", 1, "linkedin"], [1, "fa", "fa-linkedin"], [1, "comments"], [1, "aside-title"], [1, "comments-grids"], [1, "media-grid"], [1, "media"], ["href", "#url", 1, "comment-img"], ["src", "assets/images/team1.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media-body", "comments-grid-right"], [1, "p-0", "comment"], ["href", "#comment", 1, ""], ["src", "assets/images/team2.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media", "mt-4", "mb-0", "border-0", "px-0"], ["src", "assets/images/team3.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], ["id", "comment", 1, "leave-comment-form"], ["action", "#", "method", "post"], [1, "input-grids"], [1, "form-group"], ["type", "text", "name", "Name", "placeholder", "Your Name", "required", "", 1, "form-control"], ["type", "email", "name", "Email", "placeholder", "Email", "required", "", 1, "form-control"], ["name", "Comment", "placeholder", "Your Comment", "required", "", 1, "form-control"], [1, "submit", "text-right", "mt-4"], [1, "btn", "btn-style", "btn-primary"], [1, "item", "mt-5", "w3l-grids-block-5", "w3l-courses"], [1, "row", "w3l-blog"], [1, "col-md-6", "item"], [1, "card"], [1, "card-header", "p-0", "position-relative"], ["href", "blog-single.html", 1, "zoom", "d-block"], ["src", "assets/images/c1.jpg", "alt", "Card image cap", 1, "card-img-bottom", "d-block"], [1, "post-pos"], ["href", "#reciepe", 1, "receipe", "blue"], [1, "card-body", "course-details"], [1, "price-review", "d-flex", "justify-content-between", "mb-1align-items-center"], [1, "author", "align-items-center"], ["src", "assets/images/a2.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "blog-meta"], ["href", "#author"], ["href", "#comments"], [1, "fa", "fa-comments-o"], ["href", "blog-single.html", 1, "course-desc"], [1, "mt-3"], [1, "card-footer"], ["href", "blog-single.html", 1, "read"], [1, "fa", "fa-angle-right", "ml-1"], [1, "col-md-6", "item", "mt-md-0", "mt-5"], ["src", "assets/images/c2.jpg", "alt", "Card image cap", 1, "card-img-bottom", "d-block"], ["matCardContent", ""], ["mat-list-item", "", 1, "list", 3, "id", "name", "click"]],
  template: function CourseLectureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "youtube-player", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "mat-card")(14, "mat-card-header")(15, "mat-card-title")(16, "h1", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Videos List");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-action-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CourseLectureComponent_div_19_Template, 4, 4, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14)(22, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17)(26, "ul", 18)(27, "li")(28, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Share this post :");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li")(31, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li")(34, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li")(37, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li")(40, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 28)(43, "h3", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Recent comments(2)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 30)(46, "div", 31)(47, "div", 32)(48, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 35)(51, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "ul", 36)(54, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Oct 29th, 2020 at 11:00 am");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li")(57, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 31)(62, "div", 32)(63, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 35)(66, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Charlie");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "ul", 36)(69, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Oct 29th, 2020 at 05:45 pm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "li")(72, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus eu nec purus quis tempor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 39)(77, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 35)(80, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "ul", 36)(83, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Oct 30th, 2020 at 04:00 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "li")(86, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 41)(91, "h3", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Leave a reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "form", 42)(94, "div", 43)(95, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "textarea", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 48)(102, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Post Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 50)(105, "h3", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Maybe you are interested in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 51)(108, "div", 52)(109, "div", 53)(110, "div", 54)(111, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](112, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 57)(114, "a", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Beginner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 59)(117, "div", 60)(118, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "ul", 63)(121, "li")(122, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, " Charlotte");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "ul", 63)(125, "li")(126, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "span", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Learning to Write as a clean Professional Author");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "p", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Lorem ipsum dolor sit amet dolor et elit. Explicabo, enim.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 69)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 72)(138, "div", 53)(139, "div", 54)(140, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "img", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 59)(143, "div", 60)(144, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "ul", 63)(147, "li")(148, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " Charlotte");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "ul", 63)(151, "li")(152, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "span", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Learn Master JQuery in a Short Period of Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "p", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Lorem ipsum dolor sit amet dolor et elit. Explicabo, enim.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 69)(160, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.courseData.v_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("videoId", ctx.videoId);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.course);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.courseData.v_description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatActionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__.YouTubePlayer, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm],
  styles: [".embed-responsive[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive.embed-responsive-16by9[_ngcontent-%COMP%] {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-item[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 550px;\n  height: 550px;\n  overflow-x: visible;\n  overflow-y: scroll;\n}\n\n.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-action-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #a4a5a8;\n}\n\nmat-card[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px; \n}\n\nmat-card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #FE79A2; \n  border-radius: 20px; \n  border: 3px solid #FE79A2; \n}\n\n.list[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50L2NvdXJzZXMvY291cnNlLWxlY3R1cmUvY291cnNlLWxlY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFJSjs7QUFGRTtFQUNFLFVBQUEsRUFBQSxrQ0FBQTtBQUtKOztBQUNFO0VBQ0UseUJBQUEsRUFBQSw4QkFBQTtFQUNBLG1CQUFBLEVBQUEsa0NBQUE7RUFDQSx5QkFBQSxFQUFBLHdDQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1iZWQtcmVzcG9uc2l2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5lbWJlZC1yZXNwb25zaXZlLmVtYmVkLXJlc3BvbnNpdmUtMTZieTkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICB9XHJcbiAgXHJcbiAgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIC5yaWdodCBtYXQtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTsgXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5yaWdodCBtYXQtY2FyZCBtYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAucmlnaHQgbWF0LWNhcmQgbWF0LWFjdGlvbi1saXN0IGRpdjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNGE1YTg7XHJcbiAgfVxyXG4gIG1hdC1jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4OyAgICAgICAgICAgICAgIC8qIHdpZHRoIG9mIHRoZSBlbnRpcmUgc2Nyb2xsYmFyICovXHJcbiAgfVxyXG4gIG1hdC1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7ICAgICAgICAvKiBjb2xvciBvZiB0aGUgdHJhY2tpbmcgYXJlYSAqL1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNzlBMjsgICAgLyogY29sb3Igb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgICAgLyogcm91bmRuZXNzIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRTc5QTI7ICAvKiBjcmVhdGVzIHBhZGRpbmcgYXJvdW5kIHNjcm9sbCB0aHVtYiAqL1xyXG4gIH1cclxuICAubGlzdHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1511:
/*!***********************************************************!*\
  !*** ./src/app/pages/client/courses/courses.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesComponent": () => (/* binding */ CoursesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/courses.service */ 5549);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/meta.service */ 8257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);







function CoursesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 28)(8, "div", 29)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 30)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 34)(25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " 20 hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("routerLink", "/course-details/", c_r1.url, "/", c_r1.cId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.imgUrl, "courses/", c_r1.thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("routerLink", "/course-details/", c_r1.url, "/", c_r1.cId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r1.title);
  }
}
class CoursesComponent {
  constructor(_courses,
  // private _snackbar:MatSnackBar, 
  _meta, _title,
  // private imageService:ImageProcessingService,
  shareService) {
    this._courses = _courses;
    this._meta = _meta;
    this._title = _title;
    this.shareService = shareService;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl;
    this.courses = [{
      cId: 0,
      title: '',
      description: '',
      thumbnail: '',
      date: '',
      status: false,
      url: '',
      rating: '',
      length: 0,
      price: 0,
      imageFiles: [{
        file: File,
        url: ''
      }]
    }];
    this.loader = false;
    this.spinner = false;
    this.title = 'Top Free Courses Sciaku ia a Learning platform for Engineering Students';
    this.keyword = 'angular, java, python, c, c++, android, kotlin, react, aws,html, css, javascript,js';
  }
  ngOnInit() {
    this._title.setTitle(this.title);
    this._meta.updateTag({
      name: 'keywords',
      content: this.keyword
    });
    // this._meta.updateTag({name:'description',content:'Top Free Courses Sciaku ia a Learning platform for Engineering Students'});
    this.getAllCourses();
    // console.log(this.course.length);
  }

  getAllCourses() {
    this._courses.getAllActiveCourses()
    // .pipe(
    //   map((x:Courses[], i) => x.map((course:Courses) => this.imageService.createCoursesImages(course)))
    // )
    .subscribe(res => {
      this.courses = res;
      console.log(this.courses);
      this.shareService.setFacebookTags(window.document.location.href, this.title, this.title, this.courses[0].thumbnail);
      // console.log(window.document.location.href,
      //   this.title,
      //   this.title,
      //   this.courses[0].thumbnail); 
      this.spinner = true;
      if (this.courses.length != 0) {
        this.loader = true;
      } else {
        this.loader = false;
      }
    }, error => {
      console.log(error);
      // this._snackbar.open('Error in loading data !!','Close',{
      //   duration:2000,
      // });
      // Swal.fire('Error','Error in loading data','error');
    });
  }
}

CoursesComponent.ɵfac = function CoursesComponent_Factory(t) {
  return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_1__.CoursesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_2__.MetaService));
};
CoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoursesComponent,
  selectors: [["app-courses"]],
  decls: 41,
  vars: 1,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "breadcrumbs-custom-path", "pb-sm-5", "pb-4", "mt-2", "text-center", "mb-md-5"], ["href", "index.html"], [1, "active"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], [1, "w3l-courses"], ["id", "courses", 1, "blog", "pb-5"], [1, "container", "py-lg-5", "py-md-4", "py-2"], [1, "row"], ["class", "col-lg-4 col-md-6 item mt-md-0 mt-5 pt-lg-2", 4, "ngFor", "ngForOf"], [1, "pagination-wrapper", "mt-5", "pt-lg-3", "text-center"], [1, "page-pagination"], ["href", "#url", 1, "next"], [1, "fa", "fa-angle-left"], ["aria-current", "page", 1, "page-numbers", "current"], ["href", "#url", 1, "page-numbers"], [1, "fa", "fa-angle-right"], [1, "col-lg-4", "col-md-6", "item", "mt-md-0", "mt-5", "pt-lg-2"], [1, "card"], [1, "card-header", "p-0", "position-relative"], [1, "zoom", "d-block", 3, "routerLink"], ["alt", "Card image cap", 1, "card-img-bottom", "d-block", 3, "src"], [1, "course-price-badge"], [1, "card-body", "course-details"], [1, "price-review", "d-flex", "justify-content-between", "mb-1align-items-center"], [1, "rating-star"], [1, "fa", "fa-star"], [1, "fa", "fa-star-o"], [1, "course-desc", 3, "routerLink"], [1, "course-meta", "mt-4"], [1, "meta-item", "course-lesson"], [1, "fa", "fa-clock-o"], [1, "meta-value"], [1, "meta-item", "course-"], [1, "fa", "fa-user-o"]],
  template: function CoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Online Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " / Courses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CoursesComponent_div_18_Template, 33, 7, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15)(20, "ul", 16)(21, "li")(22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li")(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li")(29, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li")(32, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li")(35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "....");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li")(38, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Next ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.courses);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8846:
/*!*******************************************************!*\
  !*** ./src/app/pages/client/error/error.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class ErrorComponent {}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};
ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  decls: 31,
  vars: 0,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "breadcrumbs-custom-path", "pb-sm-5", "pb-4", "mt-2", "text-center", "mb-md-5"], ["href", "index.html"], [1, "active"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], [1, "errorblock", "pb-4", "text-center"], [1, "container", "pb-md-4"], [1, "main-cover", "w3"], ["src", "assets/images/error.svg", "alt", "", 1, "img-fluid"], [1, ""], ["action", "#", "method", "post", 1, "form-inline", "search-form", "mt-md-5", "mt-4"], ["type", "search", "placeholder", "Search here", "aria-label", "email", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "search"], ["routerLink", "/", 1, "btn", "back-button", "mt-md-5", "mt-4"], [1, "fa", "fa-arrow-left", "mr-2"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Error page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " / Pages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " / 404 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 10)(17, "div", 11)(18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The page is lost");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sorry, but nothing matched your search terms. Please try again with some different keywords..");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4021:
/*!*******************************************************!*\
  !*** ./src/app/pages/client/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








class LoginComponent {
  constructor(login, _snackBar, router,
  // private authService: SocialAuthService,
  location) {
    this.login = login;
    this._snackBar = _snackBar;
    this.router = router;
    this.location = location;
    // user:any =  SocialUser;
    this.loggedIn = false;
    this.hide = true;
    this.durationInSeconds = 3;
    this.memberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)])
    });
  }
  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   console.log(this.user);
    //   this.loggedIn = (user != null);
    // });
  }
  Submit() {
    if ((this.memberForm.value.username == '' || this.memberForm.value.username == null) && (this.memberForm.value.password == '' || this.memberForm.value.password == null)) {
      this._snackBar.open('Username and Password is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.username == '' || this.memberForm.value.username == null) {
      this._snackBar.open('Username is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.password == '' || this.memberForm.value.password == null) {
      this._snackBar.open('Password is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else {
      // request for generate token
      this.login.generateToken(this.memberForm.value).subscribe(data => {
        // Login
        // console.log("sucess");
        // console.log(data);
        // localStorage.setItem("token",data);
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(user => {
          this.login.setUser(user);
          // console.log(user);
          // Redirect ....ADMIN admin dshboard
          //Redirect .....NORMAL normal dashboard
          if (this.login.getUserRole() == "ADMIN") {
            // Admin dashboard
            setTimeout(() => {
              window.location.href = "/admin";
              // this.router.navigate(["admin"]);
            }, 1000);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('You are Logged in !!', 'User role is ' + this.login.getUserRole(), 'success');
          } else if (this.login.getUserRole() == "NORMAL") {
            // User dashboard
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('You are Logged in !!', 'User role is ' + this.login.getUserRole(), 'success');
            setTimeout(() => {
              this.location.back();
              window.location.reload();
              // window.location.href='/';
              this.router.navigate(["courses"]);
            }, 1000);
          } else {
            this.login.logout();
          }
        });
      }, error => {
        console.error(error);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Warning', 'Invalid details Try again !!', 'error');
      });
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 39,
  vars: 1,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], ["id", "contact", 1, "w3l-loginblock", "pb-5"], [1, "contacts-9", "pb-lg-5", "pb-md-4"], [1, "container"], [1, "top-map"], [1, "row", "map-content-9"], [1, "col-lg-6", "pr-lg-5"], [1, "", 3, "formGroup"], [1, "form-grid"], [1, "input-field"], ["type", "username", "name", "username", "id", "username", "formControlName", "username", "placeholder", "Username", "required", ""], [1, "input-field", "mt-4"], ["type", "password", "name", "Password", "id", "Password", "formControlName", "password", "placeholder", "Password", "required", ""], [1, "check-remaind", "mt-3"], ["type", "checkbox"], [1, "checkmark"], [1, "remember"], ["routerLink", "/forget"], ["type", "submit", 1, "btn", "btn-primary", "btn-style", 3, "click"], [1, "col-lg-6", "social-login-details", "align-self", "pl-lg-5", "mt-lg-0", "mt-4"], [1, "text-center", "mt-4"], ["routerLink", "/signup"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "form", 10)(12, "div", 11)(13, "div", 12)(14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Username ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 17)(23, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 16)(27, "p")(28, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Forget Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
        return ctx.Submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Login now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 22)(34, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Not yet registered? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.memberForm);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9846:
/*!*********************************************************!*\
  !*** ./src/app/pages/client/signup/signup.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/member.service */ 6341);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);












class SignupComponent {
  constructor(api, http, _snackBar, mailApi) {
    this.api = api;
    this.http = http;
    this._snackBar = _snackBar;
    this.mailApi = mailApi;
    this.hide = true;
    this.chide = true;
    this.memberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]),
      confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]),
      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10)]),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
    });
    this.durationInSeconds = 2;
    this.mailObject = {
      to: "",
      subject: "",
      message: ""
    };
  }
  ngOnInit() {}
  onSubmit() {
    // alert(JSON.stringify(this.memberForm.value));
    if (this.memberForm.value.username == '' || this.memberForm.value.username == null) {
      this._snackBar.open('Username is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.password == '' || this.memberForm.value.password == null) {
      this._snackBar.open('Password is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.firstname == '' || this.memberForm.value.firstname == null) {
      this._snackBar.open('Firstname is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.email == '' || this.memberForm.value.email == null) {
      this._snackBar.open('Email is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.contact == '' || this.memberForm.value.contact == null) {
      this._snackBar.open('Phone number is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.confirm_password == '' || this.memberForm.value.confirm_password == null) {
      this._snackBar.open('Confirm Password is required !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else if (this.memberForm.value.password != this.memberForm.value.confirm_password) {
      this._snackBar.open('Password is not matched !!', 'Close', {
        duration: this.durationInSeconds * 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    } else {
      this.AddMember();
    }
  }
  AddMember() {
    this.api.addMember(this.memberForm.value).subscribe(data => {
      //success
      // console.log(data);
      this.sendMail();
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Successfully done !!', 'User id is ' + data.id, 'success');
    }, error => {
      //error
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Warning', this.memberForm.value.username + ' Or ' + this.memberForm.value.email + ' is Registered Choose Unique Username and Email!!', 'error');
      // alert('Something went wrong!'+ error);
      //   this._snackBar.open('Something went wrong !!','Close', {
      //     duration: this.durationInSeconds * 1000,
      //     verticalPosition:'bottom',
      // });
    });
  }

  sendMail() {
    this.mailObject.to = this.memberForm.value.email;
    this.mailObject.subject = this.memberForm.value.firstname + " Successfully Registerd on Sciaku.com";
    this.mailObject.message = "<div style='background-color:#fff; color:#000; height:100%;'>" + "<div style='background-color:#000; color:#fff; height:100%;'>" + "<img src='https://sciaku.com/assets/images/Sciaku.png' alt='Logo' style='height:70px; text-align:center; margin-left:135px;'/></div></br>" + "<div style='border: 2px solid black; border-radius: 0px 0px 20px 20px; text-align:center;'><h4>" + this.memberForm.value.firstname + " " + this.memberForm.value.lastname + "</h4><p>Welcome in Sciaku. You have successfully Registered on <a href='www.sciaku.com'>Sciaku.com</a></p>" + "<h3>Your Username : <b>" + this.memberForm.value.username + "</b></h3>" + "<h3>Your Password : <b>" + this.memberForm.value.password + "</b></h3>" + "<p><a href='www.sciaku.com/login'>Click here</a> to Login on Website</p>" + "<p><a style='text-align:center;' href='#'>Unsubscribe</a></p>" + "</div></div>";
    this.mailApi.sendMail(this.mailObject).subscribe(data => {
      console.log("mail is send!!" + data);
    }, error => {});
  }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) {
  return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_1__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService));
};
SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SignupComponent,
  selectors: [["app-signup"]],
  decls: 82,
  vars: 9,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], ["id", "contact", 1, "w3l-loginblock", "pb-5"], [1, "contacts-9", "pb-lg-5", "pb-md-4"], [1, "container"], [1, "top-map"], [1, "map-content-9"], [1, "", 3, "formGroup"], [1, "form-grid", "signupgrids"], ["appearance", "outline", 1, "full-width"], ["type", "username", "name", "username", "formControlName", "username", "matInput", "", "placeholder", "Enter here"], ["matPrefix", ""], ["type", "firstname", "name", "firstname", "formControlName", "firstname", "matInput", "", "placeholder", "Enter here"], ["type", "lastname", "name", "lastname", "formControlName", "lastname", "matInput", "", "placeholder", "Enter here"], ["type", "email", "name", "email", "formControlName", "email", "matInput", "", "placeholder", "Enter here"], ["type", "phone", "name", "contact", "formControlName", "contact", "matInput", "", "placeholder", "Enter here"], ["type", "address", "name", "address", "formControlName", "city", "matInput", "", "placeholder", "Enter here"], ["appearance", "outline", 1, "w100"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirm_password", 3, "type"], ["type", "submit", 1, "btn", "btn-primary", "btn-style", "mt-4", 3, "click"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Signup / Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "section", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "form", 9)(11, "div", 10)(12, "mat-form-field", 11)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Username is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 11)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Firstname is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 11)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 11)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Email is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-form-field", 11)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Phone Number is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-form-field", 11)(51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Phone Number is required");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-form-field", 19)(59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_64_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Password should be minimum 6 characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-form-field", 19)(70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_75_listener() {
        return ctx.chide = !ctx.chide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Password should be minimum 6 characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_80_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Signup / Regiser now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.memberForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.chide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.chide);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.chide ? "visibility_off" : "visibility");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4730:
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "authInterceptorProviders": () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 4120);



class AuthInterceptor {
  constructor(login) {
    this.login = login;
  }
  intercept(req, next) {
    // Add the jwt token (localstorage) request
    let authReq = req;
    const token = this.login.getToken();
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(authReq);
  }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
  return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthInterceptor,
  factory: AuthInterceptor.ɵfac
});
const authInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}];

/***/ }),

/***/ 4655:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CategoryService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  // get all category
  Categories() {
    return this.http.get(`${this.baseUrl}/category/`);
  }
  // add category
  addCategory(category) {
    return this.http.post(`${this.baseUrl}/category/`, category);
  }
  // get all quizzes
  getAllQuizzes() {
    return this.http.get(`${this.baseUrl}/quiz/`);
  }
  // /get single quiz by qid
  getQuiz(qid) {
    return this.http.get(`${this.baseUrl}/quiz/${qid}`);
  }
  // Add quiz
  addQuiz(quiz) {
    return this.http.post(`${this.baseUrl}/quiz/`, quiz);
  }
  // update quiz
  updateQuiz(quiz) {
    return this.http.put(`${this.baseUrl}/quiz/`, quiz);
  }
  // delete quiz
  deleteQuiz(qid) {
    return this.http.delete(`${this.baseUrl}/quiz/` + qid);
  }
  // Questions Api
  // get all questions
  getQuestionsOfQuiz(qid) {
    return this.http.get(`${this.baseUrl}/question/quiz/all/` + qid);
  }
  // get all questions
  getQuestionsOfQuizForTest(qid) {
    return this.http.get(`${this.baseUrl}/question/quiz/` + qid);
  }
  // add questions of quiz
  addQuestionOfQuiz(question) {
    return this.http.post(`${this.baseUrl}/question/`, question);
  }
  getQuestionById(quesid) {
    return this.http.get(`${this.baseUrl}/question/` + quesid);
  }
  // update question
  updateQuestion(question) {
    return this.http.put(`${this.baseUrl}/question/`, question);
  }
  deleteQuestion(quesId) {
    return this.http.delete(`${this.baseUrl}/question/` + quesId);
  }
  // Eval quiz
  evalQuiz(questions) {
    return this.http.post(`${this.baseUrl}/question/eval-quiz`, questions);
  }
  // get quizzes of category
  getQuizzesOfCategory(cid) {
    return this.http.get(`${this.baseUrl}/quiz/category/` + cid);
  }
  // get active quizzes
  getActiveQuizzes() {
    return this.http.get(`${this.baseUrl}/quiz/active`);
  }
  // get active quizzes of category
  getActiveQuizzesOfCategory(cid) {
    return this.http.get(`${this.baseUrl}/quiz/category/active/` + cid);
  }
  // add result with memberid
  addResult(result) {
    return this.http.post(`${this.baseUrl}/result/`, result);
  }
  getResultByMember(id) {
    return this.http.get(`${this.baseUrl}/result/member/` + id);
  }
  sendMail(mailData) {
    return this.http.post(`${this.baseUrl}/sendmail`, mailData);
  }
}
CategoryService.ɵfac = function CategoryService_Factory(t) {
  return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CategoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CategoryService,
  factory: CategoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5549:
/*!*********************************************!*\
  !*** ./src/app/services/courses.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesService": () => (/* binding */ CoursesService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class CoursesService {
  constructor(doc, http) {
    this.doc = doc;
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  // createLinkForCanonicalURL() {
  //   let link: HTMLLinkElement = this.doc.createElement('link');
  //   link.setAttribute('rel', 'canonical');
  //   this.doc.head.appendChild(link);
  //   link.setAttribute('href', this.doc.URL);
  // }
  addCourses(course) {
    return this.http.post(`${this.baseUrl}/course/`, course);
  }
  addCourse(data, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('courseData', JSON.stringify(data));
    // console.log(data, file);
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${this.baseUrl}/course/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getAllCourses() {
    return this.http.get(`${this.baseUrl}/course/`);
  }
  getCoursesById(id) {
    return this.http.get(`${this.baseUrl}/course/` + id);
  }
  // Course Lectures API
  // addCourseLectures(courseLecture:any){
  //   return this.http.post(`${this.baseUrl}/course-lectures/`, courseLecture);
  // }
  // getAllCourseLecturesOfCourses(id:any){
  //   return this.http.get(`${this.baseUrl}/course-lectures/courses/`+id);
  // }
  // getAllActiveCourseLectures(cid:any){
  //   return this.http.get(`${this.baseUrl}/course-lectures/courses/active/` + cid);
  // }
  // Couurse Videos API
  addCourseVideos(courseVideo) {
    return this.http.post(`${this.baseUrl}/course-videos/`, courseVideo);
  }
  addCourseVideo(data, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('courseData', JSON.stringify(data));
    // console.log(data, file);
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${this.baseUrl}/course-videos/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  updateCoursesStatus(id, status) {
    return this.http.put(`${this.baseUrl}/course/` + id, status);
  }
  getCourseVideoOfCourses(id) {
    return this.http.get(`${this.baseUrl}/course-videos/courses/` + id);
  }
  getAllCourseVideo() {
    return this.http.get(`${this.baseUrl}/course-videos/`);
  }
  getCourseVideoById(id) {
    return this.http.get(`${this.baseUrl}/course-videos/` + id);
  }
  updateCourseVideo(data, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('courseData', JSON.stringify(data));
    // console.log(data, file);
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${this.baseUrl}/course-videos/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  updateCourseVideoStatus(id, status) {
    return this.http.put(`${this.baseUrl}/course-videos/` + id, status);
  }
  // (courseVideo:any){
  //   return this.http.put(`${this.baseUrl}/course-videos/`,courseVideo);
  // }
  // for all active videos
  getAllActiveVideos() {
    return this.http.get(`${this.baseUrl}/course-videos/active/`);
  }
  getAllActiveCourseVideo(cid) {
    return this.http.get(`${this.baseUrl}/course-videos/courses/active/` + cid);
  }
  deleteCourse(cid) {
    return this.http.delete(`${this.baseUrl}/course/` + cid);
  }
  deleteCourseVideos(cid) {
    return this.http.delete(`${this.baseUrl}/course-videos/` + cid);
  }
  // for all active videos
  getAllActiveCourses() {
    return this.http.get(`${this.baseUrl}/course/active/`);
  }
  addBooks(data, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    // console.log(data, file);
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${this.baseUrl}/books/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  allBooks() {
    return this.http.get(`${this.baseUrl}/books/`);
  }
}
CoursesService.ɵfac = function CoursesService_Factory(t) {
  return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
CoursesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoursesService,
  factory: CoursesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class LoginService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  // generate token
  generateToken(logindata) {
    return this.http.post(`${this.baseUrl}/token`, logindata);
  }
  // Login user set token in local storage
  loginUser(token) {
    localStorage.setItem("token", token);
  }
  // get Current user details
  getCurrentUser() {
    return this.http.get(`${this.baseUrl}/current-user`);
  }
  isLoggedIn() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  // logout
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }
  // get user
  getToken() {
    return localStorage.getItem("token");
  }
  // set user detail
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }
  // get useer
  getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }
  // get user role
  getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6341:
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberService": () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




// import { LoginService } from './login.service';
class MemberService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
  }
  addMember(member) {
    return this.http.post(`${this.baseUrl}/user/`, member);
  }
  getAllMember() {
    return this.http.get(`${this.baseUrl}/user/`);
  }
  getMemberByEmail(email) {
    return this.http.get(`${this.baseUrl}/user/update/` + email);
  }
  updatePassword(userData) {
    return this.http.put(`${this.baseUrl}/user/update/password`, userData);
  }
  postFile(api, fileToUpload) {
    const endpoint = `https://sciaku.com/exam.ashx`;
    const formData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('apiid', api);
    return this.http.post(endpoint, formData);
  }
  updateProfile(userData) {
    return this.http.put(`${this.baseUrl}/user/update`, userData);
  }
  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/user/` + id);
  }
  imageUpload(data, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${this.baseUrl}/file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
}
MemberService.ɵfac = function MemberService_Factory(t) {
  return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
MemberService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MemberService,
  factory: MemberService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8257:
/*!******************************************!*\
  !*** ./src/app/services/meta.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaService": () => (/* binding */ MetaService)
/* harmony export */ });
/* harmony import */ var _model_meta_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/meta-tag */ 3349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const defaultMetadata = {
  title: 'App Title',
  description: 'App description',
  author: 'Daniil Baunov',
  keywords: ['Angular', 'meta tags', 'Angular Universal'],
  type: 'website'
};
class MetaService {
  constructor(_meta, metaTagService, titleService,
  // @Inject(HOST_URL) private hostUrl: string,
  router) {
    this._meta = _meta;
    this.metaTagService = metaTagService;
    this.titleService = titleService;
    this.router = router;
    this.urlMeta = "og:url";
    this.titleMeta = "og:title";
    this.descriptionMeta = "og:description";
    this.imageMeta = "og:image";
    this.secureImageMeta = "og:image:secure_url";
  }
  setFacebookTags(url, title, description, image) {
    var imageUrl = `https://sciaku.com/assets/images/courses/${image}`;
    var tags = [new _model_meta_tag__WEBPACK_IMPORTED_MODULE_0__.MetaTag(this.urlMeta, url), new _model_meta_tag__WEBPACK_IMPORTED_MODULE_0__.MetaTag(this.titleMeta, title), new _model_meta_tag__WEBPACK_IMPORTED_MODULE_0__.MetaTag(this.descriptionMeta, description), new _model_meta_tag__WEBPACK_IMPORTED_MODULE_0__.MetaTag(this.imageMeta, imageUrl), new _model_meta_tag__WEBPACK_IMPORTED_MODULE_0__.MetaTag(this.secureImageMeta, imageUrl)];
    this.setTags(tags);
  }
  setTags(tags) {
    tags.forEach(siteTag => {
      this._meta.updateTag({
        property: siteTag.name,
        content: siteTag.value
      });
    });
  }
}
MetaService.ɵfac = function MetaService_Factory(t) {
  return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
MetaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MetaService,
  factory: MetaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  // baseUrl : 'https://api.sciaku.com',
  imgUrl: 'https://sciaku.com/assets/images/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


function bootstrap() {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map