export type ProjectItem = {
    name: string;
    imgUrl: string;
    tags: string[];
    link: string;
}

export const projectsData: ProjectItem[] = [
    {
        name: 'Terminal Website',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1683133556035-403d392ef900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://fkcodes.com',
    },
    {
        name: 'Developer Portfolio',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1683133556035-403d392ef900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['React', 'Tailwind', 'Vite'],
        link: 'https://thehackershideout.com',
    },
    {
        name: 'AI Nerf Gun',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1683133556035-403d392ef900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['Python', 'C++', 'Robotics'],
        link: 'https://youtu.be/A8eegxL82PI',
    },
]
