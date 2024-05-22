import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesResolver } from './pictures.resolver';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import { Picture } from './entities/picture.entity';

@Module({
  imports: [ MikroOrmModule.forFeature([Picture]),
  ],
  providers: [PicturesService, PicturesResolver],
  controllers: [],
  exports: [PicturesService],
})
export class PicturesModule {}
