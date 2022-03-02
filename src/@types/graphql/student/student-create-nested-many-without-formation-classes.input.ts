import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentCreateWithoutFormationClassesInput } from './student-create-without-formation-classes.input';
import { StudentCreateOrConnectWithoutFormationClassesInput } from './student-create-or-connect-without-formation-classes.input';
import { StudentWhereUniqueInput } from './student-where-unique.input';

@InputType()
export class StudentCreateNestedManyWithoutFormationClassesInput {

    @Field(() => [StudentCreateWithoutFormationClassesInput], {nullable:true})
    create?: Array<StudentCreateWithoutFormationClassesInput>;

    @Field(() => [StudentCreateOrConnectWithoutFormationClassesInput], {nullable:true})
    connectOrCreate?: Array<StudentCreateOrConnectWithoutFormationClassesInput>;

    @Field(() => [StudentWhereUniqueInput], {nullable:true})
    connect?: Array<StudentWhereUniqueInput>;
}
