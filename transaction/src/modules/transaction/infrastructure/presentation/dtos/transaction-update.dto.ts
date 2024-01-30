import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator"
import { ETransferType } from "../../../domain/transaction"

export enum STATUS_ENUM {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}

export class TransactionUpdateDto {
    @ApiProperty({
        description: "Id transaction",
        example: "d28beff0-c093-48a7-b88c-59458ec74d1c"
    })
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    transactionId: string

    @ApiProperty({
        description: "Status of transaction",
        example: "APPROVED"
    })
    @IsNotEmpty()
    @IsEnum(STATUS_ENUM)
    status: string
}