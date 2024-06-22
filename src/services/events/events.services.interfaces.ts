import {Event} from '../services.domain';
import {ServiceResponse} from '../services.interfaces';

export interface EventsServiceResponse extends ServiceResponse {
  data: Array<Event>;
}
