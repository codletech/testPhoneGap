window.cAppDataJSON = {
    "_id": {
        "$oid": "54454949ff3211020039f812"
    },
    "appName": "CAF Showcase",
    "__v": 0,
    "app_features": [],
    "app_preferences": [],
    "data": {
        "app-main-theme": "flat-blue",
        "navigation": [
            {
                "data": {
                    "link": "",
                    "text": "Main",
                    "icon": "circle57"
                }
            },
            {
                "data": {
                    "link": "buttons",
                    "text": "Buttons",
                    "icon": "large16"
                }
            },
            {
                "data": {
                    "link": "form",
                    "text": "Form",
                    "icon": "text78"
                }
            },
            {
                "data": {
                    "link": "sliders",
                    "text": "Sliders",
                    "icon": "image63"
                }
            },
            {
                "data": {
                    "link": "videos",
                    "text": "Videos",
                    "icon": "video121"
                }
            },
            {
                "data": {
                    "link": "tabs",
                    "text": "Tabs",
                    "icon": "two151"
                }
            },
            {
                "data": {
                    "link": "dialogs",
                    "text": "Dialogs",
                    "icon": "exclamation14"
                }
            },
            {
                "data": {
                    "link": "data",
                    "text": "Data",
                    "icon": "table34"
                }
            }
        ]
    },
    "designs": {
        "form-button-base": {
            "marginLeft": 1,
            "marginRight": 1,
            "widthXS": 11,
            "widthSM": 7,
            "marginTop": 1,
            "height": 40,
            "inline": "height: inherit;"
        },
        "text-input": {
            "widthXS": 11,
            "widthSM": 7,
            "margin": "centered",
            "marginTop": 1,
            "marginBottom": 2
        },
        "dialogs-button": {
            "active": {
                "color": {
                    "level": 5,
                    "color": "White"
                },
                "bgColor": {
                    "level": 8,
                    "color": "Cyan"
                }
            },
            "round": 0,
            "marginTop": 1,
            "bgColor": {
                "level": 6,
                "color": "White"
            },
            "color": {
                "level": 8,
                "color": "Cyan"
            },
            "fontSize": 18,
            "widthXS": 12,
            "height": 60,
            "textAlign": "left",
            "boxSizing": "borderBox",
            "paddingLeft": 6
        },
        "main-button": {
            "active": {
                "color": {
                    "level": 5,
                    "color": "White"
                },
                "bgColor": {
                    "level": 8,
                    "color": "Cyan"
                }
            },
            "round": 0,
            "marginTop": 1,
            "bgColor": {
                "level": 6,
                "color": "White"
            },
            "color": {
                "level": 8,
                "color": "Cyan"
            },
            "fontSize": 18,
            "widthXS": 12,
            "widthSM": 6,
            "height": 60,
            "textAlign": "left",
            "boxSizing": "borderBox",
            "paddingLeft": 6
        },
        "header-button": {
            "active": {
                "bgColor": {
                    "level": 10,
                    "color": "LightBlue"
                }
            }
        },
        "right-menu-button": {
            "active": {
                "color": {
                    "level": 5,
                    "color": "White"
                },
                "bgColor": {
                    "level": 17,
                    "color": "Purple"
                }
            },
            "round": 0,
            "marginTop": 1,
            "color": {
                "level": 2,
                "color": "Gray"
            },
            "fontSize": 16,
            "widthXS": 12,
            "height": 45,
            "textAlign": "right",
            "boxSizing": "borderBox",
            "paddingRight": 6
        },
        "left-menu-button": {
            "active": {
                "color": {
                    "level": 5,
                    "color": "White"
                },
                "bgColor": {
                    "level": 17,
                    "color": "Indigo"
                }
            },
            "round": 0,
            "marginTop": 1,
            "color": {
                "level": 2,
                "color": "Gray"
            },
            "fontSize": 16,
            "widthXS": 12,
            "height": 45,
            "textAlign": "left",
            "boxSizing": "borderBox",
            "paddingLeft": 6
        }
    },
    "last_update": {
        "$date": "2014-10-20T17:41:29.051Z"
    },
    "objects": [
        {
            "data": {
                "childs": [
                    "side-menu",
                    "main-view",
                    "drop-down-menu"
                ]
            },
            "uname": "app-container",
            "type": "AppContainer",
            "_id": {
                "$oid": "544567a1ff3211020039f8f7"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "data": {
                "leftContainer": "side-menu-left-container",
                "rightContainer": "side-menu-right-container"
            },
            "uname": "side-menu",
            "type": "SideMenu",
            "_id": {
                "$oid": "544567a1ff3211020039f8f6"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "bgColor": {
                    "color": "Indigo",
                    "level": 15
                }
            },
            "data": {
                "childs": [
                    "left-menu"
                ]
            },
            "uname": "side-menu-left-container",
            "type": "SideMenuContainer",
            "_id": {
                "$oid": "544567a1ff3211020039f8f5"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "template": true
            },
            "data": {
                "template": {
                    "container": {
                        "type": "Container"
                    },
                    "object": {
                        "type": "Button",
                        "design": {
                            "parents": [
                                "left-menu-button"
                            ]
                        },
                        "logic": {
                            "iconRight": {
                                "name": "#this.data.icon",
                                "size": 28,
                                "color": null
                            },
                            "sideMenuSwitch": "left",
                            "text": "#this.data.text",
                            "link": {
                                "path": "#this.data.link",
                                "data": null
                            }
                        }
                    },
                    "data": "#globals.navigation"
                }
            },
            "uname": "left-menu",
            "type": "Template",
            "_id": {
                "$oid": "544567a1ff3211020039f8f4"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "bgColor": {
                    "color": "Purple",
                    "level": 15
                }
            },
            "data": {
                "childs": [
                    "right-menu"
                ]
            },
            "uname": "side-menu-right-container",
            "type": "SideMenuContainer",
            "_id": {
                "$oid": "544567a1ff3211020039f8f3"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "template": true
            },
            "data": {
                "template": {
                    "container": {
                        "type": "Container"
                    },
                    "object": {
                        "type": "Button",
                        "design": {
                            "parents": [
                                "right-menu-button"
                            ]
                        },
                        "logic": {
                            "iconLeft": {
                                "name": "#this.data.icon",
                                "size": 28,
                                "color": null
                            },
                            "sideMenuSwitch": "right",
                            "text": "#this.data.text",
                            "link": {
                                "path": "#this.data.link",
                                "data": null
                            }
                        }
                    },
                    "data": "#globals.navigation"
                }
            },
            "uname": "right-menu",
            "type": "Template",
            "_id": {
                "$oid": "544567a1ff3211020039f8f2"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "data": {
                "childs": [
                    "header",
                    "content",
                    "footer"
                ]
            },
            "uname": "main-view",
            "type": "MainView",
            "_id": {
                "$oid": "544567a1ff3211020039f8f1"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "bgColor": {
                    "color": "LightBlue",
                    "level": 8
                }
            },
            "data": {
                "left": [
                    "header-button-left-0",
                    "header-button-back"
                ],
                "right": [
                    "header-button-right-0",
                    "header-button-right-1"
                ]
            },
            "uname": "header",
            "type": "Header",
            "_id": {
                "$oid": "544567a1ff3211020039f8f0"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "icon": {
                    "name": "ellipsis",
                    "size": 38,
                    "align": null,
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "dialogSwitch": "drop-down-menu"
            },
            "design": {
                "parents": [
                    "header-button"
                ]
            },
            "uname": "header-button-right-0",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8ef"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "icon": {
                    "name": "pencil52",
                    "size": 38,
                    "align": null,
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "link": {
                    "path": "form",
                    "data": null
                }
            },
            "design": {
                "parents": [
                    "header-button"
                ]
            },
            "uname": "header-button-right-1",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8ee"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "icon": {
                    "name": "menu24",
                    "size": 38,
                    "align": null,
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "sideMenuSwitch": "left"
            },
            "design": {
                "parents": [
                    "header-button"
                ]
            },
            "uname": "header-button-left-0",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8ed"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "icon": {
                    "name": "left46",
                    "size": 34,
                    "align": null,
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "backButton": true
            },
            "design": {
                "parents": [
                    "header-button"
                ]
            },
            "uname": "header-button-back",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8ec"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "data": {
                "topView": "header-button-right-0",
                "dialogWidth": "250",
                "list": {
                    "type": "Template",
                    "data": {
                        "template": {
                            "container": {
                                "type": "Container"
                            },
                            "object": {
                                "type": "Button",
                                "design": {
                                    "textAlign": "left"
                                },
                                "logic": {
                                    "iconRight": {
                                        "name": "right65",
                                        "size": 28,
                                        "color": null
                                    },
                                    "iconLeft": {
                                        "name": "#this.data.icon",
                                        "size": 28,
                                        "color": null
                                    },
                                    "text": "#this.data.text",
                                    "link": {
                                        "path": "#this.data.link",
                                        "data": null
                                    }
                                }
                            },
                            "callback": "function (index){CLog.dlog('onClick item: '+index)}",
                            "data": "#globals.navigation"
                        }
                    },
                    "logic": {
                        "template": true
                    }
                },
                "chooseCallback": "function (index,value){\r\n                CLog.dlog(index+\") \"+value);\r\n            }",
                "listCallbacks": [
                    "function (){CLog.dlog('Dvir Clicked')}",
                    "function (){CLog.dlog('Cohen Clicked')}"
                ],
                "dialogColor": {
                    "color": "Teal",
                    "level": 15
                },
                "listBorderColor": {
                    "color": "Teal",
                    "level": 14
                },
                "listDesign": {
                    "textAlign": "left",
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "contentColor": {
                    "color": "White"
                },
                "bgColor": {
                    "color": "Teal",
                    "level": 13
                },
                "destroyOnHide": false
            },
            "uname": "drop-down-menu",
            "type": "Dialog",
            "_id": {
                "$oid": "544567a1ff3211020039f8eb"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "bgColor": {
                    "color": "LightBlue",
                    "level": 8
                }
            },
            "data": {
                "childs": [
                    "footer-message"
                ]
            },
            "uname": "footer",
            "type": "Footer",
            "_id": {
                "$oid": "544567a1ff3211020039f8ea"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "By Codletech"
            },
            "design": {
                "color": {
                    "color": "White",
                    "level": 5
                },
                "textAlign": "center",
                "fontWeight": "normal"
            },
            "uname": "footer-message",
            "type": "Label",
            "_id": {
                "$oid": "544567a1ff3211020039f8e9"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "data": {
                "childs": [
                    "main-page",
                    "category-page",
                    "form-page",
                    "category-page",
                    "tabs-page",
                    "sliders-page",
                    "videos-page",
                    "dialogs-page",
                    "data-page"
                ]
            },
            "uname": "content",
            "type": "Content",
            "_id": {
                "$oid": "544567a1ff3211020039f8e8"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "main-buttons-template"
                ],
                "page": {
                    "name": "",
                    "title": "Main",
                    "onLoad": "function (){}"
                }
            },
            "uname": "main-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e7"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "form"
                ],
                "page": {
                    "name": "form",
                    "title": "Form",
                    "onLoad": "function () {}"
                }
            },
            "uname": "form-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e6"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "tabber"
                ],
                "page": {
                    "name": "tabs",
                    "title": "Tabs",
                    "onLoad": "function () {}"
                }
            },
            "uname": "tabs-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e5"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "basic-gallery"
                ],
                "page": {
                    "name": "sliders",
                    "title": "Sliders",
                    "onLoad": "function () {}"
                }
            },
            "uname": "sliders-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e4"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "sample-youtube",
                    "sample-vimeo"
                ],
                "page": {
                    "name": "videos",
                    "title": "Videos",
                    "onLoad": "function () {}"
                }
            },
            "uname": "videos-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e3"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "dialogs-show-dialog",
                    "dialogs-show-error",
                    "dialogs-show-success",
                    "dialogs-show-warning"
                ],
                "page": {
                    "name": "dialogs",
                    "title": "Dialogs",
                    "onLoad": "function () {}"
                }
            },
            "uname": "dialogs-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e2"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true
            },
            "data": {
                "childs": [
                    "main-reload-dynamic",
                    "dynamic-buttons"
                ],
                "page": {
                    "name": "data",
                    "title": "Data",
                    "onLoad": "function () {}"
                }
            },
            "uname": "data-page",
            "type": "Page",
            "_id": {
                "$oid": "544567a1ff3211020039f8e1"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "page": true,
                "template": true
            },
            "data": {
                "childs": [
                    "tabber"
                ],
                "page": {
                    "name": "category",
                    "title": "Category Page",
                    "onLoad": "function (params) {CLog.dlog(params);}"
                },
                "template": {
                    "container": {
                        "type": "Container"
                    },
                    "objects": [
                        {
                            "type": "Label",
                            "uname": "#/label",
                            "design": {
                                "height": 40,
                                "bgColor": {
                                    "color": "Red",
                                    "level": 6
                                },
                                "widthSM": 10,
                                "widthXS": 10,
                                "marginRight": 1,
                                "marginLeft": 1,
                                "marginTop": 1,
                                "round": 0
                            },
                            "logic": {
                                "text": "Title: #.data.category"
                            }
                        }
                    ]
                }
            },
            "uname": "category-page",
            "type": "TemplatePage",
            "_id": {
                "$oid": "544567a1ff3211020039f8e0"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "template": true
            },
            "data": {
                "template": {
                    "url": "http://codletech.net/CAF/caf.php",
                    "autoLoad": true,
                    "queryData": null,
                    "container": {
                        "type": "Container"
                    },
                    "objects": [
                        {
                            "type": "Label",
                            "design": {
                                "height": 40,
                                "color": {
                                    "color": "DeepOrange",
                                    "level": 8
                                },
                                "widthSM": 8,
                                "widthXS": 8,
                                "marginRight": 1,
                                "marginLeft": 1,
                                "marginTop": 1,
                                "round": 0,
                                "border": {
                                    "bottom": 1
                                },
                                "borderColor": {
                                    "color": "DeepOrange",
                                    "level": 8
                                }
                            },
                            "logic": {
                                "text": "Dynamic Load Title #this.data.name"
                            }
                        },
                        {
                            "type": "Button",
                            "design": {
                                "height": 40,
                                "widthSM": 8,
                                "widthXS": 8,
                                "marginRight": 1,
                                "marginLeft": 1,
                                "marginTop": 1,
                                "marginBottom": 1,
                                "color": {
                                    "color": "DeepOrange",
                                    "level": 8
                                },
                                "border": {
                                    "all": 1
                                },
                                "borderColor": {
                                    "color": "DeepOrange",
                                    "level": 8
                                },
                                "active": {
                                    "bgColor": {
                                        "color": "DeepOrange",
                                        "level": 12
                                    },
                                    "color": {
                                        "color": "White",
                                        "level": 5
                                    }
                                }
                            },
                            "logic": {
                                "text": "Dynamic Load Button #this.data.name",
                                "showDialog": {
                                    "data": {
                                        "title": "Hello #.data.name !",
                                        "textContent": "#.data.message",
                                        "confirmText": "Confirm",
                                        "confirmCallback": "function () { CLog.dlog('Confirm Callback')}"
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            "uname": "dynamic-buttons",
            "type": "Template",
            "_id": {
                "$oid": "544567a1ff3211020039f8df"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "buttonReloadDynamic": {
                    "object": "dynamic-buttons",
                    "reset": true,
                    "onFinish": null,
                    "queryData": null
                },
                "text": "Reload"
            },
            "design": {
                "height": 40,
                "widthSM": 11,
                "widthXS": 11,
                "marginRight": 1,
                "marginLeft": 1,
                "marginTop": 1,
                "color": {
                    "color": "Green",
                    "level": 8
                },
                "border": {
                    "all": 1
                },
                "borderColor": {
                    "color": "DarkGreen",
                    "level": 8
                },
                "active": {
                    "bgColor": {
                        "color": "DarkGreen",
                        "level": 8
                    },
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                }
            },
            "uname": "main-reload-dynamic",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8de"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "template": true
            },
            "data": {
                "template": {
                    "container": {
                        "type": "Container",
                        "design": {
                            "display": "inline"
                        }
                    },
                    "object": {
                        "type": "Button",
                        "design": {
                            "parents": [
                                "main-button"
                            ]
                        },
                        "logic": {
                            "iconRight": {
                                "name": "right65",
                                "size": 40,
                                "color": null
                            },
                            "iconLeft": {
                                "name": "#this.data.icon",
                                "size": 35,
                                "color": null
                            },
                            "text": "#this.data.text",
                            "link": {
                                "path": "#this.data.link",
                                "data": null
                            }
                        }
                    },
                    "pullToRefresh": true,
                    "callback": "function (index){CLog.dlog('onClick item: '+index)}",
                    "data": "#globals.navigation"
                }
            },
            "uname": "main-buttons-template",
            "type": "Template",
            "_id": {
                "$oid": "544567a1ff3211020039f8dd"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "iconRight": {
                    "name": "right65",
                    "size": 40,
                    "color": null
                },
                "iconLeft": {
                    "name": "cross55",
                    "size": 35,
                    "color": null
                },
                "text": "Show Error",
                "showDialog": {
                    "data": {
                        "title": "Error Occurred",
                        "textContent": "Something went wrong, please report to us at: Codletech@gmail.com.",
                        "confirmText": "Close",
                        "dialogColor": {
                            "color": "Red",
                            "level": 7
                        }
                    }
                }
            },
            "design": {
                "parents": [
                    "dialogs-button"
                ]
            },
            "uname": "dialogs-show-error",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8dc"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "iconRight": {
                    "name": "right65",
                    "size": 40,
                    "color": null
                },
                "iconLeft": {
                    "name": "check38",
                    "size": 35,
                    "color": null
                },
                "text": "Show Success",
                "showDialog": {
                    "data": {
                        "title": "Success",
                        "textContent": "You should be happy.",
                        "confirmText": "Great",
                        "dialogColor": {
                            "color": "DarkGreen",
                            "level": 8
                        }
                    }
                }
            },
            "design": {
                "parents": [
                    "dialogs-button"
                ]
            },
            "uname": "dialogs-show-success",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8db"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "iconRight": {
                    "name": "right65",
                    "size": 40,
                    "color": null
                },
                "iconLeft": {
                    "name": "warning25",
                    "size": 35,
                    "color": null
                },
                "text": "Show Warning",
                "showDialog": {
                    "data": {
                        "title": "Warning",
                        "textContent": "Please don't do anything that can cause damage to the environment.",
                        "confirmText": "Got it",
                        "dialogColor": {
                            "color": "DeepOrange",
                            "level": 7
                        }
                    }
                }
            },
            "design": {
                "parents": [
                    "dialogs-button"
                ]
            },
            "uname": "dialogs-show-warning",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8da"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "iconRight": {
                    "name": "right65",
                    "size": 40,
                    "color": null
                },
                "iconLeft": {
                    "name": "building26",
                    "size": 35,
                    "color": null
                },
                "text": "Show Complex Dialog",
                "showDialog": {
                    "data": {
                        "title": "Confirmation",
                        "textContent": "Always do good things. Good things lead to better society, happiness, health and freedom.",
                        "list": {
                            "type": "Template",
                            "data": {
                                "template": {
                                    "container": {
                                        "type": "Container"
                                    },
                                    "object": {
                                        "type": "Button",
                                        "design": {
                                            "textAlign": "left",
                                            "color": {
                                                "color": "Cyan",
                                                "level": 9
                                            }
                                        },
                                        "logic": {
                                            "iconRight": {
                                                "name": "right65",
                                                "size": 28,
                                                "color": null
                                            },
                                            "iconLeft": {
                                                "name": "#this.data.icon",
                                                "size": 28,
                                                "color": null
                                            },
                                            "text": "#this.data.text",
                                            "link": {
                                                "path": "#this.data.link",
                                                "data": null
                                            }
                                        }
                                    },
                                    "callback": "function (index){CLog.dlog('onClick item: '+index)}",
                                    "data": [
                                        {
                                            "data": {
                                                "icon": "circle57",
                                                "text": "Main",
                                                "link": ""
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "large16",
                                                "text": "Buttons",
                                                "link": "buttons"
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "text78",
                                                "text": "Form",
                                                "link": "form"
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "image63",
                                                "text": "Sliders",
                                                "link": "sliders"
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "video121",
                                                "text": "Videos",
                                                "link": "videos"
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "two151",
                                                "text": "Tabs",
                                                "link": "tabs"
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "exclamation14",
                                                "text": "Dialogs",
                                                "link": "dialogs"
                                            }
                                        },
                                        {
                                            "data": {
                                                "icon": "table34",
                                                "text": "Data",
                                                "link": "data"
                                            }
                                        }
                                    ]
                                }
                            },
                            "logic": {
                                "template": true
                            }
                        },
                        "hideOnListChoose": true,
                        "cancelText": "Cancel",
                        "cancelCallback": "function () { CLog.dlog('Cancel Callback')}",
                        "confirmText": "Confirm",
                        "confirmCallback": "function () { CLog.dlog('Confirm Callback')}",
                        "extraText": "Extra Button",
                        "extraCallback": "function () { CLog.dlog('Extra Callback')}"
                    }
                }
            },
            "design": {
                "parents": [
                    "dialogs-button"
                ]
            },
            "uname": "dialogs-show-dialog",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8d9"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "widthSM": 5,
                "widthXS": 10,
                "padding": 5,
                "round": 3,
                "marginTop": 10
            },
            "data": {
                "inputs": [
                    "form-input-name",
                    "form-input-phone"
                ],
                "onSubmit": "function (values) { CLog.log(values); }",
                "saveToUrl": null,
                "saveToUrlCallback": "function (responseData){}",
                "childs": [
                    "form-input-name",
                    "form-input-phone",
                    "form-submit-button",
                    "form-send-to-url-button",
                    "form-save-to-local-storage-button",
                    "form-clear-button"
                ]
            },
            "uname": "form",
            "type": "Form",
            "_id": {
                "$oid": "544567a1ff3211020039f8d8"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "loadInputFromStorage": true
            },
            "design": {
                "parents": [
                    "text-input"
                ]
            },
            "data": {
                "name": "name",
                "required": true,
                "placeholder": "Enter Your Name"
            },
            "uname": "form-input-name",
            "type": "Input",
            "_id": {
                "$oid": "544567a1ff3211020039f8d7"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "loadInputFromStorage": true
            },
            "design": {
                "parents": [
                    "text-input"
                ]
            },
            "data": {
                "name": "phone",
                "required": true,
                "placeholder": "Enter Your Phone Number"
            },
            "uname": "form-input-phone",
            "type": "Input",
            "_id": {
                "$oid": "544567a1ff3211020039f8d6"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Submit Form",
                "icon": {
                    "name": "right43",
                    "size": 40,
                    "align": "right",
                    "color": "White"
                },
                "formSubmitButton": "form"
            },
            "design": {
                "parents": [
                    "form-button-base"
                ],
                "bgColor": {
                    "color": "DarkGreen",
                    "level": 7
                },
                "active": {
                    "bgColor": {
                        "color": "DarkGreen",
                        "level": 9
                    }
                }
            },
            "uname": "form-submit-button",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8d5"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Send to URL",
                "icon": {
                    "name": "right43",
                    "size": 40,
                    "align": "right",
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "formSendToUrlButton": "form"
            },
            "design": {
                "parents": [
                    "form-button-base"
                ],
                "bgColor": {
                    "color": "LightBlue",
                    "level": 5
                },
                "active": {
                    "bgColor": {
                        "color": "LightBlue",
                        "level": 7
                    }
                }
            },
            "uname": "form-send-to-url-button",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8d4"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Save to Local Storage",
                "icon": {
                    "name": "right43",
                    "size": 40,
                    "align": "right",
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "formSaveToLocalStorageButton": "form"
            },
            "design": {
                "parents": [
                    "form-button-base"
                ],
                "bgColor": {
                    "color": "Purple",
                    "level": 5
                },
                "active": {
                    "bgColor": {
                        "color": "Purple",
                        "level": 7
                    }
                }
            },
            "uname": "form-save-to-local-storage-button",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8d3"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Clear Form",
                "icon": {
                    "name": "right43",
                    "size": 40,
                    "align": "right",
                    "color": {
                        "color": "White",
                        "level": 5
                    }
                },
                "formClearButton": "form"
            },
            "design": {
                "parents": [
                    "form-button-base"
                ],
                "bgColor": {
                    "color": "Red",
                    "level": 5
                },
                "active": {
                    "bgColor": {
                        "color": "Red",
                        "level": 7
                    }
                }
            },
            "uname": "form-clear-button",
            "type": "Button",
            "_id": {
                "$oid": "544567a1ff3211020039f8d2"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "data": {
                "pagination": true,
                "slidesPerView": 1,
                "images": [
                    "http://ourevent.co.il/wp-content/uploads/2014/04/1-1.jpg",
                    "http://ourevent.co.il/wp-content/uploads/2014/04/2-1.jpg",
                    "http://ourevent.co.il/wp-content/uploads/2014/04/3-1.jpg",
                    "http://ourevent.co.il/wp-content/uploads/2014/04/4-1.jpg"
                ]
            },
            "uname": "basic-gallery",
            "type": "Gallery",
            "_id": {
                "$oid": "544567a1ff3211020039f8d1"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "data": {
                "tabs": [
                    "tab-1",
                    "tab-2",
                    "tab-3"
                ],
                "buttons": {
                    "perView": 2,
                    "height": 45,
                    "texts": [
                        "Tab 1",
                        "Tab 2",
                        "Tab 3"
                    ],
                    "design": {
                        "bgColor": {
                            "color": "Red",
                            "level": 5
                        },
                        "active": {
                            "bgColor": {
                                "color": "Red",
                                "level": 6
                            }
                        },
                        "hold": {
                            "bgColor": {
                                "color": "Red",
                                "level": 8
                            }
                        }
                    }
                }
            },
            "uname": "tabber",
            "type": "Tabber",
            "_id": {
                "$oid": "544567a1ff3211020039f8d0"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Tab 1 Content"
            },
            "design": {
                "bgColor": {
                    "color": "White",
                    "level": 6
                },
                "color": {
                    "color": "Cyan",
                    "level": 8
                },
                "fontWeight": "bold",
                "paddingTop": 30
            },
            "data": {
                "childs": []
            },
            "uname": "tab-1",
            "type": "Tab",
            "_id": {
                "$oid": "544567a1ff3211020039f8cf"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Tab 2 Content"
            },
            "design": {
                "bgColor": {
                    "color": "White",
                    "level": 6
                },
                "color": {
                    "color": "Green",
                    "level": 8
                },
                "fontWeight": "bold",
                "paddingTop": 30
            },
            "data": {
                "childs": []
            },
            "uname": "tab-2",
            "type": "Tab",
            "_id": {
                "$oid": "544567a1ff3211020039f8ce"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "logic": {
                "text": "Tab 3 Content"
            },
            "design": {
                "bgColor": {
                    "color": "White",
                    "level": 6
                },
                "color": {
                    "color": "Brown",
                    "level": 8
                },
                "fontWeight": "bold",
                "paddingTop": 30
            },
            "data": {
                "childs": []
            },
            "uname": "tab-3",
            "type": "Tab",
            "_id": {
                "$oid": "544567a1ff3211020039f8cd"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "widthXS": 10,
                "height": 250,
                "marginTop": 4
            },
            "data": {
                "src": "http://www.youtube.com/watch?v=I9ix0ECNuyE"
            },
            "uname": "sample-youtube",
            "type": "Video",
            "_id": {
                "$oid": "544567a1ff3211020039f8cc"
            },
            "extends": [],
            "platform": [],
            "version": 1
        },
        {
            "design": {
                "widthXS": 10,
                "height": 250
            },
            "data": {
                "src": "http://vimeo.com/6927295"
            },
            "uname": "sample-vimeo",
            "type": "Video",
            "_id": {
                "$oid": "544567a1ff3211020039f8cb"
            },
            "extends": [],
            "platform": [],
            "version": 1
        }
    ],
    "plugins": [],
    "version": 9
};