var CSettings = {
      settings: {},
      set: function(key,value){
          CSettings.settings[key] = value;
      },
      get: function(key){
          return CSettings.settings[key];
      },
      initialize: function(){
          CSettings.set('appID','54495b5b9992aa0200e711b9');
      }
  }
  CSettings.initialize();