"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-800">
            <span className="flex items-center gap-2">
              <span
                className={` w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary text-white"
                    : "bg-green-200 text-green-600"
                }`}>
                {openIndex === index ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
              {item.title}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
