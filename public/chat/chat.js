//Establishing socket connection
$.get("/getUsername").done(data => {

    const socket = io.connect("192.168.0.34:3000");

       const username = data.response.username;
       console.log(username)

       $("#submit").click(() => {
          const time = new Date();
          const comment = time.getHours() + ":" + time.getMinutes() + " " + username + ": " + $("#comment").val();
          $("#comment").val("");
          socket.emit( "User wrote:", { comment });
       });


       socket.on("User:", data => {
          console.log(6)
          $("#conversation").prepend(`<div>${data.comment}</div>`);
       });
 });    


