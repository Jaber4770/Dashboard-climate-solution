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
        },
        {
            id: 4,
            name: 'Emma Watson',
            role: 'UI/UX Designer',
            email: 'emma@example.com',
            phone: '+112233445',
            linkedin: 'https://linkedin.com/in/emma',
            avatar: 'https://i.pravatar.cc/150?img=4'
        },
        {
            id: 5,
            name: 'David Kim',
            role: 'DevOps Engineer',
            email: 'david@example.com',
            phone: '+223344556',
            linkedin: 'https://linkedin.com/in/david',
            avatar: 'https://i.pravatar.cc/150?img=5'
        },
        {
            id: 6,
            name: 'Sophia Brown',
            role: 'QA Engineer',
            email: 'sophia@example.com',
            phone: '+334455667',
            linkedin: 'https://linkedin.com/in/sophia',
            avatar: 'https://i.pravatar.cc/150?img=6'
        },
        {
            id: 7,
            name: 'James Wilson',
            role: 'Data Scientist',
            email: 'james@example.com',
            phone: '+445566778',
            linkedin: 'https://linkedin.com/in/james',
            avatar: 'https://i.pravatar.cc/150?img=7'
        },
        {
            id: 8,
            name: 'Olivia Martinez',
            role: 'Business Analyst',
            email: 'olivia@example.com',
            phone: '+556677889',
            linkedin: 'https://linkedin.com/in/olivia',
            avatar: 'https://i.pravatar.cc/150?img=8'
        },
        {
            id: 9,
            name: 'Daniel Roberts',
            role: 'Security Specialist',
            email: 'daniel@example.com',
            phone: '+667788990',
            linkedin: 'https://linkedin.com/in/daniel',
            avatar: 'https://i.pravatar.cc/150?img=9'
        },
        {
            id: 10,
            name: 'Lily Evans',
            role: 'Content Strategist',
            email: 'lily@example.com',
            phone: '+778899001',
            linkedin: 'https://linkedin.com/in/lily',
            avatar: 'https://i.pravatar.cc/150?img=10'
        }
    ];


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
