window.cAppDataJSON = {"_id":"548085bff3c4180200f93cf2","designs":{"design-about-value":{"active":{"color":{"level":5,"color":"White"},"bgColor":{"level":12,"color":"TealA"}},"lineHeight":65,"paddingBottom":5,"paddingTop":5,"marginTop":12,"marginBottom":12,"fontWeight":"bold","color":{"level":17,"color":"Gray"},"fontSize":16,"widthXS":11,"height":75,"textAlign":"right","boxSizing":"borderBox","paddingRight":6},"design-about-icon":{"boxSizing":"borderBox","marginLeft":12,"textAlign":"center","height":65,"width":65,"round":"circle","borderColor":{"level":10,"color":"TealC"},"border":{"all":1}},"page-main-button":{"active":{"color":{"level":5,"color":"White"},"bgColor":{"level":17,"color":"Gray"}},"inline":"box-shadow: 2px 2px 3px #444444;-webkit-box-shadow: 2px 2px 3px #444444;-moz-box-shadow: 2px 2px 3px #444444;","margin":"centered","paddingLeft":3,"round":"circle","marginTop":10,"marginBottom":10,"textAlign":"center","height":70,"width":70},"header-button":{"active":{"bgColor":{"level":13,"color":"TealC"}}},"right-menu-button":{"active":{"color":{"level":5,"color":"White"},"bgColor":{"level":17,"color":"Gray"}},"fontWeight":"bold","round":0,"color":{"level":1,"color":"Gray"},"fontSize":16,"widthXS":12,"height":90,"textAlign":"center","boxSizing":"borderBox"}},"data":{"side-navigation":[{"data":{"link":"experiments","text":"התקשרו אלינו","icon":"add84","color":{"level":11,"color":"BlueA"}}},{"data":{"link":"/","icon":"home48","color":{"level":10,"color":"PinkG"}}},{"data":{"phone":"#globals.business_info.phone","text":"התקשרו אלינו","icon":"phone94","color":{"level":11,"color":"GreenH"}}},{"data":{"link":"categories","text":"המוצרים שלנו","icon":"dress1","color":{"level":10,"color":"TealC"}}},{"data":{"address":"#globals.business_info.address","text":"נווטו אלינו","icon":"map65","color":{"level":11,"color":"PurpleH"}}},{"data":{"facebookPage":"#globals.business_info.facebookID","text":"עמוד הפייסבוק","icon":"facebook33","color":{"level":12,"color":"BlueC"}}},{"data":{"link":"about","text":"אודותינו","icon":"information43","color":{"level":7,"color":"RedC"}}}],"navigation":[{"data":{"link":"experiments","text":"התקשרו אלינו","icon":"add84","color":{"level":11,"color":"BlueA"},"showTime":600}},{"data":{"phone":"#globals.business_info.phone","text":"התקשרו אלינו","icon":"phone94","color":{"level":11,"color":"GreenH"},"showTime":600}},{"data":{"link":"categories","text":"המוצרים שלנו","icon":"dress1","color":{"level":10,"color":"TealC"},"showTime":700}},{"data":{"address":"#globals.business_info.address","text":"נווטו אלינו","icon":"map65","color":{"level":11,"color":"PurpleH"},"showTime":800}},{"data":{"facebookPage":"#globals.business_info.facebookID","text":"עמוד הפייסבוק","icon":"facebook33","color":{"level":12,"color":"BlueC"},"showTime":900}},{"data":{"link":"about","text":"אודותינו","icon":"information43","color":{"level":7,"color":"RedC"},"showTime":1000}}],"headerSize":70,"footerSize":0},"objects":[{"type":"Header","uname":"header","data":{"left":["header-button-back"],"right":["header-button-menu"],"titleDesign":{"fontSize":18}},"design":{"bgColor":{"color":"TealC","level":10},"color":{"color":"White","level":5},"fontWeight":"bold"},"_id":"5484782d673d2c0200fc2351","extends":[],"platform":[],"version":1},{"type":"Button","uname":"header-button-menu","design":{"parents":["header-button"]},"logic":{"icon":{"name":"menu24","size":38,"align":null,"color":{"color":"White","level":5},"design":null},"sideMenuSwitch":"right"},"_id":"5484782d673d2c0200fc2350","extends":[],"platform":[],"version":1},{"type":"Button","uname":"header-button-back","design":{"parents":["header-button"]},"logic":{"icon":{"name":"left46","size":38,"align":null,"color":{"color":"White","level":5},"design":null},"backButton":true},"_id":"5484782d673d2c0200fc234f","extends":[],"platform":[],"version":1},{"type":"TemplatePage","uname":"page-products","data":{"page":{"name":"products","title":"#.data.name","onLoads":["function (){ // OnLoad\n        var productsTemplate = CObjectsHandler.relativeObject(thisObject,'page-products-template');\n        var pObject = CObjectsHandler.object(productsTemplate || '');\n        if (!CUtils.isEmpty(pObject) && !CUtils.isEmpty(pObject.data.template))\n            CTemplator.load(productsTemplate,pObject.data.template.queryData||{},null,true);\n    }"]},"template":{"container":{"type":"Container"},"object":{"type":"Template","uname":"#/page-products-template","data":{"template":{"url":"http://codletech.net/approducer/atmirit/api/getCustomData.php","autoLoad":false,"queryData":{"types":["products_groups"],"single":true,"columns":["products_group_list"],"dataIDs":["##.data.id"]},"container":{"type":"Container"},"prepareFunction":"function (data){\n                if (CUtils.isEmpty(data))\n                    return [];\n                data = _.toArray(data);\n                if (CUtils.isEmpty(data) || CUtils.isEmpty(data[0]) || CUtils.isEmpty(data[0]['products_group_list']))\n                    return [];\n                return data[0]['products_group_list'];\n            }","loaderColor":{"color":"TealC","level":10},"pullToRefresh":true,"rootObjects":["#/box"],"objects":[{"type":"Container","uname":"#/box","data":{"childs":["#/image","#/title","#/share"]},"design":{"width":"95%","margin":"centered","marginTop":10,"marginBottom":3,"inline":"box-shadow: 0 1px #D9D9D9 inset, 0 1px 3px rgba(34, 25, 25, 0.4);-webkit-box-shadow: 0 1px #D9D9D9 inset, 0 1px 3px rgba(34, 25, 25, 0.4);-moz-box-shadow: 0 1px #D9D9D9 inset, 0 1px 3px rgba(34, 25, 25, 0.4);"}},{"type":"Label","uname":"#/title","design":{"textAlign":"center","fontWeight":"bold","fontSize":15,"color":{"color":"Gray","level":17}},"logic":{"text":"#.data.name"}},{"type":"Image","uname":"#/image","data":{"src":"#.data.image"},"design":{"margin":"centered","width":"100%"}},{"type":"Button","uname":"#/share","design":{"height":40,"textAlign":"center","fontWeight":"bold","fontSize":15,"color":{"color":"TealC","level":10},"marginTop":3,"borderColor":{"color":"Gray","level":2},"border":{"top":1},"active":{"bgColor":{"color":"TealC","level":10},"color":{"color":"White","level":5}}},"logic":{"icon":{"name":"reply15","size":32,"align":"center","color":null,"design":null},"share":{"msg":"#.data.name","subject":"#.data.name","image":"#.data.image","link":null}}}]}},"logic":{"onShowAnimateChildren":{"animations":"scaleUpToBottom","intervals":40,"start":0},"template":true}}}},"logic":{"page":true,"template":true},"_id":"5484782d673d2c0200fc234e","extends":[],"platform":[],"version":1},{"type":"Page","uname":"page-experiments","data":{"page":{"name":"experiments","title":"#.data.name","onLoads":[null]},"childs":["page-experiments-label"]},"logic":{"page":true},"_id":"5484782d673d2c0200fc234d","extends":[],"platform":[],"version":1},{"type":"Container","uname":"page-experiments-label","data":{"cohtml":"<div co-childs=\"(['page-experiments-ionic-show-dialog'])\"><strong class=\"w80 hp50 bgBlueA8\" co-onClick=\"(function(){alert('hi');})\" co-text=\"s@Click to Alert\" co-icon=\"p@['airplane54',34,'right',CColor('BlueB',10)]\"></strong> Sample Text <div style=\"background:#dddddd;width:400px;height:80px;\" co-text=\"s@Move To About\" co-link=\"s@about\"></div><div co-design=\"({parents:['page-main-button'],width:'80%',height:50,bgColor:CColor('BrownC',8)})\" co-backButton=\"\" >Move Back</div><strong class=\"w80 hp50 bgBlueA8\" co-onClick=\"(function(){alert('hi');})\" co-text=\"s@Click to Alert\"></strong> Sample Text <div style=\"background:#dddddd;width:400px;height:80px;\" co-text=\"s@Move To About\" co-link=\"s@about\"></div><div co-design=\"({parents:['page-main-button'],width:'80%',height:50,bgColor:CColor('BrownC',8)})\" co-backButton=\"\" >Move Back</div></div>"},"design":{"width":"95%","maxWidth":450,"color":{"color":"Gray","level":16},"textAlign":"center","margin":"centered","marginTop":5,"fontSize":18,"lineHeight":30},"_id":"5484782d673d2c0200fc234c","extends":[],"platform":[],"version":1},{"type":"Button","uname":"page-experiments-ionic-show-dialog","design":{"parents":["page-main-button"],"width":"80%","height":50,"bgColor":{"color":"BrownC","level":8}},"logic":{"text":"Show Bottom Dialog","onClick":"function (){\n        $ionicActionSheet.show({\n            buttons: [\n                { text: '<b>Share</b> This' },\n                { text: 'Move' }\n            ],\n            destructiveText: 'Delete',\n            titleText: 'Modify your album',\n            cancelText: 'Cancel',\n            cancel: function() {\n                // add cancel code..\n            },\n            buttonClicked: function(index) {\n                return true;\n            }\n        });\n    }"},"_id":"5484782d673d2c0200fc234b","extends":[],"platform":[],"version":1},{"type":"Page","uname":"page-categories","data":{"page":{"name":"categories","title":"קטגוריות מוצרים","onLoads":["function () {\n    }"]},"childs":["page-categories-template"]},"logic":{"page":true},"_id":"5484782d673d2c0200fc234a","extends":[],"platform":[],"version":1},{"type":"Template","uname":"page-categories-template","data":{"template":{"url":"http://codletech.net/approducer/atmirit/api/getCustomData.php","autoLoad":true,"queryData":{"types":["products_groups"],"single":true,"columns":["dataID","title","thumbnail"]},"container":{"type":"Container"},"loaderColor":{"color":"TealC","level":10},"pullToRefresh":true,"rootObjects":["#/box"],"objects":[{"type":"Container","uname":"#/box","data":{"childs":["#/image","#/title"]},"design":{"position":"relative","width":"100%","height":90,"cursor":"pointer","active":{"bgColor":{"color":"TealC","level":10}}},"logic":{"link":{"path":"products","data":{"id":"#.data.dataID","name":"#.data.title"},"globalData":null}}},{"type":"Button","uname":"#/title","design":{"position":"absolute","top":10,"left":100,"height":70,"fontWeight":"bold","fontSize":18,"color":{"color":"Gray","level":17}},"logic":{"text":"#.data.title","link":{"path":"products","data":{"id":"#.data.dataID","name":"#.data.title"},"globalData":null}}},{"type":"Image","uname":"#/image","data":{"src":"#.data.thumbnail"},"design":{"position":"absolute","top":10,"left":10,"width":70,"height":70,"round":"circle"},"logic":{"link":{"path":"products","data":{"id":"#.data.dataID","name":"#.data.title"},"globalData":null}}}]}},"logic":{"onShowAnimateChildren":{"animations":"scaleUpToBottom","intervals":40,"start":0},"template":true},"_id":"5484782d673d2c0200fc2349","extends":[],"platform":[],"version":1},{"type":"Page","uname":"page-about","data":{"page":{"name":"about","title":"אודותינו","onLoads":[null]},"childs":["page-about-logo","page-about-value-phone","page-about-value-address","page-about-value-facebook","page-about-value-mail","page-about-value-codletech"]},"logic":{"page":true,"onShowAnimation":{"objects":["page-about-logo","page-about-value-phone","page-about-value-address","page-about-value-facebook","page-about-value-mail","page-about-value-codletech"],"animations":["moveToBottomFade2","moveToLeftFade2","moveToLeftFade2","moveToLeftFade2","moveToLeftFade2","moveToLeftFade2"],"intervals":300}},"_id":"5484782d673d2c0200fc2348","extends":[],"platform":[],"version":1},{"type":"StaticMap","uname":"page-about-logo","data":{"mapData":{"center":"#globals.business_info.address","marker":{"color":"green"}}},"design":{"width":"100%","maxWidth":500,"maxHeight":250,"borderColor":{"color":"TealC","level":10},"border":{"bottom":6}},"_id":"5484782d673d2c0200fc2347","extends":[],"platform":[],"version":1},{"type":"Button","uname":"page-about-value-phone","design":{"parents":["design-about-value"]},"logic":{"text":"#globals.business_info.phone","phoneCall":"09-885-7822","iconLeft":{"name":"left46","size":34,"color":{"color":"TealC","level":10},"design":null},"iconRight":{"name":"phone94","size":40,"color":{"color":"TealC","level":10},"design":{"parents":["design-about-icon"]}}},"_id":"5484782d673d2c0200fc2346","extends":[],"platform":[],"version":1},{"type":"Button","uname":"page-about-value-address","design":{"parents":["design-about-value"]},"logic":{"text":"#globals.business_info.address","openNavigationApp":"#globals.business_info.address","iconLeft":{"name":"left46","size":34,"color":{"color":"TealC","level":10},"design":null},"iconRight":{"name":"map65","size":40,"color":{"color":"TealC","level":10},"design":{"parents":["design-about-icon"]}}},"_id":"5484782d673d2c0200fc2345","extends":[],"platform":[],"version":1},{"type":"Button","uname":"page-about-value-facebook","design":{"parents":["design-about-value"]},"logic":{"text":"עמוד הפייסבוק שלנו","openFacebookPageOrProfile":"#globals.business_info.facebookID","iconLeft":{"name":"left46","size":34,"color":{"color":"TealC","level":10},"design":null},"iconRight":{"name":"facebook33","size":40,"color":{"color":"TealC","level":10},"design":{"parents":["design-about-icon"]}}},"_id":"5484782d673d2c0200fc2344","extends":[],"platform":[],"version":1},{"type":"Button","uname":"page-about-value-mail","design":{"parents":["design-about-value"]},"logic":{"text":"#globals.business_info.mail","openMail":{"to":["#globals.business_info.mail"]},"iconLeft":{"name":"left46","size":34,"color":{"color":"TealC","level":10},"design":null},"iconRight":{"name":"mail61","size":40,"color":{"color":"TealC","level":10},"design":{"parents":["design-about-icon"]}}},"_id":"5484782d673d2c0200fc2343","extends":[],"platform":[],"version":1},{"type":"Button","uname":"page-about-value-codletech","design":{"parents":["design-about-value"]},"logic":{"text":"פותח ב-Codletech","link":{"path":"http://codletech.net","data":null,"globalData":null},"iconLeft":{"name":"left46","size":34,"color":{"color":"TealC","level":10},"design":null},"iconRight":{"name":"cinch","size":40,"color":{"color":"TealC","level":10},"design":{"parents":["design-about-icon"]}}},"_id":"5484782d673d2c0200fc2342","extends":[],"platform":[],"version":1},{"type":"Page","uname":"page-main","data":{"page":{"name":"","title":"#globals.business_info.name","onLoads":["function () {\n    }"]},"childs":["page-main-logo","page-main-about-description","page-main-buttons"]},"logic":{"page":true,"onShowAnimation":{"objects":["page-main-logo","page-main-about-description"],"animations":["moveToBottomFade2","moveToLeftFade2"],"intervals":[0,300]}},"_id":"5484782d673d2c0200fc2341","extends":[],"platform":[],"version":1},{"type":"Image","uname":"page-main-logo","data":{"src":"#globals.business_info.thumbnail"},"design":{"width":"100%","maxWidth":500,"maxHeight":250,"borderColor":{"color":"TealC","level":10},"border":{"bottom":6}},"_id":"5484782d673d2c0200fc2340","extends":[],"platform":[],"version":1},{"type":"Label","uname":"page-main-about-description","design":{"width":"95%","maxWidth":450,"color":{"color":"Gray","level":16},"fontWeight":"bold","textAlign":"center","margin":"centered","marginTop":5,"fontSize":18,"lineHeight":30},"logic":{"text":"#globals.business_info.about"},"_id":"5484782d673d2c0200fc233f","extends":[],"platform":[],"version":1},{"type":"Template","uname":"page-main-buttons","data":{"template":{"container":{"type":"Container","design":{"widthXS":4}},"object":{"type":"Button","design":{"parents":["page-main-button"],"bgColor":"#this.data.color","activeRemove":{"bgColor":"#this.data.color"}},"logic":{"icon":{"name":"#this.data.icon","size":40,"align":null,"color":{"color":"White","level":5},"design":null},"link":{"path":"#this.data.link","data":null,"globalData":null},"phoneCall":"#this.data.phone","openNavigationApp":"#this.data.address","openFacebookPageOrProfile":"#this.data.facebookPage","onShowAnimation":{"objects":null,"animations":"rotateUnfoldBottom","intervals":0,"start":"#this.data.showTime"}}},"data":"#globals.navigation"}},"design":{"marginTop":10},"logic":{"template":true},"_id":"5484782d673d2c0200fc233e","extends":[],"platform":[],"version":1},{"type":"AppContainer","uname":"app-container","data":{"childs":["side-menu","main-view"]},"design":{"direction":"rtl","inline":"font-family:'Alef Hebrew','sans-serif','HelveticaNeue-Light','HelveticaNeue',Helvetica,Arial"},"_id":"5484782d673d2c0200fc233d","extends":[],"platform":[],"version":1},{"type":"MainView","uname":"main-view","data":{"childs":["header","content"]},"design":{"inline":"-webkit-box-shadow: 2px 0px 16px -2px rgba(0, 0, 0, 0.6);-moz-box-shadow: 2px 0px 16px -2px rgba(0, 0, 0, 0.6);box-shadow: 2px 0px 16px -2px rgba(0, 0, 0, 0.6);"},"_id":"5484782d673d2c0200fc233c","extends":[],"platform":[],"version":1},{"type":"Content","uname":"content","data":{"childs":["page-main","page-about","page-categories","page-products","page-experiments"]},"_id":"5484782d673d2c0200fc233b","extends":[],"platform":[],"version":1},{"type":"SideMenu","uname":"side-menu","data":{"sideMenuWidth":100,"rightContainer":"side-menu-right-container"},"_id":"5484782d673d2c0200fc233a","extends":[],"platform":[],"version":1},{"type":"SideMenuContainer","uname":"side-menu-right-container","data":{"childs":["right-menu"]},"design":{"bgColor":{"color":"White","level":5}},"_id":"5484782d673d2c0200fc2339","extends":[],"platform":[],"version":1},{"type":"Template","uname":"right-menu","data":{"template":{"container":{"type":"Container"},"object":{"type":"Button","design":{"parents":["right-menu-button"],"bgColor":"#this.data.color","activeRemove":{"bgColor":"#this.data.color"}},"logic":{"icon":{"name":"#this.data.icon","size":50,"align":null,"color":{"color":"White","level":5},"design":null},"sideMenuSwitch":"right","link":{"path":"#this.data.link","data":null,"globalData":null},"phoneCall":"#this.data.phone","openNavigationApp":"#this.data.address","openFacebookPageOrProfile":"#this.data.facebookPage"}},"data":"#globals.side-navigation"}},"logic":{"template":true},"_id":"5484782d673d2c0200fc2338","extends":[],"platform":[],"version":1}]};