import { constants } from '@config';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@ArgsType()
export class ResourcesFilters {
  @Field(() => Int, {
    defaultValue: constants.graphql.query.defaultTakeResults,
  })
  @IsInt()
  @IsOptional()
  take?: number;

  @Field(() => Int, {
    defaultValue: constants.graphql.query.defaultSkip,
  })
  @IsInt()
  @IsOptional()
  skip?: number;
}
