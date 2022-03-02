import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoogleCalendarItemCreateManyCreatedByInput } from './google-calendar-item-create-many-created-by.input';

@InputType()
export class GoogleCalendarItemCreateManyCreatedByInputEnvelope {

    @Field(() => [GoogleCalendarItemCreateManyCreatedByInput], {nullable:false})
    data!: Array<GoogleCalendarItemCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
