import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

import axios from "axios";

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "#C8C8C8",
      }}
    />
  );
};
const ProductScreen = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    console.log(res.data.data);
    // alert(JSON.stringify(res.data.data))
    setProduct(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = ({ item }) => {
    let picture =
      item.picture !== null ? item.picture : "https://via.placeholeder.com/150";
    return (
    
        <View style={{flex:1,flexDirection:'row'}}>
      
            <Image
              resizeMethod="cover"
              source={{ uri: picture }}
              style={styles.thumbnail}
            />
         

          <View style={styles.dataContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        </View>
     
    );
  };

  return (
    <View style={styles.dataContainer}>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 50,
    height: 70,
    flex:1
  },
  dataContent: {
    flex: 4,
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
});
