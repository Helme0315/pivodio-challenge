import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useTransition } from "@remix-run/react";
import { useRef, useState } from "react";
import VideoRecorder from "../components/VideoRecorder";
import AudioRecorder from "../components/AudioRecorder";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesUrl },
];
  
export default function Index() {
  let [recordOption, setRecordOption] = useState("video");

	const toggleRecordOption = (type: string) => {
		return () => {
			setRecordOption(type);
		};
	};

  return (
    <div>
      <h1>Media Recorder</h1>

      <div className="button-flex">
			<button onClick={toggleRecordOption("video")}>Record Video</button>
			<button onClick={toggleRecordOption("audio")}>Record Audio</button>
		</div>
		<div>
			{recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
		</div>
    </div>
  );
}
