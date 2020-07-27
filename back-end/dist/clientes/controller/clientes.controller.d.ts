import { ClienteServices } from '../provider/cliente.services';
export declare class ClientesController {
    private clienteService;
    constructor(clienteService: ClienteServices);
    private jsonToEntity;
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(client: JSON): Promise<any>;
    update(id: number, client: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
