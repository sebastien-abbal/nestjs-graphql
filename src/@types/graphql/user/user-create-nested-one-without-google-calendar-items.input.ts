import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGoogleCalendarItemsInput } from './user-create-without-google-calendar-items.input';
import { UserCreateOrConnectWithoutGoogleCalendarItemsInput } from './user-create-or-connect-without-google-calendar-items.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutGoogleCalendarItemsInput {

    @Field(() => UserCreateWithoutGoogleCalendarItemsInput, {nullable:true})
    create?: UserCreateWithoutGoogleCalendarItemsInput;

    @Field(() => UserCreateOrConnectWithoutGoogleCalendarItemsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutGoogleCalendarItemsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
