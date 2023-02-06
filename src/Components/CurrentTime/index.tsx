import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CurrentTime() {
    fetch('https://geoip-db.com/')
    .then( res => res.json())
    .then(response => {
        console.log("Country: ", response.city);
     })
     
  return <></>;
}
