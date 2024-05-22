import { PictureRepository } from "../repository/picture.repository";
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";

@Entity ({ repository: () => PictureRepository})
export class Picture {
    @PrimaryKey( {autoincrement: true})
    id: number;

    @Property({unique: true, nullable: false})
    name: string;

    @Property({nullable: false})
    Author: string;

    @Property({nullable: false})
    createdAt: Date = new Date();
}