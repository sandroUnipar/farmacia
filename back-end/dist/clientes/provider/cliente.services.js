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
exports.ClienteServices = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let ClienteServices = (() => {
    let ClienteServices = class ClienteServices {
        constructor(knex) {
            this.knex = knex;
        }
        async buildOnce() {
            if (!(await this.knex.schema.hasTable('clientes'))) {
                await this.knex.schema.createTable('clientes', table => {
                    table.increments('id').primary();
                    table.string('name');
                    table.string('cpf');
                    table.string('rg');
                    table.string('cep');
                    table.string('address');
                });
                return true;
            }
            else {
                return false;
            }
        }
        async getAll() {
            await this.buildOnce();
            const cliente = await this.knex.table('clientes');
            return cliente;
        }
        async getById(id) {
            await this.buildOnce();
            const cliente = await this.knex.table('clientes').where('id', id);
            return cliente;
        }
        async create(client) {
            await this.buildOnce();
            const cliente = await this.knex.table('clientes').insert(client);
            return cliente;
        }
        async update(id, client) {
            await this.buildOnce();
            const cliente = await this.knex
                .table('clientes')
                .update(client)
                .where('id', id);
            return cliente;
        }
        async delete(id) {
            await this.buildOnce();
            await this.knex
                .table('clientes')
                .where('id', id)
                .del();
        }
    };
    ClienteServices = __decorate([
        common_1.Injectable(),
        __param(0, nestjs_knex_1.InjectKnex()),
        __metadata("design:paramtypes", [Object])
    ], ClienteServices);
    return ClienteServices;
})();
exports.ClienteServices = ClienteServices;
//# sourceMappingURL=cliente.services.js.map