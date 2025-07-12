import axios from "axios";
import React from "react";
import { useState } from "react";


function Basic() {

    const [city,setcity] = useState("")
    const [weather , setweather] =useState("")
    const [tem , settem] =useState("")
    const [desc , setdesc] =useState("")

    function handleCity(evt){
        setcity(evt.target.value)
    }

    function Weatherhandle(){

        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d9d10627bccfd03d0d4030c0abfba3f`)

        weatherdata.then(function(success){
            console.log(success)
            setweather(success.data.weather[0].main)
            settem(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-300 to-blue-300 flex justify-center items-center">

            <div className="bg-blue-500 rounded-lg p-10 w-[350px] text-white shadow-xl ">
                <div className="flex items-center">
                    <input onChange={handleCity} type="text" className="rounded-l-lg p-3 text-black" placeholder="Search"></input>
                    <button onClick={Weatherhandle} className="text-white bg-black font-serif rounded-r-lg">Get Report</button>
                </div>

                <div className="text-center">
                    <h1 className="text-4xl font-bold mt-10">Weather Report</h1>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                        alt="Sun"
                        className="w-11 m-auto mt-4"
                    ></img>
                </div>

                <p className="font-semibold text-center mb-4 mt-2">
                    I can give you a weather report about your city
                </p>

                <p className="font-bold">Weather:  {weather}</p>
                <p className="font-bold">Temperatur: {tem}</p>
                <p className="font-bold">Decription:  {desc}</p>

            </div>

        </div>
    );
}
export default Basic;
