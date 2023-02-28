/* eslint-disable react/no-unescaped-entities */

import { SunIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        {" "}
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when ChatGPT is thinking
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May ocassionally generate incorrect information
            </p>
            <p className="infoText">
              May ocasionally produce harmfulm instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world annd events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
