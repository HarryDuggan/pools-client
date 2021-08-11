// import { BigNumber, ethers } from 'ethers';
import { LeveragedPool } from '@libs/types/contracts';
import { BigNumber, ethers } from 'ethers';

export type TokenState = {
    contract: LeveragedPool | undefined;
	longTokenName: string,
	shortTokenName: string,
    tokenBalances: {
        shortToken: BigNumber,
        longToken: BigNumber,
        quoteToken: BigNumber
    },
    approvedTokens: {
        shortToken: boolean,
        longToken: boolean,
        quoteToken: boolean 
    }
};

export const initialTokenState: TokenState = {
    contract: undefined,
	longTokenName: '',
	shortTokenName: '',
    tokenBalances: {
        shortToken: ethers.BigNumber.from(0),
        longToken: ethers.BigNumber.from(0),
        quoteToken: ethers.BigNumber.from(0),
    },
    approvedTokens: {
        shortToken: false,
        longToken: false,
        quoteToken: false,
    }
};

export type TokenAction = 
    | { type: 'setNames'; longToken: string, shortToken: string }
    | { type: 'setContract'; contract: any }
    | { type: 'setPoolTokenBalances'; balances: {
        shortToken: BigNumber, longToken: BigNumber
    }}
    | { type: 'setApprovedTokens'; approvals: {
        shortToken: boolean, longToken: boolean 
    }}
    | { type: 'setQuoteTokenBalance'; quoteTokenBalance: BigNumber }
    | { type: 'setApprovedQuoteToken'; value: boolean};

export const tokenReducer = (state: TokenState, action: TokenAction) => {
    switch (action.type) {
        case 'setContract':
            return {
                ...state,
                contract: action.contract,
            };
        case 'setNames':
            return {
                ...state,
                longTokenName: action.longToken,
                shortTokenName: action.shortToken,
            }
        case 'setQuoteTokenBalance':
            return {
                ...state,
                tokenBalances: {
                    ...state.tokenBalances,
                    quoteToken: action.quoteTokenBalance
                }
            }
        case 'setPoolTokenBalances': {
            return {
                ...state,
                tokenBalances: {
                    ...state.tokenBalances,
                    shortToken: action.balances.shortToken,
                    longToken: action.balances.longToken,
                }
            }
        }
        case 'setApprovedTokens': {
            return {
                ...state,
                approvedTokens: {
                    ...state.approvedTokens,
                    shortToken: action.approvals.shortToken,
                    longToken: action.approvals.longToken,
                }
            }
        }
        case 'setApprovedQuoteToken': {
            return {
                ...state,
                approvedTokens: {
                    ...state.approvedTokens,
                    quoteToken: action.value,
                }
            }
        }
        default:
            throw new Error('Unexpected action');
    }
};