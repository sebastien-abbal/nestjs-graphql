import { registerEnumType } from '@nestjs/graphql';

export enum CourseSupportSourceType {
    LINK = "LINK",
    VIDEO_LINK = "VIDEO_LINK",
    PDF = "PDF",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    AUDIO = "AUDIO"
}


registerEnumType(CourseSupportSourceType, { name: 'CourseSupportSourceType', description: undefined })
