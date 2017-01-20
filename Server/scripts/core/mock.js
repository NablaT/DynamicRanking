var dataForPie = {
    "chartName": "pie",
    "displayedName": "Pie Template",
    "xTitle": "",
    "yTitle": "",
    "filters": [
        {
            "name": "Filter template",
            "x": [],
            "series": [
                {
                    "name": "Residential",
                    "values": [
                        "38"
                    ]
                },
                {
                    "name": "Non-Residential",
                    "values": [
                        "27"
                    ]
                },
                {
                    "name": "Utility",
                    "values": [
                        "18"
                    ]
                },
                {
                    "name": "Test",
                    "values": [
                        "10"
                    ]
                }
            ]
        }
    ]
};
var dataForBarScatter = {
    "chartName": "ptrTrend",
    "displayedName": "PTR Trend",
    "xTitle": "week",
    "yTitle": "backlog",
    "filters": [
        {
            "name": "ALL PTR",
            "x": [
                "201632",
                "201633",
                "201634",
                "201635",
                "201636",
                "201637",
                "201638",
                "201639",
                "201640",
                "201641",
                "201642",
                "201643"
            ],
            "series": [
                {
                    "name": "Backlog",
                    "values": [
                        "696",
                        "704",
                        "723",
                        "727",
                        "733",
                        "744",
                        "746",
                        "761",
                        "490",
                        "525",
                        "525",
                        "527"
                    ]
                },
                {
                    "name": "Closed",
                    "values": [
                        "99",
                        "69",
                        "94",
                        "55",
                        "91",
                        "77",
                        "88",
                        "71",
                        "85",
                        "100",
                        "79",
                        "11"
                    ]
                },
                {
                    "name": "Logged",
                    "values": [
                        "77",
                        "77",
                        "88",
                        "59",
                        "84",
                        "68",
                        "67",
                        "98",
                        "72",
                        "103",
                        "100",
                        "9"
                    ]
                }
            ]
        },
        {
            "name": "ALL PI",
            "x": [
                "201632",
                "201633",
                "201634",
                "201635",
                "201636",
                "201637",
                "201638",
                "201639",
                "201640",
                "201641",
                "201642",
                "201643"
            ],
            "series": [
                {
                    "name": "Backlog",
                    "values": [
                        "1154",
                        "1212",
                        "1233",
                        "1203",
                        "1180",
                        "1161",
                        "1175",
                        "1208",
                        "1187",
                        "1174",
                        "1157",
                        "1175"
                    ]
                },
                {
                    "name": "Closed",
                    "values": [
                        "1234",
                        "893",
                        "1062",
                        "1043",
                        "1118",
                        "1080",
                        "1114",
                        "1088",
                        "1048",
                        "1176",
                        "1157",
                        "141"
                    ]
                },
                {
                    "name": "Logged",
                    "values": [
                        "1289",
                        "1030",
                        "1162",
                        "1091",
                        "1200",
                        "1145",
                        "1237",
                        "1207",
                        "1144",
                        "1259",
                        "1228",
                        "166"
                    ]
                }
            ]
        }
    ]
};
var dataForPyramid = {
    "chartName": "pyramid",
    "displayedName": "Pyramid Template",
    "xTitle": "X axis",
    "yTitle": "Y axis",
    "filters": [
        {
            "name": "Severity 1",
            "x": ["1", "2","3", "4"],
            "series": [
                {
                    "name": "Serie 1",
                    "values": [
                        "1", "4", "9", "16"
                    ]
                },
                {
                    "name": "Serie 2",
                    "values": [
                        "-6", "-8", "-4.5", "8"
                    ]
                },
                {
                    "name": "Serie 3",
                    "values": [
                        "-15", "-3", "4.5", "-8"
                    ]
                },
                {
                    "name": "Serie 4",
                    "values": [
                        "-1", "3", "-3", "-4"
                    ]
                }
            ]
        }
    ]
};

module.exports = {
    dataForPie:dataForPie,
    dataForBarScatter:dataForBarScatter,
    dataForPyramid:dataForPyramid
};