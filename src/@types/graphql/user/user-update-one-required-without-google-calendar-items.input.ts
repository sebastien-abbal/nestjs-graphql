import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGoogleCalendarItemsInput } from './user-create-without-google-calendar-items.input';
import { UserCreateOrConnectWithoutGoogleCalendarItemsInput } from './user-create-or-connect-without-google-calendar-items.input';
import { UserUpsertWithoutGoogleCalendarItemsInput } from './user-upsert-without-google-calendar-items.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutGoogleCalendarItemsInput } from './user-update-without-google-calendar-items.input';

@InputType()
export class UserUpdateOneRequiredWithoutGoogleCalendarItemsInput {

    @Field(() => UserCreateWithoutGoogleCalendarItemsInput, {nullable:true})
    create?: UserCreateWithoutGoogleCalendarItemsInput;

    @Field(() => UserCreateOrConnectWithoutGoogleCalendarItemsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutGoogleCalendarItemsInput;

    @Field(() => UserUpsertWithoutGoogleCalendarItemsInput, {nullable:true})
    upsert?: UserUpsertWithoutGoogleCalendarItemsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGoogleCalendarItemsInput, {nullable:true})
    update?: UserUpdateWithoutGoogleCalendarItemsInput;
}
