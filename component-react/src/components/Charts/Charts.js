import React from "react";
import CharBar from "./ChartBar";
import './Charts.css'

const Chart = (props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    console.log("i am in Chart",totalMaximum)
    return (
     <div className="chart">
     {props.dataPoints.map((dataPoint=>(
        <CharBar>
            key = {dataPoint.id}
            value = {dataPoint.value}
            maxvalue = {totalMaximum}
            label = {dataPoint.label}
        </CharBar>
     )))}
     </div>
    )
}
export default Chart