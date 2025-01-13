# HackerOne Hacker API SDK

A TypeScript SDK for interacting with the HackerOne API. This library simplifies communication with the HackerOne platform by providing easy-to-use methods for various API endpoints.

## Installation

Install the package via npm:

```bash
npm install hackerone-hacker-api-sdk
```

## Usage

Here's a quick example to get started:

```typescript
import { HackerOneAPI } from "hackerone-hacker-api-sdk";

// Initialize the SDK
const api = new HackerOneAPI("<YOUR_API_USERNAME>", "<YOUR_API_TOKEN>");

// Fetch balance
api.getBalance()
  .then(balance => console.log("Balance:", balance))
  .catch(error => console.error("Error fetching balance:", error));

// Fetch hacktivity
api.getHacktivity("severity_rating:critical")
  .then(hacktivity => console.log("Hacktivity:", hacktivity))
  .catch(error => console.error("Error fetching hacktivity:", error));
```

## Features

- **Fetch Hacktivity**: Retrieve public vulnerability reports based on filters.
- **Manage Reports**: Access and create vulnerability reports.
- **Program Data**: Fetch program details, weaknesses, and structured scopes.
- **Payments**: Check balances, payouts, and earnings.

## Project Setup

Ensure you have Node.js installed and initialize your project:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hackerone-hacker-api-sdk.git
   cd hackerone-hacker-api-sdk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
