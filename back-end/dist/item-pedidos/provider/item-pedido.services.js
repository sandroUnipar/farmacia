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
exports.ItemPedidoServices = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
const produto_services_1 = require("../../produtos/provider/produto.services");
let ItemPedidoServices = (() => {
    let ItemPedidoServices = class ItemPedidoServices {
        constructor(knex, produtos) {
            this.knex = knex;
            this.produtos = produtos;
        }
        async buildOnce() {
            if (!(await this.knex.schema.hasTable('itemPedidos'))) {
                await this.knex.schema.createTable('itemPedidos', table => {
                    table.increments('id').primary();
                    table.integer('product');
                    table.integer('order');
                    table.integer('quantity');
                    table.decimal('unitValue');
                    table.decimal('totalValue');
                });
                return true;
            }
            else {
                return false;
            }
        }
        async getAll() {
            await this.buildOnce();
            const itemPedido = await this.knex.table('itemPedidos');
            return itemPedido;
        }
        async getByOrder(order) {
            await this.buildOnce();
            let itemPedido = await this.knex.table('itemPedidos').where('order', order);
            itemPedido = await Promise.all(itemPedido.map(async (elem) => {
                let produto = await this.produtos.getById(elem.product);
                try {
                    elem['productName'] = produto[0].name;
                }
                catch (e) {
                    elem['productName'] = 'Cliente desconhecido';
                }
                console.log(produto);
                return elem;
            }));
            return itemPedido;
        }
        async create(item) {
            await this.buildOnce();
            const itemPedido = await this.knex.table('itemPedidos').insert(item);
            return itemPedido;
        }
        async update(id, item) {
            await this.buildOnce();
            const itemPedido = await this.knex
                .table('itemPedidos')
                .update(item)
                .where('id', id);
            return itemPedido;
        }
        async delete(id) {
            await this.buildOnce();
            await this.knex
                .table('itemPedidos')
                .where('id', id)
                .del();
        }
        async deleteByOrder(order) {
            await this.buildOnce();
            await this.knex
                .table('itemPedidos')
                .where('order', order)
                .del();
        }
    };
    ItemPedidoServices = __decorate([
        common_1.Injectable(),
        __param(0, nestjs_knex_1.InjectKnex()),
        __metadata("design:paramtypes", [Object, produto_services_1.ProdutoServices])
    ], ItemPedidoServices);
    return ItemPedidoServices;
})();
exports.ItemPedidoServices = ItemPedidoServices;
//# sourceMappingURL=item-pedido.services.js.map