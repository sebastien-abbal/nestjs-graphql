import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FormationSessionWhereUniqueInput } from './formation-session-where-unique.input';
import { FormationSessionCreateWithoutGoogleCalendarItemInput } from './formation-session-create-without-google-calendar-item.input';

@InputType()
export class FormationSessionCreateOrConnectWithoutGoogleCalendarItemInput {

    @Field(() => FormationSessionWhereUniqueInput, {nullable:false})
    where!: FormationSessionWhereUniqueInput;

    @Field(() => FormationSessionCreateWithoutGoogleCalendarItemInput, {nullable:false})
    create!: FormationSessionCreateWithoutGoogleCalendarItemInput;
}
