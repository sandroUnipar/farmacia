import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';

@Module({
    imports: [
        KnexModule.forRoot({
          config: {
            client: 'mysql',
            connection: {
              host: 'localhost',
              user: 'root',
              password: '',
              database: 'farmacia',
            },
          },
        }),
      ],
})
export class DatabaseModule {}
