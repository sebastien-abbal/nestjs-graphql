import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLocale } from './user-locale.enum';
import { NestedEnumUserLocaleFilter } from './nested-enum-user-locale-filter.input';

@InputType()
export class EnumUserLocaleFilter {

    @Field(() => UserLocale, {nullable:true})
    equals?: keyof typeof UserLocale;

    @Field(() => [UserLocale], {nullable:true})
    in?: Array<keyof typeof UserLocale>;

    @Field(() => [UserLocale], {nullable:true})
    notIn?: Array<keyof typeof UserLocale>;

    @Field(() => NestedEnumUserLocaleFilter, {nullable:true})
    not?: NestedEnumUserLocaleFilter;
}
