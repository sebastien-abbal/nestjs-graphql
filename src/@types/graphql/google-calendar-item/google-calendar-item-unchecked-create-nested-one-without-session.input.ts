import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateWithoutSessionInput } from './google-calendar-item-create-without-session.input';
import { GoogleCalendarItemCreateOrConnectWithoutSessionInput } from './google-calendar-item-create-or-connect-without-session.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';

@InputType()
export class GoogleCalendarItemUncheckedCreateNestedOneWithoutSessionInput {

    @Field(() => GoogleCalendarItemCreateWithoutSessionInput, {nullable:true})
    create?: GoogleCalendarItemCreateWithoutSessionInput;

    @Field(() => GoogleCalendarItemCreateOrConnectWithoutSessionInput, {nullable:true})
    connectOrCreate?: GoogleCalendarItemCreateOrConnectWithoutSessionInput;

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:true})
    connect?: GoogleCalendarItemWhereUniqueInput;
}
