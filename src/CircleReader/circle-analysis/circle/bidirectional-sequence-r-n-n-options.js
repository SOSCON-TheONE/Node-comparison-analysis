"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.BidirectionalSequenceRNNOptions = void 0;
var flatbuffers = require("flatbuffers");
var activation_function_type_1 = require("../circle/activation-function-type");
var BidirectionalSequenceRNNOptions = /** @class */ (function () {
    function BidirectionalSequenceRNNOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    BidirectionalSequenceRNNOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    BidirectionalSequenceRNNOptions.getRootAsBidirectionalSequenceRNNOptions = function (bb, obj) {
        return (obj || new BidirectionalSequenceRNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    BidirectionalSequenceRNNOptions.getSizePrefixedRootAsBidirectionalSequenceRNNOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BidirectionalSequenceRNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    BidirectionalSequenceRNNOptions.prototype.timeMajor = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    BidirectionalSequenceRNNOptions.prototype.fusedActivationFunction = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : activation_function_type_1.ActivationFunctionType.NONE;
    };
    BidirectionalSequenceRNNOptions.prototype.mergeOutputs = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    BidirectionalSequenceRNNOptions.prototype.asymmetricQuantizeInputs = function () {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    BidirectionalSequenceRNNOptions.startBidirectionalSequenceRNNOptions = function (builder) {
        builder.startObject(4);
    };
    BidirectionalSequenceRNNOptions.addTimeMajor = function (builder, timeMajor) {
        builder.addFieldInt8(0, +timeMajor, +false);
    };
    BidirectionalSequenceRNNOptions.addFusedActivationFunction = function (builder, fusedActivationFunction) {
        builder.addFieldInt8(1, fusedActivationFunction, activation_function_type_1.ActivationFunctionType.NONE);
    };
    BidirectionalSequenceRNNOptions.addMergeOutputs = function (builder, mergeOutputs) {
        builder.addFieldInt8(2, +mergeOutputs, +false);
    };
    BidirectionalSequenceRNNOptions.addAsymmetricQuantizeInputs = function (builder, asymmetricQuantizeInputs) {
        builder.addFieldInt8(3, +asymmetricQuantizeInputs, +false);
    };
    BidirectionalSequenceRNNOptions.endBidirectionalSequenceRNNOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    BidirectionalSequenceRNNOptions.createBidirectionalSequenceRNNOptions = function (builder, timeMajor, fusedActivationFunction, mergeOutputs, asymmetricQuantizeInputs) {
        BidirectionalSequenceRNNOptions.startBidirectionalSequenceRNNOptions(builder);
        BidirectionalSequenceRNNOptions.addTimeMajor(builder, timeMajor);
        BidirectionalSequenceRNNOptions.addFusedActivationFunction(builder, fusedActivationFunction);
        BidirectionalSequenceRNNOptions.addMergeOutputs(builder, mergeOutputs);
        BidirectionalSequenceRNNOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
        return BidirectionalSequenceRNNOptions.endBidirectionalSequenceRNNOptions(builder);
    };
    return BidirectionalSequenceRNNOptions;
}());
exports.BidirectionalSequenceRNNOptions = BidirectionalSequenceRNNOptions;
