
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";

import './App.css'

function App() {
  return(
    <div className='App'>
      <h1>weather forecast</h1>
      <Input/>

      <Button value="search"/>
      
      <Card/>
      <Button value="refresh"/>
    </div>
  );
};

export default App;
