"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings");
var Camera = require("nativescript-camera");
var bete_service_1 = require("~/bete/bete.service");
var SearchComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function SearchComponent(beteService) {
        this.beteService = beteService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.items = this.beteService.getItems();
        this.num_cheptel = appSettings.getString("cheptel");
        this.cheptel = "";
        this.boucle = "";
    };
    SearchComponent.prototype.search = function () {
        console.log("cheptel = " + this.cheptel + " boucle = " + this.boucle);
    };
    SearchComponent.prototype.capture = function () {
        var _this = this;
        Camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: false }).then(function (picture) {
            //let base64 = picture.toBase64String("png", 70);
            /*
            this.database.createDocument({
                "type": "image",
                "image": base64,
                "timestamp": (new Date()).getTime()
            });
            */
            _this.images.push(picture);
        }, function (error) {
            console.log(error);
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./search.component.html",
        }),
        __metadata("design:paramtypes", [bete_service_1.BeteService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQXFFO0FBQ3JFLDRDQUE4QztBQUc5QyxvREFBa0Q7QUFPbEQ7SUFNSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLGlDQUFPLEdBQWQ7UUFBQSxpQkFjQztRQWJHLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3JHLGlEQUFpRDtZQUNqRDs7Ozs7O2NBTUU7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQ1EsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FTbUMsMEJBQVc7T0FSbkMsZUFBZSxDQW9DM0I7SUFBRCxzQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuXG5pbXBvcnQgeyBJQmV0ZSB9IGZyb20gXCIuL2JldGVcIjtcbmltcG9ydCB7IEJldGVTZXJ2aWNlIH0gZnJvbSBcIn4vYmV0ZS9iZXRlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IElCZXRlW107XG4gICAgbnVtX2NoZXB0ZWw6IHN0cmluZztcbiAgICBjaGVwdGVsOiBzdHJpbmc7XG4gICAgYm91Y2xlOiBzdHJpbmc7IFxuICAgIHB1YmxpYyBpbWFnZXM6IEFycmF5PGFueT47XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJldGVTZXJ2aWNlOiBCZXRlU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuYmV0ZVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5udW1fY2hlcHRlbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNoZXB0ZWxcIik7XG4gICAgICAgIHRoaXMuY2hlcHRlbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuYm91Y2xlID0gXCJcIjsgXG4gICAgfVxuXG4gICAgc2VhcmNoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZXB0ZWwgPSBcIiArIHRoaXMuY2hlcHRlbCArIFwiIGJvdWNsZSA9IFwiICsgdGhpcy5ib3VjbGUpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgY2FwdHVyZSgpIHtcbiAgICAgICAgQ2FtZXJhLnRha2VQaWN0dXJlKHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogZmFsc2UgfSkudGhlbihwaWN0dXJlID0+IHtcbiAgICAgICAgICAgIC8vbGV0IGJhc2U2NCA9IHBpY3R1cmUudG9CYXNlNjRTdHJpbmcoXCJwbmdcIiwgNzApO1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsIFxuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogYmFzZTY0LFxuICAgICAgICAgICAgICAgIFwidGltZXN0YW1wXCI6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gocGljdHVyZSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==