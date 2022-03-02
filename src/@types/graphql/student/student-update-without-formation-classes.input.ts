import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutStudentInput } from '../user/user-update-one-required-without-student.input';

@InputType()
export class StudentUpdateWithoutFormationClassesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    user?: UserUpdateOneRequiredWithoutStudentInput;
}
