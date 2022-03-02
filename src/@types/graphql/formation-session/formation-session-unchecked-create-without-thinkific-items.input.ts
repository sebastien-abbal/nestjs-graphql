import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { GoogleCalendarItemUncheckedCreateNestedOneWithoutSessionInput } from '../google-calendar-item/google-calendar-item-unchecked-create-nested-one-without-session.input';

@InputType()
export class FormationSessionUncheckedCreateWithoutThinkificItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(100)
    title!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(5000)
    description!: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(5000)
    @Validator.IsOptional()
    summaryNote?: string;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @HideField()
    isEnabled?: boolean;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    startsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    endsAt!: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formationID!: string;

    @HideField()
    courseID!: string;

    @HideField()
    googleCalendarItem?: GoogleCalendarItemUncheckedCreateNestedOneWithoutSessionInput;
}
