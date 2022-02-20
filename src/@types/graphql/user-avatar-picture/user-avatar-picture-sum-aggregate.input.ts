import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserAvatarPictureSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    width?: true;

    @Field(() => Boolean, {nullable:true})
    height?: true;
}
