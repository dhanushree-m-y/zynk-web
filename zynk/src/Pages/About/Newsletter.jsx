import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

// Dummy implementation of the Card components for demonstration.
// Replace these with your actual implementations or correct imports if they exist.
const Card = ({ children }) => <div className="card shadow-lg p-4 bg-white rounded">{children}</div>;
const CardHeader = ({ children }) => <div className="card-header font-bold text-xl mb-4">{children}</div>;
const CardTitle = ({ children }) => <h3 className="card-title text-lg">{children}</h3>;
const CardContent = ({ children }) => <div className="card-content">{children}</div>;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    try {
      await signupForNewsletter(email);
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setSubscriptionError('Error signing up for the newsletter. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const signupForNewsletter = async (email) => {
    // Simulate an API call for signing up.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Signed up with email:', email);
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="bg-primary-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Stay Updated with Zynk</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-primary-700 text-lg mb-4">
                  Subscribe to our newsletter to stay informed about the latest events, features, and community updates.
                </p>
                <p className="text-primary-500 font-medium">
                  {isSubscribed
                    ? 'Thank you for subscribing! Check your inbox for updates.'
                    : 'Be the first to know about our newest events and features.'}
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="flex items-center">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={16} className="text-primary-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white border border-primary-300 text-primary-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className={`bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md ml-2 transition-colors duration-300 ${
                      isSubscribing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubscribing ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    ) : (
                      <>
                        {isSubscribed ? (
                          <div className="flex items-center">
                            <Check size={16} className="mr-2" />
                            Subscribed
                          </div>
                        ) : (
                          'Subscribe'
                        )}
                      </>
                    )}
                  </button>
                </form>
                {subscriptionError && (
                  <p className="text-red-500 font-medium mt-4">{subscriptionError}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;
