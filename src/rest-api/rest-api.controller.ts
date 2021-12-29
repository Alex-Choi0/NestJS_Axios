// 경로 : src/rest-api.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RestApiService } from './rest-api.service';
@ApiTags('Axios')
@Controller('rest-api')
export class RestApiController {
  constructor(private readonly restApiService: RestApiService) {}

  @Get()
  findAll() {
    return this.restApiService.getRequest();
  }
}

// @Post()
// create(@Body() createRestApiDto: GetRestApiDto) {
//   return this.restApiService.create(createRestApiDto);
// }
