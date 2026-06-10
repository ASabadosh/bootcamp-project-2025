import React from 'react';
import type { Portfolio } from "../database/portfolioSchema";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPreview(props: Portfolio) {
  return (
    <div className="flex flex-col bg-[#1a1a1a] rounded-2xl w-[450px] overflow-hidden">
      <div className  = "flex flex-row items-center h-[450px]">
      <Image className ="" src= {props.image} alt = {props.image_alt} width="450" height = "450"/>
      </div>
      <div className="p-5">
      <p className="text-base font-semibold  text-white">
            {props.project_name}
          </p>
      <p className="text-[14px] leading-[1.75] text-white/55 max-w-135">
            {props.project_description}
      </p>
      <div className="flex flex-row gap-1.5 mt-5">
        {props.skills.map((skill: string) => (
          <div key={skill} className="bg-[#1e3a5f] rounded-full">
            <p className="text-[11px] font-medium text-[#85B7EB] px-[9px] py-[3px]" > {skill} </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}