import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ThinkificItemScalarWhereInput {

    @Field(() => [ThinkificItemScalarWhereInput], {nullable:true})
    AND?: Array<ThinkificItemScalarWhereInput>;

    @Field(() => [ThinkificItemScalarWhereInput], {nullable:true})
    OR?: Array<ThinkificItemScalarWhereInput>;

    @Field(() => [ThinkificItemScalarWhereInput], {nullable:true})
    NOT?: Array<ThinkificItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    thinkificID?: StringFilter;

    @HideField()
    createdByID?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    sessionID?: StringFilter;
}
