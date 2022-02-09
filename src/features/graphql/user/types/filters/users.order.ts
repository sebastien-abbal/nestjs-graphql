import { Order } from '@features/database/types';
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';

@InputType()
export class UsersOrderFilters {
  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  firstName?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  lastName?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  email?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  locale?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  phoneIndex?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  phoneNumber?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  createdAt: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  updatedAt?: Order;

  @Field(() => Order, { nullable: true })
  @IsOptional()
  @IsEnum(Order)
  lastLoginAt: Order;
}
