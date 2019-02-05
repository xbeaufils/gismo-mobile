import { Component, OnInit } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";
import * as Camera from "nativescript-camera";

import { IBete } from "./bete";
import { BeteService } from "~/bete/bete.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./search.component.html",
})
export class SearchComponent implements OnInit {
    items: IBete[];
    num_cheptel: string;
    cheptel: string;
    boucle: string; 
    public images: Array<any>;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private beteService: BeteService) { }

    ngOnInit(): void {
        this.items = this.beteService.getItems();
        this.num_cheptel = appSettings.getString("cheptel");
        this.cheptel = "";
        this.boucle = ""; 
    }

    search() {
        console.log("cheptel = " + this.cheptel + " boucle = " + this.boucle);
    }
    
    public capture() {
        Camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: false }).then(picture => {
            //let base64 = picture.toBase64String("png", 70);
            /*
            this.database.createDocument({
                "type": "image", 
                "image": base64,
                "timestamp": (new Date()).getTime()
            });
            */
            this.images.push(picture);
        }, error => {
            console.log(error);
        });
    }
}