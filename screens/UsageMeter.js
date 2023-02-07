import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { getCapacity, getDeviceData } from '../util/http';
//import { handleEmail } from '../util/mail';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};


//send email
function sendEmail() {
  handleEmail();
  console.log('handle Email');
}

//fetch caopactiy from firebase
function GetCapacityVal(){

  const [gotCapacity, setGotCapacity] = useState([]);
  
  useEffect(()=> {
    async function getExpenses() {
      const capacitydata = await getCapacity();
      const LENGTH= capacitydata.length-1;
      setGotCapacity(capacitydata[LENGTH].capacity); 
    }
    getExpenses();
    
  },[]);
  return (gotCapacity);
}




//fetch device data from firebase
function GetDeviceData(){

  const [gotDeviceData, setGotDeviceData] = useState([]);

  useEffect(()=> {
    async function getData() {
      const devicedata = await getDeviceData();
      const LENGTH= devicedata.length-1;
      setGotDeviceData(devicedata[LENGTH]); 
    }
    getData();
  },[]);
  return (gotDeviceData);
}






const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(100).then(() => setRefreshing(false));
  }, []);

    let screen='';
    
    const capacity = GetCapacityVal();
    const diviceDataPrint =  GetDeviceData();

    function SetCapacity(capacity) {

      if(capacity==0){
        screen =styles.cylinderCapacity0;  
      }
      else if(capacity<=5){
        Alert.alert('Capacity Less than 5% , Send Refill Email' ); 
      }

      else if(capacity<=10){
        screen =styles.cylinderCapacity;  
      }
      else if (capacity<=20) {
        screen =styles.cylinderCapacity1;
      }
      else if (capacity<=30) {
        screen =styles.cylinderCapacity2;
      }
      else if (capacity<=40) {
        screen =styles.cylinderCapacity3;
      }
      else if (capacity<=50) {
        screen =styles.cylinderCapacity4;
      }
      else if (capacity<=60) {
        screen =styles.cylinderCapacity5;
      }
      else if (capacity<=70) {
        screen =styles.cylinderCapacity6;
      }
      else if (capacity<=80) {
        screen =styles.cylinderCapacity7;
      }
      else if (capacity<=90) {
        screen =styles.cylinderCapacity8;
      }
      else if (capacity<=100) {
        screen =styles.cylinderCapacity9;
      }
    }


  
 
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
           
           
           <View style={styles.container} >

          
        <View style={styles.cylinderContainer} onPress={GetCapacityVal}> 
        <View style={styles.cylinderHead}>
          <View style={styles.cylinderHandle}></View>
        </View>
        <View style={styles.cylinderBody}>
        <View onPress={SetCapacity(capacity)}></View>
 
        <View style={screen}></View>
        </View>
        <View style={styles.cylinderStand}></View>
        <Text style={styles.capacityText}>Capacity: {capacity}%</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.detailText}>ID: {diviceDataPrint.id}</Text>
        <Text style={styles.detailText}>Last Replaced: {diviceDataPrint.replaced}</Text>
      
      </View>
        
    </View>
      </ScrollView>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont: {
    paddingTop:50,
  },
  
  cylinderContainer: {
    marginTop:'30%',
    flex: 4,
    alignItems: 'center',
    alignContent:'center',
  },
  cylinderBody: {
    width: 150,
    height:'60%',
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderRadius:40,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent:'flex-end'

  },
  cylinderHead: {
    width: 100,
    height:30,
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderRadius:1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent:'flex-end',
    backgroundColor:'#000000',

  },
  cylinderHandle: {
    width: 80,
    height:17,
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderRadius:1,
    borderColor: '#000000',

  },
  cylinderStand: {
    width: 130,
    height:20,
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderRadius:1,
    borderColor: '#000000',
    backgroundColor:'#000000',

  },
  cylinderCapacity: {
    width: 150,
    height:'10%',
    backgroundColor:'#fc0303',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity1: {
    width: 150,
    height:'20%',
    backgroundColor:'#fc2c03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',
    alignItems:'center',

  },
  cylinderCapacity2: {
    width: 150,
    height:'30%',
    backgroundColor:'#fc4903',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity3: {
    width: 150,
    height:'40%',
    backgroundColor:'#fc7b03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity4: {
    width: 150,
    height:'50%',
    backgroundColor:'#fccf03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity5: {
    width: 150,
    height:'60%',
    backgroundColor:'#fcf403',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity6: {
    width: 150,
    height:'70%',
    backgroundColor:'#dbfc03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity7: {
    width: 150,
    height:'80%',
    backgroundColor:'#c2fc03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity8: {
    width: 150,
    height:'90%',
    backgroundColor:'#77fc03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',

  },
  cylinderCapacity9: {
    width: 150,
    height:'100%',
    backgroundColor:'#13fc03',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#000000',
    alignItems:'center',

  },
  cylinderCapacity0: {
    width: 150,
    height:'0%',
    backgroundColor:'#ffffff',
    borderWidth: 2,
    borderRadius:25,
    borderColor: '#ffffff',
    alignItems:'center',

  },
  detailText:{
   color:'white',
   fontSize: 20,

   
  },
  bottomContainer:{
    width: '80%',
    padding: 10,
    backgroundColor: '#4c49cc',
    marginBottom: 10,
  },
  capacityText:{
    marginTop:15,
    paddingTop:15,
    fontSize:18,
    fontWeight:'bold',

  },
  refresh:{
    paddingTop: 40,
    paddingEnd:20,
    width:'100%',
    alignItems:'flex-end',
    
  },
});

export default App;