import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navBarOpen=false;
  header_variable=false;
  home :boolean=true;
  about :boolean=false;
  project :boolean=false;
  skill :boolean=false;
  contact :boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleNavBar(){
    this.navBarOpen= !this.navBarOpen;
  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true;
    }
    else{
      this.header_variable=false;
    }
  }

  onNavigate(param :any){
    if(param == 'home'){
      this.home= true;
      this.about=false;
      this.project=false;
      this.skill=false;
      this.contact=false;
    }
    else if (param =='about'){
      this.home= false;
      this.about=true;
      this.project=false;
      this.skill=false;
      this.contact=false;

    }
    else if(param == 'project'){
      this.home= false;
      this.about=false;
      this.project=true;
      this.skill=false;
      this.contact=false;
    }
    else if (param =='skill'){
      this.home= false;
      this.about=false;
      this.project=false;
      this.skill=true;
      this.contact=false;

    }
    else if (param =='contact'){
      this.home= false;
      this.about=false;
      this.project=false;
      this.skill=false;
      this.contact=true;

    }

  }

}
