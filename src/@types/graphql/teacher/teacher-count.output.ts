import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TeacherCount {

    @Field(() => Int, {nullable:false})
    formationClasses?: number;

    @Field(() => Int, {nullable:false})
    courses?: number;
}
