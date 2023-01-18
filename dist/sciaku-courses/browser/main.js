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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_client_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/client.guard */ 9649);
/* harmony import */ var _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/client/about/about.component */ 2838);
/* harmony import */ var _pages_client_about_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/client/about/resume/resume.component */ 8079);
/* harmony import */ var _pages_client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/client/client.component */ 6304);
/* harmony import */ var _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client/contact/contact.component */ 1433);
/* harmony import */ var _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/client/courses/course-details/course-details.component */ 9857);
/* harmony import */ var _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/client/courses/course-lecture/course-lecture.component */ 556);
/* harmony import */ var _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client/courses/courses.component */ 1511);
/* harmony import */ var _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/client/error/error.component */ 8846);
/* harmony import */ var _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/client/login/login.component */ 4021);
/* harmony import */ var _pages_client_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/client/profile/profile.component */ 9542);
/* harmony import */ var _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/client/signup/signup.component */ 9846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















const routes = [{
  path: '',
  component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_3__.ClientComponent,
  pathMatch: 'full'
}, {
  path: 'home',
  component: _pages_client_client_component__WEBPACK_IMPORTED_MODULE_3__.ClientComponent
}, {
  path: 'courses',
  component: _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__.CoursesComponent
}, {
  path: 'login',
  component: _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
}, {
  path: 'signup',
  component: _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__.SignupComponent
}, {
  path: 'about',
  component: _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'contact',
  component: _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent
}, {
  path: 'course-details/:title/:cid',
  component: _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_5__.CourseDetailsComponent
}, {
  path: 'myresume',
  component: _pages_client_about_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__.ResumeComponent
}, {
  path: 'course-lectures/:title/:cid/:id',
  component: _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_6__.CourseLectureComponent,
  canActivate: [_auth_client_guard__WEBPACK_IMPORTED_MODULE_0__.ClientGuard]
}, {
  path: 'profile',
  component: _pages_client_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent,
  canActivate: [_auth_client_guard__WEBPACK_IMPORTED_MODULE_0__.ClientGuard]
}, {
  path: '**',
  component: _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_8__.ErrorComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
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
  consts: [[3, "activate"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "router-outlet", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) {
        return ctx.onActivate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-footer");
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/youtube-player */ 2163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.interceptor */ 4730);
/* harmony import */ var _pages_client_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/client/profile/profile.component */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__.authInterceptorProviders],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__.YouTubePlayerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _master_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _master_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pages_client_client_component__WEBPACK_IMPORTED_MODULE_5__.ClientComponent, _pages_client_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _pages_client_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _pages_client_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__.CoursesComponent, _pages_client_courses_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_7__.CourseDetailsComponent, _pages_client_courses_course_lecture_course_lecture_component__WEBPACK_IMPORTED_MODULE_8__.CourseLectureComponent, _pages_client_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent, _pages_client_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _pages_client_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__.SignupComponent, _pages_client_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__.ProfileComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_13__.MaterialModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__.YouTubePlayerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 75,
  vars: 0,
  consts: [[1, "w3l-footer-29-main"], [1, "footer-29", "py-5"], [1, "container", "py-md-4"], [1, "row", "footer-top-29"], [1, "col-lg-4", "col-md-6", "col-sm-7", "footer-list-29", "footer-1", "pr-lg-5"], [1, "footer-title-29"], [1, "col-lg-3", "col-md-6", "col-sm-5", "col-6", "footer-list-29", "footer-2", "mt-sm-0", "mt-5"], ["routerLink", "/about"], ["routerLink", "/contact"], ["routerLink", "/myresume"], ["routerLink", "/courses"], [1, "col-lg-2", "col-md-6", "col-sm-5", "col-6", "footer-list-29", "footer-3", "mt-lg-0", "mt-5"], ["target", "_blank", "href", "https://www.youtube.com/@sciaku/"], ["target", "_blank", "rel", "noreferrer", "href", "https://www.instagram.com/sciaku_science_knowledge/"], ["rel", "noreferrer", "target", "_blank", "href", "https://www.facebook.com/gyan.prakash.7985/"], ["href", "https://www.linkedin.com/in/gyan-prakash-686740220/", "rel", "noreferrer", "target", "_blank"], [1, "col-lg-3", "col-md-6", "col-sm-7", "footer-list-29", "footer-1", "pr-lg-5"], [1, "my-2"], ["href", "tel:+91(81) 749 81805"], ["href", "mailto:info@sciaku.com"], [1, "main-social-footer-29", "mt-4"], ["href", "#facebook", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#twitter", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#instagram", 1, "instagram"], [1, "fa", "fa-instagram"], ["href", "#linkedin", 1, "linkedin"], [1, "fa", "fa-linkedin"], [1, "w3l-copyright", "text-center"], [1, "container"], [1, "copy-footer-29"], ["href", "https://aeromus-gyan.web.app/", "target", "_blank"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sciaku Education ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This website provides you a technical and programming content like Java Programming, Python Programming, C Programming, PHP Programming, Android Development, MEAN Stack, MERN Stack, Web Development, etc. Learn how to make software, website, and applications here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "ul")(11, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Abouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " My Resume ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Online Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11)(29, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Useful Links");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul")(32, "li")(33, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Youtube ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Linkedin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16)(48, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contact Info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Address : Lucknow, Uttar Pradesh, India");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Phone : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "+ 81 749 81805");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Email : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "info@sciaku.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20)(61, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 29)(70, "div", 30)(71, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00A9 2023 Sciaku. All rights reserved. Designed by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Gyan Prakash");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
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

/***/ 4439:
/*!***************************************!*\
  !*** ./src/app/model/member.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": () => (/* binding */ Member)
/* harmony export */ });
class Member {
  constructor(id, firstname, lastname, email, profile, contact, city, status) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.profile = profile;
    this.contact = contact;
    this.city = city;
    this.status = status;
  }
}

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 176,
  vars: 0,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], ["id", "about", 1, "home-services", "pt-lg-0"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "box-wrap"], [1, "box-wrap-grid"], [1, "icon"], [1, "fa", "fa-graduation-cap"], [1, "info"], [1, "mt-4"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mt-md-0", "mt-4"], [1, "fa", "fa-book"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mt-lg-0", "mt-4"], [1, "fa", "fa-trophy"], ["id", "about", 1, "w3l-aboutblock1", "py-5"], [1, "container", "py-lg-5", "py-md-4", "py-2"], [1, "col-lg-6", "align-self"], [1, "title-small", "mb-2"], [1, "title-big", "mx-0"], [1, "mt-lg-4", "mt-3"], [1, "mt-3", "mb-lg-5"], [1, "col-lg-6", "left-wthree-img", "mt-lg-0", "mt-sm-5", "mt-4"], ["src", "assets/images/about.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["id", "progress", 1, "w3l-servicesblock", "w3l-servicesblock1", "py-5"], [1, "col-lg-6", "align-self", "pr-lg-4"], [1, "progress-info", "info1"], [1, "progress-tittle"], [1, ""], [1, "progress"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "80%"], [1, "progress-info", "info2"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "95%"], [1, "progress-info", "info3"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "90%"], [1, "progress-info", "info4"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", 2, "width", "75%"], [1, "progress-info", "info2", "mb-0"], [1, "col-lg-6", "mt-lg-0", "mt-5", "pl-lg-4"], [1, "title-big"], [1, "mt-md-4", "mt-3"], ["routerLink", "/courses", 1, "btn", "btn-primary", "btn-style", "mt-md-5", "mt-4"], ["id", "", 1, "w3l-block", "py-5"], [1, "container", "py-lg-5", "py-md-3"], [1, "col-lg-6", "about-right-faq", "align-self"], [1, "mt-lg-4", "mt-3", "mb-lg-5", "mb-4"], [1, "two-grids", "mt-md-0", "mt-md-5", "mt-4"], [1, "grids_info"], [1, "col-lg-3", "col-6", "left-wthree-img", "mt-lg-0", "mt-sm-5", "mt-4"], ["src", "assets/images/about1.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["src", "assets/images/about2.jpg", "alt", "", 1, "img-fluid", "radius-image"], ["id", "stats", 1, "w3l-stats", "py-5"], [1, "gallery-inner", "container", "py-lg-5", "py-md-4"], [1, "title-small", "text-center", "mb-1"], [1, "title-big", "text-center", "mb-5"], [1, "row", "stats-con"], [1, "col-md-3", "col-6", "stats_info", "counter_grid"], [1, "counter"], [1, "plus"], [1, "col-md-3", "col-6", "stats_info", "counter_grid1"], [1, "col-md-3", "col-6", "stats_info", "counter_grid", "mt-md-0", "mt-4"], [1, "col-md-3", "col-6", "stats_info", "counter_grid2", "mt-md-0", "mt-4"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15)(17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4")(20, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mission");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "If you are looking for high-quality and reliable online courses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17)(25, "div", 11)(26, "div", 12)(27, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15)(30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Our");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4")(33, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "If you are looking for high-quality and reliable online courses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19)(38, "div", 11)(39, "div", 12)(40, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15)(43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Our");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4")(46, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Goal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "If you are looking for high-quality and reliable online courses.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 21)(51, "div", 22)(52, "div", 9)(53, "div", 23)(54, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Welcome to the Coursing - all available online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "This website provides you a technical and programming content like Java Programming, Python Programming, C Programming, PHP Programming, Android Development, MEAN Stack, MERN Stack, Web Development, etc. Learn how to make software, website, and applications here. Best Video Courses in HINDI and English, These Paid courses are totally free of cost. Many people learn from these courses daily for free. Our effort is to make you learn the technology free of cost.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section", 30)(65, "div", 22)(66, "div", 9)(67, "div", 31)(68, "div", 32)(69, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Figma illustrations ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37)(76, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PHP programming ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "95%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39)(83, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Web design & development ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "90%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41)(90, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Adobe Photoshop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "75%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43)(97, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Wordpress design ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "95%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 44)(104, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Progress bars");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " What you have in our Popular Online Courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "This website provides you a technical and programming content like Java Programming, Python Programming, C Programming, PHP Programming, Android Development, MEAN Stack, MERN Stack, Web Development, etc. Learn how to make software, website, and applications here. Best Video Courses in HINDI and English, These Paid courses are totally free of cost. Many people learn from these courses daily for free. Our effort is to make you learn the technology free of cost.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Get started now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "section", 48)(113, "div", 49)(114, "div", 9)(115, "div", 50)(116, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Start online course");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Enhance your skills with best online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "This website provides you a technical and programming content like Java Programming, Python Programming, C Programming, PHP Programming, Android Development, MEAN Stack, MERN Stack, Web Development, etc. Learn how to make software, website, and applications here. Best Video Courses in HINDI and English, These Paid courses are totally free of cost. Many people learn from these courses daily for free. Our effort is to make you learn the technology free of cost.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 52)(123, "div", 53)(124, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Global Certificate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Get Valuable Certificate which is Accepted In Industry.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 53)(129, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Books and library");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "All types of E-Books, Notes and PDF's are available here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "section", 57)(138, "div", 58)(139, "span", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Our Achievements");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Our progress never Ends");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61)(144, "div", 62)(145, "p", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "100 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Students Enrolled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 65)(153, "p", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Courses Uploaded");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 66)(161, "p", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "13");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Certified students");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 67)(169, "p", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "10 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Global Teachers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8079:
/*!***************************************************************!*\
  !*** ./src/app/pages/client/about/resume/resume.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ResumeComponent {}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
  return new (t || ResumeComponent)();
};
ResumeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ResumeComponent,
  selectors: [["app-resume"]],
  decls: 10,
  vars: 0,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], [1, "text-11", "pb-5"], [1, "text11", "py-lg-5", "py-md-4"], [1, "container"], ["src", "https://docs.google.com/document/d/e/2PACX-1vSvf2-Sn_y_s2ljPAURWD0-toJGiIsSjqLAAdIn-_YWibHB6U8lWdDe_uWt-SvW194oHIAgF3HahnzL/pub?embedded=true", 1, "resume", "align-content-center"]],
  template: function ResumeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".resume[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180vh;\n}\n\n@media screen and (max-width: 600px) {\n  .resume[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50L2Fib3V0L3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0k7SUFDSSxlQUFBO0VBRU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwdmg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLnJlc3VtZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 71)(8, "div", 72)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 73)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 77)(25, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " 20 hrs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 80);
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
  decls: 194,
  vars: 1,
  consts: [["id", "home", 1, "w3l-main-slider"], [1, "companies20-content"], [1, "owl-one", "owl-carousel", "owl-theme"], [1, "item"], [1, "slider-info", "banner-view", "bg", "bg2"], [1, "banner-info"], [1, "container"], [1, "banner-info-bg"], [1, "mt-4", "pr-lg-4"], ["routerLink", "/courses", 1, "btn", "btn-style", "btn-primary", "mt-sm-5", "mt-4", "mr-2"], [1, "slider-info", "banner-view", "banner-top1", "bg", "bg2"], [1, "slider-info", "banner-view", "banner-top2", "bg", "bg2"], [1, "slider-info", "banner-view", "banner-top3", "bg", "bg2"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], [1, "w3l-courses"], ["id", "courses", 1, "blog", "pb-5"], [1, "container", "py-lg-5", "py-md-4", "py-2"], [1, "title-small", "text-center", "mb-1"], [1, "title-big", "text-center", "mb-sm-5", "mb-4"], [1, "row"], ["class", "col-lg-4 col-md-6 item mt-md-0 mt-5 pt-lg-2", 4, "ngFor", "ngForOf"], [1, "mt-5", "text-more"], [1, "pt-md-3", "sample", "text-center"], ["routerLink", "/courses"], [1, "pl-2", "fa", "fa-long-arrow-right"], ["id", "facilities", 1, "w3l-features", "py-5"], [1, "call-w3", "py-lg-5", "py-md-4", "py-2"], [1, "row", "main-cont-wthree-2"], [1, "col-lg-5", "feature-grid-left"], [1, "title-small", "mb-1"], [1, "title-big", "mb-4"], [1, "text-para"], [1, "mt-3"], ["routerLink", "/certificate", 1, "btn", "btn-primary", "btn-style", "mt-md-5", "mt-4"], [1, "col-lg-7", "feature-grid-right", "mt-lg-0", "mt-5"], [1, "call-grids-w3", "d-grid"], [1, "grids-1", "box-wrap"], ["routerLink", "/certificate", 1, "icon"], [1, "fa", "fa-certificate"], ["routerLink", "/certificate", 1, "title-head"], ["routerLink", "#more", 1, "icon"], [1, "fa", "fa-book"], ["routerLink", "#feature", 1, "title-head"], [1, "middle", "py-5"], [1, "welcome-left", "text-center", "py-lg-4"], [1, "title-big"], ["routerLink", "/courses", 1, "btn", "btn-style", "btn-outline-light", "mt-sm-5", "mt-4", "mr-2"], ["routerLink", "/contact", 1, "btn", "btn-style", "btn-primary", "mt-sm-5", "mt-4"], ["id", "clients", 1, "w3l-testimonials"], [1, "cusrtomer-layout", "py-5"], [1, "container", "py-lg-4", "py-md-3", "pb-lg-0"], [1, "testimonial-width"], ["id", "owl-demo1", 1, "owl-two", "owl-carousel", "owl-theme"], [1, "testimonial-content"], [1, "testimonial"], [1, "testi-des"], [1, "test-img"], ["src", "assets/images/team1.jpg", "alt", "client-img", 1, "img-fluid"], [1, "peopl", "align-self"], [1, "indentity"], ["src", "assets/images/team2.jpg", "alt", "client-img", 1, "img-fluid"], ["src", "assets/images/team3.jpg", "alt", "client-img", 1, "img-fluid"], ["src", "assets/images/team4.jpg", "alt", "client-img", 1, "img-fluid"], [1, "col-lg-4", "col-md-6", "item", "mt-md-0", "mt-5", "pt-lg-2"], [1, "card"], [1, "card-header", "p-0", "position-relative"], [1, "zoom", "d-block", 3, "routerLink"], ["alt", "Card image cap", 1, "card-img-bottom", "d-block", 3, "src"], [1, "course-price-badge"], [1, "card-body", "course-details"], [1, "price-review", "d-flex", "justify-content-between", "mb-1align-items-center"], [1, "rating-star"], [1, "fa", "fa-star"], [1, "fa", "fa-star-o"], [1, "course-desc", 3, "routerLink"], [1, "course-meta", "mt-4"], [1, "meta-item", "course-lesson"], [1, "fa", "fa-clock-o"], [1, "meta-value"], [1, "meta-item", "course-"], [1, "fa", "fa-user-o"]],
  template: function ClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "li")(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "100% Discount on all Popular Courses");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Join our free Courses Now");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Get Valuable Certificate which is Accepted In Industry.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 38)(97, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "h4")(100, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Books & Library");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "All types of E-Books, Notes and PDF's are available here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 45)(105, "div", 18)(106, "div", 46)(107, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Start learning online");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "h3", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Enhance your skills with best online courses");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Get started now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "section", 50)(116, "div", 51)(117, "div", 52)(118, "h5", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Testimonials");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h3", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Happy Students & Feedbacks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 53)(123, "div", 54)(124, "div", 3)(125, "div", 55)(126, "div", 56)(127, "blockquote")(128, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "The course is very easy to follow and has helped me get my portfolio site u...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 57)(131, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 60)(134, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Kartik Shetye");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 3)(139, "div", 55)(140, "div", 56)(141, "blockquote")(142, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "I am a web designer and have been looking for a course to help me with my s...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 57)(145, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 60)(148, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Chandresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "p", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 3)(153, "div", 55)(154, "div", 56)(155, "blockquote")(156, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Full Stack Development is the best training program I've ever had. As someo...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 57)(159, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 60)(162, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Pooja Singh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "p", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 3)(167, "div", 55)(168, "div", 56)(169, "blockquote")(170, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "This DSA free course is very ossume abdul bari dsa course is so good...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 57)(173, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 60)(176, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Harsh Pandey");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "p", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 3)(181, "div", 55)(182, "div", 56)(183, "blockquote")(184, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "C Programming course is very good basic to advanced level learning...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 57)(187, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 60)(190, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Shashi Singh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "p", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Student");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
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
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class ContactComponent {
  constructor(snack) {
    this.snack = snack;
    this.message = '';
  }
  onSend() {
    this.message = "Query is sends to our support team!!";
    this.snack.open(this.message, 'Close', {
      duration: 5000
    });
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 60,
  vars: 0,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "waveWrapper", "waveAnimation"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none"], ["d", "M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none"], ["id", "contact", 1, "w3l-contact-1", "pb-5"], [1, "contacts-9", "py-lg-5", "py-md-4"], [1, "container"], [1, "d-grid", "contact-view"], [1, "cont-details"], [1, "title-small"], [1, "title-big", "mb-4"], [1, "mb-sm-5", "mb-4"], [1, "cont-top"], [1, "cont-left", "text-center"], [1, "fa", "fa-map-marker", "text-primary"], [1, "cont-right"], [1, "pr-lg-5"], [1, "cont-top", "margin-up"], [1, "fa", "fa-phone", "text-primary"], ["href", "tel:+(91) 817 498 1805"], [1, "fa", "fa-envelope-o", "text-primary"], ["href", "mailto:info@sciaku.com", 1, "mail"], [1, "map-content-9"], [1, "mb-sm-4", "mb-3"], ["action", "https://sendmail.w3layouts.com/submitForm", "method", "post"], [1, "twice-two"], ["type", "text", "name", "w3lName", "id", "w3lName", "placeholder", "Name", "required", "", 1, "form-control"], ["type", "email", "name", "w3lSender", "id", "w3lSender", "placeholder", "Email", "required", "", 1, "form-control"], [1, "twice"], ["type", "text", "name", "w3lSubject", "id", "w3lSubject", "placeholder", "Subject", "required", "", 1, "form-control"], ["name", "w3lMessage", "id", "w3lMessage", "placeholder", "Message", "required", "", 1, "form-control"], [1, "text-right"], ["type", "submit", 1, "btn", "btn-primary", "btn-style", "mt-4", 3, "click"], [1, "map-iframe"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14221.47388293077!2d80.9318324!3d26.9868915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1673712472642!5m2!1sen!2sin", "width", "100%", "height", "400", "frameborder", "0", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0px"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Feel free to contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Learn with our free courses, We guarantee that you\u2019ll be able to have any issue resolved within 24 hours.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18)(23, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Our head office address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address here, Lucknow, Uttar Pradesh, India");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20)(28, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Call for help ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p")(34, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+(91) 817 498 1805");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20)(37, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18)(40, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact with our support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p")(43, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "info@sciaku.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25)(46, "h5", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Write to us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 27)(49, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 29)(51, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34)(56, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_56_listener() {
        return ctx.onSend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "iframe", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
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











function CourseDetailsComponent_mat_accordion_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-accordion", 45)(1, "mat-expansion-panel", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function CourseDetailsComponent_mat_accordion_15_Template_mat_expansion_panel_opened_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.panelOpenState = true);
    })("closed", function CourseDetailsComponent_mat_accordion_15_Template_mat_expansion_panel_closed_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 47)(8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 50)(11, "mat-card-header")(12, "mat-card-title", 51)(13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-card-actions")(16, "div", 43)(17, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Watch Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Lec:- ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r1.v_title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
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
  decls: 95,
  vars: 5,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "text-11", "pb-5"], [1, "text11", "py-lg-5", "py-md-4"], [1, "container"], ["alt", "", 1, "img-fluid", "radius-image", 3, "src"], [1, "text11-content"], [1, ""], [1, "my-3"], [1, "ml10", 3, "innerHtml"], [1, "example-card"], ["style", "margin-bottom:10px", 4, "ngFor", "ngForOf"], [1, "social-share-blog", "mt-md-5", "mt-4"], [1, "column3", "social", "m-0", "p-0"], [1, "m-0", "mr-4"], [1, "facebook"], [1, "fa", "fa-facebook"], [1, "twitter"], [1, "fa", "fa-twitter"], [1, "instagram"], [1, "fa", "fa-instagram"], [1, "linkedin"], [1, "fa", "fa-linkedin"], [1, "comments"], [1, "aside-title"], [1, "comments-grids"], [1, "media-grid"], [1, "media"], [1, "comment-img"], ["src", "assets/images/team1.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media-body", "comments-grid-right"], [1, "p-0", "comment"], ["src", "assets/images/team2.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media", "mt-4", "mb-0", "border-0", "px-0"], ["src", "assets/images/team3.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], ["id", "comment", 1, "leave-comment-form"], [1, "input-grids"], [1, "form-group"], ["type", "text", "name", "Name", "placeholder", "Your Name", "required", "", 1, "form-control"], ["type", "email", "name", "Email", "placeholder", "Email", "required", "", 1, "form-control"], ["name", "Comment", "placeholder", "Your Comment", "required", "", 1, "form-control"], [1, "submit", "text-right", "mt-4"], [1, "btn", "btn-style", "btn-primary"], [2, "margin-bottom", "10px"], [3, "opened", "closed"], [1, "row"], [1, "col-md-3", "left"], ["mat-card-image", "", 3, "src", "alt"], [1, "col-md-9"], [1, "title"], [1, "btn", "btn-style", "btn-primary", 3, "routerLink"]],
  template: function CourseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 4)(6, "div", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "h4", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-card", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CourseDetailsComponent_mat_accordion_15_Template, 19, 8, "mat-accordion", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "ul", 15)(18, "li")(19, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Share this post :");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li")(22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li")(25, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li")(28, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li")(31, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 25)(34, "h3", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Recent comments(2)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 27)(37, "div", 28)(38, "div", 29)(39, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 32)(42, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ul", 33)(45, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Oct 29th, 2022 at 11:00 am");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li")(48, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 28)(53, "div", 29)(54, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 32)(57, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Charlie");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul", 33)(60, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Oct 29th, 2022 at 05:45 pm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "li")(63, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus eu nec purus quis tempor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 35)(68, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 32)(71, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "ul", 33)(74, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Oct 30th, 2022 at 04:00 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "li")(77, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 37)(82, "h3", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Leave a reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "form")(85, "div", 38)(86, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "textarea", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 43)(93, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Post Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.course[0].courses.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "a", 49);
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
  decls: 104,
  vars: 4,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], [1, "text-11", "pb-5"], [1, "text11", "py-lg-5", "py-md-4"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "embed-responsive", "embed-responsive-16by9"], ["autoplay", "", "suggestedQuality", "hd720", 1, "embed-responsive-item", 3, "videoId"], [1, "col-md-4", "col-sm-12", "right"], [1, "text-center", "list", "title"], ["matCardContent", "", 4, "ngFor", "ngForOf"], [1, "text11-content"], [1, ""], [1, "my-3", 3, "innerHtml"], [1, "social-share-blog", "mt-md-5", "mt-4"], [1, "column3", "social", "m-0", "p-0"], [1, "m-0", "mr-4"], [1, "facebook"], [1, "fa", "fa-facebook"], [1, "twitter"], [1, "fa", "fa-twitter"], [1, "instagram"], [1, "fa", "fa-instagram"], [1, "linkedin"], [1, "fa", "fa-linkedin"], [1, "comments"], [1, "aside-title"], [1, "comments-grids"], [1, "media-grid"], [1, "media"], [1, "comment-img"], ["src", "assets/images/team1.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media-body", "comments-grid-right"], [1, "p-0", "comment"], ["src", "assets/images/team2.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], [1, "media", "mt-4", "mb-0", "border-0", "px-0"], ["src", "assets/images/team3.jpg", "width", "100px", "alt", "placeholder image", 1, "img-responsive"], ["id", "comment", 1, "leave-comment-form"], [1, "input-grids"], [1, "form-group"], ["type", "text", "name", "Name", "placeholder", "Your Name", "required", "", 1, "form-control"], ["type", "email", "name", "Email", "placeholder", "Email", "required", "", 1, "form-control"], ["name", "Comment", "placeholder", "Your Comment", "required", "", 1, "form-control"], [1, "submit", "text-right", "mt-4"], [1, "btn", "btn-style", "btn-primary"], ["matCardContent", ""], ["mat-list-item", "", 1, "list", 3, "id", "name", "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Oct 29th, 2022 at 11:00 am");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li")(57, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 31)(62, "div", 32)(63, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 35)(66, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Charlie");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "ul", 36)(69, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Oct 29th, 2022 at 05:45 pm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "li")(72, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus eu nec purus quis tempor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 38)(77, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 35)(80, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Jack Harry");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "ul", 36)(83, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Oct 30th, 2022 at 04:00 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "li")(86, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. dolor set.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 40)(91, "h3", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Leave a reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "form")(94, "div", 41)(95, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "textarea", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 46)(102, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Post Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
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
  styles: [".embed-responsive[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive.embed-responsive-16by9[_ngcontent-%COMP%] {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-item[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 550px;\n  height: 550px;\n  overflow-x: visible;\n  overflow-y: scroll;\n}\n\n.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.right[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-action-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #a4a5a8;\n}\n\nmat-card[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px; \n}\n\nmat-card[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #FE79A2; \n  border-radius: 20px; \n  border: 3px solid #FE79A2; \n}\n\n.list[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n@media screen and (max-width: 600px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .right[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50L2NvdXJzZXMvY291cnNlLWxlY3R1cmUvY291cnNlLWxlY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFJSjs7QUFGRTtFQUNFLFVBQUEsRUFBQSxrQ0FBQTtBQUtKOztBQUNFO0VBQ0UseUJBQUEsRUFBQSw4QkFBQTtFQUNBLG1CQUFBLEVBQUEsa0NBQUE7RUFDQSx5QkFBQSxFQUFBLHdDQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0FBR0o7O0FBQUU7RUFDRTtJQUNFLGdCQUFBO0VBR0o7RUFERTtJQUNFLGdCQUFBO0VBR0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lbWJlZC1yZXNwb25zaXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmVtYmVkLXJlc3BvbnNpdmUuZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gIH1cclxuICBcclxuICAuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLnJpZ2h0IG1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlOyBcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiAgLnJpZ2h0IG1hdC1jYXJkIG1hdC1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5yaWdodCBtYXQtY2FyZCBtYXQtYWN0aW9uLWxpc3QgZGl2OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E0YTVhODtcclxuICB9XHJcbiAgbWF0LWNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7ICAgICAgICAgICAgICAgLyogd2lkdGggb2YgdGhlIGVudGlyZSBzY3JvbGxiYXIgKi9cclxuICB9XHJcbiAgbWF0LWNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTsgICAgICAgIC8qIGNvbG9yIG9mIHRoZSB0cmFja2luZyBhcmVhICovXHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU3OUEyOyAgICAvKiBjb2xvciBvZiB0aGUgc2Nyb2xsIHRodW1iICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICAvKiByb3VuZG5lc3Mgb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0ZFNzlBMjsgIC8qIGNyZWF0ZXMgcGFkZGluZyBhcm91bmQgc2Nyb2xsIHRodW1iICovXHJcbiAgfVxyXG4gIC5saXN0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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

/***/ 9542:
/*!***********************************************************!*\
  !*** ./src/app/pages/client/profile/profile.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_model_member_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/member.model */ 4439);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/member.service */ 6341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
















function ProfileComponent_mat_card_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-card-content")(2, "div", 8)(3, "div", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13)(9, "div", 14)(10, "table", 15)(11, "tr")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Userid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tr")(27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr")(32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tr")(37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "tr")(42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "td")(45, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-card-actions")(48, "div", 17)(49, "div", 13)(50, "div", 18)(51, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_mat_card_5_div_1_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onEdit(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.user.firstname, " ", ctx_r1.user.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.authorities[0].authority);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.user.status ? "Active" : "Inactive");
  }
}
function ProfileComponent_mat_card_5_div_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_mat_card_5_div_2_div_54_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r5.imgUpload, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r5.selectedFiles);
  }
}
const _c0 = function (a0) {
  return {
    width: a0
  };
};
function ProfileComponent_mat_card_5_div_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r7.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-valuenow", ctx_r7.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.progress, "% ");
  }
}
function ProfileComponent_mat_card_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "section", 20)(2, "div", 21)(3, "div", 9)(4, "div", 22)(5, "div", 23)(6, "form")(7, "div", 13)(8, "div", 24)(9, "mat-form-field", 25)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_card_5_div_2_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.user.firstname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "firstname is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 24)(18, "mat-form-field", 25)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_card_5_div_2_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.user.lastname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Lastname is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 24)(27, "mat-form-field", 25)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_card_5_div_2_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.user.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 24)(36, "mat-form-field", 25)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_card_5_div_2_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.user.contact = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Phone Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 24)(45, "mat-form-field", 25)(46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProfileComponent_mat_card_5_div_2_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.user.city = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ProfileComponent_mat_card_5_div_2_div_54_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Browse image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfileComponent_mat_card_5_div_2_Template_input_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, ProfileComponent_mat_card_5_div_2_div_61_Template, 3, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-card-actions")(65, "div", 17)(66, "div", 13)(67, "div", 38)(68, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_mat_card_5_div_2_Template_button_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.updateUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 40)(71, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_mat_card_5_div_2_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.onEdit(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Back to Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.user.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.user.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.user.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.user.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.imgUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.currentFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function ProfileComponent_mat_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_mat_card_5_div_1_Template, 53, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProfileComponent_mat_card_5_div_2_Template, 73, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.editMode);
  }
}
// import * as uuid from 'uuid';
class ProfileComponent {
  constructor(http, login, snackbar, sanitizer, _member) {
    this.http = http;
    this.login = login;
    this.snackbar = snackbar;
    this.sanitizer = sanitizer;
    this._member = _member;
    this.imageData = {
      url: ''
    };
    this.editMode = true;
    this.Uurl = '';
    this.user = {
      authorities: [{
        authority: ''
      }]
    };
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
    this.member = new src_app_model_member_model__WEBPACK_IMPORTED_MODULE_0__.Member(0, '', '', '', '', '', '', true);
    this.selectedFiles = FileList;
    this.currentFile = File;
    this.progress = 0;
    this.message = '';
    this.URL = '';
    this.imgUpload = "";
  }
  ngOnInit() {
    this.fetchUser();
  }
  onEdit(id) {
    if (id == 1) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }
  loadImage() {
    return this.http.get(this.URL, {
      responseType: "blob"
    });
  }
  fetchUser() {
    this.login.getCurrentUser().subscribe(data => {
      this.user = data;
      this.URL = this.baseUrl + "/file/files/" + this.user.profile;
      // this.URL = "http://localhost:8080/file/files/" + this.user.profile;
      this.loadImage().subscribe(i => {
        this.image = i;
        this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
      });
    }, error => {
      console.log(error);
      this.snackbar.open('Server Error !!', 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    });
  }
  onFileSelected(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFiles[0]);
      reader.onload = e => {
        this.imgUpload = e.target.result;
      };
    }
  }
  upload() {
    this.progress = 0;
    // this.imageData.url = this.Uurl;
    this.currentFile = this.selectedFiles.item(0);
    if (this.currentFile.size <= 1097152) {
      this._member.imageUpload(this.imageData, this.currentFile).subscribe(event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
          this.message = event.body.message;
        }
      }, err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
      this.selectedFiles = undefined;
    } else {
      this.snackbar.open("Please Upload the Image Under 1MB", 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    }
  }
  updateUser() {
    this.member.id = this.user.id;
    this.member.firstname = this.user.firstname;
    this.member.lastname = this.user.lastname;
    this.member.email = this.user.email;
    this.member.contact = this.user.contact;
    this.member.city = this.user.city;
    this.member.status = this.user.status;
    this.member.profile = this.Uurl;
    return;
    this._member.updateProfile(this.member).subscribe(res => {
      this.snackbar.open("Profile is updated succesfully!!", 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      this.editMode = true;
      this.fetchUser();
    }, err => {
      this.snackbar.open("Profile is not updated!!", 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    });
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_member_service__WEBPACK_IMPORTED_MODULE_3__.MemberService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 6,
  vars: 1,
  consts: [[1, "w3l-breadcrumb"], [1, "breadcrumb-bg", "breadcrumb-bg-about", "py-5"], [1, "container", "pt-lg-5", "pt-3", "p-lg-4", "pb-3"], [1, "title", "mt-5", "pt-lg-5", "pt-sm-3"], ["class", "p20", 4, "ngIf"], [1, "p20"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "bootstrap-wrapper"], [1, "container"], [1, "container", "text-center", "image"], ["alt", "", "accept", "image/*", 1, "profile-image", 3, "src"], [1, "mt20", "text-capitalize"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "table"], [1, "status"], [1, "container", "w100"], [1, "col-md-2", "offset-md-5"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["id", "contact", 1, "w3l-loginblock", "pb-5"], [1, "contacts-9", "pb-lg-5", "pb-md-4"], [1, "top-map"], [1, "map-content-9"], [1, "col-md-6"], ["appearance", "outline", 1, "full-width"], ["type", "firstname", "name", "firstname", "matInput", "", "placeholder", "Enter here", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["type", "lastname", "name", "lastname", "matInput", "", "placeholder", "Enter here", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "matInput", "", "placeholder", "Enter here", 3, "ngModel", "ngModelChange"], ["type", "contact", "name", "contact", "matInput", "", "placeholder", "Enter here", 3, "ngModel", "ngModelChange"], ["type", "city", "name", "city", "matInput", "", "placeholder", "Enter here", 3, "ngModel", "ngModelChange"], ["for", "image", 1, "upload"], ["src", "./../../../assets/images/sciaku-upload.png", "alt", ""], ["id", "image", "multiple", "", "type", "file", "value", "select", 3, "change"], ["selectFile", ""], ["class", "progress", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-light"], [1, "col-md-1", "offset-md-4"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "col-md-2"], ["mat-raised-button", "", "color", "accent", 1, "ml10", 3, "click"], [1, "upload"], ["alt", "", 3, "src"], ["mat-button", "", 3, "disabled", "click"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Your Profile Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProfileComponent_mat_card_5_Template, 3, 2, "mat-card", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatPrefix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm],
  styles: [".status[_ngcontent-%COMP%] {\n  background-color: green;\n  color: #fff;\n  border-radius: 50%;\n}\n\n#image[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.image[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 20px 20px 0;\n  \n  \n  \n}\n\n.profile-image[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 150px;\n  border-radius: 55%;\n  border: #3f51b5 3px solid;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: #8a8889 0.5px solid;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFBZSxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQix5QkFBQTtBQVF4RTs7QUFOQTtFQUFPLFdBQUE7QUFVUDs7QUFSQTtFQUFhLGtCQUFBO0VBQW9CLDJCQUFBO0FBYWpDIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuI2ltYWdle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuLmltYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi51cGxvYWQgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIC8qIHRvcDogNzZweDsgKi9cclxuICAgIC8qIGxlZnQ6IDU4NnB4OyAqL1xyXG59XHJcbi5wcm9maWxlLWltYWdle21heC1oZWlnaHQ6IDEwMHB4OyBtYXgtd2lkdGg6IDE1MHB4OyBib3JkZXItcmFkaXVzOiA1NSU7IGJvcmRlcjojM2Y1MWI1IDNweCBzb2xpZDt9XHJcblxyXG4udGFibGV7d2lkdGg6IDEwMCU7ICB9XHJcblxyXG4udGFibGUgdHIgdGR7cGFkZGluZzogMTBweCAyMHB4OyBib3JkZXI6ICM4YTg4ODkgLjVweCBzb2xpZDt9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
  // baseUrl : 'http://localhost:8080',
  baseUrl: 'https://api.sciaku.com',
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