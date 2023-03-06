AFRAME.registerComponent("event_click", {
    schema:{
        moveY:{type: "number", default: 0}  
    },
    tick: function(){

        window.addEventListener("click", (e) =>{
        this.data.moveY = this.data.moveY - 0.0001
        })
        
        var positionY = this.el.getAttribute("position")
        positionY.y = positionY.y + this.data.moveY 
        this.el.setAttribute("position", {x : positionY.x, y : positionY.y, z : positionY.z})
    }
})