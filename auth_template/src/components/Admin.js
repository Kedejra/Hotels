import { Link, useNavigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import { useRef } from "react";
import Hotels from "./Auth/Hotels";

function Admin()
{
    
     const locationRef= useRef();
     const AdultCountRef= useRef();
     const checkIn= useRef();
     const checkOut= useRef();
     const currentDate = new Date().toJSON().slice(0, 10);
     let day = new Date();
     let ID=2114;
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
     const tomorrow= nextDay.toJSON().slice(0, 10);
     const searchData={
        

     };
     //default to london;
     
     const[id,setID]= useState();
    // console.log(searchData)
    const [search,setSearch]= useState(searchData);
     

     function getLocation(event)
        {

            
           event.preventDefault();
            let place;
            !(locationRef.current.value) ?  place='London' :  place= locationRef.current.value;
            console.log(place);
            searchData.location=place;
              !(AdultCountRef.current.value) ? searchData.adults=1 : searchData.adults=parseInt(AdultCountRef.current.value);
             !(checkIn.current.value) ? searchData.checkIn= currentDate : searchData.checkIn= checkIn.current.value.toString();
             !(checkOut.current.value) ? searchData.checkOut=tomorrow : searchData.checkOut= checkOut.current.value.toString();

            
             const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '708efb2826msh8c2453dc572421ap11295ejsnf33c0f72ebb2',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };
            
            fetch(`https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${place}&domain=AE`, options)
                .then(response => response.json())
                .then(response => {
                     setID(response.data[0].gaiaId);
                }
                    )
                .catch(err => console.error(err));
                searchData.id=id;
            //     console.log(id);
            // console.log('ID',searchData.id);
            setSearch(searchData);
            
                console.log('admin',search)


        }
    
        
    return(
        <>
         <section className="quizbg">

                    <div className="card searchbar">
                        <h4>Let's Find Your Next Hotel</h4>
                        <form onSubmit={getLocation}>
                        <div>
                            <label htmlFor="locations">What city do you wat to visit?</label>
                            <input type="text" ref={locationRef} id="location-input"></input>

                            <label htmlFor="adultCount">Number of Adults</label>
                            <br/>
                            <input type="number" placeholder="1" ref={AdultCountRef} id="adult-count"></input>
                            <br/>
                            <br/>

                            <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                            <div>
                            <label htmlFor="checkin">Check in Date</label>
                            <br/>
                            <input type="date"  min={currentDate} ref={checkIn} id="checkin"></input> 
                            </div>
                            <div>
                            <label htmlFor="checkout">Check Out Date</label>
                            <br/>
                            <input type="date" min={tomorrow} ref={checkOut} id="checkout"></input> 
                            </div>
                            </div>

                        </div>
                        <br/>
                        <br/>
                        <button>Search</button>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Outlet context={[search,setSearch]} />
                </section>

                

        </>
    )
}


export default Admin;