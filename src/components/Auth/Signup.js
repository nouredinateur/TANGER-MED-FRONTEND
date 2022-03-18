import { useState } from "react"
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate=useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [password, setPassword] = useState('');

    let formData = {
      name: name,
      email: email,
      nationality: nationality,
      password: password
    }


    const formSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:1337/api/v1/user/signup", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        navigate('/login')
      } catch (error) {
        console.log(error)
      }

    }

    return (
        <>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={formSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                
                <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Full Name"
                      onInput={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onInput={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Nationality
                    </label>
                    <input
                      id="nationality"
                      name="nationality"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Nationality"
                      onInput={(e) => setNationality(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Organisation"
                      onInput={(e) => setOrganisation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onInput={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
    
        
    
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    </span>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )
}