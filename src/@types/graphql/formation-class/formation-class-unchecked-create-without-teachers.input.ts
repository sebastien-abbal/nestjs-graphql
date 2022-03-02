import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { StudentUncheckedCreateNestedManyWithoutFormationClassesInput } from '../student/student-unchecked-create-nested-many-without-formation-classes.input';

@InputType()
export class FormationClassUncheckedCreateWithoutTeachersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.MaxLength(50)
    name!: string;

    @HideField()
    isEnabled?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    formationID!: string;

    @HideField()
    students?: StudentUncheckedCreateNestedManyWithoutFormationClassesInput;
}
