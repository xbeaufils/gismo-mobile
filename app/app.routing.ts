import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SearchComponent } from "~/bete/search.component";
import { CheptelComponent } from "~/login/cheptel.component";
import { MainComponent } from "~/login/main.component";
import { EtatCorporelComponent } from "./nec/EtatCorporel.component";

const routes: Routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "", redirectTo:"/cheptel", pathMatch: "full"},
    { path: "main", component: MainComponent},
    { path: "search", component: SearchComponent},
    { path: "cheptel", component: CheptelComponent},
    { path: "nec", component: EtatCorporelComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }