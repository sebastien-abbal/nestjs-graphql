import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SchoolLogoPictureSumAggregateInput {

    @HideField()
    size?: true;

    @HideField()
    width?: true;

    @HideField()
    height?: true;
}
