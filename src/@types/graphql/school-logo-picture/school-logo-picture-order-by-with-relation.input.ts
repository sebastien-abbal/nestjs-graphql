import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolOrderByWithRelationInput } from '../school/school-order-by-with-relation.input';

@InputType()
export class SchoolLogoPictureOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    provider?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @HideField()
    size?: keyof typeof SortOrder;

    @HideField()
    width?: keyof typeof SortOrder;

    @HideField()
    height?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    fileToDeleteAt?: keyof typeof SortOrder;

    @HideField()
    school?: SchoolOrderByWithRelationInput;

    @HideField()
    schoolID?: keyof typeof SortOrder;
}
