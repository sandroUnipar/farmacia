"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosModule = void 0;
const common_1 = require("@nestjs/common");
const pedidos_services_1 = require("./provider/pedidos.services");
const database_module_1 = require("../database/database.module");
const item_pedido_services_1 = require("../item-pedidos/provider/item-pedido.services");
const cliente_services_1 = require("../clientes/provider/cliente.services");
const pedidos_controller_1 = require("./controller/pedidos/pedidos.controller");
const produto_services_1 = require("../produtos/provider/produto.services");
let PedidosModule = (() => {
    let PedidosModule = class PedidosModule {
    };
    PedidosModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule],
            providers: [pedidos_services_1.PedidosServices, item_pedido_services_1.ItemPedidoServices, cliente_services_1.ClienteServices, produto_services_1.ProdutoServices],
            controllers: [pedidos_controller_1.PedidosController]
        })
    ], PedidosModule);
    return PedidosModule;
})();
exports.PedidosModule = PedidosModule;
//# sourceMappingURL=pedidos.module.js.map