// To send DOT from supporter to creator

import type { ApiPromise } from '@polkadot/api';
import type { Signer } from '@polkadot/api/types';

export async function sendDot(
	fromAddress: string,
	toAddress: string,
	amountDot: number,
	api: ApiPromise | undefined,
	signer: Signer | undefined
) {
	const amount = BigInt(amountDot * 10 ** 12);

	return new Promise<string>((resolve, reject) => {
		const tx = api?.tx.balances.transferKeepAlive(toAddress, amount);

		tx
			?.signAndSend(fromAddress, { signer }, ({ status, dispatchError }) => {
				if (dispatchError) {
					if (dispatchError.isModule) {
						const decoded = api?.registry.findMetaError(dispatchError.asModule);
						reject(`${decoded?.section}.${decoded?.name}: ${decoded?.docs.join(' ')}`);
					} else {
						reject(dispatchError.toString());
					}
				}

				if (status.isInBlock) {
					resolve(`Transaction included at blockHash ${status.asInBlock.toHex()}`);
				}
			})
			.catch(reject);
	});
}
