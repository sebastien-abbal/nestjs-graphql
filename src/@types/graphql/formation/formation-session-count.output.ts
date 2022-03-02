import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FormationSessionCount {

    @Field(() => Int, {nullable:false})
    thinkificItems?: number;
}
