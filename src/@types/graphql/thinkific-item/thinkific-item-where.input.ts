import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FormationSessionRelationFilter } from '../formation-session/formation-session-relation-filter.input';

@InputType()
export class ThinkificItemWhereInput {

    @Field(() => [ThinkificItemWhereInput], {nullable:true})
    AND?: Array<ThinkificItemWhereInput>;

    @Field(() => [ThinkificItemWhereInput], {nullable:true})
    OR?: Array<ThinkificItemWhereInput>;

    @Field(() => [ThinkificItemWhereInput], {nullable:true})
    NOT?: Array<ThinkificItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    thinkificID?: StringFilter;

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
