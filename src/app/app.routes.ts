import { Routes } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { MainComponent } from './main/main/main.component';
import { WorkComponent } from './work/work/work.component';

export const routes: Routes = [
    {
        path: 'login',
        component: SearchComponent,
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'search',
                component: SearchComponent,
            },
            {
                path: 'work/:id',
                component: WorkComponent,
            },
        ]
    },
];
