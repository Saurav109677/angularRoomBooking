function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admin works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/room-detail/room-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/room-detail/room-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRoomsRoomDetailRoomDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"roomDetails\">\n    <p>{{message}}</p>\n    <h2>Room details</h2>\n    <a  (click)=\"editRoom()\"class=\"btn btn-small btn-warning\">edit</a>\n    <a (click)=\"deleteRoom()\"class=\"btn btn-small btn-warning\">delete</a>\n    <table>\n      <tr>\n        <td>id</td><td>{{roomDetailComponent?.id}}</td> <!--get room id if roomDetailComponetn is not null-->\n      </tr>\n      <tr>\n        <td>name</td><td>{{roomDetailComponent?.name}}</td>\n      </tr>\n      <tr>\n        <td>location</td><td>{{roomDetailComponent?.location}}</td>\n      </tr>\n    </table>\n    <h4>This room can accomodate:</h4>\n    <table *ngIf=\"roomDetailComponent.capacities\">\n      <tr *ngFor=\"let layoutCapacity of roomDetailComponent.capacities\"> <!-- repeat the tr for each capacity -->\n        <td>{{layoutCapacity.layout}}</td><td>{{layoutCapacity.capacity}}</td>\n      </tr>\n    </table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/room-edit/room-edit.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/room-edit/room-edit.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRoomsRoomEditRoomEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1> {{room.id == null ? 'Add' : 'Edit'}} Room</h1>\n\n<form [formGroup]='roomForm'>\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" id=\"name\"  formControlName='roomName' [class.is-invalid]=\"roomForm.controls['roomName'].invalid && roomForm.controls['roomName'].touched\" >\n    <div class=\"alert alert-danger\" *ngIf=\"roomForm.controls['roomName'].invalid && roomForm.controls['roomName'].touched\">Room name is required.</div>\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"location\">Location</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Enter location\" id=\"location\"  formControlName='location' [class.is-invalid]=\"roomForm.controls['location'].invalid && roomForm.controls['location'].touched\">\n    <div class=\"alert alert-danger\" *ngIf=\"roomForm.controls['location'].invalid && roomForm.controls['location'].touched\">Location cannot be blank and must be atlest 2 character.</div>\n  </div>\n\n  <h2>This room can accomodate:</h2>\n\n  <!-- list the layout types here -->\n  <div class=\"form-group\"  *ngFor=\"let layout of layouts\">\n    <label>{{layoutEnum[layout]}}</label>\n    <input type=\"number\" class=\"form-control\" id=\"layout{{layout}}\" formControlName='layout{{layout}}'>\n  </div>\n\n  <button type=\"button\" [disabled]=\"roomForm.invalid\"(click)=\"onSubmit()\" class=\"btn btn-primary\">Save</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/rooms.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/rooms.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminRoomsRoomsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Rooms Admin</h1>\n\n<a (click)=\"navigateAddRoom()\" class=\"btn btn-warning mb-3\">add</a>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <table class=\"table\">\n        <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th></th>\n            </tr>\n          </thead>\n        <tbody>\n          <tr *ngFor=\"let r of room\">\n            <td>{{r.id}}</td>\n            <td>{{r.name}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectedRoomFunction(r.id)\">view</button>\n            </td>\n            <th></th>\n          </tr>\n        </tbody>\n      </table>\n      <div *ngIf=\"loadingData\">{{message}}</div>\n    </div>\n    <div class=\"col-6\">\n      <app-room-detail *ngIf=\"actionInRoomComponent=='view'\" [roomDetailComponent]=\"selectedRoom\" (deleteEvent)=\"loadData()\"></app-room-detail>\n      <app-room-edit *ngIf=\"actionInRoomComponent=='edit' || actionInRoomComponent=='add'\" (saveEvent)=\"loadData()\" [room]='selectedRoom'></app-room-edit>\n    </div>\n  </div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/edit-user/edit-user.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/edit-user/edit-user.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUsersEditUserEditUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{user!=null?'Edit':'Add'}} User</h1>\n\n<div class=\"bg-warning p-5\" *ngIf=\"message\">Please Wait . . . </div>\n\n<form #userForm=\"ngForm\">\n\n  <div class=\"form-group\" >\n    <label for=\"name\">Name</label>\n    <input (change)=\"checkNameValidation()\" [class.is-invalid]=\"formName.invalid && formName.touched || !nameIsValid\" type=\"text\" class=\"form-control\"  id=\"name\" [(ngModel)]=\"formUser.name\" name=\"name\" #formName=\"ngModel\" required>\n    <div *ngIf=\"formName.invalid && formName.touched\" class=\"alert alert-danger\">Name is required!</div>\n    <div *ngIf=\"!nameIsValid && formName.touched\" class=\"alert alert-danger\">Name cannot be blank</div>\n\n\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"user==null\"> <!-- only show this field on adding a user -->\n    <label for=\"password\">Password</label>\n    <input  type=\"password\" [class.is-invalid]=\"pass.invalid && pass.touched ||!validPassword\" class=\"form-control\" id=\"password\" [(ngModel)]=\"formPassword\" name='password' #pass=\"ngModel\" required>\n    <div *ngIf=\"pass.invalid && pass.touched\" class=\"alert alert-danger\">Password must be A-Z charaters.</div>\n   \n\n  </div>\n  <div class=\"form-group\" *ngIf=\"user==null\"> <!-- only show this field on adding a user -->\n    <label for=\"password\">Confirm Password</label>\n    <input type=\"password\" (change)=\"isSamePassword()\" [class.is-invalid]=\"cnfPass.invalid && cnfPass.touched || !validPassword\" class=\"form-control\" id=\"cnfpassword\"  name='cnfPassword' [(ngModel)]=\"formCnfPassword\" #cnfPass=\"ngModel\" required>\n    <div *ngIf=\"cnfPass.invalid && cnfPass.touched || !validPassword\"  class=\"alert alert-danger\">Password do not match</div>\n\n  </div>\n  \n  <button [disabled]=\"userForm.invalid || !nameIsValid\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Save</button>\n</form>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/user-detail/user-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/user-detail/user-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUsersUserDetailUserDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"userDetails\">\n    <h2>User details</h2>\n    <p>{{message}}</p>\n    <a (click)=\"editUser(userToBeShown.id)\"class=\"btn btn-small btn-warning\" >edit</a>\n    <a (click)=\"deleteUser()\"class=\"btn btn-small btn-warning\">delete</a>\n    <table>\n      <tr>\n        <td>id</td><td>{{userToBeShown.id}}</td>\n      </tr>\n      <tr>\n        <td>name</td><td>{{userToBeShown.name}}</td>\n      </tr>\n      <tr>\n        <td>Password</td><td><a (click)=\"pageNotFound()\"class=\"btn btn-small btn-warning\">reset</a></td>\n      </tr>\n    </table>\n  </div>\n \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Users Admin</h1>\n<button (click)=\"addUser()\" [disabled]=\"action==='edit'\" class=\"btn btn-warning mb-3\">add</button>\n<div class=\"row\">\n  <div class=\"col-6\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\"> <!-- repeat this tr for each user -->\n        <td>{{user.id}}</td>\n        <td>{{user.name}}</td>\n        <td><button (click)=\"selectUser(user.id)\" type=\"button\" class=\"btn btn-primary\">view</button></td>\n      </tr>\n      </tbody>\n    </table>\n    <div *ngIf=\"loadingData\">{{message}}</div>\n  </div>\n  <div class=\"col-6\">\n    <app-user-detail *ngIf=\"action==='view'\" [userToBeShown]=\"selectedUser\" (deleteUserEvent)=\"loadUserData()\"></app-user-detail>\n    <app-edit-user  *ngIf=\"action==='edit' || action==='add'\" [user]=\"selectedUser\" (dataChangeEvent)=\"loadUserData()\"></app-edit-user>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <app-menu></app-menu>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingsBookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let booking of bookings\" class=\"row row-striped\"> <!-- repeat this div for each booking -->\n    <div class=\"col-2 text-right\">\n      <h1 class=\"display-4\"><span class=\"badge badge-secondary\">{{booking.getDateAsDate() | date:'dd'}}</span></h1>\n      <h2>{{booking.getDateAsDate() | date:'MMMM'}}</h2>\n    </div>\n    <div class=\"col-10\">\n      <h3 class=\"text-uppercase\"><strong>{{booking.title}}</strong></h3>\n      <ul class=\"list-inline\">\n        <li class=\"list-inline-item\"><i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>{{booking.getDateAsDate() | date: 'EEEE'}}</li>\n        <li class=\"list-inline-item\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>{{booking.startTime}} - {{booking.endTime}}</li>\n        <li class=\"list-inline-item\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>{{booking.room.name}}</li>\n      </ul>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"mb-0\">Booked by :{{booking.user.name}}</p>\n          <p class=\"mb-0\">Room layout: {{booking.layout}}</p>\n          <p>Participants:{{booking.participants}}</p>\n        </div>\n        <div class=\"col-6\">\n          <a class=\"btn btn-warning\">Amend</a>\n          <a class=\"btn btn-danger\">Cancel</a>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalenderCalenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Room Booking System</h1>\n\n<h2>The following meetings are taking place on: <input type=\"date\" [(ngModel)]=\"selectedDate\" (change)=\"setDate()\"/></h2>\n\n<a class=\"btn btn-primary mt-3 mb-5\" (click)=\"addBooking()\">New Booking</a>\n<h3 *ngIf=\"!dataLoaded\">Please Wait ....</h3>\n<!-- only show this h3 if there are no bookings! -->\n<h3 *ngIf=\"bookings.length==0\"class=\"mt-5\">There are no meetings currently scheduled for this date.</h3>\n\n<div *ngFor=\"let booking of bookings\" class=\"row row-striped\"> <!-- repeat this div for each booking -->\n  <div class=\"col-2 text-right\">\n    <h1 class=\"display-4\"><span class=\"badge badge-secondary\">{{booking.getDateAsDate() | date:'dd'}}</span></h1>\n    <h2>{{booking.getDateAsDate() | date:'MMMM'}}</h2>\n  </div>\n  <div class=\"col-10\">\n    <h3 class=\"text-uppercase\"><strong>{{booking.title}}</strong></h3>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>{{booking.getDateAsDate() | date: 'EEEE'}}</li>\n      <li class=\"list-inline-item\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>{{booking.startTime}} - {{booking.endTime}}</li>\n      <li class=\"list-inline-item\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>{{booking.room.name}}</li>\n    </ul>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <p class=\"mb-0\">Booked by :{{booking.user.name}}</p>\n        <p class=\"mb-0\">Room layout: {{booking.layout}}</p>\n        <p>Participants:{{booking.participants}}</p>\n      </div>\n      <div class=\"col-6\">\n        <a (click)=\"editBooking(booking.id)\" class=\"btn btn-warning\">Amend</a>\n        <a class=\"btn btn-danger\" (click)=\"cancelBooking(booking.id)\">Cancel</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<p class=\"mt-5\">The design of this page is taken from <a href=\"https://bootsnipp.com/snippets/VgzeR\">https://bootsnipp.com/snippets/VgzeR</a></p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/edit-booking/edit-booking.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calender/edit-booking/edit-booking.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalenderEditBookingEditBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{ booking.id == null ? 'Add' : 'Edit'}} Booking</h1>\n<p>{{message}}</p>\n<form *ngIf=\"dataLoaded\">\n  <div class=\"row\">\n    <div class=\"form-group col-4\">\n      <label for=\"date\">Date</label>\n      <input type=\"date\" class=\"form-control\" id=\"date\" [(ngModel)]=\"booking.date\" name=\"date\">\n    </div>\n\n    <div class=\"form-group col-4\">\n      <label for=\"startTime\">Start time</label>\n      <input type=\"time\" class=\"form-control\" id=\"startTime\" [(ngModel)]=\"booking.startTime\" name=\"sTime\">\n    </div>\n\n    <div class=\"form-group col-4\">\n      <label for=\"endTime\">End time</label>\n      <input type=\"time\" class=\"form-control\" id=\"endTime\" [(ngModel)]=\"booking.endTime\" name=\"eTime\">\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"form-group col-5\">\n      <label for=\"room\">Room</label>\n      <select class=\"form-control\" id=\"room\" name=\"room\" [(ngModel)]=\"booking.room\" >\n        <!-- repeat the option for each room -->\n        <option *ngFor=\"let room of rooms\" [ngValue]=\"room\">{{room.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-5\">\n      <label for=\"layout\">Layout</label>\n      <select class=\"form-control\" id=\"layout\" name=\"layout\" [(ngModel)]=\"layoutEnum[booking.layout]\">\n        <!-- repeat the option for each layout -->\n        <option *ngFor=\"let layout of layouts\" [ngValue]=\"layoutEnum[layout]\">{{layoutEnum[layout]}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-2\">\n      <label for=\"participants\">Participants</label>\n      <input type=\"number\" class=\"form-control\" id=\"participants\" [(ngModel)]=\"booking.participants\" name=\"parti\">\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"layout\">User</label>\n      <select class=\"form-control\" id=\"user\" [(ngModel)]=\"booking.user\" name=\"user\">\n        <!-- repeat the option for each user -->\n        <option *ngFor=\"let user of users\" [ngValue]=\"user\" >{{user.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-6\">\n      <label for=\"title\">Meeting title</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"booking.title\" name=\"title\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <button (click)=\"onSubmit()\"type=\"button\" class=\"btn btn-primary\">Save</button>\n    </div>\n  </div>\n</form>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Login</h1>\n\n<div class=\"bg-warning p-5\" *ngIf=\"message\">{{message}}</div>\n\n<form #userForm=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"user name\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Login</button>\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\" lang=\"en\">\n<head>\n\n</head>\n<body>\n\n<nav th:fragment=\"top\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" (click)=\"navigateToHome()\" >Room Booking System</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" (click)=\"navigateToHome()\" >Calendar</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Admin\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" (click)=\"navigateToRooms()\" >Rooms</a>\n                    <a class=\"dropdown-item\" (click)=\"navigateToUsers()\">Users</a>\n\n                </div>\n            </li>\n        </ul>\n\n    </div>\n</nav>\n\n</body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin/admin.component.css":
  /*!*******************************************!*\
    !*** ./src/app/admin/admin.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/rooms/room-detail/room-detail.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/rooms/room-detail/room-detail.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRoomsRoomDetailRoomDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb20tZGV0YWlsL3Jvb20tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/rooms/room-detail/room-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/rooms/room-detail/room-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: RoomDetailComponent */

  /***/
  function srcAppAdminRoomsRoomDetailRoomDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomDetailComponent", function () {
      return RoomDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");

    var RoomDetailComponent =
    /*#__PURE__*/
    function () {
      function RoomDetailComponent(router, dataService) {
        _classCallCheck(this, RoomDetailComponent);

        this.router = router;
        this.dataService = dataService;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = '';
      }

      _createClass(RoomDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editRoom",
        value: function editRoom() {
          this.router.navigate(['admin', 'rooms'], {
            queryParams: {
              action: 'edit',
              id: this.roomDetailComponent.id
            }
          });
        }
      }, {
        key: "deleteRoom",
        value: function deleteRoom() {
          var _this = this;

          this.dataService.deleteRoom(this.roomDetailComponent.id).subscribe(function (room) {
            _this.deleteEvent.emit();

            _this.router.navigate(['admin', 'rooms']);
          }, function (error) {
            _this.message = 'Something not correct!!';
          });
        }
      }]);

      return RoomDetailComponent;
    }();

    RoomDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RoomDetailComponent.prototype, "roomDetailComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RoomDetailComponent.prototype, "deleteEvent", void 0);
    RoomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/room-detail/room-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room-detail.component.css */
      "./src/app/admin/rooms/room-detail/room-detail.component.css")).default]
    })], RoomDetailComponent);
    /***/
  },

  /***/
  "./src/app/admin/rooms/room-edit/room-edit.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/admin/rooms/room-edit/room-edit.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRoomsRoomEditRoomEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb20tZWRpdC9yb29tLWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/rooms/room-edit/room-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/rooms/room-edit/room-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: RoomEditComponent */

  /***/
  function srcAppAdminRoomsRoomEditRoomEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomEditComponent", function () {
      return RoomEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Room */
    "./src/app/models/Room.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_reset_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/reset-form.service */
    "./src/app/reset-form.service.ts");

    var RoomEditComponent =
    /*#__PURE__*/
    function () {
      //without using FormBuilder ----------------------------------------------------

      /*roomForm=new FormGroup(
        {
          roomName:new FormControl('roomName'),
          location:new FormControl('location')
        }
      );*/
      //-----------------------------------------------------------------
      function RoomEditComponent(formBuilder, dataService, router, formResetService) {
        _classCallCheck(this, RoomEditComponent);

        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.router = router;
        this.formResetService = formResetService;
        this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layouts = Object.keys(src_app_models_Room__WEBPACK_IMPORTED_MODULE_2__["Layout"]);
        this.layoutEnum = src_app_models_Room__WEBPACK_IMPORTED_MODULE_2__["Layout"];
      }

      _createClass(RoomEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //Binding the room details to FormGroup without FormBuilder -------------------------------

          /*this.roomForm.patchValue({
            roomName:this.room.name,
            location:this.room.location
          });*/
          //-------------------------------------------------------------------------------------  
          //using FormBuilder (Recommended)---------------------------------------------------
          //console.log(this.room);
          this.initializeForm();
          this.resetEventSubscription = this.formResetService.resetRoomEvent.subscribe(function (room) {
            _this2.room = room;

            _this2.initializeForm();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.resetEventSubscription.unsubscribe();
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          var _this3 = this;

          this.roomForm = this.formBuilder.group({
            roomName: [this.room.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            location: [this.room.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]]
          }); // -------------------------------------------------------------------------------------

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var layout = _step.value;

              var layoutCapacity = _this3.room.capacities.find(function (lc) {
                //console.log(lc);   
                return lc.layout === layout;
              }); //console.log(layoutCapacity); 


              var initialCapactity = layoutCapacity == null ? 0 : layoutCapacity.capacity;

              _this3.roomForm.addControl("layout".concat(layout), _this3.formBuilder.control(initialCapactity)); //initial value in bracket

            };

            for (var _iterator = this.layouts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          // console.log(this.roomForm);
          this.room.name = this.roomForm.controls['roomName'].value;
          this.room.location = this.roomForm.value['location']; //alternative method

          this.room.capacities = new Array();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.layouts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var layout = _step2.value;
              var lc = new src_app_models_Room__WEBPACK_IMPORTED_MODULE_2__["LayoutCapacity"](); //lc.layout is in lowercase .. but it should be according to enum i.e uppercase . REseolved in data service

              lc.layout = this.layoutEnum[layout];
              lc.capacity = this.roomForm.controls["layout".concat(layout)].value;
              this.room.capacities.push(lc);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (this.room.id == null) {
            this.dataService.addRoom(this.room).subscribe(function (r) {
              _this4.saveEvent.emit();

              _this4.router.navigate(['admin', 'rooms'], {
                queryParams: {
                  id: r.id,
                  action: 'view'
                }
              });
            });
          } else {
            this.dataService.updateRoom(this.room).subscribe(function (r) {
              return console.log(r);
            });
            this.router.navigate(['admin', 'rooms'], {
              queryParams: {
                id: this.room.id,
                action: 'view'
              }
            });
          }
          /*console.log(this.room);
          console.log(this.roomForm);*/

        }
      }]);

      return RoomEditComponent;
    }();

    RoomEditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_reset_form_service__WEBPACK_IMPORTED_MODULE_6__["ResetFormService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RoomEditComponent.prototype, "room", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RoomEditComponent.prototype, "saveEvent", void 0);
    RoomEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/room-edit/room-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room-edit.component.css */
      "./src/app/admin/rooms/room-edit/room-edit.component.css")).default]
    })], RoomEditComponent);
    /***/
  },

  /***/
  "./src/app/admin/rooms/rooms.component.css":
  /*!*************************************************!*\
    !*** ./src/app/admin/rooms/rooms.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminRoomsRoomsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb21zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/rooms/rooms.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/rooms/rooms.component.ts ***!
    \************************************************/

  /*! exports provided: RoomsComponent */

  /***/
  function srcAppAdminRoomsRoomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomsComponent", function () {
      return RoomsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");
    /* harmony import */


    var src_app_models_Room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/Room */
    "./src/app/models/Room.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_reset_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/reset-form.service */
    "./src/app/reset-form.service.ts");

    var RoomsComponent =
    /*#__PURE__*/
    function () {
      function RoomsComponent(dataService, router, route, formResetService) {
        _classCallCheck(this, RoomsComponent);

        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.formResetService = formResetService;
        this.loadingData = true;
        this.message = 'Please wait . . .';
        this.reloadTimes = 0;
      }

      _createClass(RoomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "processAfterLoading",
        value: function processAfterLoading() {
          var _this5 = this;

          this.route.queryParams.subscribe(function (params) {
            var id = params['id'];
            _this5.actionInRoomComponent = params['action'];

            if (id) {
              // -----------------
              _this5.selectedRoom = _this5.room.find(function (room) {
                return room.id === +id;
              });
            } //---------------


            if (params['action'] === 'add') {
              _this5.selectedRoom = new src_app_models_Room__WEBPACK_IMPORTED_MODULE_3__["Room"]();

              _this5.formResetService.resetRoomEvent.emit(_this5.selectedRoom);
            }
          });
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this6 = this;

          this.dataService.getRooms().subscribe(function (rooms) {
            _this6.room = rooms;

            _this6.processAfterLoading();

            _this6.loadingData = false;
            console.log(rooms);
          }, function (error) {
            if (error.status === 402) {
              _this6.message = 'Sorry! You need to pay for accessing !';
            } else {
              _this6.reloadTimes++;

              if (_this6.reloadTimes < 10) {
                _this6.message = 'Something went wrong!  Redirecting . . . ' + _this6.reloadTimes;

                _this6.loadData();
              } else {
                _this6.message = 'Sorry! Cant connect to server . Please contact support!';
              }
            }
          });
        }
      }, {
        key: "selectedRoomFunction",
        value: function selectedRoomFunction(id) {
          this.router.navigate(['admin', 'rooms'], {
            queryParams: {
              id: id,
              action: 'view'
            }
          });
        }
      }, {
        key: "navigateAddRoom",
        value: function navigateAddRoom() {
          this.router.navigate(['admin', 'rooms'], {
            queryParams: {
              action: 'add'
            }
          });
        }
      }]);

      return RoomsComponent;
    }();

    RoomsComponent.ctorParameters = function () {
      return [{
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_reset_form_service__WEBPACK_IMPORTED_MODULE_5__["ResetFormService"]
      }];
    };

    RoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rooms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rooms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/rooms/rooms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rooms.component.css */
      "./src/app/admin/rooms/rooms.component.css")).default]
    })], RoomsComponent);
    /***/
  },

  /***/
  "./src/app/admin/users/edit-user/edit-user.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/admin/users/edit-user/edit-user.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUsersEditUserEditUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/users/edit-user/edit-user.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/users/edit-user/edit-user.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditUserComponent */

  /***/
  function srcAppAdminUsersEditUserEditUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
      return EditUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditUserComponent =
    /*#__PURE__*/
    function () {
      function EditUserComponent(dataService, router) {
        _classCallCheck(this, EditUserComponent);

        this.dataService = dataService;
        this.router = router;
        this.nameIsValid = true;
        this.validPassword = true;
        this.dataChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EditUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formUser = Object.assign({}, this.user);
          console.log(this.formUser); //this.checkNameValidation();

          console.log(this.user);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          //console.log(this.formUser);
          if (this.formUser.id == null) {
            this.message = 'Please Wait . . .';
            this.dataService.addUser(this.formUser, this.formPassword).subscribe(function (u) {
              _this7.dataChangeEvent.emit();

              _this7.router.navigate(['admin', 'users'], {
                queryParams: {
                  id: u.id,
                  action: 'view'
                }
              });
            });
          } else {
            this.dataService.updateUser(this.formUser).subscribe(function (u) {
              _this7.dataChangeEvent.emit();

              _this7.router.navigate(['admin', 'users'], {
                queryParams: {
                  id: u.id,
                  action: 'view'
                }
              });
            }, function (error) {
              return _this7.message = 'Something went wrong! Please try after sometime.';
            });
          }
        }
      }, {
        key: "checkNameValidation",
        value: function checkNameValidation() {
          this.nameIsValid = this.formUser.name.trim().length > 0;
        }
      }, {
        key: "isSamePassword",
        value: function isSamePassword() {
          console.log(this.formPassword);
          console.log(this.formCnfPassword);
          this.validPassword = this.formCnfPassword == this.formPassword ? true : false;
        }
      }]);

      return EditUserComponent;
    }();

    EditUserComponent.ctorParameters = function () {
      return [{
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditUserComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditUserComponent.prototype, "dataChangeEvent", void 0);
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/edit-user/edit-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-user.component.css */
      "./src/app/admin/users/edit-user/edit-user.component.css")).default]
    })], EditUserComponent);
    /***/
  },

  /***/
  "./src/app/admin/users/user-detail/user-detail.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/users/user-detail/user-detail.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUsersUserDetailUserDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/users/user-detail/user-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/users/user-detail/user-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserDetailComponent */

  /***/
  function srcAppAdminUsersUserDetailUserDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
      return UserDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");

    var UserDetailComponent =
    /*#__PURE__*/
    function () {
      function UserDetailComponent(router, dataService) {
        _classCallCheck(this, UserDetailComponent);

        this.router = router;
        this.dataService = dataService;
        this.message = '';
        this.deleteUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UserDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editUser",
        value: function editUser(id) {
          this.router.navigate(['admin', 'users'], {
            queryParams: {
              id: id,
              action: 'edit'
            }
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          var _this8 = this;

          this.dataService.deleteUser(this.userToBeShown.id).subscribe(function (user) {
            _this8.deleteUserEvent.emit();

            _this8.router.navigate(['admin', 'users']);
          }, function (error) {
            return _this8.message = 'Something went wrong!!!';
          });
        }
      }, {
        key: "pageNotFound",
        value: function pageNotFound() {
          this.router.navigate(['404']);
        }
      }]);

      return UserDetailComponent;
    }();

    UserDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserDetailComponent.prototype, "userToBeShown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserDetailComponent.prototype, "deleteUserEvent", void 0);
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/user-detail/user-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-detail.component.css */
      "./src/app/admin/users/user-detail/user-detail.component.css")).default]
    })], UserDetailComponent);
    /***/
  },

  /***/
  "./src/app/admin/users/users.component.css":
  /*!*************************************************!*\
    !*** ./src/app/admin/users/users.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/users/users.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/users/users.component.ts ***!
    \************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppAdminUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(dataService, routes, router) {
        _classCallCheck(this, UsersComponent);

        this.dataService = dataService;
        this.routes = routes;
        this.router = router;
        this.newUser = null;
        this.loadingData = true;
        this.message = 'Please wait .. .';
        this.refreshTimer = 0;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUserData();
        }
      }, {
        key: "processAfterLoadingData",
        value: function processAfterLoadingData() {
          var _this9 = this;

          this.routes.queryParams.subscribe(function (params) {
            var id = params['id'];
            var action = params['action'];
            _this9.action = action;

            if (id) {
              //---------------------------------------------------
              _this9.selectedUser = _this9.users.find(function (user) {
                return user.id === +id;
              }); //-----------------------------------------------------
            }
          });
        }
      }, {
        key: "loadUserData",
        value: function loadUserData() {
          var _this10 = this;

          this.dataService.getUsers().subscribe(function (users) {
            _this10.users = users;

            _this10.processAfterLoadingData();

            _this10.loadingData = false;
          }, function (error) {
            _this10.refreshTimer++;

            if (_this10.refreshTimer < 10) {
              _this10.message = 'Sorry! Something went wrong. Connecting again ...  ' + _this10.refreshTimer;

              _this10.loadUserData();
            } else {
              _this10.message = 'Sorry! Please contact the support team.';
            }
          });
        }
      }, {
        key: "selectUser",
        value: function selectUser(id) {
          this.router.navigate(['admin', 'users'], {
            queryParams: {
              id: id,
              action: 'view'
            }
          });
          /*this.selectedUser=this.users.find(
            (user)=>{
               return user.id===id;
            }
          );*/
        }
      }, {
        key: "addUser",
        value: function addUser() {
          this.selectedUser = null;
          this.router.navigate(['admin', 'users'], {
            queryParams: {
              action: 'add'
            }
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/admin/users/users.component.css")).default]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'RoomBookingClient';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _calender_calender_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calender/calender.component */
    "./src/app/calender/calender.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/rooms/rooms.component */
    "./src/app/admin/rooms/rooms.component.ts");
    /* harmony import */


    var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/users/users.component */
    "./src/app/admin/users/users.component.ts");
    /* harmony import */


    var _admin_rooms_room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/rooms/room-detail/room-detail.component */
    "./src/app/admin/rooms/room-detail/room-detail.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _admin_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/users/user-detail/user-detail.component */
    "./src/app/admin/users/user-detail/user-detail.component.ts");
    /* harmony import */


    var _admin_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/users/edit-user/edit-user.component */
    "./src/app/admin/users/edit-user/edit-user.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _admin_rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/rooms/room-edit/room-edit.component */
    "./src/app/admin/rooms/room-edit/room-edit.component.ts");
    /* harmony import */


    var _calender_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./calender/edit-booking/edit-booking.component */
    "./src/app/calender/edit-booking/edit-booking.component.ts");
    /* harmony import */


    var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./bookings/bookings.component */
    "./src/app/bookings/bookings.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pre_fetch_rooms_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pre-fetch-rooms.service */
    "./src/app/pre-fetch-rooms.service.ts");
    /* harmony import */


    var _pre_fetch_users_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pre-fetch-users.service */
    "./src/app/pre-fetch-users.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _auth_router_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./auth-router-guard.service */
    "./src/app/auth-router-guard.service.ts"); //import {HttpClientModule} from '@angular/common';


    var routes = [{
      path: "admin/users",
      component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
      canActivate: [_auth_router_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthRouterGuardService"]]
    }, {
      path: "admin/rooms",
      component: _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__["RoomsComponent"],
      canActivate: [_auth_router_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthRouterGuardService"]]
    }, {
      path: "",
      component: _calender_calender_component__WEBPACK_IMPORTED_MODULE_6__["CalenderComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
    }, {
      path: "bookings/edit",
      component: _calender_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__["EditBookingComponent"],
      resolve: {
        rooms: _pre_fetch_rooms_service__WEBPACK_IMPORTED_MODULE_19__["PreFetchRoomsService"],
        users: _pre_fetch_users_service__WEBPACK_IMPORTED_MODULE_20__["PreFetchUsersService"]
      },
      canActivate: [_auth_router_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthRouterGuardService"]]
    }, {
      path: "bookings/add",
      component: _calender_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__["EditBookingComponent"],
      resolve: {
        rooms: _pre_fetch_rooms_service__WEBPACK_IMPORTED_MODULE_19__["PreFetchRoomsService"],
        users: _pre_fetch_users_service__WEBPACK_IMPORTED_MODULE_20__["PreFetchUsersService"]
      },
      canActivate: [_auth_router_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthRouterGuardService"]]
    }, {
      path: "bookings",
      component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_17__["BookingsComponent"]
    }, {
      path: "404",
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
    }, {
      path: "**",
      redirectTo: '/404'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _calender_calender_component__WEBPACK_IMPORTED_MODULE_6__["CalenderComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_8__["RoomsComponent"], _admin_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], _admin_rooms_room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_10__["RoomDetailComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], _admin_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"], _admin_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_13__["EditUserComponent"], _admin_rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_15__["RoomEditComponent"], _calender_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__["EditBookingComponent"], _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_17__["BookingsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
      providers: [_pre_fetch_rooms_service__WEBPACK_IMPORTED_MODULE_19__["PreFetchRoomsService"], _pre_fetch_users_service__WEBPACK_IMPORTED_MODULE_20__["PreFetchUsersService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-router-guard.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth-router-guard.service.ts ***!
    \**********************************************/

  /*! exports provided: AuthRouterGuardService */

  /***/
  function srcAppAuthRouterGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRouterGuardService", function () {
      return AuthRouterGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-service.service */
    "./src/app/auth-service.service.ts");

    var AuthRouterGuardService =
    /*#__PURE__*/
    function () {
      function AuthRouterGuardService(authService, router) {
        _classCallCheck(this, AuthRouterGuardService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthRouterGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this.authService.isAuthenticated) this.router.navigate(['/login'], {
            queryParams: {
              requested: state.url
            }
          });
          return this.authService.isAuthenticated;
        }
      }]);

      return AuthRouterGuardService;
    }();

    AuthRouterGuardService.ctorParameters = function () {
      return [{
        type: _auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthRouterGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthRouterGuardService);
    /***/
  },

  /***/
  "./src/app/auth-service.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/auth-service.service.ts ***!
    \*****************************************/

  /*! exports provided: AuthServiceService */

  /***/
  function srcAppAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServiceService", function () {
      return AuthServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthServiceService =
    /*#__PURE__*/
    function () {
      function AuthServiceService() {
        _classCallCheck(this, AuthServiceService);

        this.isAuthenticated = false;
      }

      _createClass(AuthServiceService, [{
        key: "authenticate",
        value: function authenticate(name, password) {
          if (name === 'matt' && password === 'secret') this.isAuthenticated = true;
          return this.isAuthenticated;
        }
      }]);

      return AuthServiceService;
    }();

    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthServiceService);
    /***/
  },

  /***/
  "./src/app/bookings/bookings.component.css":
  /*!*************************************************!*\
    !*** ./src/app/bookings/bookings.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingsBookingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/bookings/bookings.component.ts":
  /*!************************************************!*\
    !*** ./src/app/bookings/bookings.component.ts ***!
    \************************************************/

  /*! exports provided: BookingsComponent */

  /***/
  function srcAppBookingsBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsComponent", function () {
      return BookingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data-service.service */
    "./src/app/data-service.service.ts");

    var BookingsComponent =
    /*#__PURE__*/
    function () {
      function BookingsComponent(dataService) {
        _classCallCheck(this, BookingsComponent);

        this.dataService = dataService;
      }

      _createClass(BookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*this.dataService.getBookings().subscribe(
            book=>{this.bookings=book;}
          );*/
        }
      }]);

      return BookingsComponent;
    }();

    BookingsComponent.ctorParameters = function () {
      return [{
        type: _data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]
      }];
    };

    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.component.css */
      "./src/app/bookings/bookings.component.css")).default]
    })], BookingsComponent);
    /***/
  },

  /***/
  "./src/app/calender/calender.component.css":
  /*!*************************************************!*\
    !*** ./src/app/calender/calender.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalenderCalenderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/calender/calender.component.ts":
  /*!************************************************!*\
    !*** ./src/app/calender/calender.component.ts ***!
    \************************************************/

  /*! exports provided: CalenderComponent */

  /***/
  function srcAppCalenderCalenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalenderComponent", function () {
      return CalenderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data-service.service */
    "./src/app/data-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CalenderComponent =
    /*#__PURE__*/
    function () {
      function CalenderComponent(dataService, router) {
        _classCallCheck(this, CalenderComponent);

        this.dataService = dataService;
        this.router = router;
        this.dataLoaded = false;
      }

      _createClass(CalenderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-UK');
          this.setDate();
          /*this.dataService.getBookings().subscribe(
             bookings=>{this.bookings=bookings;}
          );*/
        }
      }, {
        key: "editBooking",
        value: function editBooking(id) {
          this.router.navigate(['bookings', 'edit'], {
            queryParams: {
              id: id
            }
          });
        }
      }, {
        key: "addBooking",
        value: function addBooking() {
          this.router.navigate(['bookings', 'add']);
        }
      }, {
        key: "cancelBooking",
        value: function cancelBooking(id) {
          var _this11 = this;

          console.log(id);
          var result = confirm("Are you sure! You want to delete the booking?");

          if (result) {
            this.dataService.cancelBooking(id).subscribe(function (data) {
              _this11.setDate();
            });
          }
        }
      }, {
        key: "setDate",
        value: function setDate() {
          var _this12 = this;

          console.log(this.selectedDate);
          this.dataService.filterBookingsByDate(this.selectedDate).subscribe(function (data) {
            _this12.dataLoaded = true, _this12.bookings = data, _this12.router.navigate(['']);
          });
        }
      }]);

      return CalenderComponent;
    }();

    CalenderComponent.ctorParameters = function () {
      return [{
        type: _data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CalenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calender.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calender.component.css */
      "./src/app/calender/calender.component.css")).default]
    })], CalenderComponent);
    /***/
  },

  /***/
  "./src/app/calender/edit-booking/edit-booking.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/calender/edit-booking/edit-booking.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalenderEditBookingEditBookingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGVyL2VkaXQtYm9va2luZy9lZGl0LWJvb2tpbmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/calender/edit-booking/edit-booking.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/calender/edit-booking/edit-booking.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EditBookingComponent */

  /***/
  function srcAppCalenderEditBookingEditBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBookingComponent", function () {
      return EditBookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Booking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Booking */
    "./src/app/models/Booking.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/data-service.service */
    "./src/app/data-service.service.ts");
    /* harmony import */


    var src_app_models_Room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/Room */
    "./src/app/models/Room.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EditBookingComponent =
    /*#__PURE__*/
    function () {
      function EditBookingComponent(routes, dataService, router) {
        _classCallCheck(this, EditBookingComponent);

        this.routes = routes;
        this.dataService = dataService;
        this.router = router;
        this.layouts = Object.keys(src_app_models_Room__WEBPACK_IMPORTED_MODULE_5__["Layout"]);
        this.layoutEnum = src_app_models_Room__WEBPACK_IMPORTED_MODULE_5__["Layout"];
        this.dataLoaded = false;
        this.message = 'Please Wait....';
      }

      _createClass(EditBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          /*this.dataService.getBookings().subscribe(
            book=>{this.bookingArray=book}
          );*/
          this.rooms = this.routes.snapshot.data['rooms'];
          this.users = this.routes.snapshot.data['users'];
          var id = this.routes.snapshot.queryParams['id'];
          console.log("edit ID:" + id);

          if (id) {
            this.dataLoaded = true;
            this.dataService.getBooking(+id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (booking) {
              booking.room = _this13.rooms.find(function (room) {
                return booking.room.id === room.id;
              });
              booking.user = _this13.users.find(function (user) {
                return booking.user.id === user.id;
              });
              return booking;
            })).subscribe(function (next) {
              _this13.booking = next;
              _this13.dataLoaded = true;
              _this13.message = ' ';
            });
          } else {
            this.booking = new src_app_models_Booking__WEBPACK_IMPORTED_MODULE_2__["Booking"]();
            this.dataLoaded = true;
            this.message = ' ';
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          if (this.booking.id) {
            this.dataService.updateBooking(this.booking).subscribe(function (book) {
              _this14.router.navigate(['']);
            });
          } else {
            this.dataService.addBooking(this.booking).subscribe(function (newBook) {
              _this14.router.navigate(['']);
            });
          }
        }
      }]);

      return EditBookingComponent;
    }();

    EditBookingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/edit-booking/edit-booking.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-booking.component.css */
      "./src/app/calender/edit-booking/edit-booking.component.css")).default]
    })], EditBookingComponent);
    /***/
  },

  /***/
  "./src/app/data-service.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/data-service.service.ts ***!
    \*****************************************/

  /*! exports provided: DataServiceService */

  /***/
  function srcAppDataServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataServiceService", function () {
      return DataServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/Room */
    "./src/app/models/Room.ts");
    /* harmony import */


    var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/User */
    "./src/app/models/User.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_Booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./models/Booking */
    "./src/app/models/Booking.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DataServiceService =
    /*#__PURE__*/
    function () {
      function DataServiceService(http) {
        _classCallCheck(this, DataServiceService);

        this.http = http;
      }

      _createClass(DataServiceService, [{
        key: "getRooms",
        value: function getRooms() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/rooms").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            var roomArray = new Array();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var r = _step3.value;
                roomArray.push(_models_Room__WEBPACK_IMPORTED_MODULE_2__["Room"].fromHttp(r));
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return roomArray;
          }));
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/users").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            return _models_User__WEBPACK_IMPORTED_MODULE_3__["User"].arrayFromHttp(data);
          }));
        }
      }, {
        key: "getBooking",
        value: function getBooking(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api?id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            return _models_Booking__WEBPACK_IMPORTED_MODULE_5__["Booking"].fromHttp(data);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          console.log(user);
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/user", user);
        }
      }, {
        key: "addUser",
        value: function addUser(newAngularUser, pass) {
          var newSpringUser = {
            id: newAngularUser.id,
            name: newAngularUser.name,
            password: pass
          };
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + '/api/user', newSpringUser);
        }
      }, {
        key: "updateRoom",
        value: function updateRoom(room) {
          var correctRoom = {
            id: room.id,
            name: room.name,
            location: room.location,
            capacities: []
          };
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = room.capacities[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var lc = _step4.value;
              var correctLayout = void 0;

              for (var member in _models_Room__WEBPACK_IMPORTED_MODULE_2__["Layout"]) {
                if (_models_Room__WEBPACK_IMPORTED_MODULE_2__["Layout"][member] === lc.layout) correctLayout = member;
              }

              var correctedLayout = {
                layout: correctLayout,
                capacity: lc.capacity
              };
              correctRoom.capacities.push(correctedLayout);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/room", correctRoom);
        }
      }, {
        key: "addRoom",
        value: function addRoom(room) {
          var correctedRoomToBeSend = {
            id: room.id,
            name: room.name,
            location: room.location,
            capacities: []
          };
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = room.capacities[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var lc = _step5.value;
              var correctLayout = void 0;

              for (var member in _models_Room__WEBPACK_IMPORTED_MODULE_2__["Layout"]) {
                if (lc.layout === _models_Room__WEBPACK_IMPORTED_MODULE_2__["Layout"][member]) correctLayout = member;
              }

              var correctedLayoutCapacity = {
                layout: correctLayout,
                capacity: lc.capacity
              };
              correctedRoomToBeSend.capacities.push(correctedLayoutCapacity);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/room", correctedRoomToBeSend);
        }
      }, {
        key: "deleteRoom",
        value: function deleteRoom(id) {
          return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/deleteRoom/" + id);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/deleteUser/" + id);
        }
      }, {
        key: "updateBooking",
        value: function updateBooking(newBooking) {
          var correctBooking = {
            id: newBooking.id,
            room: newBooking.room,
            user: newBooking.user,
            layout: newBooking.layout,
            title: newBooking.title,
            date: Date.parse(newBooking.date),
            startTime: newBooking.startTime,
            endTime: newBooking.endTime,
            participants: newBooking.participants
          };
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/updateBooking", correctBooking);
        }
      }, {
        key: "addBooking",
        value: function addBooking(newBooking) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }
      }, {
        key: "cancelBooking",
        value: function cancelBooking(id) {
          return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/deleteBooking/" + id);
        }
      }, {
        key: "filterBookingsByDate",
        value: function filterBookingsByDate(selectedDate) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/booking/" + selectedDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            var bookings = new Array();
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var booking = _step6.value;
                bookings.push(_models_Booking__WEBPACK_IMPORTED_MODULE_5__["Booking"].fromHttp(booking));
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }

            return bookings;
          }));
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].restUrl + "/api/user/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) {
            return _models_User__WEBPACK_IMPORTED_MODULE_3__["User"].fromHttp(data);
          }));
        }
      }]);

      return DataServiceService;
    }();

    DataServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataServiceService);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-service.service */
    "./src/app/auth-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, activatedRouter, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.message = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.authService.authenticate(this.name, this.password)) {
            //navigate
            var url = this.activatedRouter.snapshot.queryParams['requested'];
            this.router.navigateByUrl(url);
          } else {
            this.message = 'Incorrect username or password~!';
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToUsers",
        value: function navigateToUsers() {
          this.router.navigate(['admin', 'users']);
        }
      }, {
        key: "navigateToRooms",
        value: function navigateToRooms() {
          this.router.navigate(['admin', 'rooms']);
        }
      }, {
        key: "navigateToHome",
        value: function navigateToHome() {
          this.router.navigate(['']);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/models/Booking.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Booking.ts ***!
    \***********************************/

  /*! exports provided: Booking */

  /***/
  function srcAppModelsBookingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Booking", function () {
      return Booking;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Room */
    "./src/app/models/Room.ts");
    /* harmony import */


    var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./User */
    "./src/app/models/User.ts");

    var Booking =
    /*#__PURE__*/
    function () {
      function Booking() {
        _classCallCheck(this, Booking);
      }

      _createClass(Booking, [{
        key: "getDateAsDate",
        value: function getDateAsDate() {
          return new Date(this.date);
        }
      }], [{
        key: "fromHttp",
        value: function fromHttp(booking) {
          var b1 = new Booking();
          b1.id = booking.id;
          b1.room = _Room__WEBPACK_IMPORTED_MODULE_1__["Room"].fromHttp(booking.room);
          b1.user = _User__WEBPACK_IMPORTED_MODULE_2__["User"].fromHttp(booking.user);
          b1.layout = booking.layout;
          b1.title = booking.title;
          b1.date = booking.date;
          b1.startTime = booking.startTime;
          b1.endTime = booking.endTime;
          b1.participants = booking.participants;
          return b1;
        }
      }]);

      return Booking;
    }();
    /***/

  },

  /***/
  "./src/app/models/Room.ts":
  /*!********************************!*\
    !*** ./src/app/models/Room.ts ***!
    \********************************/

  /*! exports provided: Room, LayoutCapacity, Layout */

  /***/
  function srcAppModelsRoomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Room", function () {
      return Room;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutCapacity", function () {
      return LayoutCapacity;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layout", function () {
      return Layout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Room =
    /*#__PURE__*/
    function () {
      function Room() {
        _classCallCheck(this, Room);

        this.capacities = new Array();
      }

      _createClass(Room, null, [{
        key: "fromHttp",
        value: function fromHttp(room) {
          var newRoom = new Room();
          newRoom.id = room.id;
          newRoom.name = room.name;
          newRoom.location = room.location;
          newRoom.capacities = room.capacities;
          return newRoom;
        }
      }]);

      return Room;
    }();

    var LayoutCapacity = function LayoutCapacity() {
      _classCallCheck(this, LayoutCapacity);
    };

    var Layout;

    (function (Layout) {
      Layout["THEATER"] = "Theater";
      Layout["USHAPE"] = "U-Shape";
      Layout["BOARD"] = "Board Meeting";
    })(Layout || (Layout = {}));
    /***/

  },

  /***/
  "./src/app/models/User.ts":
  /*!********************************!*\
    !*** ./src/app/models/User.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User() {
        _classCallCheck(this, User);
      }

      _createClass(User, [{
        key: "getRole",
        value: function getRole() {
          return "Managaer";
        }
      }], [{
        key: "fromHttp",
        value: function fromHttp(user) {
          var u = new User();
          u.id = user.id;
          u.name = user.name;
          return u;
        }
      }, {
        key: "arrayFromHttp",
        value: function arrayFromHttp(user) {
          var userArray = new Array();
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = user[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var u = _step7.value;
              userArray.push(this.fromHttp(u));
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          return userArray;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/pre-fetch-rooms.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pre-fetch-rooms.service.ts ***!
    \********************************************/

  /*! exports provided: PreFetchRoomsService */

  /***/
  function srcAppPreFetchRoomsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreFetchRoomsService", function () {
      return PreFetchRoomsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-service.service */
    "./src/app/data-service.service.ts");

    var PreFetchRoomsService =
    /*#__PURE__*/
    function () {
      function PreFetchRoomsService(dataService) {
        _classCallCheck(this, PreFetchRoomsService);

        this.dataService = dataService;
      }

      _createClass(PreFetchRoomsService, [{
        key: "resolve",
        value: function resolve() {
          return this.dataService.getRooms();
        }
      }]);

      return PreFetchRoomsService;
    }();

    PreFetchRoomsService.ctorParameters = function () {
      return [{
        type: _data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]
      }];
    };

    PreFetchRoomsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PreFetchRoomsService);
    /***/
  },

  /***/
  "./src/app/pre-fetch-users.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pre-fetch-users.service.ts ***!
    \********************************************/

  /*! exports provided: PreFetchUsersService */

  /***/
  function srcAppPreFetchUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreFetchUsersService", function () {
      return PreFetchUsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-service.service */
    "./src/app/data-service.service.ts");

    var PreFetchUsersService =
    /*#__PURE__*/
    function () {
      function PreFetchUsersService(dataService) {
        _classCallCheck(this, PreFetchUsersService);

        this.dataService = dataService;
      }

      _createClass(PreFetchUsersService, [{
        key: "resolve",
        value: function resolve() {
          return this.dataService.getUsers();
        }
      }]);

      return PreFetchUsersService;
    }();

    PreFetchUsersService.ctorParameters = function () {
      return [{
        type: _data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]
      }];
    };

    PreFetchUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PreFetchUsersService);
    /***/
  },

  /***/
  "./src/app/reset-form.service.ts":
  /*!***************************************!*\
    !*** ./src/app/reset-form.service.ts ***!
    \***************************************/

  /*! exports provided: ResetFormService */

  /***/
  function srcAppResetFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetFormService", function () {
      return ResetFormService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResetFormService =
    /*#__PURE__*/
    function () {
      function ResetFormService() {
        _classCallCheck(this, ResetFormService);

        this.resetRoomEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ResetFormService, [{
        key: "resetRoomForm",
        value: function resetRoomForm() {}
      }]);

      return ResetFormService;
    }();

    ResetFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ResetFormService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //restUrl:'http://localhost:8080'
      restUrl: 'https://room-booking-spring-api.herokuapp.com'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Udemy Angular8\RoomBookingClient (Module 3)\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map