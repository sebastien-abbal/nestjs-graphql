import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class BaseEntityTemplate {
  @Column({ type: 'timestamp', default: () => 'NOW()' })
  @Field(() => Date)
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
