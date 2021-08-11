/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "deployPool(tuple)": FunctionFragment;
    "isValidPool(address)": FunctionFragment;
    "numPools()": FunctionFragment;
    "poolIdTaken(bytes32)": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "setFee(bytes16)": FunctionFragment;
    "setFeeReceiver(address)": FunctionFragment;
    "setMaxLeverage(uint16)": FunctionFragment;
    "setPoolKeeper(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployPool",
    values: [
      {
        poolCode: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        keeperOracle: string;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "isValidPool", values: [string]): string;
  encodeFunctionData(functionFragment: "numPools", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolIdTaken",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "setFee", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setFeeReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxLeverage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolKeeper",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "deployPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolIdTaken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolKeeper",
    data: BytesLike
  ): Result;

  events: {
    "DeployPool(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployPool"): EventFragment;
}

export class IPoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPoolFactoryInterface;

  functions: {
    deployPool(
      deploymentParameters: {
        poolCode: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        keeperOracle: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidPool(_pool: string, overrides?: CallOverrides): Promise<[boolean]>;

    numPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolIdTaken(
      uniquePoolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    pools(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setFee(
      _fee: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployPool(
    deploymentParameters: {
      poolCode: string;
      frontRunningInterval: BigNumberish;
      updateInterval: BigNumberish;
      leverageAmount: BigNumberish;
      quoteToken: string;
      oracleWrapper: string;
      keeperOracle: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidPool(_pool: string, overrides?: CallOverrides): Promise<boolean>;

  numPools(overrides?: CallOverrides): Promise<BigNumber>;

  poolIdTaken(
    uniquePoolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  pools(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setFee(
    _fee: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeReceiver(
    _feeReceiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxLeverage(
    newMaxLeverage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPoolKeeper(
    _poolKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployPool(
      deploymentParameters: {
        poolCode: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        keeperOracle: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    isValidPool(_pool: string, overrides?: CallOverrides): Promise<boolean>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    poolIdTaken(
      uniquePoolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pools(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setFee(_fee: BytesLike, overrides?: CallOverrides): Promise<void>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    DeployPool(
      pool?: string | null,
      ticker?: null
    ): TypedEventFilter<[string, string], { pool: string; ticker: string }>;
  };

  estimateGas: {
    deployPool(
      deploymentParameters: {
        poolCode: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        keeperOracle: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidPool(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    poolIdTaken(
      uniquePoolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setFee(
      _fee: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployPool(
      deploymentParameters: {
        poolCode: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        quoteToken: string;
        oracleWrapper: string;
        keeperOracle: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidPool(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolIdTaken(
      uniquePoolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pools(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxLeverage(
      newMaxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}