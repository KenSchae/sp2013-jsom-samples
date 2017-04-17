<script language="javascript">
 
$(document).ready(function() {
	GetWebInfo();
	jQuery("#clearButton").click(ClearTitle);
	jQuery("#titleButton").click(GetWebInfo);
});

function GetWebInfo() {
	// Fundamental declarations to connect with SharePoint
	// These are only declarations, you are not connected yet.
	var context = SP.ClientContext.get_current();
	var web = context.get_web();
	
	// Methods to prepare and connect with SharePoint
	// CSOM connects asynchronously and returns either a 
	// success or failure by calling one of the two callback
	// functions that you provide.
	context.load(web);
	context.executeQueryAsync(success, fail);
		
	// NOTE: both of these callbacks are inside of the calling function.
	// Called if the connection to SharePoint was successful
	function success() {
		var title = web.get_title();
		// Reference an element on the page with id="web_title"
		var web_title = jQuery("#web_title");
		web_title.text(title);
	}
	// Called if the connection to SharePoint fails.
	function fail() {
		alert("oops");
	}
}

function ClearTitle() {
	var web_title = jQuery("#web_title");
	web_title.text('');
}

</script>