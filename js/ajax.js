const Ajax = {
    post_json: function (name, url, data) {
        const request = new XMLHttpRequest();
        let params = Ajax.to_string('', data);

        request.responseType =	"json";
        request.open("POST", '/'+url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                document.dispatchEvent(new CustomEvent(name+"_success", {
                    detail: request.response
                }));
            }
        });

        request.send(params);
    },
    to_string: function (params, data) {
        for (let key in data) {
                params += key+'='+data[key]+'&';
            }
        return params;
    }
};

window.Ajax = Ajax;