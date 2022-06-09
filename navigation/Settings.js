import React from 'react';
import { SafeAreaView, View, StyleSheet, Component, Text, Image} from 'react-native';
import Header from '../components/Header';
import { theme } from '../core/theme';
import SettingsList from 'react-native-settings-list';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableRipple, Switch, useTheme, Divider } from 'react-native-paper';

import {List} from 'react-native-paper'


export default function Settings() {
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
                <List.Item title = "Dark Mode" 
                left = {() => <Ionicons style = {styles.iconStyle} name = 'moon' size = {28} />}
                right = {() => <Switch/>}
                description = "Toggle Dark Mode" 
                />
                <List.Item title = "About" 
                left = {() => <Ionicons style = {styles.iconStyle} name = 'list' size = {28} />} 
                />
              </List.Section>
              <Divider />
              <List.Section
                borderColor= 'black'
              >
                <List.Subheader>General</List.Subheader>
                <List.Item title = "Dark Mode" 
                left = {() => <Ionicons style = {styles.iconStyle} name = 'moon' size = {28} />}
                right = {() => <Switch/>}
                description = "Toggle Dark Mode" 
                />
                <List.Item title = "About" 
                left = {() => <Ionicons style = {styles.iconStyle} name = 'list' size = {28} />} 
                />
              </List.Section>
              <Divider />
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
