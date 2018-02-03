import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base'

class Follow extends Component {
  static navigationOptions = {
    // tabBarLabel: 'Stamp',
    tabBarIcon: ({ tintColor }) => (
      // <Icon name="ios-person" size={30} color={tintColor} />
       <Icon name='star' style={{fontSize: 20, color: tintColor }}/>
    ),
    title: 'Follow',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#119DA4'
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#ffffff' }}>
        <StatusBar
          backgroundColor={'#119DA4'}
          barStyle="light-content"
          animated
        />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.ytimg.com/vi/_JLoyyJEdT8/maxresdefault.jpg' }} />
              </Left>
              <Body>
                <Text>ร้าน ชานะครับ</Text>
                <Text note>มีโปรโมชั่นใหม่น่าสุด. .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTz4rFnzXMPFkC3gZAT_oJpr43Oy3n2ELB7hiwm9rCObmBx3E' }} />
              </Left>
              <Body>
                <Text>ร้าน ขนมบังคุณโย</Text>
                <Text note>ขนมปังหอมใหม่จากเตา ชื้อวันนี้แลกฟรีสแตมป์ 5 ดวง. .</Text>
              </Body>
              <Right>
                <Text note>10:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Follow
