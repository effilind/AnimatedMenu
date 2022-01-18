
$(document).ready(function () {
    //Aufgabe 2
    let i = 4;
    $('#liste').click(() => {
        let inhalte = $('<li></li>').text('Aufzählung ' + i);
        i++;
        $('#liste').append(inhalte);
    })
    $('#button4').click(() => {
        $('li').remove();
        $('#liste').append($('<li></li>').text('Aufzählung 1'));
        i = 2;
    })
    //Aufgabe 2
    $('#bild1').hide();
    $('button2').click(() => {
        $('#bild1').slideToggle('slow');
    })

    $('#aniText').mouseenter(() => {
        let element = $('#aniText');
        element.animate({
            top: '200px',
            paddingTop: '160px',
            paddingLeft: '50%',
            opacity: '0.5'
        });
        element.animate({
            top: '100px',
            paddingTop: '0px',
            paddingLeft: '0%',
            opacity: '1'
        })
    })
    $('#button1').click(() => {
        if($('#text').toggle(1000)) {
            $('#text1').hide();
        } else {
            $('#text1').show();
        }
    });

    $('#nAufz').keyup((event) => {
        let taste = event.which; // In taste wird die Nummer der gedrückten Taste gespeichert
        let text = $('<li></li>').text($('#nAufz').val());
        if (taste == 13) {
            $('#meineAufz').append(text);
            $('#nAufz').val('');
        }
    })
});
