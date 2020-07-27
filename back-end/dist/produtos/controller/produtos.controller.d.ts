import { ProdutoServices } from '../provider/produto.services';
export declare class ProdutosController {
    private produtoServices;
    constructor(produtoServices: ProdutoServices);
    private jsonToEntity;
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(pede: JSON): Promise<any>;
    update(id: number, pede: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
