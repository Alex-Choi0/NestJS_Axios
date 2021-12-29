// 경로 : src/rest-api.module.ts
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RestApiController } from './rest-api.controller';
import { RestApiService } from './rest-api.service';

@Module({
  imports: [HttpModule],
  controllers: [RestApiController],
  providers: [RestApiService],
})
export class RestApiModule {}
