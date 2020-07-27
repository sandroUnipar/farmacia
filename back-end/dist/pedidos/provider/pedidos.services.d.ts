export declare class PedidosServices {
    private readonly knex;
    constructor(knex: any);
    buildOnce(): Promise<boolean>;
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(pede: JSON): Promise<any>;
    update(id: number, pede: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
