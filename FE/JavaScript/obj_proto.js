console.log("HHHHHH");
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承
SubType.prototype = new SuperType();

SubType.prototype.getSubValue=function(){
    return this.subproperty;
}

let instance  = new SubType()
console.log("🚀 ~ file: obj_proto.js ~ line 20 ~ instance", instance.getSuperValue())
