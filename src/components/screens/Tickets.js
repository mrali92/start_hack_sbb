import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList } from "react-native"
import { SmallTitleBar, TicketCell } from '../presentation/index';


const tickets = [{"price": "CHF 5", "time": "19. Mar 16:00 - 21:00", "station": "Bern Bümpliz Süd", "done": false},{"price": "CHF 5", "time": "18. Mar 16:00 - 21:00", "station": "Bern Bümpliz Süd", "done": true},{"price": "CHF 5", "time": "17. Mar 16:00 - 21:00", "station": "Bern Bümpliz Süd", "done": true},{"price": "CHF 5", "time": "16. Mar 16:00 - 21:00", "station": "Bern Bümpliz Süd", "done": true}]

function Tickets({props, navigation}) {

  function Item({item}) {
    return (
        <TicketCell
          price={item.price}
          time={item.time}
          station={item.station}
          done={item.done}
        />
    );
  };


    return(
        <SafeAreaView style={{flex: 1}}>
          <SmallTitleBar title="Tickets"/>
          <FlatList
          data={tickets} 
          renderItem={({item}) => <Item item={item}/>}
          keyExtractor={(item, index) => index.toString()}
          style={{ height: "100%" }}
          />
        </SafeAreaView>
    )
}

export default Tickets;