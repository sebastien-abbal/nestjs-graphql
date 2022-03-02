import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassUpdateManyWithoutStudentsInput } from '../formation-class/formation-class-update-many-without-students.input';

@InputType()
export class StudentUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formationClasses?: FormationClassUpdateManyWithoutStudentsInput;
}
