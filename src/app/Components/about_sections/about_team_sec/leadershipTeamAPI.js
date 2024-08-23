

export default async function leadershipTeamAPI() {
    const response = await fetch('https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/directors_team');

    if (!response.ok) {
        throw new Error('An error occurred while fetching the data');
    }
    const Teamposts = await response.json();
    console.log(Teamposts);

  return (
    Teamposts
  )
}
