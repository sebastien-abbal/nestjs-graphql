import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutGoogleCalendarItemsInput } from './user-update-without-google-calendar-items.input';
import { UserCreateWithoutGoogleCalendarItemsInput } from './user-create-without-google-calendar-items.input';

@InputType()
export class UserUpsertWithoutGoogleCalendarItemsInput {

    @Field(() => UserUpdateWithoutGoogleCalendarItemsInput, {nullable:false})
    update!: UserUpdateWithoutGoogleCalendarItemsInput;

    @Field(() => UserCreateWithoutGoogleCalendarItemsInput, {nullable:false})
    create!: UserCreateWithoutGoogleCalendarItemsInput;
}
