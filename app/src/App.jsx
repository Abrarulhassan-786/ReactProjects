import logo from './logo.svg';
import './App.css';
//we import useState variable
import { useState, useEffect } from 'react';
import images from './menu.gif'
import moment from 'moment';
//after installation axios 
//use axios liabrary 
//new way to import package 
import axios from 'axios';

//Old method
// const axios = require('axios').default;
//we used a function and Js functionality
function App() {
  const [newsData, setData] = useState([]);
  const [query, setquery] = useState("");
  const [isLoading, setloading] = useState(false);
  useEffect(()=>{
    function getTrendinfNews() {
      const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: { safeSearch: 'Off', textFormat: 'Raw' },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '31ed4d8ac5msh10c9882ae682e93p1a4bc9jsnc9507db13d30',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
  
      axios.request(options).then(function (response) {
        console.log(response.data.value);
        setData(response.data.value)
      }).catch(function (error) {
        console.error(error);
      });
    }
    getTrendinfNews();
  },[])

  const getNews = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: { q: query, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '31ed4d8ac5msh10c9882ae682e93p1a4bc9jsnc9507db13d30',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    setloading(true);
    axios.request(options).then(function (response) {
      setloading(false);
      console.log(response.data.value);
      setData(response.data.value)
    }).catch(function (error) {
      setloading(false);
      console.error(error);
    });
  }
  return (
    <div>
      <div className='headerContainer'>
        <div className='heading'>
          <h1>ASP NEWS</h1>
        </div>
        <div className='navbar'>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className='menu'>
          <img className='menuStyle' src={images} alt="image not found" />
        </div>
      </div>
      <form onSubmit={getNews}>
        <div className='InputField'>
          <input type="text" required minlength="4" maxlength="10" placeholder="SEARCH NEWS " onChange={(e) => {
            setquery(e.target.value)
          }} />
          <button className='btnFa' type='submit'><i class="fa fa-search"></i></button>
          {(isLoading) ? <div className='loader' id='load'></div> : ""}
        </div>
      </form>
      <div className='Container'>
        {newsData.map(eachPost => (<div key={eachPost.name}>
          <div className='containerpost'>
            <div className='imageCont'>
              <img src={eachPost?.image?.thumbnail?.contentUrl.replace("&pid=News", "").replace("pid=News&", "").replace("pid=News")} alt="Image not found" />
            </div>
            <div className='namedes'>
              <h3>🙋‍♂️{eachPost?.name}</h3>
            </div>
            <div className='descriptionpost'>
              <p>{eachPost?.description}</p>
            </div>
            <div className='publishedPost'>
              <h4>Published: {moment(eachPost?.datePublished).format('MMMM Do YYYY, h:mm:ss a')}</h4>
            </div>
            <div className='btncontainer'>
              <button type='button' className='btnMore'><a href={eachPost?.url} target="_blank" >Read More</a></button>
            </div>
          </div>
        </div>
        )
        )}
      </div>
      <div className='footer'>
        <div className='socialIcon'>
          <a href="https://web.facebook.com/profile.php?id=100081043041073" target="_blank" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/in/abrar-ul-hassan-a08a601a5/" target="_blank" class="fa fa-linkedin"></a>
          <a href="https://www.youtube.com/channel/UC59YH4QlzfuOUlHgKBOVqaA" target="_blank" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="https://github.com/Abrar-Hassan-Programming" target="_blank" class="fa fa-github"></a>
        </div>
        <div className='footerTitlt'>
          <p className='changeColor'>&copy; By Abrar ul Hassan 2022 - ASP NEWS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
