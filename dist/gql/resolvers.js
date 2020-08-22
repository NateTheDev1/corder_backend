"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var products = require("../../database/Models/Product");
var nutritiondb = require("../../database/Models/Nutrition");
var userdb = require("../../database/Models/User");
var ordersdb = require("../../database/Models/Order");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config();
var resolvers = {
    Query: {
        products: function () { return __awaiter(void 0, void 0, void 0, function () {
            var productsData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, products.query()];
                    case 1:
                        productsData = _a.sent();
                        return [2 /*return*/, productsData];
                }
            });
        }); },
        product: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var productData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, products.query().findById(id)];
                        case 1:
                            productData = _b.sent();
                            return [2 /*return*/, productData];
                    }
                });
            });
        },
        user: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var user;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, userdb.query().findById(id)];
                        case 1:
                            user = _b.sent();
                            console.log(user);
                            return [2 /*return*/, user];
                    }
                });
            });
        },
    },
    Mutation: {
        addUser: function (_, _a) {
            var username = _a.username, password = _a.password;
            return __awaiter(void 0, void 0, void 0, function () {
                var usercheck, salt, hash, newUser, payload, token;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, userdb.query().where({ username: username })];
                        case 1:
                            usercheck = _b.sent();
                            console.log(usercheck);
                            if (usercheck.length > 0) {
                                throw new Error("Username already exists");
                            }
                            return [4 /*yield*/, bcrypt.genSaltSync(10)];
                        case 2:
                            salt = _b.sent();
                            return [4 /*yield*/, bcrypt.hashSync(password, salt)];
                        case 3:
                            hash = _b.sent();
                            if (!(usercheck <= 0)) return [3 /*break*/, 6];
                            return [4 /*yield*/, userdb
                                    .query()
                                    .insert({ username: username, password: hash })];
                        case 4:
                            newUser = _b.sent();
                            payload = {
                                id: newUser.id,
                            };
                            return [4 /*yield*/, jwt.sign(payload, process.env.JWT_SECRET)];
                        case 5:
                            token = _b.sent();
                            return [2 /*return*/, __assign(__assign({}, newUser), { token: token })];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        login: function (_, _a) {
            var username = _a.username, password = _a.password;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, verified, payload, token;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, userdb.query().where({ username: username })];
                        case 1:
                            user = _b.sent();
                            if (user.length <= 0) {
                                throw new Error("Password or username incorrect.");
                            }
                            return [4 /*yield*/, bcrypt.compareSync(password, user[0].password)];
                        case 2:
                            verified = _b.sent();
                            if (!verified) {
                                throw new Error("Password or username incorrect.");
                            }
                            payload = {
                                id: user.id,
                            };
                            return [4 /*yield*/, jwt.sign(payload, process.env.JWT_SECRET)];
                        case 3:
                            token = _b.sent();
                            console.log(user[0]);
                            return [2 /*return*/, __assign(__assign({}, user[0]), { token: token })];
                    }
                });
            });
        },
    },
    Product: {
        nutrition: function (parent) { return __awaiter(void 0, void 0, void 0, function () {
            var nutritionData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nutritiondb
                            .query()
                            .select("*")
                            .where("product_id", "=", parent.id)
                            .first()];
                    case 1:
                        nutritionData = _a.sent();
                        console.log(nutritionData);
                        return [2 /*return*/, nutritionData];
                }
            });
        }); },
    },
    User: {
        orders: function (parent) { return __awaiter(void 0, void 0, void 0, function () {
            var orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ordersdb
                            .query()
                            .where("customer_id", "=", parent.id)];
                    case 1:
                        orders = _a.sent();
                        return [2 /*return*/, orders];
                }
            });
        }); },
    },
};
module.exports = { resolvers: resolvers };
