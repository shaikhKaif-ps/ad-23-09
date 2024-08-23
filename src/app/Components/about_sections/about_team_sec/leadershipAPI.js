

export default async function leadershipAPI() {
    const response = await fetch('https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/leadership_team');

    if (!response.ok) {
        throw new Error('An error occurred while fetching the data');
    }
    const posts = await response.json();
    console.log(posts);

  return (
    posts
  )
}
