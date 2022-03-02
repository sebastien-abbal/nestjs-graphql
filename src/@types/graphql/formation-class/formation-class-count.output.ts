import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FormationClassCount {

    @Field(() => Int, {nullable:false})
    students?: number;

    @Field(() => Int, {nullable:false})
    teachers?: number;
}
