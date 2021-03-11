
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

        const parent = document.getElementById('chat-container');
        fetch('https://curriculum-api.codesmith.io/messages')
            .then(response => response.json())
            .then((data) => {
                // console.log("getMessages...");
                // ('.chat-container').empty();
                document.querySelectorAll(".message-container").forEach(item => { 
                    item.remove();
                });

                // document.querySelector('.chat-container').innerHTML = ''
                const filtered = data.slice(0,20);
                filtered.forEach(element => {
                    // create container div = message-container
                    const msgContainer = document.createElement('div');
                    msgContainer.className = 'message-container';
                    // <div class="user"> 
                    const userDiv = document.createElement('div');
                    userDiv.className = "user";
                    //+ element.created_by + 
                    userDiv.append(element.created_by);
                    //<div class="message">
                    const msgDiv = document.createElement('div');
                    msgDiv.className = "message";
                    // + element.message +
                    msgDiv.append(element.message);
                    // <div class="message-container"><div class="user"></div></div>
                    msgContainer.append(userDiv);
                     // <div class="message-container"><div class="user"></div><div class="message"></div></div>
                    msgContainer.append(msgDiv);

                    // msgContainer.append(

                    // let html = '<div class="message-container"><div class="user"> ' + element.created_by + ' : </div><div class="message">' + element.message +  '</div></div><br>';
                    // ('.chat-container').append(html);
                    parent.append(msgContainer);
                });
            
            })
    }

    function submitMessages(){
        // const value = ('#submit-msg').val();
        const value = document.querySelector('#submit-msg').value;
        const data = JSON.stringify({
            'created_by': 'Roger',
            'message': value
            })
        // ('#submit-msg').val('');
        document.querySelector('#submit-msg').value = "";
        fetch('https://curriculum-api.codesmith.io/messages', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: data
        })
        .then(response => {
            // console.log(response)
        })
        .catch(err => {
            // console.log(err)
        })
    }
});