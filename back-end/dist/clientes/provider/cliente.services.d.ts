export declare class ClienteServices {
    private readonly knex;
    constructor(knex: any);
    buildOnce(): Promise<boolean>;
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
    create(client: JSON): Promise<any>;
    update(id: number, client: JSON): Promise<any>;
    delete(id: number): Promise<void>;
}
