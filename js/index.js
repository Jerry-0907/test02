// 柱状图-投资模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "item",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow"
        },
        formatter: function(params) {                        
          var toolTiphtml = ''
          if (isNaN(params.value)){
          toolTiphtml = params.name + '投资额: 0 万元'
          }else{
          toolTiphtml = params.name + ': ' + params.value + '万元'
          }                      
          return toolTiphtml;                   
          }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "治理废气",
            "燃气建设",
            "集中供热",
            "园林绿化"
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "投资额（万元）",
          type: "bar",
          barWidth: "45%",
          data: [640.91, 607.9, 819.48, 2234.86],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
    // 数据变化
    var dataAll = [
        { year: "2013", data: [640.91, 607.9, 819.48, 2234.86] },
        { year: "2017", data: [446.26, 566.67, 778.33, 2390.23] },
        { year: "2021", data: [222.09, 305.15, 558.29, 1003.11] }
    ];
  
    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
  })();
  

  // 折线图-污染物模块
  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));
  
    // (1)准备数据
    var data = {
      year: [
        [2227.36, 2078, 1851.02, 1503.3, 1348.4, 1288.44, 1233.85, 1019.66, 972.65],
        [2043.9, 1974.4, 1859.1, 854.89, 610.84, 516.12, 457.29, 318.22, 273.78],
        [1278.14, 1740.75, 1538.01, 1608.01, 1284.92, 1132.26, 1088.48, 611.4, 537.6]
      ]
    };
  
    // 2. 指定配置和数据
    var option = {
      color: ["#00f2f1", "#ed3f35", "#fcec7f"],
      tooltip: {
        // 通过坐标轴来触发
        trigger: "axis"
      },
      legend: {
        // 距离容器10%
        right: "10%",
        // 修饰图例文字的颜色
        textStyle: {
          color: "#4c9bfd"
        }
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true,
        borderColor: "#012f4a",
        containLabel: true
      },
  
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
            "2013年",
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年",
            "2019年",
            "2020年",
            "2021年"
        ],
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: "rgba(255,255,255,.7)"
        },
        // 去除x坐标轴的颜色
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        // 去除刻度
        axisTick: {
          show: false
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: "rgba(255,255,255,.7)"
        },
        // 修改y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "#012f4a"
          }
        }
      },
      series: [
        {
            name: "氮氧化物（万吨）",
            type: "line",
            // 是否让线条圆滑显示
            smooth: true,
            data: data.year[0]
          },
          {
            name: "二氧化硫（万吨）",
            type: "line",
            smooth: true,
            data: data.year[1]
          },
          {
            name: "颗粒物（万吨）",
            type: "line",
            smooth: true,
            data: data.year[2]
          }
      ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
  
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  

  // 饼形图-2021能源结构模块
  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));
  
    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function(p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
        formatter: function(params) {                        
          var toolTiphtml = ''
          if (isNaN(params.value)){
          toolTiphtml = params.name + '占比: 0 %'
          }else{
          toolTiphtml = params.name + ': ' + params.value + '%'
          }                     
          return toolTiphtml;                   
          }
      },
      legend: {
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["煤炭", "石油", "天然气", "一次电力"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "能源占比",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab"
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 56, name: "煤炭" },
            { value: 18.5, name: "石油" },
            { value: 8.9, name: "天然气" },
            { value: 16.6, name: "一次电力" }
          ]
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


  // 柱状图-能源结构变化模块
  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  
    option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          textStyle:{
            color: 'rgba(255,255,255,.5)'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        
        yAxis: {
              type: 'category',
              data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
              axisLabel: {
                color: "#fff",
                rich: {
                  lg: {
                    backgroundColor: "#339911",
                    color: "#fff",
                    borderRadius: 15,
                    // padding: 5,
                    align: "center",
                    width: 15,
                    height: 15
                  }
                }
              }           
        },
        xAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value}%'
              },
              show: false
          },
        series: [{
              name: '煤炭（%）',
              type: 'bar',
              stack: 'stack1',
              color: '#1089E7',
              data: [67.4, 65.8, 63.8, 62.2, 60.6, 59, 57.7, 56.9, 56]
          }, {
              name: '石油（%）',
              type: 'bar',
              stack: 'stack1',
              color: '#F57474',
              data: [17.1, 17.3, 18.4, 18.7, 18.9, 18.9, 19, 18.8, 18.5]
          }, {
              name: '天然气（%）',
              type: 'bar',
              stack: 'stack1',
              color: '#56D0E3',
              data: [5.3, 5.6, 5.8, 6.1, 6.9, 7.6, 8, 8.4, 8.9]
          }, {
              name: '一次性电（%）',
              type: 'bar',
              stack: 'stack1',
              color: '#F8B448',
              data: [10.2, 11.3, 12, 13, 13.6, 14.5, 15.3, 15.9, 16.6]
          }]
      };
    
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


  // 折线图-碳排放模块
  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
  
    option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b"
            }
          }
        },
        legend: {
          top: "0%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true
        },
    
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            },
    
            data: [
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021"
            ]
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20
          }
        ],
    
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
    
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "山东（万吨）",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              79967.8,
              83023.3,
              85470,
              87597.2,
              83752.9,
              90500.4,
              92288,
              90053.5,
              93635.5
            ]
          },
          {
            name: "河北（万吨）",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              73779.4,
              70680.3,
              69244,
              70134.3,
              69802.3,
              76220.6,
              75438.6,
              76110.4,
              77836.8
            ]
          },
          {
            name: "江苏（万吨）",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#fcec7f",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#fcec7f",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              67955.2,
              67443.3,
              68298,
              79127,
              71096.5,
              70197.5,
              72403,
              70186.4,
              73356.1
            ]
          },{
            name: "内蒙古（万吨）",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#f99e9b",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#f99e9b",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              57758.1,
              58458,
              58118.9,
              58589.2,
              62418.4,
              69147.6,
              75647.7,
              78964.7,
              83190.6
            ]
          },{
            name: "河南（万吨）",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#8e60df",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#8e60df",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: [
              53382,
              53751.6,
              51715.4,
              51494.2,
              49726.9,
              46287.8,
              43677.1,
              44051.8,
              45715.7
            ]
          }
  
        ]
      };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  

  // 玫瑰图-空气质量状况统计模块
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 2. 指定配置项和数据
    var option = {
      legend: {
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        formatter: function(params) {                        
          var toolTiphtml = ''
          if (isNaN(params.value)){
          toolTiphtml = params.name + '占比: 0 %'
          }else{
          toolTiphtml = params.name + ': ' + params.value + '%'
          }                   
          return toolTiphtml;                   
          }
      },
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#f5b64d",
        "#9f66f3",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff"
      ],
      series: [
        {
          name: "天数占比",
          type: "pie",
          radius: ["10%", "70%"],
          center: ["50%", "45%"],
          roseType: "radius",
          data: [
            { value: 37.8, name: "优" },
            { value: 49.6, name: "良" },
            { value: 9.4, name: "轻度污染" },
            { value: 1.8, name: "中度污染" },
            { value: 1.4, name: "重度污染及以上" }
          ],
          // 修饰饼形图文字相关的样式 label对象
          label: {
            fontSize: 10
          },
          // 修饰引导线样式
          labelLine: {
            // 连接到图形的线长度
            length: 10,
            // 连接到文字的线长度
            length2: 10
          }
        }
      ]
    };
  
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
  })();
  