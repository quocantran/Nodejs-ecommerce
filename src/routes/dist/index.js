"use strict";
exports.__esModule = true;
var express_1 = require("express");
var access_1 = require("./access");
var checkAuth_1 = require("../auth/checkAuth");
var product_1 = require("./product");
var cart_1 = require("./cart");
var checkout_1 = require("./checkout");
var inventory_1 = require("./inventory");
var router = express_1["default"].Router();
//check apikey
router.use(checkAuth_1.apiKey);
//check permission
router.use(checkAuth_1.checkPermission("0000"));
router.use("/api/v1/inventory", inventory_1["default"]);
router.use("/api/v1/checkout", checkout_1["default"]);
router.use("/api/v1/product", product_1["default"]);
router.use("/api/v1/auth", access_1["default"]);
router.use("/api/v1/cart", cart_1["default"]);
exports["default"] = router;
