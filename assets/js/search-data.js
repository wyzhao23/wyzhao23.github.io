// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "The material here is presented to ensure timely dissemination of scholarly and technical work. Copyright and all rights therein are retained by authors or by other copyright holders. All persons using this information are expected to adhere to the terms and constraints by author’s copyright. These works may not be reposted without the explicit permission of the copyright holder.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Research code releases &amp; open source projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-bayesian-deep-learning",
      
        title: "Bayesian Deep Learning",
      
      description: "Deep Neural Networks (DNNs) are powerful tools capable of capturing intricate patterns in large datasets, but lack the ability to provide uncertainty estimation. To learn rich, hierarchical representations from data with proper interpretability and uncertainty estimation, efficient Bayesian deep learning gain considerable attention in a variety of real-world tasks, especially when uncertainty quantification is critical.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/deep-bayesian-learning/";
        
      },
    },{id: "post-private-information-retrieval",
      
        title: "Private Information Retrieval",
      
      description: "Private information retrieval (PIR) systems are motivated by the necessity to safeguard user privacy during information retrieval. In the canonical PIR framework, a user wishes to retrieve a message from N independent servers, each holding a complete set of K messages. The message’s identity must remain hidden from any individual server. This privacy requirement necessarily incurs higher download costs than a protocol without such a requirement, which requires effort to improve the code construction of PIR systems.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/weakly-pir/";
        
      },
    },{id: "post-ai-driven-dynamic-mmwave-networking",
      
        title: "AI-driven Dynamic mmWave Networking",
      
      description: "Integrated Access and Backhaul (IAB) is an emerging technique to enable cost-effective deployment of dense 5G networks that utilize emerging millimeter-wavelength (mmWave) spectrum. Existing heuristic-based network control/management frameworks are not well-suited for the increasing complexity and uncertainty introduced by mmWave IAB. Machine learning (ML) can help automate network control decisions, but its practical deployment faces new system-level challenges in 5G IAB, including accurate simulation-based training, resolving conflicting objectives from heterogeneous network slices, and efficiently collecting observations for run-time decision-making.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/mmwave-networking/";
        
      },
    },{id: "post-machine-learning-and-data-science",
      
        title: "Machine Learning and Data Science",
      
      description: "We studied the general area of machine learning and data science. A machine learning-based algorithm is proposed to classify customer reviews. A complex-valued gradient neural network (CVGNN) is proposed to solve the Moore-Penrose inverse of complex matrices. We also investigated fog computing in the Internet of Vehicles.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/machine-learning/";
        
      },
    },{id: "post-mmwave-beamforming",
      
        title: "mmWave Beamforming",
      
      description: "The short wave-length of mmwave signals facilitates exploiting large antenna arrays to achieve large array gains and combat large path-loss. However, the use of large antenna arrays along with narrow beams leads to a large overhead in beam training for obtaining channel state information, especially in dynamic environments.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/beamforming/";
        
      },
    },{id: "news-first-prize-winner-at-2019-mathematical-contest-in-modeling-trophy",
          title: 'First-prize winner at 2019 Mathematical Contest in Modeling! :trophy:',
          description: "",
          section: "News",},{id: "news-sun-qingyun-scholarship-from-ecen-seu",
          title: 'Sun Qingyun Scholarship from ECEN @ SEU.',
          description: "",
          section: "News",},{id: "news-graduation-from-seu-with-b-e-degree-conferred-goodbye-seu",
          title: 'Graduation from SEU with B.E. degree conferred. Goodbye, SEU! 🎓',
          description: "",
          section: "News",},{id: "news-graduation-from-ucsd-with-m-s-degree-conferred-goodbye-ucsd",
          title: 'Graduation from UCSD with M.S. degree conferred. Goodbye, UCSD! 🎓',
          description: "",
          section: "News",},{id: "news-pursuing-ph-d-degree-at-texas-a-amp-amp-m-university-with-prof-chao-tian-sparkles-smile",
          title: 'Pursuing Ph.D. degree at Texas A&amp;amp;amp;M University with Prof. Chao Tian! :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-our-paper-weakly-private-information-retrieval-from-heterogeneously-trusted-servers-is-accepted-by-isit-2024",
          title: 'Our paper “Weakly private information retrieval from heterogeneously trusted servers” is accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-from-deep-additive-kernel-learning-to-last-layer-bayesian-neural-networks-via-induced-prior-approximation-is-accepted-by-aistats-2025",
          title: 'Our paper “From deep additive kernel learning to last-layer Bayesian neural networks via...',
          description: "",
          section: "News",},{id: "projects-sample-project",
          title: 'Sample project',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%79%7A%68%61%6F@%74%61%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/warrenzha", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/wenyuan-zhao-73748b268", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/wyzhao030", "_blank");
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
