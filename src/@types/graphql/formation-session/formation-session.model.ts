import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SessionFormat } from '../prisma/session-format.enum';
import { Formation } from '../formation/formation.model';
import { HideField } from '@nestjs/graphql';
import { CourseVersion } from '../course-version/course-version.model';
import { ThinkificItem } from '../thinkific-item/thinkific-item.model';
import { GoogleCalendarItem } from '../google-calendar-item/google-calendar-item.model';
import { FormationSessionCount } from '../formation/formation-session-count.output';

@ObjectType()
export class FormationSession {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    summaryNote!: string | null;

    @Field(() => SessionFormat, {nullable:false})
    format!: keyof typeof SessionFormat;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isEnabled!: boolean;

    @Field(() => Date, {nullable:false})
    startsAt!: Date;

    @Field(() => Date, {nullable:false})
    endsAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @HideField()
    formation?: Formation;

    @HideField()
    formationID!: string;

    @Field(() => CourseVersion, {nullable:false})
    course?: CourseVersion;

    @HideField()
    courseID!: string;

    @Field(() => [ThinkificItem], {nullable:true})
    thinkificItems?: Array<ThinkificItem>;

    @Field(() => GoogleCalendarItem, {nullable:true})
    googleCalendarItem?: GoogleCalendarItem | null;

    @Field(() => FormationSessionCount, {nullable:false})
    _count?: FormationSessionCount;
}
