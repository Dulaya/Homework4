import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const style = {
  container: {
    paddingHorizontal: 10, 
    paddingVertical: 15,
    backgroundColor: '#ff0000', //color
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
};


export const Button = ({...props}) => {

    console.log(props);

    const {color, height, width, title} = props;

    let customWidth, customHeight;

    // Set minimum & maximum button customHeight
    if (height <= 10) customHeight = 10;
    else if (height >= 50) customHeight = 50; 
    else customHeight = height;

    // Set minimum & maximum button customWidth
    if (width <= 25) customWidth = 25;
    else if (width >= 100) customWidth = 100; 
    else customWidth = width;

  return (
    <TouchableOpacity style={[style.container, {paddingVertical: customHeight}, {paddingHorizontal: customWidth}, {backgroundColor: color}]}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};