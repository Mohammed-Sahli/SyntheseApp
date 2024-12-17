import { Routes } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { User } from './models/User';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { UserCardComponentComponent } from './user-card-component/user-card-component.component';

export const routes: Routes = [
    {
        path: 'header-component//', //Chemin racine
        component: HeaderComponentComponent,
        pathMatch:'full' //Redirection ou correspondance complète pour la racine
    },
    {
        path:'footer-component/',
        component:FooterComponentComponent,
        pathMatch:'full'
    },
    {
        path:'./models/',
        component: User,
        pathMatch:'full' 
    },
    {
        path:'./',
        component: UsersComponent,
        pathMatch:'full'   
    },
    {
        path:'./',
        component: AboutComponent,
        pathMatch:'full'   
    },
    {
        path:'./',
        component: UserCardComponentComponent,
        pathMatch:'full'   
    }
];
