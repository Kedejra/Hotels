import '../App.css'
import {useEffect,useState} from 'react'



function TopPicks()
{
     const [location,setLocation] = useState();
     const [locationID,setLocationID] = useState();
     const [picks, setTopPicks]= useState([]);
     const [checkIn,setIn]= useState();
     const [checkOut,setOut]= useState();
     const currentDate = new Date().toJSON().slice(0, 10);
     let day = new Date();
     let nextDay = new Date(day);
     nextDay.setDate(day.getDate() + 1);
     const tomorrow= nextDay.toJSON().slice(0, 10);
    

    function chooseLocation(e)
    {
        e.preventDefault();

        const pickRand=Math.round(Math.random() * (5 - 1) + 1);
        let place;
        let ID;
        switch(pickRand)
        {
        case 1: {place='Toronto'; ID="4089";}
        break;
        case 2: {place='Berlin'; ID="536"};
        break;
        case 3: {place='Paris'; ID="2734"}
        break;
        case 4: {place='Jamaica'; ID="88";}
        break;
        case 5: {place='Rome'; ID="3023";}
        break;

        default: place='Dallas';
        }
        setLocation(place);
        setIn(currentDate.toString());
        setOut(tomorrow.toString());
        setLocationID(ID);
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '2b3727760cmsh2708e727198cbf1p188792jsn4f3e2bf2a412',
        //         'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
        //     }
        // };
            
            // fetch(`https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${location}&domain=AE`, options)
            //     .then(response => response.json())
            //     .then(response => {
            //         setLocationID(response.data[0].gaiaId)}
            //         )
            //     .catch(err => console.error(err));
    }

    useEffect(()=>{
       
        console.log(location)
        //get Location ID
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '708efb2826msh8c2453dc572421ap11295ejsnf33c0f72ebb2',
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        }; 
                 console.log('ID',locationID)
                // get Hotel search

        fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=${checkOut}&region_id=${locationID}&adults_number=2&checkin_date=${checkIn}&available_filter=SHOW_AVAILABLE_ONLY&guest_rating_min=8&price_min=10&page_number=1&amenities=WIFI%2CPARKING&price_max=500&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`, options)
            .then(response => response.json())
            .then(response => {
                setTopPicks(response.properties);
                console.log('picks',picks)
            })
            .catch(err => console.error(err));
       


    },[location,locationID,checkIn,checkOut]);

    return(

        <section style={{margin:'1.5rem'}}>
            <h2 style={{textAlign:'center', marginBottom:'2.5rem'}}>Top Travel Picks</h2>
            <div style={{width:'95vw', display:'flex', justifyContent: 'center'}}>
            <button onClick={chooseLocation}>View Picks</button>
            </div>
            <h4 style={{marginBottom:'2rem'}}>{location}</h4>
            
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                {!picks ? <p>Sorry No Results found</p> : picks.map(x=>{
                return(
                    <div  style={{display:'flex', backgroundColor:'lavender',marginBottom:'1.5rem', borderRadius:'5px'}} >
                         <div>
                    <img style={{width:'80%', height:'80%'}} src={x.propertyImage.image.url}alt='Hotel'></img>
                    </div>
                    <div>
                        <h5 style={{marginTop:'1rem'}}>{x.name}</h5>
                        <small>HOTEL RATING: {x.star} star</small>

                        <p> Price: {x.price.lead.formatted} /night</p>

                        <p> Distance: {x.destinationInfo.distanceFromDestination.value} {x.destinationInfo.distanceFromDestination.unit}</p>
                        </div>
                        </div>)})}
                </div>
                
        </section>
    )
}


export default TopPicks;