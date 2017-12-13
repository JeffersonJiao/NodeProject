$(document).ready(function(){
    $("#listSubmit").on('click', function(){
        var input =  $("#listInput");
        var checkmark = {item: input.val()};
        console.log(checkmark);

        $.ajax({
            type: 'POST',
            url: '/',
            data: checkmark,
            success: function(data){
                console.log(data);
                location.reload();
            }
        });

        return false;
    });

    $("table a").on('click',function(){
        var item = $(this).attr('href');
        $.ajax({
            type: 'DELETE',
            url: '/' + item,
            success: function(data){
                location.reload();
            }
        });

        return false
    })

});