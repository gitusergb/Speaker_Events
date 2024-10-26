const speakersData = [
    {
      "speaker_name": "John Doe",
      "title": "Chief Marketing Office",
      "company": "Specbee",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Marketing Officer",
      "company": "Acme Corp",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Engagement Officer",
      "company": "Acquia",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Technical Developer",
      "company": "Pantheon",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Marketing Officer",
      "company": "Specbee",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },{
      "speaker_name": "John Doe",
      "title": "Chief Marketing Office",
      "company": "Specbee",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Marketing Officer",
      "company": "Acme Corp",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Engagement Officer",
      "company": "Acquia",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    },
    {
      "speaker_name": "John Doe",
      "title": "Chief Technical Developer",
      "company": "Pantheon",
      "social_links": ["https://github.com/",
        "https://www.linkedin.com/",
        "https://twitter.com/"
      ],
      "image": "https://dummyimage.com/150x150/000/fff"
    }
    ];
    
    const speakersContainer = document.querySelector('.slider');
    const popover = document.getElementById('popover-speaker');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;
    const visibleSpeakers = 4;

    const showSpeakers=()=> {
      speakersContainer.innerHTML = '';
      
      for (let i = 0; i < visibleSpeakers; i++) {
        const speakerIndex = (currentIndex + i) % speakersData.length;
        const speaker = speakersData[speakerIndex];
        
        const speakerCard = document.createElement('div');
        speakerCard.classList.add('speaker-card');
        
        const img = document.createElement('img');
        img.src = speaker.image;
        img.alt = `Portrait of ${speaker.speaker_name}`;
        img.width = 100;
        img.height = 100;
        
        const name = document.createElement('h2');
        name.textContent = speaker.speaker_name;
        
        const title = document.createElement('h4');
        title.textContent = speaker.title;
        
        const company = document.createElement('p');
        company.textContent = speaker.company;
        
        speakerCard.appendChild(img);
        speakerCard.appendChild(name);
        speakerCard.appendChild(title);
        speakerCard.appendChild(company);
        
        speakerCard.addEventListener('click',() => showSpeakerPopover(speaker));
        
        speakersContainer.appendChild(speakerCard);
      }
    }

    const showSpeakerPopover=(speaker)=>{
      popover.innerHTML = `
        <img alt="Portrait of ${speaker.speaker_name}" height="100" src="${speaker.image}" width="100"/>
        <div class="info">
          <h2>${speaker.speaker_name}</h2>
          <h4>${speaker.title}</h4>
          <p>${speaker.company}</p>
          <div class="icons">
            ${`
                <a href="${speaker.social_links[0]}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${speaker.social_links[1]}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="${speaker.social_links[2]}" target="_blank"><i class="fab fa-linkedin"></i></a>
              `}
          </div>
          
        </div>
        <div class="line"></div>
        <div class="desc">
        <span>
              Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel intermediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.
             </span>
             </div>
        <div class="close" id="closeButton"><i class="fas fa-times"></i></div>
      `;
      popover.style.display = 'flex';
      document.getElementById('closeButton').addEventListener('click', () => {
        popover.style.display = 'none';
      });
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - visibleSpeakers + speakersData.length) % speakersData.length;
      showSpeakers();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + visibleSpeakers) % speakersData.length;
      showSpeakers();
    });

    showSpeakers();