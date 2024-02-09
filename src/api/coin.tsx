
'use server';

const BlockIo = require('block_io');

const block_io = new BlockIo(process.env.BLOCKIO_APIKEY);

export async function sendCoins(prevState: any, formData: FormData) {
    let ltcAddress = formData.get('ltc_address')?.toString || '';

    if(ltcAddress.length < 34 || ltcAddress.length > 65) {
        return {
            message: 'Invalid LTC address.',
        };
    }


    try {
        const response = await block_io.prepare_transaction({ amount: '0.001', from_labels: process.env.BLOCKIO_ADDR_LABEL, to_addresses: formData.get('ltc_address'), priority: 'low' });
        const response2 = await block_io.create_and_sign_transaction({ data: response, pin: process.env.BLOCKIO_SECRET_PIN });
        block_io.submit_transaction({ transaction_data: response2 });
        
        return {
            message: 'Coins sent!',
        };
    } catch (error) {
        return {
            message: 'Error sending coins. Please try again later.',
        };
    }

}