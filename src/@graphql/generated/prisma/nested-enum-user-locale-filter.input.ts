import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLocale } from './user-locale.enum';

@InputType()
export class NestedEnumUserLocaleFilter {

    @Field(() => UserLocale, {nullable:true})
    equals?: keyof typeof UserLocale;

    @Field(() => [UserLocale], {nullable:true})
    in?: Array<keyof typeof UserLocale>;

    @Field(() => [UserLocale], {nullable:true})
    notIn?: Array<keyof typeof UserLocale>;

    @Field(() => NestedEnumUserLocaleFilter, {nullable:true})
    not?: NestedEnumUserLocaleFilter;
}
