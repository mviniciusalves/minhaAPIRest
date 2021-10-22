"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ProductsController {
  get(req, res) {
    return res.send('Produto de teste');
  }

}

var _default = ProductsController;
exports.default = _default;