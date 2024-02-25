import { Routes } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { MainComponent } from './main/main/main.component';
import { WorkComponent } from './work/work/work.component';
import { BrowseComponent } from './browse/browse/browse.component';
import { TagComponent } from './tag/tag/tag.component';

export const routes: Routes = [
    {
        path: 'login',
        component: SearchComponent,
    },
    {
        path: '',
        component: MainComponent,
        children: [
            // {
            //     path: '',
            //     component: BrowseComponent,
            // },
            {
                path: 'search',
                component: SearchComponent,
            },
            {
                path: 'work/:id',
                component: WorkComponent,
            },
            {
                path: 'tag/:id',
                component: TagComponent,
            },
        ]
    },
];
