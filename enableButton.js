function enableButton(b1, b2) {
    // Get the button elements
    var buttonToClick = document.getElementById(b1);
    var buttonToEnable = document.getElementById(b2);
    
    // Add event listener to the first button
    buttonToClick.addEventListener('click', function() {
      // Enable the second button
      buttonToEnable.disabled = false;
    });
}
  
  


import React, { useState } from 'react';
import { View, Button } from 'react-native';

const App = () => {
  const [button2Enabled, setButton2Enabled] = useState(false);

  const enableButton2 = () => {
    setButton2Enabled(true);
  };

  return (
    <View>
      <Button title="Button 1" onPress={enableButton2} />
      <Button title="Button 2" onPress={() => console.log("Button 2 clicked")} disabled={!button2Enabled} />
    </View>
  );
};

export default App;
