// 경로 : src/app.module.ts
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestApiModule } from './rest-api/rest-api.module'; // 미리 코딩이 되어 있습니다.

@Module({
  imports: [HttpModule, RestApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
