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
exports.id = "app/api/prompt/new/route";
exports.ids = ["app/api/prompt/new/route"];
exports.modules = {

/***/ "(rsc)/./app/api/prompt/new/route.js":
/*!*************************************!*\
  !*** ./app/api/prompt/new/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/prompt */ \"(rsc)/./models/prompt.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n/* harmony import */ var _utils_cloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/cloudinary */ \"(rsc)/./utils/cloudinary.js\");\n\n\n\nconst POST = async (request)=>{\n    try {\n        const contentType = request.headers.get('content-type');\n        let userId, prompt, tag, imageUrl = null;\n        if (contentType?.includes('multipart/form-data')) {\n            // Handle form data with image\n            const formData = await request.formData();\n            userId = formData.get('userId');\n            prompt = formData.get('prompt');\n            tag = formData.get('tag');\n            const imageFile = formData.get('image');\n            if (imageFile && imageFile.size > 0) {\n                // Convert file to base64 for Cloudinary upload\n                const bytes = await imageFile.arrayBuffer();\n                const buffer = Buffer.from(bytes);\n                const base64Image = `data:${imageFile.type};base64,${buffer.toString('base64')}`;\n                const uploadResult = await (0,_utils_cloudinary__WEBPACK_IMPORTED_MODULE_2__.uploadImage)(base64Image);\n                imageUrl = uploadResult.url;\n            }\n        } else {\n            // Handle JSON data (backward compatibility)\n            const jsonData = await request.json();\n            userId = jsonData.userId;\n            prompt = jsonData.prompt;\n            tag = jsonData.tag;\n            // Handle base64 image if provided\n            if (jsonData.image) {\n                const uploadResult = await (0,_utils_cloudinary__WEBPACK_IMPORTED_MODULE_2__.uploadImage)(jsonData.image);\n                imageUrl = uploadResult.url;\n            }\n        }\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        const newPrompt = new _models_prompt__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            creator: userId,\n            prompt,\n            tag,\n            imageUrl\n        });\n        await newPrompt.save();\n        return new Response(JSON.stringify(newPrompt), {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Create prompt error:', error);\n        return new Response(\"Failed to create a new prompt\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb21wdC9uZXcvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUNVO0FBQ0U7QUFFekMsTUFBTUcsT0FBTyxPQUFPQztJQUN2QixJQUFJO1FBQ0EsTUFBTUMsY0FBY0QsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDeEMsSUFBSUMsUUFBUUMsUUFBUUMsS0FBS0MsV0FBVztRQUVwQyxJQUFJTixhQUFhTyxTQUFTLHdCQUF3QjtZQUM5Qyw4QkFBOEI7WUFDOUIsTUFBTUMsV0FBVyxNQUFNVCxRQUFRUyxRQUFRO1lBQ3ZDTCxTQUFTSyxTQUFTTixHQUFHLENBQUM7WUFDdEJFLFNBQVNJLFNBQVNOLEdBQUcsQ0FBQztZQUN0QkcsTUFBTUcsU0FBU04sR0FBRyxDQUFDO1lBQ25CLE1BQU1PLFlBQVlELFNBQVNOLEdBQUcsQ0FBQztZQUUvQixJQUFJTyxhQUFhQSxVQUFVQyxJQUFJLEdBQUcsR0FBRztnQkFDakMsK0NBQStDO2dCQUMvQyxNQUFNQyxRQUFRLE1BQU1GLFVBQVVHLFdBQVc7Z0JBQ3pDLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQ0o7Z0JBQzNCLE1BQU1LLGNBQWMsQ0FBQyxLQUFLLEVBQUVQLFVBQVVRLElBQUksQ0FBQyxRQUFRLEVBQUVKLE9BQU9LLFFBQVEsQ0FBQyxXQUFXO2dCQUVoRixNQUFNQyxlQUFlLE1BQU10Qiw4REFBV0EsQ0FBQ21CO2dCQUN2Q1YsV0FBV2EsYUFBYUMsR0FBRztZQUMvQjtRQUNKLE9BQU87WUFDSCw0Q0FBNEM7WUFDNUMsTUFBTUMsV0FBVyxNQUFNdEIsUUFBUXVCLElBQUk7WUFDbkNuQixTQUFTa0IsU0FBU2xCLE1BQU07WUFDeEJDLFNBQVNpQixTQUFTakIsTUFBTTtZQUN4QkMsTUFBTWdCLFNBQVNoQixHQUFHO1lBRWxCLGtDQUFrQztZQUNsQyxJQUFJZ0IsU0FBU0UsS0FBSyxFQUFFO2dCQUNoQixNQUFNSixlQUFlLE1BQU10Qiw4REFBV0EsQ0FBQ3dCLFNBQVNFLEtBQUs7Z0JBQ3JEakIsV0FBV2EsYUFBYUMsR0FBRztZQUMvQjtRQUNKO1FBRUEsTUFBTXhCLDREQUFXQTtRQUNqQixNQUFNNEIsWUFBWSxJQUFJN0Isc0RBQU1BLENBQUM7WUFDekI4QixTQUFTdEI7WUFDVEM7WUFDQUM7WUFDQUM7UUFDSjtRQUVBLE1BQU1rQixVQUFVRSxJQUFJO1FBQ3BCLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDTCxZQUFZO1lBQUVNLFFBQVE7UUFBSTtJQUNqRSxFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsT0FBTyxJQUFJSixTQUFTLGlDQUFpQztZQUFFRyxRQUFRO1FBQUk7SUFDdkU7QUFDSixFQUFDIiwic291cmNlcyI6WyJEOlxcQ29sbGVnZSBwcm9qZWN0XFxQcm9tcHRCb29rLW1haW5cXGFwcFxcYXBpXFxwcm9tcHRcXG5ld1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21wdCBmcm9tIFwiQG1vZGVscy9wcm9tcHRcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkB1dGlscy9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgdXBsb2FkSW1hZ2UgfSBmcm9tIFwiQHV0aWxzL2Nsb3VkaW5hcnlcIjtcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxdWVzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICAgIGxldCB1c2VySWQsIHByb21wdCwgdGFnLCBpbWFnZVVybCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlPy5pbmNsdWRlcygnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZm9ybSBkYXRhIHdpdGggaW1hZ2VcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgICAgICAgICAgdXNlcklkID0gZm9ybURhdGEuZ2V0KCd1c2VySWQnKTtcbiAgICAgICAgICAgIHByb21wdCA9IGZvcm1EYXRhLmdldCgncHJvbXB0Jyk7XG4gICAgICAgICAgICB0YWcgPSBmb3JtRGF0YS5nZXQoJ3RhZycpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlID0gZm9ybURhdGEuZ2V0KCdpbWFnZScpO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2VGaWxlICYmIGltYWdlRmlsZS5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgZmlsZSB0byBiYXNlNjQgZm9yIENsb3VkaW5hcnkgdXBsb2FkXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBpbWFnZUZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBgZGF0YToke2ltYWdlRmlsZS50eXBlfTtiYXNlNjQsJHtidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpfWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgdXBsb2FkSW1hZ2UoYmFzZTY0SW1hZ2UpO1xuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gdXBsb2FkUmVzdWx0LnVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBKU09OIGRhdGEgKGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICAgICAgdXNlcklkID0ganNvbkRhdGEudXNlcklkO1xuICAgICAgICAgICAgcHJvbXB0ID0ganNvbkRhdGEucHJvbXB0O1xuICAgICAgICAgICAgdGFnID0ganNvbkRhdGEudGFnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBIYW5kbGUgYmFzZTY0IGltYWdlIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAoanNvbkRhdGEuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRSZXN1bHQgPSBhd2FpdCB1cGxvYWRJbWFnZShqc29uRGF0YS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmwgPSB1cGxvYWRSZXN1bHQudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcbiAgICAgICAgY29uc3QgbmV3UHJvbXB0ID0gbmV3IFByb21wdCh7IFxuICAgICAgICAgICAgY3JlYXRvcjogdXNlcklkLCBcbiAgICAgICAgICAgIHByb21wdCwgXG4gICAgICAgICAgICB0YWcsXG4gICAgICAgICAgICBpbWFnZVVybCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgbmV3UHJvbXB0LnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShuZXdQcm9tcHQpLCB7IHN0YXR1czogMjAxIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBwcm9tcHQgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIHRvIGNyZWF0ZSBhIG5ldyBwcm9tcHRcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUHJvbXB0IiwiY29ubmVjdFRvREIiLCJ1cGxvYWRJbWFnZSIsIlBPU1QiLCJyZXF1ZXN0IiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwiZ2V0IiwidXNlcklkIiwicHJvbXB0IiwidGFnIiwiaW1hZ2VVcmwiLCJpbmNsdWRlcyIsImZvcm1EYXRhIiwiaW1hZ2VGaWxlIiwic2l6ZSIsImJ5dGVzIiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYmFzZTY0SW1hZ2UiLCJ0eXBlIiwidG9TdHJpbmciLCJ1cGxvYWRSZXN1bHQiLCJ1cmwiLCJqc29uRGF0YSIsImpzb24iLCJpbWFnZSIsIm5ld1Byb21wdCIsImNyZWF0b3IiLCJzYXZlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/prompt/new/route.js\n");

/***/ }),

/***/ "(rsc)/./models/prompt.js":
/*!**************************!*\
  !*** ./models/prompt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PromptSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    creator: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    prompt: {\n        type: String,\n        required: [\n            true,\n            'Prompt is required.'\n        ]\n    },\n    tag: {\n        type: String,\n        required: [\n            true,\n            'Tag is required.'\n        ]\n    },\n    imageUrl: {\n        type: String,\n        default: null\n    },\n    likes: {\n        type: Number,\n        default: 0\n    },\n    dislikes: {\n        type: Number,\n        default: 0\n    },\n    likedBy: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'User'\n        }\n    ],\n    dislikedBy: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'User'\n        }\n    ]\n}, {\n    timestamps: true\n});\nconst Prompt = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Prompt || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Prompt', PromptSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvcHJvbXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxlQUFlLElBQUlILDRDQUFNQSxDQUFDO0lBQzlCSSxTQUFTO1FBQ1BDLE1BQU1MLDRDQUFNQSxDQUFDTSxLQUFLLENBQUNDLFFBQVE7UUFDM0JDLEtBQUs7SUFDUDtJQUNBQyxRQUFRO1FBQ05KLE1BQU1LO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXNCO0lBQ3pDO0lBQ0FDLEtBQUs7UUFDSFAsTUFBTUs7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBbUI7SUFDdEM7SUFDQUUsVUFBVTtRQUNSUixNQUFNSztRQUNOSSxTQUFTO0lBQ1g7SUFDQUMsT0FBTztRQUNMVixNQUFNVztRQUNORixTQUFTO0lBQ1g7SUFDQUcsVUFBVTtRQUNSWixNQUFNVztRQUNORixTQUFTO0lBQ1g7SUFDQUksU0FBUztRQUFDO1lBQ1JiLE1BQU1MLDRDQUFNQSxDQUFDTSxLQUFLLENBQUNDLFFBQVE7WUFDM0JDLEtBQUs7UUFDUDtLQUFFO0lBQ0ZXLFlBQVk7UUFBQztZQUNYZCxNQUFNTCw0Q0FBTUEsQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1lBQzNCQyxLQUFLO1FBQ1A7S0FBRTtBQUNKLEdBQUc7SUFBRVksWUFBWTtBQUFLO0FBRXRCLE1BQU1DLFNBQVNuQiw0Q0FBTUEsQ0FBQ21CLE1BQU0sSUFBSXBCLCtDQUFLQSxDQUFDLFVBQVVFO0FBRWhELGlFQUFla0IsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXENvbGxlZ2UgcHJvamVjdFxcUHJvbXB0Qm9vay1tYWluXFxtb2RlbHNcXHByb21wdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFByb21wdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdG9yOiB7XG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogJ1VzZXInLFxuICB9LFxuICBwcm9tcHQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUHJvbXB0IGlzIHJlcXVpcmVkLiddLFxuICB9LFxuICB0YWc6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVGFnIGlzIHJlcXVpcmVkLiddLFxuICB9LFxuICBpbWFnZVVybDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICB9LFxuICBsaWtlczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICBkaXNsaWtlczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICBsaWtlZEJ5OiBbe1xuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJyxcbiAgfV0sXG4gIGRpc2xpa2VkQnk6IFt7XG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogJ1VzZXInLFxuICB9XSxcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuY29uc3QgUHJvbXB0ID0gbW9kZWxzLlByb21wdCB8fCBtb2RlbCgnUHJvbXB0JywgUHJvbXB0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0OyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlByb21wdFNjaGVtYSIsImNyZWF0b3IiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInByb21wdCIsIlN0cmluZyIsInJlcXVpcmVkIiwidGFnIiwiaW1hZ2VVcmwiLCJkZWZhdWx0IiwibGlrZXMiLCJOdW1iZXIiLCJkaXNsaWtlcyIsImxpa2VkQnkiLCJkaXNsaWtlZEJ5IiwidGltZXN0YW1wcyIsIlByb21wdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/prompt.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprompt%2Fnew%2Froute&page=%2Fapi%2Fprompt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2Fnew%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprompt%2Fnew%2Froute&page=%2Fapi%2Fprompt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2Fnew%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_College_project_PromptBook_main_app_api_prompt_new_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/prompt/new/route.js */ \"(rsc)/./app/api/prompt/new/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/prompt/new/route\",\n        pathname: \"/api/prompt/new\",\n        filename: \"route\",\n        bundlePath: \"app/api/prompt/new/route\"\n    },\n    resolvedPagePath: \"D:\\\\College project\\\\PromptBook-main\\\\app\\\\api\\\\prompt\\\\new\\\\route.js\",\n    nextConfigOutput,\n    userland: D_College_project_PromptBook_main_app_api_prompt_new_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9tcHQlMkZuZXclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb21wdCUyRm5ldyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb21wdCUyRm5ldyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQ29sbGVnZSUyMHByb2plY3QlNUNQcm9tcHRCb29rLW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNDb2xsZWdlJTIwcHJvamVjdCU1Q1Byb21wdEJvb2stbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXENvbGxlZ2UgcHJvamVjdFxcXFxQcm9tcHRCb29rLW1haW5cXFxcYXBwXFxcXGFwaVxcXFxwcm9tcHRcXFxcbmV3XFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9tcHQvbmV3L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvbXB0L25ld1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvbXB0L25ldy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXENvbGxlZ2UgcHJvamVjdFxcXFxQcm9tcHRCb29rLW1haW5cXFxcYXBwXFxcXGFwaVxcXFxwcm9tcHRcXFxcbmV3XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprompt%2Fnew%2Froute&page=%2Fapi%2Fprompt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2Fnew%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/cloudinary.js":
/*!*****************************!*\
  !*** ./utils/cloudinary.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteImage: () => (/* binding */ deleteImage),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nconst uploadImage = async (imageData, folder = 'prompts')=>{\n    try {\n        const folderPath = `${process.env.CLOUDINARY_FOLDER_ROOT}/${folder}`;\n        const result = await cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.uploader.upload(imageData, {\n            folder: folderPath,\n            resource_type: 'image',\n            transformation: [\n                {\n                    width: 800,\n                    height: 600,\n                    crop: 'limit'\n                },\n                {\n                    quality: 'auto'\n                },\n                {\n                    fetch_format: 'auto'\n                }\n            ]\n        });\n        return {\n            url: result.secure_url,\n            publicId: result.public_id\n        };\n    } catch (error) {\n        console.error('Cloudinary upload error:', error);\n        throw new Error('Failed to upload image');\n    }\n};\nconst deleteImage = async (publicId)=>{\n    try {\n        await cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.uploader.destroy(publicId);\n        return true;\n    } catch (error) {\n        console.error('Cloudinary delete error:', error);\n        return false;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9jbG91ZGluYXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBRTlDQywwQ0FBVUEsQ0FBQ0MsTUFBTSxDQUFDO0lBQ2hCQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDbENDLFNBQVNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO0lBQ3ZDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLHFCQUFxQjtBQUMvQztBQUVPLE1BQU1DLGNBQWMsT0FBT0MsV0FBV0MsU0FBUyxTQUFTO0lBQzdELElBQUk7UUFDRixNQUFNQyxhQUFhLEdBQUdWLFFBQVFDLEdBQUcsQ0FBQ1Usc0JBQXNCLENBQUMsQ0FBQyxFQUFFRixRQUFRO1FBRXBFLE1BQU1HLFNBQVMsTUFBTWYsMENBQVVBLENBQUNnQixRQUFRLENBQUNDLE1BQU0sQ0FBQ04sV0FBVztZQUN6REMsUUFBUUM7WUFDUkssZUFBZTtZQUNmQyxnQkFBZ0I7Z0JBQ2Q7b0JBQUVDLE9BQU87b0JBQUtDLFFBQVE7b0JBQUtDLE1BQU07Z0JBQVE7Z0JBQ3pDO29CQUFFQyxTQUFTO2dCQUFPO2dCQUNsQjtvQkFBRUMsY0FBYztnQkFBTzthQUN4QjtRQUNIO1FBRUEsT0FBTztZQUNMQyxLQUFLVixPQUFPVyxVQUFVO1lBQ3RCQyxVQUFVWixPQUFPYSxTQUFTO1FBQzVCO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE1BQU0sSUFBSUUsTUFBTTtJQUNsQjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxjQUFjLE9BQU9MO0lBQ2hDLElBQUk7UUFDRixNQUFNM0IsMENBQVVBLENBQUNnQixRQUFRLENBQUNpQixPQUFPLENBQUNOO1FBQ2xDLE9BQU87SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTztJQUNUO0FBQ0YsRUFBRTtBQUVGLGlFQUFlN0IsMENBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxDb2xsZWdlIHByb2plY3RcXFByb21wdEJvb2stbWFpblxcdXRpbHNcXGNsb3VkaW5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknO1xyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VEX05BTUUsXHJcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZLFxyXG4gIGFwaV9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX1NFQ1JFVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoaW1hZ2VEYXRhLCBmb2xkZXIgPSAncHJvbXB0cycpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9sZGVyUGF0aCA9IGAke3Byb2Nlc3MuZW52LkNMT1VESU5BUllfRk9MREVSX1JPT1R9LyR7Zm9sZGVyfWA7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsb3VkaW5hcnkudXBsb2FkZXIudXBsb2FkKGltYWdlRGF0YSwge1xyXG4gICAgICBmb2xkZXI6IGZvbGRlclBhdGgsXHJcbiAgICAgIHJlc291cmNlX3R5cGU6ICdpbWFnZScsXHJcbiAgICAgIHRyYW5zZm9ybWF0aW9uOiBbXHJcbiAgICAgICAgeyB3aWR0aDogODAwLCBoZWlnaHQ6IDYwMCwgY3JvcDogJ2xpbWl0JyB9LFxyXG4gICAgICAgIHsgcXVhbGl0eTogJ2F1dG8nIH0sXHJcbiAgICAgICAgeyBmZXRjaF9mb3JtYXQ6ICdhdXRvJyB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVybDogcmVzdWx0LnNlY3VyZV91cmwsXHJcbiAgICAgIHB1YmxpY0lkOiByZXN1bHQucHVibGljX2lkLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignQ2xvdWRpbmFyeSB1cGxvYWQgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBsb2FkIGltYWdlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUltYWdlID0gYXN5bmMgKHB1YmxpY0lkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNsb3VkaW5hcnkudXBsb2FkZXIuZGVzdHJveShwdWJsaWNJZCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignQ2xvdWRpbmFyeSBkZWxldGUgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkaW5hcnk7XHJcbiJdLCJuYW1lcyI6WyJ2MiIsImNsb3VkaW5hcnkiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsInVwbG9hZEltYWdlIiwiaW1hZ2VEYXRhIiwiZm9sZGVyIiwiZm9sZGVyUGF0aCIsIkNMT1VESU5BUllfRk9MREVSX1JPT1QiLCJyZXN1bHQiLCJ1cGxvYWRlciIsInVwbG9hZCIsInJlc291cmNlX3R5cGUiLCJ0cmFuc2Zvcm1hdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY3JvcCIsInF1YWxpdHkiLCJmZXRjaF9mb3JtYXQiLCJ1cmwiLCJzZWN1cmVfdXJsIiwicHVibGljSWQiLCJwdWJsaWNfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImRlbGV0ZUltYWdlIiwiZGVzdHJveSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/cloudinary.js\n");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprompt%2Fnew%2Froute&page=%2Fapi%2Fprompt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprompt%2Fnew%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();