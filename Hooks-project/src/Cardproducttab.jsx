// ProductTab.js
import React from "react";
import { Cardproduct } from "./Cardproduct";


export function ProductTab() {


  let styles = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  };
  return (
    <div style={styles}>
      <Cardproduct
      idx = {0}
       src="https://t4.ftcdn.net/jpg/02/13/58/95/360_F_213589565_mn1xB7AHsfx8Id6mX1GzcXkBu59AwMoZ.jpg"
        tittle="Samsung TV"
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      
      />
      <Cardproduct
       idx = {1}
       src="https://www.apple.com/newsroom/images/product/tv/standard/Apple-MLS-Season-Pass-Apple-TV-My-Sports-league-page_big.jpg.large.jpg"
        tittle="Apple TV"
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      
      />
      <Cardproduct
      idx = {2}
       src="https://cdn.vox-cdn.com/thumbor/bUSNQV-zWSzbMyLCmZPGxq684sI=/0x0:1100x733/2000x1333/filters:focal(550x366:551x367)/cdn.vox-cdn.com/uploads/chorus_asset/file/12789567/K91_55_3D_11.1419964291.jpg"
      
        tittle="Lenovo TV"
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
       
      />
      
     
    </div>
  );
}
