const AddToList = {
    init: function () {
        if (document.querySelector('.addToBd')) {
            const form = document.querySelector('.addToBd'),
                input = form.querySelector('input'),
                btn = form.querySelector('button');

            AddToList.start(input, btn);
        }
    },
    start: function (input, btn) {
        btn.addEventListener('click', function (){
            AddToList.add(input);
            input.value='';
        });
        document.addEventListener("addToDB_success", function(response) {
            AddToList.success(response)
        })
    },
    add: function (input) {
        const text = input.value;
        Ajax.post_json(
            'addToDB',
            'server/addToBD.php',
            {
                'text':text
            }
        );
    },
    success: function (response) {
        alert('id=>'+response.detail.id + ' text=>' + response.detail.text);
    }
};

AddToList.init();
window.AddToList = AddToList;