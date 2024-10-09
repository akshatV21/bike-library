import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { BikesModule } from './bikes/bikes.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, BikesModule],
})
export class AppModule {}
