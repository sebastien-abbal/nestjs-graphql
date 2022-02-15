import { registerEnumType } from '@nestjs/graphql';

export enum MediaStatus {
    UPLOADING = "UPLOADING",
    CONVERTING = "CONVERTING",
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE",
    ERROR = "ERROR"
}


registerEnumType(MediaStatus, { name: 'MediaStatus', description: undefined })
