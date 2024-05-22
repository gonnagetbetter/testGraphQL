import { EntityRepository } from '@mikro-orm/postgresql';
import { Picture } from '../entities/picture.entity';

export class PictureRepository extends EntityRepository<Picture>{}