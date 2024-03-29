import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";
import InfoCard from "../components/InfoCard";
import Graph from "../components/Graph";

var mqtt = require("mqtt");

// Estas son las credenciales a shiftr.io debo cambiarlas por las mías
var options = {
  protocol: "mqtts",
  username: "chocolateprince815",
  password: "Vptzk7jZKiXBzcNu",
  clientId: "User_front",
};
var cont = 0;
export default function Home() {
  const [current_val, setcurrentval] = useState("");
  // const [volt_val, setvolt_val] = useState("");
  const [data,setdata]=useState([{id:0,value:0}])//id:0, value:0 quiere decir que este es el punto 1 de la gráfica
  let current_ref = useRef("");
  current_ref.current = current_val;
  useEffect(() => {
    var client = mqtt.connect("mqtt://chocolateprince815:Vptzk7jZKiXBzcNu@chocolateprince815.cloud.shiftr.io", options);
    client.subscribe("topic");
    var note;
    client.on("message", function (topic, message) {
      note = message.toString();
      if (topic === "topic") {
        setcurrentval(note);
        cont=cont+1;
        setdata((data) => [...data, {id:cont , value:note}]);
      } else if (topic === "topic") {
        setvolt_val(note);
      }
    });
  }, []);

  // const data = [ //Con esto creamos una gráfica con valores predeterminados
  // {id:0, value:120, units:"corriente"},
  // {id:1, value:30, units:"corriente"},
  // {id:2, value:60, units:"corriente"}
//   ]

//Acá creo los datos para la gŕafica
  

  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>
      <Head>
        <title>IOT EIA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row_main}>
        <InfoCard topic={"topic"} value={current_val}></InfoCard>
        
        </div>
        <Graph data={data}></Graph>
      </main>
      <Graph data={data}></Graph>
    </div>
  );
}
