(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Roles/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Roles/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Index",
  data: function data() {
    return {
      page: 1,
      max: 10,
      search: '',
      roles: [{
        'id': 1,
        'name': 'Администратор'
      }, {
        'id': 2,
        'name': 'Пользователь'
      }, {
        'id': 3,
        'name': 'Модератор'
      }]
    };
  },
  methods: {
    deleteType: function deleteType(id) {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Roles/Index.vue?vue&type=template&id=679fbdb6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Roles/Index.vue?vue&type=template&id=679fbdb6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "center" },
      [
        _c("vs-table", {
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("vs-input", {
                    attrs: { border: "", placeholder: "Search" },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  })
                ]
              },
              proxy: true
            },
            {
              key: "thead",
              fn: function() {
                return [
                  _c(
                    "vs-tr",
                    [
                      _c("vs-th", [
                        _vm._v(
                          "\n                        Наименование\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [
                        _vm._v(
                          "\n                        Параметры\n                    "
                        )
                      ])
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "tbody",
              fn: function() {
                return _vm._l(
                  _vm.$vs.getPage(_vm.roles, _vm.page, _vm.max),
                  function(tr, i) {
                    return _c(
                      "vs-tr",
                      { key: i, attrs: { data: tr } },
                      [
                        _c("vs-td", [
                          _vm._v(
                            "\n                        " +
                              _vm._s(tr.name) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "vs-td",
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    if (
                                      $event.target !== $event.currentTarget
                                    ) {
                                      return null
                                    }
                                    $event.preventDefault()
                                    return _vm.deleteType(tr.id)
                                  }
                                }
                              },
                              [_vm._v("Удалить")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "rolesEdit",
                                    params: { id: tr.id }
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-green" },
                                  [_vm._v("Изменить")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "rolesShow",
                                    params: { id: tr.id }
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "btn btn-primary" }, [
                                  _vm._v("Вид")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }
                )
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c(
                    "vs-select",
                    {
                      attrs: { placeholder: "Select" },
                      model: {
                        value: _vm.max,
                        callback: function($$v) {
                          _vm.max = $$v
                        },
                        expression: "max"
                      }
                    },
                    [
                      _c("vs-option", { attrs: { label: "10", value: "10" } }, [
                        _vm._v(
                          "\n                        10\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-option", { attrs: { label: "25", value: "25" } }, [
                        _vm._v(
                          "\n                        25\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-option", { attrs: { label: "50", value: "50" } }, [
                        _vm._v(
                          "\n                        50\n                    "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("vs-pagination", {
                    attrs: { length: _vm.$vs.getLength(_vm.roles, _vm.max) },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ]
              },
              proxy: true
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Roles/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Admin/Roles/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_679fbdb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=679fbdb6&scoped=true& */ "./resources/js/components/Admin/Roles/Index.vue?vue&type=template&id=679fbdb6&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Roles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_679fbdb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_679fbdb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "679fbdb6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Roles/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Roles/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/Roles/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Roles/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Roles/Index.vue?vue&type=template&id=679fbdb6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Roles/Index.vue?vue&type=template&id=679fbdb6&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_679fbdb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=679fbdb6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Roles/Index.vue?vue&type=template&id=679fbdb6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_679fbdb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_679fbdb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);