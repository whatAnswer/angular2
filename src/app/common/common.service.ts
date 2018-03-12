import { Injectable } from '@angular/core';

@Injectable()

export class CommonComponentService {
    public showLoginBox = false;

    resetShowLoginBox() {
        this.showLoginBox = true;
    }
}
