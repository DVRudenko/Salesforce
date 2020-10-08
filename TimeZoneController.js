({
    init : function(component, event, helper) {
    	var time = new Date();
    	//var zone = component.get("v.timeZone");
    	//time.setHours( time.getHours() + zone);
        
    	time.setHours( time.getHours() + 3);
        
    	var today = $A.localizationService.formatDateTime(time);
    	component.set('v.today', today);
}
})