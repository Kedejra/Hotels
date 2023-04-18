import { Navigate} from 'react-router-dom';
import './videos/Videos.css'
// import Bali from './videos/bali.mp4'
// import Towers from './videos/towers.mp4'
// import Ruins from './videos/ruins.mp4'
import { useEffect, useState } from 'react';
import { createClient } from 'pexels';

 const PEX_KEY= 'yZrZoobZKfdT82AjaCJuyk0sKiYRx4qlovblCvSUqT6v2dQ1soNjwidv';
 const client = createClient(PEX_KEY);




function Home()
{
const [Ruins, setRuins]=useState();
const [Towers, setTowers]=useState();
const [Bali, setBali]=useState();

useEffect(()=> {
    
    client.collections.media({id:'gyhjukq'}).then(data => {
        setRuins(data.media[0].video_files[3].link);
        
        setTowers(data.media[1].video_files[3].link);
        setBali(data.media[2].video_files[3].link);
    });
})



const slides=[
    {video: Bali,
         Line1:'Take the trip of a lifetime',
         Line2:' Make Memories that will last forever',
         Line3: 'Let Us Help You find your next escape'},
    {video: Towers, 
        Line1:'Whatever the trip',
        Line2: 'Our Hotels have just what you need',
        Line3:' We will get you there'
        },
    {video:Ruins, 
        Line1:'Getting to where you want to go',
        Line2:' Without The Hassle',
        Line3: 'We know How'}
];

    const [indx,setIndx]= useState(0)
    function Previous()
    {
        const isFirstSlide=indx===0;
        const newIndx= isFirstSlide ? slides.length-1: indx-1;
        setIndx(newIndx);
    }

    function Next()
    {
        const isLastSlide=indx===slides.length-1;
        const newIndx= isLastSlide? 0: indx+1;
        setIndx(newIndx);
    }

    return(
        <>
        <section className="home">
            <video src={slides[indx].video} autoPlay loop muted />
           
           {console.log(slides[indx].video)}
            <div className="content">
            <div>
                {slides[indx].Line1}
                <br/>
                {slides[indx].Line2}
                <p>
                    {slides[indx].Line3}
                </p>
            </div>
            </div>
            <div className='arrows'>
            <div id='arrow-left'><i className="fas fa-1.5x fa-arrow-left" onClick={Previous}></i></div>
            <div id='arrow-right'><i className="fas fa-1.5x fa-arrow-right" onClick={Next}></i></div>
            </div>
        </section>
        
        
        </>
    )
}


export default Home;