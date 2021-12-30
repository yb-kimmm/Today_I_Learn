import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabUI = ({ prop }) => {
  const boardList = prop;

  return (
    <div className="max-w-md px-2 py-16 sm:px-0 w-72">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-sky-900 rounded-xl">
          {boardList.map((board) => (
            <Tab
              key={board._id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-sky-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-sky-700 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-sky-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {board.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {boardList.map((board, idx) => (
            <Tab.Panel
              key={board.content[idx]._id}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-sky-700 ring-white ring-opacity-60"
              )}
            >
              <ul>
                <li
                  key={board.content[idx]._id}
                  className="relative p-3 rounded-md hover:bg-coolGray-100"
                >
                  <h3 className="text-sm font-medium leading-5">
                    {board.content[idx].title}
                  </h3>

                  <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                    <li>{board.content[idx].createdAt}</li>
                    <li>&middot;</li>
                    <li>{board.content[idx].thumbupCount} thumbupCount</li>
                  </ul>

                  <button
                    className={classNames(
                      "absolute inset-0 rounded-md",
                      "focus:z-10 focus:outline-none focus:ring-2 ring-sky-700"
                    )}
                  />
                </li>
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabUI;
