import { Client } from "twitter-api-sdk";

async function getData(username: string) {
  try {
    console.log('Bearer Token:', process.env.TWITTER_BEARER_TOKEN);
    if (!process.env.TWITTER_BEARER_TOKEN) {
      throw new Error('Twitter Bearer Token is not configured');
    }
    
    const client = new Client(process.env.TWITTER_BEARER_TOKEN);
    const response = await client.users.findUserByUsername(username);
    console.log("response:", JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  try {
    const username = (await params).username
    const data = await getData(username);

    return (
      <>
        <h1>X ユーザー名 {username}さんのデータ</h1>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </>
    );
  } catch (error) {
    return (
      <>
        <h1>エラーが発生しました</h1>
        <p>{error instanceof Error ? error.message : 'Unknown error occurred'}</p>
      </>
    );
  }
} 