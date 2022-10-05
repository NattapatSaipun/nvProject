import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
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
const DetailScreen = ({ navigation, route }) => {
    const { id, title } = route.params;

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: title
        }, [navigation, title])
    })

    const getData = async (id) => {
        try {
            setLoading(true);
            const res = await axios.get('https://api.codingthailand.com/api/course/' + id);
            console.log(res.data.data);
            // alert(JSON.stringify(res.data.data))
            setDetail(res.data.data);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error); //set erorr ไปที่ state ของ error ว่าเกิดจาก axios หรือ  server
        }
    };

    useEffect(() => {
        getData(id);
    }, [id]);

    if (loading === true) {
        return (
            <View>
                <ActivityIndicator color='#f4511e' size='large' />
            </View>
        )
    }
    if (error) {//ถ้ามี error จะ return ui ต่อไปนี้กลับไป
        return (
          <View>
            <Text>{error.message}</Text>
            <Text>เกิดข้อผิดพลาด ไม่ส่มารถติดต่อกับ server ได้</Text>
          </View>
        )
      }
    const _onRefresh = (id) => {
        getData();
      }
    
      const _renderItem = ({ item,index }) => {
      
        return (
    
         
              
              <View style={{ flex: 1, flexDirection: 'row',margin: 5 }}>
                <Text style={styles.thumbnail}>{index + 1}</Text>
                <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.ch_title}</Text>
                  <Text style={styles.detail}>{item.ch_dateadd}</Text>
                </View>
                </View>
              </View>
    
           
        );
      };

    return (
        <View>
            <View style={styles.dataContainer}>
                <FlatList
                    data={detail}
                    keyExtractor={(item, index) => item.ch_id.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={_renderItem}
                    refreshing={loading}
                 onRefresh = {_onRefresh}
                />
            </View>
        </View>
    )
}

export default DetailScreen

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
        flex: 1
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
      addButtonStyle:{
        width:'100%',
        marginBottom:'15'
      }
})