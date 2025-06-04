import axios, { AxiosInstance } from 'axios';
import { Group, AlbumInGroup, Project, AlbumStats, UserAlbumStats } from './types';

const DEFAULT_BASE_URL = 'https://1001albumsgenerator.com/api/v1';

export class AlbumsGeneratorClient {
  private axiosInstance: AxiosInstance;
  private requestTimestamps: number[] = [];
  private readonly RATE_LIMIT_COUNT = 3;
  private readonly RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

  private async handleRateLimit(): Promise<void> {
    const currentTime = Date.now();
    // Remove timestamps older than the rate limit window
    this.requestTimestamps = this.requestTimestamps.filter(
      (timestamp) => currentTime - timestamp < this.RATE_LIMIT_WINDOW_MS
    );

    if (this.requestTimestamps.length >= this.RATE_LIMIT_COUNT) {
      const oldestRequestTime = this.requestTimestamps[0]; // Should be the oldest after filtering
      const timePassedSinceOldestRequest = currentTime - oldestRequestTime;
      const waitTime = this.RATE_LIMIT_WINDOW_MS - timePassedSinceOldestRequest;

      if (waitTime > 0) {
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
      // After waiting, filter again as the window has shifted
      const newCurrentTime = Date.now();
      this.requestTimestamps = this.requestTimestamps.filter(
        (timestamp) => newCurrentTime - timestamp < this.RATE_LIMIT_WINDOW_MS
      );
    }
    // Add the current request's timestamp
    this.requestTimestamps.push(Date.now());
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
