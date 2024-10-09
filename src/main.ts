import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'
import * as morgan from 'morgan'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)

  const PORT = configService.getOrThrow('PORT')

  app.use(helmet())
  app.use(morgan('dev'))

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))

  const config = new DocumentBuilder()
    .setTitle('Bike Library')
    .setDescription('The bike library API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(PORT, () => console.log(`Listening to requests on port: ${PORT}`))
}

bootstrap()
