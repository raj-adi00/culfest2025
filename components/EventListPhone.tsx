import { mockData } from "@/utils/mockdata";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface MobileEventListProps {
  isExpanded: boolean;
//   onEventSelect: (eventId: string) => void;
}

export default function EventListPhone({ isExpanded }: MobileEventListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  // Reset category when main list is collapsed
  useEffect(() => {
    if (!isExpanded) {
      setSelectedCategory(null);
    }
  }, [isExpanded]);

  const categories = Array.from(
    new Set(mockData.map((event) => event.category))
  );

  const filteredEvents = selectedCategory
    ? mockData.filter((event) => event.category === selectedCategory)
    : [];

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`);
    // onEventSelect(eventId);
    setSelectedCategory(null);
  };

  return (
    <div className={`mt-1 overflow-hidden transition-all duration-500 ease-in-out ${
      isExpanded ? 'max-h-[500px] scale-100 opacity-100' : 'max-h-0 scale-95 opacity-0'
    }`}>
      <div className="space-y-1 pl-4">
        {categories.map((category) => (
          <div key={category}>
            <button
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className="flex w-full items-center justify-between rounded-lg p-2 text-left text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
              <span className="text-sm">{category}</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  {mockData.filter((event) => event.category === category).length}
                </span>
                <svg
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    selectedCategory === category ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>

            {/* Events for selected category with improved transitions */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                selectedCategory === category
                  ? 'max-h-[500px] scale-100 opacity-100'
                  : 'max-h-0 scale-90 opacity-0'
              }`}
              style={{
                transitionDelay: selectedCategory === category ? '150ms' : '0ms'
              }}
            >
              <div className="space-y-1 pl-4">
                {filteredEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => handleEventClick(event.id)}
                    className="flex w-full items-center justify-between rounded-lg p-2 text-left text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                  >
                    <span className="text-sm">{event.eventname}</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}