import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Purchase } from './components/purchase/purchase';



export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./components/home/home').then(m => m.Home)
         
    },
    { 
        path: 'purchase', 
        loadComponent: () => import('./components/purchase/purchase').then(m => m.Purchase)
         
    }
    
    
];
