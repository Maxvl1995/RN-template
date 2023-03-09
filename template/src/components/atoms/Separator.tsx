import React from 'react';
import {View} from 'react-native';

interface ISeparatorProps {
  height?: number;
  width?: number;
}

const Separator: React.FC<ISeparatorProps> = ({height = 5, width = 5}) => {
  return <View style={{height, width}} />;
};

export default React.memo(Separator);
