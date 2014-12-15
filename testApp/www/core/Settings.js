var CSettings = {
      settings: {},
      set: function(key,value){
          CSettings.settings[key] = value;
      },
      get: function(key){
          return CSettings.settings[key];
      },
      initialize: function(){
          CSettings.set('appID','5489587e5de19b0200ff1703');
      }
    }
    CSettings.initialize();