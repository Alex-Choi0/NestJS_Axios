// 경로 : src/rest-api.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { GetRestApiDto } from './dto/get-rest-api.dto';

@Injectable()
export class RestApiService {
  constructor(private httpService: HttpService) {}

  postRequest(dto: GetRestApiDto): Observable<AxiosResponse<Body>> {
    // dto는 비어있기 때문에 Swagger에서 Object를 임의로 넣으면 됩니다.
    console.log('Start Post request');
    return this.httpService
      .post('http://localhost:4000', {
        ...dto,
      })
      .pipe(
        map((res) => {
          console.log('response : ', res);
          console.log('response(data) : ', res.data);
          return res.data;
        }),
      );
  }
}
