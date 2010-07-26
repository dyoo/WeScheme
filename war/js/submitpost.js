// submitPost: string hash -> void
// Sends a POST form submission.  We need this so that safeSubmit kicks in;
// unfortunately, we can't just set window.location because it doesn't
// send the right tokens.
function submitPost(action, data, options) {
    var form = document.createElement("form");
    form.action = action;
    form.method = "POST";
    if (data) {
	for (var key in data) {
	    var elt = document.createElement("input");
	    elt.type = "hidden";
	    elt.name = key;
	    elt.value = data[key];
	    form.appendChild(elt);
	}
    }
    if (options && options.target) {
	form.target = options.target;
    }

    document.body.appendChild(form);
    form.submit();
}
