import React, { useState } from 'react';
import './App.css';
import Data from './components/Data';
import styled from 'styled-components';

const AppStyle = styled.div`
  top: 0;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: goldenrod;
`
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  border: 1px solid black;
  background-color: aqua;
  >li:hover{
    background-color: gold;
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
`
const Li = styled.li`
  padding: 8px;
  border: 1px solid grey;
  
`
const Select = styled.select`
  margin-left: 10px;
  background-color: aquamarine;
`





const initialData = [
  { name: 'Alice', age: 25, birthYear: 1999 },
  { name: 'Bolotbek', age: 30, birthYear: 1994 },
  { name: 'Nurlan', age: 35, birthYear: 1999 },
  { name: 'Beka', age: 28, birthYear: 1996 },
  { name: 'Elzina', age: 22, birthYear: 2002 },
  { name: 'Aziz', age: 40, birthYear: 1984 },
  { name: 'Azamat', age: 32, birthYear: 1992 },
  { name: 'Asan', age: 27, birthYear: 1997 },
  { name: 'Ivan', age: 26, birthYear: 1998 },
  { name: 'Nursultan', age: 29, birthYear: 1999 },
  { name: 'Nursultan', age: 29, : 1989 },
];

function App() {
  const [selectedYear, setSelectedYear] = useState('all');

  
  const years = [...new Set(initialData.map((item )=>{
    return item.birthYear
  }))].sort((a,b)=> a - b)
    



  const filteredData = selectedYear === 'all'? initialData: initialData.filter((item )=>{ 
   return item.birthYear === parseInt(selectedYear)
  })
    
    

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  
  return (
    <AppStyle>
      <h1>Filter Data</h1>
      <label htmlFor="yearSelect">Select Year: </label>
      <Select  value={selectedYear} onChange={handleYearChange}>
        <option value="all">All</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </Select>
      <Ul>
        {filteredData.map((item, index) => (
          <Li key={index}>
            {item.name} - Age: {item.age} - Birth Year: {item.birthYear}
          </Li>
        ))}
      </Ul>
      <Data></Data>
      
    </AppStyle>
  );
}

export default App;

