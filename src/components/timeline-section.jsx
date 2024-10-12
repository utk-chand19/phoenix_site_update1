import { CalendarIcon } from "lucide-react"

export function TimelineSection() {
  const events = [
    { date: "July 2021", event: "Group Formation and Virtual Meetups", description: "In the midst of the pandemic, a group of students with a passion for cybersecurity came together on July 9, 2021. They used online platforms to collaborate, share ideas, and plan for the future." },
    { date: "October 2021", event: "Transition to Offline Meetups", description: "As offline classes resumed, the group transitioned to in-person meetings. They faced challenges in organizing these gatherings, but their perseverance helped them strengthen the community." },
    { date: "February 2022", event: "First Cybersecurity Workshop", description: "The group hosted their first technical workshop, sharing their accumulated knowledge. This was their first official step into becoming a recognized entity within the department." },
    { date: "March 2022", event: "EncipherX 1.0 Cybersecurity Competition", description: "EncipherX 1.0, held on March 24-25, 2022, was a major cybersecurity competition that attracted students from various semesters. It marked the group's first large-scale event." },
    { date: "January 2023", event: "Second Batch of Members Joined", description: "With fresh perspectives and energy, the second batch of members brought new ideas to the forum. The senior members mentored the newcomers, preparing them for the future." },
    { date: "March 2024", event: "EncipherX 2.0 Cybersecurity Competition", description: "Building on the success of EncipherX 1.0, the second edition was even larger and more challenging. It attracted a wider range of participants and solidified the forum’s standing." },
    { date: "April 2024", event: "Official Establishment of the Forum", description: "On April 23, 2024, the Phoenix CyberSecurity Forum was officially recognized as a part of the department. This milestone acknowledged the forum’s contributions to the academic community." }
  ]

  return (
    <section className=" text-center align-middle mb-16 mr-10 ml-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Journey</h2>
      <div className="space-y-8 text-white text-justify ">
        {events.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 text-white text-justify">
            <CalendarIcon className="w-auto h-auto text-primary mt-1" />
            <div>
              <p className="font-semibold text-lg text-white">{item.date} - {item.event}</p>
              <p className="text-muted-foreground text-white ml-auto mr-auto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
