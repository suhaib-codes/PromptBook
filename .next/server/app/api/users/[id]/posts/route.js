/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/[id]/posts/route";
exports.ids = ["app/api/users/[id]/posts/route"];
exports.modules = {

/***/ "(rsc)/./app/api/users/[id]/posts/route.js":
/*!*******************************************!*\
  !*** ./app/api/users/[id]/posts/route.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _models_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/prompt */ \"(rsc)/./models/prompt.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n\n\nconst GET = async (request, { params })=>{\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        const prompts = await _models_prompt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n            creator: params.id\n        }).populate(\"creator\");\n        return new Response(JSON.stringify(prompts), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(\"Failed to fetch prompts created by user\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL1tpZF0vcG9zdHMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBQ1U7QUFFdkMsTUFBTUUsTUFBTSxPQUFPQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtJQUN6QyxJQUFJO1FBQ0EsTUFBTUgsNERBQVdBO1FBRWpCLE1BQU1JLFVBQVUsTUFBTUwsc0RBQU1BLENBQUNNLElBQUksQ0FBQztZQUFFQyxTQUFTSCxPQUFPSSxFQUFFO1FBQUMsR0FBR0MsUUFBUSxDQUFDO1FBRW5FLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDUCxVQUFVO1lBQUVRLFFBQVE7UUFBSTtJQUMvRCxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPLElBQUlKLFNBQVMsMkNBQTJDO1lBQUVHLFFBQVE7UUFBSTtJQUNqRjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxDb2xsZWdlIHByb2plY3RcXFByb21wdEJvb2stbWFpblxcYXBwXFxhcGlcXHVzZXJzXFxbaWRdXFxwb3N0c1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21wdCBmcm9tIFwiQG1vZGVscy9wcm9tcHRcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkB1dGlscy9kYXRhYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKHJlcXVlc3QsIHsgcGFyYW1zIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb25uZWN0VG9EQigpXG5cbiAgICAgICAgY29uc3QgcHJvbXB0cyA9IGF3YWl0IFByb21wdC5maW5kKHsgY3JlYXRvcjogcGFyYW1zLmlkIH0pLnBvcHVsYXRlKFwiY3JlYXRvclwiKVxuXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocHJvbXB0cyksIHsgc3RhdHVzOiAyMDAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIHRvIGZldGNoIHByb21wdHMgY3JlYXRlZCBieSB1c2VyXCIsIHsgc3RhdHVzOiA1MDAgfSlcbiAgICB9XG59ICJdLCJuYW1lcyI6WyJQcm9tcHQiLCJjb25uZWN0VG9EQiIsIkdFVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJwcm9tcHRzIiwiZmluZCIsImNyZWF0b3IiLCJpZCIsInBvcHVsYXRlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/[id]/posts/route.js\n");

/***/ }),

/***/ "(rsc)/./models/prompt.js":
/*!**************************!*\
  !*** ./models/prompt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PromptSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    creator: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    prompt: {\n        type: String,\n        required: [\n            true,\n            'Prompt is required.'\n        ]\n    },\n    tag: {\n        type: String,\n        required: [\n            true,\n            'Tag is required.'\n        ]\n    },\n    imageUrl: {\n        type: String,\n        default: null\n    },\n    likes: {\n        type: Number,\n        default: 0\n    },\n    dislikes: {\n        type: Number,\n        default: 0\n    },\n    likedBy: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'User'\n        }\n    ],\n    dislikedBy: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'User'\n        }\n    ]\n}, {\n    timestamps: true\n});\nconst Prompt = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Prompt || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Prompt', PromptSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvcHJvbXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxlQUFlLElBQUlILDRDQUFNQSxDQUFDO0lBQzlCSSxTQUFTO1FBQ1BDLE1BQU1MLDRDQUFNQSxDQUFDTSxLQUFLLENBQUNDLFFBQVE7UUFDM0JDLEtBQUs7SUFDUDtJQUNBQyxRQUFRO1FBQ05KLE1BQU1LO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXNCO0lBQ3pDO0lBQ0FDLEtBQUs7UUFDSFAsTUFBTUs7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBbUI7SUFDdEM7SUFDQUUsVUFBVTtRQUNSUixNQUFNSztRQUNOSSxTQUFTO0lBQ1g7SUFDQUMsT0FBTztRQUNMVixNQUFNVztRQUNORixTQUFTO0lBQ1g7SUFDQUcsVUFBVTtRQUNSWixNQUFNVztRQUNORixTQUFTO0lBQ1g7SUFDQUksU0FBUztRQUFDO1lBQ1JiLE1BQU1MLDRDQUFNQSxDQUFDTSxLQUFLLENBQUNDLFFBQVE7WUFDM0JDLEtBQUs7UUFDUDtLQUFFO0lBQ0ZXLFlBQVk7UUFBQztZQUNYZCxNQUFNTCw0Q0FBTUEsQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1lBQzNCQyxLQUFLO1FBQ1A7S0FBRTtBQUNKLEdBQUc7SUFBRVksWUFBWTtBQUFLO0FBRXRCLE1BQU1DLFNBQVNuQiw0Q0FBTUEsQ0FBQ21CLE1BQU0sSUFBSXBCLCtDQUFLQSxDQUFDLFVBQVVFO0FBRWhELGlFQUFla0IsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXENvbGxlZ2UgcHJvamVjdFxcUHJvbXB0Qm9vay1tYWluXFxtb2RlbHNcXHByb21wdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFByb21wdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdG9yOiB7XG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogJ1VzZXInLFxuICB9LFxuICBwcm9tcHQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUHJvbXB0IGlzIHJlcXVpcmVkLiddLFxuICB9LFxuICB0YWc6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVGFnIGlzIHJlcXVpcmVkLiddLFxuICB9LFxuICBpbWFnZVVybDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBsaWtlczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICBkaXNsaWtlczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICBsaWtlZEJ5OiBbe1xuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJyxcbiAgfV0sXG4gIGRpc2xpa2VkQnk6IFt7XG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogJ1VzZXInLFxuICB9XSxcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuY29uc3QgUHJvbXB0ID0gbW9kZWxzLlByb21wdCB8fCBtb2RlbCgnUHJvbXB0JywgUHJvbXB0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0OyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlByb21wdFNjaGVtYSIsImNyZWF0b3IiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInByb21wdCIsIlN0cmluZyIsInJlcXVpcmVkIiwidGFnIiwiaW1hZ2VVcmwiLCJkZWZhdWx0IiwibGlrZXMiLCJOdW1iZXIiLCJkaXNsaWtlcyIsImxpa2VkQnkiLCJkaXNsaWtlZEJ5IiwidGltZXN0YW1wcyIsIlByb21wdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/prompt.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&page=%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&page=%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_College_project_PromptBook_main_app_api_users_id_posts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/[id]/posts/route.js */ \"(rsc)/./app/api/users/[id]/posts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/[id]/posts/route\",\n        pathname: \"/api/users/[id]/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/[id]/posts/route\"\n    },\n    resolvedPagePath: \"D:\\\\College project\\\\PromptBook-main\\\\app\\\\api\\\\users\\\\[id]\\\\posts\\\\route.js\",\n    nextConfigOutput,\n    userland: D_College_project_PromptBook_main_app_api_users_id_posts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRiU1QmlkJTVEJTJGcG9zdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGJTVCaWQlNUQlMkZwb3N0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGJTVCaWQlNUQlMkZwb3N0cyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQ29sbGVnZSUyMHByb2plY3QlNUNQcm9tcHRCb29rLW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNDb2xsZWdlJTIwcHJvamVjdCU1Q1Byb21wdEJvb2stbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXENvbGxlZ2UgcHJvamVjdFxcXFxQcm9tcHRCb29rLW1haW5cXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxbaWRdXFxcXHBvc3RzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9baWRdL3Bvc3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvW2lkXS9wb3N0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvW2lkXS9wb3N0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXENvbGxlZ2UgcHJvamVjdFxcXFxQcm9tcHRCb29rLW1haW5cXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxbaWRdXFxcXHBvc3RzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&page=%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // track the connection\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set('strictQuery', true);\n    if (isConnected) {\n        console.log('MongoDB is already connected');\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            dbName: \"share_prompt\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log('MongoDB connected');\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBYyxPQUFPLHVCQUF1QjtBQUV6QyxNQUFNQyxjQUFjO0lBQ3pCRixtREFBWSxDQUFDLGVBQWU7SUFFNUIsSUFBR0MsYUFBYTtRQUNkRyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q0MsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUVBWCxjQUFjO1FBRWRHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT1EsT0FBTztRQUNkVCxRQUFRQyxHQUFHLENBQUNRO0lBQ2Q7QUFDRixFQUFDIiwic291cmNlcyI6WyJEOlxcQ29sbGVnZSBwcm9qZWN0XFxQcm9tcHRCb29rLW1haW5cXHV0aWxzXFxkYXRhYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTsgLy8gdHJhY2sgdGhlIGNvbm5lY3Rpb25cblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xuICBtb25nb29zZS5zZXQoJ3N0cmljdFF1ZXJ5JywgdHJ1ZSk7XG5cbiAgaWYoaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICAgICAgZGJOYW1lOiBcInNoYXJlX3Byb21wdFwiLFxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pXG5cbiAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XG5cbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&page=%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();