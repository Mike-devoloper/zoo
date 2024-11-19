import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {


    public getHello(): string {
        return "Woof Woof"
    }

    public introduce():string {
        return "My name is Rex"
    }

    public modifyName():string {
        return "Modified"
    }
}
