import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SchoolLogoPicture } from '../school-logo-picture/school-logo-picture.model';
import { HideField } from '@nestjs/graphql';
import { Track } from '../track/track.model';
import { Formation } from '../formation/formation.model';
import { SchoolCount } from './school-count.output';

@ObjectType()
export class School {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isEnabled!: boolean;

    @Field(() => String, {nullable:true})
    websiteUrl!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @HideField()
    logoPictures?: Array<SchoolLogoPicture>;

    @HideField()
    tracks?: Array<Track>;

    @HideField()
    formations?: Array<Formation>;

    @Field(() => SchoolCount, {nullable:false})
    _count?: SchoolCount;
}
