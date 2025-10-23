// import {useState, useEffect} from 'react';
// import './YoutubeVideos.css'


// export const YoutubeVideos = () => {
//     const [youtubeVideos, setYoutubeVideos] = useState([]);
// useEffect(()=>{
//     const fetchVideos =aync() =>{
// try {
//     const response =await fetch (
//         "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBCRIVkq92ZWWXKFKESl6hTnMYcTzoIk2M"
//     );
//      const data = await response.json()
//      setYoutubeVideos(data?.items || []);
// } catch (error){
//     console.error("error fetching:", error);
// }
//     };

//     fetchVideos();
// }, []);
// }


//   console.log(youtubeVideos)
//  return (
//    <section className="youtubeVideosWrapper">
//      <div className="allVideosWrapper">
//        <div className="container">
//          <div className="row justify-content-center text-center">
//            <div className="col-12">
//              <div className="title-wrapper">
//                <br />
//                <h1>Latest Videos</h1>
//                <br />
//              </div>
//            </div>

//            {youtubeVideos?.map((singleVideo, i) => {
//              return (
//                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
//                  <div className="singleVideoWrapper">
//                    <div className="videoThumbnail">
//                      <a
//                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
//                        target="_blank"
//                        rel="noreferrer"
//                      >
//                        <img
//                          src={singleVideo.snippet.thumbnails.high.url}
//                          alt="thumbnails"
//                        />
//                      </a>
//                    </div>
//                    <div className="videoInfoWrapper">
//                      <div className="videoTitle">
//                        <a
//                          href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
//                          target="_blank"
//                          rel="noreferrer"
//                        >
//                          {singleVideo.snippet.title}
//                        </a>
//                      </div>
//                      <div className="videoDesc">
//                        {singleVideo.snippet.description}
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              );
//            })}
//          </div>
//        </div>
//      </div>
//    </section>
//  );
// }









// // API KEY: AIzaSyBCRIVkq92ZWWXKFKESl6hTnMYcTzoIk2M
// // Apple channel ID: UCE_M8A5yxnLfW0KghEeajjw







import { useState, useEffect } from "react";
import "./YoutubeVideos.css";

export const YoutubeVideos = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
const apikey = import.meta.env.VITE_API_KEY;  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=${apikey}`
        );
        const data = await response.json();
        setYoutubeVideos(data?.items || []);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchVideos();
  }, []);

  console.log(youtubeVideos);

  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {youtubeVideos?.map((singleVideo, i) => (
              <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a
                      href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
