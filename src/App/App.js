
import './App.css';
import React, {useState} from 'react';
import Table from "../Table/Table";

function App({data}) {
  return (
      <>
        <Table data={data}/>
      </>
  )
}

export default App;
