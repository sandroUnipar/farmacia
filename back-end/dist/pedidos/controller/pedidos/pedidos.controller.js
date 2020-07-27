"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosController = void 0;
const common_1 = require("@nestjs/common");
const pedidos_services_1 = require("../../provider/pedidos.services");
const item_pedido_services_1 = require("../../../item-pedidos/provider/item-pedido.services");
const cliente_services_1 = require("../../../clientes/provider/cliente.services");
let PedidosController = (() => {
    let PedidosController = class PedidosController {
        constructor(pedidoService, itemPedido, clientes) {
            this.pedidoService = pedidoService;
            this.itemPedido = itemPedido;
            this.clientes = clientes;
        }
        async getAll() {
            let pedido = await this.pedidoService.getAll();
            pedido = await Promise.all(pedido.map(async (elem) => {
                let itens = await this.itemPedido.getByOrder(elem.id);
                elem["itens"] = itens;
                let cliente = await this.clientes.getById(elem.customer);
                try {
                    elem["customerName"] = cliente[0].name;
                }
                catch (e) {
                    elem["customerName"] = "Cliente desconhecido";
                    console.log(cliente);
                }
                return elem;
            }));
            console.log(pedido);
            return pedido;
        }
        async getById(id) {
            let pedido = await this.pedidoService.getById(id);
            console.log("aqui1");
            pedido = await Promise.all(pedido.map(async (elem) => {
                let itens = await this.itemPedido.getByOrder(elem.id);
                elem["itens"] = itens;
                let cliente = await this.clientes.getById(elem.customer);
                try {
                    elem["customerName"] = cliente[0].name;
                }
                catch (e) {
                    elem["customerName"] = "Cliente desconhecido";
                    console.log(cliente);
                }
                return elem;
            }));
            return pedido;
        }
        async create(pede) {
            console.log(pede);
            let itens = pede["itens"];
            delete pede["itens"];
            const pedido = await this.pedidoService.create(pede);
            itens.map(elem => {
                elem.order = pedido[0];
                this.itemPedido.create(elem);
                return elem;
            });
            return pedido;
        }
        async update(id, pede) {
            let itens = pede["itens"];
            delete pede["itens"];
            let pedido = await this.pedidoService.update(id, pede);
            itens.map(elem => {
                const id = elem.id;
                this.itemPedido.update(id, elem);
            });
            return pedido;
        }
        async delete(id) {
            await this.itemPedido.deleteByOrder(id);
            await this.pedidoService.delete(id);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PedidosController.prototype, "getAll", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PedidosController.prototype, "getById", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PedidosController.prototype, "create", null);
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], PedidosController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PedidosController.prototype, "delete", null);
    PedidosController = __decorate([
        common_1.Controller('pedidos'),
        __metadata("design:paramtypes", [pedidos_services_1.PedidosServices, item_pedido_services_1.ItemPedidoServices, cliente_services_1.ClienteServices])
    ], PedidosController);
    return PedidosController;
})();
exports.PedidosController = PedidosController;
//# sourceMappingURL=pedidos.controller.js.map