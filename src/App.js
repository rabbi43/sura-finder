import Home from './components/Home'
import {data} from './data.js'
import {useState,useEffect} from 'react'


export default function App(){
  
  // const [myData,setMyData] = useState(data);
  const [filteredData,setFilteredData] = useState(data);
  const [value,setValue] = useState('');
  
  const handleChange = (e)=>{
    setValue(e.target.value)
  }
  
  useEffect(()=>{
    const searchText = value.toLowerCase();
    let newData = data.filter(data=>{
      return data.name.toLowerCase().includes(searchText)
    })
    setFilteredData(newData);
  },[value])
  
  
  return(
    <>
      <form class="m-3 p-2">
        <input onChange={handleChange} class="form-control" type="text" value={value} placeholder="Search..."/>
      </form>
      <Home data={filteredData}/>
    </>
  );
}
