export function Button({ children, ...props }) {
  return <button  className="px-5 py-2.5 bg-pink-500 text-white rounded-xl hover:bg-pink-600 dark:bg-pink-400 dark:hover:bg-pink-500 shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300" {...props}>{children}</button>;
}