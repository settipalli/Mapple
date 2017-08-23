import React, { Component } from 'react'
import {
  Container,    // over-arching container component for our view
  Header,       // wraps the JSX for the header portion of our side-menu
  Content,      // holds the content of the side-menu
  List,         // represents a list which holds the menu items that are listed as list-items within it
  ListItem,     // items inside the List
  Text,         // any-text
  View,
  Button
} from 'native-base'

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // array of objects - each of those objects would be the menu items of our side-menu
    // each object has two pices, title: menu-item-name and an event-hander like onPress
    let list = [
      {
        title: 'Match',
        onPress: () => {
          // we will use the 'navigator' passed in as properties
          // we use 'replace' in-place of push because we want 'Match' to be a root scene and we do not want
          // the user to be able to navigate backwards using the 'arrow' on the top-left
          this.props.navigator.replace("Match")   // 'Match' is the title of the scene that we want to render
        }
      },
      {
        title: 'History',
        onPress: () => {
          this.props.navigator.replace("History")
        }
      }
    ]

    return (
      <Container theme={this.props.theme}>
        <Header />
        <View>
          <List dataArray={list}
                renderRow={
                  (item) => <ListItem button onPress={item.onPress.bind(this)}>
                              <Text> {item.title} </Text>
                            </ListItem>
                }
          />
        </View>
      </Container>
    )
  }
}