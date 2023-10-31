"use strict";
(self["webpackChunkng_material_extensions"] = self["webpackChunkng_material_extensions"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _components_exporter_exporter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/exporter/exporter.component */ 6163);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter/filter.component */ 1047);




class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 20,
    vars: 0,
    consts: [[1, "docs-header-background"], [1, "docs-header-section"], ["href", "https://github.com/HalitTalha/mat-table-extensions", "target", "_blank", 1, "docs-header-container"], ["src", "assets/logos/github.png", 1, "docs-header-logo"], [1, "docs-header-headline"], [1, "mat-h1"], ["mat-align-tabs", "center", 1, "docs-tabs"], ["label", "mat-table-exporter"], ["label", "mat-table-filter"], [1, "docs-footer"], [1, "docs-footer-list"], [1, "docs-footer-logo"], [1, "footer-logo"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "/HalitTalha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "ng-material-extensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Extended features for Angular Material Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-tab-group", 6)(12, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-exporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "footer", 9)(17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _components_exporter_exporter_component__WEBPACK_IMPORTED_MODULE_0__.ExporterComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent],
    styles: [".docs-header-background[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n\n  .docs-header-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.docs-header-logo[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n}\n\n.docs-header-headline[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\na[_ngcontent-%COMP%] {\n   text-decoration:none;\n}\n\n.docs-header-start[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.docs-header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.docs-header-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 25px;\n}\n\n.docs-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 12px;\n  margin-top: 40px;\n  background: #3f51b5;\n  color: #fff;\n  display: block;\n}\n\n.docs-footer-list[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px;\n}\n\n.docs-footer-logo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.footer-logo[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 12px;\n  margin-top: 40px;\n}\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0;\n}\n\n\n\n\n\n@media (max-width: 720px) {\n  .docs-header-section[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n}\n\n  .docs-tabs > .mat-tab-header {\n  background-color: #3f51b5 !important;\n}\n\n  .docs-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-ink-bar {\n  background-color: #fff !important;\n  height: 4px;\n}\n\n  .docs-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > .mat-tab-label > .mat-tab-label-content {\n  color: #fff !important;\n}\n\n  .docs-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > .mat-tab-label-active {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7R0FDRyxvQkFBb0I7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7R0FFRztBQUNIO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jcy1oZWFkZXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG5cbjo6bmctZGVlcCAuZG9jcy1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRvY3MtaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZG9jcy1oZWFkZXItaGVhZGxpbmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYSB7XG4gICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuLmRvY3MtaGVhZGVyLXN0YXJ0IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5kb2NzLWhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRvY3MtaGVhZGVyLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4uZG9jcy1mb290ZXIge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRvY3MtZm9vdGVyLWxpc3Qge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kb2NzLWZvb3Rlci1sb2dvIHtcbiAgZmxleDogMTtcbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5cbmgxIHtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbWFyZ2luOiAxNXB4IDVweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDE1cHggMCAyNXB4IDA7XG59XG5cbi8qKlxuICAqIFJ1bGVzIGZvciB3aGVuIHRoZSBkZXZpY2UgaXMgZGV0ZWN0ZWQgdG8gYmUgYSBzbWFsbCBzY3JlZW4uXG4gICovXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmRvY3MtaGVhZGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAuZG9jcy10YWJzID4gLm1hdC10YWItaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmRvY3MtdGFicyA+IC5tYXQtdGFiLWhlYWRlciA+IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciA+IC5tYXQtdGFiLWxpc3QgPiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4O1xufVxuXG46Om5nLWRlZXAgLmRvY3MtdGFicyA+IC5tYXQtdGFiLWhlYWRlciA+IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciA+IC5tYXQtdGFiLWxpc3QgPiAubWF0LXRhYi1sYWJlbHMgPiAubWF0LXRhYi1sYWJlbCA+IC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmRvY3MtdGFicyA+IC5tYXQtdGFiLWhlYWRlciA+IC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciA+IC5tYXQtdGFiLWxpc3QgPiAubWF0LXRhYi1sYWJlbHMgPiAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   markedOptions: () => (/* binding */ markedOptions)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 6140);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mat-table-exporter */ 884);
/* harmony import */ var _components_exporter_exporter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/exporter/exporter.component */ 6163);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter/filter.component */ 1047);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-markdown */ 1995);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _components_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/example-viewer/example-viewer.component */ 8566);
/* harmony import */ var _components_examples_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/examples/simple-filter/simple-filter.component */ 5252);
/* harmony import */ var _components_examples_custom_column_filter_custom_column_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/examples/custom-column-filter/custom-column-filter.component */ 7980);
/* harmony import */ var _components_examples_array_filter_array_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/examples/array-filter/array-filter.component */ 3922);
/* harmony import */ var _components_examples_property_options_property_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/examples/property-options/property-options.component */ 8853);
/* harmony import */ var _components_examples_brief_exporter_brief_exporter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/examples/brief-exporter/brief-exporter.component */ 7696);
/* harmony import */ var _components_examples_custom_exporter_custom_exporter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/examples/custom-exporter/custom-exporter.component */ 7263);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _components_examples_selection_exporter_selection_exporter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/examples/selection-exporter/selection-exporter.component */ 493);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mat-table-filter */ 8580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
//import { MatTableFilterModule } from 'mat-table-filter';


// tslint:disable-next-line:max-line-length































function markedOptions() {
  return {
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false
  };
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__.PortalModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_16__.MarkdownModule.forRoot({
      loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient,
      markedOptions: {
        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_16__.MarkedOptions,
        useFactory: markedOptions
      }
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, mat_table_filter__WEBPACK_IMPORTED_MODULE_18__.MatTableFilterModule, mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__.MatTableExporterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_exporter_exporter_component__WEBPACK_IMPORTED_MODULE_0__.ExporterComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent, _components_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ExampleViewerComponent, _components_examples_array_filter_array_filter_component__WEBPACK_IMPORTED_MODULE_6__.ArrayFilterComponent, _components_examples_custom_column_filter_custom_column_filter_component__WEBPACK_IMPORTED_MODULE_5__.CustomColumnFilterComponent, _components_examples_simple_filter_simple_filter_component__WEBPACK_IMPORTED_MODULE_4__.SimpleFilterComponent, _components_examples_property_options_property_options_component__WEBPACK_IMPORTED_MODULE_7__.PropertyOptionsComponent, _components_examples_brief_exporter_brief_exporter_component__WEBPACK_IMPORTED_MODULE_8__.BriefExporterComponent, _components_examples_custom_exporter_custom_exporter_component__WEBPACK_IMPORTED_MODULE_9__.CustomExporterComponent, _components_examples_selection_exporter_selection_exporter_component__WEBPACK_IMPORTED_MODULE_10__.SelectionExporterComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__.PortalModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_16__.MarkdownModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, mat_table_filter__WEBPACK_IMPORTED_MODULE_18__.MatTableFilterModule, mat_table_exporter__WEBPACK_IMPORTED_MODULE_19__.MatTableExporterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__.MatSelectModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule]
  });
})();

/***/ }),

/***/ 6178:
/*!***********************************************!*\
  !*** ./src/app/components/add-to-showcase.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddToShowCase: () => (/* binding */ AddToShowCase),
/* harmony export */   showCaseExamples: () => (/* binding */ showCaseExamples)
/* harmony export */ });
const showCaseExamples = new Map();
function AddToShowCase(categoryName, fileName, description) {
  return type => {
    type.prototype.fileName = fileName;
    type.prototype.description = description;
    const categoryArray = showCaseExamples.get(categoryName);
    if (!categoryArray) {
      const examples = new Array();
      examples.push(type);
      showCaseExamples.set(categoryName, examples);
    } else {
      categoryArray.push(type);
    }
    return type;
  };
}

/***/ }),

/***/ 7046:
/*!**********************************************!*\
  !*** ./src/app/components/base-component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
  constructor() {}
}

/***/ }),

/***/ 8566:
/*!***********************************************************************!*\
  !*** ./src/app/components/example-viewer/example-viewer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleViewerComponent: () => (/* binding */ ExampleViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 1995);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 989);










function ExampleViewerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "mat-tab-group", 11)(2, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "markdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "markdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "markdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.htmlDoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.tsDoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.cssDoc);
  }
}
function ExampleViewerComponent_ng_template_12_Template(rf, ctx) {}
class ExampleViewerComponent {
  static #_ = this.ASSETS_ROOT = './assets/';
  static #_2 = this.SOURCES_PATH = 'example-sources/';
  set exampleType(type) {
    this.example = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(type);
    this.fileName = type.prototype.fileName;
    this.description = type.prototype.description;
    // this.stackBlitzLink = type.prototype.stackBlitzLink;
    this.htmlDoc = this.resolveFilePath('.html'); // Will be replaced with a more convinient webpack/bazel solution
    this.tsDoc = this.resolveFilePath('.js');
    this.cssDoc = this.resolveFilePath('.css');
  }
  constructor() {}
  toggleSource() {
    this.showSource = !this.showSource;
  }
  resolveFilePath(extension) {
    return ExampleViewerComponent.ASSETS_ROOT + ExampleViewerComponent.SOURCES_PATH + this.fileName.replace('.component', '/') + this.fileName + extension;
  }
  static #_3 = this.ɵfac = function ExampleViewerComponent_Factory(t) {
    return new (t || ExampleViewerComponent)();
  };
  static #_4 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExampleViewerComponent,
    selectors: [["app-example-viewer"]],
    inputs: {
      exampleType: "exampleType"
    },
    decls: 13,
    vars: 4,
    consts: [[1, "docs-example-viewer-wrapper"], [1, "docs-example-viewer-title"], [1, "docs-example-viewer-title-spacer"], ["mat-icon-button", "", "type", "button", 3, "matTooltip", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 24 24", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["fill", "none", "d", "M0 0h24v24H0V0z"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["class", "docs-example-viewer-source", 4, "ngIf"], [1, "docs-example-viewer-body"], [3, "cdkPortalOutlet"], [1, "docs-example-viewer-source"], [1, "docs-source-tabs"], ["label", "HTML"], [3, "src"], ["label", "TS"], ["label", "CSS"]],
    template: function ExampleViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleViewerComponent_Template_button_click_4_listener() {
          return ctx.toggleSource();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5)(8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleViewerComponent_div_9_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleViewerComponent_ng_template_12_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "View source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.example);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 20px 0;\n}\n\n\n.docs-example-viewer-title[_ngcontent-%COMP%] {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 8px 20px;\n  color: rgba(0,0,0,.54);\n  background: rgba(0,0,0,.03);\n}\n\n.docs-example-viewer-title-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.docs-example-source-copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  display: none;\n}\n\n\n.docs-example-source[_ngcontent-%COMP%] {\n  padding: 0 30px 10px 30px;\n  min-height: 150px;\n}\n\n.docs-example-viewer-body[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.docs-example-viewer-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  margin: 4px;\n}\n\n\n.docs-example-source-copy[_ngcontent-%COMP%] {\n  right: 8px;\n}\n\n.docs-example-source[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n  .docs-source-tabs > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels {\n  justify-content: flex-start !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXZpZXdlci9leGFtcGxlLXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtBQUNmOzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzRUFBc0U7RUFDdEUsV0FBVztBQUNiOzs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cblxuLmRvY3MtZXhhbXBsZS12aWV3ZXItdGl0bGUge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDMpO1xufVxuXG4uZG9jcy1leGFtcGxlLXZpZXdlci10aXRsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmRvY3MtZXhhbXBsZS1zb3VyY2UtY29weSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLmRvY3MtZXhhbXBsZS1zb3VyY2Uge1xuICBwYWRkaW5nOiAwIDMwcHggMTBweCAzMHB4O1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cblxuLmRvY3MtZXhhbXBsZS12aWV3ZXItYm9keSB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5kb2NzLWV4YW1wbGUtdmlld2VyLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDRweDtcbn1cblxuXG4uZG9jcy1leGFtcGxlLXNvdXJjZS1jb3B5IHtcbiAgcmlnaHQ6IDhweDtcbn1cblxuLmRvY3MtZXhhbXBsZS1zb3VyY2Uge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuOjpuZy1kZWVwIC5kb2NzLXNvdXJjZS10YWJzID4gLm1hdC10YWItaGVhZGVyID4gLm1hdC10YWItbGFiZWwtY29udGFpbmVyID4gLm1hdC10YWItbGlzdCA+IC5tYXQtdGFiLWxhYmVscyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3922:
/*!****************************************************************************!*\
  !*** ./src/app/components/examples/array-filter/array-filter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayFilterComponent: () => (/* binding */ ArrayFilterComponent),
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mat-table-filter */ 8580);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);














function ArrayFilterComponent_mat_header_cell_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 8)(2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ArrayFilterComponent_mat_header_cell_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.filterEntity.category = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.filterEntity.category);
  }
}
function ArrayFilterComponent_mat_cell_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10.category, " ");
  }
}
function ArrayFilterComponent_mat_header_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 8)(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ArrayFilterComponent_mat_header_cell_7_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.filterEntity.brand = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterEntity.brand);
  }
}
function ArrayFilterComponent_mat_cell_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.brand, " ");
  }
}
function ArrayFilterComponent_mat_header_cell_10_mat_chip_row_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function ArrayFilterComponent_mat_header_cell_10_mat_chip_row_4_Template_mat_chip_row_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const size_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.remove(size_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const size_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r16, " ");
  }
}
function ArrayFilterComponent_mat_header_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 11)(2, "mat-chip-grid", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArrayFilterComponent_mat_header_cell_10_mat_chip_row_4_Template, 4, 1, "mat-chip-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function ArrayFilterComponent_mat_header_cell_10_Template_input_matChipInputTokenEnd_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.add($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.filterEntity.availableSizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r14)("matChipInputSeparatorKeyCodes", ctx_r4.separatorKeysCodes)("matChipInputAddOnBlur", true);
  }
}
function ArrayFilterComponent_mat_cell_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.availableSizes, " ");
  }
}
function ArrayFilterComponent_mat_header_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function ArrayFilterComponent_mat_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
class Product {}
const PRODUCTS = [{
  category: 'T-Shirt',
  brand: 'X',
  availableSizes: ['S', 'M', 'L', 'XL']
}, {
  category: 'T-Shirt',
  brand: 'Y',
  availableSizes: ['S', 'L', 'XL']
}, {
  category: 'T-Shirt',
  brand: 'Z',
  availableSizes: ['XL']
}, {
  category: 'Jean',
  brand: 'X',
  availableSizes: ['S', 'M', 'L', 'XL']
}, {
  category: 'Jean',
  brand: 'Y',
  availableSizes: ['S', 'M']
}, {
  category: 'Jean',
  brand: 'Z',
  availableSizes: ['S', 'M', 'L']
}, {
  category: 'Jean',
  brand: 'B',
  availableSizes: ['S', 'M', 'L']
}, {
  category: 'Jacket',
  brand: 'X',
  availableSizes: ['S', 'L', 'XL']
}, {
  category: 'Jacket',
  brand: 'Z',
  availableSizes: ['S']
}, {
  category: 'Pants',
  brand: 'X',
  availableSizes: ['S', 'M', 'L', 'XL']
}, {
  category: 'Pants',
  brand: 'Y',
  availableSizes: ['L', 'XL']
}, {
  category: 'Pants',
  brand: 'Z',
  availableSizes: ['S']
}, {
  category: 'Hat',
  brand: 'X',
  availableSizes: ['S', 'M', 'L']
}, {
  category: 'Skirt',
  brand: 'X',
  availableSizes: ['S', 'M', 'L', 'XL']
}, {
  category: 'Skirt',
  brand: 'Y',
  availableSizes: ['S', 'M', 'L']
}];
let ArrayFilterComponent = class ArrayFilterComponent {
  constructor() {
    this.displayedColumns = ['category', 'brand', 'availableSizes'];
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.COMMA];
  }
  add(event) {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      this.filterEntity.availableSizes.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(size) {
    const index = this.filterEntity.availableSizes.indexOf(size);
    if (index >= 0) {
      this.filterEntity.availableSizes.splice(index, 1);
    }
  }
  ngOnInit() {
    this.filterEntity = new Product();
    this.filterEntity.availableSizes = new Array(); // DO NOT FORGET TO INIT THE ARRAY
    this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_3__.MatTableFilter.ANYWHERE;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(PRODUCTS);
  }
  static #_ = this.ɵfac = function ArrayFilterComponent_Factory(t) {
    return new (t || ArrayFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ArrayFilterComponent,
    selectors: [["app-array-filter"]],
    decls: 14,
    vars: 5,
    consts: [["matTableFilter", "", 1, "mat-elevation-z8", 3, "exampleEntity", "filterType", "dataSource"], ["matColumnDef", "category"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "brand"], ["matColumnDef", "availableSizes"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["appearance", "outline"], ["matInput", "", "placeholder", "Category", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Product Brand", 3, "ngModel", "ngModelChange"], [1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipGrid", ""], ["removable", "", 3, "removed", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Add Size", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["removable", "", 3, "removed"], ["matChipRemove", ""]],
    template: function ArrayFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demonstrates filtering of an Array type column. Enter Size chips for filtering.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArrayFilterComponent_mat_header_cell_4_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArrayFilterComponent_mat_cell_5_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArrayFilterComponent_mat_header_cell_7_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ArrayFilterComponent_mat_cell_8_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ArrayFilterComponent_mat_header_cell_10_Template, 6, 4, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArrayFilterComponent_mat_cell_11_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ArrayFilterComponent_mat_header_row_12_Template, 1, 0, "mat-header-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ArrayFilterComponent_mat_row_13_Template, 1, 0, "mat-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, mat_table_filter__WEBPACK_IMPORTED_MODULE_3__.MatTableFilterDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-top:15px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9hcnJheS1maWx0ZXIvYXJyYXktZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOjE1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
};
ArrayFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('filter', 'array-filter.component', 'Array Filter')], ArrayFilterComponent);


/***/ }),

/***/ 7696:
/*!********************************************************************************!*\
  !*** ./src/app/components/examples/brief-exporter/brief-exporter.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BriefExporterComponent: () => (/* binding */ BriefExporterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-table-exporter */ 884);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);









function BriefExporterComponent_mat_header_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BriefExporterComponent_mat_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.position, " ");
  }
}
function BriefExporterComponent_mat_header_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BriefExporterComponent_mat_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function BriefExporterComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Surname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BriefExporterComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.surname, " ");
  }
}
function BriefExporterComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BriefExporterComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.birth, " ");
  }
}
function BriefExporterComponent_mat_header_row_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function BriefExporterComponent_mat_row_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
const _c0 = function () {
  return [0];
};
const _c1 = function () {
  return [5, 10, 20];
};
let BriefExporterComponent = class BriefExporterComponent {
  constructor() {
    this.title = 'mte-test';
    this.displayedColumns = ['position', 'name', 'surname', 'birth'];
  }
  ngOnInit() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  static #_ = this.ɵfac = function BriefExporterComponent_Factory(t) {
    return new (t || BriefExporterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BriefExporterComponent,
    selectors: [["app-brief-exporter"]],
    viewQuery: function BriefExporterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 29,
    vars: 7,
    consts: [[1, "example-container", "mat-elevation-z8"], ["matTableExporter", "", 3, "dataSource", "hiddenColumns"], ["exporter", "matTableExporter"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "surname"], ["matColumnDef", "birth"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-raised-button", "", 3, "click"]],
    template: function BriefExporterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Briefly demonstrates all exporting functionalities of mat-table-exporter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "mat-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BriefExporterComponent_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BriefExporterComponent_mat_cell_7_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BriefExporterComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BriefExporterComponent_mat_cell_10_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BriefExporterComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BriefExporterComponent_mat_cell_13_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BriefExporterComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BriefExporterComponent_mat_cell_16_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BriefExporterComponent_mat_header_row_17_Template, 1, 0, "mat-header-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BriefExporterComponent_mat_row_18_Template, 1, 0, "mat-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BriefExporterComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("xlsx", {
            sheet: "sheet_name",
            Props: {
              Author: "Talha"
            },
            columnWidths: [50, 5, 3]
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BriefExporterComponent_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("csv"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Csv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BriefExporterComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("json"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BriefExporterComponent_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("txt"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Txt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("hiddenColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
      }
    },
    dependencies: [mat_table_exporter__WEBPACK_IMPORTED_MODULE_4__.MatTableExporterDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow],
    styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  margin-bottom: 10px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9icmllZi1leHBvcnRlci9icmllZi1leHBvcnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
};
BriefExporterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('exporter', 'brief-exporter.component', 'Overall Exporting Example')], BriefExporterComponent);

const ELEMENT_DATA = [{
  position: 1,
  name: 'Albert',
  surname: 'Einstein',
  birth: '1879'
}, {
  position: 2,
  name: 'Marie',
  surname: 'Curie',
  birth: '1867'
}, {
  position: 3,
  name: 'Enrico',
  surname: 'Fermi',
  birth: '1901'
}, {
  position: 4,
  name: 'Dmitri',
  surname: 'Mendeleev',
  birth: '1834'
}, {
  position: 5,
  name: 'Alfred',
  surname: 'Nobel',
  birth: '1833'
}, {
  position: 6,
  name: 'Ernest',
  surname: 'Lawrence',
  birth: '1901'
}, {
  position: 7,
  name: 'Glenn',
  surname: 'Seaborg',
  birth: '1912'
}, {
  position: 8,
  name: 'Niels',
  surname: 'Bohr',
  birth: '1885'
}, {
  position: 9,
  name: 'Lise',
  surname: 'Meitner',
  birth: '1878'
}, {
  position: 10,
  name: 'Wilhelm',
  surname: 'Röntgen',
  birth: '1845'
}, {
  position: 11,
  name: 'Nicolaus',
  surname: 'Copernicus',
  birth: '1473'
}, {
  position: 12,
  name: 'Georgy',
  surname: 'Flyorov',
  birth: '1913'
}, {
  position: 13,
  name: 'Yuri',
  surname: 'Oganessian',
  birth: '1933'
}, {
  position: 14,
  name: 'Johan',
  surname: 'Gadolin',
  birth: '1760'
}, {
  position: 15,
  name: 'Pierre',
  surname: 'Curie',
  birth: '1859'
}];

/***/ }),

/***/ 7980:
/*!********************************************************************************************!*\
  !*** ./src/app/components/examples/custom-column-filter/custom-column-filter.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomColumnFilterComponent: () => (/* binding */ CustomColumnFilterComponent),
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mat-table-filter */ 8580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 1333);










function CustomColumnFilterComponent_mat_header_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 7)(2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomColumnFilterComponent_mat_header_cell_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.filterEntity.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.filterEntity.name);
  }
}
function CustomColumnFilterComponent_mat_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r8.name, " ");
  }
}
function CustomColumnFilterComponent_mat_header_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Journey Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomColumnFilterComponent_mat_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r9.journeyTime, " ");
  }
}
function CustomColumnFilterComponent_mat_header_row_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function CustomColumnFilterComponent_mat_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
class Route {}
const ROUTES = [{
  name: 'FRA-IST-JFK',
  journeyTime: '10:00'
}, {
  name: 'MLE-IST-ESB',
  journeyTime: '10:30'
}, {
  name: 'IST-ESB-GZT',
  journeyTime: '01:30'
}, {
  name: 'IST-ESB-GZT',
  journeyTime: '01:30'
}, {
  name: 'JFK-SAW-AYT',
  journeyTime: '02:45'
}, {
  name: 'JFK-SAW-FRA',
  journeyTime: '02:45'
}, {
  name: 'JFK-SAW-FRA',
  journeyTime: '02:45'
}];
let CustomColumnFilterComponent = class CustomColumnFilterComponent {
  constructor() {
    this.displayedColumns = ['name', 'journeyTime'];
  }
  ngOnInit() {
    this.filterEntity = new Route();
    this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_2__.MatTableFilter.ANYWHERE;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(ROUTES);
    this.propertyOptions = {
      name: routeName => {
        return routeName.split('-')[1] === this.filterEntity.name; // filter for only the station in the middle
      }
    };
  }
  static #_ = this.ɵfac = function CustomColumnFilterComponent_Factory(t) {
    return new (t || CustomColumnFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomColumnFilterComponent,
    selectors: [["app-simple-filter"]],
    decls: 13,
    vars: 6,
    consts: [["matTableFilter", "", 1, "mat-elevation-z8", 3, "exampleEntity", "propertyOptions", "filterType", "dataSource"], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "journeyTime"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["appearance", "outline"], ["matInput", "", "placeholder", "Flight Route", 3, "ngModel", "ngModelChange"]],
    template: function CustomColumnFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demonstrates a custom filtering requirement where only some part of the string needs to be filtered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Flight Route is filtered according to the custom filtering predicate provided with propertyOptions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomColumnFilterComponent_mat_header_cell_6_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomColumnFilterComponent_mat_cell_7_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CustomColumnFilterComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomColumnFilterComponent_mat_cell_10_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CustomColumnFilterComponent_mat_header_row_11_Template, 1, 0, "mat-header-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomColumnFilterComponent_mat_row_12_Template, 1, 0, "mat-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("exampleEntity", ctx.filterEntity)("propertyOptions", ctx.propertyOptions)("filterType", ctx.filterType)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, mat_table_filter__WEBPACK_IMPORTED_MODULE_2__.MatTableFilterDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-top:15px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9jdXN0b20tY29sdW1uLWZpbHRlci9jdXN0b20tY29sdW1uLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDoxNXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
};
CustomColumnFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('filter', 'custom-column-filter.component', 'Custom Property Predicate')], CustomColumnFilterComponent);


/***/ }),

/***/ 7263:
/*!**********************************************************************************!*\
  !*** ./src/app/components/examples/custom-exporter/custom-exporter.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomExporter: () => (/* binding */ CustomExporter),
/* harmony export */   CustomExporterComponent: () => (/* binding */ CustomExporterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-table-exporter */ 884);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);









function CustomExporterComponent_mat_header_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomExporterComponent_mat_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.position, " ");
  }
}
function CustomExporterComponent_mat_header_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomExporterComponent_mat_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function CustomExporterComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Surname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomExporterComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.surname, " ");
  }
}
function CustomExporterComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomExporterComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.birth, " ");
  }
}
function CustomExporterComponent_mat_header_row_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function CustomExporterComponent_mat_row_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
const _c0 = function () {
  return [0];
};
const _c1 = function () {
  return [5, 10, 20];
};
class CustomExporter {
  export(rows, options) {
    console.log(rows);
  }
}
let CustomExporterComponent = class CustomExporterComponent {
  constructor() {
    this.title = 'mte-test';
    this.displayedColumns = ['position', 'name', 'surname', 'birth'];
  }
  ngOnInit() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(ELEMENT_DATA);
    this.customExporter = new CustomExporter(); // YOU CAN BENEFIT FROM DI TOO.
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  static #_ = this.ɵfac = function CustomExporterComponent_Factory(t) {
    return new (t || CustomExporterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomExporterComponent,
    selectors: [["app-custom-exporter"]],
    viewQuery: function CustomExporterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 23,
    vars: 8,
    consts: [[1, "example-container", "mat-elevation-z8"], ["matTableExporter", "", 3, "dataSource", "exporter", "hiddenColumns"], ["exportDirective", "matTableExporter"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "surname"], ["matColumnDef", "birth"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-raised-button", "", 3, "click"]],
    template: function CustomExporterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demonstrates the use of a custom exporter implementation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "mat-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomExporterComponent_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomExporterComponent_mat_cell_7_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CustomExporterComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomExporterComponent_mat_cell_10_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomExporterComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CustomExporterComponent_mat_cell_13_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CustomExporterComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CustomExporterComponent_mat_cell_16_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CustomExporterComponent_mat_header_row_17_Template, 1, 0, "mat-header-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CustomExporterComponent_mat_row_18_Template, 1, 0, "mat-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomExporterComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("other"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Custom Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("exporter", ctx.customExporter)("hiddenColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
      }
    },
    dependencies: [mat_table_exporter__WEBPACK_IMPORTED_MODULE_4__.MatTableExporterDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow],
    styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  margin-bottom: 10px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9jdXN0b20tZXhwb3J0ZXIvY3VzdG9tLWV4cG9ydGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
};
CustomExporterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('exporter', 'custom-exporter.component', 'Custom Exporting Implementation')], CustomExporterComponent);

const ELEMENT_DATA = [{
  position: 1,
  name: 'Albert',
  surname: 'Einstein',
  birth: '1879'
}, {
  position: 2,
  name: 'Marie',
  surname: 'Curie',
  birth: '1867'
}, {
  position: 3,
  name: 'Enrico',
  surname: 'Fermi',
  birth: '1901'
}, {
  position: 4,
  name: 'Dmitri',
  surname: 'Mendeleev',
  birth: '1834'
}, {
  position: 5,
  name: 'Alfred',
  surname: 'Nobel',
  birth: '1833'
}, {
  position: 6,
  name: 'Ernest',
  surname: 'Lawrence',
  birth: '1901'
}, {
  position: 7,
  name: 'Glenn',
  surname: 'Seaborg',
  birth: '1912'
}, {
  position: 8,
  name: 'Niels',
  surname: 'Bohr',
  birth: '1885'
}, {
  position: 9,
  name: 'Lise',
  surname: 'Meitner',
  birth: '1878'
}, {
  position: 10,
  name: 'Wilhelm',
  surname: 'Röntgen',
  birth: '1845'
}, {
  position: 11,
  name: 'Nicolaus',
  surname: 'Copernicus',
  birth: '1473'
}, {
  position: 12,
  name: 'Georgy',
  surname: 'Flyorov',
  birth: '1913'
}, {
  position: 13,
  name: 'Yuri',
  surname: 'Oganessian',
  birth: '1933'
}, {
  position: 14,
  name: 'Johan',
  surname: 'Gadolin',
  birth: '1760'
}, {
  position: 15,
  name: 'Pierre',
  surname: 'Curie',
  birth: '1859'
}];

/***/ }),

/***/ 8853:
/*!************************************************************************************!*\
  !*** ./src/app/components/examples/property-options/property-options.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Captain: () => (/* binding */ Captain),
/* harmony export */   PropertyOptionsComponent: () => (/* binding */ PropertyOptionsComponent),
/* harmony export */   SpaceCraft: () => (/* binding */ SpaceCraft)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mat-table-filter */ 8580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);











function PropertyOptionsComponent_mat_header_cell_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 9)(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropertyOptionsComponent_mat_header_cell_6_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.filterEntity.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.filterEntity.name);
  }
}
function PropertyOptionsComponent_mat_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function PropertyOptionsComponent_mat_header_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 9)(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropertyOptionsComponent_mat_header_cell_9_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.filterEntity.captain.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterEntity.captain.name);
  }
}
function PropertyOptionsComponent_mat_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r15.captain.name, " ");
  }
}
function PropertyOptionsComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 9)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropertyOptionsComponent_mat_header_cell_12_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.filterEntity.captain.surname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.filterEntity.captain.surname);
  }
}
function PropertyOptionsComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.captain.surname, " ");
  }
}
function PropertyOptionsComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropertyOptionsComponent_mat_header_cell_15_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.filterEntity.isConstitutionClass = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Constitution Class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.filterEntity.isConstitutionClass);
  }
}
function PropertyOptionsComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.isConstitutionClass, " ");
  }
}
function PropertyOptionsComponent_mat_header_row_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function PropertyOptionsComponent_mat_row_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
class Captain {}
class SpaceCraft {}
const SPACECRAFT_DATA = [{
  name: 'Endurance',
  isConstitutionClass: false,
  captain: {
    name: 'Joseph',
    surname: 'Cooper'
  }
}, {
  name: 'Enterprise',
  isConstitutionClass: true,
  captain: {
    name: 'Christopher',
    surname: 'Pike'
  }
}, {
  name: 'Enterprise',
  isConstitutionClass: true,
  captain: {
    name: 'Talha',
    surname: 'Türe'
  }
}, {
  name: 'Discovery',
  isConstitutionClass: true,
  captain: {
    name: 'Christopher',
    surname: 'Pike'
  }
}, {
  name: 'Enterprise',
  isConstitutionClass: false,
  captain: {
    name: 'Jean-Luc',
    surname: 'Pickard'
  }
}];
let PropertyOptionsComponent = class PropertyOptionsComponent {
  constructor() {
    this.displayedColumns = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  }
  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterEntity.isConstitutionClass = false; // leaving a filter property undefined means you want all the data without filtering
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(SPACECRAFT_DATA);
    // captain.name property filtering needs an exact match with case sensitiveness
    // All other properties will be filtered with ANYWHERE search
    this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_3__.MatTableFilter.ANYWHERE;
    this.propertyOptions = {
      'captain.name': {
        filterType: mat_table_filter__WEBPACK_IMPORTED_MODULE_3__.MatTableFilter.EQUALS,
        caseSensitive: true
      }
    };
  }
  static #_ = this.ɵfac = function PropertyOptionsComponent_Factory(t) {
    return new (t || PropertyOptionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PropertyOptionsComponent,
    selectors: [["app-property-options"]],
    decls: 19,
    vars: 6,
    consts: [["matTableFilter", "", 1, "mat-elevation-z8", 3, "exampleEntity", "propertyOptions", "filterType", "dataSource"], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "captainName"], ["matColumnDef", "captainSurname"], ["matColumnDef", "isConstitutionClass"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Captain Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Captain Surname", 3, "ngModel", "ngModelChange"], [1, "constitution-padding", 3, "ngModel", "ngModelChange"]],
    template: function PropertyOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demonstrates how to handle filtering for specific properties of table items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "In this example the table lists space-crafts. A space-craft has a captain. A captain has some properties. Filtering for captain's name is done with an exact match. The rest of the properties are filtered with ANYWHERE filter type.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PropertyOptionsComponent_mat_header_cell_6_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PropertyOptionsComponent_mat_cell_7_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PropertyOptionsComponent_mat_header_cell_9_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PropertyOptionsComponent_mat_cell_10_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PropertyOptionsComponent_mat_header_cell_12_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PropertyOptionsComponent_mat_cell_13_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PropertyOptionsComponent_mat_header_cell_15_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PropertyOptionsComponent_mat_cell_16_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PropertyOptionsComponent_mat_header_row_17_Template, 1, 0, "mat-header-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PropertyOptionsComponent_mat_row_18_Template, 1, 0, "mat-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("exampleEntity", ctx.filterEntity)("propertyOptions", ctx.propertyOptions)("filterType", ctx.filterType)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, mat_table_filter__WEBPACK_IMPORTED_MODULE_3__.MatTableFilterDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-top:15px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9wcm9wZXJ0eS1vcHRpb25zL3Byb3BlcnR5LW9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6MTVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
};
PropertyOptionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('filter', 'property-options.component', 'Changing Property Options')], PropertyOptionsComponent);


/***/ }),

/***/ 493:
/*!****************************************************************************************!*\
  !*** ./src/app/components/examples/selection-exporter/selection-exporter.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionExporterComponent: () => (/* binding */ SelectionExporterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ 636);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mat-table-exporter */ 884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);












function SelectionExporterComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionExporterComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17)(1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionExporterComponent_td_7_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("change", function SelectionExporterComponent_td_7_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const row_r13 = restoredCtx.$implicit;
      const i_r14 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event ? ctx_r16.toggleRow(row_r13, i_r14) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r13))("aria-label", ctx_r2.checkboxLabel(row_r13));
  }
}
function SelectionExporterComponent_mat_header_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionExporterComponent_mat_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.position, " ");
  }
}
function SelectionExporterComponent_mat_header_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionExporterComponent_mat_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.name, " ");
  }
}
function SelectionExporterComponent_mat_header_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Surname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionExporterComponent_mat_cell_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.surname, " ");
  }
}
function SelectionExporterComponent_mat_header_cell_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SelectionExporterComponent_mat_cell_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.birth, " ");
  }
}
function SelectionExporterComponent_mat_header_row_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function SelectionExporterComponent_mat_row_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
const _c0 = function () {
  return [0];
};
const _c1 = function () {
  return [5, 10, 20];
};
let SelectionExporterComponent = class SelectionExporterComponent {
  constructor() {
    this.title = 'mte-test';
    this.displayedColumns = ['select', 'position', 'name', 'surname', 'birth'];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleRow(row, index) {
    this.selection.toggle(row);
    this.exporter.toggleRow(index);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row) {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  static #_ = this.ɵfac = function SelectionExporterComponent_Factory(t) {
    return new (t || SelectionExporterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SelectionExporterComponent,
    selectors: [["app-selection-exporter"]],
    viewQuery: function SelectionExporterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](mat_table_exporter__WEBPACK_IMPORTED_MODULE_5__.MatTableExporterDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.exporter = _t.first);
      }
    },
    decls: 32,
    vars: 7,
    consts: [[1, "example-container", "mat-elevation-z8"], ["matTableExporter", "", 3, "dataSource", "hiddenColumns"], ["exporter", "matTableExporter"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "surname"], ["matColumnDef", "birth"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-raised-button", "", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"]],
    template: function SelectionExporterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demonstrates how to export selected rows. Having no row selected means to export all.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "mat-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectionExporterComponent_th_6_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SelectionExporterComponent_td_7_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SelectionExporterComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SelectionExporterComponent_mat_cell_10_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SelectionExporterComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SelectionExporterComponent_mat_cell_13_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SelectionExporterComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SelectionExporterComponent_mat_cell_16_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SelectionExporterComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SelectionExporterComponent_mat_cell_19_Template, 2, 1, "mat-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SelectionExporterComponent_mat_header_row_20_Template, 1, 0, "mat-header-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SelectionExporterComponent_mat_row_21_Template, 1, 0, "mat-row", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionExporterComponent_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("xlsx", {
            sheet: "sheet_name",
            Props: {
              Author: "Talha"
            },
            columnWidths: [50, 5, 3]
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionExporterComponent_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("csv"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Csv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionExporterComponent_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("json"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectionExporterComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.exportTable("txt"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Txt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("hiddenColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
      }
    },
    dependencies: [mat_table_exporter__WEBPACK_IMPORTED_MODULE_5__.MatTableExporterDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
    styles: [".mat-column-select[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9zZWxlY3Rpb24tZXhwb3J0ZXIvc2VsZWN0aW9uLWV4cG9ydGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1zZWxlY3Qge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
};
SelectionExporterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('exporter', 'selection-exporter.component', 'Selected Row Exporting Example')], SelectionExporterComponent);

const ELEMENT_DATA = [{
  position: 1,
  name: 'Albert',
  surname: 'Einstein',
  birth: '1879'
}, {
  position: 2,
  name: 'Marie',
  surname: 'Curie',
  birth: '1867'
}, {
  position: 3,
  name: 'Enrico',
  surname: 'Fermi',
  birth: '1901'
}, {
  position: 4,
  name: 'Dmitri',
  surname: 'Mendeleev',
  birth: '1834'
}, {
  position: 5,
  name: 'Alfred',
  surname: 'Nobel',
  birth: '1833'
}, {
  position: 6,
  name: 'Ernest',
  surname: 'Lawrence',
  birth: '1901'
}, {
  position: 7,
  name: 'Glenn',
  surname: 'Seaborg',
  birth: '1912'
}, {
  position: 8,
  name: 'Niels',
  surname: 'Bohr',
  birth: '1885'
}, {
  position: 9,
  name: 'Lise',
  surname: 'Meitner',
  birth: '1878'
}, {
  position: 10,
  name: 'Wilhelm',
  surname: 'Röntgen',
  birth: '1845'
}, {
  position: 11,
  name: 'Nicolaus',
  surname: 'Copernicus',
  birth: '1473'
}, {
  position: 12,
  name: 'Georgy',
  surname: 'Flyorov',
  birth: '1913'
}, {
  position: 13,
  name: 'Yuri',
  surname: 'Oganessian',
  birth: '1933'
}, {
  position: 14,
  name: 'Johan',
  surname: 'Gadolin',
  birth: '1760'
}, {
  position: 15,
  name: 'Pierre',
  surname: 'Curie',
  birth: '1859'
}];

/***/ }),

/***/ 5252:
/*!******************************************************************************!*\
  !*** ./src/app/components/examples/simple-filter/simple-filter.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Captain: () => (/* binding */ Captain),
/* harmony export */   SimpleFilterComponent: () => (/* binding */ SimpleFilterComponent),
/* harmony export */   SpaceCraft: () => (/* binding */ SpaceCraft)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../add-to-showcase */ 6178);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var mat_table_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mat-table-filter */ 8580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);











function SimpleFilterComponent_mat_header_cell_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 9)(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimpleFilterComponent_mat_header_cell_4_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.filterEntity.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.filterEntity.name);
  }
}
function SimpleFilterComponent_mat_cell_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function SimpleFilterComponent_mat_header_cell_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 9)(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimpleFilterComponent_mat_header_cell_7_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.filterEntity.captain.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.filterEntity.captain.name);
  }
}
function SimpleFilterComponent_mat_cell_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r15.captain == null ? null : element_r15.captain.name, " ");
  }
}
function SimpleFilterComponent_mat_header_cell_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-form-field", 9)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimpleFilterComponent_mat_header_cell_10_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.filterEntity.captain.surname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.filterEntity.captain.surname);
  }
}
function SimpleFilterComponent_mat_cell_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.captain == null ? null : element_r18.captain.surname, " ");
  }
}
function SimpleFilterComponent_mat_header_cell_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell")(1, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SimpleFilterComponent_mat_header_cell_13_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.filterEntity.isConstitutionClass = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Constitution Class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.filterEntity.isConstitutionClass);
  }
}
function SimpleFilterComponent_mat_cell_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.isConstitutionClass, " ");
  }
}
function SimpleFilterComponent_mat_header_row_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function SimpleFilterComponent_mat_row_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
class Captain {}
class SpaceCraft {}
const SPACECRAFT_DATA = [{
  name: 'Endurance',
  isConstitutionClass: false,
  captain: {
    name: 'Joseph',
    surname: 'Cooper'
  }
}, {
  name: 'Enterprise',
  isConstitutionClass: true,
  captain: {
    name: 'Christopher',
    surname: 'Pike'
  }
}, {
  name: 'Enterprise',
  isConstitutionClass: true,
  captain: {
    name: 'Talha',
    surname: 'Türe'
  }
}, {
  name: 'Discovery',
  isConstitutionClass: true,
  captain: {
    name: 'Christopher',
    surname: 'Pike'
  }
}, {
  name: 'Enterprise',
  isConstitutionClass: false,
  captain: {
    name: 'Jean-Luc',
    surname: 'Pickard'
  }
}, {
  name: '',
  isConstitutionClass: true,
  captain: {
    name: 'Christopher',
    surname: 'Pike'
  }
}, {
  name: 'Discovery',
  isConstitutionClass: true,
  captain: {}
}];
let SimpleFilterComponent = class SimpleFilterComponent {
  constructor() {
    this.displayedColumns = ['name', 'captainName', 'captainSurname', 'isConstitutionClass'];
  }
  ngOnInit() {
    // Do not forget to initialize your object and it's non-primitive properties
    this.filterEntity = new SpaceCraft();
    this.filterEntity.captain = new Captain();
    this.filterEntity.isConstitutionClass = false; // leaving a filter property undefined means you want all the data without filtering
    this.filterType = mat_table_filter__WEBPACK_IMPORTED_MODULE_2__.MatTableFilter.ANYWHERE;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(SPACECRAFT_DATA);
  }
  static #_ = this.ɵfac = function SimpleFilterComponent_Factory(t) {
    return new (t || SimpleFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SimpleFilterComponent,
    selectors: [["app-simple-filter"]],
    decls: 17,
    vars: 5,
    consts: [["matTableFilter", "", 1, "mat-elevation-z8", 3, "exampleEntity", "filterType", "dataSource"], ["matColumnDef", "name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "captainName"], ["matColumnDef", "captainSurname"], ["matColumnDef", "isConstitutionClass"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Captain Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Captain Surname", 3, "ngModel", "ngModelChange"], [1, "constitution-padding", 3, "ngModel", "ngModelChange"]],
    template: function SimpleFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Briefly demonstrates the basic usage of mat-table-filter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SimpleFilterComponent_mat_header_cell_4_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SimpleFilterComponent_mat_cell_5_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SimpleFilterComponent_mat_header_cell_7_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SimpleFilterComponent_mat_cell_8_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SimpleFilterComponent_mat_header_cell_10_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SimpleFilterComponent_mat_cell_11_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SimpleFilterComponent_mat_header_cell_13_Template, 3, 1, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SimpleFilterComponent_mat_cell_14_Template, 2, 1, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SimpleFilterComponent_mat_header_row_15_Template, 1, 0, "mat-header-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SimpleFilterComponent_mat_row_16_Template, 1, 0, "mat-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("exampleEntity", ctx.filterEntity)("filterType", ctx.filterType)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, mat_table_filter__WEBPACK_IMPORTED_MODULE_2__.MatTableFilterDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
    styles: [".constitution-padding[_ngcontent-%COMP%]{\n  padding-left:15px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-top:15px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlcy9zaW1wbGUtZmlsdGVyL3NpbXBsZS1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uc3RpdHV0aW9uLXBhZGRpbmd7XG4gIHBhZGRpbmctbGVmdDoxNXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6MTVweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
};
SimpleFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.AddToShowCase)('filter', 'simple-filter.component', 'Simple Filter')], SimpleFilterComponent);


/***/ }),

/***/ 6163:
/*!***********************************************************!*\
  !*** ./src/app/components/exporter/exporter.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExporterComponent: () => (/* binding */ ExporterComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../base-component */ 7046);
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-to-showcase */ 6178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 1995);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../example-viewer/example-viewer.component */ 8566);







function ExporterComponent_app_example_viewer_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-example-viewer", 7);
  }
  if (rf & 2) {
    const example_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("exampleType", example_r1);
  }
}
class ExporterComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  ngOnInit() {
    this.examples = _add_to_showcase__WEBPACK_IMPORTED_MODULE_1__.showCaseExamples.get('exporter');
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵExporterComponent_BaseFactory;
    return function ExporterComponent_Factory(t) {
      return (ɵExporterComponent_BaseFactory || (ɵExporterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ExporterComponent)))(t || ExporterComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ExporterComponent,
    selectors: [["app-exporter"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 3,
    consts: [[1, "docs-page"], ["mat-align-tabs", "start"], ["label", "Overview"], [3, "src"], ["label", "API"], ["label", "Examples"], [3, "exampleType", 4, "ngFor", "ngForOf"], [3, "exampleType"]],
    template: function ExporterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "markdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "markdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExporterComponent_app_example_viewer_7_Template, 1, 1, "app-example-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/md-files/exporter/README.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/md-files/exporter/API.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.examples);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ExampleViewerComponent],
    styles: ["[_nghost-%COMP%]\ntable {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 10px;\n  width: 98%;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]\nth {\n  background: #f5f5f5;\n  font-weight: 400;\n  max-width: 100px;\n  padding: 13px 32px;\n  text-align: left;\n}\n[_nghost-%COMP%]\ntd {\n  font-weight: 400;\n  padding: 8px 16px;\n}\n\n\n@media (max-width: 720px) {\n  [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n    margin: 0 0 32px 0;\n  }\n  [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f5f5f5;\n    padding: 6px 16px;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leHBvcnRlci9leHBvcnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0VBQXNFO0FBQ3hFO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0U7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3RcbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogOTglO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuOmhvc3RcbnRoIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTNweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3RcbnRkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIDpob3N0XG4gIHRhYmxlIHtcbiAgICBtYXJnaW46IDAgMCAzMnB4IDA7XG4gIH1cbiAgOmhvc3RcbiAgdGgge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgcGFkZGluZzogNnB4IDE2cHg7XG4gIH1cbiAgOmhvc3RcbiAgdGQge1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1047:
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterComponent: () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../add-to-showcase */ 6178);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-component */ 7046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 1995);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../example-viewer/example-viewer.component */ 8566);







function FilterComponent_app_example_viewer_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-example-viewer", 7);
  }
  if (rf & 2) {
    const example_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("exampleType", example_r1);
  }
}
class FilterComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  ngOnInit() {
    this.examples = _add_to_showcase__WEBPACK_IMPORTED_MODULE_0__.showCaseExamples.get('filter');
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵFilterComponent_BaseFactory;
    return function FilterComponent_Factory(t) {
      return (ɵFilterComponent_BaseFactory || (ɵFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FilterComponent)))(t || FilterComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FilterComponent,
    selectors: [["app-filter"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 3,
    consts: [[1, "docs-page"], ["mat-align-tabs", "start"], ["label", "Overview"], [3, "src"], ["label", "API"], ["label", "Examples"], [3, "exampleType", 4, "ngFor", "ngForOf"], [3, "exampleType"]],
    template: function FilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "markdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "markdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FilterComponent_app_example_viewer_7_Template, 1, 1, "app-example-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/md-files/filter/README.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/md-files/filter/API.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.examples);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ExampleViewerComponent],
    styles: ["[_nghost-%COMP%]\ntable {\n  border-collapse: collapse;\n  border-radius: 2px;\n  border-spacing: 0;\n  margin: 10px;\n  width: 98%;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]\nth {\n  background: #f5f5f5;\n  font-weight: 400;\n  max-width: 100px;\n  padding: 13px 32px;\n  text-align: left;\n}\n[_nghost-%COMP%]\ntd {\n  font-weight: 400;\n  padding: 8px 16px;\n}\n\n\n@media (max-width: 720px) {\n  [_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n    margin: 0 0 32px 0;\n  }\n  [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f5f5f5;\n    padding: 6px 16px;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixzRUFBc0U7QUFDeEU7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0VBQ0E7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdFxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG46aG9zdFxudGgge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxM3B4IDMycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdFxudGQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgOmhvc3RcbiAgdGFibGUge1xuICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgfVxuICA6aG9zdFxuICB0aCB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgfVxuICA6aG9zdFxuICB0ZCB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 8908:
/*!*****************************************************************!*\
  !*** ./dist/cdk-table-exporter/fesm2022/cdk-table-exporter.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOM: () => (/* binding */ BOM),
/* harmony export */   CHAR_SET_UTF: () => (/* binding */ CHAR_SET_UTF),
/* harmony export */   CHAR_SET_UTF_8: () => (/* binding */ CHAR_SET_UTF_8),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTENT_TYPE_APPLICATION: () => (/* binding */ CONTENT_TYPE_APPLICATION),
/* harmony export */   CONTENT_TYPE_EXCEL: () => (/* binding */ CONTENT_TYPE_EXCEL),
/* harmony export */   CONTENT_TYPE_TEXT: () => (/* binding */ CONTENT_TYPE_TEXT),
/* harmony export */   CdkTableExporter: () => (/* binding */ CdkTableExporter),
/* harmony export */   CdkTableExporterModule: () => (/* binding */ CdkTableExporterModule),
/* harmony export */   CsvExporterService: () => (/* binding */ CsvExporterService),
/* harmony export */   DOT: () => (/* binding */ DOT),
/* harmony export */   DataExtractorService: () => (/* binding */ DataExtractorService),
/* harmony export */   EXTENSION_CSV: () => (/* binding */ EXTENSION_CSV),
/* harmony export */   EXTENSION_JSON: () => (/* binding */ EXTENSION_JSON),
/* harmony export */   EXTENSION_TEXT: () => (/* binding */ EXTENSION_TEXT),
/* harmony export */   EXTENSION_XLS: () => (/* binding */ EXTENSION_XLS),
/* harmony export */   EXTENSION_XLSX: () => (/* binding */ EXTENSION_XLSX),
/* harmony export */   ExportType: () => (/* binding */ ExportType),
/* harmony export */   FileExporter: () => (/* binding */ FileExporter),
/* harmony export */   FileUtil: () => (/* binding */ FileUtil),
/* harmony export */   JsonExporterService: () => (/* binding */ JsonExporterService),
/* harmony export */   MAT_TABLE_EXPORTER: () => (/* binding */ MAT_TABLE_EXPORTER),
/* harmony export */   MIME_CSV: () => (/* binding */ MIME_CSV),
/* harmony export */   MIME_EXCEL_XLS: () => (/* binding */ MIME_EXCEL_XLS),
/* harmony export */   MIME_EXCEL_XLSX: () => (/* binding */ MIME_EXCEL_XLSX),
/* harmony export */   MIME_JSON: () => (/* binding */ MIME_JSON),
/* harmony export */   MIME_TXT: () => (/* binding */ MIME_TXT),
/* harmony export */   Mime: () => (/* binding */ Mime),
/* harmony export */   REF: () => (/* binding */ REF),
/* harmony export */   RETURN: () => (/* binding */ RETURN),
/* harmony export */   ServiceLocatorService: () => (/* binding */ ServiceLocatorService),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   TYPE_ARRAY: () => (/* binding */ TYPE_ARRAY),
/* harmony export */   TxtExporterService: () => (/* binding */ TxtExporterService),
/* harmony export */   WorksheetExporter: () => (/* binding */ WorksheetExporter),
/* harmony export */   XLSX_COLS: () => (/* binding */ XLSX_COLS),
/* harmony export */   XLSX_LIGHTWEIGHT: () => (/* binding */ XLSX_LIGHTWEIGHT),
/* harmony export */   XLS_REGEX: () => (/* binding */ XLS_REGEX),
/* harmony export */   XlsExporterService: () => (/* binding */ XlsExporterService),
/* harmony export */   XlsxExporterService: () => (/* binding */ XlsxExporterService)
/* harmony export */ });
/* harmony import */ var _home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ 845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var file_saver_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver-es */ 5731);





class CdkTableExporterModule {
  static #_ = this.ɵfac = function CdkTableExporterModule_Factory(t) {
    return new (t || CdkTableExporterModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CdkTableExporterModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkTableModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CdkTableExporterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      declarations: [],
      imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkTableModule],
      exports: []
    }]
  }], null, null);
})();
var ExportType;
(function (ExportType) {
  ExportType["XLS"] = "xls";
  ExportType["XLSX"] = "xlsx";
  ExportType["CSV"] = "csv";
  ExportType["TXT"] = "txt";
  ExportType["JSON"] = "json";
  ExportType["OTHER"] = "other";
})(ExportType || (ExportType = {}));
class Mime {
  constructor(extension, contentTypeHeader) {
    this.extension = extension;
    this.contentTypeHeader = contentTypeHeader;
  }
}
const MAT_TABLE_EXPORTER = 'mat-table-exporter';
const TYPE_ARRAY = 'array';
const CHAR_SET_UTF = ';charset=utf-';
const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
const CONTENT_TYPE_APPLICATION = 'application/';
const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
const DOT = '.';
const COMMA = ',';
const EXTENSION_XLS = DOT + ExportType.XLS;
const EXTENSION_XLSX = DOT + ExportType.XLSX;
const EXTENSION_CSV = DOT + ExportType.CSV;
const EXTENSION_JSON = DOT + ExportType.JSON;
const EXTENSION_TEXT = DOT + ExportType.TXT;
const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
const REF = '!ref';
const XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
const RETURN = '\n';
const TAB = '\t';
const XLSX_COLS = '!cols';
const BOM = '\uFEFF';
const XLSX_LIGHTWEIGHT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('XLSX_LIGHTWEIGHT');
class FileUtil {
  static save(content, mime, options) {
    const blob = new Blob([content], {
      type: mime.contentTypeHeader
    });
    let fileName = MAT_TABLE_EXPORTER;
    if (options && options.fileName) {
      fileName = options.fileName;
    }
    file_saver_es__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, fileName + mime.extension);
  }
  static isXls(fileName) {
    return fileName.toLowerCase().match(XLS_REGEX) != null;
  }
  static identifyExportType(fileName) {
    if (fileName && FileUtil.isXls(fileName)) {
      return ExportType.XLS;
    } else {
      return ExportType.XLSX;
    }
  }
  static removeExtension(options) {
    if (options) options.fileName = options.fileName?.split(DOT)[0];
  }
}
class FileExporter {
  constructor() {}
  export(rows, options) {
    if (!rows) {
      throw new Error('Empty json array is provided, rows parameter is mandatory!');
    }
    const mimeType = this.getMimeType();
    this.createContent(rows, options).then(content => {
      FileUtil.save(content, mimeType, options);
    });
  }
}

/**
 * An angular service class that is used to create files out of json object arrays.
 */
class WorksheetExporter extends FileExporter {
  constructor(sheetJsHelper) {
    super();
    this.sheetJsHelper = sheetJsHelper;
  }
  createContent(rows, options) {
    var _this = this;
    return (0,_home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const workSheet = (yield _this.sheetJsHelper.getXlsx()).utils.json_to_sheet(rows, {
        skipHeader: true // we don't want to see object properties as our headers
      });

      return yield _this.workSheetToContent(workSheet, options);
    })();
  }
}
class SheetjsHelperService {
  constructor(xlsxLightweight) {
    this.xlsxLightweight = xlsxLightweight;
  }
  getXlsx() {
    var _this2 = this;
    return (0,_home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.xlsxLightweight) {
        return yield __webpack_require__.e(/*! import() */ "node_modules_xlsx_dist_xlsx_mini_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! xlsx/dist/xlsx.mini.min */ 2463, 19));
      } else {
        return yield __webpack_require__.e(/*! import() */ "node_modules_xlsx_xlsx_mjs").then(__webpack_require__.bind(__webpack_require__, /*! xlsx */ 2002));
      }
    })();
  }
  static #_ = this.ɵfac = function SheetjsHelperService_Factory(t) {
    return new (t || SheetjsHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](XLSX_LIGHTWEIGHT, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SheetjsHelperService,
    factory: SheetjsHelperService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SheetjsHelperService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [XLSX_LIGHTWEIGHT]
      }]
    }];
  }, null);
})();
class CsvExporterService extends WorksheetExporter {
  constructor(sheetJsHelper) {
    super(sheetJsHelper);
  }
  workSheetToContent(worksheet, options) {
    var _this3 = this;
    return (0,_home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const content = (yield _this3.sheetJsHelper.getXlsx()).utils.sheet_to_csv(worksheet, {
        FS: options?.delimiter ?? COMMA
      });
      return BOM + content;
    })();
  }
  getMimeType() {
    return MIME_CSV;
  }
  static #_ = this.ɵfac = function CsvExporterService_Factory(t) {
    return new (t || CsvExporterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](SheetjsHelperService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CsvExporterService,
    factory: CsvExporterService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CsvExporterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
class TxtExporterService extends FileExporter {
  constructor() {
    super();
  }
  createContent(rows, options) {
    var _this4 = this;
    return (0,_home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let content = '';
      rows.forEach(element => {
        content += Object.values(element).join(_this4.getDelimiter(options)) + RETURN;
      });
      return content;
    })();
  }
  getMimeType() {
    return MIME_TXT;
  }
  getDelimiter(options) {
    if (options && options.delimiter) {
      return options.delimiter;
    } else {
      return TAB;
    }
  }
  static #_ = this.ɵfac = function TxtExporterService_Factory(t) {
    return new (t || TxtExporterService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TxtExporterService,
    factory: TxtExporterService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TxtExporterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class XlsExporterService extends WorksheetExporter {
  constructor(sheetJsHelper) {
    super(sheetJsHelper);
  }
  workSheetToContent(worksheet, options = {}) {
    var _this5 = this;
    return (0,_home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        utils,
        write
      } = yield _this5.sheetJsHelper.getXlsx();
      const workBook = utils.book_new();
      if (options.columnWidths) {
        worksheet[XLSX_COLS] = _this5.convertToWch(options.columnWidths);
      }
      _this5.correctTypes(options);
      utils.book_append_sheet(workBook, worksheet, options.sheet);
      return write(workBook, options);
    })();
  }
  getMimeType() {
    return MIME_EXCEL_XLS;
  }
  correctTypes(options) {
    if (!options.type) {
      options.type = TYPE_ARRAY;
    }
    options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
  }

  convertToWch(columnWidths) {
    return columnWidths.map(width => ({
      wch: width
    }));
  }
  static #_ = this.ɵfac = function XlsExporterService_Factory(t) {
    return new (t || XlsExporterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](SheetjsHelperService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: XlsExporterService,
    factory: XlsExporterService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](XlsExporterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
class JsonExporterService extends FileExporter {
  constructor() {
    super();
  }
  createContent(rows, options) {
    return (0,_home_momos_Repos_ng_material_extensions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return JSON.stringify(rows);
    })();
  }
  getMimeType() {
    return MIME_JSON;
  }
  static #_ = this.ɵfac = function JsonExporterService_Factory(t) {
    return new (t || JsonExporterService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: JsonExporterService,
    factory: JsonExporterService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JsonExporterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class XlsxExporterService extends XlsExporterService {
  constructor(sheetJsHelper) {
    super(sheetJsHelper);
  }
  getMimeType() {
    return MIME_EXCEL_XLSX;
  }
  static #_ = this.ɵfac = function XlsxExporterService_Factory(t) {
    return new (t || XlsxExporterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](SheetjsHelperService));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: XlsxExporterService,
    factory: XlsxExporterService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](XlsxExporterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
class ServiceLocatorService {
  constructor(injector) {
    this.injector = injector;
  }
  getService(exportType, customExporter) {
    switch (exportType) {
      case ExportType.XLS.valueOf():
        return this.injector.get(XlsExporterService);
      case ExportType.XLSX.valueOf():
        return this.injector.get(XlsxExporterService);
      case ExportType.JSON.valueOf():
        return this.injector.get(JsonExporterService);
      case ExportType.TXT.valueOf():
        return this.injector.get(TxtExporterService);
      case ExportType.CSV.valueOf():
        return this.injector.get(CsvExporterService);
      case ExportType.OTHER.valueOf():
        if (!customExporter) {
          console.error("Provide a custom exporter implementation. Using default exporter.");
          return this.injector.get(XlsxExporterService);
        } else {
          return customExporter;
        }
      default:
        return this.injector.get(XlsxExporterService);
    }
  }
  static #_ = this.ɵfac = function ServiceLocatorService_Factory(t) {
    return new (t || ServiceLocatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ServiceLocatorService,
    factory: ServiceLocatorService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ServiceLocatorService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }];
  }, null);
})();
class DataExtractorService {
  constructor() {}
  extractRows(cdkTable, hiddenColumns, outlet) {
    return this.getRowsAsJsonArray(cdkTable, outlet ?? cdkTable._rowOutlet, hiddenColumns);
  }
  getRowsAsJsonArray(cdkTable, outlet, hiddenColumns) {
    const renderedRows = this.getRenderedRows(cdkTable, outlet);
    return this.convertToJsonArray(renderedRows, hiddenColumns);
  }
  getRenderedRows(cdkTable, outlet) {
    return cdkTable._getRenderedRows(outlet);
  }
  convertToJsonArray(rows, hiddenColumns) {
    const result = new Array();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < rows.length; i++) {
      const row = this.convertRow(rows[i], hiddenColumns);
      result.push(this.createExcelItem(row));
    }
    return result;
  }
  convertRow(row, hiddenColumns) {
    const result = new Array();
    const cells = row.children;
    for (let i = 0; i < cells.length; i++) {
      if (!this.shouldHide(i, hiddenColumns)) {
        const element = cells.item(i).innerText.trim();
        result.push(element);
      }
    }
    return result;
  }
  shouldHide(columnIndex, hiddenColumns) {
    if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
      return true;
    } else {
      return false;
    }
  }
  createExcelItem(row) {
    return Object.assign({}, row);
  }
  static #_ = this.ɵfac = function DataExtractorService_Factory(t) {
    return new (t || DataExtractorService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DataExtractorService,
    factory: DataExtractorService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DataExtractorService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

/**
 * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
 */
class CdkTableExporter {
  constructor(serviceLocator, dataExtractor, _cdkTable) {
    this.serviceLocator = serviceLocator;
    this.dataExtractor = dataExtractor;
    this._cdkTable = _cdkTable;
    this.exportCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.exportStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  /**
   * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
   */
  exportTable(exportType, options) {
    this.loadExporter(exportType);
    this._options = options;
    this.exportStarted.emit();
    this._isIterating = true;
    this._isExporting = true;
    this._data = new Array();
    this.extractTableHeader();
    try {
      this.exportWithPagination();
    } catch (notPaginated) {
      this.exportSinglePage();
    }
  }
  toggleRow(index) {
    const paginatedRowIndex = this.getPaginatedRowIndex(index);
    if (this.isToggleOn(paginatedRowIndex)) {
      this.toggleOff(paginatedRowIndex);
    } else {
      this.toggleOn(paginatedRowIndex);
    }
  }
  /**
   * This event will clear rows selection done using toggleRow functionality
   */
  resetToggleRows() {
    this._selectedRows = [];
  }
  toggleOn(index) {
    this._selectedRows = [...(this._selectedRows || []), index];
  }
  toggleOff(index) {
    this._selectedRows = this._selectedRows.filter(x => x !== index);
  }
  isToggleOn(index) {
    return this._selectedRows?.includes(index);
  }
  loadExporter(exportType) {
    this._exporterService = this.serviceLocator.getService(exportType, this.exporter);
  }
  exportWithPagination() {
    this._initialPageIndex = this.getCurrentPageIndex();
    this.initPageHandler();
    this.goToPage(0);
  }
  exportSinglePage() {
    this.extractDataOnCurrentPage();
    this.extractTableFooter();
    this.exportExtractedData();
  }
  extractDataOnCurrentPage() {
    const rows = this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns);
    this._data = this._data.concat(this.getSelectedRows(rows));
  }
  getSelectedRows(rows) {
    if (this.isSelectiveExport()) {
      return rows.filter((_, i) => this._selectedRows.includes(this.getPaginatedRowIndex(i)));
    } else {
      return rows;
    }
  }
  isSelectiveExport() {
    return this._selectedRows && !this.isMasterToggleOff() && !this.isMasterToggleOn();
  }
  isMasterToggleOn() {
    return this.compareSelectedRowCount(this.getTotalItemsCount());
  }
  isMasterToggleOff() {
    return this.compareSelectedRowCount(0);
  }
  compareSelectedRowCount(rowCount) {
    return !!(this._selectedRows.length === rowCount);
  }
  initPageHandler() {
    if (!this._subscription) {
      this._subscription = this.getPageChangeObservable()?.subscribe(() => {
        setTimeout(() => {
          if (this._isIterating) {
            this.extractDataOnCurrentPage();
            if (this.hasNextPage()) {
              this.nextPage();
            } else {
              this._isIterating = false;
              this.goToPage(this._initialPageIndex);
            }
          } else if (this._isExporting) {
            this._isExporting = false;
            this.extractTableFooter();
            this.exportExtractedData();
          }
        });
      });
    }
  }
  exportExtractedData() {
    this._exporterService.export(this._data, this._options);
    this._data = new Array();
    this.exportCompleted.emit();
  }
  extractSpecialRows(outlet) {
    this._data.push(...this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet));
  }
  extractTableHeader() {
    this.extractSpecialRows(this._cdkTable._headerRowOutlet);
  }
  extractTableFooter() {
    this.extractSpecialRows(this._cdkTable._footerRowOutlet);
  }
  hasNextPage() {
    if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
      return true;
    } else {
      return false;
    }
  }
  nextPage() {
    this.goToPage(this.getCurrentPageIndex() + 1);
  }
  getPaginatedRowIndex(index) {
    return index + this.getPageSize() * this.getCurrentPageIndex();
  }
  static #_ = this.ɵfac = function CdkTableExporter_Factory(t) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinvalidFactory"]();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: CdkTableExporter,
    inputs: {
      hiddenColumns: "hiddenColumns",
      exporter: "exporter"
    },
    outputs: {
      exportCompleted: "exportCompleted",
      exportStarted: "exportStarted"
    }
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CdkTableExporter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: ServiceLocatorService
    }, {
      type: DataExtractorService
    }, {
      type: undefined
    }];
  }, {
    hiddenColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    exporter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    exportCompleted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    exportStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

/*
 * Public API Surface of cdk-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 884:
/*!*****************************************************************!*\
  !*** ./dist/mat-table-exporter/fesm2022/mat-table-exporter.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOM: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.BOM),
/* harmony export */   CHAR_SET_UTF: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CHAR_SET_UTF),
/* harmony export */   CHAR_SET_UTF_8: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CHAR_SET_UTF_8),
/* harmony export */   COMMA: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.COMMA),
/* harmony export */   CONTENT_TYPE_APPLICATION: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE_APPLICATION),
/* harmony export */   CONTENT_TYPE_EXCEL: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE_EXCEL),
/* harmony export */   CONTENT_TYPE_TEXT: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE_TEXT),
/* harmony export */   CdkTableExporter: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CdkTableExporter),
/* harmony export */   CdkTableExporterModule: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CdkTableExporterModule),
/* harmony export */   CsvExporterService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CsvExporterService),
/* harmony export */   DOT: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.DOT),
/* harmony export */   DataExtractorService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.DataExtractorService),
/* harmony export */   EXTENSION_CSV: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_CSV),
/* harmony export */   EXTENSION_JSON: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_JSON),
/* harmony export */   EXTENSION_TEXT: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_TEXT),
/* harmony export */   EXTENSION_XLS: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_XLS),
/* harmony export */   EXTENSION_XLSX: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.EXTENSION_XLSX),
/* harmony export */   ExportType: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.ExportType),
/* harmony export */   FileExporter: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.FileExporter),
/* harmony export */   FileUtil: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.FileUtil),
/* harmony export */   JsonExporterService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.JsonExporterService),
/* harmony export */   MAT_TABLE_EXPORTER: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.MAT_TABLE_EXPORTER),
/* harmony export */   MIME_CSV: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.MIME_CSV),
/* harmony export */   MIME_EXCEL_XLS: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.MIME_EXCEL_XLS),
/* harmony export */   MIME_EXCEL_XLSX: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.MIME_EXCEL_XLSX),
/* harmony export */   MIME_JSON: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.MIME_JSON),
/* harmony export */   MIME_TXT: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.MIME_TXT),
/* harmony export */   MatTableExporterDirective: () => (/* binding */ MatTableExporterDirective),
/* harmony export */   MatTableExporterModule: () => (/* binding */ MatTableExporterModule),
/* harmony export */   Mime: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.Mime),
/* harmony export */   REF: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.REF),
/* harmony export */   RETURN: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.RETURN),
/* harmony export */   ServiceLocatorService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.ServiceLocatorService),
/* harmony export */   TAB: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.TAB),
/* harmony export */   TYPE_ARRAY: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.TYPE_ARRAY),
/* harmony export */   TxtExporterService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.TxtExporterService),
/* harmony export */   WorksheetExporter: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.WorksheetExporter),
/* harmony export */   XLSX_COLS: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.XLSX_COLS),
/* harmony export */   XLSX_LIGHTWEIGHT: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.XLSX_LIGHTWEIGHT),
/* harmony export */   XLS_REGEX: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.XLS_REGEX),
/* harmony export */   XlsExporterService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.XlsExporterService),
/* harmony export */   XlsxExporterService: () => (/* reexport safe */ cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.XlsxExporterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cdk-table-exporter */ 8908);







class MatTableExporterDirective extends cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CdkTableExporter {
  /**
   * Overriding ngAfterViewInit of TableExporter
   */
  ngAfterViewInit() {
    this.exportStarted.subscribe(_ => {
      this.enablePaginator(false);
    });
    this.exportCompleted.subscribe(_ => {
      this.enablePaginator(true);
    });
  }
  constructor(serviceLocator, dataExtractor, table) {
    super(serviceLocator, dataExtractor, table);
  }
  /**
   * MatTable implementation of getPageCount
   */
  getPageCount() {
    const pageSize = this.getPageSize();
    if (pageSize == 0) {
      return 0;
    }
    const pageCount = this.getTotalItemsCount() / this.getPageSize();
    return Math.ceil(pageCount) ?? 1;
  }
  /**
   * MatTable implementation of getPageSize
   */
  getPageSize() {
    return this.getPaginator()?.pageSize ?? 0;
  }
  /**
   * MatTable implementation of getCurrentPageIndex
   */
  getCurrentPageIndex() {
    return this.getPaginator()?.pageIndex ?? 0;
  }
  /**
   * MatTable implementation of getTotalItemsCount
   */
  getTotalItemsCount() {
    return this.getPaginator()?.length ?? this.getDataSource()?.data?.length ?? 0;
  }
  /**
   * MatTable implementation of goToPage
   */
  goToPage(index) {
    const paginator = this.getPaginator();
    paginator.pageIndex = index;
    paginator._changePageSize(paginator.pageSize);
  }
  /**
   * MatTable implementation of getPageChangeObservable
   */
  getPageChangeObservable() {
    return this.getPaginator()?.page;
  }
  getDataSource() {
    return this._cdkTable.dataSource;
  }
  getPaginator() {
    return this.getDataSource()?.paginator;
  }
  enablePaginator(value) {
    const paginator = this.getPaginator();
    paginator.disabled = !value;
    paginator._changePageSize(paginator.pageSize);
  }
  static #_ = this.ɵfac = function MatTableExporterDirective_Factory(t) {
    return new (t || MatTableExporterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.ServiceLocatorService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.DataExtractorService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, 11));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatTableExporterDirective,
    selectors: [["", "matTableExporter", ""]],
    exportAs: ["matTableExporter"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTableExporterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[matTableExporter]',
      exportAs: 'matTableExporter'
    }]
  }], function () {
    return [{
      type: cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.ServiceLocatorService
    }, {
      type: cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.DataExtractorService
    }, {
      type: _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();
class MatTableExporterModule {
  static forRoot(configuration) {
    return {
      ngModule: MatTableExporterModule,
      providers: [{
        provide: cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.XLSX_LIGHTWEIGHT,
        useValue: configuration.xlsxLightWeight
      }]
    };
  }
  static #_ = this.ɵfac = function MatTableExporterModule_Factory(t) {
    return new (t || MatTableExporterModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MatTableExporterModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CdkTableExporterModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTableExporterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [MatTableExporterDirective],
      imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, cdk_table_exporter__WEBPACK_IMPORTED_MODULE_0__.CdkTableExporterModule],
      exports: [MatTableExporterDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of mat-table-exporter
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8580:
/*!*************************************************************!*\
  !*** ./dist/mat-table-filter/fesm2020/mat-table-filter.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatTableFilter: () => (/* binding */ MatTableFilter),
/* harmony export */   MatTableFilterDirective: () => (/* binding */ MatTableFilterDirective),
/* harmony export */   MatTableFilterModule: () => (/* binding */ MatTableFilterModule),
/* harmony export */   MatTableFilterService: () => (/* binding */ MatTableFilterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 655);
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/isEqual */ 4164);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/cloneDeep */ 8717);
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/isNil */ 7541);
/* harmony import */ var lodash_es_every__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/every */ 3511);
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isFunction */ 3084);
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/isArray */ 6328);
/* harmony import */ var lodash_es_isBoolean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/isBoolean */ 2009);
/* harmony import */ var lodash_es_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isString */ 9362);
/* harmony import */ var lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/isNumber */ 8332);
/* harmony import */ var lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isEmpty */ 1855);
/* harmony import */ var lodash_es_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/difference */ 1125);
/* harmony import */ var lodash_es_flatten__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/flatten */ 8864);


















var MatTableFilter;
(function (MatTableFilter) {
  MatTableFilter["EQUALS"] = "EQUALS";
  MatTableFilter["ANYWHERE"] = "ANYWHERE";
  MatTableFilter["STARTS_WITH"] = "STARTS_WITH";
  MatTableFilter["ENDS_WITH"] = "ENDS_WITH";
})(MatTableFilter || (MatTableFilter = {}));
class FilterPredicate {
  executeCondition(itemPair, options) {
    this.handleLetterCasing(itemPair, options.caseSensitive);
    switch (options.filterType) {
      case MatTableFilter.EQUALS:
        return this.equals(itemPair);
      case MatTableFilter.ANYWHERE:
        return this.anywhere(itemPair);
      case MatTableFilter.STARTS_WITH:
        return this.startsWith(itemPair);
      case MatTableFilter.ENDS_WITH:
        return this.endsWith(itemPair);
      default:
        return true;
    }
  }
  handleLetterCasing(itemPair, caseSensitive) {
    if (!caseSensitive) {
      this.transformAllLowerCase(itemPair);
    }
  }
  transformAllLowerCase(object) {
    // tslint:disable-next-line:forin
    for (const key in object) {
      const value = object[key];
      if ((0,lodash_es_isString__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
        object[key] = value.toLowerCase();
      } else {
        this.transformAllLowerCase(value);
      }
    }
  }
}
class AlphaNumericPredicateService extends FilterPredicate {
  constructor() {
    super();
  }
  equals(itemPair) {
    return itemPair.example === itemPair.item;
  }
  anywhere(itemPair) {
    return itemPair.item.includes(itemPair.example);
  }
  startsWith(itemPair) {
    return itemPair.item.startsWith(itemPair.example);
  }
  endsWith(itemPair) {
    return itemPair.item.endsWith(itemPair.example);
  }
}
AlphaNumericPredicateService.ɵfac = function AlphaNumericPredicateService_Factory(t) {
  return new (t || AlphaNumericPredicateService)();
};
AlphaNumericPredicateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AlphaNumericPredicateService,
  factory: AlphaNumericPredicateService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlphaNumericPredicateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class ArrayPredicateService extends FilterPredicate {
  constructor() {
    super();
  }
  static warn() {
    console.warn(ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING);
    console.warn(ArrayPredicateService.SUGGESTION_WARNING);
  }
  equals(itemPair) {
    return (0,lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_2__["default"])(itemPair.example.sort(), itemPair.item.sort());
  }
  anywhere(itemPair) {
    return this.isSubset(itemPair.example, itemPair.item);
  }
  startsWith(itemPair) {
    ArrayPredicateService.warn();
    return this.anywhere(itemPair);
  }
  endsWith(itemPair) {
    ArrayPredicateService.warn();
    return this.anywhere(itemPair);
  }
  isSubset(example, item) {
    return !(0,lodash_es_difference__WEBPACK_IMPORTED_MODULE_3__["default"])((0,lodash_es_flatten__WEBPACK_IMPORTED_MODULE_4__["default"])(example), (0,lodash_es_flatten__WEBPACK_IMPORTED_MODULE_4__["default"])(item)).length;
  }
}
// tslint:disable-next-line:max-line-length
ArrayPredicateService.UNSUPPORTED_OPERATION_WARNING = 'This filterType is unsupported for array filtering. FilterType.ANYWHERE is executed instead!';
ArrayPredicateService.SUGGESTION_WARNING = 'You can set a custom predicate for the array property through PropertyOptions!';
ArrayPredicateService.ɵfac = function ArrayPredicateService_Factory(t) {
  return new (t || ArrayPredicateService)();
};
ArrayPredicateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ArrayPredicateService,
  factory: ArrayPredicateService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayPredicateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class MatTableFilterService {
  constructor(_alphaNumericService, _arrayService) {
    this._alphaNumericService = _alphaNumericService;
    this._arrayService = _arrayService;
  }
  filterPredicate(itemPair, propertyOptions, commonOptions, propertyName) {
    // tslint:disable-next-line:forin
    const exampleKeys = Object.keys(itemPair.example);
    for (const key of exampleKeys) {
      const exampleValue = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_5__["default"])(itemPair.example[key]);
      if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_6__["default"])(exampleValue) || (0,lodash_es_every__WEBPACK_IMPORTED_MODULE_7__["default"])(exampleValue, lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_8__["default"]) && typeof exampleValue !== 'boolean') {
        // if example entity's property is undefined/null/empty then it means the caller wants all the data
        continue;
      }
      if (itemPair.item?.hasOwnProperty(key)) {
        // if example entity has additional columns then search fails
        const itemValue = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_5__["default"])(itemPair.item[key]);
        const nextPropertyName = this.getNextPropertyName(key, propertyName);
        const options = this.finalizeOptionsForProperty(commonOptions, propertyOptions, nextPropertyName);
        if ((0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(options)) {
          // if user defined predicate is present for property
          const customPredicate = options;
          if (!customPredicate(itemValue)) {
            return false;
          }
        } else {
          const columnOptions = options;
          if (this.isAlphaNumeric(itemValue)) {
            const valuePair = {
              item: itemValue.toString(),
              example: exampleValue
            };
            if (!this._alphaNumericService.executeCondition(valuePair, columnOptions)) {
              return false;
            }
          } else if ((0,lodash_es_isArray__WEBPACK_IMPORTED_MODULE_10__["default"])(itemValue)) {
            const valuePair = {
              item: itemValue,
              example: exampleValue
            };
            if (!this._arrayService.executeCondition(valuePair, columnOptions)) {
              return false;
            }
          } else if ((0,lodash_es_isBoolean__WEBPACK_IMPORTED_MODULE_11__["default"])(itemValue)) {
            if (itemValue !== exampleValue) {
              return false;
            }
          } else {
            const valuePair = {
              item: itemValue,
              example: exampleValue
            };
            if (!this.filterPredicate(valuePair, propertyOptions, options, nextPropertyName)) {
              // if one of the inner properties returns true, this shouldnt affect the whole item's filtering
              // however if it returns false then the item must not be in the list
              return false;
            }
          }
        }
      } else {
        return false;
      }
    }
    return true;
  }
  finalizeOptionsForProperty(commonOptions, propertyOptions, propertyName) {
    if (propertyOptions && propertyOptions.hasOwnProperty(propertyName)) {
      return propertyOptions[propertyName];
    } else {
      return commonOptions;
    }
  }
  getNextPropertyName(key, propertyName) {
    return propertyName ? propertyName + '.' + key : key;
  }
  isChanged(oldEntity, newEntity) {
    return !(0,lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_2__["default"])(this.toPlainJson(oldEntity), this.toPlainJson(newEntity));
  }
  toPlainJson(object) {
    if (!object) return null;
    return JSON.parse(JSON.stringify(object));
  }
  isAlphaNumeric(value) {
    return (0,lodash_es_isString__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_12__["default"])(value);
  }
}
MatTableFilterService.ɵfac = function MatTableFilterService_Factory(t) {
  return new (t || MatTableFilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AlphaNumericPredicateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ArrayPredicateService));
};
MatTableFilterService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MatTableFilterService,
  factory: MatTableFilterService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTableFilterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: AlphaNumericPredicateService
    }, {
      type: ArrayPredicateService
    }];
  }, null);
})();
class MatTableFilterDirective {
  constructor(_filterService, _table) {
    this._filterService = _filterService;
    this._table = _table;
    /**
     * in millis
     */
    this.debounceTime = 400;
    this.filterType = MatTableFilter.ANYWHERE;
    this.caseSensitive = false;
    this.initDebounceSubject();
  }
  ngDoCheck() {
    if (this._filterService.isChanged(this._oldExampleEntity, this.exampleEntity)) {
      this._oldExampleEntity = this._filterService.toPlainJson(this.exampleEntity);
      this._exampleEntitySubject.next(undefined);
    }
  }
  initDebounceSubject() {
    this._exampleEntitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(undefined);
    this._exampleEntitySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(this.debounceTime)).subscribe(_ => {
      this.updateFilterPredicate();
    });
  }
  updateFilterPredicate() {
    const matDataSource = this.getMatDataSource();
    if (matDataSource) {
      matDataSource.filterPredicate = this.getFilterPredicate();
      matDataSource.filter = this.exampleEntity;
    }
  }
  getFilterPredicate() {
    if (this.customPredicate) {
      return this.customPredicate;
    } else {
      return item => {
        return this._filterService.filterPredicate({
          example: this.exampleEntity,
          item
        }, this.propertyOptions, {
          filterType: this.filterType,
          caseSensitive: this.caseSensitive
        });
      };
    }
  }
  getMatDataSource() {
    const matTable = this._table;
    return matTable.dataSource;
  }
}
MatTableFilterDirective.ɵfac = function MatTableFilterDirective_Factory(t) {
  return new (t || MatTableFilterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatTableFilterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, 11));
};
MatTableFilterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatTableFilterDirective,
  selectors: [["", "matTableFilter", ""]],
  inputs: {
    exampleEntity: "exampleEntity",
    debounceTime: "debounceTime",
    filterType: "filterType",
    caseSensitive: "caseSensitive",
    customPredicate: "customPredicate",
    propertyOptions: "propertyOptions"
  },
  exportAs: ["matTableFilter"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTableFilterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[matTableFilter]',
      exportAs: 'matTableFilter'
    }]
  }], function () {
    return [{
      type: MatTableFilterService
    }, {
      type: _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    exampleEntity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    caseSensitive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    propertyOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class MatTableFilterModule {}
MatTableFilterModule.ɵfac = function MatTableFilterModule_Factory(t) {
  return new (t || MatTableFilterModule)();
};
MatTableFilterModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatTableFilterModule
});
MatTableFilterModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTableFilterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [MatTableFilterDirective],
      imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule],
      exports: [MatTableFilterDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of mat-table-filter
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map