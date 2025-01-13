export class HackerOneHackerAPI {
  private baseUrl: string = 'https://api.hackerone.com/v1';
  private headers: Headers;

  constructor(apiUsername: string, apiToken: string) {
    this.headers = new Headers({
      Authorization: `Basic ${btoa(`${apiUsername}:${apiToken}`)}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
  }

  private async fetchAPI<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: this.headers,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  /** Fetch Hacktivity */
  async getHacktivity(
    queryString?: string,
    page: number = 1,
    size: number = 25
  ): Promise<any> {
    const query = queryString
      ? `?queryString=${encodeURIComponent(queryString)}`
      : '';
    const pagination = `&page[number]=${page}&page[size]=${size}`;
    return this.fetchAPI(`/hackers/hacktivity${query}${pagination}`);
  }

  /** Fetch Reports for Authenticated User */
  async getMyReports(page: number = 1, size: number = 25): Promise<any> {
    return this.fetchAPI(
      `/hackers/me/reports?page[number]=${page}&page[size]=${size}`
    );
  }

  /** Fetch Specific Report by ID */
  async getReportById(id: string): Promise<any> {
    return this.fetchAPI(`/hackers/reports/${id}`);
  }

  /** Create a Report */
  async createReport(payload: {
    team_handle: string;
    title: string;
    vulnerability_information: string;
    impact: string;
    severity_rating: 'none' | 'low' | 'medium' | 'high' | 'critical';
    weakness_id?: number;
    structured_scope_id?: number;
  }): Promise<any> {
    return this.fetchAPI(`/hackers/reports`, {
      method: 'POST',
      body: JSON.stringify({ data: { type: 'report', attributes: payload } }),
    });
  }

  /** Get Balance */
  async getBalance(): Promise<any> {
    return this.fetchAPI(`/hackers/payments/balance`);
  }

  /** Get Earnings */
  async getEarnings(page: number = 1, size: number = 25): Promise<any> {
    return this.fetchAPI(
      `/hackers/payments/earnings?page[number]=${page}&page[size]=${size}`
    );
  }

  /** Get Payouts */
  async getPayouts(page: number = 1, size: number = 25): Promise<any> {
    return this.fetchAPI(
      `/hackers/payments/payouts?page[number]=${page}&page[size]=${size}`
    );
  }

  /** Get Programs */
  async getPrograms(page: number = 1, size: number = 25): Promise<any> {
    return this.fetchAPI(
      `/hackers/programs?page[number]=${page}&page[size]=${size}`
    );
  }

  /** Get Program by Handle */
  async getProgramByHandle(handle: string): Promise<any> {
    return this.fetchAPI(`/hackers/programs/${handle}`);
  }

  /** Get Weaknesses of a Program */
  async getWeaknesses(
    handle: string,
    page: number = 1,
    size: number = 25
  ): Promise<any> {
    return this.fetchAPI(
      `/hackers/programs/${handle}/weaknesses?page[number]=${page}&page[size]=${size}`
    );
  }

  /** Get Structured Scopes of a Program */
  async getStructuredScopes(
    handle: string,
    page: number = 1,
    size: number = 25
  ): Promise<any> {
    return this.fetchAPI(
      `/hackers/programs/${handle}/structured_scopes?page[number]=${page}&page[size]=${size}`
    );
  }
}
