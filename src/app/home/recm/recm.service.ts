import { Injectable } from '@angular/core';

@Injectable()

export class RecmComponentService {
    private startTime = 10;
    private endTime = 20;
    private name = 'BBQ';
    private Imgs = [
        '../../assets/img/1.jpg',
        '../../assets/img/2.jpg',
        '../../assets/img/3.jpeg',
        '../../assets/img/4.jpeg',
        '../../assets/img/5.jpeg',
        '../../assets/img/6.jpeg'
    ];

    getDate() {
        return {
            startTime: this.startTime,
            endTime: this.endTime,
            name: this.name,
            Imgs: this.Imgs
        }
    }
}
