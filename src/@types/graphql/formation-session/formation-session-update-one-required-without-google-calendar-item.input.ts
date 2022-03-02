import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutGoogleCalendarItemInput } from './formation-session-create-without-google-calendar-item.input';
import { FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput } from './formation-session-create-or-connect-without-google-calendar-item.input';
import { FormationSessionUpsertWithoutGoogleCalendarItemInput } from './formation-session-upsert-without-google-calendar-item.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionUpdateWithoutGoogleCalendarItemInput } from './formation-session-update-without-google-calendar-item.input';

@InputType()
export class FormationSessionUpdateOneRequiredWithoutGoogleCalendarItemInput {

    @Field(() => FormationSessionCreateWithoutGoogleCalendarItemInput, {nullable:true})
    create?: FormationSessionCreateWithoutGoogleCalendarItemInput;

    @Field(() => FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput, {nullable:true})
    connectOrCreate?: FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput;

    @Field(() => FormationSessionUpsertWithoutGoogleCalendarItemInput, {nullable:true})
    upsert?: FormationSessionUpsertWithoutGoogleCalendarItemInput;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:true})
    connect?: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionUpdateWithoutGoogleCalendarItemInput, {nullable:true})
    update?: FormationSessionUpdateWithoutGoogleCalendarItemInput;
}
