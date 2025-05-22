// To handle "Sign In With Polkadot"

import { stringToU8a, u8aToHex } from '@polkadot/util';
import { signatureVerify } from '@polkadot/util-crypto';
import { v4 as uuidv4 } from 'uuid';

const dappName = 'Praze';
const uri = 'https://Praze.me';

type SignInResult = {
	success: boolean;
	address?: string;
	error?: string;
};

async function signInWithPolkadot(): Promise<SignInResult> {
	if (typeof window === 'undefined') {
		throw new Error('Wallet connection is only available in the browser');
	}

	const { web3Enable, web3Accounts, web3FromAddress } = await import('@polkadot/extension-dapp');

	try {
		await web3Enable(dappName);
		const accounts = await web3Accounts();
		if (!accounts.length) {
			return {
				success: false,
				error: 'No Polkadot accounts found. Please install a wallet.'
			};
		}

		const address = accounts[0].address;

		const nonce = uuidv4().slice(0, 8);
		const issuedAt = new Date().toISOString();
		const expiration = 2 * 60;
		const expirationTime = new Date(Date.now() + expiration * 1000).toISOString();

		const message = `${dappName} wants you to sign in with your Polkadot account:\n${address}\n\nURI: ${uri}\nVersion: 1\nChain ID: ${'polkadot'}\nNonce: ${nonce}\nIssued At: ${issuedAt}\nExpiration Time: ${expirationTime}`;

		const injector = await web3FromAddress(address);
		const signer = injector.signer;

		if (!signer.signRaw) {
			return {
				success: false,
				error: 'The wallet does not support raw signing (signRaw is undefined).'
			};
		}

		const signatureResult = await signer.signRaw({
			address,
			data: u8aToHex(stringToU8a(message)),
			type: 'bytes'
		});

		const signature = signatureResult.signature;

		let isValid = false;

		isValid = signatureVerify(message, signature, address).isValid;

		if (!isValid) {
			return { success: false, error: 'Signature verification failed.' };
		}

		return { success: true, address };
	} catch (error) {
		return {
			success: false,
			error: `Sign-in failed: ${(error as Error).message}`
		};
	}
}

export { signInWithPolkadot };
