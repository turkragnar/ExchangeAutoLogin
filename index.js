let username = prompt("Username: ");
if( username.length <= 0 ){
alert("Please Username..")}
else{
	function makeid(length) {
    var results           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!^+%&/()=?-_*';
    var charactersLength = characters.length;
    for ( var a = 0; a < length; a++ ) {
      results += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return results;
}
let passwd = makeid(12);
document.getElementById('username').value=username;
document.getElementById('password').value=passwd;
document.querySelector('.signinbutton').click();
setTimeout(10000);
alert('Successful');
}
