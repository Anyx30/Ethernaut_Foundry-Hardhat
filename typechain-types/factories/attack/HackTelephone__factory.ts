/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  HackTelephone,
  HackTelephoneInterface,
} from "../../attack/HackTelephone";

const _abi = [
  {
    inputs: [],
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405273a7da303075135696fb33e294e156257ff58b583b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006457600080fd5b5061016d806100746000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639e5faafc14610030575b600080fd5b61003861003a565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a6f9dae1739d95b165ecefa55c21df4cffc9718781d36b4a6c6040518263ffffffff1660e01b81526004016100a7919061011c565b600060405180830381600087803b1580156100c157600080fd5b505af11580156100d5573d6000803e3d6000fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610106826100db565b9050919050565b610116816100fb565b82525050565b6000602082019050610131600083018461010d565b9291505056fea2646970667358221220e01ec8ae3026cb93cfc3b043a6c7c5ca1e031858de2e225b0d1ae4373b166e5264736f6c63430008140033";

type HackTelephoneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HackTelephoneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HackTelephone__factory extends ContractFactory {
  constructor(...args: HackTelephoneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      HackTelephone & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): HackTelephone__factory {
    return super.connect(runner) as HackTelephone__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HackTelephoneInterface {
    return new Interface(_abi) as HackTelephoneInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): HackTelephone {
    return new Contract(address, _abi, runner) as unknown as HackTelephone;
  }
}
