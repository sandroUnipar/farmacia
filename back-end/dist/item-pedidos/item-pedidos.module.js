"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedidosModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const item_pedidos_controller_1 = require("./controller/item-pedidos.controller");
const item_pedido_services_1 = require("./provider/item-pedido.services");
const produto_services_1 = require("../produtos/provider/produto.services");
let ItemPedidosModule = (() => {
    let ItemPedidosModule = class ItemPedidosModule {
    };
    ItemPedidosModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule],
            controllers: [item_pedidos_controller_1.ItemPedidosController],
            providers: [item_pedido_services_1.ItemPedidoServices, produto_services_1.ProdutoServices]
        })
    ], ItemPedidosModule);
    return ItemPedidosModule;
})();
exports.ItemPedidosModule = ItemPedidosModule;
//# sourceMappingURL=item-pedidos.module.js.map