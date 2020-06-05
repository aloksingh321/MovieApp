
import React, { Component } from 'react';
import withRefetch from '../hoc/withRefetch';
import { getPopularMoviesUrl} from '../API/url'
import { getW780ImageUrl}   from '../API/url'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';



 class MovieVertical extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loading: true,
     
      serverData: [],
     
      fetching_from_server: false,
    };
    this.offset = 1,
    this.Movie= getPopularMoviesUrl(1)
    
  }

  componentDidMount() {
    fetch(this.Movie + this.offset)
     
      .then(response => response.json())
      .then(responseJson => {
      
        this.offset = this.offset + 1;
       
        this.setState({
          serverData: [...this.state.serverData, ...responseJson.results],
         
          loading: false,
         
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  loadMoreData = () => {
   
    this.setState({ fetching_from_server: true }, () => {
      fetch(this.Movie + this.offset)
      
        .then(response => response.json())
        .then(responseJson => {
        
          this.offset = this.offset + 1;
         
          this.setState({
            serverData: [...this.state.serverData, ...responseJson.results],
            fetching_from_server: false,
         
          });
        })
        .catch(error => {
          console.error(error);
        });
    });
  };

  renderFooter() {
    return (
      
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.loadMoreData}
      
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {this.state.fetching_from_server ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index}
            data={this.state.serverData}
            renderItem={({ item, index }) => (
              <View style={{flexDirection:'row'}}>
              <View style={styles.item}>
             { <Image source={{uri:getW780ImageUrl(item.backdrop_path)}} style={{width:100,height:100,margin:5,borderRadius:15}}/>} 
              </View>
              <View style={{justifyContent:'center'}}>
              <Text style={{color:'white',alignSelf:'center',fontStyle: 'italic',
      fontWeight: 'bold'}}>{item.original_title}</Text>
              <Text style={item.vote_average<5?{color:'red',alignSelf:'center', fontWeight: 'bold'}:item.vote_average>=5 &&item.vote_average<=7 ?{color:'yellow',alignSelf:'center', fontWeight: 'bold'}:item.vote_average>7?{color:'green',alignSelf:'center', fontWeight: 'bold'}:null}>{item.vote_average} User Score <Text style={{color:'white'}}> {item.release_date.substr(0,4)}</Text> </Text>
              </View>
              </View>
            )}
            // ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={({ id }) => id.toString()}
            ListFooterComponent={this.renderFooter.bind(this)}
            
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'black'
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default withRefetch(MovieVertical)