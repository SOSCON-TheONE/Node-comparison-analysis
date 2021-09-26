"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.GreaterOptions = void 0;
var flatbuffers = require("flatbuffers");
var GreaterOptions = /** @class */ (function () {
    function GreaterOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    GreaterOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    GreaterOptions.getRootAsGreaterOptions = function (bb, obj) {
        return (obj || new GreaterOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    GreaterOptions.getSizePrefixedRootAsGreaterOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new GreaterOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    GreaterOptions.startGreaterOptions = function (builder) {
        builder.startObject(0);
    };
    GreaterOptions.endGreaterOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    GreaterOptions.createGreaterOptions = function (builder) {
        GreaterOptions.startGreaterOptions(builder);
        return GreaterOptions.endGreaterOptions(builder);
    };
    return GreaterOptions;
}());
exports.GreaterOptions = GreaterOptions;
