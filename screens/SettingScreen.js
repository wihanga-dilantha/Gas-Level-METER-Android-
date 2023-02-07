import { View, Text, StyleSheet, _ScrollView, ScrollView } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import SwitchButton from "../components/SwitchButton";


function SettingsScreen(){

    const tankSize = ["2.3 kg", "5 kg", "12.5 kg", "37.5 kg"];
    const levelUnit = ["percentage", "Centimeters", "Inches" ];
    const updateRate = ["Every 6 hours", "Every 12 hours", "Once a day", " Every 3 days", "once a week" ];


    
return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollview}>
    
        
        <View style={styles.box}>
            <View>
                <Text style={styles.titleText}>Tank Size</Text>   
            </View>
            <View style={styles.bottomBox}>
                <Text style={styles.textNormal}>Select Size:</Text>
                <SelectDropdown
                
                 data={tankSize}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}

                    buttonStyle={styles.Button}      
                />
            </View>
        </View>

        <View style={styles.box}>
            <View>
                <Text style={styles.titleText}>Tank Level Unit</Text>
            </View>
            <View style={styles.bottomBox}>
                <Text style={styles.textNormal}>Select Unit:</Text>

                <SelectDropdown
                
                 data={levelUnit}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}

                    buttonStyle={styles.Button}   
                    
                />
            </View>
        </View>

        <View style={styles.box}>
            <View>
                <Text style={styles.titleText}>Notification</Text>
            </View>
            <View style={styles.bottomBox}>
                <View>
                <Text style={styles.textNormalL}>Gas Leakage Notification </Text>
                </View>
                
                
                <View style={styles.buttonBox}>
                <SwitchButton/>
                </View>
            </View>
            <View style={styles.bottomBox}>
                <View>
                <Text style={styles.textNormalL}>Usage Warning Notification </Text>
                </View>

                <View style={styles.buttonBox}>
                <SwitchButton/>
                </View>
            </View>
        </View>
        <View style={styles.box}>
            <View>
                <Text style={styles.titleText}>Update Rate</Text>
            </View>
            <View style={styles.bottomBox}>
                <Text style={styles.textNormal}>Select Time:</Text>
                <SelectDropdown
                
                 data={updateRate}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}

                    buttonStyle={styles.Button}   
                    
                />
            </View>
        </View>
        
        
    
    </ScrollView>
    </View>
);

}

 
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        width:"100%",
        backgroundColor: 'white',
        alignItems: 'center',
      },
    box:{
        margin:5,
        width:'95%',
        height: 200,
        padding: 10,
        alignItems:"center",
        backgroundColor:'ff1',

    },
    titleText:{
        marginTop:15,
        fontSize:18,
        fontWeight:"bold",
        color:'black',    
    },
    bottomBox:{
        flex:1,
        flexDirection: "row",
        width: '100%',
        alignItems:"flex-start",
    },
    textNormal:{
        marginTop:5,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        fontSize:16,
        fontWeight:"normal",
        color:'black',
    },
    Button:{
        marginTop:10,
        width: '50%',
        height: 30,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    textNormalL:{
        marginTop:5,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:16,
        fontSize:16,
        fontWeight:"normal",
        color:'black',
    },
    buttonBox:{
        flex: 1,
        alignContent:"flex-start",
        width:'40%',
    },
    scrollview:{
        backgroundColor:'white',
        width:'95%'
    }
    
    
});
