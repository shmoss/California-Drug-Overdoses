
var width = 700;
    var height = 880;

var mapContainer = d3.select("body")
        .append("mapContainer")
        .attr( "width", 900 )
        .attr ( "height", 900 )

var Map = mapContainer.append(svg)
    var svg = d3.select("body")
        .append("svg")
        .attr( "width", width )
        .attr ( "height", height )
        .attr ("position", 'left')
        .attr("transform","translate(100,-150)")
        .attr("class", "map")
        var g = svg.append ( "g" )


//projection
    var albersProjection = d3.geoAlbers()
        .scale( 100000)
        .rotate ( [122.419] )
        .center( [0, 37.7749] )

var geoPath = d3.geoPath()
        .projection( albersProjection );

    g.selectAll( "path" )
        .data( cal.features )
        .enter()
        .append( "path" )
        .attr( "stroke", "black" )
