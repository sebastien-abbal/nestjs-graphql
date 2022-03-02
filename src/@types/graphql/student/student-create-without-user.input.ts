import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FormationClassCreateNestedManyWithoutStudentsInput } from '../formation-class/formation-class-create-nested-many-without-students.input';

@InputType()
export class StudentCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formationClasses?: FormationClassCreateNestedManyWithoutStudentsInput;
}
