$(function () {
    var chart = new Highcharts.Chart({

        chart: {
            type: 'boxplot',
            renderTo: 'fullboxplot'
        },

        title: {
            text: ''
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: <%= raw @categoriesfull %> ,
            title: {
                text: 'Industry'
            }
        },

        yAxis: {
            title: {
                text: 'Total Compensation'
            }
        },

       plotOptions: {

          series: {
                color: 'black'
            },
            boxplot: {
                fillColor: 'lightgreen',
                lineWidth: 2,
                medianColor: 'black',
                medianWidth: 3,
                stemColor: 'black',
                stemDashStyle: 'dot',
                stemWidth: 1,
                whiskerColor: 'black',
                whiskerLength: '20%',
                whiskerWidth: 3
            }
        },

        series: [{
            name: 'Observations',
            data: <%= raw @boxplotdatafull %>,
            tooltip: {
            }

        }]

    });
});


$(function () {
    var chart = new Highcharts.Chart({

        chart: {
            type: 'boxplot',
            renderTo: 'internboxplot'
        },

        title: {
            text: ''
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: <%= raw @categoriesintern %> ,
            title: {
                text: 'Industry'
            }
        },

        yAxis: {
            title: {
                text: 'Total Compensation'
            }
        },

       plotOptions: {

          series: {
                color: 'black'
            },
            boxplot: {
                fillColor: 'lightgreen',
                lineWidth: 2,
                medianColor: 'black',
                medianWidth: 3,
                stemColor: 'black',
                stemDashStyle: 'dot',
                stemWidth: 1,
                whiskerColor: 'black',
                whiskerLength: '20%',
                whiskerWidth: 3
            }
        },

        series: [{
            name: 'Observations',
            data: <%= raw @boxplotdataintern %>,
            tooltip: {
            }

        }]

    });
});
