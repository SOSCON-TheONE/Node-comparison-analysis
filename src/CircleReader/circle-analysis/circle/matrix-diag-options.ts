// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class MatrixDiagOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):MatrixDiagOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMatrixDiagOptions(bb:flatbuffers.ByteBuffer, obj?:MatrixDiagOptions):MatrixDiagOptions {
  return (obj || new MatrixDiagOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMatrixDiagOptions(bb:flatbuffers.ByteBuffer, obj?:MatrixDiagOptions):MatrixDiagOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MatrixDiagOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startMatrixDiagOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endMatrixDiagOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMatrixDiagOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  MatrixDiagOptions.startMatrixDiagOptions(builder);
  return MatrixDiagOptions.endMatrixDiagOptions(builder);
}
}
