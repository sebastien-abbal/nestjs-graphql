import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';

@InputType()
export class UserUpdaterolesInput {

    @Field(() => [UserRole], {nullable:true})
    set?: Array<keyof typeof UserRole>;

    @Field(() => [UserRole], {nullable:true})
    push?: Array<keyof typeof UserRole>;
}
