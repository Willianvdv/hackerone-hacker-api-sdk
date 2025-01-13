# HackerOne Hacker API SDK

A TypeScript SDK for interacting with the HackerOne API. This library simplifies communication with the HackerOne platform by providing easy-to-use methods for various API endpoints.

## Installation

Install the package via npm:

```bash
npm install hackerone-hacker-api-sdk
```

## Usage

Here's a quick example to get started:

Pop a node REPL with the SDK loaded:
```
HACKERONE_USERNAME=hacker HACKERONE_API_TOKEN=hunter3 npx -p hackerone-hacker-api-sdk node
```

```typescript
import { HackerOneHackerAPI } from "hackerone-hacker-api-sdk";

// Initialize the SDK
const api = new HackerOneHackerAPI(process.env.HACKERONE_USERNAME, process.env.HACKERONE_API_TOKEN);

// Fetch balance
api.getBalance()
  .then(balance => console.log("Balance:", balance))
  .catch(error => console.error("Error fetching balance:", error));

// Fetch hacktivity
api.getHacktivity("severity_rating:critical")
  .then(hacktivity => console.log("Hacktivity:", hacktivity))
  .catch(error => console.error("Error fetching hacktivity:", error));

// Fetch reports
api.getReports()
  .then(reports => console.log("Reports:", reports))
  .catch(error => console.error("Error fetching reports:", error));
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
