import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FormationSessionRelationFilter } from '../formation-session/formation-session-relation-filter.input';

@InputType()
export class GoogleCalendarItemWhereInput {

    @Field(() => [GoogleCalendarItemWhereInput], {nullable:true})
    AND?: Array<GoogleCalendarItemWhereInput>;

    @Field(() => [GoogleCalendarItemWhereInput], {nullable:true})
    OR?: Array<GoogleCalendarItemWhereInput>;

    @Field(() => [GoogleCalendarItemWhereInput], {nullable:true})
    NOT?: Array<GoogleCalendarItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    googleCalendarID?: StringFilter;

    @HideField()
    createdBy?: UserRelationFilter;

    @HideField()
    createdByID?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    session?: FormationSessionRelationFilter;

    @HideField()
    sessionID?: StringFilter;
}
