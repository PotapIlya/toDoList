if (document.querySelector('.deleteItem')){
    const form = document.querySelector('.deleteItem'),
        input = form.querySelector('input'),
        btn = form.querySelector('button');

    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        const text = input.value; // я хз как сделтаь с полем name, поэтому text пустой
        console.log(text);
        const request = new XMLHttpRequest();
        const url = "/server/deleteToBD.php";
        const params = "text=" + text;

        request.responseType =	"json";
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.response;

                console.log(response);

                const list = document.querySelector('ul');
                list.insertAdjacentHTML('beforeEnd', "<li>"+response.text+"_"+response.id+"</li>");
            }
        });

        request.send(params);

    })
}