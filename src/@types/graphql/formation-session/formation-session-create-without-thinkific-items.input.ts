import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { FormationCreateNestedOneWithoutSessionsInput } from '../formation/formation-create-nested-one-without-sessions.input';
import { CourseVersionCreateNestedOneWithoutFormationSessionsInput } from '../course-version/course-version-create-nested-one-without-formation-sessions.input';
import { GoogleCalendarItemCreateNestedOneWithoutSessionInput } from '../google-calendar-item/google-calendar-item-create-nested-one-without-session.input';

@InputType()
export class FormationSessionCreateWithoutThinkificItemsInput {

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
    formation!: FormationCreateNestedOneWithoutSessionsInput;

    @HideField()
    course!: CourseVersionCreateNestedOneWithoutFormationSessionsInput;

    @HideField()
    googleCalendarItem?: GoogleCalendarItemCreateNestedOneWithoutSessionInput;
}
