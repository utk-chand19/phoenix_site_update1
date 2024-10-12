export function FounderSection() {
    return (
      <section className="mb-16 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Founder</h2>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src=".\src\assets\avatar\vishal-injewar.jpg"
              alt="Vishal Injewar"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '';
                e.currentTarget.alt = 'VI';
              }}
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold">Vishal Injewar</h3>
            <p className="text-muted-foreground max-w-md mb-8">
            Vishal Injewar is passionate cybersecurity enthusiast, skilled ethical hacker, and penetration testing expert, Actively engaged in CTF competitions. With a strong background in computer engineering he combines his deep knowledge of computer engineering with hands-on experience to identify vulnerabilities and strengthen security systems. <br />
            </p>
          </div>
        </div>

        
        
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div className=" leading-tight tracking-tight sm:txt-4xl mx-auto text-center p-10">
              <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                <img src=".\src\assets\avatar\rushi.jpg" alt="Rushi"  className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = '';e.currentTarget.alt = 'VI';}} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold">Rushi Wagh</h3>
                <p className="text-muted-foreground mac-w-md mb-8 ">
                Known for his disciplined approach and seriousness, showing unwavering dedication to work, and setting a responsible example for the rest of the team. 
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
                 Offers valuable learning opportunities through practical guidance, demonstrating leadership and consistently solving complex challenges. 
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
                  An autodidactic role model who meticulously sets goals for juniors, encouraging them to view tasks from different perspectives and making learning enjoyable.
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
                A dependable and trustworthy mentor who works discreetly, always there when needed. Continuously exploring new technologies, he is always helpful in offering guidance and support
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
                   Initially seen as strict, but admired for his enthusiasm and caring nature, always supporting and motivating others to achieve their goals.
                </p>
              </div>
            </div>

            
    

        </div> */}

      </section>
    )
  }