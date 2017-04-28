
//===========================================加载特征重要性===============================================================
function load_feature_importance_chart(){
    var FeatureImportanceChart = echarts.init(document.getElementById('feature_importance_chart'));

// 指定图表的配置项和数据
    var FeatureImportanceOption = {
        title: {
        text: 'Feature Importances',
        left: 'left',
        top: 0,
        textStyle:{ color: '#424242', fontFamily: 'Times New Roman'}
    },
        tooltip: {},
        toolbox: {
            feature: {
                saveAsImage: {
                    pixelRatio: 2
                },
                restore:{ show:true}
            }
        },
        legend: {
        orient :'vertical' ,
        data: ['Public', 'Residential', 'Commercial', 'Industrial'],
        itemGap: 20,
        x:'left',
        y:'center',
        selectedMode: 'single',
        textStyle:{ color: '#424242', fontSize: 14, fontFamily: 'Times New Roman'}
    },
        radar: {
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: '#424242',
                fontFamily: 'Times New Roman'
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(197, 197, 197, 0.75)', 'rgba(197, 197, 197, 0.8)',
                    'rgba(197, 197, 197, 0.85)', 'rgba(197, 197, 197, 0.9)',
                    'rgba(197, 197, 197, 0.95)', 'rgba(197, 197, 197, 1.0)'
                ].reverse()
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(200, 200, 200)'
            }
        },

        indicator: [
           { name: 'DEM', max: 0.15},
           { name: 'Slope', max: 0.15},
           { name: 'Bus Station', max: 0.15},
           { name: 'Catering', max: 0.15},
           { name: 'Entertainment', max: 0.15},
           { name: 'Factory', max: 0.15},
           { name: 'Hospital', max: 0.15},
           { name: 'Park', max: 0.15},
           { name: 'Shopping Mall', max: 0.15},
           { name: 'Supermarket', max: 0.15},
           { name: 'Distance to District Center', max: 0.15},
           { name: 'Distance to Highway', max: 0.15},
           { name: 'Distance to Railway', max: 0.15},
           { name: 'Distance to Road', max: 0.15}
        ]
    },
        series: [{
        name: 'Feature Importances',
        type: 'radar',
        areaStyle: {normal: {
                opacity: 0.8
            }},
        lineStyle: { normal: {
                width: 1,
                opacity: 0.8,
            }
        },
        symbol: 'none',
        itemStyle:{
            normal:{
                color: '#bbb'
            }
        },
        data : [
            {
                value : [0.0608, 	0.0298, 	0.0758, 	0.0626, 	0.0593, 	0.0649, 	0.0564, 	0.0729, 	0.0673, 	0.0581, 	0.1066, 	0.0871, 	0.1026, 	0.0959 ],
                name : 'Public'
            },
            {
                value : [0.0300, 	0.0695, 	0.0928, 	0.0688, 	0.0627, 	0.0568, 	0.0862, 	0.0741, 	0.0653, 	0.0699, 	0.0941, 	0.0851, 	0.0612, 	0.0835 ],
                name : 'Residential'
            },
            {
                value: [0.0559, 	0.0375, 	0.0729, 	0.0877, 	0.0715, 	0.0676, 	0.0702, 	0.0663, 	0.0736, 	0.0842, 	0.0905, 	0.0714, 	0.0676, 	0.0831 ],
                name: 'Commercial'
            },
            {
                value: [0.0595, 	0.0382, 	0.0712, 	0.0640, 	0.0561, 	0.0963, 	0.0530, 	0.0520, 	0.0559, 	0.0595, 	0.1048, 	0.0711, 	0.1384, 	0.0801 ],
                name: 'Industrial'
            }
        ]
    }]
    };
    // 使用刚指定的配置项和数据显示图表。
    FeatureImportanceChart.setOption(FeatureImportanceOption);
};

//======================================各年土地利用类型占比趋势图==========================================================
function load_lu_ratio(){
    var xAxisData = ['2009', '2010', '2011', '2012', '2013', '2014'];
    var public_ratio = [4.72, 4.88, 4.79, 4.87, 4.99, 5.14];
    var residential_ratio = [9.62, 9.79, 9.90, 10.02, 10.10, 10.15];
    var commercial_ratio = [1.35, 1.53, 1.55, 1.58, 1.58, 1.61];
    var industrial_ratio = [13.83, 14.17, 14.33, 14.42, 14.43, 14.48];

    var itemStyle = {
        normal: {
        },
        emphasis: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };

    var LURatioOption ={
        textStyle:{ color: '#424242'},
        title: { text: 'Land Use Ratio Trend', left:'center', textStyle:{color: '#424242',fontFamily: 'Times New Roman'}},
        legend:{
            data: ['Public', 'Residential', 'Commercial', 'Industrial'],
            bottom: 1,
            textStyle:{ color: '#424242', fontFamily: 'Times New Roman'}
        },
        color:['#296e77','#de7929','#f2c722','#afbc39','#36903d','#b7252b','#178EC8'],
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                },
                restore:{ show:true}
            }
        },
        tooltip:{},
        xAxis: {
            name: 'Year',
            nameTextStyle:{fontFamily: 'Times New Roman'},
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                        color: '#424242',
                        fontFamily: 'Times New Roman'
                }
            }
        },
        yAxis: {
            name:"Ratio(%)",
            nameTextStyle:{fontFamily: 'Times New Roman'},
            axisLabel: {
                show: true,
                textStyle: {
                        color: '#424242',
                        fontFamily: 'Times New Roman'
                }
        }
    },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
        {
            name: 'Public',
            type: 'bar',
            data: public_ratio,
            itemStyle: itemStyle,
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            },
            animationDelay: function (idx) {
            return idx*10;
        }
    }, {
        name: 'Residential',
        type: 'bar',
        data: residential_ratio,
        itemStyle: itemStyle,
        markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            },
        animationDelay: function (idx) {
            return idx*10;
        }
    },{
        name: 'Commercial',
        type: 'bar',
        data: commercial_ratio,
        itemStyle: itemStyle,
        markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            },
        animationDelay: function (idx) {
            return idx*10;
        }
    },{
        name: 'Industrial',
        type: 'bar',
        data: industrial_ratio,
        itemStyle: itemStyle,
        markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            },
        animationDelay: function (idx) {
                return idx*10;
            }
        }]
    };

    var LURatioChart = echarts.init(document.getElementById('lu_ratio_chart'));
    LURatioChart.setOption(LURatioOption);
}


//======================================2009-2014各类土地利用类型间相互转换示意图============================================
function load_lu_change_grid(){
    var lus = ['N','P', 'R', 'C', 'I'];
    data = [ [4,0,1.959], [4,1,0.015], [4,2,0], [4,3,0], [4,4,268.308],
             [3,0,0], [3,1,0], [3,2,0], [3,3,26.379], [3,4,0.010],
             [2,0,0.670], [2,1,0.016], [2,2,187.292], [2,3,0.001], [2,4,0.003],
             [1,0,4.772], [1,1,87.189], [1,2,0], [1,3,0.015], [1,4,0.269],
             [0,0,1333.423], [0,1,13.322], [0,2,11.134], [0,3,5.154], [0,4,14.407]];
    //data = data.map(function (item) {
    //    return [item[1], item[0], item[2]];
    //});

    var LUChangeOption = {
        textStyle:{color: '#424242'},
        title:{text:'Land Use Transformation(x-2009, y-2014)', left: 'center', textStyle:{color:'#424242', fontFamily: 'Times New Roman'}},

        toolbox: {
            feature: {
                saveAsImage: {
                    pixelRatio: 2
                },
                restore:{ show:true}
            }
        },
        tooltip:{
            formatter: function (params) {
                return 'Transfrom: '+params.data[2]+'km2';
            }

        },

        xAxis: {
            type: 'category',
            data: lus,
            axisLabel: {
                show: true,
                textStyle: {
                        color: '#424242',
                        fontFamily: 'Times New Roman'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: lus,
            axisLabel: {
                show: true,
                textStyle: {
                        color: '#424242',
                        fontFamily: 'Times New Roman'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 300,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: 0,
            textStyle:{ color: '#424242', fontFamily: 'Times New Roman'}
        },
        series: [{
            name: 'LU change',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true,
                    textStyle:{fontFamily:"Times New Roman"}
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    var LUChangeGrid = echarts.init(document.getElementById('lu_change_grid'));
    LUChangeGrid.setOption(LUChangeOption);
};


    var data = [[[37.45, 37.20, 23.21, 92.61]],[[32.74, 31.91, 19.50, 90.95]],[[29.83, 29.05, 17.52, 87.63]]];


//======================================模拟结果精度======================================================================
function load_acc_chart(){
    var AccuracyOption={
        textStyle:{color:'#eee'},
        backgroundColor: new echarts.graphic.RadialGradient(0.85, 0.25, 0.3, [{
        offset: 0,
        color: '#ccc'
    }, {
        offset: 1,
        color: '#eee'
    }]),
        title: {
            text: 'Simulation Accuracies of CAs',
            textStyle:{color:'#424242', fontFamily: 'Times New Roman'},
            left:'center'
        },
        legend: {
            bottom:0,
            data: ['DLPS-VCA', 'RFA-VCA', 'Patch-CA'],
            textStyle:{color:'#424242', fontSize: 14, fontFamily: 'Times New Roman'}
        },
        toolbox: {
            feature: {
                saveAsImage: {
                    pixelRatio: 2
                },
                restore:{ show:true}
            }
        },
        tooltip:{
            formatter: function (params) {
                return 'PA: '+params.data[0] + '%<br />' + 'UA: '+params.data[1]+'%<br />'+'FoM: '+params.data[2] + '%<br/>Landscape Index<br/>Similarity: '+params.data[3]+"%";
            }
        },
        xAxis: {
            name:'Producer\'s Accuracy(%)',
            nameLocation:'middle',
            nameTextStyle:{fontSize:12, color:'#424242', fontFamily: 'Times New Roman'},
            nameGap:20,
            min: 28,
            splitLine: {show:false},
            axisLabel:{
                textStyle:{color:'#424242', fontSize: 12, fontFamily: 'Times New Roman'}
            }
        },
        yAxis: {
            name:'User\'s Accuracy(%)',
            nameLocation:'middle',
            nameTextStyle:{fontSize:12, color:'#424242', fontFamily: 'Times New Roman'},
            nameGap:40,
            min: 28,
            splitLine: {
                show:false
            },
            axisLabel:{
                textStyle:{color:'#424242', fontSize: 12, fontFamily: 'Times New Roman'}
            },
            scale: false
        },
        series: [{
            name: 'DLPS-VCA',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
                return (data[2]) * 2.5;
        },

        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: 'RFA-VCA',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return (data[2]) *2.5;
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    },{
        name: 'Patch-CA',
        data: data[2],
        type: 'scatter',
        symbolSize: function (data) {
            return (data[2]) *2.5;
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 205, 78, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(25, 205, 78)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 205, 78)'
                }])
            }
        }
    }]
    };

    var AccuracyChart = echarts.init(document.getElementById('accuracy_chart'));
    AccuracyChart.setOption(AccuracyOption);
};

//============================================景观指数相似度



//=============================================加载邻域效应===============================================================
function load_neighbor_effect_chart(){
    var NeighborEffectOption = {
    title: {
        text: 'Simulation Accuracy Influenced by Buffer Distance',
        left:'center',
        textStyle:{color:'#424242', fontFamily: 'Times New Roman'}
    },
    tooltip : {trigger: 'axis'},
    legend: {
        data:['Producer\'s Accuracy','User\'s Accuracy','Figure of Merit'],
        textStyle:{color:'#424242', fontSize:14, fontFamily: 'Times New Roman'},
        bottom:0
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            restore:{ show:true}
        }
    },

    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['200m','300m','400m','500m','600m','700m','800m', '900m', '1000m'],
            name: 'Buffer Distance(m)',
            nameTextStyle:{color:'#424242', fontSize:14, fontFamily: 'Times New Roman'},
            nameLocation:'middle',
            nameGap:25,
            axisLabel:{textStyle:{color:'#424242', fontFamily: 'Times New Roman'}},
            splitLine: {
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: 'Accuracy',
            nameTextStyle:{color:'#424242',fontSize:14, fontFamily: 'Times New Roman'},
            axisLabel:{textStyle:{color:'#424242', fontFamily: 'Times New Roman'}},
            splitLine: {
                show:false
            }
        }
    ],
    series : [
        {
            name:'Producer\'s Accuracy',
            type:'line',
            //areaStyle: {normal: {}},
            data:[0.125133, 0.136308, 0.150975, 0.195241, 0.249791, 0.266014, 0.374516478, 0.348057, 0.334756],
            itemStyle:{normal:{color:'rgba(240,18,96,0.8)'}},
            symbol:'roundRect',
            lineStyle:{normal:{type:'dashed'}}
        },
        {
            name:'User\'s Accuracy',
            type:'line',
            //areaStyle: {normal: {}},
            data:[0.148446, 0.154734, 0.165141, 0.204837, 0.251264, 0.266941, 0.379069358, 0.34751, 0.359929],
            itemStyle:{normal:{color:'rgba(255,170,0,0.8)'}},
            symbol:'triangle'

        },
        {
            name:'Figure of Merit',
            type:'line',
            //areaStyle: {normal: {}},
            data:[0.0736345, 0.078674, 0.086433, 0.11223, 0.144488, 0.155593, 0.232118241, 0.212389, 0.211539],
            itemStyle:{normal:{color:'rgba(25,255,78,0.8)'}},
            lineStyle:{normal:{type:'dotted'}},
            markPoint : {
				data : [
				{type : 'max', name: '最大值'}
						]
				}
        }
    ]
};

    var NeighborEffectChart = echarts.init(document.getElementById('neighbor_effect_chart'));
    NeighborEffectChart.setOption(NeighborEffectOption);
};



function loadMap()
{
    $.get('shenzhen_district.json', function (guangdongJson) {

    //将名为"guangdong"的地图注册为guangdongJson文件，建立映射
    echarts.registerMap('shenzhen', guangdongJson);
    //利用以上的映射，在下面的map中输入"guangdong"即为guangdongJson的地图显示
    var chart = echarts.init(document.getElementById('sz_map'));

    //acc && similarity
    data_acc = [
                {'name':"Bao'an", value:[87.44, 22.80]},
                {'name':"Dapeng", value:[87.44, 16.61]},
                {'name':"Futian", value:[79.21, 19.44]},
                {'name':"Guangming", value:[71.70, 22.05]},
                {'name':"Longgang", value:[95.27, 17.08]},
                {'name':"Longhua", value:[79.91, 28.56]},
                {'name':"Luohu", value:[94.11, 11.59]},
                {'name':"Nanshan", value:[89.64, 16.67]},
                {'name':"Pingshan", value:[96.25, 24.80]},
                {'name':"Yantian", value:[93.39, 18.02]}
    ];

    chart.setOption({
        title:{text:'Accuracies and Similarities of Districts',
                textStyle:{color:'#424242',
                fontFamily: "Times New Roman",
                left: 'center'}
        },
        tooltip:{
            trigger: 'item',
			formatter: function (params) {
                return params.data.name+"<br/>FoM: "+params.data.value[1] + '%<br />' + 'Similarity: '+params.data.value[0]+'%';
                }
			},
            visualMap: {
                min: 10,
                max: 30,
                orient: 'horizontal',
                left: 'right',
                top: 'top',
                calculable: true,
                seriesIndex: 0,
                inRange: {
                    color: ['rgba(25,205,78,1.0)', 'rgba(255,170,0,0.5)','rgba(240,18,96,0.8)'],
                    symbolSize: [30, 100]
                }
            },
        series: [{
            type: 'map',
            map: 'shenzhen',

            label: {
                normal: {
                    show: true,
                    textStyle: {
                    color: 'rgba(0,0,0,0.6)'
                }
                },
                emphasis: {
                    show: true
                }
            },
            data:data_acc,
            itemStyle: {
            normal:{
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
                areaColor: null,
                shadowOffsetX: function (data) {
                    return Math.log((data.value[1]));
                },
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
            }
        }
        ]
    });
});
};
