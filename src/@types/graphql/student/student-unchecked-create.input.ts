import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassUncheckedCreateNestedManyWithoutStudentsInput } from '../formation-class/formation-class-unchecked-create-nested-many-without-students.input';

@InputType()
export class StudentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    userID!: string;

    @HideField()
    formationClasses?: FormationClassUncheckedCreateNestedManyWithoutStudentsInput;
}
