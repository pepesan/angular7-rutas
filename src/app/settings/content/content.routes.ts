import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';

export const CONTENT_ROUTES = [
  { path: 'settings/content', component: ListComponent },
  { path: 'settings/content/add', component: AddComponent }
];
