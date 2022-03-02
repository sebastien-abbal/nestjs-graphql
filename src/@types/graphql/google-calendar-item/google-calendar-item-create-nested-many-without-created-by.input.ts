import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateWithoutCreatedByInput } from './google-calendar-item-create-without-created-by.input';
import { GoogleCalendarItemCreateOrConnectWithoutCreatedByInput } from './google-calendar-item-create-or-connect-without-created-by.input';
import { GoogleCalendarItemCreateManyCreatedByInputEnvelope } from './google-calendar-item-create-many-created-by-input-envelope.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';

@InputType()
export class GoogleCalendarItemCreateNestedManyWithoutCreatedByInput {

    @Field(() => [GoogleCalendarItemCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<GoogleCalendarItemCreateWithoutCreatedByInput>;

    @Field(() => [GoogleCalendarItemCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<GoogleCalendarItemCreateOrConnectWithoutCreatedByInput>;

    @Field(() => GoogleCalendarItemCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: GoogleCalendarItemCreateManyCreatedByInputEnvelope;

    @Field(() => [GoogleCalendarItemWhereUniqueInput], {nullable:true})
    connect?: Array<GoogleCalendarItemWhereUniqueInput>;
}
