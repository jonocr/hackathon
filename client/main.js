
document.addEventListener('DOMContentLoaded', () => {
  getMessages();
    document.querySelectorAll("#btn-msg").forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            submitMessages();
        });
    });

    function getMessages() {
        fetch('https://curriculum-api.codesmith.io/messages')
            .then(response => response.json())
            .then((data) => {
                data.forEach(element => {
                    let html = '<div class="message-container"><div class="user"> ' + element.created_by + ' : </div><div class="message">' + element.message + + '</div></div><br>';
                    $('.chat-container').append(html);
                });
            
            })
    }

    function submitMessages(){
      const value = $('#submit-msg').val();
            console.log(value);
            const data = JSON.stringify({
                'created_by': 'Roger',
                'message': value
              })

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