import { InputType, Field } from 'type-graphql';
import { Prisma } from '@prisma/client';
import { GraphQLJSONObject } from 'graphql-type-json';
import { StudentStatus, Track } from '../enums';

@InputType()
export class StudentEditInput {
  @Field(() => String, { nullable: true })
  givenName?: string

  @Field(() => String, { nullable: true })
  surname?: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => String, { nullable: true })
  username?: string

  @Field(() => StudentStatus, { nullable: true })
  status?: StudentStatus

  @Field(() => Track, { nullable: true })
  track?: Track

  @Field(() => Number, { nullable: true })
  minHours?: number

  @Field(() => Number, { nullable: true })
  weeks?: number

  @Field(() => GraphQLJSONObject, { nullable: true })
  // eslint-disable-next-line @typescript-eslint/ban-types
  profile?: object

  @Field(() => String, { nullable: true })
  partnerCode?: string

  toQuery(): Prisma.StudentUpdateInput {
    return {
      givenName: this.givenName,
      surname: this.surname,
      username: this.username,
      email: this.email,
      status: this.status,
      track: this.track,
      weeks: this.weeks,
      minHours: this.minHours,
      profile: this.profile,
      partnerCode: this.partnerCode,
    };
  }
}