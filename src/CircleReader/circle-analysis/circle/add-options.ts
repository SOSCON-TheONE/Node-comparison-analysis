// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ActivationFunctionType } from '../circle/activation-function-type';


export class AddOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):AddOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAddOptions(bb:flatbuffers.ByteBuffer, obj?:AddOptions):AddOptions {
  return (obj || new AddOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAddOptions(bb:flatbuffers.ByteBuffer, obj?:AddOptions):AddOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AddOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

fusedActivationFunction():ActivationFunctionType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
}

static startAddOptions(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addFusedActivationFunction(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType) {
  builder.addFieldInt8(0, fusedActivationFunction, ActivationFunctionType.NONE);
}

static endAddOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createAddOptions(builder:flatbuffers.Builder, fusedActivationFunction:ActivationFunctionType):flatbuffers.Offset {
  AddOptions.startAddOptions(builder);
  AddOptions.addFusedActivationFunction(builder, fusedActivationFunction);
  return AddOptions.endAddOptions(builder);
}
}
