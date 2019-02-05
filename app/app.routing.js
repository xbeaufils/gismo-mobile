"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var search_component_1 = require("~/bete/search.component");
var cheptel_component_1 = require("~/login/cheptel.component");
var main_component_1 = require("~/login/main.component");
var EtatCorporel_component_1 = require("./nec/EtatCorporel.component");
var routes = [
    //{ path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "", redirectTo: "/cheptel", pathMatch: "full" },
    { path: "main", component: main_component_1.MainComponent },
    { path: "search", component: search_component_1.SearchComponent },
    { path: "cheptel", component: cheptel_component_1.CheptelComponent },
    { path: "nec", component: EtatCorporel_component_1.EtatCorporelComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsNERBQTBEO0FBQzFELCtEQUE2RDtBQUM3RCx5REFBdUQ7QUFDdkQsdUVBQXFFO0FBRXJFLElBQU0sTUFBTSxHQUFXO0lBQ25CLHdEQUF3RDtJQUN4RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUN6QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7SUFDN0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztJQUMvQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO0NBQ25ELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIn4vYmV0ZS9zZWFyY2guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVwdGVsQ29tcG9uZW50IH0gZnJvbSBcIn4vbG9naW4vY2hlcHRlbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwifi9sb2dpbi9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXRhdENvcnBvcmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vbmVjL0V0YXRDb3Jwb3JlbC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy97IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86XCIvY2hlcHRlbFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwifSxcbiAgICB7IHBhdGg6IFwibWFpblwiLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJjaGVwdGVsXCIsIGNvbXBvbmVudDogQ2hlcHRlbENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcIm5lY1wiLCBjb21wb25lbnQ6IEV0YXRDb3Jwb3JlbENvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19