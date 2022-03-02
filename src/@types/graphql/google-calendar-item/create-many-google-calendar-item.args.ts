import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateManyInput } from './google-calendar-item-create-many.input';

@ArgsType()
export class CreateManyGoogleCalendarItemArgs {

    @Field(() => [GoogleCalendarItemCreateManyInput], {nullable:false})
    data!: Array<GoogleCalendarItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
