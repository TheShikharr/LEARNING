import './App.css'
import Card from './components/Card';

function App() {

  const jobOppenings = [
    {
      name: "IMDB",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7S4XcVnCrICMuz7HrCyEH4eypO0R1dRzKhNZuGrDgXQ&s=10",
      role: "Graphics Designer",
      time: "5 days Ago",
      r1: "Part-Time",
      r2: "Senior Level",
      pay: "$120/hr",
      loc: "Mumbai, India",
    },
    {
      name: "Google",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iQY-eq57eJu8wDzsAvmPcYz2eHFXgxRsgYqR0ojp6A&s",
      role: "Senior UI/UX Designer",
      time: "1 days Ago",
      r1: "Part-Time",
      r2: "Flexible",
      pay: "$150-220k",
      loc: "Pune, India",
    },
    {
      name: "Discord",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvAEWFfbsS5dVZLCvODoVulfyuplntxKyAbWyEXunNQ&s",
      role: "Senior Motion Designer",
      time: "15 days Ago",
      r1: "Contract",
      r2: "Remote",
      pay: "$85/hr",
      loc: "London, UK",
    },
    {
      name: "Netflix",
      img: "data:image/png;base64,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",
      role: "Junior UX Designer",
      time: "23 days Ago",
      r1: "Full-Time",
      r2: "In Office",
      pay: "$200-250k",
      loc: "Banglore, India",
    },
    {
      name: "Corel Draw",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWvVTOSrYpRB_-Q1IOktZha6ECmUeHH4NipuzpkFReQ&s=10",
      role: "Graphics Designer",
      time: "1 days Ago",
      r1: "Contract",
      r2: "Remote",
      pay: "$100/hr",
      loc: "Boston, US",
    },
    {
      name: "Airbnb",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1B9nDbBqjmWlQ-qxtaTLhoMGY7Y-L0HWSBmWgm8qBFA&s=10",
      role: "Review Manager",
      time: "10 hours ago",
      r1: "Full-Time",
      r2: "Junior Level",
      pay: "$120/hr",
      loc: "Mumbai, India",
    }
  ]

  return (
    <div className='container'>

      {jobOppenings.map(function(elem, iodex){
        return <div key={iodex}>
          <Card 
                name={elem.name}
                img={elem.img}
                role={elem.role}
                time={elem.time}
                r1={elem.r1}
                r2={elem.r2}
                pay={elem.pay}
                loc={elem.loc} 
                />
        </div>
      })}

    </div>
  )
}

export default App
