$(document).ready(function() {
  $('[data-channel-subscribe="chatroom"]').each(function(index, element) {
    var $messageDiv = $('#message-div');
    var $token = $('meta[name="csrf-token"]').prop("content");


    // We need to select the id of the chatroom that we're currently viewing. We'll use this when we establish the connection in order to ensure that we're streaming from the correct chatroom.
    var chatroom_id = $(element).data('chatroom-id');

    $messageDiv.animate({ scrollTop: $messageDiv.prop("scrollHeight")}, 10);

    App.cable.subscriptions.create(
      {
        channel: "ChatroomChannel",
        // Now we'll pass in the specific chatroom id that we're streaming from.
        chatroom_id: chatroom_id
      },


      {
        received: function(data) {
          $.ajax({
            url: "/get_current_user",
            type: "get",
            dataType: "json",
            success: function(response) {
              console.log(response);
              if (response.current_user_id === data.user.id) {
                var $newMessage = $(`
                  <div class="message my-message ml-auto">
                    <big>${data.user.username}</big>
                    <br>
                    <small>${data.message.content}</small>
                  </div>
                `).hide();
              } else {
                var $newMessage = $(`
                  <div class="message other-user-message mr-auto">
                    <big>${data.user.username}</big>
                    <br>
                    <small>${data.message.content}</small>
                  </div>
                `).hide();              
              }

              $messageDiv.append($newMessage.fadeIn());
              $messageDiv.animate({ scrollTop: $messageDiv.prop("scrollHeight")}, 1000);
            },
            error: function(response) {
              console.log(response);
            }
          });
        }
      }
    );
  });
});





