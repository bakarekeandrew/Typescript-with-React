import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchingMental: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [url, setUrl] = useState("");
  const [inputUrl, setInputUrl] = useState(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  const handleFetch = () => {
    if (inputUrl.trim()) {
      setUrl(inputUrl); 
    }
  };

  return (
    <>
      <div>Post Fetcher</div>
      <p>Enter url to fetch and display post</p>

      <div className="border border-gray-400 rounded-2xl px-5 py-5">
        <h2>Fetch Posts</h2>
        <div className="gap-2 flex">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-80 border-2 rounded-2xl px-2"
          />
          <button
            onClick={handleFetch}
            className="bg-black text-white px-3 py-2 rounded-2xl"
          >
            Fetch
          </button>
        </div>
      </div>
 

      {Array.isArray(data) &&
        data.map((item) => (
        <div className="border border-gray-400 px-4 rounded-2xl mb-3">
          <div>
              <p key={item.id} className="font-bold">{item.title}</p>
              <p>Post id:{item.id}|{item.userId}</p>
              <p>{item.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FetchingMental;
