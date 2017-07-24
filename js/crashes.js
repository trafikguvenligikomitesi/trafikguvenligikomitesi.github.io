
var years      = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
var crashes    = [2514, 2131, 2443, 2502, 3060, 3232, 3368, 3743, 4583, 3876, 4461, 4005, 3889, 4071, null];
var averages   = [48,   41,   47,   48,   59,   62,   65,   72,   88,   75,   86,   77,   75,   78,   null];
var fatalities = [53,   60,   41,   53,   76,   64,   48,   47,   48,   44,   42,   42,   24,   49,   null];


$(function () {

   $('#traffic-crashes-div').highcharts({
      chart: {
         type: 'line',
         zoomType: 'xy',
         /*
         width: 950,
         height: 500,
         */
      },
      title: {
         text: '',
         /*
         itemStyle: {
            font: "Arial",
            fontSize: "20px",
            fontWeight: "bold",

         }
         */
      },
      subtitle: {
         text: ''
      },
      xAxis: {
         categories: years,
      },
      yAxis: [
         {
            title: {
                text: 'ÇARPIŞMA SAYISI'
            },
            min: 0,
            //max: 6000,
         },
         {
            title: {
                text: 'ÖLÜMLER'
            },
            min: 0,
            //max: 6000,
            opposite: true,
         },
      ],
      plotOptions: {
         line: {
            //showCheckbox: true,
            dataLabels: {
               //enabled: true,
               //x: 0,
               //y: 0,
               enabled: false,
            },
            enableMouseTracking: true,
         },
         series: {
            allowPointSelect: true,
            connectNulls: true,
         }
      },
      credits: {
         enabled: false,
      },
      tooltip: {
         enabled: true,
         crosshairs: true,
      },
      series: [
         {
            name: "Çarpışma Sayısı",
            color: '#770077',
            data: crashes,
            lineWidth: 4,
         }, 

         {
            name: "Ölüm Sayısı",
            color: '#cc0000',
            data: fatalities,
            lineWidth: 4,
            yAxis: 1,
         }, 

      ]
   },

   function( chart ) { // On complete

      var xOffset = -10;
      var yOffset = -45;

      var dataSeries = chart.series[0].data;
      var firstValue = dataSeries[0].y;
      var lastValue = firstValue;

      for ( var i=0; i < dataSeries.length; i++ ) {
         //
         var entry = dataSeries[i];

         console.log( "Entry", i, entry );

         var value = entry.y;
         var label = value;
         var subLabel = "";
         var fatalityRisk = (fatalities[i] / value) * 100;

         if (value) {
            //
            average = value / 52.0;

            console.log( "Value", value, average );

            //debugger;

            //subLabel = "[" + average.toFixed( 0 ) + ", " + fatalityRisk.toFixed( 1 ) + "]";
            subLabel = "[" + average.toFixed( 0 ) + "]";

         }  // end if

         var labelText = chart.renderer.text(
               label, 
               chart.plotLeft + entry.plotX + xOffset, 
               chart.plotTop + entry.plotY + yOffset
            )
            .attr({
               fill: '#0000aa',
               zIndex: 5,
            })
            .css({
               color: "#220088",
               fontSize: "20px",
               fontWeight: "bold",
               textAlign: "center",
               //margin: auto,
            })
            .add();

         var subLabelText = chart.renderer.text(
               subLabel, 
               chart.plotLeft + entry.plotX + xOffset, 
               chart.plotTop + entry.plotY + yOffset + 80
            )
            .attr({
               fill: '#0000aa',
               zIndex: 5,
            })
            .css({
               color: "#880022",
               fontSize: "18px",
               fontWeight: "bold",
               textAlign: "center",
               //margin: auto,
            })
            .add();
            /*
            */

      }  // end for

   });

});


//
// End of fatalities.js
//

