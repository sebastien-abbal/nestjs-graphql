import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutGoogleCalendarItemsInput } from './user-create-without-google-calendar-items.input';

@InputType()
export class UserCreateOrConnectWithoutGoogleCalendarItemsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGoogleCalendarItemsInput, {nullable:false})
    create!: UserCreateWithoutGoogleCalendarItemsInput;
}
