# 1001-albums-js-api
A typescript typed JS api client for 1001 albums

## Installation

You can install the package using npm:

```bash
npm install albums-generator-client
```

## Usage

First, import the `AlbumsGeneratorClient` from the package:

```typescript
import { AlbumsGeneratorClient, Group, AlbumInGroup, Project, AlbumStats, UserAlbumStats } from 'albums-generator-client';
```

You can then instantiate the client. By default, it connects to `https://1001albumsgenerator.com/api/v1`. You can optionally provide a different base URL:

```typescript
// Default base URL
const client = new AlbumsGeneratorClient();

// Custom base URL
// const customClient = new AlbumsGeneratorClient('https://your-api-domain.com/api/v1');
```

Here are examples of how to use the available methods. These methods now return Promises with specific TypeScript types, providing type safety and autocompletion for the response data.

### Get Group Details

```typescript
async function fetchGroupDetails(groupSlug: string) {
  try {
    // The method returns Promise<Group<typeof groupSlug>>
    // For simplicity in this example, we'll use Promise<Group>
    const groupData: Group = await client.getGroup(groupSlug);
    console.log('Group Name:', groupData.name);
    if (groupData.currentAlbum) {
      console.log('Current Album Artist:', groupData.currentAlbum.artist);
    }
    // You can now access properties of groupData with type safety.
    // For example, to see the list of members:
    // groupData.members.forEach(member => console.log(member.name));
  } catch (error) {
    console.error(`Error fetching group ${groupSlug}:`, error);
  }
}

// Example call
// fetchGroupDetails('your-group-slug');
```

### Get Album in Group

```typescript
async function fetchAlbumInGroup(groupSlug: string, albumUuid: string) {
  try {
    const albumData: AlbumInGroup = await client.getAlbumInGroup(groupSlug, albumUuid);
    console.log('Album Name:', albumData.albumName);
    console.log('Album Artist:', albumData.albumArtist);
    // Access reviews with type safety
    // albumData.reviews.forEach(review => console.log(review.projectName, review.rating));
  } catch (error) {
    console.error(`Error fetching album ${albumUuid} in group ${groupSlug}:`, error);
  }
}

// Example call
// fetchAlbumInGroup('your-group-slug', 'album-uuid');
```

### Get Project Details

```typescript
async function fetchProjectDetails(projectIdentifier: string) {
  try {
    // The method returns Promise<Project<typeof projectIdentifier>>
    // For simplicity, we'll use Promise<Project>
    const projectData: Project = await client.getProject(projectIdentifier);
    console.log('Project Name:', projectData.name);
    if (projectData.currentAlbum) {
      console.log('Current Project Album:', projectData.currentAlbum.name);
    }
    // Access history with type safety
    // projectData.history.forEach(entry => console.log(entry.album.name, entry.rating));
  } catch (error) {
    console.error(`Error fetching project ${projectIdentifier}:`, error);
  }
}

// Example call
// fetchProjectDetails('your-project-identifier');
```

### Get Album Stats

```typescript
async function fetchAlbumStats() {
  try {
    const stats: AlbumStats = await client.getAlbumStats();
    console.log('Total Album Stats Entries:', stats.stats.length);
    if (stats.stats.length > 0) {
      console.log('First Album Stat Entry Name:', stats.stats[0].albumName);
    }
    // Access individual stat entries with type safety
    // stats.stats.forEach(stat => console.log(stat.albumName, stat.averageRating));
  } catch (error) {
    console.error('Error fetching album stats:', error);
  }
}

// Example call
// fetchAlbumStats();
```

### Get User Album Stats

```typescript
async function fetchUserAlbumStats() {
  try {
    const userStats: UserAlbumStats = await client.getUserAlbumStats();
    console.log('User Name for Stats:', userStats.name);
    console.log('Total User Votes:', userStats.totalVotes);
    // Access individual user album stat entries with type safety
    // userStats.stats.forEach(stat => console.log(stat.album.name, stat.rating));
  } catch (error) {
    console.error('Error fetching user album stats:', error);
  }
}

// Example call
// fetchUserAlbumStats();
```

## Releasing

This project uses GitHub Releases to manage versions. The NPM package version is automatically determined by the Git tag used when creating a GitHub Release.

For example, creating a release with the tag `v1.2.3` will publish version `1.2.3` to NPM.

## CDN Usage

You can also use this library directly in the browser via CDN. We recommend using JSDelivr.

```html
<script src="https://cdn.jsdelivr.net/npm/albums-generator-client@latest/dist/client.umd.js"></script>
```
You can replace `@latest` with a specific version number, for example `@1.0.0` (once versioning is established).

### Example Usage

Below is a basic HTML example demonstrating how to include and instantiate the client. Check your browser's developer console for output.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Albums Generator Client CDN Test</title>
    <script src="https://cdn.jsdelivr.net/npm/albums-generator-client@latest/dist/client.umd.js"></script>
</head>
<body>
    <h1>CDN Usage Example</h1>
    <p>Check your browser's developer console for messages.</p>

    <script>
        if (typeof AlbumsGeneratorClient !== 'undefined') {
          // Instantiate the client
          // The constructor can take an optional API key: new AlbumsGeneratorClient('YOUR_API_KEY');
          const client = new AlbumsGeneratorClient(); 
          
          console.log('AlbumsGeneratorClient successfully loaded and instantiated:', client);
          
          // You can now use client methods. For example, if a method like `client.getApiUrl()` exists:
          // if (typeof client.getApiUrl === 'function') {
          //   console.log('API Base URL:', client.getApiUrl());
          // }

          // Example of calling a method (ensure the method exists and you handle promises):
          /*
          client.getAlbumStats() // Assuming getAlbumStats is a valid method
            .then(stats => {
              console.log('Album stats:', stats);
              alert('Successfully fetched album stats! Check console.');
            })
            .catch(error => {
              console.error('Error fetching album stats:', error);
              alert('Error fetching album stats. Check console.');
            });
          */
          
          alert('AlbumsGeneratorClient loaded! Check the console for the client object and messages.');

        } else {
          console.error('AlbumsGeneratorClient is not loaded!');
          alert('Error: AlbumsGeneratorClient is not loaded! Check that the script URL is correct.');
        }
    </script>
</body>
</html>
```
