import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button1 from './Buttons/Button1';
import Button2 from './Buttons/Button2';
import Button3 from './Buttons/Button3';

const ParentComponent = () => {
  const [button2Enabled, setButton2Enabled] = useState(false);
  const [button3Enabled, setButton3Enabled] = useState(false);

  const enableButton2 = () => {
    setButton2Enabled(true);
  };

  const enableButton3 = () => {
    setButton3Enabled(true);
  };

  return (
    <View style={styles.container}>
      <Button1 enableButton2={enableButton2} />
      <Button2 enableButton3={enableButton3} disabled={!button2Enabled} />
      <Button3 disabled={!button3Enabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ParentComponent;
