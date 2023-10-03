import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlid]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert(err)
    })
  },[])
  const opts= {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie= (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }else{
        console.log('Trailer not available');
      }
    })
  } 

  return (
    <div className='row'>
        <h2>{props.title  }</h2>
        <div className="posters">
            {movies.map((obj)=>
               <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )}
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
        
    </div>
  )
}

export default RowPost