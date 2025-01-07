import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

const DropDown = ({ text }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2">
          {text ? text : ""}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-[22px] w-60 rounded-md bg-[#24303F] shadow-lg"
      >
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 font-semibold text-lg"
            >
              <PencilSquareIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              My Profile
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-gray-300 font-semibold text-lg"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400"
              />
              My Contacts
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-gray-300 font-semibold text-lg"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Acoount Settings
            </a>
          </MenuItem>
        </div>
        <div className="py-1 border-t-[1px] border-gray-700">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-gray-300 font-semibold text-lg"
            >
              <TrashIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400 group-data-[focus]:text-gray-500"
              />
              Log Out
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default DropDown;
