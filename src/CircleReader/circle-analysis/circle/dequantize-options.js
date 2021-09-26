"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.DequantizeOptions = void 0;
var flatbuffers = require("flatbuffers");
var DequantizeOptions = /** @class */ (function () {
    function DequantizeOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    DequantizeOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    DequantizeOptions.getRootAsDequantizeOptions = function (bb, obj) {
        return (obj || new DequantizeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    DequantizeOptions.getSizePrefixedRootAsDequantizeOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DequantizeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    DequantizeOptions.startDequantizeOptions = function (builder) {
        builder.startObject(0);
    };
    DequantizeOptions.endDequantizeOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    DequantizeOptions.createDequantizeOptions = function (builder) {
        DequantizeOptions.startDequantizeOptions(builder);
        return DequantizeOptions.endDequantizeOptions(builder);
    };
    return DequantizeOptions;
}());
exports.DequantizeOptions = DequantizeOptions;
