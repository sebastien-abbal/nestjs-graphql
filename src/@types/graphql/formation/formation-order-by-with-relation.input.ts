import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SchoolOrderByRelationAggregateInput } from '../school/school-order-by-relation-aggregate.input';
import { FormationSessionOrderByRelationAggregateInput } from '../formation-session/formation-session-order-by-relation-aggregate.input';
import { FormationClassOrderByWithRelationInput } from '../formation-class/formation-class-order-by-with-relation.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';

@InputType()
export class FormationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeFormat?: keyof typeof SortOrder;

    @HideField()
    isEnabled?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: keyof typeof SortOrder;

    @HideField()
    schools?: SchoolOrderByRelationAggregateInput;

    @HideField()
    sessions?: FormationSessionOrderByRelationAggregateInput;

    @HideField()
    classes?: FormationClassOrderByWithRelationInput;

    @HideField()
    owners?: UserOrderByRelationAggregateInput;

    @HideField()
    headMaster?: UserOrderByWithRelationInput;

    @HideField()
    headMasterID?: keyof typeof SortOrder;

    @HideField()
    company?: CompanyOrderByWithRelationInput;

    @HideField()
    companyID?: keyof typeof SortOrder;
}
