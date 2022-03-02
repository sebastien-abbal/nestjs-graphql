import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SchoolLogoPictureAvgAggregateInput {

    @HideField()
    size?: true;

    @HideField()
    width?: true;

    @HideField()
    height?: true;
}
