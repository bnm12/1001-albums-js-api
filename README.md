# 1001-albums-js-api
A typescript typed JS api client for 1001 albums

## Installation

You can install the package using npm:

```bash
npm install app
```

## Usage

First, import the `ApiClient` from the package:

```typescript
import { ApiClient } from 'app'; // Assuming 'app' is the package name
```

You can then instantiate the client. By default, it connects to `https://1001albumsgenerator.com/api/v1`. You can optionally provide a different base URL:

```typescript
// Default base URL
const client = new ApiClient();

// Custom base URL
// const customClient = new ApiClient('https://your-api-domain.com/api/v1');
```

Here are examples of how to use the available methods. All methods return a `Promise<unknown>`. You'll need to inspect the response or refer to the API documentation for the specific structure of the data returned.

### Get Group Details

```typescript
async function fetchGroupDetails(groupSlug: string) {
  try {
    const groupData = await client.getGroup(groupSlug);
    console.log('Group Data:', groupData);
    // Example: Accessing a property (replace with actual property names)
    // if (groupData && typeof groupData === 'object' && 'name' in groupData) {
    //   console.log('Group Name:', (groupData as { name: string }).name);
    // }
  } catch (error) {
    console.error(`Error fetching group ${groupSlug}:`, error);
  }
}

// Example call
// fetchGroupDetails('some-group-slug');
```

### Get Album in Group

```typescript
async function fetchAlbumInGroup(groupSlug: string, albumUuid: string) {
  try {
    const albumData = await client.getAlbumInGroup(groupSlug, albumUuid);
    console.log('Album Data:', albumData);
  } catch (error) {
    console.error(`Error fetching album ${albumUuid} in group ${groupSlug}:`, error);
  }
}

// Example call
// fetchAlbumInGroup('some-group-slug', 'some-album-uuid');
```

### Get Project Details

```typescript
async function fetchProjectDetails(projectIdentifier: string) {
  try {
    const projectData = await client.getProject(projectIdentifier);
    console.log('Project Data:', projectData);
  } catch (error) {
    console.error(`Error fetching project ${projectIdentifier}:`, error);
  }
}

// Example call
// fetchProjectDetails('some-project-id');
```

### Get Album Stats

```typescript
async function fetchAlbumStats() {
  try {
    const stats = await client.getAlbumStats();
    console.log('Album Stats:', stats);
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
    const userStats = await client.getUserAlbumStats();
    console.log('User Album Stats:', userStats);
  } catch (error) {
    console.error('Error fetching user album stats:', error);
  }
}

// Example call
// fetchUserAlbumStats();
```
