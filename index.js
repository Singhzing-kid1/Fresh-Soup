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

    function openModal() {
        $('.modal').show();
        $('.modal img').attr('src', $(this).attr('src'));
        $('.modal #caption').text($(this).attr('alt'));
    }

    function closeModal() {
        $('.modal').hide();
        $('modal img').attr('src', '');
        $('.modal #caption').text('');
    }

    $('.monthSelect').on('change', updateLogEntries);
    $('.images img').on('click', openModal);
    $('.modal').on('click', closeModal);

    updateLogEntries();
});
