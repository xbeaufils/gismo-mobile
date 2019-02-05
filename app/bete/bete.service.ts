import { Injectable } from "@angular/core";

import { IBete } from "./bete";

@Injectable()
export class BeteService {
    private items = new Array<IBete>(
        { id: 1, numero_boucle:"40012", numero_cheptel: "FR 300 403", sexe: "F", date_naissance:"", pere_cheptel: null, id_pere: null, mere_cheptel:null, id_mere: null},
        { id: 2, numero_boucle:"40011", numero_cheptel: "FR 300 403", sexe: "F", date_naissance:"", pere_cheptel: null, id_pere: null, mere_cheptel:null, id_mere: null},
        { id: 3, numero_boucle:"40019", numero_cheptel: "FR 300 403", sexe: "F", date_naissance:"", pere_cheptel: null, id_pere: null, mere_cheptel:null, id_mere: null},
        { id: 4, numero_boucle:"50724", numero_cheptel: "FR 485 419", sexe: "F", date_naissance:"", pere_cheptel: null, id_pere: null, mere_cheptel:null, id_mere: null}
      );

    getItems(): IBete[] {
        return this.items;
    }

    getItem(id: number): IBete {
        return this.items.filter(item => item.id === id)[0];
    }
}
