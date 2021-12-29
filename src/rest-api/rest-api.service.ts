// 경로 : src/rest-api.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class RestApiService {
  constructor(private httpService: HttpService) {}

  create() {
    console.log('Start Get request');
    return 'This action adds a new restApi';
  }

  getRequest(): Observable<AxiosResponse<Body>> {
    return this.httpService.get('http://localhost:4000').pipe(
      map((res) => {
        console.log('response : ', res);
        console.log('response(data) : ', res.data);
        return res.data;
      }),
    );
  }
}
