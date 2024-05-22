import {Query, Resolver} from '@nestjs/graphql';
import {Picture} from "./models/picture.model";
import {PicturesService} from "./pictures.service";

@Resolver( () => Picture)
export class PicturesResolver {
    constructor(private PicturesService: PicturesService ) {}

    @Query( () => String)
    getStuff() {
        return 'Hello World!'
    }
}
