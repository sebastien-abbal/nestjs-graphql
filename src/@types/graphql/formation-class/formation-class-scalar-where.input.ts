import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class FormationClassScalarWhereInput {

    @Field(() => [FormationClassScalarWhereInput], {nullable:true})
    AND?: Array<FormationClassScalarWhereInput>;

    @Field(() => [FormationClassScalarWhereInput], {nullable:true})
    OR?: Array<FormationClassScalarWhereInput>;

    @Field(() => [FormationClassScalarWhereInput], {nullable:true})
    NOT?: Array<FormationClassScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    isEnabled?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @HideField()
    formationID?: StringFilter;
}
