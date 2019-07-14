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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
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
            map(item => parseFloat(item.amount)).
            reduce((sum, amount) => sum + amount);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.html */ "./node_modules/raw-loader/index.js!./src/app/app.html"),
        styles: [__webpack_require__(/*! ./app.css */ "./src/app/app.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.css":
/*!*************************!*\
  !*** ./src/app/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".directives-used li {\n    font-family: 'Courier New', Courier, monospace;\n}\n\nform {\n    width: 50%;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\n.invoice-header {\n    font-size: 16pt;\n    text-align: center;\n}\n\n.invoice-address,\n.invoice-total {\n    font-weight: bold;\n}\n\n.invoice-total {\n    padding: 1rem;\n    font-size: 13pt;\n}\n\n.invoice-header div,\n.invoice-rows div {\n    padding: 1rem;\n    border-bottom: 1px solid #333333;\n}\n\n.invoice-rows .description, .unit-cost, .quantity-hourly-rate, .amount {\n    border-right: 1px solid #333333;\n}\n\n.invoice-rows .description {\n    border-left: 1px solid #333333;\n}\n\n.invoice-address .label,\n.invoice-rows .unit-cost,\n.invoice-rows .quantity-hourly-rate,\n.invoice-rows .amount,\n.invoice-total .label,\n.invoice-total .value {\n    text-align: right;\n    padding-right: 0.5rem;\n}\n\n/** WITHOUT ANGULAR */\n\n.without-angular .invoice-address {\n    flex: 50%;\n    flex-direction: row;\n}\n\n.without-angular .invoice-address .label,\n.without-angular .invoice-address .value {\n    flex-basis: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7OztJQU1JLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlyZWN0aXZlcy11c2VkIGxpIHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uaW52b2ljZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnZvaWNlLWFkZHJlc3MsXG4uaW52b2ljZS10b3RhbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnZvaWNlLXRvdGFsIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMTNwdDtcbn1cblxuLmludm9pY2UtaGVhZGVyIGRpdixcbi5pbnZvaWNlLXJvd3MgZGl2IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xufVxuXG4uaW52b2ljZS1yb3dzIC5kZXNjcmlwdGlvbiwgLnVuaXQtY29zdCwgLnF1YW50aXR5LWhvdXJseS1yYXRlLCAuYW1vdW50IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzMzMzO1xufVxuXG4uaW52b2ljZS1yb3dzIC5kZXNjcmlwdGlvbiB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzMzMzO1xufVxuXG4uaW52b2ljZS1hZGRyZXNzIC5sYWJlbCxcbi5pbnZvaWNlLXJvd3MgLnVuaXQtY29zdCxcbi5pbnZvaWNlLXJvd3MgLnF1YW50aXR5LWhvdXJseS1yYXRlLFxuLmludm9pY2Utcm93cyAuYW1vdW50LFxuLmludm9pY2UtdG90YWwgLmxhYmVsLFxuLmludm9pY2UtdG90YWwgLnZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbi8qKiBXSVRIT1VUIEFOR1VMQVIgKi9cbi53aXRob3V0LWFuZ3VsYXIgLmludm9pY2UtYWRkcmVzcyB7XG4gICAgZmxleDogNTAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi53aXRob3V0LWFuZ3VsYXIgLmludm9pY2UtYWRkcmVzcyAubGFiZWwsXG4ud2l0aG91dC1hbmd1bGFyIC5pbnZvaWNlLWFkZHJlc3MgLnZhbHVlIHtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG59Il19 */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map