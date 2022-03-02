import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    gender?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @HideField()
    isEmailVerified?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    phoneIndex?: true;

    @HideField()
    isPhoneVerified?: true;

    @Field(() => Boolean, {nullable:true})
    linkedinUrl?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @HideField()
    termsAcceptedAt?: true;

    @Field(() => Boolean, {nullable:true})
    bornAt?: true;

    @HideField()
    bannedAt?: true;

    @HideField()
    lastLoginAt?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    deletedAt?: true;
}
