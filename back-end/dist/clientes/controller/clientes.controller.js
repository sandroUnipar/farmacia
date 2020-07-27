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
exports.ClientesController = void 0;
const common_1 = require("@nestjs/common");
const cliente_services_1 = require("../provider/cliente.services");
const clientes_1 = require("../clientes");
let ClientesController = (() => {
    let ClientesController = class ClientesController {
        constructor(clienteService) {
            this.clienteService = clienteService;
        }
        async jsonToEntity(json) {
            const entity = json.map(element => {
                const cliente = new clientes_1.Clientes();
                cliente.address = element.address;
                cliente.cpf = element.cpf;
                cliente.rg = element.rg;
                cliente.cep = element.cep;
                cliente.id = element.id;
                cliente.name = element.name;
                return cliente;
            });
            return entity;
        }
        async getAll() {
            let cliente = await this.clienteService.getAll();
            ;
            return cliente;
        }
        async getById(id) {
            let cliente = await this.clienteService.getById(id);
            return cliente;
        }
        async create(client) {
            const cliente = await this.clienteService.create(client);
            return cliente;
        }
        async update(id, client) {
            const cliente = await this.clienteService.update(id, client);
            return cliente;
        }
        async delete(id) {
            await this.clienteService.delete(id);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ClientesController.prototype, "getAll", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ClientesController.prototype, "getById", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ClientesController.prototype, "create", null);
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], ClientesController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ClientesController.prototype, "delete", null);
    ClientesController = __decorate([
        common_1.Controller('clientes'),
        __metadata("design:paramtypes", [cliente_services_1.ClienteServices])
    ], ClientesController);
    return ClientesController;
})();
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map