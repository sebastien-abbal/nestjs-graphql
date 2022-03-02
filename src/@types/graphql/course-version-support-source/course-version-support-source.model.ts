import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { CourseSupportSourceType } from '../prisma/course-support-source-type.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { HideField } from '@nestjs/graphql';
import { CourseVersion } from '../course-version/course-version.model';

@ObjectType()
export class CourseVersionSupportSource {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => MediaProvider, {nullable:true})
    provider!: keyof typeof MediaProvider | null;

    @Field(() => MediaStatus, {nullable:false,defaultValue:'UPLOADING'})
    status!: keyof typeof MediaStatus;

    @Field(() => CourseSupportSourceType, {nullable:false})
    type!: keyof typeof CourseSupportSourceType;

    @Field(() => Int, {nullable:true})
    size!: number | null;

    @Field(() => Int, {nullable:true})
    width!: number | null;

    @Field(() => Int, {nullable:true})
    height!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    fileToDeleteAt!: Date | null;

    @HideField()
    user?: User;

    @HideField()
    userID!: string;

    @Field(() => CourseVersion, {nullable:false})
    course?: CourseVersion;

    @HideField()
    courseID!: string;
}
