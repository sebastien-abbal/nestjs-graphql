import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassUncheckedUpdateManyWithoutStudentsInput } from '../formation-class/formation-class-unchecked-update-many-without-students.input';

@InputType()
export class StudentUncheckedUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formationClasses?: FormationClassUncheckedUpdateManyWithoutStudentsInput;
}
