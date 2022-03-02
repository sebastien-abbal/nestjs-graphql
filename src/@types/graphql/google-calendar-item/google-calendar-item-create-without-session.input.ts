import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGoogleCalendarItemsInput } from '../user/user-create-nested-one-without-google-calendar-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GoogleCalendarItemCreateWithoutSessionInput {

    @Field(() => String, {nullable:false})
    googleCalendarID!: string;

    @HideField()
    createdBy!: UserCreateNestedOneWithoutGoogleCalendarItemsInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;
}
