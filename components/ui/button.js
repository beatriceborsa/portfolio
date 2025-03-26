export function Button({ children, ...props }) {
  return <button className='px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700' {...props}>{children}</button>;
}