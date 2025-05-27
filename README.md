# Reddit 1001 Albums API Client

A TypeScript client for the [1001 Albums Generator API](https://1001albumsgenerator.com/api/v1/docs), which provides data about albums featured on the "1001 Albums You Must Hear Before You Die" list. This client is fully typed and provides an easy way to interact with the API.

## Features

*   **Fully Typed:** Methods and responses are typed with TypeScript for better developer experience and safety.
*   **All Endpoints Supported:** Implements all available API endpoints.
*   **UMD Build:** Includes a UMD build in the `dist` folder, suitable for CDN usage.
*   **Tested:** Comes with a comprehensive test suite using Jest and Nock.

## Installation

To install the client, use npm:

```bash
npm install reddit-albums-api-client
```

## Usage

### NPM / ESM (Node.js, modern browsers)

```typescript
import { RedditAlbumsClient } from 'reddit-albums-api-client';

// Initialize the client (optionally provide a custom baseURL)
const client = new RedditAlbumsClient();

async function fetchRandomAlbum() {
  try {
    const album = await client.getRandomAlbum();
    console.log('Random Album:', album);
    // Example: Accessing album properties
    // console.log('Artist:', album.Artist);
    // console.log('Album Title:', album.Album);
  } catch (error) {
    console.error("Error fetching random album:", error);
  }
}

async function fetchAlbumsByYear(year: number) {
  try {
    const albums = await client.getAlbumByYear(year);
    console.log(`Albums from ${year}:`, albums);
  } catch (error) {
    console.error(`Error fetching albums from ${year}:`, error);
  }
}

fetchRandomAlbum();
fetchAlbumsByYear(1973); // Example year
```

### UMD / CDN (Browsers)

To use the client directly in a browser via a CDN:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Reddit 1001 Albums API Client Test</title>
  <!-- Replace with the actual CDN link once the package is published -->
  <!-- Example using jsDelivr (assuming version 0.1.0): -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/reddit-albums-api-client@0.1.0/dist/client.umd.js"></script> -->
  <!-- For the latest version: -->
  <script src="https://cdn.jsdelivr.net/npm/reddit-albums-api-client@latest/dist/client.umd.js"></script>
</head>
<body>
  <script>
    // The client will be available on the window object.
    // The global name is derived from the 'name' in package.json, typically PascalCased.
    // For "reddit-albums-api-client", it might be RedditAlbumsApiClient.
    // The class itself is RedditAlbumsClient.
    // So, it would be RedditAlbumsApiClient.RedditAlbumsClient
    // This needs to be verified after the first UMD build.
    // For now, let's assume it's RedditAlbumsApiClient if the library name in tsconfig for UMD is set,
    // or it might attach to window.RedditAlbumsClient directly.
    // Assuming the library name is 'RedditAlbumsApiClient' for UMD build (can be configured in tsconfig or build tool)
    
    // Check if the UMD module loaded correctly
    if (window.RedditAlbumsApiClient && window.RedditAlbumsApiClient.RedditAlbumsClient) {
      const client = new window.RedditAlbumsApiClient.RedditAlbumsClient();

      client.getRandomAlbum()
        .then(album => {
          console.log('Random Album (CDN):', album);
        })
        .catch(error => {
          console.error("Error fetching random album (CDN):", error);
        });

      client.getAlbumByGenre('Rock')
        .then(albums => {
          console.log('Rock Albums (CDN):', albums);
        })
        .catch(error => {
          console.error("Error fetching Rock albums (CDN):", error);
        });
    } else {
      console.error('RedditAlbumsApiClient not found. Check UMD build and script path.');
    }
  </script>
</body>
</html>
```
**Note:** The UMD global variable name is typically generated from the `name` in `package.json`. For `reddit-albums-api-client`, this would likely be `RedditAlbumsApiClient`. The exported class is `RedditAlbumsClient`. So you'd access it via `new RedditAlbumsApiClient.RedditAlbumsClient()`. This should be verified after publishing or by checking the generated UMD file (`dist/client.umd.js`). The `tsconfig.json` sets `module: "UMD"`, but doesn't specify a `umdNamedDefineLibrary`.

## API Client Methods

The client provides the following methods:

*   `getRandomAlbum(): Promise<Album>`
    *   Fetches a random album from the collection.
*   `getAlbumByYear(year: number): Promise<Album[]>`
    *   Fetches all albums released in the specified year.
*   `getAlbumByGenre(genre: string): Promise<Album[]>`
    *   Fetches all albums matching the specified primary or secondary genre.
*   `searchAlbums(query: string): Promise<Album[]>`
    *   Searches for albums by artist or album title.

The `Album` and `Track` types are exported from the package for your convenience.

## Development

To set up the project for development:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/reddit-albums-api-client.git # Replace with actual repo URL
    cd reddit-albums-api-client
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Build the project (compile TypeScript):**
    ```bash
    npm run build
    ```
    This will output the JavaScript files to the `dist` directory.
4.  **Run tests:**
    ```bash
    npm test
    ```
    This will run the Jest test suite and generate coverage reports.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details. (Assuming a LICENSE file will be added - standard practice).
