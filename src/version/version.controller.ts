import { Controller, Get } from '@nestjs/common';
import { VersionService } from './version.service'

@Controller('api/version')
export class VersionController {
  constructor(private readonly versionService: VersionService) { }
  @Get()
  async version() {
    return await this.versionService.getCurrentGitVersion()
  }
}
