// To Connect with wallet

const appName = 'Dotme';

export async function connectWallet() {
	if (typeof window === 'undefined') {
		throw new Error('Wallet connection is only available in the browser');
	}

	const { web3Enable, web3Accounts, web3FromAddress } = await import('@polkadot/extension-dapp');

	const extensions = await web3Enable(appName);
	if (!extensions.length) {
		throw new Error('No wallet extensions found');
	}

	const accounts = await web3Accounts();
	if (!accounts.length) {
		throw new Error('No accounts found in wallet');
	}

	const account = accounts[0];
	const injector = await web3FromAddress(account.address);

	return {
		address: account.address,
		name: account.meta.name,
		signer: injector.signer
	};
}
