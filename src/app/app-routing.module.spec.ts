import {Router} from '@angular/Router';
import {appRoutes} from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
describe('routes',()=>{
    it('should contain /contact route',()=>{
       expect(appRoutes).toContain({path:'contact',component:ContactComponent}) 
    })
})