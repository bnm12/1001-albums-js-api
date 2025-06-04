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

The client includes a simple rate-limiting feature to prevent abuse. It allows for up to 3 requests per minute. If you exceed this limit, the client will automatically pause further requests until the minute window has passed.

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

## CDN Usage

You can also use this library directly in the browser via CDN. We recommend using JSDelivr.

```html
<script src="https://cdn.jsdelivr.net/npm/albums-generator-client@latest/dist/client.umd.js"></script>
```
You can replace `@latest` with a specific version number, for example `@1.0.0` (once versioning is established).

### Example Usage

A live demo page using the UMD module from JSDelivr can be found [here](https://bnm12.github.io/1001-albums-js-api/), with its source code available [here](https://github.com/bnm12/1001-albums-js-api/blob/main/index.html). Below is an example demonstrating how to include and use the client in an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Albums Generator Client Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/albums-generator-client@latest/dist/client.umd.js"></script>
    <style>
        body { font-family: sans-serif; margin: 20px; background-color: #f4f4f4; color: #333; }
        .container { background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        input[type="text"] { padding: 10px; margin-right: 10px; border: 1px solid #ddd; border-radius: 4px; width: calc(100% - 180px); display: inline-block; vertical-align: middle; }
        button { padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; display: inline-block; vertical-align: middle; }
        button:hover { background-color: #0056b3; }
        pre { background-color: #eee; padding: 15px; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word; }
        .error { color: red; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Albums Generator Client CDN Demo</h1>
        <p>
            Enter a project identifier (e.g., "1001-albums-you-must-hear-before-you-die")
            and click "Fetch Project Data". The client is available globally as <code>AlbumsGeneratorClient</code>.
        </p>
        <div>
            <input type="text" id="projectIdentifier" placeholder="Enter project identifier" value="1001-albums-you-must-hear-before-you-die">
            <button id="fetchButton">Fetch Project Data</button>
        </div>
        <h2>API Response:</h2>
        <pre id="responseArea">Click the button to fetch data.</pre>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const fetchButton = document.getElementById('fetchButton');
            const projectIdentifierInput = document.getElementById('projectIdentifier');
            const responseArea = document.getElementById('responseArea');

            // The AlbumsGeneratorClient is available globally when using the CDN UMD module.
            const client = new AlbumsGeneratorClient();

            fetchButton.addEventListener('click', async () => {
                const projectId = projectIdentifierInput.value.trim();
                if (!projectId) {
                    responseArea.textContent = 'Please enter a project identifier.';
                    responseArea.classList.add('error');
                    return;
                }

                responseArea.textContent = 'Loading...';
                responseArea.classList.remove('error');

                try {
                    // Example: Fetch project data
                    const data = await client.getProject(projectId);
                    responseArea.textContent = JSON.stringify(data, null, 2);
                } catch (error) {
                    console.error('Error fetching project data:', error);
                    responseArea.textContent = `Error: ${error.message || 'Failed to fetch data. See console for details.'}`;
                    responseArea.classList.add('error');
                }
            });
        });
    </script>
</body>
</html>
```

## Releasing

This project uses GitHub Releases to manage versions. The NPM package version is automatically determined by the Git tag used when creating a GitHub Release.

For example, creating a release with the tag `v1.2.3` will publish version `1.2.3` to NPM.
