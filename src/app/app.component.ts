import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sciaku-courses';
  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  token: any = ''
  ngOnInit(): void {
    
    // this._title.setTitle(this.title);
    // this._meta.updateTag({name:'keywords',content:'Angular Blog,Blogger'});
    // this._meta.updateTag({name:'description',content:'Angular Blog,Blogger'});
  }
  onActivate(event: any) {
    // window.scroll(0,0);
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
