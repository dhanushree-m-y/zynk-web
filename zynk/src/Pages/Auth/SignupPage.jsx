import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Code, Rocket, BrainCircuit } from 'lucide-react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-4 h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center pr-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join the Future of Tech Events
          </h1>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-purple-800/30 p-6 rounded-xl">
              <Code className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-white font-semibold mb-2">Hackathons</h3>
              <p className="text-purple-200">Join coding competitions and win prizes</p>
            </div>
            
            <div className="bg-purple-800/30 p-6 rounded-xl">
              <BrainCircuit className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-white font-semibold mb-2">AI & Tech Events</h3>
              <p className="text-purple-200">Access cutting-edge tech conferences</p>
            </div>
            
            <div className="bg-purple-800/30 p-6 rounded-xl">
              <User className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p className="text-purple-200">Connect with tech enthusiasts</p>
            </div>
            
            <div className="bg-purple-800/30 p-6 rounded-xl">
              <Rocket className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-white font-semibold mb-2">Growth</h3>
              <p className="text-purple-200">Accelerate your tech career</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-purple-600/20 rounded-xl mb-4">
                <span className="text-2xl font-bold text-white">Zynk</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-purple-200 mt-2">Start your tech journey with Zynk</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-purple-300" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-3 py-3 bg-white/10 border border-purple-400/20 rounded-lg 
                           text-white placeholder-purple-300 focus:outline-none focus:ring-2 
                           focus:ring-purple-400 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="h-5 w-5 text-purple-300" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-3 py-3 bg-white/10 border border-purple-400/20 rounded-lg 
                           text-white placeholder-purple-300 focus:outline-none focus:ring-2 
                           focus:ring-purple-400 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-purple-300" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-purple-400/20 
                           rounded-lg text-white placeholder-purple-300 focus:outline-none 
                           focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-purple-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-purple-300" />
                  )}
                </button>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-purple-400/20 bg-white/10 text-purple-600 
                             focus:ring-purple-500 focus:ring-offset-0"
                  />
                </div>
                <label className="ml-2 text-sm text-purple-200">
                  I agree to the{' '}
                  <a href="/terms" className="text-white hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-white hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 
                         text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                <span>Create Account</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-center text-purple-200">
                Already have an account?{' '}
                <a href="/login" className="text-white hover:underline font-medium">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;