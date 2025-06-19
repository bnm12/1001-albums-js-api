import axios, { AxiosInstance } from 'axios';
import { Group, AlbumInGroup, Project, AlbumStats, UserAlbumStats } from './types';

const DEFAULT_BASE_URL = 'https://1001albumsgenerator.com/api/v1';

export class AlbumsGeneratorClient {
  private axiosInstance: AxiosInstance;
  private requestTimestamps: number[] = [];
  private readonly RATE_LIMIT_COUNT = 3;
  private readonly RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
  private readonly MIN_REQUEST_INTERVAL_MS = 11 * 1000; // 11 seconds

  private async handleRateLimit(): Promise<void> {
    const currentTime = Date.now();

    // Rule 1: Minimum 11-second interval between requests
    let waitTimePerRequestRule = 0;
    if (this.requestTimestamps.length > 0) {
      const lastRequestTime = this.requestTimestamps[this.requestTimestamps.length - 1];
      const timeSinceLastRequest = currentTime - lastRequestTime;
      if (timeSinceLastRequest < this.MIN_REQUEST_INTERVAL_MS) {
        waitTimePerRequestRule = this.MIN_REQUEST_INTERVAL_MS - timeSinceLastRequest;
      }
    }

    // Rule 2: Max 3 requests per minute
    // Filter timestamps to consider only those within the rate limit window for this rule
    const relevantTimestampsForMinuteRule = this.requestTimestamps.filter(
      (timestamp) => currentTime - timestamp < this.RATE_LIMIT_WINDOW_MS
    );

    let waitTimePerMinuteRule = 0;
    if (relevantTimestampsForMinuteRule.length >= this.RATE_LIMIT_COUNT) {
      // The oldest request within the window that counts towards the limit
      const oldestRelevantRequestTime = relevantTimestampsForMinuteRule[0];
      const timePassedSinceOldestRelevantRequest = currentTime - oldestRelevantRequestTime;
      // Wait until this oldest request is outside the window
      waitTimePerMinuteRule = Math.max(0, this.RATE_LIMIT_WINDOW_MS - timePassedSinceOldestRelevantRequest);
    }

    // Determine the final wait time (longer of the two rules)
    const finalWaitTime = Math.max(waitTimePerRequestRule, waitTimePerMinuteRule);

    if (finalWaitTime > 0) {
      await new Promise(resolve => setTimeout(resolve, finalWaitTime));
    }

    // Record the timestamp of when this request is effectively being made (after any wait)
    const effectiveRequestTime = Date.now();
    this.requestTimestamps.push(effectiveRequestTime);

    // Prune timestamps: Remove timestamps older than the rate limit window (RATE_LIMIT_WINDOW_MS)
    // This keeps the array relevant for the next "3 per minute" check.
    // It's important this happens after pushing the new timestamp.
    this.requestTimestamps = this.requestTimestamps.filter(
      (timestamp) => Date.now() - timestamp < this.RATE_LIMIT_WINDOW_MS
    );
    // Ensure the array doesn't grow excessively if requests are very sparse
    // by only keeping the most recent ones relevant for RATE_LIMIT_COUNT,
    // but the filter above should generally handle it for the 3/min rule.
    // If MIN_REQUEST_INTERVAL_MS was much larger than RATE_LIMIT_WINDOW_MS, this might need more thought.
    // For now, the above filter is consistent with original intent for the minute-based window.
  }

  constructor(baseURL: string = DEFAULT_BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async getGroup(groupSlug: string): Promise<Group<typeof groupSlug>> {
    await this.handleRateLimit();
    try {
      const response = await this.axiosInstance.get<Group<typeof groupSlug>>(`/groups/${groupSlug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching group ${groupSlug}:`, error);
      // Re-throw the error or handle it as per application's needs
      throw error;
    }
  }

  public async getAlbumInGroup(groupSlug: string, albumUuid: string): Promise<AlbumInGroup> {
    await this.handleRateLimit();
    try {
      const response = await this.axiosInstance.get<AlbumInGroup>(`/groups/${groupSlug}/albums/${albumUuid}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching album ${albumUuid} in group ${groupSlug}:`, error);
      // Re-throw the error or handle it as per application's needs
      throw error;
    }
  }

  public async getProject(projectIdentifier: string): Promise<Project<typeof projectIdentifier>> {
    await this.handleRateLimit();
    try {
      const response = await this.axiosInstance.get<Project<typeof projectIdentifier>>(`/projects/${projectIdentifier}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project ${projectIdentifier}:`, error);
      // Re-throw the error or handle it as per application's needs
      throw error;
    }
  }

  public async getAlbumStats(): Promise<AlbumStats> {
    await this.handleRateLimit();
    try {
      const response = await this.axiosInstance.get<AlbumStats>('/albums/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching album stats:', error);
      // Re-throw the error or handle it as per application's needs
      throw error;
    }
  }

  public async getUserAlbumStats(): Promise<UserAlbumStats> {
    await this.handleRateLimit();
    try {
      const response = await this.axiosInstance.get<UserAlbumStats>('/user-albums/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching user album stats:', error);
      // Re-throw the error or handle it as per application's needs
      throw error;
    }
  }
}
