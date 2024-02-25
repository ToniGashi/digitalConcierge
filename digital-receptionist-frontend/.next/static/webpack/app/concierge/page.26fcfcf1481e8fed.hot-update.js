"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/concierge/page",{

/***/ "(app-pages-browser)/./app/concierge/page.tsx":
/*!********************************!*\
  !*** ./app/concierge/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"(app-pages-browser)/./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-speech-recognition */ \"(app-pages-browser)/./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var _components_VideoComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VideoComponent */ \"(app-pages-browser)/./app/components/VideoComponent.tsx\");\n/* harmony import */ var _components_TextComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextComponent */ \"(app-pages-browser)/./app/components/TextComponent.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Concierge() {\n    _s();\n    var _useSpeechRecognition = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_3__.useSpeechRecognition)(), transcript = _useSpeechRecognition.transcript, listening = _useSpeechRecognition.listening, resetTranscript = _useSpeechRecognition.resetTranscript;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), response = _useState[0], setResponse = _useState[1];\n    var mode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return listening ? \"listening\" : response ? \"speaking\" : \"idle\";\n    }, [\n        listening,\n        response\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log([\n            listening,\n            transcript,\n            response\n        ]);\n        if (!listening && (transcript === null || transcript === void 0 ? void 0 : transcript.length) > 1 && (response === null || response === void 0 ? void 0 : response.length) < 1) {\n            (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var response, resp, msg, setSpeech, voices, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                4,\n                                ,\n                                5\n                            ]);\n                            return [\n                                4,\n                                fetch(\"http://localhost:5000/openAiRequest\", {\n                                    method: \"POST\",\n                                    headers: {\n                                        \"Content-Type\": \"application/json\",\n                                        \"Access-Control-Allow-Origin\": \"http://localhost:5000\"\n                                    },\n                                    body: JSON.stringify({\n                                        prompt: transcript\n                                    })\n                                })\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            resp = _state.sent().resp;\n                            if (!resp || response.status !== 200) throw new Error(\"Failed to get a response from your query.\");\n                            msg = new window.SpeechSynthesisUtterance();\n                            setSpeech = function() {\n                                return new Promise(function(resolve, reject) {\n                                    var id = setInterval(function() {\n                                        if (window.speechSynthesis.getVoices().length !== 0) {\n                                            resolve(window.speechSynthesis.getVoices());\n                                            clearInterval(id);\n                                        }\n                                    }, 10);\n                                });\n                            };\n                            return [\n                                4,\n                                setSpeech()\n                            ];\n                        case 3:\n                            voices = _state.sent();\n                            msg.text = resp;\n                            console.log(\"VOICES: \", voices);\n                            //@ts-ignore\n                            msg.voice = voices[7];\n                            msg.onend = function() {\n                                console.log(\"onend\");\n                                handleResetButtonClick();\n                                location.reload();\n                            };\n                            setResponse(resp);\n                            window.speechSynthesis.speak(msg);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 4:\n                            error = _state.sent();\n                            console.error(\"ERR:\", error);\n                            return [\n                                3,\n                                5\n                            ];\n                        case 5:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            })();\n        }\n    }, [\n        listening,\n        response,\n        transcript\n    ]);\n    var handleStartButtonClick = function() {\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_3__[\"default\"].startListening();\n    };\n    var handleStopButtonClick = function() {\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_3__[\"default\"].stopListening();\n    };\n    var handleResetButtonClick = function() {\n        resetTranscript();\n        setResponse(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content gap-5 flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    mode: mode\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tonig\\\\OneDrive\\\\Desktop\\\\DigitalReceptionist\\\\digital-receptionist-frontend\\\\app\\\\concierge\\\\page.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    transcript: transcript,\n                    listening: listening,\n                    response: response,\n                    handleStartButtonClick: handleStartButtonClick,\n                    handleStopButtonClick: handleStopButtonClick,\n                    handleResetButtonClick: handleResetButtonClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tonig\\\\OneDrive\\\\Desktop\\\\DigitalReceptionist\\\\digital-receptionist-frontend\\\\app\\\\concierge\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tonig\\\\OneDrive\\\\Desktop\\\\DigitalReceptionist\\\\digital-receptionist-frontend\\\\app\\\\concierge\\\\page.tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tonig\\\\OneDrive\\\\Desktop\\\\DigitalReceptionist\\\\digital-receptionist-frontend\\\\app\\\\concierge\\\\page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Concierge, \"omrgrOoziE087B4/oV2zzyHatp4=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_3__.useSpeechRecognition\n    ];\n});\n_c = Concierge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Concierge);\nvar _c;\n$RefreshReg$(_c, \"Concierge\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb25jaWVyZ2UvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcUM7QUFDZ0I7QUFHbkI7QUFDd0I7QUFDRjtBQUd4RCxTQUFTTzs7SUFDUCxJQUFrREgsd0JBQUFBLDhFQUFvQkEsSUFBOURJLGFBQTBDSixzQkFBMUNJLFlBQVlDLFlBQThCTCxzQkFBOUJLLFdBQVdDLGtCQUFtQk4sc0JBQW5CTTtJQUUvQixJQUFnQ1IsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQWxDUyxXQUF5QlQsY0FBZlUsY0FBZVY7SUFFaEMsSUFBTVcsT0FBT1osOENBQU9BLENBQUM7UUFDbkIsT0FBT1EsWUFBWSxjQUFjRSxXQUFXLGFBQWE7SUFDM0QsR0FBRztRQUFDRjtRQUFXRTtLQUFTO0lBRXhCWCxnREFBU0EsQ0FBQztRQUNSYyxRQUFRQyxHQUFHLENBQUM7WUFBQ047WUFBV0Q7WUFBWUc7U0FBUztRQUM3QyxJQUFJLENBQUNGLGFBQWFELENBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBWVEsTUFBTSxJQUFHLEtBQUtMLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVUssTUFBTSxJQUFHLEdBQUc7WUFDL0Q7b0JBRVNMLFVBVUVNLE1BSUZDLEtBRUFDLFdBYUpDLFFBWUtDOzs7Ozs7Ozs7OzRCQXpDVTs7Z0NBQU1DLE1BQU0sdUNBQXVDO29DQUNsRUMsUUFBUTtvQ0FDUkMsU0FBUzt3Q0FDUCxnQkFBZ0I7d0NBQ2hCLCtCQUErQjtvQ0FDakM7b0NBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3Q0FDbkJDLFFBQVFwQjtvQ0FDVjtnQ0FDRjs7OzRCQVRNRyxXQUFXOzRCQVVBOztnQ0FBTUEsU0FBU2tCLElBQUk7Ozs0QkFBNUJaLE9BQVMsY0FBVEE7NEJBRVIsSUFBSSxDQUFDQSxRQUFRTixTQUFTbUIsTUFBTSxLQUFLLEtBQy9CLE1BQU0sSUFBSUMsTUFBTTs0QkFDWmIsTUFBTSxJQUFJYyxPQUFPQyx3QkFBd0I7NEJBRXpDZCxZQUFZO2dDQUNoQixPQUFPLElBQUllLFFBQ1AsU0FBVUMsT0FBTyxFQUFFQyxNQUFNO29DQUNyQixJQUFNQyxLQUFLQyxZQUFZO3dDQUNuQixJQUFJTixPQUFPTyxlQUFlLENBQUNDLFNBQVMsR0FBR3hCLE1BQU0sS0FBSyxHQUFHOzRDQUNqRG1CLFFBQVFILE9BQU9PLGVBQWUsQ0FBQ0MsU0FBUzs0Q0FDeENDLGNBQWNKO3dDQUNsQjtvQ0FDSixHQUFHO2dDQUNQOzRCQUVSOzRCQUVhOztnQ0FBTWxCOzs7NEJBQWZDLFNBQVM7NEJBQ1hGLElBQUl3QixJQUFJLEdBQUd6Qjs0QkFDWEgsUUFBUUMsR0FBRyxDQUFDLFlBQVlLOzRCQUN4QixZQUFZOzRCQUNaRixJQUFJeUIsS0FBSyxHQUFHdkIsTUFBTSxDQUFDLEVBQUU7NEJBQ3JCRixJQUFJMEIsS0FBSyxHQUFHO2dDQUNWOUIsUUFBUUMsR0FBRyxDQUFDO2dDQUNaOEI7Z0NBQ0FDLFNBQVNDLE1BQU07NEJBQ2pCOzRCQUNBbkMsWUFBWUs7NEJBQ1plLE9BQU9PLGVBQWUsQ0FBQ1MsS0FBSyxDQUFDOUI7Ozs7Ozs0QkFDdEJHOzRCQUNQUCxRQUFRTyxLQUFLLENBQUMsUUFBUUE7Ozs7Ozs7Ozs7O1lBRTFCO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO1FBQVdFO1FBQVVIO0tBQVc7SUFFcEMsSUFBTXlDLHlCQUF5QjtRQUM3QjlDLGdFQUFpQkEsQ0FBQytDLGNBQWM7SUFDbEM7SUFFQSxJQUFNQyx3QkFBd0I7UUFDNUJoRCxnRUFBaUJBLENBQUNpRCxhQUFhO0lBQ2pDO0lBRUEsSUFBTVAseUJBQXlCO1FBQzdCbkM7UUFDQUUsWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUN5QztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2pELGtFQUFjQTtvQkFBQ1EsTUFBTUE7Ozs7Ozs4QkFDdEIsOERBQUNQLGlFQUFhQTtvQkFBQ0UsWUFBWUE7b0JBQVlDLFdBQVdBO29CQUFXRSxVQUFVQTtvQkFBVXNDLHdCQUF3QkE7b0JBQXdCRSx1QkFBdUJBO29CQUF1Qk4sd0JBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL007R0FuRlN0Qzs7UUFDMkNILDBFQUFvQkE7OztLQUQvREc7QUFxRlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbmNpZXJnZS9wYWdlLnRzeD9hOWJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3BlZWNoUmVjb2duaXRpb24sIHtcclxuICB1c2VTcGVlY2hSZWNvZ25pdGlvblxyXG59IGZyb20gJ3JlYWN0LXNwZWVjaC1yZWNvZ25pdGlvbic7XHJcbmltcG9ydCBWaWRlb0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvQ29tcG9uZW50JztcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50JztcclxuaW1wb3J0IFZvaWNlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvVm9pY2VDb21wb25lbnQnO1xyXG5cclxuZnVuY3Rpb24gQ29uY2llcmdlKCkge1xyXG4gIGNvbnN0IHsgdHJhbnNjcmlwdCwgbGlzdGVuaW5nLCByZXNldFRyYW5zY3JpcHR9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oKTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG1vZGUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBsaXN0ZW5pbmcgPyAnbGlzdGVuaW5nJyA6IHJlc3BvbnNlID8gJ3NwZWFraW5nJyA6ICdpZGxlJztcclxuICB9LCBbbGlzdGVuaW5nLCByZXNwb25zZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coW2xpc3RlbmluZywgdHJhbnNjcmlwdCwgcmVzcG9uc2VdKVxyXG4gICAgaWYgKCFsaXN0ZW5pbmcgJiYgdHJhbnNjcmlwdD8ubGVuZ3RoID4gMSAmJiByZXNwb25zZT8ubGVuZ3RoIDwgMSkge1xyXG4gICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvb3BlbkFpUmVxdWVzdCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgcHJvbXB0OiB0cmFuc2NyaXB0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgcmVzcCB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgIGlmICghcmVzcCB8fCByZXNwb25zZS5zdGF0dXMgIT09IDIwMClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB5b3VyIHF1ZXJ5LicpO1xyXG4gICAgICAgICAgY29uc3QgbXNnID0gbmV3IHdpbmRvdy5TcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3Qgc2V0U3BlZWNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZvaWNlcyA9IGF3YWl0IHNldFNwZWVjaCgpO1xyXG4gICAgICAgICAgbXNnLnRleHQgPSByZXNwO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZPSUNFUzogJywgdm9pY2VzKVxyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICBtc2cudm9pY2UgPSB2b2ljZXNbN107XHJcbiAgICAgICAgICBtc2cub25lbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbmVuZCcpO1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNldEJ1dHRvbkNsaWNrKCk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldFJlc3BvbnNlKHJlc3ApO1xyXG4gICAgICAgICAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5zcGVhayhtc2cpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFUlI6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkoKTtcclxuICAgIH1cclxuICB9LCBbbGlzdGVuaW5nLCByZXNwb25zZSwgdHJhbnNjcmlwdF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGFydEJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgU3BlZWNoUmVjb2duaXRpb24uc3RhcnRMaXN0ZW5pbmcoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdG9wQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBTcGVlY2hSZWNvZ25pdGlvbi5zdG9wTGlzdGVuaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXRCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHJlc2V0VHJhbnNjcmlwdCgpO1xyXG4gICAgc2V0UmVzcG9uc2UoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGdhcC01IGZsZXhcIj5cclxuICAgICAgICA8VmlkZW9Db21wb25lbnQgbW9kZT17bW9kZX0vPlxyXG4gICAgICAgIDxUZXh0Q29tcG9uZW50IHRyYW5zY3JpcHQ9e3RyYW5zY3JpcHR9IGxpc3RlbmluZz17bGlzdGVuaW5nfSByZXNwb25zZT17cmVzcG9uc2V9IGhhbmRsZVN0YXJ0QnV0dG9uQ2xpY2s9e2hhbmRsZVN0YXJ0QnV0dG9uQ2xpY2t9IGhhbmRsZVN0b3BCdXR0b25DbGljaz17aGFuZGxlU3RvcEJ1dHRvbkNsaWNrfSBoYW5kbGVSZXNldEJ1dHRvbkNsaWNrPXtoYW5kbGVSZXNldEJ1dHRvbkNsaWNrfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmNpZXJnZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlNwZWVjaFJlY29nbml0aW9uIiwidXNlU3BlZWNoUmVjb2duaXRpb24iLCJWaWRlb0NvbXBvbmVudCIsIlRleHRDb21wb25lbnQiLCJDb25jaWVyZ2UiLCJ0cmFuc2NyaXB0IiwibGlzdGVuaW5nIiwicmVzZXRUcmFuc2NyaXB0IiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsIm1vZGUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicmVzcCIsIm1zZyIsInNldFNwZWVjaCIsInZvaWNlcyIsImVycm9yIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJqc29uIiwic3RhdHVzIiwiRXJyb3IiLCJ3aW5kb3ciLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImlkIiwic2V0SW50ZXJ2YWwiLCJzcGVlY2hTeW50aGVzaXMiLCJnZXRWb2ljZXMiLCJjbGVhckludGVydmFsIiwidGV4dCIsInZvaWNlIiwib25lbmQiLCJoYW5kbGVSZXNldEJ1dHRvbkNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJzcGVhayIsImhhbmRsZVN0YXJ0QnV0dG9uQ2xpY2siLCJzdGFydExpc3RlbmluZyIsImhhbmRsZVN0b3BCdXR0b25DbGljayIsInN0b3BMaXN0ZW5pbmciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/concierge/page.tsx\n"));

/***/ })

});