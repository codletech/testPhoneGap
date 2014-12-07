var CSettings = {
      settings: {},
      set: function(key,value){
          CSettings.settings[key] = value;
      },
      get: function(key){
          return CSettings.settings[key];
      },
      initialize: function(){
          CSettings.set('appID','548085bff3c4180200f93cf2');
      }
    }
    CSettings.initialize();