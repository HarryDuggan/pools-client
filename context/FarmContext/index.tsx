import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Children } from 'libs/types/General';
import { useWeb3 } from '../Web3Context/Web3Context';
import { ethers } from 'ethers';
import { Farm } from '@libs/types/Staking';
import { StakingRewards } from '@libs/staking/typechain';
import { ERC20, ERC20__factory } from '@tracer-protocol/perpetual-pools-contracts/types';

interface ContextProps {
    farms: { [address: string]: Farm };
}

export const FarmContext = React.createContext<ContextProps>({ farms: {} });

/**
 * Wrapper store for the FarmContext.
 */
export const FarmStore: React.FC<Children> = ({ children }: Children) => {
    const { provider, config, account } = useWeb3();
    const [farms, setFarms] = useState<ContextProps['farms']>({});

    const fetchFarms = useCallback(async () => {
        if (provider && config && account) {
            for (const { address, abi, name } of config.farms) {
                const contract = new ethers.Contract(address, abi, provider).connect(account) as StakingRewards;

                const [myStaked, stakingToken, rewardPerToken, myRewards] = await Promise.all([
                    contract.balanceOf(account),
                    contract.stakingToken(),
                    contract.rewardPerToken(),
                    contract.rewards(account),
                ]);

                const stakingTokenContract = new ethers.Contract(stakingToken, ERC20__factory.abi, provider) as ERC20;

                setFarms((previousFarms) => ({
                    ...previousFarms,
                    [address]: {
                        name,
                        address,
                        contract,
                        stakingToken: stakingTokenContract,
                        myStaked,
                        myRewards,
                        apy: rewardPerToken,
                        tvl: ethers.BigNumber.from(0),
                    },
                }));
            }
        }
    }, [provider, config, account]);

    // fetch farms initially
    useEffect(() => {
        fetchFarms();
    }, []);

    // update farms on network change
    useEffect(() => {
        fetchFarms();
    }, [provider, config, account]);

    return (
        <FarmContext.Provider
            value={{
                farms,
            }}
        >
            {children}
        </FarmContext.Provider>
    );
};

export const useFarms: () => ContextProps = () => {
    const context = useContext(FarmContext);
    if (context === undefined) {
        throw new Error(`useFarms must be called within FarmContext`);
    }
    return context;
};