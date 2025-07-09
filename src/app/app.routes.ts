import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Usuario } from './usuario/usuario';

export const routes: Routes = [
{
        path:"",
        component:Home,
        title:"Home"
    },
    {
        path:"contacto",
        component:Contact,
        title:"Contact"
    },
    {
        path:"usuarios",
        component:Usuario,
        title:"Users"
    }

];
