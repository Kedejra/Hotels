import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";



function Hotels()
{
    // console.log(location)
    const[hotels,setHotels]=useState([]);
    

    const[search,setSearch]= useOutletContext();

    console.log('IN HOTELS :', search)

     useEffect(()=>
     {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '708efb2826msh8c2453dc572421ap11295ejsnf33c0f72ebb2',
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        }; 
        
        fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=${search.checkOut}&region_id=${search.id}&adults_number=${search.adults}&checkin_date=${search.checkIn}&available_filter=SHOW_AVAILABLE_ONLY&guest_rating_min=8&price_min=10&page_number=1&amenities=WIFI%2CPARKING&price_max=500&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`, options)
            .then(response => response.json())
            .then(response => {setHotels(response.properties)
            console.log('hotels',hotels)})
            .catch(err => console.error(err));

     },[search]);

    return(
            <>

            <section style={{margin:'1.5rem'}}>
                    <h2 style={{textAlign:'center', marginBottom:'2.5rem'}}>Hotel Results</h2>
                    <h3 style={{marginBottom:'2rem'}}>Search results for {search.location}</h3> 
                     
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                {!(hotels) ? <p>Sorry No Results found</p> : hotels.map(x=>{
                return(
                    <div className='card' style={{display:'flex',marginBottom:'1.5rem', borderRadius:'5px', width:'80vw'}} >
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
            </>
    )
}

export default Hotels