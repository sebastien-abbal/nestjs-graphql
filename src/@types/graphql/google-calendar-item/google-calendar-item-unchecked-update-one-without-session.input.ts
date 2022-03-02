import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateWithoutSessionInput } from './google-calendar-item-create-without-session.input';
import { GoogleCalendarItemCreateOrConnectWithoutSessionInput } from './google-calendar-item-create-or-connect-without-session.input';
import { GoogleCalendarItemUpsertWithoutSessionInput } from './google-calendar-item-upsert-without-session.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { GoogleCalendarItemUpdateWithoutSessionInput } from './google-calendar-item-update-without-session.input';

@InputType()
export class GoogleCalendarItemUncheckedUpdateOneWithoutSessionInput {

    @Field(() => GoogleCalendarItemCreateWithoutSessionInput, {nullable:true})
    create?: GoogleCalendarItemCreateWithoutSessionInput;

    @Field(() => GoogleCalendarItemCreateOrConnectWithoutSessionInput, {nullable:true})
    connectOrCreate?: GoogleCalendarItemCreateOrConnectWithoutSessionInput;

    @Field(() => GoogleCalendarItemUpsertWithoutSessionInput, {nullable:true})
    upsert?: GoogleCalendarItemUpsertWithoutSessionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:true})
    connect?: GoogleCalendarItemWhereUniqueInput;

    @Field(() => GoogleCalendarItemUpdateWithoutSessionInput, {nullable:true})
    update?: GoogleCalendarItemUpdateWithoutSessionInput;
}
