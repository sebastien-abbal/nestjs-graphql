import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionCreateWithoutGoogleCalendarItemInput } from './formation-session-create-without-google-calendar-item.input';
import { FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput } from './formation-session-create-or-connect-without-google-calendar-item.input';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';

@InputType()
export class FormationSessionCreateNestedOneWithoutGoogleCalendarItemInput {

    @Field(() => FormationSessionCreateWithoutGoogleCalendarItemInput, {nullable:true})
    create?: FormationSessionCreateWithoutGoogleCalendarItemInput;

    @Field(() => FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput, {nullable:true})
    connectOrCreate?: FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput;

    @Field(() => FormationSessionWhereUniqueInput, {nullable:true})
    connect?: FormationSessionWhereUniqueInput;
}
