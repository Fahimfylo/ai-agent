"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AiAssistantsList from "@/services/AiAssistantsList";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Image from "next/image";
import React, { useState } from "react";

export type ASSISTANT = {
  id: number;
  name: string;
  title: string;
  image: string;
  instruction: string;
  userInstruction: string;
  sampleQuestions: string[];
};

function AiAssistants() {
  const [selectedAssistant, setSelectedAssistant] = useState<ASSISTANT[]>([]);

  const onSelect = (assistant: ASSISTANT) => {
    const item = selectedAssistant.find(
      (item: ASSISTANT) => item.id == assistant.id
    );
    if (item) {
      setSelectedAssistant(
        selectedAssistant.filter((item: ASSISTANT) => item.id !== assistant.id)
      );
      return;
    }
    setSelectedAssistant((prev) => [...prev, assistant]);
  };

  const IsAssistantSelected = (assistant: ASSISTANT) => {
    const item = selectedAssistant.find(
      (item: ASSISTANT) => item.id == assistant.id
    );
    return item ? true : false;
  };

  return (
    <div className="px-10 mt-20 md:px-28 lg:px-36 xl:px-48">
      <div className="flex justify-between items-center">
        <div>
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-bold">Welcome to Zenverse🤖</h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p
              className="
          text-xl mt-2"
            >
              Choose your AI companion to simplify your tasks — all within
              Zenverse 🚀
            </p>
          </BlurFade>
        </div>
        <RainbowButton disabled={selectedAssistant.length==0} className="cursor-pointer">Continue</RainbowButton>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {AiAssistantsList.map((assistant, idx) => (
          <BlurFade delay={0.25 * 2 * 0.5} inView key={idx}>
            <div
              className="hover:border cursor-pointer p-3 rounded-xl hover:scale-105 transition-all ease-in-out relative
          "
              onClick={() => onSelect(assistant)}
              key={assistant.id}
            >
              <Checkbox
                className="absolute m-2 cursor-pointer"
                checked={IsAssistantSelected(assistant)}
              />
              <Image
                src={assistant.image}
                alt={assistant.title}
                width={600}
                height={600}
                className="rounded-xl w-full h-[250px] object-cover"
              />
              <h1 className="text-center font-bold text-lg">
                {assistant.name}
              </h1>
              <h1 className="text-center text-gray-600 dark:text-gray-300">
                {assistant.title}
              </h1>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default AiAssistants;
