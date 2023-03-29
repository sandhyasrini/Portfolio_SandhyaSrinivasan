export async function getMediumStories() {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sandhyasrinivasan.1502'
    );
    return  response.json();
  } catch (error) {
    return 'error';
  }
}


