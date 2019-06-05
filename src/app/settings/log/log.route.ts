import {ListLogComponent} from './list-log/list-log.component';
import {DeleteLogComponent} from './delete-log/delete-log.component';

export const LOG_ROUTES = [
  { path : '', component: ListLogComponent },
  { path : 'delete', component: DeleteLogComponent}
];
