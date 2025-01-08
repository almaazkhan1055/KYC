import { Link } from "react-router-dom";
import { usersList } from "../../data/data";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect } from "react";
import { useTheme } from "../../context/themeContext";

export default function UsersList() {
  const { isDarkMode } = useTheme();

  // useEffect(() => {
  //   fetch(`getallusers`);
  // }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 h-screen">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr
                  className={`
                ${isDarkMode ? "text-white" : "text-gray-900"}
                `}
                >
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    createdAt
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {usersList?.map((person) => (
                  <tr
                    key={person.email}
                    className={`
                ${isDarkMode ? "text-white" : "text-gray-900"}
                `}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">
                      <Link to={`${person.id}`} className="hover:underline">
                        {person.name}
                      </Link>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.createdAt}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.status[0]}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <MdDeleteOutline
                        color="orangered"
                        size={22}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
