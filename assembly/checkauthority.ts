import { Writer, Reader } from "as-proto";

export namespace checkauthority {
  export class checkauthority_args {
    static encode(message: checkauthority_args, writer: Writer): void {
      const unique_name_account = message.account;
      if (unique_name_account !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_account);
      }

      if (message.type != 0) {
        writer.uint32(16);
        writer.int32(message.type);
      }

      const unique_name_caller = message.caller;
      if (unique_name_caller !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_caller);
      }

      if (message.entry_point != 0) {
        writer.uint32(32);
        writer.uint32(message.entry_point);
      }

      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(42);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): checkauthority_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new checkauthority_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          case 2:
            message.type = reader.int32();
            break;

          case 3:
            message.caller = reader.bytes();
            break;

          case 4:
            message.entry_point = reader.uint32();
            break;

          case 5:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array | null;
    type: authorization_type;
    caller: Uint8Array | null;
    entry_point: u32;
    data: Uint8Array | null;

    constructor(
      account: Uint8Array | null = null,
      type: authorization_type = 0,
      caller: Uint8Array | null = null,
      entry_point: u32 = 0,
      data: Uint8Array | null = null
    ) {
      this.account = account;
      this.type = type;
      this.caller = caller;
      this.entry_point = entry_point;
      this.data = data;
    }
  }

  export enum authorization_type {
    contract_call = 0,
    transaction_application = 1,
    contract_upload = 2,
  }
}
