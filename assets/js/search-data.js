// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "🚧 This page is under construction. 🚧",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-end-of-an-era",
        
          title: "End of an era",
        
        description: "Career update: from CivicTech back to the private sector",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/back-to-google/";
          
        },
      },{id: "post-goodbye-google",
        
          title: "Goodbye Google",
        
        description: "In February 2022, I left Google for a career in CivicTech. Here is a snippet of my goodbye email, with a list of social good resources.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/goodbye-google/";
          
        },
      },{id: "post-from-big-tech-to-the-public-sector",
        
          title: "From Big Tech to the Public Sector",
        
        description: "How I decided on a career change",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/big-tech-to-public-sector/";
          
        },
      },{id: "post-okrs-what-why-and-how",
        
          title: "OKRs - what, why, and how",
        
        description: "Just because it&#39;s commonly used at prestigious tech companies doesn&#39;t mean it&#39;s always the right tool for the situation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/okrs-what-why-and-how/";
          
        },
      },{id: "post-on-math",
        
          title: "On Math",
        
        description: "A personal reflection on the American math curriculum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/on-math/";
          
        },
      },{id: "books-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mans_search_for_meaning/";
            },},{id: "books-outliers",
          title: 'Outliers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/outliers/";
            },},{id: "books-rich-girl-nation",
          title: 'Rich Girl Nation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/rich_girl_nation/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-a-botcoin-bonanza",
          title: 'A Botcoin Bonanza',
          description: "ME210: Introduction to Mechatronics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2014-03-22-me210/";
            },},{id: "projects-tetrisbot",
          title: 'TetrisBot',
          description: "CS224: Experimental Robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2014-09-18-tetrisbot/";
            },},{id: "projects-the-wandering-poet",
          title: 'The Wandering Poet',
          description: "Translating the song 诗人的旅途",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-07-01-wandering-poet/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%64%79@%6D%69%6E%64%79%68%75%61%6E%67.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mindyh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mindyhng", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
