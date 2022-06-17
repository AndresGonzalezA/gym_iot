import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Sidemenu.module.css";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis,CartesianGrid,Legend } from "recharts";//Esta línea sirve importar las herramientas para hacer graficos

export default function Graph({data}) {
  return (
    <LineChart width={600} height={200}>
        <CartesianGrid strokeDasharray="10, 10"></CartesianGrid>
        <XAxis domain={[0, 100]} type="number" dataKey="id"></XAxis>
        {/* Quien pinta un dato es line, por eso YAxis se deja en limpio */}
        <YAxis></YAxis>
        <Legend></Legend>
        <Line type="monotone" dataKey="value" stroke="black" data={data}></Line>


    </LineChart>


  );
}
