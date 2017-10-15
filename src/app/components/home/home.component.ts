import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
} from '@angular/router';
import {
  SharedService
} from '../../common/services/shared.service';
import {
  Technology
} from '../../common/interfaces/technology';
import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'nx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('*=>enter', [
        query('.technology', style({
          opacity: 0
        }), {
          optional: true
        }),

        query('.technology', stagger('300ms', [

          // animate('1s ease',style({opacity:1, transform: 'rotate(360deg)'}))

          animate('.5s', keyframes([
            style({
              opacity: 0,
              transform: 'translateY(-20px)',
              offset: 0
            }),
            style({
              opacity: .5,
              transform: 'translateY(50px)',
              offset: 0.3
            }),
            style({
              opacity: 1,
              transform: 'translateY(0)',
              offset: 1
            }),
          ]))
        ]), {
          optional: true
        })
      ])

    ])
  ]
})
export class HomeComponent implements OnInit {

  state: string;
  technolgoies: Technology[];
  items: any[];
  technologyDivHeight:number;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    // if (window.scrollY > window.innerHeight - 60) {
    //   this.rd.addClass(this.navEle.nativeElement, "fixed-header");
    // } else {
    //   this.rd.removeClass(this.navEle.nativeElement, "fixed-header");
    // }
  }

  //variables
  sideNavBar: boolean = false;

  constructor(private rd: Renderer2,
    private router: Router,
    // private route: ActivatedRouteSnapshot,
    // private state: RouterStateSnapshot,
    private sharedService: SharedService) {
    this.state = "enter";

    this.technologyDivHeight = (window.innerHeight - 50) / 4;

    console.log(this.technologyDivHeight);

    this.technolgoies = [{
      name: "Angular 4.x",
      navigationUrl: 'abc',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg'
    }, {
      name: "Rxjs",
      navigationUrl: 'abc',
      imageUrl: 'http://codewinds.com/assets/article/reactivex.png'
    }, {
      name: "Angular CLI",
      navigationUrl: 'abc',
      imageUrl: 'https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png'
    }, {
      name: "Webpack",
      navigationUrl: 'abc',
      imageUrl: 'https://frontendmasters.com/assets/webpack.png'
    }, {
      name: "Typescript",
      navigationUrl: 'abc',
      imageUrl: 'https://camo.githubusercontent.com/5e511d0a0f2dcd66a843017402001844861979a4/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67'
    }, {
      name: "Github",
      navigationUrl: 'abc',
      imageUrl: 'https://image.flaticon.com/icons/svg/25/25231.svg'
    }, {
      name: "StackOverFlow",
      navigationUrl: 'abc',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Stackoverflow_icon.png'
    }, {
      name: "HTML,JS,CSS",
      navigationUrl: 'abc',
      imageUrl: 'http://www.howardism.org/Technical/Learning/web-trifecta.svg'
    }, {
      name: "node",
      navigationUrl: 'abc',
      imageUrl: 'https://openfin.co/wp-content/uploads/2015/05/nodejs_logo.png'
    }, {
      name: "scss",
      navigationUrl: 'abc',
      imageUrl: 'http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png'
    }, {
      name: "bootstrap",
      navigationUrl: 'abc',
      imageUrl: 'http://withinpixels.com/assets/images/fuse/bootstrap.png'
    }, {
      name: "jasmine",
      navigationUrl: 'abc',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_jasmine.svg/1028px-Logo_jasmine.svg.png'
    }, {
      name: "karma",
      navigationUrl: 'abc',
      imageUrl: 'https://avatars3.githubusercontent.com/u/3284117?v=4&s=400'
    }, {
      name: ".net",
      navigationUrl: 'abc',
      imageUrl: 'https://www.santiagomontesinos.com/content/images/2016/03/netlogo.png'
    }, {
      name: "Gulp",
      navigationUrl: 'abc',
      imageUrl: 'http://www.unixstickers.com/image/data/stickers/gulpjs/gulp.sh.png'
    }, {
      name: "Redux",
      navigationUrl: 'abc',
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png'
    }, {
      name: "VSC",
      navigationUrl: 'abc',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png'
    }, {
      name: "npm",
      navigationUrl: 'abc',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/640px-Npm-logo.svg.png'
    }, {
      name: "skype",
      navigationUrl: 'abc',
      imageUrl: 'http://pngimg.com/uploads/skype/skype_PNG15.png'
    }, {
      name: "Hangout",
      navigationUrl: 'abc',
      imageUrl: 'https://vignette.wikia.nocookie.net/google/images/3/31/Hangouts-Logo.png/revision/latest?cb=20150102181833'
    }, {
      name: "Paypal ",
      navigationUrl: 'abc',
      imageUrl: 'http://freevectorlogo.net/wp-content/uploads/2016/10/paypal-logo-vector-400x400.png'
    }, {
      name: "gmail",
      navigationUrl: 'abc',
      imageUrl: 'https://image.flaticon.com/icons/png/512/281/281769.png'
    }, {
      name: "zoom",
      navigationUrl: 'abc',
      imageUrl: 'http://appyhour.io/wp-content/uploads/2015/04/zoom-logo.png'
    }, {
      name: "teamviewer",
      navigationUrl: 'abc',
      imageUrl: 'https://cdn2.iconfinder.com/data/icons/pack2-baco-flurry-icons-style/512/Team_Viewer.png'
    }, ]


   
  }

  ngOnInit() {


  }

  ngAfterViewInit() {

  }


 



}
