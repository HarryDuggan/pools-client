import { BigNumber, ethers } from 'ethers';
import { LeveragedPool } from '@libs/types/contracts';

export type PoolState = {
    contract: LeveragedPool | undefined;
    nextRebalance: number;
    token: string;
    marketChange: number;
    rebalanceMultiplier: BigNumber;
    leverage: BigNumber;
    lastPrice: BigNumber;
    oraclePrice: BigNumber;
    poolBalances: {
        longBalance: BigNumber,
        shortBalance: BigNumber,
    },
};

export const initialPoolState: PoolState = {
    contract: undefined,
    nextRebalance: 0,
    token: '4DOWN-BTC/USDC',
    marketChange: 31.25,
    rebalanceMultiplier: BigNumber.from(0),
    leverage: BigNumber.from(0),
    lastPrice: BigNumber.from(0),
    oraclePrice: BigNumber.from(0),
    poolBalances: {
        shortBalance: ethers.BigNumber.from(0),
        longBalance: ethers.BigNumber.from(0),
    },
};

export type PoolAction = 
    | { type: 'setToken'; token: string }
    | { type: 'setNextRebalance'; nextRebalance: number }
    | { type: 'setLastPrice'; lastPrice: BigNumber }
    | { type: 'setMarketChange'; marketChange: number }
    | { type: 'setUpdateInterval'; updateInterval: number }
    | { type: 'setLeverage'; leverage: BigNumber}
    | { type: 'setRebalanceMultiplier'; rebalanceMultiplier: BigNumber}
    | { type: 'setOraclePrice'; oraclePrice: BigNumber }
    | { type: 'setPoolBalances'; balances: {
        shortBalance: BigNumber, longBalance: BigNumber
    }}
    | { type: 'setContract'; contract: any };

export const reducer = (state: PoolState, action: PoolAction) => {
    switch (action.type) {
        case 'setContract':
            return {
                ...state,
                contract: action.contract,
            };
        case 'setToken':
            return {
                ...state,
                token: action.token
            }
        case 'setNextRebalance':
            return {
                ...state,
                nextRebalance: action.nextRebalance
            }
        case 'setLastPrice':
            return {
                ...state,
                lastPrice: action.lastPrice
            }
        case 'setRebalanceMultiplier':
            return {
                ...state,
                rebalanceMultiplier: action.rebalanceMultiplier
            }
        case 'setUpdateInterval':
            return {
                ...state,
                updateInterval: action.updateInterval
            }
        case 'setMarketChange':
            return {
                ...state,
                marketChange: action.marketChange
            }
        case 'setLeverage':
            return {
                ...state,
                leverage: action.leverage
            }
        case 'setOraclePrice':
            return {
                ...state,
                oraclePrice: action.oraclePrice
            }
        case 'setPoolBalances': {
            return {
                ...state,
                poolBalances: {
                    ...state.poolBalances,
                    shortBalance: action.balances.shortBalance,
                    longBalance: action.balances.longBalance,
                }
            }
        }
        default:
            throw new Error('Unexpected action');
    }
};