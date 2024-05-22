import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PicturesModule } from './pictures/pictures.module';
import { MikroOrmCoreModule } from '@mikro-orm/nestjs/mikro-orm-core.module';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    MikroOrmCoreModule.forRoot({ }),
    PicturesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
