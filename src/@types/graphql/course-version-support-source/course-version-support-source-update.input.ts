import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { MediaProvider } from '../prisma/media-provider.enum';
import { MediaStatus } from '../prisma/media-status.enum';
import { CourseSupportSourceType } from '../prisma/course-support-source-type.enum';
import { UserUpdateOneRequiredWithoutCourseSupportsInput } from '../user/user-update-one-required-without-course-supports.input';
import { CourseVersionUpdateOneRequiredWithoutSupportsInput } from '../course-version/course-version-update-one-required-without-supports.input';

@InputType()
export class CourseVersionSupportSourceUpdateInput {

    @HideField()
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

    @HideField()
    user?: UserUpdateOneRequiredWithoutCourseSupportsInput;

    @HideField()
    course?: CourseVersionUpdateOneRequiredWithoutSupportsInput;
}
