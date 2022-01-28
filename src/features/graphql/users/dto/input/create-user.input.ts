import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  age: number;
}
