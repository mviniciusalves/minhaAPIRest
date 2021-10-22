"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("./products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// separar e administrar as rotas do app
const router = _express.default.Router(); // middleware para lidar com rotas


router.get('/', (req, res) => {
  res.send('Aplicação online');
});
router.use('/products', _products.default);
var _default = router; // exportando o Router

exports.default = _default;