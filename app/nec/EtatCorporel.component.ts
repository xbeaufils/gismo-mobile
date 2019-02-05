import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {Router} from "@angular/router";
import { DatePicker } from "tns-core-modules/ui/date-picker/date-picker";
import { CheptelService } from "~/login/cheptel.service";
import { IBete } from "~/bete/bete";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./EtatCorporel.component.html",
})
export class EtatCorporelComponent implements OnInit {
    public boucles: Boucle[];
 
    public num_boucle: string;
    public dtyear = 1970;
    public dtmonth = 1;
    public dtday = 18;
    
    @ViewChild("datePickerID") datePicker: ElementRef;
     // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private cheptelService: CheptelService, private router:Router) { }
 
    ngOnInit(): void {
        this.boucles = [];
    }

    search() {
        console.log(" boucle = " + this.num_boucle);
        let boucle = {numero_cheptel: "", numero_boucle: this.num_boucle}
        this.boucles.push(boucle);
        this.num_boucle = "";
    }
    public close(result: string) {

        if (result == "Save") {
            let datePickerView = <DatePicker>this.datePicker.nativeElement;
            console.log("Year " + this.dtyear);
            console.log("Year from NGModel Year " + datePickerView.year);

            //this.params.closeCallback(new Date(datePickerView.year, datePickerView.month, datePickerView.day));
        }
        else {
            //this.params.closeCallback(null);
        }

    }
}

interface Boucle {
    numero_cheptel: string;
    numero_boucle: string;
}