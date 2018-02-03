import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Separator, Icon, Left, Body, Right, Switch } from 'native-base';

class Settings extends Component {
  static navigationOptions = {
    // tabBarLabel: 'Stamp',
    tabBarIcon: ({ tintColor }) => (
      // <Icon name="ios-person" size={30} color={tintColor} />
       <Icon name='settings' style={{fontSize: 20, color: tintColor }}/>
    ),
    title: 'Settings',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#F05D5E'
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#ffffff' }}>
        <StatusBar
          backgroundColor={'#F05D5E'}
          barStyle="light-content"
          animated
        />
        <Content>
          <Separator bordered>
            <Text>My Profile</Text>
          </Separator>
          <ListItem >
            <Text>Change password</Text>
          </ListItem>
          <ListItem last>
            <Text>Switch to shop</Text>
          </ListItem>
          <Separator bordered>
            <Text>Notification</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Icon name="notifications" />
            </Left>
            <Body>
              <Text>Disable Notification</Text>
            </Body>
            <Right>
              <Switch value={true} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}


export default Settings
