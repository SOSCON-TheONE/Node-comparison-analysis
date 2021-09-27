// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ActivationFunctionType } from '../circle/activation-function-type';
import { Padding } from '../circle/padding';


export class Conv2DOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Conv2DOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsConv2DOptions(bb:flatbuffers.ByteBuffer, obj?:Conv2DOptions):Conv2DOptions {
  return (obj || new Conv2DOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsConv2DOptions(bb:flatbuffers.ByteBuffer, obj?:Conv2DOptions):Conv2DOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Conv2DOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

padding():Padding {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : Padding.SAME;
}

strideW():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

strideH():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

fusedActivationFunction():ActivationFunctionType {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
}

dilationWFactor():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 1;
}

dilationHFactor():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 1;
}

static startConv2DOptions(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addPadding(builder:flatbuffers.Builder, padding:Padding) {
  builder.addFieldInt8(0, padding, Padding.SAME);
}

static addStrideW(builder:flatbuffers.Builder, strideW:number) {
  builder.addFieldInt32(1, strideW, 0);
}

static addStrideH(builder:flatbuffers.Builder, strideH:number) {
  builder.addFieldInt32(2, strideH, 0);
}

static addFusedActivationFunction(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType) {
  builder.addFieldInt8(3, fusedActivationFunction, ActivationFunctionType.NONE);
}

static addDilationWFactor(builder:flatbuffers.Builder, dilationWFactor:number) {
  builder.addFieldInt32(4, dilationWFactor, 1);
}

static addDilationHFactor(builder:flatbuffers.Builder, dilationHFactor:number) {
  builder.addFieldInt32(5, dilationHFactor, 1);
}

static endConv2DOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createConv2DOptions(builder:flatbuffers.Builder, padding:Padding, strideW:number, strideH:number, fusedActivationFunction:ActivationFunctionType, dilationWFactor:number, dilationHFactor:number):flatbuffers.Offset {
  Conv2DOptions.startConv2DOptions(builder);
  Conv2DOptions.addPadding(builder, padding);
  Conv2DOptions.addStrideW(builder, strideW);
  Conv2DOptions.addStrideH(builder, strideH);
  Conv2DOptions.addFusedActivationFunction(builder, fusedActivationFunction);
  Conv2DOptions.addDilationWFactor(builder, dilationWFactor);
  Conv2DOptions.addDilationHFactor(builder, dilationHFactor);
  return Conv2DOptions.endConv2DOptions(builder);
}
}
