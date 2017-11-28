(function(global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    
    Greetr.prototype = {};
    
    Greetr.init = function(firstname, lastname, language) {
        
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = self.language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));