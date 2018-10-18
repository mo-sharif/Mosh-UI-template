(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/comingsoon/comingsoon.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/comingsoon/comingsoon.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- comin-soon section -->\n<section class=\"authentication-form coming-soon\">\n  <div class=\"innerpage-decor\">\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-6 offset-xl-3\">\n        <div class=\"fadeInLeft-land-caption text-center\">\n          <div class=\"\">\n            <div>\n              <img src=\"assets/images/logoimage.png\" alt=\"caption-img\" class=\"caption-img\">\n              <div class=\"clock-box\">\n                <h3>We Are Coming soon</h3>\n                <p>Please check back again within Some Days as We're Pretty Close</p>\n                <ul class=\"p-0 m-0\">\n                  <li><span id=\"days\"></span>days</li>\n                  <li><span id=\"hours\"></span>Hours</li>\n                  <li><span id=\"minutes\"></span>Minutes</li>\n                  <li><span id=\"seconds\"></span>Seconds</li>\n                </ul>\n              </div>\n              <a href=\"#\"><img src=\"assets/images/appstore.png\" alt=\"appstore\" class=\"store\"></a>\n              <a href=\"#\"><img class=\"ml-4 store\" src=\"assets/images/play-store.png\" alt=\"play-store\"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- comin-soon section end -->\n<section class=\"coming-soon md-pt-0\" data-anchor=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"footer-text\">\n          <img src=\"assets/images/email.png\" alt=\"email\">\n          <h2 class=\"title text-center md-margin-top\">subscribe to <span>newsletter</span></h2>\n          <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>\n          <form class=\"footer-form\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"enter your email\">\n            </div>\n            <div class=\"form-button\">\n              <button type=\"submit\" class=\"btn btn-custom theme-color\">send</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/comingsoon/comingsoon.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/comingsoon/comingsoon.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/comingsoon/comingsoon.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/comingsoon/comingsoon.component.ts ***!
  \**********************************************************/
/*! exports provided: ComingsoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonComponent", function() { return ComingsoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComingsoonComponent = /** @class */ (function () {
    function ComingsoonComponent() {
    }
    ComingsoonComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/timer.js');
    };
    ComingsoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comingsoon',
            template: __webpack_require__(/*! ./comingsoon.component.html */ "./src/app/pages/comingsoon/comingsoon.component.html"),
            styles: [__webpack_require__(/*! ./comingsoon.component.scss */ "./src/app/pages/comingsoon/comingsoon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComingsoonComponent);
    return ComingsoonComponent;
}());



/***/ }),

/***/ "./src/app/pages/download/download.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/download/download.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Download -->\n<section class=\"authentication-form download\">\n  <div class=\"innerpage-decor\">\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"text-center\">\n          <img src=\"assets/images/down.png\" class=\"img-fluid downlod-img\" alt=\"\">\n          <div class=\"col-lg-8 offset-lg-2\">\n            <h2>Your download should begin automatically</h2>\n          </div>\n          <h3>If it doesn’t start automatically, <a href=\"#\" class=\"manual-down\">please click here to downlaod manually.</a></h3>\n        </div>\n      </div>\n    </div>\n    <!-- copy-right-section -->\n    <footer class=\"bg-light\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"copyright-section\">\n              <p>2018-19 Copyright &copy; By Themeforest Powered By Pixel Strap</p>\n            </div>\n            <div class=\"form-button text-center\">\n              <a [routerLink]=\"'/demo'\" class=\"btn btn-custom btn-lg theme-color btn-back\"><i class=\"fa fa-angle-double-left mr-2\"></i>Back to home</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>\n    <!--end copy right section-->\n  </div>\n</section>\n<!-- Download end -->\n"

/***/ }),

/***/ "./src/app/pages/download/download.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/download/download.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/download/download.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/download/download.component.ts ***!
  \******************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadComponent = /** @class */ (function () {
    function DownloadComponent() {
    }
    DownloadComponent.prototype.ngOnInit = function () {
    };
    DownloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/pages/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.scss */ "./src/app/pages/download/download.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/pages/email-template/email-template.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/email-template/email-template.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: 'Roboto Condensed', sans-serif; margin: 20px;\">\n  <div class=\"email\">\n    <img class=\"logo\" src=\"assets/images/logo.png\" width=\"200\">\n    <div class=\"white-container\">\n      <div class=\"white-container\">\n        <h2>Thank You</h2>\n        <h3> Your Inquiry is received, we will respond you soon. For any other queries please email at  <strong>support@test.com</strong></h3>\n      </div>\n    </div>\n    <div class=\"footer\">\n      <div class=\"social-media\">\n        <a [routerLink]=\"'/demo'\"><img class=\"sm\" src=\"https://themes.pixelstrap.com/mosh/main/assets/images/email/facebook-email.png\"></a>\n        <a [routerLink]=\"'/demo'\"><img class=\"sm\" src=\"https://themes.pixelstrap.com/mosh/main/assets/images/email/twitter-email.png\"></a>\n        <a [routerLink]=\"'/demo'\"><img class=\"sm\" src=\"https://themes.pixelstrap.com/mosh/main/assets/images/email/instagram-email.png\"></a>\n        <a [routerLink]=\"'/demo'\"><img class=\"sm\" src=\"https://themes.pixelstrap.com/mosh/main/assets/images/email/google.png\"></a>\n        <a [routerLink]=\"'/demo'\"><img class=\"sm\" src=\"https://themes.pixelstrap.com/mosh/main/assets/images/email/feed.png\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/email-template/email-template.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/email-template/email-template.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #18e7d3; }\n\n.email {\n  text-align: center;\n  margin: 0 auto;\n  background-color: #ffffff;\n  width: 600px;\n  display: block;\n  padding-top: 10px;\n  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35); }\n\n.logo {\n  margin: 0 auto;\n  text-align: center;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n.white-container {\n  background: #ffffff;\n  width: 560px;\n  text-align: center;\n  margin: 0 auto;\n  padding: 20px 0 0;\n  margin-top: -10px; }\n\n.sm {\n  max-width: 35px;\n  display: inline-block;\n  margin: 30px 5px; }\n\nh3 {\n  width: 400px;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  font-weight: lighter;\n  font-size: 14px; }\n\n.footer {\n  background-color: #f1f1f1; }\n\n.social-media {\n  height: 90px; }\n\n@media screen and (max-width: 768px) {\n  .email {\n    width: 100%; }\n  .white-container {\n    width: 100%; }\n  h3 {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/pages/email-template/email-template.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/email-template/email-template.component.ts ***!
  \******************************************************************/
/*! exports provided: EmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function() { return EmailTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent() {
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
    };
    EmailTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-template',
            template: __webpack_require__(/*! ./email-template.component.html */ "./src/app/pages/email-template/email-template.component.html"),
            styles: [__webpack_require__(/*! ./email-template.component.scss */ "./src/app/pages/email-template/email-template.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-form not-found\">\n  <div class=\"innerpage-decor\">\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n  </div>\n  <div class=\"text-center\">\n    <h2 class=\"error-font\">4<span>0</span>4</h2>\n    <h2 class=\"f-bold\">Not found</h2>\n    <div class=\"col-md-8 offset-md-2 col-12\">\n      <h3>The page you are attempting to reach is currently not available. This may be because\n        the page does not exist or has been moved.\n      </h3>\n    </div>\n    <div class=\"mt-5\">\n      <a [routerLink]=\"'/demo'\" class=\"btn btn-custom theme-color theme-color pt-2 pb-2\">BACK TO HOME PAGE</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/pages/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--FAQ Section start-->\n<div class=\"page-margin\">\n  <!--breadcrumb start-->\n  <div class=\"breadcrumb-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\n          <h2 class=\"title\"><span>FAQ</span></h2>\n        </div>\n        <div class=\"col-md-6 col-sm-6 col-text-center\">\n          <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n            <ol class=\"breadcrumb bg-transparent mb-0\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n              <li class=\"breadcrumb-item active\"><a [routerLink]=\"'pages/faq'\">FAQ</a></li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--breadcrumb end -->\n  <!-- sign in -->\n  <section>\n    <div class=\"innerpage-decor\">\n      <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n      <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n    </div>\n    <!--faq in -->\n    <div class=\"faq\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div id=\"accordion\">\n              <div class=\"card border-theme mb-3 radius-0\">\n                <div class=\"card-header\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  <a class=\"\">Collapsible Group Item #1 <i class=\"fa fa-angle-down\"></i></a>\n                </div>\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n              <div class=\"card border-theme mb-3 radius-0\">\n                <div class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  <a class=\"\">Collapsible Group Item #2 <i class=\"fa fa-angle-down\"></i></a>\n                </div>\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n              <div class=\"card border-theme mb-3 radius-0\">\n                <div class=\"card-header\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  <a class=\"\">Collapsible Group Item #3 <i class=\"fa fa-angle-down\"></i></a>\n                </div>\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n              <div class=\"card border-theme mb-3 radius-0\">\n                <div class=\"card-header\" id=\"headingFour\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                  <a class=\"\">Collapsible Group Item #4 <i class=\"fa fa-angle-down\"></i></a>\n                </div>\n                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n              <div class=\"card border-theme radius-0\">\n                <div class=\"card-header\" id=\"headingFive\" data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                  <a class=\"\">Collapsible Group Item #5 <i class=\"fa fa-angle-down\"></i></a>\n                </div>\n                <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- faq up -->\n  </section>\n  <!-- sign up -->\n</div>\n<!--FAQ Section start-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Forgetpassword Start -->\n<section class=\"authentication-form\">\n  <div class=\"innerpage-decor\">\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n  </div>\n  <div>\n    <h2 class=\"title text-center\">RESET YOUR<span> PASSWORD</span></h2>\n    <div class=\"card\">\n      <form class=\"theme-form\">\n        <div class=\"form-group mt-2\">\n          <h6 class=\"mt-0 mb-3\">Enter Your Mobile Number :</h6>\n          <div class=\"form-row\">\n            <div class=\"col-4\">\n              <input type=\"text\" class=\"form-control digits mb-1\" value=\"+ 91\">\n            </div>\n            <div class=\"col-8\">\n              <input type=\"tel\" class=\"form-control digits mb-1\" value=\"000-000-0000\">\n            </div>\n            <div class=\"col-12 mt-4\">\n              <button type=\"submit\" class=\"btn btn-custom btn-block theme-color\">Send</button>\n            </div>\n          </div>\n        </div>\n        <h6 class=\"text-center mt-0 mb-3\">If don't receive OTP? <a [routerLink]=\"'/demo'\" class=\"text-danger\">Resend</a></h6>\n        <div class=\"form-group rounded p-4 bg-light\">\n          <label class=\"col-form-label pt-0\">Enter OTP</label>\n          <div class=\"form-row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control digits text-center opt-text\" value=\"00\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control digits text-center opt-text\" value=\"00\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control digits text-center opt-text\" value=\"00\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input required=\"\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" name=\"password\" [type]=\"show ? 'text' : 'password'\" class=\"form-control\" placeholder=\"retype password\" required=\"required\">\n          <div class=\"show-hide\" (click)=\"password()\">\n            <span class=\"show\"></span>\n          </div>\n        </div>\n        <div class=\"form-button text-center\">\n          <button type=\"submit\" class=\"btn btn-custom theme-color\">Done</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<!-- Forgetpassword End -->\n"

/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
        // initialize variable value
        this.show = false;
    }
    // click event function toggle
    ForgetPasswordComponent.prototype.password = function () {
        this.show = !this.show;
    };
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/pages/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/pages/forget-password/forget-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/pages/thank-you/thank-you.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review/review.component */ "./src/app/pages/review/review.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./download/download.component */ "./src/app/pages/download/download.component.ts");
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ "./src/app/pages/comingsoon/comingsoon.component.ts");
/* harmony import */ var _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./email-template/email-template.component */ "./src/app/pages/email-template/email-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        children: [
            {
                path: 'sign-in',
                component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"],
            },
            {
                path: 'sign-up',
                component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
            },
            {
                path: 'forget-password',
                component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordComponent"],
            },
            {
                path: 'thank-you',
                component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["ThankYouComponent"],
            },
            {
                path: 'review',
                component: _review_review_component__WEBPACK_IMPORTED_MODULE_6__["ReviewComponent"],
            },
            {
                path: '404',
                component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
            },
            {
                path: 'download',
                component: _download_download_component__WEBPACK_IMPORTED_MODULE_9__["DownloadComponent"],
            },
            {
                path: 'coming-soon',
                component: _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_10__["ComingsoonComponent"],
            },
            {
                path: 'email-template',
                component: _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_11__["EmailTemplateComponent"],
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/pages/thank-you/thank-you.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/review.component */ "./src/app/pages/review/review.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./download/download.component */ "./src/app/pages/download/download.component.ts");
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ "./src/app/pages/comingsoon/comingsoon.component.ts");
/* harmony import */ var _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email-template/email-template.component */ "./src/app/pages/email-template/email-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPasswordComponent"],
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__["ThankYouComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"],
                _download_download_component__WEBPACK_IMPORTED_MODULE_12__["DownloadComponent"],
                _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_13__["ComingsoonComponent"],
                _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_14__["EmailTemplateComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/review/review.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/review/review.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--Review Section start-->\n<div class=\"page-margin\">\n  <!--breadcrumb start-->\n  <div class=\"breadcrumb-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\n          <h2 class=\"title\"><span>Review</span></h2>\n        </div>\n        <div class=\"col-md-6 col-sm-6 col-text-center\">\n          <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n            <ol class=\"breadcrumb bg-transparent mb-0\">\n              <li class=\"breadcrumb-item\"><a [routerLink]=\"'home/one'\">Home</a></li>\n              <li class=\"breadcrumb-item active\"><a [routerLink]=\"'pages/review'\">Review</a></li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--breadcrumb end -->\n  <!-- sign in -->\n  <section>\n    <div class=\"innerpage-decor\">\n      <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n      <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n    </div>\n    <div class=\"review-block\">\n      <div class=\"container\">\n        <div class=\"row margin-bottom\">\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"review-box\">\n              <img src=\"assets/images/avtar/22.jpg\" alt=\"review\" class=\"img-fluid\">\n              <h5>John Martin</h5>\n              <div>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"review-message\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"review-box\">\n              <img src=\"assets/images/avtar/1.jpg\" alt=\"review\" class=\"img-fluid\">\n              <h5>John Martin</h5>\n              <div>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"review-message\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"review-box\">\n              <img src=\"assets/images/avtar/15.jpg\" alt=\"review\" class=\"img-fluid\">\n              <h5>John Martin</h5>\n              <div>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"review-message\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"review-box\">\n              <img src=\"assets/images/avtar/22.jpg\" alt=\"review\" class=\"img-fluid\">\n              <h5>John Martin</h5>\n              <div>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"review-message\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"review-box\">\n              <img src=\"assets/images/avtar/15.jpg\" alt=\"review\" class=\"img-fluid\">\n              <h5>John Martin</h5>\n              <div>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"review-message\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"review-box\">\n              <img src=\"assets/images/avtar/1.jpg\" alt=\"review\" class=\"img-fluid\">\n              <h5>John Martin</h5>\n              <div>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"review-message\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- sign up -->\n</div>\n<!--Review Section start-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/pages/review/review.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/review/review.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/review/review.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/review/review.component.ts ***!
  \**************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/pages/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/pages/review/review.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- sign in start -->\n<section class=\"authentication-form\">\n  <div class=\"innerpage-decor\">\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n  </div>\n  <div>\n    <h2 class=\"title text-center\"><span> Login</span></h2>\n    <p class=\"text-center\">Welcome to mosh, Please Login with your personal account information.</p>\n    <div class=\"card\">\n      <form class=\"theme-form\">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"email address\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n          <input required=\"\" name=\"password\" [type]=\"show ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Password\">\n          <div class=\"show-hide\" (click)=\"password()\">\n            <span class=\"show\"></span>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"custom-control custom-checkbox col-6\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\">\n            <label class=\"custom-control-label\" for=\"customControlAutosizing\">Remember me</label>\n          </div>\n          <a [routerLink]=\"'pages/forget-password'\" class=\"text-right col-6 theme-link\">lost your password</a>\n        </div>\n        <div class=\"form-button text-center\">\n          <button type=\"submit\" class=\"btn btn-custom btn-lg theme-color\">Login</button>\n        </div>\n        <div class=\"or-saparator\"><span>or</span></div>\n        <h6 class=\"text-center mt-0 mb-3\">Sign in with:</h6>\n        <div class=\"form-button text-center social-btns\">\n          <button type=\"submit\" class=\"btn btn-custom fb\">Facebook</button>\n          <button type=\"submit\" class=\"btn btn-custom ggl\">Google</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<!-- sign in end-->\n"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
        // initialize variable value
        this.show = false;
    }
    // click event function toggle
    SignInComponent.prototype.password = function () {
        this.show = !this.show;
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/pages/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/pages/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- sign up start-->\n<section class=\"authentication-form\">\n  <div class=\"innerpage-decor\">\n    <div class=\"innerpage-circle1\"><img src=\"assets/images/Testimonial2.png\" alt=\"\"></div>\n    <div class=\"innerpage-circle2\"><img src=\"assets/images/Testimonial1.png\" alt=\"\"></div>\n  </div>\n  <div>\n    <h2 class=\"title text-center\">It's Free<span> Join US</span></h2>\n    <p class=\"text-center\">Welcome to mosh, Please join us with your personal account information.</p>\n    <div class=\"card\">\n      <form class=\"theme-form\">\n        <div class=\"form-group\">\n          <div class=\"md-fgrup-margin\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"your name\" required=\"required\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"number\" class=\"form-control\" placeholder=\"phone\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"email address\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n          <input required=\"\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" name=\"cpassword\" [type]=\"show ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Conform password\" required=\"required\">\n          <div class=\"show-hide\" (click)=\"password()\">\n            <span class=\"show\"></span>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"custom-control custom-checkbox col-6\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\">\n            <label class=\"custom-control-label\" for=\"customControlAutosizing\">Remember me</label>\n          </div>\n          <a [routerLink]=\"'/forget-password'\" class=\"text-right col-6 theme-link\">lost your password</a>\n        </div>\n        <div class=\"form-button text-center\">\n          <button type=\"submit\" class=\"btn btn-custom theme-color\">Sign Up</button>\n        </div>\n        <div class=\"or-saparator\"><span>or</span></div>\n        <h6 class=\"text-center mt-0 mb-3\">Sign up with:</h6>\n        <div class=\"form-button text-center social-btns\">\n          <button type=\"submit\" class=\"btn btn-custom fb\">Facebook</button>\n          <button type=\"submit\" class=\"btn btn-custom ggl\">Google</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<!-- sign up end-->\n"

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        // initialize variable value
        this.show = false;
    }
    // click event function toggle
    SignUpComponent.prototype.password = function () {
        this.show = !this.show;
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/pages/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n  <div class=\"thanks-bg\">\n    <div class=\"container\">\n      <div class=\"col-md-12\">\n        <div class=\"thanks-section\">\n          <div>\n            <img src=\"assets/images/thank-you.png\" class=\"img-fluid downlod-img\" alt=\"\">\n            <div class=\"col-lg-8 offset-lg-2\">\n              <h2>Thank You</h2>\n            </div>\n            <h3>If it doesn’t start automatically, <a href=\"#\" class=\"manual-down\">please click here to downlaod manually.</a></h3>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- copy-right-section -->\n  <footer class=\"bg-thanks\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"copyright-section\">\n            <p>2018-19 Copyright &copy; By Themeforest Powered By Pixel Strap</p>\n            <div class=\"mt-3 text-center\">\n              <a [routerLink]=\"'/demo'\" class=\"btn btn-custom theme-color theme-color pt-2 pb-2\">BACK TO HOME PAGE</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n<!--end copy right section-->\n"

/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.component.ts ***!
  \********************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/pages/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.scss */ "./src/app/pages/thank-you/thank-you.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map