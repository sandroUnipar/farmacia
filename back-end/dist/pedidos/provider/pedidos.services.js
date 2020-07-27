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
exports.PedidosServices = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let PedidosServices = (() => {
    let PedidosServices = class PedidosServices {
        constructor(knex) {
            this.knex = knex;
        }
        async buildOnce() {
            if (!(await this.knex.schema.hasTable('pedidos'))) {
                await this.knex.schema.createTable('pedidos', table => {
                    table.increments('id').primary();
                    table.integer('orderNumber');
                    table.date('orderDate');
                    table.decimal('total');
                    table.integer('customer');
                });
                return true;
            }
            else {
                return false;
            }
        }
        async getAll() {
            await this.buildOnce();
            const pedido = await this.knex.table('pedidos');
            return pedido;
        }
        async getById(id) {
            await this.buildOnce();
            const pedido = await this.knex.table('pedidos').where('id', id);
            return pedido;
        }
        async create(pede) {
            await this.buildOnce();
            const pedido = await this.knex.table('pedidos').insert(pede);
            return pedido;
        }
        async update(id, pede) {
            await this.buildOnce();
            const pedido = await this.knex
                .table('pedidos')
                .update(pede)
                .where('id', id);
            return pedido;
        }
        async delete(id) {
            await this.buildOnce();
            await this.knex
                .table('pedidos')
                .where('id', id)
                .del();
        }
    };
    PedidosServices = __decorate([
        common_1.Injectable(),
        __param(0, nestjs_knex_1.InjectKnex()),
        __metadata("design:paramtypes", [Object])
    ], PedidosServices);
    return PedidosServices;
})();
exports.PedidosServices = PedidosServices;
//# sourceMappingURL=pedidos.services.js.map