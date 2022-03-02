import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { SessionFormat } from '../prisma/session-format.enum';
import { HideField } from '@nestjs/graphql';
import { FormationUpdateOneRequiredWithoutSessionsInput } from '../formation/formation-update-one-required-without-sessions.input';
import { CourseVersionUpdateOneRequiredWithoutFormationSessionsInput } from '../course-version/course-version-update-one-required-without-formation-sessions.input';
import { GoogleCalendarItemUpdateOneWithoutSessionInput } from '../google-calendar-item/google-calendar-item-update-one-without-session.input';

@InputType()
export class FormationSessionUpdateWithoutThinkificItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(100)
    title?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(5000)
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(5000)
    @Validator.IsOptional()
    summaryNote?: string;

    @Field(() => SessionFormat, {nullable:true})
    format?: keyof typeof SessionFormat;

    @HideField()
    isEnabled?: boolean;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    endsAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formation?: FormationUpdateOneRequiredWithoutSessionsInput;

    @HideField()
    course?: CourseVersionUpdateOneRequiredWithoutFormationSessionsInput;

    @HideField()
    googleCalendarItem?: GoogleCalendarItemUpdateOneWithoutSessionInput;
}
