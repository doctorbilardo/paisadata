/* eslint-disable @next/next/no-img-element */
"use client";
import { Header } from "@/components/header";
import { trackPostHogClientEvents } from "@/tracking/postHog/trackPostHogClientEvents";
import { Survey } from "posthog-js";
import { usePostHog } from "posthog-js/react";
import { SetStateAction, useEffect, useState } from "react";

export default function Survey() {
  const posthog = usePostHog();
  const [survey, setSurvey] = useState<Survey>();
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleTextAreaChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTextAreaValue(event.target.value);
  };

  useEffect(() => {
    posthog.getActiveMatchingSurveys((surveys) => {
      const myCustomSurvey = surveys.filter(
        (survey) => survey.type === "popover"
      )[0];
      if (myCustomSurvey) {
        setSurvey(myCustomSurvey);

        trackPostHogClientEvents("surveyNPSshown", {
          $survey_id: myCustomSurvey.id,
          $survey_name: myCustomSurvey.name,
        });
      }
    });
  }, [posthog]);

  const submit = () => {
    trackPostHogClientEvents("surveyNPS_sent", {
      $survey_id: survey?.id ?? "",
      $survey_name: survey?.name ?? "",
      $survey_response: textAreaValue,
    });

    setTextAreaValue("");
  };

  return (
    <main className={`flex min-h-screen flex-col items-center p-2 `}>
      <Header />

      <section className="container h-64 max-w-5xl px-8 my-4 ">
        <div className="relative flex  flex-col text-center ">
          <h2
            className={`text-8xl sm:text-center font-bold text-yellow-400 mb-3  `}
          >
            Surveys
          </h2>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colorsborder-gray-300 dark:border-lime-500 dark:bg-neutral-800/30">
          <h3 className={`mb-4 text-3xl font-semibold text-center sm:mb-0`}>
            ¿Qué es?{" "}
          </h3>
          <p className={`m-0  text-lg   text-white sm:text-center`}>
            Los formularios facilitan la recopilación rápida de comentarios
            cualitativos
          </p>
        </div>

        <div>
          <h2
            className={`text-4xl my-6  sm:text-center font-bold text-yellow-400 mb-6 `}
          >
            Encuesta de Satisfacción
          </h2>
          {survey && (
            <div className="p-4 border border-gray-300 rounded-lg">
              <h2 className="text-xl font-bold mb-2">{survey.name}</h2>
              <h4 className="text-base mb-2">{survey.questions[0].question}</h4>
              <textarea
                className="text-black w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                value={textAreaValue}
                onChange={handleTextAreaChange}
              ></textarea>
              <br />
              <button
                className="px-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
