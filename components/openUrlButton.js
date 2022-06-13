import React, {useCallback} from 'react'
import {Alert, Linking, View} from 'react-native'
import Button from './Button';

//notes: in order to use this component in another screen, you have to set new variable with website
/**
 * 
 * example: 
 * const supported = 'google.com'
 * <Button url = {supported}>
 * Click Me
 * </Button>
 */

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button
        mode = "contained"
        title={children} 
        onPress={handlePress}> Click for more info</Button>;
  };

  export default OpenURLButton