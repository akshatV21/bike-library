import { BadRequestException, Injectable } from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateBikeDto } from './dtos/create-bike.dto'
import { PaginationDto } from './dtos/pagination.dto'
import { UpdateBikeDto } from './dtos/update-bike.dto'

@Injectable()
export class BikesService {
  constructor(private readonly db: DatabaseService) {}

  async create(createBikeDto: CreateBikeDto) {
    const bike = await this.db.bike.create({ data: createBikeDto })
    return bike
  }

  async list(pagination: PaginationDto) {
    const page = pagination.page ?? 1
    const limit = pagination.limit ?? 1

    const bikes = await this.db.bike.findMany({ skip: (page - 1) * limit, take: limit })
    return bikes
  }

  async update(id: string, updateBikeDto: UpdateBikeDto) {
    const exixts = await this.db.bike.findUnique({ where: { id } })

    if (!exixts) {
      throw new BadRequestException('No bike exists with the provided id.')
    }

    const bike = await this.db.bike.update({ where: { id }, data: updateBikeDto })
    return bike
  }

  async delete(id: string) {
    const exixts = await this.db.bike.findUnique({ where: { id } })

    if (!exixts) {
      throw new BadRequestException('No bike exists with the provided id.')
    }

    await this.db.bike.delete({ where: { id } })
  }
}
