(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.html":
/*!****************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Layout with <code>@angular/flex-layout</code></h1>\n<p><a href=\"https://neverfriday.com/\">Rudolf Olah</a></p>\n<h2><a href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\">Flex Layout</a></h2>\n<p>Uses the following directives:</p>\n<ul class=\"directives-used\">\n    <li>fxLayout</li>\n    <li>fxLayoutGap</li>\n    <li>fxFlex</li>\n</ul>\n<form class=\"with-angular-flex\">\n    <div fxLayout=\"column\" fxLayoutGap=\"5%\">\n        <div fxFlex=\"50%\" fxLayout=\"row\" class=\"invoice-address\">\n            <div fxFlex=\"50%\" class=\"label\">Billed To</div>\n            <div fxFlex=\"50%\" class=\"value\">\n                <ng-template ngFor let-row [ngForOf]=\"billingAddress\">\n                    <div>{{row}}</div>\n                </ng-template>\n            </div>\n        </div>\n        <div fxLayout=\"column\">\n            <div fxLayout=\"row\" class=\"invoice-header\">\n                <div fxFlex=\"40%\">Description</div>\n                <div fxFlex=\"20%\">Unit Cost</div>\n                <div fxFlex=\"20%\">Qty./Hr. Rate</div>\n                <div fxFlex=\"20%\">Amount</div>\n            </div>\n            <div fxLayout=\"row wrap\" class=\"invoice-rows\">\n                <ng-template ngFor let-item [ngForOf]=\"lineItems\">\n                    <div fxFlex=\"40%\" class=\"description\">\n                        {{item.description}}\n                    </div>\n                    <div fxFlex=\"20%\" class=\"unit-cost\">\n                        {{item.unitCost ? item.unitCost : ''}}\n                    </div>\n                    <div fxFlex=\"20%\" class=\"quantity-hourly-rate\">\n                        <ng-template [ngIf]=\"item.quantity\" [ngIfThen]=\"quantity\" [ngIfElse]=\"hourlyRate\">\n                        </ng-template>\n                        <ng-template #quantity>{{item.quantity}}</ng-template>\n                        <ng-template #hourlyRate>{{item.hourlyRate|currency}}</ng-template>\n                    </div>\n                    <div fxFlex=\"20%\" class=\"amount\">\n                        {{item.amount|currency}}\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n        <div fxLayout=\"row\" class=\"invoice-total\">\n            <div fxFlex=\"70%\" class=\"label\">\n                Total\n            </div>\n            <div fxFlex=\"30%\" class=\"value\">\n                {{invoiceTotal|currency}}\n            </div>\n        </div>\n    </div>\n</form>\n<h2><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout\">Grid\n        Layout</a></h2>\n<p>Uses the following directives:</p>\n<ul class=\"directives-used\">\n    <li>gdColumns</li>\n    <li>gdRows</li>\n    <li>gdGap</li>\n    <li>gdColumn</li>\n    <li>gdRow</li>\n</ul>\n<form class=\"with-angular-grid\">\n    <div gdGap=\"5%\" gdColumns=\"1fr\" gdRows=\"1fr 1fr\">\n        <div gdColumn=\"1\" gdRow=\"1\" class=\"invoice-address\" gdColumns=\"50% 50%\" gdRows=\"1fr\">\n            <div class=\"label\">Billed To</div>\n            <div class=\"value\">\n                <ng-template ngFor let-row [ngForOf]=\"billingAddress\">\n                    <div>{{row}}</div>\n                </ng-template>\n            </div>\n        </div>\n        <div gdColumn=\"1\" gdRow=\"2\"></div>\n    </div>\n</form>\n<h2>Using flex layout <em>without using angular-flex-layout</em></h2>\n<form class=\"without-angular\">\n    <div fxLayout=\"column\" fxLayoutGap=\"5%\">\n        <div class=\"invoice-address\">\n            <div class=\"label\">Billed To</div>\n            <div class=\"value\">\n                <ng-template ngFor let-row [ngForOf]=\"billingAddress\">\n                    <div>{{row}}</div>\n                </ng-template>\n            </div>\n        </div>\n        <div fxLayout=\"column\">\n            <div fxLayout=\"row\" class=\"invoice-header\">\n                <div fxFlex=\"40%\">Description</div>\n                <div fxFlex=\"20%\">Unit Cost</div>\n                <div fxFlex=\"20%\">Qty./Hr. Rate</div>\n                <div fxFlex=\"20%\">Amount</div>\n            </div>\n            <div fxLayout=\"row wrap\" class=\"invoice-rows\">\n                <ng-template ngFor let-item [ngForOf]=\"lineItems\">\n                    <div fxFlex=\"40%\" class=\"description\">\n                        {{item.description}}\n                    </div>\n                    <div fxFlex=\"20%\" class=\"unit-cost\">\n                        {{item.unitCost ? item.unitCost : ''}}\n                    </div>\n                    <div fxFlex=\"20%\" class=\"quantity-hourly-rate\">\n                        <ng-template [ngIf]=\"item.quantity\" [ngIfThen]=\"quantity\" [ngIfElse]=\"hourlyRate\">\n                        </ng-template>\n                        <ng-template #quantity>{{item.quantity}}</ng-template>\n                        <ng-template #hourlyRate>{{item.hourlyRate|currency}}</ng-template>\n                    </div>\n                    <div fxFlex=\"20%\" class=\"amount\">\n                        {{item.amount|currency}}\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n        <div fxLayout=\"row\" class=\"invoice-total\">\n            <div fxFlex=\"70%\" class=\"label\">\n                Total\n            </div>\n            <div fxFlex=\"30%\" class=\"value\">\n                {{invoiceTotal|currency}}\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'layout-with-angular-flex-layout';
        this.lineItems = [
            { description: 'description', unitCost: '1.23', quantity: '5', amount: '6.15' },
            { description: 'description', hourlyRate: '50.00', quantity: '10', amount: '500.00' }
        ];
        this.billingAddress = [
            '123 Angular Way',
            'Angular Town, Canada',
            'A1B 2C3'
        ];
        this.invoiceTotal = 0.0;
        this.invoiceTotal = this.lineItems.
            map(function (item) { return parseFloat(item.amount); }).
            reduce(function (sum, amount) { return sum + amount; });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.html */ "./node_modules/raw-loader/index.js!./src/app/app.html"),
            styles: [__webpack_require__(/*! ./app.css */ "./src/app/app.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.css":
/*!*************************!*\
  !*** ./src/app/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".directives-used li {\n    font-family: 'Courier New', Courier, monospace;\n}\n\nform {\n    width: 50%;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\n.invoice-header {\n    font-size: 16pt;\n    text-align: center;\n}\n\n.invoice-address,\n.invoice-total {\n    font-weight: bold;\n}\n\n.invoice-total {\n    padding: 1rem;\n    font-size: 13pt;\n}\n\n.invoice-header div,\n.invoice-rows div {\n    padding: 1rem;\n    border-bottom: 1px solid #333333;\n}\n\n.invoice-rows .description, .unit-cost, .quantity-hourly-rate, .amount {\n    border-right: 1px solid #333333;\n}\n\n.invoice-rows .description {\n    border-left: 1px solid #333333;\n}\n\n.invoice-address .label,\n.invoice-rows .unit-cost,\n.invoice-rows .quantity-hourly-rate,\n.invoice-rows .amount,\n.invoice-total .label,\n.invoice-total .value {\n    text-align: right;\n    padding-right: 0.5rem;\n}\n\n/** WITHOUT ANGULAR */\n\n.without-angular .invoice-address {\n    -webkit-box-flex: 50%;\n        -ms-flex: 50%;\n            flex: 50%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.without-angular .invoice-address .label,\n.without-angular .invoice-address .value {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7OztJQU1JLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLHFCQUFTO1FBQVQsYUFBUztZQUFULFNBQVM7SUFDVCw4QkFBbUI7SUFBbkIsNkJBQW1CO1FBQW5CLHVCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksNEJBQWU7UUFBZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXJlY3RpdmVzLXVzZWQgbGkge1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbmZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5pbnZvaWNlLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNnB0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludm9pY2UtYWRkcmVzcyxcbi5pbnZvaWNlLXRvdGFsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmludm9pY2UtdG90YWwge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxM3B0O1xufVxuXG4uaW52b2ljZS1oZWFkZXIgZGl2LFxuLmludm9pY2Utcm93cyBkaXYge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XG59XG5cbi5pbnZvaWNlLXJvd3MgLmRlc2NyaXB0aW9uLCAudW5pdC1jb3N0LCAucXVhbnRpdHktaG91cmx5LXJhdGUsIC5hbW91bnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzMzMzM7XG59XG5cbi5pbnZvaWNlLXJvd3MgLmRlc2NyaXB0aW9uIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzMzMzM7XG59XG5cbi5pbnZvaWNlLWFkZHJlc3MgLmxhYmVsLFxuLmludm9pY2Utcm93cyAudW5pdC1jb3N0LFxuLmludm9pY2Utcm93cyAucXVhbnRpdHktaG91cmx5LXJhdGUsXG4uaW52b2ljZS1yb3dzIC5hbW91bnQsXG4uaW52b2ljZS10b3RhbCAubGFiZWwsXG4uaW52b2ljZS10b3RhbCAudmFsdWUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cblxuLyoqIFdJVEhPVVQgQU5HVUxBUiAqL1xuLndpdGhvdXQtYW5ndWxhciAuaW52b2ljZS1hZGRyZXNzIHtcbiAgICBmbGV4OiA1MCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLndpdGhvdXQtYW5ndWxhciAuaW52b2ljZS1hZGRyZXNzIC5sYWJlbCxcbi53aXRob3V0LWFuZ3VsYXIgLmludm9pY2UtYWRkcmVzcyAudmFsdWUge1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rudolfo/Code/layout-with-angular-flex-layout/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map