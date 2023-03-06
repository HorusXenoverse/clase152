AFRAME.registerComponent("alejamiento", {
    schema:{
        moveZ:{type: "number", default: 30}  
    },
    tick: function(){
        var positionZ = this.el.getAttribute("position")
        this.data.moveZ = this.data.moveZ + 0.01

        positionZ.z = this.data.moveZ
        this.el.setAttribute("position", {x : positionZ.x, y : positionZ.y, z : positionZ.z})
    }
})