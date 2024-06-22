import React from 'react';
import {styles} from './home.styles';
import {Container} from '../../../../components';
import {HomeTabScreenProps} from '../../../../navigation/types';
import {Icon} from 'components/Icon/icon.component';
export const Home = ({}: HomeTabScreenProps<'Home'>) => {
  return (
    <Container style={styles.container}>
      <Icon name="Fiaca" color="Yellow" />
    </Container>
  );
};
