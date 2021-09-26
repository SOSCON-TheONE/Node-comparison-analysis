"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.UnpackOptions = void 0;
var flatbuffers = require("flatbuffers");
var UnpackOptions = /** @class */ (function () {
    function UnpackOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    UnpackOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    UnpackOptions.getRootAsUnpackOptions = function (bb, obj) {
        return (obj || new UnpackOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    UnpackOptions.getSizePrefixedRootAsUnpackOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new UnpackOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    UnpackOptions.prototype.num = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    UnpackOptions.prototype.axis = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    UnpackOptions.startUnpackOptions = function (builder) {
        builder.startObject(2);
    };
    UnpackOptions.addNum = function (builder, num) {
        builder.addFieldInt32(0, num, 0);
    };
    UnpackOptions.addAxis = function (builder, axis) {
        builder.addFieldInt32(1, axis, 0);
    };
    UnpackOptions.endUnpackOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    UnpackOptions.createUnpackOptions = function (builder, num, axis) {
        UnpackOptions.startUnpackOptions(builder);
        UnpackOptions.addNum(builder, num);
        UnpackOptions.addAxis(builder, axis);
        return UnpackOptions.endUnpackOptions(builder);
    };
    return UnpackOptions;
}());
exports.UnpackOptions = UnpackOptions;
