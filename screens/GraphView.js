import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MyLineChart = () => {


  const DATA=[98,96,92,86.81,78,78,77,64];
  
    return (
      <>{/*
        <Text style={styles.header}>Usage of last 7 days</Text>
        <LineChart
          data={{
            labels: ['7d ago', '6d ago','5d ago', '4d ago', '3d ago', '2d ago', '1d ago'],
            datasets: [
              {
                data:DATA,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={400}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 0,
          }}
        />
        */}
      </>
    );
  };
  
  
  const GraphView = () => {
    const estimate = Math.round(65/((3+5+5+4+6+5+7+4)/7));
    return (
     
          <View style={styles.container}>
            <View>
              <MyLineChart />
            </View>
            <View>
              <Text style={styles.bottomText}>Estimate Usage: {estimate} days more</Text>
            </View>
          </View>
    );
  };
  
  export default GraphView;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
    bottomText:{
      fontSize:18,
      fontWeight:'bold',

    }
  });
  
