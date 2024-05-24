export default async function getServers() {
  const response = await fetch("https://api.turkb.us/v2/server", {
    next: { revalidate: 35 },
  });
  if (!response.ok) {
    return false;
  }
  return await response.json();
}
