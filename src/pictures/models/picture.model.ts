import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Picture {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  author: string;

  @Field()
  createdAt: Date;

}