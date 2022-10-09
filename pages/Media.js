import Image from "next/image";
import getWindowDimensions from "../components/getWindowDimensions";

const YOUTUBE_API_KEY = "AIzaSyBv30YmAyi1PlelHzu4Ocf57ATUt5DwnLE";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=10&playlistId=PLGf9Hs-sXQjnnbRFgGklVgHhe7ZCjwHMS&key=${YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Media({ data }) {
  return (
    <>
      <div className="relative w-screen h-64 shadow-md">
        <div className="-z-10 brightness-75">
          <Image
            priority
            src={"/media-bg.jpg"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
          />
        </div>
        <div className="relative flex flex-col items-center h-full justify-center">
          <h1 className="font-sketch text-6xl text-white">Listen</h1>
        </div>
      </div>
      <div className="w-full flex overflow-x-hidden justify-center">
        <div className="md:grid md:grid-cols-3">
          {data.items.map(({ id, snippet = {} }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
            return (
              <div key={id}>
                <iframe
                  src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                  frameBorder="1"
                  allowFullScreen
                  title="YouTube Video"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
