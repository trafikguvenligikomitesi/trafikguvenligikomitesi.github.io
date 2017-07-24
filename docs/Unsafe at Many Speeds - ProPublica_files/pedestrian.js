
vis = {}

vis.init = function() {
  if ($(window).width() > 480) {
    vis.draw();
  } else {
    vis.mobileGif();
  }

}

vis.mobileGif = function() {
  var pedGraphic = d3.select("#pedestrian-graphic").html("")
  pedGraphic.append("h2").attr("class","gif-label").text("A Pedestrian's Risk of Getting Killed by a Car Going:")
  pedGraphic.append("img")
  .attr("src","//propublica.s3.amazonaws.com/projects/visualevidence/ped/pedMobile.gif")
}


vis.draw = function() {

var pedGraphic = d3.select("#pedestrian-graphic")
var chartLabel = pedGraphic.append("div").attr("class","chart-label")
chartLabel.append("h1").html("The Chance of Being Killed by a Car Going <span></span>")
chartLabel.append("h5").text("Roll over the curved lines to see the risk at any speed")

var chartCon = pedGraphic.append("div").attr("id","chart-container")
chartCon.append("h3").text("More Deadly")
chartCon.append("h3").text("Less Deadly")

var pedChart = chartCon.append("div").attr("id","chart")


var margin = {top: 20, right: 50, bottom: 40, left: 55},
    width = 630 - margin.left - margin.right,
    height = 370 - margin.top - margin.bottom;


var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .tickFormat(d3.format(".0%"))
    .orient("left")
    .tickValues([0, .5,1])

var line = d3.svg.line()
    .x(function(d) { return x(d.speed); })
    .y(function(d) { return y(d.killed); });

var svgHeight = height + margin.top + margin.bottom;
var svgWidth = width + margin.left + margin.right;

var svg = pedChart.append("svg")
    .attr("viewBox","0 0 "+svgWidth +" "+svgHeight)
    .attr("perserveAspectRatio","xMinYMid")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var headline = d3.select(".chart-label h1")
var mph = d3.select("#chart").append("h2")
var speeds = [];

d3.csv("//propublica.s3.amazonaws.com/data/pedestrian.csv", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) {
    return key !== "speed";
  }));

  data.map(function(k){
    speeds.push(+k.speed)
  })



  var ages = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {speed: +d.speed, killed: +d[name]};
      })
    };
  });


  x.domain(d3.extent(data, function(d) {
    return +d.speed;
  }));


  y.domain([
    d3.min(ages, function(c) { return d3.min(c.values, function(v) { return v.killed; }); }),
    d3.max(ages, function(c) { return d3.max(c.values, function(v) { return v.killed; }); })
  ]);

   svg.append("linearGradient")
      .attr("id", "color-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(1))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "#92cf71"},
        {offset: "15%", color: "#eac544"},
        {offset: "20%", color: "#eac544"},
        {offset: "55%", color: "#cc0000"},
        {offset: "100%", color: "#cc0000"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) {
        return d.offset;
      })
      .attr("stop-color", function(d) { return d.color; });


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height  + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  var ageLine = svg.append("g")
      .attr("class", "city")
      .selectAll("path")
      .data(ages)
    .enter().append("g").attr("class","age-line")

    ageLine.append("path")
      .attr("class", function(d) { return "type-"+d.name; })
      .classed("line",true)
      .attr("d", function(d) { return line(d.values); })
 


// FOR GIF MAKING


      // .attr('stroke-dasharray','645 645')
      // .attr('stroke-dashoffset', '645')
      // .transition()
      // .delay(2000)
      // .duration(7500)
      // .attr('stroke-dashoffset', 0)


// var gifText = d3.select("#chart").append("text")



// var start_val = 0,
//     end_val = [60];

// var qSVG = d3.select("#pedestrian-graphic").append("div").attr("class","gif")

// var gifNum = qSVG.selectAll(".txt")
//     .data(end_val)
//     .enter()
//     .append("h1")
//     .text(start_val)
//     .attr("class", "txt")
//     .transition()
//     .delay(1900)
//     .duration(7500)
//         .tween("text", function(d) {
//             var i = d3.interpolate(this.textContent, d),
//                 prec = (d + "").split("."),
//                 round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

//             return function(t) {
//                 this.textContent = Math.round(i(t) * round) / round;
//             };
//         });


// d3.select("#pedestrian-graphic .gif").append("p").text("MPH")







    var extra = {
      "70":{"labels":"70 years old", "xy":"-50","c":"-40,28"},
      "30":{"labels":"30 years old", "xy":"-44","c":"0,30"},
      "avg":{"labels":"Average (all ages)", "xy":"-44","c":"-23,5"}
    }

    d3.selectAll(".age-line").append("g")
      .attr("transform", function(d){
        return "translate("+extra[d.name]["c"]+")"
      })
      .append("text").text(function (d) {
      return extra[d.name]["labels"]
    }).attr("transform", function(d){
      var xval = d.values[35]["speed"]
      var yval = d.values[35]["killed"]
      return "translate("+ x(xval)+","+ y(yval)+")rotate("+extra[d.name]["xy"]+")"
    })


var rectangleGroup = svg.append("g")
    .attr("class", "rectangle");

var rectangle = rectangleGroup.selectAll(".rect")
    .data(speeds)
    .enter().append("g")
    .attr("class",function(d){
      return "rect-"+d
    })
    .classed("rect",true)

    .on("mouseover", mouseover)
    .on("mouseout", mouseout);

    rectangle.append("line")
    .attr("x1",function(d){
      return x(d)
    })
    .attr("x2",function(d){
      return x(d)
    })
    .attr("y1",0)
    .attr("y2",height)
    .attr("class","rect-border")

    rectangle.append("rect")
    .attr("width",function(d){
      return x(d+1) - x(d)
    })
    .attr("height",height)
    .attr("x",function(d){
      return x(d)
    })
    .classed("rect-voronoi",true)


var focus = svg.append("g")
  .attr("class", "focus")
  .attr("transform", "translate(-1000,-1000)")
  .selectAll("g")
  .data([0,1,2])
  .enter().append("g")
  .attr("class", function(d){
    return "focus-"+d
  })

  focus.append("circle")
  .attr("r", 3.5);

  var tooltip = focus.append("g").attr("transform", "translate(5,0)").attr("class","tooltip")
  tooltip.append("path").attr("d","M0,0l8.8-10h30v20h-30L0,0z")
  tooltip.append("text")


  mouseover(25)


  function percentize(num) {
    return Math.round(num*100)+"%"
  }

  function mouseover(d,delayNum) {

    d3.selectAll(".rect").classed("highlight",false)
    d3.selectAll(".rect-"+d).classed("highlight",true)

    var allCoords = [];

    d3.selectAll(".line").each(function (v) {
      v.values.forEach(function(r) {
        if (r.speed == d) {
          allCoords.push({
            name: v.name,
            speed: r.speed,
            killed: r.killed
          });
        }
      })
    })

      d3.select(".focus").attr("transform", function(y){
       return "translate(" + x(d) + ",0)"
      })

      var thisCoord = 0;
      allCoords.forEach(function(t, i) {
        d3.select(".focus-"+i).attr("transform", function(d){
          var diffNum = Math.abs(allCoords[d].killed - thisCoord);
         if ( +diffNum < 0.1 && +diffNum > 0.02 ) {
          d3.select(".focus-0 .tooltip").attr("transform","translate(5,3),rotate(15)")
          d3.select(".focus-1 .tooltip").attr("transform","translate(5,-3),rotate(-15)")
         } else if ( +diffNum < 0.02 ) {
          d3.select(".focus-0 .tooltip").attr("transform","translate(5,5),rotate(25)")
          d3.select(".focus-1 .tooltip").attr("transform","translate(5,-5),rotate(-25)")
         } else {
          d3.selectAll(".tooltip").attr("transform","translate(5,0)")
         }
         thisCoord = allCoords[d].killed;
         return "translate(0," + y(allCoords[d].killed) + ")"
        })
        .select("text").text(function(d){
          return percentize(allCoords[d].killed);
        })
        .attr("transform", "translate(10,5)")
      })

    d3.select("h1 span").text(d+" mph")

  }

  function mouseout(d,i) {
   // svg.selectAll(".city path").classed("city--hover", false)
  }


});


}