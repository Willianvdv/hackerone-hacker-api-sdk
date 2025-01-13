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
await api.getBalance()

// Fetch hacktivity
await api.getHacktivity("severity_rating:critical")

// Fetch reports
await api.getReports()

// Create report
const reportData = {
  team_handle: 'security',
  title: 'XSS in login form',
  vulnerability_information: 'I found a reflected XSS vulnerability in the login form...',
  impact: "An attacker could execute arbitrary JavaScript in the victim's browser",
  severity_rating: 'high'
}

await api.createReport(reportPayload)
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
