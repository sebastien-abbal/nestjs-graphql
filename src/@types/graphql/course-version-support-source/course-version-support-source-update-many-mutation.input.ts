import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { HideField } from '@nestjs/graphql';
import { MediaStatus } from '../prisma/media-status.enum';
import { CourseSupportSourceType } from '../prisma/course-support-source-type.enum';

@InputType()
export class CourseVersionSupportSourceUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    provider?: keyof typeof MediaProvider;

    @HideField()
    status?: keyof typeof MediaStatus;

    @Field(() => CourseSupportSourceType, {nullable:true})
    type?: keyof typeof CourseSupportSourceType;

    @HideField()
    size?: number;

    @HideField()
    width?: number;

    @HideField()
    height?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    fileToDeleteAt?: Date | string;
}
