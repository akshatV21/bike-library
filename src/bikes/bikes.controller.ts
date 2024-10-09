import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { BikesService } from './bikes.service'
import { CreateBikeDto } from './dtos/create-bike.dto'
import { PaginationDto } from './dtos/pagination.dto'
import { UpdateBikeDto } from './dtos/update-bike.dto'
import { ApiTags } from '@nestjs/swagger'
import {
  BikeCreatedResponse,
  BikeDeletedResponse,
  BikeUpdatedResponse,
  ListBikesResponse,
} from './swagger/responses.docs'

@ApiTags('bikes')
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post()
  @BikeCreatedResponse()
  async httpCreateBike(@Body() createBikeDto: CreateBikeDto) {
    const bike = await this.bikesService.create(createBikeDto)
    return { success: true, message: 'Bike created successfully.', data: { bike } }
  }

  @Get()
  @ListBikesResponse()
  async httpListBikes(@Query() pagiation: PaginationDto) {
    const bikes = await this.bikesService.list(pagiation)
    return { success: true, message: 'Fetched bikes successfully.', data: { bikes } }
  }

  @Put(':bikeId')
  @BikeUpdatedResponse()
  async httpGetBike(@Param('bikeId') bikeId: string, @Body() updateBikeDto: UpdateBikeDto) {
    const bike = await this.bikesService.update(bikeId, updateBikeDto)
    return { success: true, message: 'Updated bike successfully.', data: { bike } }
  }

  @Delete(':bikeId')
  @BikeDeletedResponse()
  async httpDeleteBike(@Param('bikeId') bikeId: string) {
    await this.bikesService.delete(bikeId)
    return { success: true, message: 'Deleted bike successfully.' }
  }
}
