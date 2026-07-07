import { Controller, Get } from '@nestjs/common';
import { DiskHealthIndicator } from '@nestjs/terminus';
import {
  HealthCheckService,
  HealthCheck,
  TypeOrmHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dbIndicator: TypeOrmHealthIndicator,
    private memoryIndicator: MemoryHealthIndicator,
    private diskHealthIndicator: DiskHealthIndicator,
  ) {}

  /*
    http://localhost:3000/api/v1/health

    response:
    {
      "status": "ok",
      "info": {},
      "error": {},
      "details": {}
    }
  */
  //@Get()
  //@HealthCheck()
  //check() {
  //  return this.health.check([]);
  //}

  /*

    http://localhost:3000/api/v1/health

    response:
      {
        "status": "ok",
        "info": {
            "database": {
                "status": "up"
            },
            "heap": {
                "status": "up"
            },
            "memory": {
                "status": "up"
            },
            "disk <5> health": {
                "status": "up"
            }
        },
        "error": {},
        "details": {
            "database": {
                "status": "up"
            },
            "heap": {
                "status": "up"
            },
            "memory": {
                "status": "up"
            },
            "disk <5> health": {
                "status": "up"
            }
        }
      }       
  */
  @Get()
  @HealthCheck()
  check() {
    // return this.health.check([]);
    return this.health.check([
      () => this.dbIndicator.pingCheck('database'),
      () => this.memoryIndicator.checkHeap('heap', 200 * 1024 * 1024), // process < 200MB
      () => this.memoryIndicator.checkRSS('memory', 400 * 1024 * 1024), // process < 400MB
      () =>
        this.diskHealthIndicator.checkStorage('disk <5> health', {
          thresholdPercent: 0.75,
          path: '/',
        }),
    ]);
  }
}
