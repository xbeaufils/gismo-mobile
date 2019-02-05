import { Component, OnInit } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";
import * as Camera from "nativescript-camera";

import { IBete } from "./bete";
import { BeteService } from "~/bete/bete.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./bete.component.html",
})
export class BeteComponent implements OnInit {
    
    ngOnInit(): void {
    }
}