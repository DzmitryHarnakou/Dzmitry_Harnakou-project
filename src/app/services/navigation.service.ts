import { Injectable } from '@angular/core';
import { faFilm, faTv, faBook, faUserCircle,faBars,faWindowClose, faUser, faPlus, faDollarSign, faBlog} from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  public showMenu = true;
  public faBars:any = faBars;
  public faWindowClose:any =faWindowClose;
  public items = [
    {icon: faFilm, text: "Movies"},
    {icon: faTv, text: "TV Shows"},
    {icon: faBook, text: "My Library"},
    {icon: faUserCircle, text: "Support"}
  ]

  public headerNavItems = [
    {icon: faPlus, text: "Add movie"},
    {icon: faUser, text: "About"},
    {icon: faDollarSign, text: "Pricing"},
    {icon: faBlog, text: "Blog"},
  ]

  constructor() { }

  public isColapse () {
    if (this.showMenu) {
      this.showMenu = false;
    } else { 
      this.showMenu = true;
    }
    return this.showMenu;
  }
}
