import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Error {
  @Field(() => String)
  code: string;

  @Field(() => String, { nullable: true })
  message?: string;
}
