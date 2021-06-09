    $(function(){
        $('.open-popup').on('click', function(){
            $('.popup-container').css('display', 'flex');
        });

        $('.close-button').on('click', function(){
            $('.popup-container').css('display', 'none');
        });

        $('.send-button').on('click', function(){
            let request = {
                'name': $('input[name="name"]').val(),
                'email': $('input[name="email"]').val()
            };
            $.post('api.php', request, function(response){
                if(response == '1') {
                    $('input[name="name"]').val('');
                    $('input[name="email"]').val('');
                    $('.popup-container').css('display', 'none');
                } else {
                    alert('Что-то пошло не так :(');
                }
            });
        });
    });