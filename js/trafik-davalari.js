var davalar_chartData = [
   {year: 2003, cases: 10311},	  
   {year: 2004, cases: null},	  
   {year: 2005, cases: null},	  
   {year: 2006, cases: 16954},
   {year: 2007, cases: null},	  
   {year: 2008, cases: 18189},
   {year: 2009, cases: null},	  
   {year: 2010, cases: 21334},
   {year: 2011, cases: null},	  
   {year: 2013, cases: 36934},
   {year: 2014, cases: 43516},
];


firstValue = davalar_chartData[0].cases;
lastValue = davalar_chartData[0].cases;

for (index in davalar_chartData) {

   console.log( "--- Data:", index );

   entry = davalar_chartData[index];

   if (entry.cases) {
      //
      rel_percentChange = (entry.cases - lastValue) / lastValue;
      abs_percentChange = (entry.cases - firstValue) / firstValue;

      if (index == 0) {

         entry.label = entry.cases;
      }
      else if (index == 3) { 
         // 
         // Hack the first actual value
         //
         entry.label = entry.cases + "\n" +
                       " [%" + (100 * rel_percentChange).toFixed( 0 ) + "]";
      }
      else {
         entry.label = entry.cases + "\n" +
                       " [%" + (100 * rel_percentChange).toFixed( 0 ) + ", " + 
                       " %" + (100 * abs_percentChange).toFixed( 0 ) + "]";
      }

      lastValue = entry.cases;

   }  // end if

};

var valueAxes = [{
      "id": "v1",
      "axisColor": "#FF6600",
      "axisThickness": 2,
      "gridAlpha": 0,
      "axisAlpha": 1,
      "maximum": 50000,
      "offsert": 50,
      "position": "left"
   }, 
];

var graphs = [{
      "valueAxis": "v1",
      "lineColor": "#5F6680",
      "bullet": "round",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Trafik (Ceza) Davaları Sayısı",
      "valueField": "cases",
      "labelText": "[[label]]",
      //"labelPosition": "inside]",
      //"labelPosition": "[[labelPos]]",
      //"allLabels": allLabels,
      "lineThickness": 2,
      "fillAlphas": 0
   }, 
];

var allLabels = [
   {
      "text": "Free label",
      "bold": true,
      "x": 2013,
      "y": 10000, 
   }
];


AmCharts.ready( function() {
 
   var davalar_chart = AmCharts.makeChart( "davalar", {
      "type": "serial",
      "theme": "light",
      "legend": {
          "useGraphSettings": true
      },
      "dataProvider": davalar_chartData,
      "valueAxes": valueAxes,
      "graphs": graphs,
      "chartScrollbar": {},
      "chartCursor": {
          "cursorPosition": "mouse"
      },
      "categoryField": "year",
      "categoryAxis": {
          "axisColor": "#DADADA",
          "minorGridEnabled": true
      },
      "fontSize": 16,
      "export": {
          "enabled": true,
          "position": "bottom-right"
       }
   });

   //chart.marginRight = 100;
   //chart.left = 1000;

   davalar_chart.addListener( "dataUpdated", zoomChart );
   zoomChart();

   function zoomChart() {
      //
      chart.zoomToIndexes( davalar_chart.dataProvider.length - 20, davalar_chart.dataProvider.length - 1 );

   }  // end zoomChart

});


//
// End of trafik-davalari.js
//

