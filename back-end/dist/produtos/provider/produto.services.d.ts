export declare class ProdutoServices {
    private readonly knex;
    constructor(knex: any);
    buildOnce(): Promise<boolean>;
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(prod: JSON): Promise<any>;
    update(id: number, prod: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
