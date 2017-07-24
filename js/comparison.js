/*
var fatalities = {
   'KKTC': [60, 41, 53, 76, 64, 48, 47, 48, 44, 42, 42, 24, 49, 29],
   'KC': [98, 94, 97, 117, 102, 86, 89, 82, 71, 60, 71, 51, 44, 45],
   'Malta': [16, 16, 16, 13, 16, 10, 14, 15, 21, 15, 17, 9, 18, 12],
   'Iceland': [24, 29, 23, 23, 19, 31, 15, 12, 17, 8, 12, 9, 15, 4]
};
 
olumler_chartData = [];
maxLength = fatalities.KKTC.length;

for (i=0; i < maxLength; i++ ) {
   //
   olumler_chartData.push({
      "year": yearBegin + i, 
      "KKTC": fatalities.KKTC[i],
      "KC": fatalities.KC[i],
      "Malta": fatalities.Malta[i],
      "Iceland": fatalities.Iceland[i],
   });

}  // end for
*/


var onComplete = function( chart ) { // On complete

   var labelData = [

      {
         name: 'South Cyprus (RoC)',
         color: '#008800',
         x: 300,
         y: 120
      }, 

      {
         name: 'North Cyprus',
         color: '#aa0000',
         x: 300,
         y: 240
      },

      {
         name: 'Iceland',
         color: '#007777',
         x: 300,
         y: 310
      },

      {
         name: 'Malta',
         color: '#880088',
         x: 300,
         y: 415
      },

   ];

   for (curIndex in labelData) {

      var curLabel = labelData[curIndex];

      console.log( "--- Data:", curLabel );

      //debugger;

      var labelText = chart.renderer.text(
         curLabel.name,
         curLabel.x,
         curLabel.y
      )
      .attr({
         //fill: ldata.fillColor,
         zIndex: 5,
      })
      .css({
         color: curLabel.color,
         fontSize: "20px",
         fontWeight: "bold",
         textAlign: "center",
         //margin: auto,
      })
      .add();

   }; // end for

}  // end onComplete
 

$(function () {
   $('#fatalities-comparison-div').highcharts({
      chart: {
         type: 'line',
         /*
         width: 950,
         height: 500,
         style: {
            fontSize: '16pt',
         },
         */
      },
      title: {
         text: ''
      },
      subtitle: {
         text: ''
      },
      xAxis: {
         categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      },
      yAxis: {
         title: {
            text: 'ÖLÜMLER'
         }
      },
      plotOptions: {
         line: {
            dataLabels: {
               enabled: true,
               rotation: 0,
               x: 2,
               y: -5,
            },
            enableMouseTracking: true
         },
         series: {
            allowPointSelect: true,
           /*
            style: {
               fontSize: '16pt',
            },
            */
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
            name: 'South Cyprus (RoC)',
            color: '#00aa00',
            data: [98, 94, 97, 117, 102, 86, 89, 82, 71, 60, 71, 51, 44, 45, 57, 46],
            lineWidth: 4,
            marker: {
               radius: 5,
            }
         }, 

         {
            name: 'North Cyprus',
            color: '#cc0000',
            data: [60, 41, 53, 76, 64, 48, 47, 48, 44, 42, 42, 24, 49, 29, 28, 36],
            lineWidth: 4,
            marker: {
               radius: 5,
            }
         },

         {
            name: 'Iceland',
            color: '#009999',
            data: [24, 29, 23, 23, 19, 31, 15, 12, 17, 8, 12, 9, 15, 4, 16, 5],
            lineWidth: 4,
            marker: {
               radius: 5,
            }
         },

         {
            name: 'Malta',
            color: '#aa00aa',
            data: [16, 16, 16, 13, 16, 10, 14, 15, 21, 15, 17, 9, 18, 12, 11, 22],
            lineWidth: 4,
            marker: {
               radius: 5,
            }
         },

      ]},

      onComplete

   );

});


//
// End of comparison.js
//

