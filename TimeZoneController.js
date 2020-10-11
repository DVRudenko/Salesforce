({
    init : function(component, event, helper) {
    
    var localZone = component.find("zone").get("v.value");
    localZone = parseInt(localZone, 10);
        
    if (isNaN(localZone)){
        console.log('Wrong localZone');
        
     } else {
        var time = new Date();
	    var offset = time.getTimezoneOffset()/60;
    	time.setHours( time.getHours() + offset + localZone);
    	var localTime = $A.localizationService.formatDateTime(time);
    	component.set('v.localTime', localTime);
     	}
     }
})
