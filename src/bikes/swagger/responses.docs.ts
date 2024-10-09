import { applyDecorators, Type } from '@nestjs/common'
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger'

class HttpResponse<T> {
  @ApiProperty()
  success: boolean

  @ApiProperty()
  message: string

  data: T
}

class Bike {
  @ApiProperty()
  id: string

  @ApiProperty()
  make: string

  @ApiProperty()
  model: string

  @ApiProperty()
  year: number

  @ApiProperty()
  type: string
}

const ApiSuccessResponse = <TModel extends Type<any>>(
  type: 'array' | 'object',
  model: TModel,
  code?: number,
) => {
  const data = { type, $ref: undefined, items: undefined }

  if (data.type === 'object') {
    data.$ref = getSchemaPath(model)
  } else {
    data.items = { $ref: getSchemaPath(model) }
  }

  return applyDecorators(
    ApiExtraModels(HttpResponse, model),
    ApiResponse({
      status: code ?? 'default',
      schema: {
        allOf: [
          { $ref: getSchemaPath(HttpResponse) },
          {
            properties: {
              data,
            },
          },
        ],
      },
    }),
  )
}

export const BikeCreatedResponse = () => {
  return applyDecorators(ApiSuccessResponse('object', Bike, 201))
}

export const ListBikesResponse = () => {
  return applyDecorators(ApiSuccessResponse('array', Bike, 200))
}

export const BikeUpdatedResponse = () => {
  return applyDecorators(ApiSuccessResponse('object', Bike))
}

export const BikeDeletedResponse = () => {
  return applyDecorators(
    ApiResponse({ schema: { $ref: getSchemaPath(HttpResponse) }, status: '2XX' }),
  )
}
