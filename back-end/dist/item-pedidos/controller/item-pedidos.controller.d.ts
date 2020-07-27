import { ItemPedidoServices } from '../provider/item-pedido.services';
export declare class ItemPedidosController {
    private itemPedidoServices;
    constructor(itemPedidoServices: ItemPedidoServices);
    private jsonToEntity;
    getAll(): Promise<any>;
    getByOrder(order: number): Promise<any>;
    create(item: JSON): Promise<any>;
    update(id: number, item: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
