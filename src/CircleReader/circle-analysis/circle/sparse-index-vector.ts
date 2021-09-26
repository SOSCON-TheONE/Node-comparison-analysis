// automatically generated by the FlatBuffers compiler, do not modify

import { Int32Vector } from '../circle/int32-vector';
import { Uint16Vector } from '../circle/uint16-vector';
import { Uint8Vector } from '../circle/uint8-vector';


export enum SparseIndexVector{
  NONE = 0,
  Int32Vector = 1,
  Uint16Vector = 2,
  Uint8Vector = 3
}

export function unionToSparseIndexVector(
  type: SparseIndexVector,
  accessor: (obj:Int32Vector|Uint16Vector|Uint8Vector) => Int32Vector|Uint16Vector|Uint8Vector|null
): Int32Vector|Uint16Vector|Uint8Vector|null {
  switch(SparseIndexVector[type]) {
    case 'NONE': return null; 
    case 'Int32Vector': return accessor(new Int32Vector())! as Int32Vector;
    case 'Uint16Vector': return accessor(new Uint16Vector())! as Uint16Vector;
    case 'Uint8Vector': return accessor(new Uint8Vector())! as Uint8Vector;
    default: return null;
  }
}

export function unionListToSparseIndexVector(
  type: SparseIndexVector, 
  accessor: (index: number, obj:Int32Vector|Uint16Vector|Uint8Vector) => Int32Vector|Uint16Vector|Uint8Vector|null, 
  index: number
): Int32Vector|Uint16Vector|Uint8Vector|null {
  switch(SparseIndexVector[type]) {
    case 'NONE': return null; 
    case 'Int32Vector': return accessor(index, new Int32Vector())! as Int32Vector;
    case 'Uint16Vector': return accessor(index, new Uint16Vector())! as Uint16Vector;
    case 'Uint8Vector': return accessor(index, new Uint8Vector())! as Uint8Vector;
    default: return null;
  }
}

