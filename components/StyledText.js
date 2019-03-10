/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
