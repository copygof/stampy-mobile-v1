import React, { Component } from 'react'
import { Image, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Stamp extends Component {
  static navigationOptions = {
    // tabBarLabel: 'Stamp',
    tabBarIcon: ({ tintColor }) => (
      // <Icon name="ios-person" size={30} color={tintColor} />
       <Icon name='color-palette' style={{fontSize: 20, color: tintColor }}/>
    ),
    title: 'Stamp Cards',
    tabBarLabel: 'Stamp',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#F87060'
    }
  }
  render() {
    return (
      <Container style={{ paddingHorizontal: 5 }}>
        <StatusBar
          backgroundColor={'#F87060'}
          barStyle="light-content"
          animated
        />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTz4rFnzXMPFkC3gZAT_oJpr43Oy3n2ELB7hiwm9rCObmBx3E'}} />
                <Body>
                <Text>บัตรสะสมสแตมป์ ร้าน ขนมบังคุณโย</Text>
                <Text note>ขนมปังหอมใหม่จากเตา ชื้อวันนี้แลกฟรีสแตมป์ 5 ดวง. .</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/WS7jdYZomu0/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTz4rFnzXMPFkC3gZAT_oJpr43Oy3n2ELB7hiwm9rCObmBx3E'}} />
                <Body>
                <Text>บัตรสะสมสแตมป์ ร้าน ขนมบังคุณโย</Text>
                <Text note>ขนมปังหอมใหม่จากเตา ชื้อวันนี้แลกฟรีสแตมป์ 5 ดวง. .</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/WS7jdYZomu0/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTz4rFnzXMPFkC3gZAT_oJpr43Oy3n2ELB7hiwm9rCObmBx3E'}} />
                <Body>
                <Text>บัตรสะสมสแตมป์ ร้าน ขนมบังคุณโย</Text>
                <Text note>ขนมปังหอมใหม่จากเตา ชื้อวันนี้แลกฟรีสแตมป์ 5 ดวง. .</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/WS7jdYZomu0/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


export default Stamp
