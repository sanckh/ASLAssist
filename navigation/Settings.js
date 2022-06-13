import React from 'react';
import { SafeAreaView, View, StyleSheet, Component, Text, Image} from 'react-native';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { TouchableRipple, Switch, useTheme, Divider } from 'react-native-paper';
import {AuthContext} from '../components/context'

import {List} from 'react-native-paper'
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';


export default function Settings({navigation}) {

  const {toggleTheme} = React.useContext(AuthContext);
  const paperTheme = useTheme();

        return (
          <View>
              <View style = {styles.header}>
              <Header>Settings</Header>
              </View>
            <View>
              <List.Section
                borderColor= 'black'
              >
                <List.Subheader>General</List.Subheader>
                <TouchableRipple onPress={() => {toggleTheme()}}>
                <List.Item title = "Dark Mode" 
                left = {() => <List.Icon icon="moon-waning-crescent" />}
                right = {() => <Switch value = {paperTheme.dark}/>}
                description = "Toggle Dark Mode" 
                />
                </TouchableRipple>
                <TouchableRipple
                  onPress = { () => navigation.navigate('AboutScreen')}>
                <List.Item title = "About" 
                left = {() => <List.Icon icon="information" />} 
                />
                </TouchableRipple>
              </List.Section>
              <Divider/>
              <List.Section>
                <List.Subheader>Account</List.Subheader>
                <TouchableRipple
                  onPress={() => navigation.navigate('ResetPasswordScreen')}
                  >
                <List.Item title = "Reset Password" 
                left = {() => <List.Icon icon="lock-reset" />}
                description = "" 
                />
                </TouchableRipple>
                <TouchableRipple
                onPress = { () => {
                  navigation.reset({
                    routes: [{ name: 'StartScreen'}],
                  })
                }}>
                <List.Item title = "Logout" 
                left = {() => <List.Icon icon="logout" />} 
                />
                </TouchableRipple>
              </List.Section>
              <Divider/>
            </View>
          </View>
        );
      }

    const styles = StyleSheet.create({
      imageStyle:{
        marginLeft:15,
        marginRight:20,
        alignSelf:'center',
        width:20,
        height:24,
        justifyContent:'center'
      },
      header:{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      iconStyle: {
        alignSelf: 'center', 
        padding: 5, 
        marginRight: 10
      }
    });
