$(document).ready(function() {
    function updateLogEntries() {
        var value = $(this).val();

        switch (value) {
            case 'all':
                $('.logEntry').show();
                break;
            default:
                $('.logEntry').hide();
                $('.logEntry.' + value).show();
                break;
        }
    }
    
    function expand() {
        $(this).css({height: '75%', width: '75%'});
    }
    
    function contract(){
        $(this).css({height: '25%', width: '25%'});
    }

    $('.monthSelect').on('change', updateLogEntries);
    $('.logEntry img').hover(expand, contract);

    updateLogEntries();
});
