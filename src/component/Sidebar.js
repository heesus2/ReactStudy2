import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col w-64 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <Avatar className="h-12 w-12">
              <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-gray-600 dark:text-gray-200 ml-4 text-lg font-semibold">John Doe</span>
          </div>
        </div>
        <nav className="flex-grow mt-6">
          <Link
            className="flex items-center px-6 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            href="#"
          >
            <HomeIcon className="h-5 w-5" />
            <span className="mx-3">Overview</span>
          </Link>
          <Link
            className="flex items-center px-6 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            href="#"
          >
            <LineChartIcon className="h-5 w-5" />
            <span className="mx-3">Analytics</span>
          </Link>
          <Link
            className="flex items-center px-6 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            href="#"
          >
            <SettingsIcon className="h-5 w-5" />
            <span className="mx-3">Settings</span>
          </Link>
          <Link
            className="flex items-center px-6 py-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            href="#"
          >
            <HelpCircleIcon className="h-5 w-5" />
            <span className="mx-3">Help</span>
          </Link>
        </nav>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between p-6 bg-white border-b-4 border-indigo-500 dark:bg-gray-800 dark:border-indigo-600">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dashboard</h2>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-800" />
      </div>
    </div>
  )
}

function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
