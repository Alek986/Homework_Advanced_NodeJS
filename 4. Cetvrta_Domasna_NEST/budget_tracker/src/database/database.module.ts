import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: `postgres`,
            host: `localhost`,
            port: 5432,
            username: `postgres`,
            password: `Ace02051986`,
            database: `budget`,
            entities: [__dirname + `/../**/*.entity{.ts,.js}`],
            synchronize: true
        })
    ]
})

export class DataBaseModule {}