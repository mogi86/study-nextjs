async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!res.ok) {
    // 最も近い`error.js`エラーバウンダリが有効になる。
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  console.log("data:", data);

  return (
    <>
      <h1>Hello, Data Fetch Page!</h1>
      <div>{data.body}</div>
    </>
  );
}
