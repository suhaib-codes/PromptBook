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
exports.id = "app/api/users/profile/route";
exports.ids = ["app/api/users/profile/route"];
exports.modules = {

/***/ "(rsc)/./app/api/users/profile/route.js":
/*!****************************************!*\
  !*** ./app/api/users/profile/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/database */ \"(rsc)/./utils/database.js\");\n/* harmony import */ var _utils_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/cloudinary */ \"(rsc)/./utils/cloudinary.js\");\n\n\n\n\nconst PATCH = async (request)=>{\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)();\n        if (!session?.user) {\n            return new Response(JSON.stringify({\n                error: 'You must be logged in to update your profile'\n            }), {\n                status: 401\n            });\n        }\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n        const contentType = request.headers.get('content-type');\n        let username, profileImageUrl = undefined;\n        if (contentType?.includes('multipart/form-data')) {\n            const formData = await request.formData();\n            username = formData.get('username');\n            const profileImage = formData.get('profileImage');\n            if (profileImage && profileImage.size > 0) {\n                const bytes = await profileImage.arrayBuffer();\n                const buffer = Buffer.from(bytes);\n                const base64Image = `data:${profileImage.type};base64,${buffer.toString('base64')}`;\n                const uploadResult = await (0,_utils_cloudinary__WEBPACK_IMPORTED_MODULE_3__.uploadImage)(base64Image, 'avatars');\n                profileImageUrl = uploadResult.url;\n            }\n        } else {\n            const jsonData = await request.json();\n            username = jsonData.username;\n        }\n        // Find the user by email from session\n        const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email: session.user.email\n        });\n        if (!user) {\n            return new Response(JSON.stringify({\n                error: 'User not found'\n            }), {\n                status: 404\n            });\n        }\n        // Update fields\n        if (username && username.trim() !== '') {\n            user.username = username.trim();\n        }\n        if (profileImageUrl) {\n            user.image = profileImageUrl;\n        }\n        await user.save();\n        return new Response(JSON.stringify({\n            message: 'Profile updated successfully',\n            user: {\n                id: user._id,\n                username: user.username,\n                email: user.email,\n                image: user.image\n            }\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Profile update error:', error);\n        return new Response(JSON.stringify({\n            error: 'Failed to update profile'\n        }), {\n            status: 500\n        });\n    }\n};\nconst GET = async (request)=>{\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)();\n        if (!session?.user) {\n            return new Response(JSON.stringify({\n                error: 'You must be logged in'\n            }), {\n                status: 401\n            });\n        }\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n        const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email: session.user.email\n        }).select('-password');\n        if (!user) {\n            return new Response(JSON.stringify({\n                error: 'User not found'\n            }), {\n                status: 404\n            });\n        }\n        return new Response(JSON.stringify({\n            id: user._id,\n            username: user.username,\n            email: user.email,\n            image: user.image\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Get profile error:', error);\n        return new Response(JSON.stringify({\n            error: 'Failed to get profile'\n        }), {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNrQyxPQUFPLENBQUM7WUFBRUMsT0FBTzlCLFFBQVFDLElBQUksQ0FBQzZCLEtBQUs7UUFBQyxHQUFHUyxNQUFNLENBQUM7UUFFdEUsSUFBSSxDQUFDdEMsTUFBTTtZQUNULE9BQU8sSUFBSUMsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPO1lBQWlCLElBQ3pDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPLElBQUlKLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUNiK0IsSUFBSWxDLEtBQUttQyxHQUFHO1lBQ1oxQixVQUFVVCxLQUFLUyxRQUFRO1lBQ3ZCb0IsT0FBTzdCLEtBQUs2QixLQUFLO1lBQ2pCRSxPQUFPL0IsS0FBSytCLEtBQUs7UUFDbkIsSUFDQTtZQUFFMUIsUUFBUTtRQUFJO0lBR2xCLEVBQUUsT0FBT0QsT0FBTztRQUNkZ0MsUUFBUWhDLEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3BDLE9BQU8sSUFBSUgsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBd0IsSUFDaEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiRDpcXENvbGxlZ2UgcHJvamVjdFxcUHJvbXB0Qm9vay1tYWluXFxhcHBcXGFwaVxcdXNlcnNcXHByb2ZpbGVcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgVXNlciBmcm9tICdAbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EQiB9IGZyb20gJ0B1dGlscy9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IHVwbG9hZEltYWdlIH0gZnJvbSAnQHV0aWxzL2Nsb3VkaW5hcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBVENIID0gYXN5bmMgKHJlcXVlc3QpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oKTtcclxuICAgIFxyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1lvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byB1cGRhdGUgeW91ciBwcm9maWxlJyB9KSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XHJcbiAgICBsZXQgdXNlcm5hbWUsIHByb2ZpbGVJbWFnZVVybCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAoY29udGVudFR5cGU/LmluY2x1ZGVzKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykpIHtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICAgIHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpO1xyXG4gICAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGVJbWFnZScpO1xyXG5cclxuICAgICAgaWYgKHByb2ZpbGVJbWFnZSAmJiBwcm9maWxlSW1hZ2Uuc2l6ZSA+IDApIHtcclxuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IHByb2ZpbGVJbWFnZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcclxuICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGBkYXRhOiR7cHJvZmlsZUltYWdlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1cGxvYWRSZXN1bHQgPSBhd2FpdCB1cGxvYWRJbWFnZShiYXNlNjRJbWFnZSwgJ2F2YXRhcnMnKTtcclxuICAgICAgICBwcm9maWxlSW1hZ2VVcmwgPSB1cGxvYWRSZXN1bHQudXJsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICB1c2VybmFtZSA9IGpzb25EYXRhLnVzZXJuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIHVzZXIgYnkgZW1haWwgZnJvbSBzZXNzaW9uXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBmaWVsZHNcclxuICAgIGlmICh1c2VybmFtZSAmJiB1c2VybmFtZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHVzZXIudXNlcm5hbWUgPSB1c2VybmFtZS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2ZpbGVJbWFnZVVybCkge1xyXG4gICAgICB1c2VyLmltYWdlID0gcHJvZmlsZUltYWdlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBtZXNzYWdlOiAnUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1Byb2ZpbGUgdXBkYXRlIGVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGUnIH0pLFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jIChyZXF1ZXN0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdZb3UgbXVzdCBiZSBsb2dnZWQgaW4nIH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSkuc2VsZWN0KCctcGFzc3dvcmQnKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZDogdXNlci5faWQsXHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXHJcbiAgICAgIH0pLFxyXG4gICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdHZXQgcHJvZmlsZSBlcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnRmFpbGVkIHRvIGdldCBwcm9maWxlJyB9KSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJVc2VyIiwiY29ubmVjdFRvREIiLCJ1cGxvYWRJbWFnZSIsIlBBVENIIiwicmVxdWVzdCIsInNlc3Npb24iLCJ1c2VyIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImhlYWRlcnMiLCJnZXQiLCJ1c2VybmFtZSIsInByb2ZpbGVJbWFnZVVybCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiZm9ybURhdGEiLCJwcm9maWxlSW1hZ2UiLCJzaXplIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJiYXNlNjRJbWFnZSIsInR5cGUiLCJ0b1N0cmluZyIsInVwbG9hZFJlc3VsdCIsInVybCIsImpzb25EYXRhIiwianNvbiIsImZpbmRPbmUiLCJlbWFpbCIsInRyaW0iLCJpbWFnZSIsInNhdmUiLCJtZXNzYWdlIiwiaWQiLCJfaWQiLCJjb25zb2xlIiwiR0VUIiwic2VsZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            'Email already exists!'\n        ],\n        required: [\n            true,\n            'Email is required!'\n        ]\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            'Username is required!'\n        ]\n    },\n    image: {\n        type: String\n    },\n    password: {\n        type: String,\n        required: false\n    },\n    authProvider: {\n        type: String,\n        enum: [\n            'google',\n            'credentials',\n            'both'\n        ],\n        default: 'credentials'\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUM1QkksT0FBTztRQUNMQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF3QjtRQUN2Q0MsVUFBVTtZQUFDO1lBQU07U0FBcUI7SUFDeEM7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNORSxVQUFVO1lBQUM7WUFBTTtTQUF3QjtJQUMzQztJQUNBRSxPQUFPO1FBQ0xMLE1BQU1DO0lBQ1I7SUFDQUssVUFBVTtRQUNSTixNQUFNQztRQUNORSxVQUFVO0lBQ1o7SUFDQUksY0FBYztRQUNaUCxNQUFNQztRQUNOTyxNQUFNO1lBQUM7WUFBVTtZQUFlO1NBQU87UUFDdkNDLFNBQVM7SUFDWDtBQUNGO0FBRUEsTUFBTUMsT0FBT2IsNENBQU1BLENBQUNhLElBQUksSUFBSWQsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVZLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxDb2xsZWdlIHByb2plY3RcXFByb21wdEJvb2stbWFpblxcbW9kZWxzXFx1c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB1bmlxdWU6IFt0cnVlLCAnRW1haWwgYWxyZWFkeSBleGlzdHMhJ10sXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW1haWwgaXMgcmVxdWlyZWQhJ10sXG4gIH0sXG4gIHVzZXJuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1VzZXJuYW1lIGlzIHJlcXVpcmVkISddLFxuICB9LFxuICBpbWFnZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLCAvLyBPcHRpb25hbCBmb3IgR29vZ2xlLW9ubHkgdXNlcnNcbiAgfSxcbiAgYXV0aFByb3ZpZGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGVudW06IFsnZ29vZ2xlJywgJ2NyZWRlbnRpYWxzJywgJ2JvdGgnXSxcbiAgICBkZWZhdWx0OiAnY3JlZGVudGlhbHMnLFxuICB9XG59KTtcblxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJ1c2VybmFtZSIsImltYWdlIiwicGFzc3dvcmQiLCJhdXRoUHJvdmlkZXIiLCJlbnVtIiwiZGVmYXVsdCIsIlVzZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_College_project_PromptBook_main_app_api_users_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/profile/route.js */ \"(rsc)/./app/api/users/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/profile/route\",\n        pathname: \"/api/users/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/profile/route\"\n    },\n    resolvedPagePath: \"D:\\\\College project\\\\PromptBook-main\\\\app\\\\api\\\\users\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: D_College_project_PromptBook_main_app_api_users_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnByb2ZpbGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGcHJvZmlsZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDQ29sbGVnZSUyMHByb2plY3QlNUNQcm9tcHRCb29rLW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNDb2xsZWdlJTIwcHJvamVjdCU1Q1Byb21wdEJvb2stbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXENvbGxlZ2UgcHJvamVjdFxcXFxQcm9tcHRCb29rLW1haW5cXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9wcm9maWxlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXENvbGxlZ2UgcHJvamVjdFxcXFxQcm9tcHRCb29rLW1haW5cXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

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

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/q","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fprofile%2Froute&page=%2Fapi%2Fusers%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fprofile%2Froute.js&appDir=D%3A%5CCollege%20project%5CPromptBook-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CCollege%20project%5CPromptBook-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();