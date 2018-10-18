import { Get, UseBefore, JsonController, Res } from 'routing-controllers';
import { Response } from 'express';
import { LoggingMiddleware } from '../middleware/http_logging.middleware';
import { ApiResponse, HTTP_STATUS_CODE } from '../handlers/api_response.handler';

@JsonController()
@UseBefore(LoggingMiddleware)
export class IndexController {

    /**
     * GET request for Hello API
     * @param response response Object
     */
    @Get()
    public index(@Res() response: Response): Response {
        return new ApiResponse(response)
            .withData('Welcome to our API endpoint').withStatusCode(HTTP_STATUS_CODE.OK).build();
    }
}
