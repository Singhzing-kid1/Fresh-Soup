$(document).ready(function() {
    function updateLogEntries() {
        var value = $('.monthSelect').val();

        switch (value) {
            case 'all':
                $('.logEntry').show();
                break;
            default:
                $('.logEntry').hide();
                $('.logEntry.' + value).show();
        }
    }

    $('.monthSelect').on('change', updateLogEntries);

    updateLogEntries();
});
