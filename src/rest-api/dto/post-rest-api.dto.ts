import { PartialType } from '@nestjs/swagger';
import { GetRestApiDto } from './get-rest-api.dto';

export class PostRestApiDto extends PartialType(GetRestApiDto) {}
