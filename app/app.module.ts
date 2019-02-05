import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { BeteService } from "./bete/bete.service";
import { SearchComponent } from "./bete/search.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CheptelComponent } from "~/login/cheptel.component";
import { CheptelService } from "~/login/cheptel.service";
import { MainComponent } from "./login/main.component";
import { EtatCorporelComponent } from "./nec/EtatCorporel.component";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        CheptelComponent,
        MainComponent,
        EtatCorporelComponent
    ],
    providers: [
        BeteService,
        CheptelService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
