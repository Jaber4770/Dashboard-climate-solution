import React, { useState } from 'react';
import { ChevronDown, Mail, Phone } from 'lucide-react';

const faqData = [
    {
        id: 1,
        question: "How do I register a new user?",
        answer: "Go to the Users page, click on 'Add User', and fill in the required details to create a new account."
    },
    {
        id: 2,
        question: "Can I integrate external sensors?",
        answer: "Yes, navigate to the Integrations tab in Settings and follow the instructions for third-party sensor setup."
    },
    {
        id: 3,
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' at the login screen and follow the instructions sent to your registered email."
    },
    {
        id: 4,
        question: "How do I view system activity logs?",
        answer: "Go to the Dashboard > Activity tab to see all recent activity logs in your system."
    },
    {
        id: 5,
        question: "Can I set custom alerts?",
        answer: "Yes, under the Alerts page you can define custom rules and thresholds for notifications."
    }
];

const Help = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
            <div className="flex gap-5">
                {/* FAQ Section */}
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        {faqData.map((faq) => (
                            <div
                                key={faq.id}
                                className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <div className="flex justify-between items-center">
                                    <p className="font-medium">{faq.question}</p>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>
                                {openFAQ === faq.id && (
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support Section */}
                <div className="w-1/2 bg-white shadow rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                placeholder="Your Message"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-6 flex flex-col gap-2 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5" /> support@smartsystem.com
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5" /> +1 (800) 555-1234
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Help;
