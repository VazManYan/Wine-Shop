import React, { useState } from "react";
import "./Home.css";
import Wines from "../components/TabComponents/Wines";
import Cheeses from "../components/TabComponents/Cheeses";
import Fishes from "../components/TabComponents/Fishes";
import Salads from "../components/TabComponents/Salads";
import Slide from "./Slide";

function Home(){
    const[index,setIndex] = useState(0);
    return(
        <div className="Home">
         <div className="SlideDiv">
            <Slide/>
          </div>

          <div className="tabList">
                <div className="tabHeadWine" onClick={()=>{setIndex(1)}}>
                    <p>WINE</p>
                </div>
                <div className="tabHeadCheese" onClick={()=>{setIndex(2)}}>
                    <p>CHEESE</p>
                </div>
                <div className="tabHeadFish" onClick={()=>{setIndex(3)}}>
                    <p>FISH</p>
                </div>
                <div className="tabHeadSalad" onClick={()=>{setIndex(4)}}>
                    <p>SALAD</p>
                </div>
          </div>
          <div className="tabHeadWineInfo" hidden = {index !== 1}>
                <Wines/>
          </div>
          <div className="tabHeadCheeseInfo" hidden = {index !== 2}>
                <Cheeses/>
          </div>
          <div className="tabHeadSaladInfo" hidden = {index !== 3}>
                <Fishes/>
          </div><div className="tabHeadFishInfo" hidden = {index !== 4}>
                <Salads/>
          </div>
        </div>
    )
}
export default Home;