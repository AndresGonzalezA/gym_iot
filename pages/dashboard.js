import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";
import React, {useState,useEffect} from "react";

export default function Dashboard() {
  const [dots, setdots]=useState();
  const get_dots=()=>{
    fetch("https://h72vdb.deta.dev/dots",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
      },
    }).then((response) => {
      if (response.status===200) {
        return response.json().then((json_response) => {
          setdots(json_response);
          console.log(json_response);
          return false;
        });
      }
    });
}
useEffect(()=> {
  get_dots();
},[]);
  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>

      <main className={styles.main}>DASHBOARD</main>
    </div>
  );
}
