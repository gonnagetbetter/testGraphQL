import { Resolver } from '@nestjs/graphql';
import {Picture} from "./models/picture.model";

@Resolver( () => Picture)
export class PicturesResolver {

}
