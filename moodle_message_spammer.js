var moodleToken = '';
var conversationID = '';
var sessionID = '';

var message = "";

function spam(){
  var url = "https://www.meineabs.de/lib/ajax/service.php?sesskey=" + sessionID + "&info=core_message_send_messages_to_conversation";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Cookie", "MoodleSession=" + moodleToken);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
     }};

  var data = "[
     {
        'index':0,
        'methodname':'core_message_send_messages_to_conversation',
        'args':{
           'conversationid':" + conversationID + ",
           'messages':[
              {
                 'text':'" + message + "'
              }
           ]
        }
     }
  ]";

  xhr.send(data);
}

setInterval(spam, 500);
