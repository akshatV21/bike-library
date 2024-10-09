import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateBikeDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  make: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  model: string

  @ApiProperty({ type: Number })
  @IsOptional()
  @IsNumber()
  year: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  type: string
}
