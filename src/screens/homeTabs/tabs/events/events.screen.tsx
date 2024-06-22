import React, {useEffect, useState} from 'react';
import {HomeTabScreenProps} from '../../../../navigation/types';
import {Container, Text} from '../../../../components';
import {styles} from './events.styles';
import {useEventsService} from '../../../../services/events/events.services';
import {Event} from '../../../../services/services.domain';
import {View} from 'react-native';
import {Colors} from '../../../../utils/colors';
import {Sizing} from '../../../../utils/sizing';
import {Icon} from '../../../../components/Icon/icon.component';

export const Events = ({}: HomeTabScreenProps<'Events'>) => {
  const [events, setEvents] = useState<Array<Event>>([]);

  const {get} = useEventsService();

  useEffect(() => {
    get().then(result => {
      if (result.status === 'SUCCESS') {
        setEvents(result.data);
      }
    });
  }, [get]);

  return (
    <Container style={styles.container}>
      <View>
        {events.map((event, key) => {
          return (
            <View
              key={key}
              style={{
                backgroundColor: Colors.LightGray,
                padding: Sizing.L,
                marginBottom: Sizing.M,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="Calendar" size="L" color="Black" />
              <View style={{flex: 1, marginLeft: Sizing.M}}>
                <Text color="Black" fontWeight="bold">
                  {event.title}
                </Text>
                <Text color="Black" fontSize="S">
                  {event.place}, {event.date}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <Icon name="Fiaca" color="Yellow" />
    </Container>
  );
};
