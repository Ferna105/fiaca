import {useEventsService} from './events/events.services';

export const useServices = () => {
  const eventsService = useEventsService();

  return {eventsService};
};
