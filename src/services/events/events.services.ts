import {useCallback} from 'react';
import {EventsServiceResponse} from './events.services.interfaces';

export const useEventsService = () => {
  const get = useCallback(async (): Promise<EventsServiceResponse> => {
    return {
      status: 'SUCCESS',
      data: [
        {
          id: 1,
          date: '08/11/2024 20:00hs',
          place: 'Distrito 7',
          title: 'Fiaca en el D7',
        },
        {
          id: 1,
          date: '08/08/2024 20:00hs',
          place: 'Harlem pub',
          title: 'Fiaca en Harlem pub',
        },
      ],
    };
  }, []);

  return {get};
};
