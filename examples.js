;(function () {

    // This file contains the code to define the graphics and then
    // renders them using data randomly generated by data.js.

    $(document).ready(function() {

        // Define graphics ...

        var scatterplot = gg({
            layers: [{ geometry: 'point', mapping: { x: 'd', y: 'r' } }]
        });

        var linechart = gg({
            layers: [{ geometry: 'line', mapping: { x: 'd', y: 'r' }, color: 'red' }]
        });

        var barchart = gg({
            layers: [{ geometry: 'bar', mapping: { x: 'season', y: 'number', color: "group" } }],
            scales: [{ type: 'categorical', aesthetic: 'x' }]
        });

        var histogram = gg({
            layers: [{
                geometry: 'interval',
                mapping: { x: 'group', y: 'count', color: 'group' },
                width: 20,
                statistic: { kind: 'sum', group: 'who', variable: 'purchases' }
            }],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 }
            ]
        });

        var combined = gg({
            layers: [
                { geometry: 'point', mapping: { x: 'd', y: 'r' }, size: 3 },
                { geometry: 'line', mapping: { x: 'd', y: 'r' } }
                /*{ geometry: 'interval', mapping: { x: 'd', y: 'r' }, width: 2 },*/
            ]
        });

        var semilog = gg({
            layers: [
                { geometry: 'point', mapping: { x: 'd', y: 'r' }, size: 3 },
                { geometry: 'line', mapping: { x: 'd', y: 'r' } }
            ],
            scales: [ { type: 'log', aesthetic: 'y' } ]
        });

        var heightHistogram = gg({
            layers: [
                {
                    geometry: 'interval',
                    mapping: { x: 'bin', y: 'count' },
                    statistic: { kind: 'bin', variable: 'height', bins: 30 }
                }
            ],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 }
            ]
        });

        var boxplot = gg({
            layers: [ {
                geometry: 'box',
                mapping: { x: 'group', y: false },
                statistic: { kind: 'box', group: 'grade', variable: 'value' }
            }],
            scales: [
                { type: 'categorical', aesthetic: 'x' }
            ]
        });

        var twoPopulations = gg({
            layers: [ {
                geometry: 'point',
                mapping: { x: 'intelligence', y: 'wisdom', color: 'group' },
                size: 2,
                alpha: 0.5
            }]
        });

        var quadrants = gg({
            layers: [ {
                geometry: 'point',
                mapping: { x: 'x', y: 'y', size: 'size' }
            }],
            scales: [ { aesthetic: 'size', range: [ 1, 5 ]} ]
        });

        // ... and render 'em

        var data = gg.sampleData;
        var w    = 300;
        var h    = 200;
        var ex   = function () { return d3.select('#examples').append('span'); };

        linechart.render(w, h, ex(), data.upward);
        combined.render(w, h, ex(), data.upward);
        barchart.render(w, h, ex(), data.forBarChart);
        quadrants.render(w, h, ex(), data.quadrants);
        histogram.render(w, h, ex(), data.purchases);
        semilog.render(w, h, ex(), data.semiLogData);
        heightHistogram.render(w, h, ex(), data.heightWeight);
        twoPopulations.render(w, h, ex(), data.twoPopulations);
        boxplot.render(w, h, ex(), data.forBoxPlots);

    });

})();