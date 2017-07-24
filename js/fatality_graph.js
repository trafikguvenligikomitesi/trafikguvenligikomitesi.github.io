var fatality_chart_data = [
   {
      'year': 2000,
      'fatalities': 53
   },
   {
      'year': 2001,
      'fatalities': 60
   },
   {
      'year': 2002,
      'fatalities': 41
   },
   {
      'year': 2003,
      'fatalities': 53
   },
   {
      'year': 2004,
      'fatalities': 76
   },
   {
      'year': 2005,
      'fatalities': 64
   },
   {
      'year': 2006,
      'fatalities': 48
   },
   {
      'year': 2007,
      'fatalities': 47
   },
   {
      'year': 2008,
      'fatalities': 48
   },
   {
      'year': 2009,
      'fatalities': 44
   },
   {
      'year': 2010,
      'fatalities': 42
   },
   {
      'year': 2011,
      'fatalities': 42
   },
   {
      'year': 2012,
      'fatalities': 24
   },
   {
      'year': 2013,
      'fatalities': 49
   },
   {
      'year': 2014,
      'fatalities': 29
   },
   {
      'year': 2015,
      'fatalities': 28
   },
   {
      'year': 2016,
      'fatalities': 36
   },
];

var fatality_chart;

AmCharts.ready( function () {
    //
    // SERIAL CHART
    //
    fatality_chart = new AmCharts.AmSerialChart();
    fatality_chart.dataProvider = fatality_chart_data;
    fatality_chart.categoryField = "year";
    fatality_chart.color = "#000";
    fatality_chart.marginLeft = 0;

    fatality_chart.trendLines = [{
      "initialCategory": "2000",
      "initialValue": 46,
      "finalCategory": "2016",
      "finalValue": 46,
      "lineColor": "#008"
    }, {
      "initialCategory": "2007",
      "initialValue": 39,
      "finalCategory": "2016",
      "finalValue": 39,
      "lineColor": "#080"
    }];

    // Category axis
    //
    var categoryAxis = fatality_chart.categoryAxis;

    categoryAxis.gridAlpha = 0.2;
    categoryAxis.gridColor = "#aaa";
    categoryAxis.axisColor = "#000";

    categoryAxis.guides = [{
        category: "2007",
        toCategory: "2016",
        lineColor: "#CC0000",
        lineAlpha: 1,
        fillAlpha: 0.05,
        fillColor: "#00C",
        dashLength: 5,
        inside: true,
        labelRotation: 0,
        labelOffset: 250,
        label: "TRAFFIC SPEED CAMERA PROGRAM"
    }];
 

   /*
    * EXAMPLE
    *
    * https://www.amcharts.com/kbase/vertical-or-horizontal-lines-or-fill-ranges/
    *
    categoryAxis.guides = [{
        category: "2001",
        toCategory: "2003",
        lineColor: "#CC0000",
        lineAlpha: 1,
        fillAlpha: 0.2,
        fillColor: "#CC0000",
        dashLength: 2,
        inside: true,
        labelRotation: 90,
        label: "fines for speeding increased"
    }, {
        category: "2007",
        lineColor: "#CC0000",
        lineAlpha: 1,
        dashLength: 2,
        inside: true,
        labelRotation: 90,
        label: "motorcycle fee introduced"
    }];
    */

    // Value axis
    //
    var fatality_axis = new AmCharts.ValueAxis();

    fatality_axis.title = "Fatalities";
    fatality_axis.gridAlpha = 0.2;
    fatality_axis.gridColor = "#aaa";
    fatality_axis.axisAlpha = 0;
    //fatality_axis.axisColor = "#555555";
    //fatality_axis.labelsEnabled = true;
    //
    //


    fatality_chart.addValueAxis( fatality_axis );

    // Fatality graph
    //
    var fatality_graph = new AmCharts.AmGraph();

    fatality_graph.valueField = "fatalities";
    fatality_graph.title = "Fatalities";
    fatality_graph.type = "line";
    fatality_graph.fillAlphas = 0.1;
    fatality_graph.valueAxis = fatality_axis; // indicate which axis should be used
    fatality_graph.dashLengthField = "dashLength";
    fatality_graph.alphaField = "alpha";
    fatality_graph.lineColor = "#ff5755";
    fatality_graph.balloonText = "[[category]] 🡢 [[value]]";
    fatality_graph.lineThickness = 1;
    fatality_graph.legendValueText = "[[category]] 🡲 [[value]]";
    fatality_graph.legendPeriodValueText = "total: [[value.sum]]";
    fatality_graph.bullet = "square";
    fatality_graph.bulletBorderColor = "#ff5755";
    fatality_graph.bulletBorderThickness = 1;
    fatality_graph.bulletBorderAlpha = 1;

    fatality_chart.addGraph( fatality_graph );

    // Cursor
    //
    var chartCursor = new AmCharts.ChartCursor();

    chartCursor.zoomable = true;
    chartCursor.cursorAlpha = 0;
    chartCursor.valueBalloonsEnabled = false;

    fatality_chart.addChartCursor(chartCursor);

    // Legend
    //
    var legend = new AmCharts.AmLegend();

    legend.bulletType = "round";
    legend.equalWidths = false;
    legend.valueWidth = 120;
    legend.useGraphSettings = true;
    legend.color = "#000";

    fatality_chart.addLegend( legend );

    fatality_chart.mouseWheelZoomEnabled = true;
    fatality_chart.chartScrollBar = {};

    // Draw the chart into the div.
    //
    fatality_chart.write( "fatality-graph-div" );

});


