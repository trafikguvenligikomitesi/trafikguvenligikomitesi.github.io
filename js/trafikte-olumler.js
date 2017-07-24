var yearBegin = 2001;

var fatalities = {
   'North Cyprus': [60, 41, 53, 76, 64, 48, 47, 48, 44, 42, 42, 24, 49, 29],
   'South Cyprus': [98, 94, 97, 117, 102, 86, 89, 82, 71, 60, 71, 51, 44, 45],
   'Malta': [16, 16, 16, 13, 16, 10, 14, 15, 21, 15, 17, 9, 18, 12],
   'Iceland': [24, 29, 23, 23, 19, 31, 15, 12, 17, 8, 12, 9, 15, 4]
};
 
olumler_chartData = [];
maxLength = fatalities.North Cyprus.length;

for (i=0; i < maxLength; i++ ) {
   //
   olumler_chartData.push({
      "year": yearBegin + i, 
      "North Cyprus": fatalities.North Cyprus[i],
      "South Cyprus": fatalities.South Cyprus[i],
      "Malta": fatalities.Malta[i],
      "Iceland": fatalities.Iceland[i],
   });

}  // end for

var valueAxes = [{
      "id": "v1",
      "axisColor": "#FF6600",
      "axisThickness": 2,
      "gridAlpha": 0,
      "axisAlpha": 1,
      "position": "left"
   }, 
   {
      "id": "v2",
      "axisColor": "#FCD202",
      "axisThickness": 2,
      "gridAlpha": 0,
      "axisAlpha": 0,
      "position": "left"
   }, 
   {
      "id": "v3",
      "axisColor": "#B0DE09",
      "axisThickness": 2,
      "gridAlpha": 0,
      "offset": 0,
      "axisAlpha": 0,
      "position": "left"
   },
   {
      "id": "v4",
      "axisColor": "#ABCDE9",
      "axisThickness": 2,
      "gridAlpha": 0,
      "offset": 0,
      "axisAlpha": 0,
      "position": "left"
   }
];


var graphs = [{
      "valueAxis": "v1",
      "lineColor": "#5F6680",
      "bullet": "round",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "North Cyprus",
      "valueField": "North Cyprus",
      "lineThickness": 2,
      "fillAlphas": 0
   }, 
   {
      "valueAxis": "v2",
      "lineColor": "#0C9202",
      "bullet": "square",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "South Cyprus",
      "valueField": "South Cyprus",
      "lineThickness": 2,
      "fillAlphas": 0
   }, 
   {
      "valueAxis": "v3",
      "lineColor": "#aa5599",
      "bullet": "diamond",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Malta",
      "valueField": "Malta",
      "lineThickness": 2,
      "fillAlphas": 0
   },
   {
      "valueAxis": "v4",
      "lineColor": "#AB0000",
      "bullet": "triangleUp",
      "bulletBorderThickness": 2,
      "hideBulletsCount": 30,
      "title": "Iceland",
      "valueField": "Iceland",
      "lineThickness": 2,
      "fillAlphas": 0,
   },
];


$(function () { 
    $( '#trafikte-olumler-div' ).highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});

