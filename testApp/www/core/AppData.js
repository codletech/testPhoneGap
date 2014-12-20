window.cAppDataJSON = {"objects":[{"type":"Header","uname":"header","data":{"left":["header-button-back"],"isMainHeader":true,"titleCentered":true,"titleDesign":{"fontSize":18}},"design":{"bgColor":{"color":"BlueB","level":11},"color":{"color":"White","level":5},"fontWeight":"bold"},"logic":{}},{"type":"Button","uname":"header-button-back","data":{},"design":{"parents":["header-button"]},"logic":{"icon":{"name":"left46","size":38,"align":null,"color":{"color":"White","level":5},"design":null},"backButton":true}},{"type":"TemplatePage","uname":"page-vehicle-edit","data":{"page":{"name":"vehicle-edit","title":"Edit","onLoads":[null],"header":"header-vehicle-edit","onLoadPrepares":["function (params,page){\n        var vehicleTemplate = cobject(crelativeObject(thisObject.uid(),'page-vehicle-edit-template'));\n        vehicleTemplate.setTemplateData([new CDynamicData('ldb.vehicles.element.'+params.id)]); // Reload Template\n        if (CUtils.isEmpty(params.id))\n            CTitleHandler.setTitle('Add');\n    }"],"onShows":["function (){\n        window.appFunctions.checkUserPass(\n            function(){},\n            function(){ CPager.moveBack();},\n            function(){ CPager.moveBack();}\n        );\n    }"]},"template":{"container":{"type":"Container"},"object":{"type":"Template","uname":"#/page-vehicle-edit-template","data":{"template":{"container":{"type":"Container"},"objects":[{"type":"Form","uname":"#/page-preferences-form","data":{"inputs":["#/prefs-input-title","#/prefs-input-phone","#/prefs-input-msg-lock","#/prefs-input-msg-unlock","#/prefs-input-msg-map","#/prefs-input-msg-check"],"childs":["#/prefs-label-title","#/prefs-input-title","#/prefs-label-phone","#/prefs-input-phone","#/prefs-label-msg-lock","#/prefs-input-msg-lock","#/prefs-label-msg-unlock","#/prefs-input-msg-unlock","#/prefs-label-msg-map","#/prefs-input-msg-map","#/prefs-label-msg-check","#/prefs-input-msg-check"],"onSubmit":"function (values){\n        var id = CPageData.get('id');\n        CLocalDB.update('vehicles',id,values);\n    }"},"design":{"width":"90%","padding":5,"marginTop":4},"logic":{}},{"type":"Label","uname":"#/prefs-label-title","data":{},"design":{"parents":["prefs-text-label"]},"logic":{"text":"Title"}},{"type":"Input","uname":"#/prefs-input-title","data":{"name":"title","placeholder":"Enter Title","value":"#.data.title"},"design":{"parents":["prefs-text-input"]},"logic":{}},{"type":"Label","uname":"#/prefs-label-phone","data":{},"design":{"parents":["prefs-text-label"]},"logic":{"text":"Phone Number"}},{"type":"Input","uname":"#/prefs-input-phone","data":{"name":"to-phone","placeholder":"Enter Phone Number","value":"#.data.to-phone"},"design":{"parents":["prefs-text-input"]},"logic":{}},{"type":"Label","uname":"#/prefs-label-msg-lock","data":{},"design":{"parents":["prefs-text-label"]},"logic":{"text":"Lock Message"}},{"type":"Input","uname":"#/prefs-input-msg-lock","data":{"name":"msg-lock","placeholder":"Enter Lock Message","value":"#.data.msg-lock"},"design":{"parents":["prefs-text-input"]},"logic":{}},{"type":"Label","uname":"#/prefs-label-msg-unlock","data":{},"design":{"parents":["prefs-text-label"]},"logic":{"text":"Unlock Message"}},{"type":"Input","uname":"#/prefs-input-msg-unlock","data":{"name":"msg-unlock","placeholder":"Enter Unlock Message","value":"#.data.msg-unlock"},"design":{"parents":["prefs-text-input"]},"logic":{}},{"type":"Label","uname":"#/prefs-label-msg-map","data":{},"design":{"parents":["prefs-text-label"]},"logic":{"text":"Location Message"}},{"type":"Input","uname":"#/prefs-input-msg-map","data":{"name":"msg-map","placeholder":"Enter Location Message","value":"#.data.msg-map"},"design":{"parents":["prefs-text-input"]},"logic":{}},{"type":"Label","uname":"#/prefs-label-msg-check","data":{},"design":{"parents":["prefs-text-label"]},"logic":{"text":"Status Message"}},{"type":"Input","uname":"#/prefs-input-msg-check","data":{"name":"msg-check","placeholder":"Enter Status Message","value":"#.data.msg-check"},"design":{"parents":["prefs-text-input"]},"logic":{}}],"rootObjects":["#/page-preferences-form"]}},"design":{},"logic":{"template":true}}}},"design":{},"logic":{"page":true,"template":true}},{"type":"Header","uname":"header-vehicle-edit","data":{"left":["header-vehicle-edit-button-back"],"right":["header-vehicle-edit-button-save"],"titleCentered":true,"titleDesign":{"fontSize":18},"itemSize":50},"design":{"bgColor":{"color":"BlueB","level":11},"color":{"color":"White","level":5},"fontWeight":"bold"},"logic":{}},{"type":"Button","uname":"header-vehicle-edit-button-back","data":{},"design":{"parents":["header-button"]},"logic":{"icon":{"name":"left46","size":38,"align":null,"color":{"color":"White","level":5},"design":null},"backButton":true}},{"type":"Button","uname":"header-vehicle-edit-button-save","data":{},"design":{"parents":["header-button"]},"logic":{"icon":{"name":"save10","size":33,"align":null,"color":{"color":"White","level":5},"design":null},"onClicks":["function (object){ // Save Data.\n        var vehicleTemplate = cobject(crelativeObject(CPager.currentPage,'page-vehicle-edit-template'));\n        var formRow = vehicleTemplate.getTemplateRow(0); // We know that the form is the only template row.\n        var vehicleForm = cobject(crelativeObject(formRow,'page-preferences-form'));\n        vehicleForm.submitForm();\n        CPager.moveBack();\n    }"]}},{"type":"TemplatePage","uname":"page-vehicle","data":{"page":{"name":"vehicle","title":"","onLoads":[null,"function (params,page){\n\n    }"],"header":"header-vehicle","onLoadPrepares":["function (params,page){\n        var vehicleTemplate = cobject(crelativeObject(thisObject.uid(),'page-vehicle-template'));\n        vehicleTemplate.setTemplateData([new CDynamicData('ldb.vehicles.element.'+params.id)]); // Reload Template\n        CPageData.setPageData(page.uid(),CLocalDB.get('vehicles',params.id));\n        CTitleHandler.setTitle(CLocalDB.get('vehicles',params.id).title || '');\n    }"]},"template":{"container":{"type":"Container"},"object":{"type":"Template","uname":"#/page-vehicle-template","data":{"template":{"container":{"type":"Container"},"objects":[{"type":"Button","uname":"#/lock-button","data":{},"design":{"parents":["page-main-button"],"bgColor":{"color":"BlueA","level":11},"activeRemove":{"bgColor":{"color":"BlueA","level":11}}},"logic":{"icon":{"name":"lock32","size":50,"align":null,"color":{"color":"White","level":5},"design":null},"onClicks":["function (){\n        var phone = CPageData.get('to-phone') || '';\n        var msg = CPageData.get('msg-lock') || '';\n        var verified = window.appFunctions.checkValuesAndShowError(phone,msg);\n        if (verified == true)\n            CSMS.sendBackgroundSMSSingle(phone,msg);\n    }"]}},{"type":"Button","uname":"#/unlock-button","data":{},"design":{"parents":["page-main-button"],"bgColor":{"color":"TealD","level":11},"activeRemove":{"bgColor":{"color":"TealD","level":11}}},"logic":{"icon":{"name":"unlock8","size":50,"align":null,"color":{"color":"White","level":5},"design":null},"onClicks":["function (){\n        var phone = CPageData.get('to-phone') || '';\n        var msg = CPageData.get('msg-unlock') || '';\n        var verified = window.appFunctions.checkValuesAndShowError(phone,msg);\n        if (verified == true)\n            CSMS.sendBackgroundSMSSingle(phone,msg);\n    }"]}},{"type":"Button","uname":"#/location-button","data":{},"design":{"parents":["page-main-button"],"bgColor":{"color":"TealB","level":11},"activeRemove":{"bgColor":{"color":"TealB","level":11}}},"logic":{"icon":{"name":"map65","size":50,"align":null,"color":{"color":"White","level":5},"design":null},"onClicks":["function (){\n        var phone = CPageData.get('to-phone') || '';\n        var msg = CPageData.get('msg-map') || '';\n        var verified = window.appFunctions.checkValuesAndShowError(phone,msg);\n        if (verified == true)\n            CSMS.sendBackgroundSMSSingle(phone,msg);\n    }"]}},{"type":"Button","uname":"#/check-button","data":{},"design":{"parents":["page-main-button"],"bgColor":{"color":"TealB","level":11},"activeRemove":{"bgColor":{"color":"TealB","level":11}}},"logic":{"icon":{"name":"question30","size":50,"align":null,"color":{"color":"White","level":5},"design":null},"onClicks":["function (){\n        var phone = CPageData.get('to-phone') || '';\n        var msg = CPageData.get('msg-check') || '';\n        var verified = window.appFunctions.checkValuesAndShowError(phone,msg);\n        if (verified == true)\n            CSMS.sendBackgroundSMSSingle(phone,msg);\n    }"]}}]}},"design":{},"logic":{"template":true}}}},"design":{},"logic":{"page":true,"template":true}},{"type":"Header","uname":"header-vehicle","data":{"left":["header-vehicle-button-back"],"right":["header-vehicle-button-edit","header-vehicle-button-delete"],"titleDesign":{"fontSize":16},"itemSize":50},"design":{"bgColor":{"color":"BlueB","level":11},"color":{"color":"White","level":5},"fontWeight":"bold"},"logic":{}},{"type":"Button","uname":"header-vehicle-button-back","data":{},"design":{"parents":["header-button"]},"logic":{"icon":{"name":"left46","size":35,"align":null,"color":{"color":"White","level":5},"design":null},"backButton":true}},{"type":"Button","uname":"header-vehicle-button-edit","data":{},"design":{"parents":["header-button"]},"logic":{"icon":{"name":"wrench46","size":30,"align":null,"color":{"color":"White","level":5},"design":null},"link":{"path":"vehicle-edit","data":{"id":{"source":"page.id","isDynamicData":true}},"globalData":null}}},{"type":"Button","uname":"header-vehicle-button-delete","data":{},"design":{"parents":["header-button"]},"logic":{"icon":{"name":"garbage9","size":30,"align":null,"color":{"color":"White","level":5},"design":null},"onClicks":["function (object){ // Save Data.\n        window.appFunctions.checkUserPass(\n            function(){\n                var id = CPageData.get('id');\n                CLocalDB.remove('vehicles',id);\n                CPager.moveBack();\n            },function(){\n                CThreads.run(function(){\n                    CDialog.showDialog({\n                        title: 'Invalid Access Code',\n                        textContent: 'Action failed due to invalid access code.',\n                        dialogColor: CColor('RedC',10),\n                        cancelText: 'OK'\n                    });\n                },500);\n\n            },\n            function(){}\n        );\n    }"]}},{"type":"Page","uname":"page-main","data":{"page":{"name":"","title":"arnevo","onLoads":[null],"onLoadPrepares":["function (){\n        var vehiclesTemplate = cobject('page-main-vehicle-template');\n        vehiclesTemplate.setTemplateData(new CDynamicData('ldb.vehicles.array')); // Reload Template\n    }"]},"childs":["page-main-vehicle-template","page-main-add-vehicle-button"]},"design":{},"logic":{"page":true}},{"type":"Template","uname":"page-main-vehicle-template","data":{"template":{"container":{"type":"Container"},"loaderColor":{"color":"BlueB","level":11},"object":{"type":"Button","uname":"#/title","data":{},"design":{"parents":["page-main-vehicle-button"]},"logic":{"text":"#.data.title","link":{"path":"vehicle","data":{"id":"#.data.id","name":"#.data.title"},"globalData":null}}}}},"design":{},"logic":{"template":true}},{"type":"Button","uname":"page-main-add-vehicle-button","data":{},"design":{"parents":["add-vehicle-button"]},"logic":{"icon":{"name":"plus37","size":40,"align":null,"color":null,"design":null},"link":{"path":"vehicle-edit","data":null,"globalData":null},"text":"Add"}},{"type":"Button","uname":"page-main-to-preferences-button","data":{},"design":{"parents":["page-main-bottom-button"]},"logic":{"icon":{"name":"settings18","size":22,"align":null,"color":{"color":"White","level":5},"design":null},"link":{"path":"preferences","data":null,"globalData":null}}},{"type":"AppContainer","uname":"app-container","data":{"childs":["main-view"]},"design":{"direction":"ltr","inline":"font-family:'Alef Hebrew','sans-serif','HelveticaNeue-Light','HelveticaNeue',Helvetica,Arial"},"logic":{}},{"type":"MainView","uname":"main-view","data":{"childs":["header","header-vehicle","header-vehicle-edit","content"]},"design":{"inline":"-webkit-box-shadow: 2px 0px 16px -2px rgba(0, 0, 0, 0.6);-moz-box-shadow: 2px 0px 16px -2px rgba(0, 0, 0, 0.6);box-shadow: 2px 0px 16px -2px rgba(0, 0, 0, 0.6);"},"logic":{}},{"type":"Content","uname":"content","data":{"childs":["page-main","page-vehicle","page-vehicle-edit"]},"design":{},"logic":{}}],"designs":{"header-button":{"active":{"bgColor":{"color":"BlueB","level":14}}},"page-main-button":{"classes":"vehicle-page-button","active":{"bgColor":{"color":"Gray","level":17},"color":{"color":"White","level":5}}},"page-main-bottom-button":{"classes":"page-main-bottom-button","width":40,"height":40,"textAlign":"center","position":"absolute","bottom":10,"right":10,"round":"circle","paddingLeft":1,"inline":"box-shadow: 2px 2px 3px #444444;-webkit-box-shadow: 2px 2px 3px #444444;-moz-box-shadow: 2px 2px 3px #444444;","bgColor":{"color":"PurpleE","level":12},"activeRemove":{"bgColor":{"color":"PurpleE","level":12}},"active":{"bgColor":{"color":"Gray","level":17},"color":{"color":"White","level":5}}},"page-main-vehicle-button":{"position":"relative","width":"100%","height":90,"fontWeight":"bold","fontSize":18,"paddingLeft":10,"border":{"bottom":1},"borderColor":{"color":"Gray","level":3},"boxSizing":"borderBox","textAlign":"left","color":{"color":"Gray","level":17},"active":{"color":{"color":"White","level":5},"bgColor":{"color":"BlueA","level":11}}},"add-vehicle-button":{"height":60,"width":"100%","marginTop":7,"fontSize":17,"fontWeight":"bold","textAlign":"center","color":{"color":"BlueA","level":11},"activeRemove":{"color":{"color":"BlueA","level":11}},"active":{"bgColor":{"color":"BlueA","level":11},"color":{"color":"White","level":5}}},"prefs-text-label":{"marginBottom":3,"marginTop":3,"margin":"centered","widthSM":7,"widthXS":11,"height":45,"color":{"color":"BlueB","level":11},"fontSize":17,"textAlign":"center","fontWeight":"bold"},"prefs-text-input":{"marginBottom":3,"marginTop":3,"margin":"centered","widthSM":7,"widthXS":11,"height":45,"color":{"color":"Gray","level":17},"fontSize":17,"textAlign":"left","fontWeight":"bold"},"prefs-save-button":{"height":60,"widthSM":7,"widthXS":11,"marginTop":7,"fontSize":17,"textAlign":"left","bgColor":{"color":"PurpleB","level":12},"activeRemove":{"bgColor":{"color":"PurpleB","level":12}},"active":{"bgColor":{"color":"Gray","level":17},"color":{"color":"White","level":5}}}},"plugins":[{"name":"org.apache.cordova.device"},{"name":"org.apache.cordova.splashscreen"},{"name":"org.apache.cordova.inappbrowser"},{"name":"com.phonegap.plugin.statusbar"},{"name":"tr.bel.mamak.sms_plagin"}],"data":{"footerSize":0,"headerSize":70},"cssCustom":[".page-main-bottom-button{\n    z-index: 10;\n}\n\n.vehicle-page-button{\n    width: 40%;\n    display: inline-block;\n    height: 160px;\n    line-height: 160px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    margin-right: 7px;\n    margin-left: 7px;\n    box-shadow: 2px 2px 2px #444444;\n    -webkit-box-shadow: 2px 2px 2px #444444;\n    -moz-box-shadow: 2px 2px 2px #444444;\n    -webkit-border-radius: 14px;\n    -moz-border-radius: 14px;\n    border-radius: 14px;\n}\n\n.dialog-input{\n    border: 1px solid rgba(128, 3, 21, 0.55);\n    width: 80%;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n}\n\n"],"jsCustom":["window.appFunctions = {\n    checkValuesAndShowError: function(phone,msg){\n        if (CUtils.isEmpty(phone) || CUtils.isEmpty(msg)){\n            CDialog.showDialog({\n                title: 'Parameters Missing',\n                textContent: 'The content message or the phone number are empty. Thus, the message hasn\\'t been sent.',\n                dialogColor: CColor('RedC',10),\n                cancelText: 'OK'\n            });\n            return false;\n        }\n        return true;\n    },\n    checkUserPass: function(onSuccess,onFailure,onCancel){\n        window.checkUserPass = {\n            onSuccess: onSuccess || function(){},\n            onFailure: onFailure || function(){},\n            onCancel: onCancel || function(){}\n        }\n//        window.checkUserPass.onSuccess();\n//        return;\n        // Password Form\n        var inputObject = co('Input','password-form-input').design({parents:['prefs-text-input'],classes:'dialog-input'})\n            .inputName('password').inputPlaceholder('Enter Access Code').inputType('password')\n            .build();\n        var inputObjectID = CObjectsHandler.createObject(inputObject.type,inputObject);\n        var formObject = co('Form','password-form')\n            .formInputs([inputObjectID])\n            .child(inputObjectID)\n            .formOnSubmit(function(values){\n                if (values.password !== '101010')\n                    window.checkUserPass.onFailure();\n                else\n                    window.checkUserPass.onSuccess();\n            })\n            .design({ width:'90%',padding: 5,marginTop:4 })\n            .build();\n        window.checkUserFormObjectID = CObjectsHandler.createObject(formObject.type,formObject);\n        CDialog.showDialog({\n            title: 'Enter Access Code',\n            objectContent: 'Please enter the access code',\n            dialogColor: CColor('RedC',10),\n            objectContent: window.checkUserFormObjectID,\n            cancelText: 'Cancel',\n            confirmText: 'OK',\n            confirmCallback: function() {\n                cobject(window.checkUserFormObjectID).submitForm();\n            },\n            cancelCallback: function() { window.checkUserPass.onCancel(); },\n            hideOnOutClick: false\n        });\n    }\n}"],"appName":"arnevo","appUri":"net.codletech.apps.arnevo","appDescription":"","icons":{"defaultIcon":"http://i57.tinypic.com/6qbrtj.jpg"},"author":"Codletech","keywords":"Codletech,Codletech Apps,arnevo","mail":"codletech@gmail.com","phone":"","supportUrl":"https://www.codletech.net","appFeatures":[],"appPreferences":[{"name":"disallowOverscroll","value":"true"},{"name":"DisallowOverscroll","value":"true"},{"name":"webviewbounce","value":"false"}],"appID":"5489587e5de19b0200ff1703"};