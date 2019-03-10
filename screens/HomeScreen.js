import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

class ListItem extends React.PureComponent {
  onPress = () => {
    const { id, onPressItem } = this.props;
    onPressItem(id);
  };

  render() {
    const { selected, title } = this.props;
    const textColor = selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.row}>
        <View>
          <Text style={[styles.rowText, { color: textColor }]}>{ title }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.PureComponent {
  state = { selected: (new Map()) };

  // eslint-disable-next-line no-unused-vars
  keyExtractor = (item, index) => item.id;

  onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  };

  renderItem = ({ item }) => {
    const { selected } = this.state;
    return (
      <ListItem
        id={item.id}
        onPressItem={this.onPressItem}
        selected={!!selected.get(item.id)}
        title={item.title}
      />
    );
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'List View',
  };

  render() {

    const data = [
      { id: '1', title: 'Hello' },
      { id: '2', title: 'World' },
      { id: '3', title: '!' },
    ];

    return (
      <View style={styles.container}>
        <MultiSelectList data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'center',
    fontSize: 20,
    height: 50,
    padding: 5,
    borderColor: '#d8d8ff',
    borderBottomWidth: 1
  },
  rowText: {
    fontSize: 20,
  },
});
