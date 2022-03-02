import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateWithoutCreatedByInput } from './google-calendar-item-create-without-created-by.input';
import { GoogleCalendarItemCreateOrConnectWithoutCreatedByInput } from './google-calendar-item-create-or-connect-without-created-by.input';
import { GoogleCalendarItemUpsertWithWhereUniqueWithoutCreatedByInput } from './google-calendar-item-upsert-with-where-unique-without-created-by.input';
import { GoogleCalendarItemCreateManyCreatedByInputEnvelope } from './google-calendar-item-create-many-created-by-input-envelope.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { GoogleCalendarItemUpdateWithWhereUniqueWithoutCreatedByInput } from './google-calendar-item-update-with-where-unique-without-created-by.input';
import { GoogleCalendarItemUpdateManyWithWhereWithoutCreatedByInput } from './google-calendar-item-update-many-with-where-without-created-by.input';
import { GoogleCalendarItemScalarWhereInput } from './google-calendar-item-scalar-where.input';

@InputType()
export class GoogleCalendarItemUpdateManyWithoutCreatedByInput {

    @Field(() => [GoogleCalendarItemCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<GoogleCalendarItemCreateWithoutCreatedByInput>;

    @Field(() => [GoogleCalendarItemCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<GoogleCalendarItemCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [GoogleCalendarItemUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    upsert?: Array<GoogleCalendarItemUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => GoogleCalendarItemCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: GoogleCalendarItemCreateManyCreatedByInputEnvelope;

    @Field(() => [GoogleCalendarItemWhereUniqueInput], {nullable:true})
    set?: Array<GoogleCalendarItemWhereUniqueInput>;

    @Field(() => [GoogleCalendarItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<GoogleCalendarItemWhereUniqueInput>;

    @Field(() => [GoogleCalendarItemWhereUniqueInput], {nullable:true})
    delete?: Array<GoogleCalendarItemWhereUniqueInput>;

    @Field(() => [GoogleCalendarItemWhereUniqueInput], {nullable:true})
    connect?: Array<GoogleCalendarItemWhereUniqueInput>;

    @Field(() => [GoogleCalendarItemUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    update?: Array<GoogleCalendarItemUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [GoogleCalendarItemUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    updateMany?: Array<GoogleCalendarItemUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [GoogleCalendarItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<GoogleCalendarItemScalarWhereInput>;
}
