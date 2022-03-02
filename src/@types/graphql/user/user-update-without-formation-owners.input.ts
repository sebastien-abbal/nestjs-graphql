import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserUpdaterolesInput } from '../prisma/user-updateroles.input';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureUpdateManyWithoutUserInput } from '../user-avatar-picture/user-avatar-picture-update-many-without-user.input';
import { GoogleCalendarItemUpdateManyWithoutCreatedByInput } from '../google-calendar-item/google-calendar-item-update-many-without-created-by.input';
import { ThinkificItemUpdateManyWithoutCreatedByInput } from '../thinkific-item/thinkific-item-update-many-without-created-by.input';
import { CourseVersionUpdateManyWithoutValidatedByInput } from '../course-version/course-version-update-many-without-validated-by.input';
import { StudentUpdateOneWithoutUserInput } from '../student/student-update-one-without-user.input';
import { TeacherUpdateOneWithoutUserInput } from '../teacher/teacher-update-one-without-user.input';
import { CourseVersionSupportSourceUpdateManyWithoutUserInput } from '../course-version-support-source/course-version-support-source-update-many-without-user.input';
import { FormationUpdateManyWithoutHeadMasterInput } from '../formation/formation-update-many-without-head-master.input';

@InputType()
export class UserUpdateWithoutFormationOwnersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    lastName?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => UserGender, {nullable:true})
    gender?: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:true})
    locale?: keyof typeof UserLocale;

    @HideField()
    roles?: UserUpdaterolesInput;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    @Validator.IsOptional()
    email?: string;

    @HideField()
    isEmailVerified?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    phoneIndex?: string;

    @HideField()
    isPhoneVerified?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl()
    @Validator.IsOptional()
    linkedinUrl?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(2500)
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    company?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    job?: string;

    @HideField()
    termsAcceptedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsDate()
    bornAt?: Date | string;

    @HideField()
    bannedAt?: Date | string;

    @HideField()
    lastLoginAt?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    avatarPictures?: UserAvatarPictureUpdateManyWithoutUserInput;

    @HideField()
    googleCalendarItems?: GoogleCalendarItemUpdateManyWithoutCreatedByInput;

    @HideField()
    thinkificItems?: ThinkificItemUpdateManyWithoutCreatedByInput;

    @HideField()
    courses?: CourseVersionUpdateManyWithoutValidatedByInput;

    @HideField()
    student?: StudentUpdateOneWithoutUserInput;

    @HideField()
    teacher?: TeacherUpdateOneWithoutUserInput;

    @HideField()
    courseSupports?: CourseVersionSupportSourceUpdateManyWithoutUserInput;

    @HideField()
    formationHeadMasters?: FormationUpdateManyWithoutHeadMasterInput;
}
