// Profile Configuration
// This file contains all customizable profile data
// To create a new profile, simply update the values in this object

const profileConfig = {
    // Personal Information
    name: "Brian Mwenda",
    title: "Software Developer",
    subtitle: "Open Source Contributor",
    location: "",
    email: "bmwenda455@gmail.com",
    phone: "", // Removed as requested
    
    // Education
    education: {
        institution: "Software Development",
        degree: "Software Development",
        status: "Professional"
    },
    
    // Current Work/Experience
    currentWork: {
        show: false, // Set to true if you want to show current work
        company: "",
        description: "",
        link: ""
    },
    
    // Skills and Technologies
    skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Go",
        "Node.js",
        "React",
        "Kubernetes",
        "Docker",
        "AWS",
        "Azure",
        "GCP",
        "CI/CD",
        "Microservices",
        "REST APIs",
        "Git/GitHub"
    ],
    
    // Experience (years calculation)
    experience: {
        startDate: "January 1 2021 00:00", // Format: "Month Day Year HH:MM"
        show: true
    },
    
    // Interests/Hobbies
    interests: [
        "Open Source Contributions",
        "Kubernetes Ecosystem",
        "Cloud Computing",
        "Software Development",
        "Container Technologies",
        "Full-Stack Development",
        "Cloud-Native Applications"
    ],
    
    // Social Media Links
    social: {
        github: "https://github.com/Brianmwenda455",
        linkedin: "", // Add if available
        medium: "", // Add if available
        twitter: "", // Add if available
        email: "bmwenda455@gmail.com"
    },
    
    // Open Source Contributions
    openSource: {
        highlight: true,
        description: "Active contributor to Kubernetes and cloud-native projects. Passionate about building scalable software solutions and contributing to open source projects that power modern cloud infrastructure.",
        projects: [
            {
                name: "test-infra",
                description: "Contributing to Kubernetes test infrastructure - helping maintain and improve testing frameworks for Kubernetes projects",
                link: "https://github.com/Brianmwenda455/test-infra"
            },
            {
                name: "kubeflow",
                description: "Working on Kubeflow - Machine Learning Toolkit for Kubernetes, contributing to ML workloads on cloud-native infrastructure",
                link: "https://github.com/Brianmwenda455/kubeflow"
            },
            {
                name: "external-dns",
                description: "Contributing to External DNS - configuring external DNS servers dynamically from Kubernetes resources",
                link: "https://github.com/Brianmwenda455/external-dns"
            }
        ]
    },
    
    // Typed.js Terminal Messages
    terminal: {
        skillSetQuestion: "Skill Set?",
        experienceQuestion: "Experience?",
        interestsQuestion: "My Interests?",
        coolStuffQuestion: "Open Source Contributions?"
    },
    
    // SEO Meta Tags
    seo: {
        description: "Brian Mwenda, Software Developer specializing in Cloud Computing and Kubernetes. Building scalable software solutions and contributing to open source projects in the Kubernetes ecosystem.",
        keywords: "Brian Mwenda, Software Developer, Kubernetes, Docker, AWS, Azure, GCP, JavaScript, TypeScript, Python, Go, Cloud Computing, Open Source",
        author: "Brian Mwenda"
    },
    
    // Additional Info
    additionalInfo: "Passionate Software Developer with expertise in cloud computing, Kubernetes, and full-stack development. Committed to building scalable software solutions and contributing to open source projects. Active contributor to Kubernetes ecosystem projects."
};

