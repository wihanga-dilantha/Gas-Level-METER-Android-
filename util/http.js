import axios from "axios";


const LINK='https://lpgmeter-bd74b-default-rtdb.firebaseio.com';


export async function getCapacity() {
    const response = await axios.get(LINK + '/dataFile.json');
    const capacitydata = [];
  
    for (const key in response.data) {
      const capacityObj = {
        capacity: response.data[key].capacity,
      };
      capacitydata.push(capacityObj);

    }
    return (capacitydata);
  }

  export async function getDeviceData(){
    const response = await axios.get(LINK + '/deviceData.json');
    const deviceData=[];

    for(const key in response.data){
      const dataObj = {
        id: response.data[key].id,
        replaced: response.data[key].replaced

      };

      deviceData.push(dataObj);
    }
    return (deviceData);
  }