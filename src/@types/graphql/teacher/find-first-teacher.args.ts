import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeacherWhereInput } from './teacher-where.input';
import { TeacherOrderByWithRelationInput } from './teacher-order-by-with-relation.input';
import { TeacherWhereUniqueInput } from './teacher-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TeacherScalarFieldEnum } from './teacher-scalar-field.enum';

@ArgsType()
export class FindFirstTeacherArgs {

    @Field(() => TeacherWhereInput, {nullable:true})
    where?: TeacherWhereInput;

    @Field(() => [TeacherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeacherOrderByWithRelationInput>;

    @Field(() => TeacherWhereUniqueInput, {nullable:true})
    cursor?: TeacherWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TeacherScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeacherScalarFieldEnum>;
}
