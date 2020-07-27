import { ProdutoServices } from 'src/produtos/provider/produto.services';
export declare class ItemPedidoServices {
    private readonly knex;
    private produtos;
    constructor(knex: any, produtos: ProdutoServices);
    buildOnce(): Promise<boolean>;
    getAll(): Promise<any>;
    getByOrder(order: number): Promise<any>;
    create(item: JSON): Promise<any>;
    update(id: number, item: JSON): Promise<any>;
    delete(id: number): Promise<void>;
    deleteByOrder(order: number): Promise<void>;
}
