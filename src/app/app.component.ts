import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public imgOfTheDay = '';
  title = 'NasaService';

  public service:NasaService;

    constructor( param_service:NasaService ){
        this.service  =  param_service;
    }

    public  ngOnInit():void{
        this.service.getImageOfTheDay().subscribe(
            (param_img:string) => {
                this.imgOfTheDay  =  param_img;
                // console.log(param_img.url)
                
            }
        );
    }
}

