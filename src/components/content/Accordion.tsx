import React from "react";
import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionProps {
  data: {
    title: string;
    what: string;
    whata: string;
    why: string;
    whya: string;
    how: string;
    howa: string;
    github: string;
  }[];
}

export function Accordion({ data }: AccordionProps) {
  return (
    <div className="w-full">
      <BaseAccordion type="single" collapsible>
        {data.map((item, i) => (
          <AccordionItem key={`item-${i}`} value={`item-${i}`}>
            <AccordionTrigger className="text-4xl font-bold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-2xl p-0">
              {item.what}
            </AccordionContent>
            <AccordionContent>{item.whata}</AccordionContent>
            <AccordionContent className="text-2xl p-0">
              {item.why}
            </AccordionContent>
            <AccordionContent>{item.whya}</AccordionContent>
            <AccordionContent className="text-2xl p-0">
              {item.how}
            </AccordionContent>
            <AccordionContent>{item.howa}</AccordionContent>
            <AccordionContent>
              <a
                href={item.github}
                class="w-full sm:w-auto bg-[#FAFAFA] text-[#1E1E1E] px-6 md:px-[45px] py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 rounded-[14px] text-sm md:text-base"
              >
                <box-icon name="github" type="logo" size="sm md:md"></box-icon>
                <span class="font-semibold">Github Repo</span>
              </a>
            </AccordionContent>
          </AccordionItem>
        ))}
      </BaseAccordion>
    </div>
  );
}
