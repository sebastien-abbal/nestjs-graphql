-- CreateEnum
CREATE TYPE "UserGender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'UNDEFINED');

-- CreateEnum
CREATE TYPE "UserLocale" AS ENUM ('EN', 'FR');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MODERATOR', 'USER');

-- CreateEnum
CREATE TYPE "MediaProvider" AS ENUM ('AWS');

-- CreateEnum
CREATE TYPE "MediaStatus" AS ENUM ('UPLOADING', 'CONVERTING', 'ONLINE', 'OFFLINE', 'ERROR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "UserGender" NOT NULL,
    "locale" "UserLocale" NOT NULL,
    "roles" "UserRole"[],
    "email" TEXT NOT NULL,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "phoneNumber" TEXT,
    "phoneIndex" TEXT,
    "isPhoneVerified" BOOLEAN NOT NULL DEFAULT false,
    "urlLinkedin" TEXT,
    "isTermsAccepted" BOOLEAN NOT NULL DEFAULT true,
    "termsAcceptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isBanned" BOOLEAN NOT NULL DEFAULT false,
    "bannedAt" TIMESTAMP(3),
    "lastLoginAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAvatarPicture" (
    "id" TEXT NOT NULL,
    "provider" "MediaProvider" NOT NULL DEFAULT E'AWS',
    "status" "MediaStatus" NOT NULL DEFAULT E'UPLOADING',
    "size" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "fileToDeleteAt" TIMESTAMP(3),
    "userID" TEXT NOT NULL,

    CONSTRAINT "UserAvatarPicture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserAvatarPicture" ADD CONSTRAINT "UserAvatarPicture_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
