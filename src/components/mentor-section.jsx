

export function MentorSection() {

    return(
        <section className="mb-16 text-white">
            <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Mentors</h2>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\rushi.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Rushi Wagh</h3>
                <p className="text-muted-foreground mac-w-md mb-8 ">
                Rushi Wagh is a tech geek with a passion for exploring DevOps, specializing in AWS, Linux administration, Ansible, Docker, and Jenkins. Alongside his technical expertise, he is also an infographics designer with a keen interest in vehicle dynamics, blending creativity with cutting-edge technology
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Abin George Varghese.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Abin George Varghese</h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Abin George Varghese is a dynamic support desk executive at RMV India with a passion for cybersecurity and technology exploration. A computer engineer by training and a career advisor at heart, he combines his tech-savvy nature with a drive to help others navigate the ever-evolving world of technology.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Yash Kamone.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Yash Kamone</h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                A dependable guide in times of need, always ready to share his knowledge and offer assistance for any task. 
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Jyotiraditya Parihar.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Jyotiraditya Parihar</h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Jyotiraditya Parihar is a dynamic professional, blending expertise in engineering, finance, and data science with a deep passion for machine learning and AI research. With a sharp command of Python and a talent for crafting innovative ML models, he thrives in collaborative environments, solving complex problems with clear communication and creative solutions.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Ayush Gupta.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Ayush Gupta</h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Ayush Gupta is a dedicated learner and cybersecurity enthusiast with a strong focus on penetration testing. With hands-on experience in computer engineering, particularly in cybersecurity and networking, he is passionate about staying ahead in this ever-evolving field. Eager to contribute to organizations that prioritize digital protection, he is committed to safeguarding against cyber threats with proactive security practices.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Shantanu Jangale.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Shantanu Jangle</h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                 Shantanu Jangle is a cybersecurity expert specializing in penetration testing, threat intelligence, and red teaming. As a skilled ethical hacker and digital forensics analyst, he has contributed to ISAC India, SAE India, and the UK's National Crime Agency (NCA). His experience spans uncovering vulnerabilities and strengthening defenses in high-stakes environments.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Rohan Misalwar.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Rohan Misalwar</h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Rohan Misalwar is an experienced professional with expertise in data science, cyber security, mental health advocacy, public speaking, business analysis, marketing, and operations. Currently, he is working at the Founders Office at LIT, where he contributes to strategic initiatives and business growth. Previously, he gained technical experience as an SDE Intern. Rohan is passionate about leveraging his diverse skill set to drive impactful results in both the tech and business spheres.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\OM ITANKAR.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Om Itankar </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Om Itankar is a dedicated Data Science Intern with a background in computer engineering. He has experience as a data scientist, working with tools like Python and Power BI to analyze and visualize data. Beyond his technical expertise, Om is committed to social causes and has actively contributed as a NSS Volunteer. He brings a combination of analytical skills and a passion for community service to every project he undertakes.
                </p>
              </div>
            </div>

            </div>
            
            <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Operational Unit</h2>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Utkarsh.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Utkarsh Chandekar </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                 Utkarsh Chandekar is a cybersecurity enthusiast with a solid foundation in Linux basics, IoT, and web security. Actively engaged in Hack The Box (HTB) challenges and CTF competitions, he sharpens his skills while exploring the latest in cybersecurity techniques and problem-solving.
                </p>
              </div>
            </div>


            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\ansh.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Ansh Gadhia </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                A passionate and driven individual with a knack for multitasking, leadership, and out-of-the-box thinking. An enthusiastic explorer and CTF player, always seeking new challenges to sharpen critical thinking and problem-solving skills. Known for being a quick learner and a playful trickster who thrives on tackling complex puzzles, I bring a unique blend of curiosity, creativity, and determination to every endeavor. Whether leading a team or navigating new territories, I strive for excellence and innovation at every step.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Vidyan Tidke.png" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Vidyan Tidke </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Vidyan Tidke is a passionate cybersecurity enthusiast, mastering the art of malware analysis & development, and cyber forensics. With a knack for programming and OSINT, he thrives in the world of Linux, CTF & competitions. An innovative thinker with sharp management skills, alongside he is a lifelong learner, always pushing boundaries in the ever-evolving realm of cybersecurity.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Onkar.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Onkar Sinha </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                 Onkar Sinha is a versatile professional, excelling as an analyst, sales and marketing specialist, and research assistant. A student with a strong passion for cybersecurity and programming, he is also the founder of Tech_Pupil, where he merges his technical expertise with innovative ideas in the tech world.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGpsZomfNr-fg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706622301402?e=1733961600&v=beta&t=zLpMebEjRCVmpivKnGe9htWxc_UgVXDvzwnsGZixbPI" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Amit Prajapati </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Amit Prajapati is a cybersecurity professional specializing in Android security. With a passion for ethical hacking, Amit has extensive experience in both developing and playing Capture The Flag (CTF) challenges. He has also conducted workshops on cybersecurity, sharing his knowledge and expertise with others. His hands-on approach and deep understanding of Android security make him a valuable asset.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src="./src\assets\avatar\Ayush.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Ayush Benny </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Ayush Benny is a driven cybersecurity enthusiast specializing in penetration testing and digital forensics. With a solid foundation in Linux and management skills, he is an aspiring entrepreneur, eager to make his mark in the tech world by combining technical expertise with leadership.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\shruti.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Shruti Bhande  </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Shruti Bhande is proficient in cryptography, actively working on encryption/decryption models through projects, CTF challenges, and solving labs on TryHackMe (THM) and Hack The Box (HTB), with a focus on continuous learning and practical cybersecurity application.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Aayushi.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Aayushi </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Aayushi Salbarde is passionate cybersecurity enthusiast with expertise in cryptography and a strong interest in digital forensics. Her passion lies in identifying and exploiting vulnerabilities in encryption models and protocols, and developing solutions to mitigate them.
                </p>
              </div>
            </div>

            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\Sujal .jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold"> Sujal Thakur  </h3>
                <p className="text-muted-foreground mac-w-md mb-8">
                Sujal Thakur, a computer science enthusiast, is exploring cloud security, penetration testing, and computer networking. With a strong interest in ethical hacking, he is focused on mastering the latest trends in cybersecurity and network protection.
                </p>
              </div>
            </div>



            </div>

        </section>
        


    )
}