export interface Apod {
  title: string;
  date: string;
  url: string;
  explanation: string;
}

const apiKey = process.env.NASA_API_KEY;
const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export async function getData(count: number): Promise<Apod[]> {
  const url = `${endpoint}&count=${count}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }

  const data = await response.json();
  return data;
}
