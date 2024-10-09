import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateBikeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  make: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  model: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  year: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string
}
