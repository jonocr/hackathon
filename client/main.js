
document.addEventListener('DOMContentLoaded', () => {
    // Initial: load messages
  getMessages();
    document.querySelectorAll("#btn-msg").forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            submitMessages();
            setTimeout(()=> getMessages(),1000);
        });
    });

    function getMessages() {
        fetch('https://curriculum-api.codesmith.io/messages')
            .then(response => response.json())
            .then((data) => {
                $('.chat-container').empty();
                const filtered = data.slice(0,20);
                filtered.forEach(element => {
                    let html = '<div class="message-container"><div class="user"> ' + element.created_by + ' : </div><div class="message">' + element.message + + '</div></div><br>';
                    $('.chat-container').append(html);
                });
            
            })
    }

    function submitMessages(){
        const value = $('#submit-msg').val();
        const data = JSON.stringify({
            'created_by': 'Roger',
            'message': value
            })
        $('#submit-msg').val('');
        fetch('https://curriculum-api.codesmith.io/messages', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: data
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
});