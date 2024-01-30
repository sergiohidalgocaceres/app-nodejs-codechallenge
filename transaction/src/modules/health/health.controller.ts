import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('healthcheck')
export class HealthController {
    @Get()
    @HealthCheck()
    check() {
        return {
            status: 'ok',
            info: {
                database: {
                    status: 'up',
                },
            },
            error: {},
            details: {
                database: {
                    status: 'up',
                },
            },
        };
    }
}