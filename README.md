# Litecoin Testnet faucet

This is a cryptocurrency testnet faucet for Litecoin based on the cutting-edge web framework Next.js. 
The faucet script utilizes Block.io API to send testnet coins to an address which eliminates expensive wallet hosting.

## Requirements

- Node.js (I use v20.10)
- Block.io Account (with your IP whitelisted)

## Installation

1. Run the code `npm install`
2. Copy `.env.example` to `.env`
3. Fill in the credentials of Block.io in `.env`, see Section Environment Variables
4. Run the development server making sure everything works as expected by running the commmand `npm run dev`
5. Build the project using `npm run build`
6. Start the project using `npm run start`

## Environment Variables

- `BLOCKIO_APIKEY`: Block.io API Key, e.g., LTC Testnet
- `BLOCKIO_ADDR_LABEL`: Block.io Address Label you specified when creating a new address, e.g., default
- `BLOCKIO_SECRET_PIN`: Block.io Secret PIN