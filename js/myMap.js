(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".map .chart"));
    // 2. 指定配置和数据

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".map .chart"));

    // 指定图表的配置项和数据
    var name_title = "2021年各省/自治区/直辖市臭氧年平均浓度值"
    var mapName = 'china'
    var data = [
    { name: '广东', value: 144 },
    { name: '江苏', value: 163 },
    { name: '山东', value: 166 },
    { name: '浙江', value: 142 },
    { name: '河南', value: 163 },
    { name: '四川', value: 127 },
    { name: '湖北', value: 138 },
    { name: '湖南', value: 127 },
    { name: '河北', value: 162 },
    { name: '福建', value: 107 },
    { name: '上海', value: 145 },
    { name: '北京', value: 149 },
    { name: '安徽', value: 148 },
    { name: '辽宁', value: 131 },
    { name: '陕西', value: 146 },
    { name: '江西', value: 126 },
    { name: '重庆', value: 127 },
    { name: '广西', value: 122 },
    { name: '天津', value: 160 },
    { name: '云南', value: 126 },
    { name: '内蒙古', value: 132 },
    { name: '山西', value: 169 },
    { name: '黑龙江', value: 111 },
    { name: '吉林', value: 116 },
    { name: '贵州', value: 111 },
    { name: '新疆', value: 90 },
    { name: '甘肃', value: 129 },
    { name: '海南', value: 111 },
    { name: '宁夏', value: 145 },
    { name: '青海', value: 129 }
    
    ];
    
  


    var option = {
        title: {
            text: name_title,
            x: 'center',
            textStyle: {
                fontSize: 24,
                color: "#fff"
            },                
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {                        
                    var toolTiphtml = ''
                    if (isNaN(params.value)){
                    toolTiphtml = params.name + '无相关数据'
                    }else{
                    toolTiphtml = params.name + '浓度值: ' + params.value + 'μg/m3'
                    }
                    //console.log(toolTiphtml)                        
                    return toolTiphtml;                   
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        visualMap: {
            show: true,
            left: 'left',
            top: 'bottom',
            seriesIndex: [0],
            type:'piecewise',
            pieces:[
                {min:160, color: 'rgb(240,148,118)'},
                {min:140, max:159, color: 'rgb(237,187,171)'},
                {min:120, max:139, color: 'rgb(192,214,191)'},
                {min:100, max:119, color: 'rgb(228,235,204)'},
                {min:0, max:99, color: 'rgb(247,247,203)'},
            ],            
            textStyle: {
                color: '#fff',
                fontSize: '14px'
            }
        },            
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: true,
                    fontSize:12,
                    fontWeight:'bold'
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#FFFFFF',
                    borderColor: '#666666',
                },
                emphasis: {
                    areaColor: '#0099CC',
                }
            }
        },
        series: [
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,           
                animation: false,
                data: data
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
      });
    })();
