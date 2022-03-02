import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StudentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    userID?: string;
}
