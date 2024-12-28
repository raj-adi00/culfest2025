import { mockData } from "@/utils/mockdata";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface SlidingEventMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SlidingEventMenu({ isOpen, onClose }: SlidingEventMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  // Reset category when menu is closed
  useEffect(() => {
    if (!isOpen) {
      setSelectedCategory(null);
    }
  }, [isOpen]);

  const categories = Array.from(
    new Set(mockData.map((event) => event.category))
  );

  const filteredEvents = selectedCategory
    ? mockData.filter((event) => event.category === selectedCategory)
    : [];

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black opacity-80"
          onClick={onClose}
        />
      )}

      {/* Sliding menu */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-80 transform bg-black p-4 text-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Main container with hidden scrollbar */}
        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {!selectedCategory ? (
            // Categories view
            <div>
              <p className="mb-3 text-sm font-medium">Event Categories</p>
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="flex items-center justify-between rounded-lg bg-gray-900 p-3 text-left transition-colors hover:bg-gray-800"
                  >
                    <div>
                      <h2 className="text-base font-medium">{category}</h2>
                      <p className="mt-1 text-xs text-gray-400">
                        {mockData.filter((event) => event.category === category).length} events
                      </p>
                    </div>
                    <svg
                      className="h-4 w-4 text-gray-400"
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
          ) : (
            // Events list view
            <div>
              <div className="mb-3 flex items-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mr-2 text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                {filteredEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => handleEventClick(event.id)}
                    className="flex items-center justify-between rounded-lg bg-gray-900 p-3 text-left transition-colors hover:bg-gray-800"
                  >
                    <div>
                      <h2 className="text-base font-medium">{event.eventname}</h2>
                      <p className="mt-1 text-xs text-gray-400">
                        Category: {event.category}
                      </p>
                    </div>
                    <svg
                      className="h-4 w-4 text-gray-400"
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
          )}
        </div>
      </div>
    </>
  );
}