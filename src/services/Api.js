
import {AsyncStorage} from 'react-native';
class Api{
	constructor(table_name = ""){
		table_name = table_name
      	return{
        	getAllData:getAllData.bind(this),
        	setData:setData.bind(this),
        	getDataByDate:getDataByDate.bind(this)
        }
    }
}
var table_name = ""
const getAllData = async (callback) => {
  try {
    const value = await AsyncStorage.getItem(table_name);
    if (value !== null) {
      // We have data!!
      // console.log(value);
      // return JSON.parse(value)
      callback(JSON.parse(value))
    }
  } catch (error) {
  	callback(false)
    // Error retrieving data
  }
};
const getDataByDate = async (date,callback) => {
  // console.log("getDataByDate")
  // console.log(date)
  try {
    const value = await AsyncStorage.getItem(table_name);
    if (value !== null) {
      // We have data!!
      // console.log(value);
      // return JSON.parse(value)
      var data = JSON.parse(value)
      var data_array = []
      data.forEach((result)=>{
      		let re_date = result.date.replace(/ .*/,'');
      		console.log(re_date)
      		console.log(date)
      		if(re_date.toString() == date.toString()){
      			data_array.push(result)
      		}
      })
      callback(data_array)
    }
  } catch (error) {
  	callback(false)
    // Error retrieving data
  }
};
const setData = async (items) => {
  try {
    await AsyncStorage.setItem(table_name, JSON.stringify(items));
  } catch (error) {
    // Error saving data
  }
};

export default Api;