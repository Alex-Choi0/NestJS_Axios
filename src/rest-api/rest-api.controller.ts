// 경로 : src/rest-api.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetRestApiDto } from './dto/get-rest-api.dto';
import { RestApiService } from './rest-api.service';
@ApiTags('Axios')
@Controller('rest-api')
export class RestApiController {
  constructor(private readonly restApiService: RestApiService) {}

  @Post()
  create(@Body() createRestApiDto: GetRestApiDto) {
    return this.restApiService.postRequest(createRestApiDto);
  }
}
