import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import {List, ListItem} from 'react-native-elements'
import roundAvatar from "react-native-vector-icons/MaterialIcons";

class UserInfo extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading:false,
      dataSource: [],
      error: null
    };
    this.arrayholder = [];
  }
  // state = {
  //   data: []
  // };

///from: https://www.youtube.com/watch?v=IuYo009yc8w
  componentDidMount() {
    this.makeRemoteRequest();
  }

    makeRemoteRequest = () => {
      const url = `https://randomuser.me/api/?results=100`;
      this.setState({ loading: true });

      fetch(url)
      .then(res => res.json())
          .then(res => {
            
              this.setState({
                dataSource: res.results,
                error: res.error || null,
                loading: false,
              });
              this.arrayholder = res.results;  
          })
        .catch(error => {
        this.setState({error, loading: false})
        });   
    };
    
///from: https://www.youtube.com/watch?v=IuYo009yc8w
  // fetchData = async () => {
  //  const repsonse = await fetch('https://randomuser.me/api/?results=1');
  //  const json = await repsonse.json();
  //  this.setState({data: json.results});
  // }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{marginTop:80}}>
            <ListItem 
              containerStyle={{}}
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              //subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
              hideChevron= {true}
            />
            </View>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          //ListHeaderComponent={this.renderHeader}
        />
      </List>
    );
  }


}

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

