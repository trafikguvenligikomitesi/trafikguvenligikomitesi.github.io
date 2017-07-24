var years = [2003,  2004, 2005, 2006,  2007, 2008,  2009, 2010,  2011, 2012, 2013,  2014,  2015, 2016]
var cases = [10311, null, null,	16954, null, 18189, null, 21334, null, null, 36934, 43516, null, null];

$(function () {

   $('#court-cases-div').highcharts({
      chart: {
         type: 'line',
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
      yAxis: {
         title: {
             text: 'DAVA SAYISI'
         }
      },
      plotOptions: {
         line: {
            //showCheckbox: true,
            dataLabels: {
               //enabled: true,
               enabled: false,
               x: 0,
               y: -30,
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
            name: "Dava Sayısı",
            color: '#000055',
            data: cases,
            lineWidth: 4,
         }, 
      ]
   },

   function( chart ) { // On complete

      var xOffset = -5;
      var yOffset = 30;

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

         if (value) {
            //
            rel_percentChange = (value - lastValue) / lastValue;
            abs_percentChange = (value - firstValue) / firstValue;

            console.log( "-- Valid value", value, rel_percentChange, abs_percentChange );

            if (i == 0) {
               //
               // Label remains unchanged. This is the first label, so no
               // percentages. FOR COMPLETENESS ONLY.
               //
            }
            else if (i == 3) { 
               // 
               // Hack the first actual value
               //
               subLabel = "[+%" + (100 * rel_percentChange).toFixed( 0 ) + "]";
            }
            else {
               subLabel = "[+%" + (100 * rel_percentChange).toFixed( 0 ) + ", " + 
                           "+%" + (100 * abs_percentChange).toFixed( 0 ) + "]";
            }

            lastValue = value;

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
               fontSize: "24px",
               fontWeight: "bold",
               textAlign: "center",
               //margin: auto,
            })
            .add();

         var subLabelText = chart.renderer.text(
               subLabel, 
               chart.plotLeft + entry.plotX + xOffset, 
               chart.plotTop + entry.plotY + yOffset + 25
            )
            .attr({
               fill: '#0000aa',
               zIndex: 5,
            })
            .css({
               color: "#880022",
               fontSize: "22px",
               fontWeight: "bold",
               textAlign: "center",
               //margin: auto,
            })
            .add();

      }  // end for

   });

});


//
// End of fatalities.js
//

