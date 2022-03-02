import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ThinkificItemWhereUniqueInput {

    @Field(() => String, {nullable:true})
    thinkificID?: string;

    @HideField()
    sessionID?: string;
}
