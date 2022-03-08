import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/dumb/Button';

const App = () => {
  const styles = {
    divider: {
      marginVertical: 10,
    },
  };
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={styles.divider}/>
      {/*Recommend height from 10 to 50 and width from 20 to 100*/}
      <Button title="Small Button" height={10} width={20} color={'#0C1E7F'} />
      <View style={styles.divider} />
      <Button title="Medium Button" height={20} width={40
      } color={'#2666CF'} />
      <View style={styles.divider} />
      <Button title="Medium Button" height={30} width={60} color={'#FC4F4F'} />
      <View style={styles.divider} />
      <Button title="Medium Button" height={40} width={80} color={'#219F94'} />
      <View style={styles.divider} />
      <Button title="Large Button" height={50} width={100} color={'#FFAD60'} />
      <View style={styles.divider} />
    </SafeAreaView>
  );
};

export default App;