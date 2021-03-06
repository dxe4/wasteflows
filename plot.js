(function(){
        var data = {

                nodes: [{'name': 'Source segregated recyclate'},
 {'name': 'Green waste'},
 {'name': 'Oil'},
 {'name': 'Compost like output'},
 {'name': 'Composite'},
 {'name': 'Glass'},
 {'name': 'Plastic'},
 {'name': 'Paint'},
 {'name': 'Soil'},
 {'name': 'Comingled recyclate'},
 {'name': 'Metal'},
 {'name': 'Treatment unknown'},
 {'name': 'Other Materials'},
 {'name': 'Batteries'},
 {'name': 'Process loss'},
 {'name': 'Textiles'},
 {'name': 'IBA'},
 {'name': 'WEEE'},
 {'name': 'Residual waste'},
 {'name': 'Co-mingled'},
 {'name': 'Tyres'},
 {'name': 'Organic'},
 {'name': 'Composting'},
 {'name': 'Furniture'},
 {'name': 'Bulky'},
 {'name': 'Plasterboard'},
 {'name': 'Mixed green and food waste'},
 {'name': 'Rubble'},
 {'name': 'Incinerator fly ash'},
 {'name': 'Dry recyclate'},
 {'name': 'Refuse derived fuel'},
 {'name': 'Wood'},
 {'name': 'Contamination (process rejects)'},
 {'name': 'Contamination (gate rejects)'},
 {'name': 'Incinerator bottom ash'},
 {'name': 'Paper & Card'},
 {'name': 'Food waste'}],

                links: [{'source': 'Comingled recyclate', 'target': 'Batteries', 'value': '1382.56'},
 {'source': 'Comingled recyclate', 'target': 'Co-mingled', 'value': '284.5'},
 {'source': 'Comingled recyclate',
  'target': 'Composite',
  'value': '126981.144'},
 {'source': 'Comingled recyclate', 'target': 'Furniture', 'value': '2226.16'},
 {'source': 'Comingled recyclate', 'target': 'Glass', 'value': '1068721.282'},
 {'source': 'Comingled recyclate', 'target': 'IBA', 'value': '17726.778'},
 {'source': 'Comingled recyclate', 'target': 'Metal', 'value': '930809.672'},
 {'source': 'Comingled recyclate', 'target': 'Oil', 'value': '0.12'},
 {'source': 'Comingled recyclate', 'target': 'Organic', 'value': '36.13'},
 {'source': 'Comingled recyclate',
  'target': 'Other Materials',
  'value': '6840.236'},
 {'source': 'Comingled recyclate',
  'target': 'Paper & Card',
  'value': '2640954.945'},
 {'source': 'Comingled recyclate', 'target': 'Plastic', 'value': '1551907.712'},
 {'source': 'Comingled recyclate', 'target': 'Textiles', 'value': '4012.442'},
 {'source': 'Comingled recyclate', 'target': 'WEEE', 'value': '347598.06'},
 {'source': 'Comingled recyclate', 'target': 'Wood', 'value': '12.38'},
 {'source': 'Food waste', 'target': 'Organic', 'value': '483551.026'},
 {'source': 'Green waste', 'target': 'Organic', 'value': '986001.446'},
 {'source': 'Green waste', 'target': 'Wood', 'value': '824.4'},
 {'source': 'Mixed green and food waste',
  'target': 'Organic',
  'value': '725481.632'},
 {'source': 'Residual waste', 'target': 'Batteries', 'value': '114.66'},
 {'source': 'Residual waste', 'target': 'Bulky', 'value': '25695.372'},
 {'source': 'Residual waste', 'target': 'Co-mingled', 'value': '72.25'},
 {'source': 'Residual waste', 'target': 'Composite', 'value': '1.492'},
 {'source': 'Residual waste', 'target': 'Furniture', 'value': '1750.072'},
 {'source': 'Residual waste', 'target': 'Glass', 'value': '77452.972'},
 {'source': 'Residual waste', 'target': 'IBA', 'value': '2059803.441'},
 {'source': 'Residual waste', 'target': 'Metal', 'value': '1401681.842'},
 {'source': 'Residual waste', 'target': 'Oil', 'value': '20.5'},
 {'source': 'Residual waste', 'target': 'Organic', 'value': '148360.783'},
 {'source': 'Residual waste',
  'target': 'Other Materials',
  'value': '79620.008'},
 {'source': 'Residual waste', 'target': 'Paper & Card', 'value': '74326.032'},
 {'source': 'Residual waste',
  'target': 'Plasterboard',
  'value': '2272.7200000000003'},
 {'source': 'Residual waste', 'target': 'Plastic', 'value': '41750.968'},
 {'source': 'Residual waste', 'target': 'Rubble', 'value': '6463.222'},
 {'source': 'Residual waste', 'target': 'Soil', 'value': '1773.66'},
 {'source': 'Residual waste', 'target': 'Textiles', 'value': '23646.316'},
 {'source': 'Residual waste', 'target': 'Tyres', 'value': '204.72'},
 {'source': 'Residual waste', 'target': 'WEEE', 'value': '9295.902'},
 {'source': 'Residual waste', 'target': 'Wood', 'value': '50359.786'},
 {'source': 'Source segregated recyclate',
  'target': 'Batteries',
  'value': '43166.775'},
 {'source': 'Source segregated recyclate',
  'target': 'Bulky',
  'value': '42381.171'},
 {'source': 'Source segregated recyclate',
  'target': 'Composite',
  'value': '11487.238'},
 {'source': 'Source segregated recyclate',
  'target': 'Furniture',
  'value': '18935.677'},
 {'source': 'Source segregated recyclate',
  'target': 'Glass',
  'value': '209722.662'},
 {'source': 'Source segregated recyclate', 'target': 'IBA', 'value': '649.8'},
 {'source': 'Source segregated recyclate',
  'target': 'Metal',
  'value': '210893.271'},
 {'source': 'Source segregated recyclate',
  'target': 'Oil',
  'value': '10012.346'},
 {'source': 'Source segregated recyclate',
  'target': 'Organic',
  'value': '77.94'},
 {'source': 'Source segregated recyclate',
  'target': 'Other Materials',
  'value': '28926.545000000002'},
 {'source': 'Source segregated recyclate',
  'target': 'Paint',
  'value': '4369.261'},
 {'source': 'Source segregated recyclate',
  'target': 'Paper & Card',
  'value': '621763.456'},
 {'source': 'Source segregated recyclate',
  'target': 'Plasterboard',
  'value': '93357.96'},
 {'source': 'Source segregated recyclate',
  'target': 'Plastic',
  'value': '86918.182'},
 {'source': 'Source segregated recyclate',
  'target': 'Rubble',
  'value': '305910.354'},
 {'source': 'Source segregated recyclate', 'target': 'Soil', 'value': '788.3'},
 {'source': 'Source segregated recyclate',
  'target': 'Textiles',
  'value': '144013.423'},
 {'source': 'Source segregated recyclate',
  'target': 'Tyres',
  'value': '23394.904'},
 {'source': 'Source segregated recyclate',
  'target': 'WEEE',
  'value': '395442.071'},
 {'source': 'Source segregated recyclate', 'target': 'Wood', 'value': '420633'},
 {'source': 'Batteries', 'target': 'Dry recyclate', 'value': '21448.072'},
 {'source': 'Bulky',
  'target': 'Contamination (gate rejects)',
  'value': '43.04'},
 {'source': 'Bulky',
  'target': 'Contamination (process rejects)',
  'value': '15.05'},
 {'source': 'Bulky', 'target': 'Dry recyclate', 'value': '44915.328'},
 {'source': 'Co-mingled', 'target': 'Dry recyclate', 'value': '356.75'},
 {'source': 'Composite', 'target': 'Dry recyclate', 'value': '133128.465'},
 {'source': 'Furniture', 'target': 'Dry recyclate', 'value': '13422.77'},
 {'source': 'Glass', 'target': 'Dry recyclate', 'value': '1259004.305'},
 {'source': 'IBA',
  'target': 'Contamination (process rejects)',
  'value': '626.261'},
 {'source': 'IBA', 'target': 'Dry recyclate', 'value': '38681.58'},
 {'source': 'IBA', 'target': 'Incinerator bottom ash', 'value': '1996269.887'},
 {'source': 'IBA', 'target': 'Incinerator fly ash', 'value': '41952.491'},
 {'source': 'IBA', 'target': 'Process loss', 'value': '649.8'},
 {'source': 'Metal',
  'target': 'Contamination (gate rejects)',
  'value': '53.65'},
 {'source': 'Metal',
  'target': 'Contamination (process rejects)',
  'value': '1442.76'},
 {'source': 'Metal', 'target': 'Dry recyclate', 'value': '1173588.363'},
 {'source': 'Metal',
  'target': 'Incinerator bottom ash',
  'value': '1259196.459'},
 {'source': 'Metal', 'target': 'Incinerator fly ash', 'value': '637.484'},
 {'source': 'Oil', 'target': 'Dry recyclate', 'value': '4411.803'},
 {'source': 'Oil', 'target': 'Refuse derived fuel', 'value': '33.07'},
 {'source': 'Organic', 'target': 'Compost like output', 'value': '136608.454'},
 {'source': 'Organic', 'target': 'Composting', 'value': '1111175.479'},
 {'source': 'Organic',
  'target': 'Contamination (gate rejects)',
  'value': '5.5'},
 {'source': 'Organic',
  'target': 'Contamination (process rejects)',
  'value': '5.86'},
 {'source': 'Organic', 'target': 'Dry recyclate', 'value': '13457.582'},
 {'source': 'Other Materials',
  'target': 'Contamination (process rejects)',
  'value': '151.77'},
 {'source': 'Other Materials', 'target': 'Dry recyclate', 'value': '92767.759'},
 {'source': 'Other Materials',
  'target': 'Refuse derived fuel',
  'value': '8447.601999999999'},
 {'source': 'Other Materials', 'target': 'Treatment unknown', 'value': '39.42'},
 {'source': 'Paint', 'target': 'Dry recyclate', 'value': '2165.721'},
 {'source': 'Paper & Card', 'target': 'Dry recyclate', 'value': '3035939.092'},
 {'source': 'Plasterboard', 'target': 'Dry recyclate', 'value': '41197.73'},
 {'source': 'Plastic', 'target': 'Dry recyclate', 'value': '1636484.226'},
 {'source': 'Plastic', 'target': 'Treatment unknown', 'value': '39.42'},
 {'source': 'Rubble', 'target': 'Dry recyclate', 'value': '160645.204'},
 {'source': 'Soil', 'target': 'Dry recyclate', 'value': '2167.81'},
 {'source': 'Textiles',
  'target': 'Contamination (gate rejects)',
  'value': '510.88'},
 {'source': 'Textiles', 'target': 'Dry recyclate', 'value': '96759.884'},
 {'source': 'Tyres', 'target': 'Dry recyclate', 'value': '10702.412'},
 {'source': 'WEEE', 'target': 'Contamination (gate rejects)', 'value': '0.52'},
 {'source': 'WEEE',
  'target': 'Contamination (process rejects)',
  'value': '18.21'},
 {'source': 'WEEE', 'target': 'Dry recyclate', 'value': '551771.095'},
 {'source': 'Wood',
  'target': 'Compost like output',
  'value': '1967.6879999999999'},
 {'source': 'Wood', 'target': 'Composting', 'value': '412.035'},
 {'source': 'Wood',
  'target': 'Contamination (gate rejects)',
  'value': '6593.43'},
 {'source': 'Wood',
  'target': 'Contamination (process rejects)',
  'value': '3342.57'},
 {'source': 'Wood', 'target': 'Dry recyclate', 'value': '251711.313'},
 {'source': 'Wood', 'target': 'Refuse derived fuel', 'value': '880.65'}]

        };

        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        w = parseInt(Math.floor(w * 0.95))
        h = parseInt(Math.floor(h * 0.95))


        $("#sankey-chart").css({
            width: w,
            height: h,
        });
        console.log($("#sankey-chart"));

        var currentChart = echarts.init(document.getElementById('sankey-chart'));
        // currentChart.setOption(option);

        currentChart.setOption(option = {
            title: {
                text: 'Sankey Diagram'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'

            },
            series: [
                {
                    type: 'sankey',
                    data: data.nodes,
                    links: data.links,
                    focusNodeAdjacency: true,
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#aaa'
                        }
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0.5
                        }
                    }
                }
            ]
        });
})();
