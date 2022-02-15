import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';

@InputType()
export class EnumUserRoleNullableListFilter {

    @Field(() => [UserRole], {nullable:true})
    equals?: Array<keyof typeof UserRole>;

    @Field(() => UserRole, {nullable:true})
    has?: keyof typeof UserRole;

    @Field(() => [UserRole], {nullable:true})
    hasEvery?: Array<keyof typeof UserRole>;

    @Field(() => [UserRole], {nullable:true})
    hasSome?: Array<keyof typeof UserRole>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
