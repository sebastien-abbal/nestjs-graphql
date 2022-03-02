import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { FormationCreateNestedOneWithoutClassesInput } from '../formation/formation-create-nested-one-without-classes.input';
import { StudentCreateNestedManyWithoutFormationClassesInput } from '../student/student-create-nested-many-without-formation-classes.input';

@InputType()
export class FormationClassCreateWithoutTeachersInput {

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
    formation!: FormationCreateNestedOneWithoutClassesInput;

    @HideField()
    students?: StudentCreateNestedManyWithoutFormationClassesInput;
}
