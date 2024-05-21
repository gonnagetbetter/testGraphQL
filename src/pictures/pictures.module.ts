import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesResolver } from './pictures.resolver';

@Module({
  providers: [PicturesService, PicturesResolver],
  controllers: [],
})
export class PicturesModule {}
