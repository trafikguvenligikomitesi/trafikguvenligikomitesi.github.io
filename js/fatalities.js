$(function () {
  /* 
   * 2016 figures only cover until the presentation date.
   */
   var years = [1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 
                1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 
                1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 
                2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
                2015, 2016] 

   var fatalities = [54, 64, 50, 42, 32, 28, 36, 31, 31, 32, 
                     36, 44, 51, 58, 46, 58, 40, 62, 43, 28, 
                     61, 32, 43, 38, 49, 53, 60, 41, 53, 76, 
                     64, 48, 47, 48, 44, 42, 42, 24, 49, 29,
                     28, 32];

   $('#all-fatalities-div').highcharts({
      chart: {
         type: 'line',
         width: 950,
         height: 500,
         /*
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
             text: 'FATALITIES'
         }
      },
      plotOptions: {
         line: {
            dataLabels: {
               enabled: false,
               y: 50,
               x: 0
            },
            enableMouseTracking: true,
         },
         series: {
            allowPointSelect: true
         }
      },
      credits: {
         enabled: false,
      },
      tooltip: {
         enabled: true,
         crosshairs: true,
      },
      series: [{
          name: "Traffic Fatalities in North Cyprus",
          color: '#000055',
          data: fatalities,
          lineWidth: 4,
      }, 
     /*
      {
          name: 'Yürüyen Averaj',
          data: [54.0, 59.0, 56.0, 52.5, 48.4, 45.0, 43.7, 42.1, 40.9, 40.0,
                 39.6, 40.0, 40.8, 42.1, 42.3, 43.3, 43.1, 44.2, 44.1, 43.3,
                 44.1, 43.6, 43.6, 43.3, 43.6, 43.9, 44.5, 44.4, 44.7, 45.7,
                 46.3, 46.4, 46.4, 46.4, 46.4, 46.2, 46.1, 45.6, 45.6, 44.9]

      }*/
      ]
   },

   function( chart ) { // On complete

      var point = chart.series[0].data[35];
      var totalFatalities = fatalities.reduce( function( a, b ) { return( a + b );} ) 
      var fatalitiesText = chart.renderer.text(
            totalFatalities + ' ÖLÜ ', 
            point.plotX + chart.plotLeft - 50, 
            point.plotY + chart.plotTop - 95
         ).attr({
            fill: '#ffffff',
            zIndex: 5,
         }).add();

      fatalitiesText.element.style.fontWeight = 'bold';
      fatalitiesText.element.style.fontSize = '20pt';
      //fatalitiesText.element.style.paddingLeft = '20px';

      //debugger;

      console.log( fatalitiesText );
      
      var fbox = fatalitiesText.getBBox();

      chart.renderer.rect( fbox.x - 5, fbox.y - 5, fbox.width + 10, fbox.height + 10, 5 )
         .attr({
            fill: '#aa0000',
            stroke: 'white',
            'stroke-width': 1,
            zIndex: 4
         }).add();

      var injuriesText = chart.renderer.text(
            '> 9000 EBEDİ SAKAT',
            point.plotX + chart.plotLeft - 200, 
            point.plotY + chart.plotTop + 80
         ).attr({
            fill: '#ffffff',
            zIndex: 5
         }).add();
 
      injuriesText.element.style.fontWeight = 'bold';
      injuriesText.element.style.fontSize = '15pt';

      var ibox = injuriesText.getBBox();

      chart.renderer.rect( ibox.x - 5, ibox.y - 5, ibox.width + 10, ibox.height + 10, 5 )
         .attr({
            fill: '#aa0000',
            stroke: 'white',
            'stroke-width': 1,
            zIndex: 4
         }).add();

   });

});


//
// End of fatalities.js
//

