function _(id){ return document.getElementById(id); }
function submitForm(){
    _("send").disabled = true;
    _("status").innerHTML = 'please wait ...';
    var formdata = new FormData();
    formdata.append( "n", _("name").value );
    formdata.append( "e", _("email").value );
    formdata.append( "m", _("message").value );
    var ajax = new XMLHttpRequest();
    ajax.open( "POST", "mail/contact_me.php" );
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success"){
                _("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
            } else {
                _("status").innerHTML = ajax.responseText;
                _("send").disabled = false;
            }
        }
    }
    ajax.send( formdata );
}

