'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')
//
// const store = require('./assets/scripts/store')
//
// google.charts.load('current', {packages: ['corechart', 'line']})
// google.charts.setOnLoadCallback(drawBasic)
//
// function drawBasic () {
//   const timesArr = []
//   const tempsArr = []
//   for (let i = 0; i < 10; i++) {
//     timesArr.push(store.weather.hourly.data[i].time)
//     tempsArr.push(store.weather.hourly.data[i].temperature)
//   }
//   const roundedTemps = []
//   tempsArr.forEach(function (temp) {
//     const newTemp = Math.round(temp)
//     roundedTemps.push(newTemp)
//   })
//   const convertedTime = []
//   timesArr.forEach(function (time) {
//     const date = new Date(time * 1000)
//     const hour = date.getHours()
//     convertedTime.push(hour)
//   })
//
//   const data = new google.visualization.DataTable()
//   data.addColumn('number', 'X')
//   data.addColumn('number', 'Temp')
//
//   data.addRows([
//     [convertedTime[0], roundedTemps[0]], [convertedTime[1], roundedTemps[1]], [convertedTime[2], roundedTemps[2]], [convertedTime[3], roundedTemps[3]]
//   ])
//
//   const options = {
//     hAxis: {
//       title: 'Time'
//     },
//     vAxis: {
//       title: 'Temperature'
//     }
//   }
//
//   const chart = new google.visualization.LineChart(document.getElementById('chart_div'))
//   chart.draw(data, options)
// }
