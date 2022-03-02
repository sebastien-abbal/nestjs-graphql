import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GoogleCalendarItemWhereInput } from './google-calendar-item-where.input';
import { GoogleCalendarItemOrderByWithRelationInput } from './google-calendar-item-order-by-with-relation.input';
import { GoogleCalendarItemWhereUniqueInput } from './google-calendar-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GoogleCalendarItemScalarFieldEnum } from './google-calendar-item-scalar-field.enum';

@ArgsType()
export class FindManyGoogleCalendarItemArgs {

    @Field(() => GoogleCalendarItemWhereInput, {nullable:true})
    where?: GoogleCalendarItemWhereInput;

    @Field(() => [GoogleCalendarItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GoogleCalendarItemOrderByWithRelationInput>;

    @Field(() => GoogleCalendarItemWhereUniqueInput, {nullable:true})
    cursor?: GoogleCalendarItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GoogleCalendarItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GoogleCalendarItemScalarFieldEnum>;
}
