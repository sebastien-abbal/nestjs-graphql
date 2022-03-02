import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolLogoPictureWhereInput } from './school-logo-picture-where.input';
import { SchoolLogoPictureOrderByWithRelationInput } from './school-logo-picture-order-by-with-relation.input';
import { SchoolLogoPictureWhereUniqueInput } from './school-logo-picture-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SchoolLogoPictureScalarFieldEnum } from './school-logo-picture-scalar-field.enum';

@ArgsType()
export class FindFirstSchoolLogoPictureArgs {

    @Field(() => SchoolLogoPictureWhereInput, {nullable:true})
    where?: SchoolLogoPictureWhereInput;

    @Field(() => [SchoolLogoPictureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SchoolLogoPictureOrderByWithRelationInput>;

    @Field(() => SchoolLogoPictureWhereUniqueInput, {nullable:true})
    cursor?: SchoolLogoPictureWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SchoolLogoPictureScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SchoolLogoPictureScalarFieldEnum>;
}
