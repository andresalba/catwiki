import './App.css';
import React, { useState}  from 'react';


function App() {
  const [url, setUrl] = useState('')
  function fetch_data(){
      fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
          if(res.ok){
              return res.json();
          }
          throw new Error('Request Failed');
      },networkError=> console.log(networkError.message)
      ).then(jsonRes=>{
          //console.log(jsonRes[0])
          setUrl(jsonRes[0].url)
      })
  }
    return (
      <div className="cont">
	      <div className="cont__item1">uno</div>
        <div className="cont__item2">dos
          <div class="cont__item2__nested1">
            <img id="catlogo" src="/img/CatwikiLogo-wht.png" alt=""/>
          </div>
        </div>  
	      <div className="cont__item3">tres
          <div class="cont__item3__nested1">66+ Breeds For you to discover</div>
        </div>
        <div className="cont__item4">cuatro</div>
        <div className="cont__item5">cinco</div>
      </div>
    );
}
export default App;