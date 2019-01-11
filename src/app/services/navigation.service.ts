import { Injectable } from '@angular/core';
import { faFilm, faTv, faBook, faUserCircle,faBars,faWindowClose, faUser, faPlus, faDollarSign, faBlog, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { NavItems } from '../store/models/nav-items';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  public showMenu:boolean = true;
  public faBars:IconDefinition = faBars;
  public faWindowClose:IconDefinition =faWindowClose;
  public items:NavItems[] = [
    {icon: faFilm, text: "Movies"},
    {icon: faTv, text: "TV Shows"},
    {icon: faBook, text: "My Library"},
    {icon: faUserCircle, text: "Support"}
  ]

  public headerNavItems:NavItems[] = [
    {icon: faPlus, text: "Add movie"},
    {icon: faUser, text: "About"},
    {icon: faDollarSign, text: "Pricing"},
    {icon: faBlog, text: "Blog"},
  ]

  constructor() { }

  public isCollapse ():boolean {
    if (this.showMenu) {
      this.showMenu = false;
    } else { 
      this.showMenu = true;
    }
    return this.showMenu;
  }
}
