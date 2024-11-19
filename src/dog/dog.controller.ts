import { Body, Controller, Get, Param, Post, Query, Req, Res} from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response } from 'express';

@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) {}

    @Get()
    public getHello(): string {
        return this.dogService.getHello()
    }

    @Get("greet/:id") 
    public introduce(/*@Req() request:Request, @Res() response: Response*/ @Param('id') id: string, @Query() query: any ) {
        console.log("Prams", id)
        console.log("Query", query)
        return this.dogService.introduce()
        // response.status(200).send(result);
    }

    @Post("edit")
    public modifyName(@Body() body:any):string {
        console.log("body")
        return this.dogService.modifyName()
}
}
