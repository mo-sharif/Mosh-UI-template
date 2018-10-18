(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/blog/blog-details-leftside/blog-details-leftside.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--breadcrumb start-->\n<div class=\"breadcrumb-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12 col-text-center d-align-center\">\n        <h2 class=\"title\">Left<span> Sidebar</span></h2>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-text-center\">\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n          <ol class=\"breadcrumb bg-transparent mb-0\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/blog/list'\">Blog</a></li>\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'/blog/details-left-sidebar'\">Blog Details with Left Sidebar</a></li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumb end -->\n<!--blog Section starts -->\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- blog details starts -->\n      <div class=\"col-sm-12 col-md-8 col-lg-9\">\n        <div class=\"blog-item\">\n          <div class=\"blog-block\">\n            <div class=\"blog-box\">\n              <div class=\"overflow-hidden\">\n                <img src=\"assets/images/blog/blog-details.jpg\" alt=\"blog\" class=\"img-fluid\">\n              </div>\n            </div>\n          </div>\n          <div class=\"blog-text\">\n            <h6>25 january 2018</h6>\n            <a href=\"#\">\n              <h3 class=\"blog-head\">There are many variations of passages of Lorem Ipsum available, </h3>\n            </a>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-description\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <h5>Mark jkcno</h5>\n              <h5 class=\"pull-right\"> 10 <i class=\"fa fa-heart-o\"></i>, 50 <i class=\"fa fa-comments-o\"></i></h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"blog-divider\"></div>\n        <!-- Comment section -->\n        <div class=\"reply-comment\">\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/details'\">\n                <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n            </div>\n          </div>\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment-two.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/details'\">\n                <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p>\n            </div>\n          </div>\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment-three.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/details'\">\n                <h5 class=\"mt-0\">all the Lorem Ipsum Generator</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n            </div>\n          </div>\n        </div>\n        <!-- Comment section end -->\n        <div class=\"blog-divider\"></div>\n        <!-- leave comment sectopn starts -->\n        <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1 leave-coment\">\n            <h3 class=\"text-center\">Leave Your Comment</h3>\n            <form class=\"theme-form footer-form p-0 mt-3\">\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12 md-fgrup-margin\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"your name\">\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                    <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"email address\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" placeholder=\"message\"></textarea>\n              </div>\n              <div class=\"form-button\">\n                <button type=\"submit\" class=\"btn btn-custom theme-color\">send</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <!-- leave comment section end -->\n      </div>\n      <!-- blog details end -->\n      <!-- sidebar starts -->\n      <div class=\"col-md-4 col-lg-3 order-md-first list-sidebar\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">blog Category</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-cat-detail\">\n              <ul>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is simply\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> There Are Many Variations\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> it has survived not only five\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum has been the.\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is random.\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">Popular Tag</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"tags marg-20\">\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Responsive design</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Color options</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Multiple demos</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Dedicated support</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Documentation</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">PSD is included</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Text</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Support</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Responsive</span></a>\n              <a [routerLink]=\"'/blog/details-left-sidebar'\"><span class=\"badge badge-theme\">Design</span></a>\n            </div>\n          </div>\n          <h4 class=\"blog-title\">Recent Post</h4>\n          <div class=\"blog-divider\"></div>\n          <div class=\"recent-blog marg-20\">\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/1.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n                </a>\n                <p class=\"m-0\">05 March 2011</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/2.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n                </a>\n                <p class=\"m-0\">14 january 2015</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/3.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">all the Lorem Ipsum</h5>\n                </a>\n                <p class=\"m-0\">30 November 2015</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- sidebar end -->\n    </div>\n  </div>\n</section>\n<!-- blog Section End -->\n"

/***/ }),

/***/ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/blog/blog-details-leftside/blog-details-leftside.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/blog/blog-details-leftside/blog-details-leftside.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlogDetailsLeftsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsLeftsideComponent", function() { return BlogDetailsLeftsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogDetailsLeftsideComponent = /** @class */ (function () {
    function BlogDetailsLeftsideComponent(fix) {
        this.fix = fix;
    }
    BlogDetailsLeftsideComponent.prototype.ngOnInit = function () {
        this.fix.addFixBlogDetails();
    };
    BlogDetailsLeftsideComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFixBlogDetails();
    };
    BlogDetailsLeftsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-details-leftside',
            template: __webpack_require__(/*! ./blog-details-leftside.component.html */ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.html"),
            styles: [__webpack_require__(/*! ./blog-details-leftside.component.scss */ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], BlogDetailsLeftsideComponent);
    return BlogDetailsLeftsideComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/blog/blog-details-rightside/blog-details-rightside.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--breadcrumb start-->\n<div class=\"breadcrumb-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-12 col-text-center d-align-center\">\n        <h2 class=\"title\">Right<span> Sidebar</span></h2>\n      </div>\n      <div class=\"col-md-7 col-sm-12 col-text-center\">\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n          <ol class=\"breadcrumb bg-transparent mb-0\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/blog/list'\">Blog</a></li>\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'/blog/details-right-sidebar'\">Blog Details with Right Sidebar</a></li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumb end -->\n<!-- blog Section starts -->\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- blog details starts -->\n      <div class=\"col-sm-12 col-md-8 col-lg-9\">\n        <div class=\"blog-item\">\n          <div class=\"blog-block\">\n            <div class=\"blog-box\">\n              <div class=\"overflow-hidden\">\n                <img src=\"assets/images/blog/blog-details.jpg\" alt=\"blog\" class=\"img-fluid\">\n              </div>\n            </div>\n          </div>\n          <div class=\"blog-text\">\n            <h6>25 january 2018</h6>\n            <a href=\"#\">\n              <h3 class=\"blog-head\">There are many variations of passages of Lorem Ipsum available, </h3>\n            </a>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-description\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <h5>Mark jkcno</h5>\n              <h5 class=\"pull-right\"> 10 <i class=\"fa fa-heart-o\"></i>, 50 <i class=\"fa fa-comments-o\"></i></h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"blog-divider\"></div>\n        <!-- Comment section -->\n        <div class=\"reply-comment\">\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/list'\">\n                <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n            </div>\n          </div>\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment-two.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/list'\">\n                <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p>\n            </div>\n          </div>\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment-three.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/list'\">\n                <h5 class=\"mt-0\">all the Lorem Ipsum Generator</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n            </div>\n          </div>\n        </div>\n        <!-- Comment section end -->\n        <div class=\"blog-divider\"></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1 leave-coment\">\n            <h3 class=\"text-center\">Leave Your Comment</h3>\n            <form class=\"theme-form footer-form p-0 mt-3\">\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12 md-fgrup-margin\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"your name\">\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                    <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"email address\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" placeholder=\"message\"></textarea>\n              </div>\n              <div class=\"form-button\">\n                <button type=\"submit\" class=\"btn btn-custom theme-color\">send</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- blog details end -->\n      <!-- sidebar starts -->\n      <div class=\"col-md-4 col-lg-3 order-md-last list-sidebar\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">blog Category</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-cat-detail\">\n              <ul>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/list'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is simply\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/list'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> There Are Many Variations\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/list'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> it has survived not only five\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/list'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum has been the.\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/list'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is random.\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">Popular Tag</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"tags marg-20\">\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Responsive design</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Color options</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Multiple demos</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Dedicated support</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Documentation</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">PSD is included</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Text</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Support</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Responsive</span></a>\n              <a [routerLink]=\"'/blog/details-right-sidebar'\"><span class=\"badge badge-theme\">Design</span></a>\n            </div>\n          </div>\n          <h4 class=\"blog-title\">Recent Post</h4>\n          <div class=\"blog-divider\"></div>\n          <div class=\"recent-blog marg-20\">\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/1.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/list'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n                </a>\n                <p class=\"m-0\">05 March 2011</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/2.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/list'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n                </a>\n                <p class=\"m-0\">14 january 2015</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/3.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/list'\">\n                  <h5 class=\"mt-0\">all the Lorem Ipsum</h5>\n                </a>\n                <p class=\"m-0\">30 November 2015</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- sidebar end -->\n    </div>\n  </div>\n</section>\n<!-- blog Section End -->\n"

/***/ }),

/***/ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/blog/blog-details-rightside/blog-details-rightside.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/blog/blog-details-rightside/blog-details-rightside.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BlogDetailsRightsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsRightsideComponent", function() { return BlogDetailsRightsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogDetailsRightsideComponent = /** @class */ (function () {
    function BlogDetailsRightsideComponent(fix) {
        this.fix = fix;
    }
    BlogDetailsRightsideComponent.prototype.ngOnInit = function () {
        this.fix.addFixBlogDetails();
    };
    BlogDetailsRightsideComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFixBlogDetails();
    };
    BlogDetailsRightsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-details-rightside',
            template: __webpack_require__(/*! ./blog-details-rightside.component.html */ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.html"),
            styles: [__webpack_require__(/*! ./blog-details-rightside.component.scss */ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], BlogDetailsRightsideComponent);
    return BlogDetailsRightsideComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-details/blog-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/blog/blog-details/blog-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--breadcrumb start-->\n<div class=\"breadcrumb-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\n        <h2 class=\"title\">blog<span> Details</span></h2>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-text-center\">\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n          <ol class=\"breadcrumb bg-transparent mb-0\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'/blog/details'\">Blog Details</a></li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumb end -->\n<!-- blog Section starts -->\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"blog-item\">\n          <div class=\"blog-block\">\n            <div class=\"blog-box\">\n              <div class=\"overflow-hidden\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <img src=\"assets/images/blog/blog-details.jpg\" alt=\"blog\" class=\"img-fluid\">\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"blog-text\">\n            <h6>25 january 2018</h6>\n            <a [routerLink]=\"'/blog/details'\">\n              <h3 class=\"blog-head\">There are many variations of passages of Lorem Ipsum available, </h3>\n            </a>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-description\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n              <h5>Mark jkcno</h5>\n              <h5 class=\"pull-right\"> 10 <i class=\"fa fa-heart-o\"></i>, 50 <i class=\"fa fa-comments-o\"></i></h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"blog-divider\"></div>\n        <div class=\"reply-comment\">\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/details'\">\n                <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Donec sed odio dui.</p>\n            </div>\n          </div>\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment-two.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/details'\">\n                <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Donec sed odio dui.</p>\n            </div>\n          </div>\n          <div class=\"media\">\n            <img class=\"align-self-top mr-3\" src=\"assets/images/blog/blog-comment-three.jpg\" alt=\"blog\">\n            <div class=\"media-body\">\n              <a [routerLink]=\"'/blog/details'\">\n                <h5 class=\"mt-0\">all the Lorem Ipsum Generator</h5>\n              </a>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"blog-divider\"></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 offset-md-1 leave-coment\">\n            <h3 class=\"text-center\">Leave Your Comment</h3>\n            <form class=\"theme-form footer-form p-0 mt-3\">\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12 md-fgrup-margin\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"your name\">\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                    <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"email address\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" placeholder=\"message\"></textarea>\n              </div>\n              <div class=\"form-button\">\n                <button type=\"submit\" class=\"btn btn-custom theme-color\">send</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--blog Section End-->\n"

/***/ }),

/***/ "./src/app/blog/blog-details/blog-details.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/blog/blog-details/blog-details.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog-details/blog-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog/blog-details/blog-details.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent(fix) {
        this.fix = fix;
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
        this.fix.addFixBlogDetails();
    };
    BlogDetailsComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFixBlogDetails();
    };
    BlogDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-details',
            template: __webpack_require__(/*! ./blog-details.component.html */ "./src/app/blog/blog-details/blog-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-details.component.scss */ "./src/app/blog/blog-details/blog-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], BlogDetailsComponent);
    return BlogDetailsComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-leftside/blog-leftside.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/blog/blog-leftside/blog-leftside.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--breadcrumb start-->\n<div class=\"breadcrumb-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\n        <h2 class=\"title\">Left<span> Sidebar</span></h2>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-text-center\">\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n          <ol class=\"breadcrumb bg-transparent mb-0\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/blog/list'\">Blog</a></li>\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'/blog/left-sidebar'\">Left Sidebar</a></li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumb end -->\n<!--blog Section start-->\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-lg-9 blog-sec\">\n        <div class=\"row blog-list\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/blog3.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/6.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/7.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/8.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/9.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/9.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- sidebar section -->\n      <div class=\"col-md-4 col-lg-3 order-md-first list-sidebar\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">blog Category</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-cat-detail\">\n              <ul>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is simply\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> There Are Many Variations\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> it has survived not only five\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum has been the.\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is random.\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">Popular Tag</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"tags marg-20\">\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Responsive design</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Color options</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Multiple demos</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Dedicated support</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Documentation</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">PSD is included</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Text</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Support</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Responsive</span></a>\n              <a [routerLink]=\"'/blog/left-sidebar'\"><span class=\"badge badge-theme\">Design</span></a>\n            </div>\n          </div>\n          <h4 class=\"blog-title\">Recent Post</h4>\n          <div class=\"blog-divider\"></div>\n          <div class=\"recent-blog marg-20\">\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/1.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n                </a>\n                <p class=\"m-0\">05 March 2011</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/2.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n                </a>\n                <p class=\"m-0\">14 january 2015</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/3.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">all the Lorem Ipsum Generator</h5>\n                </a>\n                <p class=\"m-0\">30 November 2015</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- sidebar section -->\n    </div>\n  </div>\n</section>\n<!--blog Section End-->\n"

/***/ }),

/***/ "./src/app/blog/blog-leftside/blog-leftside.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/blog/blog-leftside/blog-leftside.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog-leftside/blog-leftside.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/blog/blog-leftside/blog-leftside.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogLeftsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLeftsideComponent", function() { return BlogLeftsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogLeftsideComponent = /** @class */ (function () {
    function BlogLeftsideComponent(fix) {
        this.fix = fix;
    }
    BlogLeftsideComponent.prototype.ngOnInit = function () {
        this.fix.addFixBlog();
    };
    BlogLeftsideComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFixBlog();
    };
    BlogLeftsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-leftside',
            template: __webpack_require__(/*! ./blog-leftside.component.html */ "./src/app/blog/blog-leftside/blog-leftside.component.html"),
            styles: [__webpack_require__(/*! ./blog-leftside.component.scss */ "./src/app/blog/blog-leftside/blog-leftside.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], BlogLeftsideComponent);
    return BlogLeftsideComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-list/blog-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/blog/blog-list/blog-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--breadcrumb start-->\n<div class=\"breadcrumb-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\n        <h2 class=\"title\"><span> Blog</span></h2>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-text-center\">\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n          <ol class=\"breadcrumb bg-transparent mb-0\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'/blog/list'\">Blog</a></li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumb end -->\n<!-- blog Section start -->\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"row blog-list\">\n          <div class=\"col-md-6\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/blog3.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem Typesetting Indust.</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/6.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem Typesetting Indust.</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/7.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem Typesetting Indust.</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/8.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem Typesetting Indust.</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/9.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem Typesetting Indust.</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/10.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem Typesetting Indust.</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- paginations -->\n      <div class=\"col-md-12\">\n        <nav aria-label=\"Page navigation\" class=\"blog-pagination\">\n          <ul class=\"pagination justify-content-center blog-pagin\">\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                  <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n              </a>\n            </li>\n            <li class=\"page-item active\"><a [routerLink]=\"'/blog/list'\" class=\"page-link\">1</a></li>\n            <li class=\"page-item\"><a [routerLink]=\"'/blog/list'\" class=\"page-link\">2</a></li>\n            <li class=\"page-item\"><a [routerLink]=\"'/blog/list'\" class=\"page-link\">3</a></li>\n            <li class=\"page-item\">\n              <a [routerLink]=\"'/blog/list'\" class=\"page-link\" aria-label=\"Next\">\n                  <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n      <!-- paginations end-->\n    </div>\n  </div>\n</section>\n<!-- blog Section End -->\n"

/***/ }),

/***/ "./src/app/blog/blog-list/blog-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/blog/blog-list/blog-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog-list/blog-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-list/blog-list.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(fix) {
        this.fix = fix;
    }
    BlogListComponent.prototype.ngOnInit = function () {
        this.fix.addFixBlog();
    };
    BlogListComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFixBlog();
    };
    BlogListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blog-list.component.html */ "./src/app/blog/blog-list/blog-list.component.html"),
            styles: [__webpack_require__(/*! ./blog-list.component.scss */ "./src/app/blog/blog-list/blog-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-rightside/blog-rightside.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/blog/blog-rightside/blog-rightside.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--breadcrumb start-->\n<div class=\"breadcrumb-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-text-center d-align-center\">\n        <h2 class=\"title\">Right<span> Sidebar</span></h2>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-text-center\">\n        <nav aria-label=\"breadcrumb\" class=\"blog-bradcrumb \">\n          <ol class=\"breadcrumb bg-transparent mb-0\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/blog/list'\">Blog</a></li>\n            <li class=\"breadcrumb-item active\"><a [routerLink]=\"'/blog/right-sidebar'\">Right Sidebar</a></li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!--breadcrumb end -->\n<!--blog Section start-->\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-lg-9 blog-sec\">\n        <div class=\"row blog-list\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/blog3.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/6.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/7.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/8.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/9.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"blog-item\">\n              <div class=\"blog-block\">\n                <div class=\"blog-box\">\n                  <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img src=\"assets/images/blog/9.jpg\" alt=\"blog\" class=\"img-fluid\"></a></div>\n                </div>\n              </div>\n              <div class=\"blog-text\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h3>There are many variations of passages.</h3>\n                  <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>\n                </a>\n                <h5>Mark jkcno</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-lg-3 order-md-last list-sidebar\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">blog Category</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"blog-cat-detail\">\n              <ul>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is simply\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> There Are Many Variations\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> it has survived not only five\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum has been the.\n                  </a>\n                </li>\n                <li class=\"marg-15\">\n                  <a [routerLink]=\"'/blog/details'\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i> Lorem Ipsum is random.\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"sidebar-space\">\n            <h4 class=\"blog-title\">Popular Tag</h4>\n            <div class=\"blog-divider\"></div>\n            <div class=\"tags marg-20\">\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Responsive design</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Color options</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Multiple demos</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Dedicated support</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Documentation</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">PSD is included</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Text</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Support</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Responsive</span></a>\n              <a [routerLink]=\"'/blog/right-sidebar'\"><span class=\"badge badge-theme\">Design</span></a>\n            </div>\n          </div>\n          <h4 class=\"blog-title\">Recent Post</h4>\n          <div class=\"blog-divider\"></div>\n          <div class=\"recent-blog marg-20\">\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/1.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum Is Simply Dummy</h5>\n                </a>\n                <p class=\"m-0\">05 March 2011</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/2.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">Lorem Ipsum has been the</h5>\n                </a>\n                <p class=\"m-0\">14 january 2015</p>\n              </div>\n            </div>\n            <div class=\"media\">\n              <img class=\"mr-3\" src=\"assets/images/blog/3.jpg\" alt=\"blog\">\n              <div class=\"media-body\">\n                <a [routerLink]=\"'/blog/details'\">\n                  <h5 class=\"mt-0\">all the Lorem Ipsum Generator</h5>\n                </a>\n                <p class=\"m-0\">30 November 2015</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--blog Section End-->\n"

/***/ }),

/***/ "./src/app/blog/blog-rightside/blog-rightside.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/blog/blog-rightside/blog-rightside.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog-rightside/blog-rightside.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/blog/blog-rightside/blog-rightside.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogRightsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRightsideComponent", function() { return BlogRightsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogRightsideComponent = /** @class */ (function () {
    function BlogRightsideComponent(fix) {
        this.fix = fix;
    }
    BlogRightsideComponent.prototype.ngOnInit = function () {
        this.fix.addFixBlog();
    };
    BlogRightsideComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFixBlog();
    };
    BlogRightsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-rightside',
            template: __webpack_require__(/*! ./blog-rightside.component.html */ "./src/app/blog/blog-rightside/blog-rightside.component.html"),
            styles: [__webpack_require__(/*! ./blog-rightside.component.scss */ "./src/app/blog/blog-rightside/blog-rightside.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], BlogRightsideComponent);
    return BlogRightsideComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog/blog-list/blog-list.component.ts");
/* harmony import */ var _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-details/blog-details.component */ "./src/app/blog/blog-details/blog-details.component.ts");
/* harmony import */ var _blog_leftside_blog_leftside_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-leftside/blog-leftside.component */ "./src/app/blog/blog-leftside/blog-leftside.component.ts");
/* harmony import */ var _blog_rightside_blog_rightside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-rightside/blog-rightside.component */ "./src/app/blog/blog-rightside/blog-rightside.component.ts");
/* harmony import */ var _blog_details_leftside_blog_details_leftside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-details-leftside/blog-details-leftside.component */ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.ts");
/* harmony import */ var _blog_details_rightside_blog_details_rightside_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-details-rightside/blog-details-rightside.component */ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.ts");
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
                path: 'list',
                component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"],
            },
            {
                path: 'details',
                component: _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_3__["BlogDetailsComponent"],
            },
            {
                path: 'left-sidebar',
                component: _blog_leftside_blog_leftside_component__WEBPACK_IMPORTED_MODULE_4__["BlogLeftsideComponent"],
            },
            {
                path: 'right-sidebar',
                component: _blog_rightside_blog_rightside_component__WEBPACK_IMPORTED_MODULE_5__["BlogRightsideComponent"],
            },
            {
                path: 'details-left-sidebar',
                component: _blog_details_leftside_blog_details_leftside_component__WEBPACK_IMPORTED_MODULE_6__["BlogDetailsLeftsideComponent"],
            },
            {
                path: 'details-right-sidebar',
                component: _blog_details_rightside_blog_details_rightside_component__WEBPACK_IMPORTED_MODULE_7__["BlogDetailsRightsideComponent"],
            }
        ]
    }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog/blog-list/blog-list.component.ts");
/* harmony import */ var _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-details/blog-details.component */ "./src/app/blog/blog-details/blog-details.component.ts");
/* harmony import */ var _blog_leftside_blog_leftside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-leftside/blog-leftside.component */ "./src/app/blog/blog-leftside/blog-leftside.component.ts");
/* harmony import */ var _blog_rightside_blog_rightside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-rightside/blog-rightside.component */ "./src/app/blog/blog-rightside/blog-rightside.component.ts");
/* harmony import */ var _blog_details_leftside_blog_details_leftside_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-details-leftside/blog-details-leftside.component */ "./src/app/blog/blog-details-leftside/blog-details-leftside.component.ts");
/* harmony import */ var _blog_details_rightside_blog_details_rightside_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-details-rightside/blog-details-rightside.component */ "./src/app/blog/blog-details-rightside/blog-details-rightside.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"]
            ],
            declarations: [
                _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__["BlogListComponent"],
                _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_4__["BlogDetailsComponent"],
                _blog_leftside_blog_leftside_component__WEBPACK_IMPORTED_MODULE_5__["BlogLeftsideComponent"],
                _blog_rightside_blog_rightside_component__WEBPACK_IMPORTED_MODULE_6__["BlogRightsideComponent"],
                _blog_details_leftside_blog_details_leftside_component__WEBPACK_IMPORTED_MODULE_7__["BlogDetailsLeftsideComponent"],
                _blog_details_rightside_blog_details_rightside_component__WEBPACK_IMPORTED_MODULE_8__["BlogDetailsRightsideComponent"]
            ]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map