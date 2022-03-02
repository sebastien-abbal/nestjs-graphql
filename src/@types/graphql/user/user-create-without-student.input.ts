import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserCreaterolesInput } from '../prisma/user-createroles.input';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureCreateNestedManyWithoutUserInput } from '../user-avatar-picture/user-avatar-picture-create-nested-many-without-user.input';
import { GoogleCalendarItemCreateNestedManyWithoutCreatedByInput } from '../google-calendar-item/google-calendar-item-create-nested-many-without-created-by.input';
import { ThinkificItemCreateNestedManyWithoutCreatedByInput } from '../thinkific-item/thinkific-item-create-nested-many-without-created-by.input';
import { CourseVersionCreateNestedManyWithoutValidatedByInput } from '../course-version/course-version-create-nested-many-without-validated-by.input';
import { TeacherCreateNestedOneWithoutUserInput } from '../teacher/teacher-create-nested-one-without-user.input';
import { CourseVersionSupportSourceCreateNestedManyWithoutUserInput } from '../course-version-support-source/course-version-support-source-create-nested-many-without-user.input';
import { FormationCreateNestedManyWithoutHeadMasterInput } from '../formation/formation-create-nested-many-without-head-master.input';
import { FormationCreateNestedManyWithoutOwnersInput } from '../formation/formation-create-nested-many-without-owners.input';

@InputType()
export class UserCreateWithoutStudentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsOptional()
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserGender, {nullable:false})
    gender!: keyof typeof UserGender;

    @Field(() => UserLocale, {nullable:false})
    locale!: keyof typeof UserLocale;

    @HideField()
    roles?: UserCreaterolesInput;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsOptional()
    email!: string;

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
    avatarPictures?: UserAvatarPictureCreateNestedManyWithoutUserInput;

    @HideField()
    googleCalendarItems?: GoogleCalendarItemCreateNestedManyWithoutCreatedByInput;

    @HideField()
    thinkificItems?: ThinkificItemCreateNestedManyWithoutCreatedByInput;

    @HideField()
    courses?: CourseVersionCreateNestedManyWithoutValidatedByInput;

    @HideField()
    teacher?: TeacherCreateNestedOneWithoutUserInput;

    @HideField()
    courseSupports?: CourseVersionSupportSourceCreateNestedManyWithoutUserInput;

    @HideField()
    formationHeadMasters?: FormationCreateNestedManyWithoutHeadMasterInput;

    @HideField()
    formationOwners?: FormationCreateNestedManyWithoutOwnersInput;
}
