const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => {
	event.preventDefault();
    let formElements = event.currentTarget.getElementsByTagName("input");
    let output = {};

    for (var key in formElements) {
        let obj = formElements[key];

        if (obj.value == '') {
            alert('All form fields must be filled in');
            break;
        } else if(obj.nodeName === "INPUT" && ((obj.type === "email") || (obj.type === "password"))) {
            output[obj.name] = obj.value.trim(); 
        }    

    }

    if (Object.keys(output).length > 1) {
        console.log(output);
        event.currentTarget.reset();
    }

});
