import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Team = () => {
    const members = [
        {
            id: 1,
            name: 'Jack Sargey',
            role: 'Project Manager',
            email: 'jack@example.com',
            phone: '+123456789',
            linkedin: 'https://linkedin.com/in/jack',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
            id: 2,
            name: 'Sarah Lee',
            role: 'Frontend Developer',
            email: 'sarah@example.com',
            phone: '+987654321',
            linkedin: 'https://linkedin.com/in/sarah',
            avatar: 'https://i.pravatar.cc/150?img=2'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            role: 'Backend Developer',
            email: 'mike@example.com',
            phone: '+192837465',
            linkedin: 'https://linkedin.com/in/mike',
            avatar: 'https://i.pravatar.cc/150?img=3'
        }
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                        <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-gray-500">{member.role}</p>
                        <div className="flex gap-4 mt-4">
                            <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href={`tel:${member.phone}`} className="text-green-600 hover:text-green-800">
                                <Phone className="w-5 h-5" />
                            </a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
