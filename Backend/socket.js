const socketIo = require("socket.io");
const userModel = require("./models/user.model.js");
const captainModel = require("./models/captain.model.js");

let io;

function intializeSocket(server){
    io = socketIo(server,{
        cors:{
            origin:"*",
            methods:["GET","POST"]
        }
    })

    io.on("connection",(socket)=>{
        console.log(`Client Connected: ${socket.id}`);

        socket.on("join",async (data)=>{
            const {userId,userType} = data;
            try {
                if(userType === 'user'){
                    await userModel.findByIdAndUpdate(userId,{
                        socketId:socket.id
                    });
                }
                else if(userType === 'captain'){
                    await captainModel.findByIdAndUpdate(userId,{
                        socketId:socket.id
                    });
                }
            } catch (error) {
                console.log(error);
            }
        })

        socket.on("update-location-captain",async(data)=>{
            try {
                const {captainId,location} = data;
                if(!location || !location.ltd || !location.lng){
                    return socket.emit("error",{message:"Invalid location data"})
                }
                const captain = await captainModel.findByIdAndUpdate(captainId,{location:{
                    ltd:location.ltd,
                    lng:location.lng
                }});
            } catch (error) {
                
            }
        })
            
        socket.on("disconnect",()=>{
            console.log(`Client disconnected: ${socket.id}`);
        })
    })
}
function sendMessageToSocketId(socketId,messageObject){
    if(io){
        io.to(socketId).emit(messageObject.event,messageObject.data);
    }
    else{
        console.log("Socket.io is not initialized...")
    }
}

module.exports = {intializeSocket , sendMessageToSocketId};