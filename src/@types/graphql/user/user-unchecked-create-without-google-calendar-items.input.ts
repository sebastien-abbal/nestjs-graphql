import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserGender } from '../prisma/user-gender.enum';
import { UserLocale } from '../prisma/user-locale.enum';
import { UserCreaterolesInput } from '../prisma/user-createroles.input';
import { HideField } from '@nestjs/graphql';
import { UserAvatarPictureUncheckedCreateNestedManyWithoutUserInput } from '../user-avatar-picture/user-avatar-picture-unchecked-create-nested-many-without-user.input';
import { ThinkificItemUncheckedCreateNestedManyWithoutCreatedByInput } from '../thinkific-item/thinkific-item-unchecked-create-nested-many-without-created-by.input';
import { CourseVersionUncheckedCreateNestedManyWithoutValidatedByInput } from '../course-version/course-version-unchecked-create-nested-many-without-validated-by.input';
import { StudentUncheckedCreateNestedOneWithoutUserInput } from '../student/student-unchecked-create-nested-one-without-user.input';
import { TeacherUncheckedCreateNestedOneWithoutUserInput } from '../teacher/teacher-unchecked-create-nested-one-without-user.input';
import { CourseVersionSupportSourceUncheckedCreateNestedManyWithoutUserInput } from '../course-version-support-source/course-version-support-source-unchecked-create-nested-many-without-user.input';
import { FormationUncheckedCreateNestedManyWithoutHeadMasterInput } from '../formation/formation-unchecked-create-nested-many-without-head-master.input';
import { FormationUncheckedCreateNestedManyWithoutOwnersInput } from '../formation/formation-unchecked-create-nested-many-without-owners.input';

@InputType()
export class UserUncheckedCreateWithoutGoogleCalendarItemsInput {

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
    avatarPictures?: UserAvatarPictureUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    thinkificItems?: ThinkificItemUncheckedCreateNestedManyWithoutCreatedByInput;

    @HideField()
    courses?: CourseVersionUncheckedCreateNestedManyWithoutValidatedByInput;

    @HideField()
    student?: StudentUncheckedCreateNestedOneWithoutUserInput;

    @HideField()
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput;

    @HideField()
    courseSupports?: CourseVersionSupportSourceUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    formationHeadMasters?: FormationUncheckedCreateNestedManyWithoutHeadMasterInput;

    @HideField()
    formationOwners?: FormationUncheckedCreateNestedManyWithoutOwnersInput;
}
