import React from "react";

const SearchPanel = () => {
  return (
    <>
      <div className="w-full relative px-4 mb-3 mt-4">
        <div className="w-96 h-20 mx-auto">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="w-full rounded-2xl bg-gray-200 text-medium-light  py-4 pl-[52px] pr-4"
                placeholder="Поиск"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
