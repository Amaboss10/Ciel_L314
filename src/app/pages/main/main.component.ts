import { MeteoServiceService } from './../../services/meteo-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

    meteo: any = [];
    VilleInfo: any = [];
    current_condition: any = []

    constructor(private meteoServiceService: MeteoServiceService) {}

    ngOnInit() {
        console.log("hellp"); 
        console.log(this.meteo); 
        this.get();
      }

      get() {
        this.meteoServiceService.get().subscribe(
            (res) => {
                this.meteo = res;
                this.current_condition = res.current_condition
                this.VilleInfo = res.city_info;
                console.log(this.meteo, this.VilleInfo); 
            }
        )
      }

}
