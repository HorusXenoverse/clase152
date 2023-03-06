AFRAME.registerComponent("clicker", {
    schema:{
        moveY:{type: "number", default: 0.01}  
    },
    tick: function(){
        var positionY = this.el.getAttribute("position")
        this.data.moveY = this.data.moveY + 0.01

        positionY.y = this.data.moveY
        this.el.setAttribute("position", {x : positionY.x, y : positionY.y, z : positionY.z})
    }
})