import { PedidosServices } from '../../provider/pedidos.services';
import { ItemPedidoServices } from 'src/item-pedidos/provider/item-pedido.services';
import { ClienteServices } from 'src/clientes/provider/cliente.services';
export declare class PedidosController {
    private pedidoService;
    private itemPedido;
    private clientes;
    constructor(pedidoService: PedidosServices, itemPedido: ItemPedidoServices, clientes: ClienteServices);
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(pede: JSON): Promise<any>;
    update(id: number, pede: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
