/* add an item */
function addItem() {
    //get the value of the input box
    var itemValue = $('#addItemValue').val();


    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');

    }

    //if the input is valid ....
    else {

        //dynamicaly create one row inside the shopping list
        var row = $('<li><p><button class ="check"><i class="fa fa-check-circle-o"></i></button><span class ="item">' + itemValue + '</span><button class="trash"><i class ="fa fa-trash"></i></button></p></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by reseting the value
        itemValue = $('#addItemValue').val('');
    }
}

/* check off an item */

function checkItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and add / remove the "ticked" class to it
    $(this).parent().parent().toggleClass('ticked');
}


/*remove a single item */
function removeItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
    $(this).parent().parent().remove();
}

/* remove all items */
function removeAll() {
    //find the the UL container (in our case having the class shopping-list) which contains all the LIs and delete it
    $('.shopping-list').empty();
}


$(document).ready(function () {

    /* on click on .add button activate function 'addItem' */

    $('.add').on('click', function () {
        addItem();
    });

    /* on click on .trash-red button activate function 'removeAll */

    $('.trash-red').on('click', function () {
        removeAll();
    });

});

/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});

/* on click on .check button activate function 'checkItem */

$(document).on('click', '.check', checkItem);


/* on click on .trash button activate function 'removeItem */

$(document).on('click', '.trash', removeItem);
