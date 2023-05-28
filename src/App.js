
import './App.css';

function App() {
  const data =[{
    name : "FREE",
    batch  :"/month",
    dollar:"$0",
    user:"Single User",
    storage:"5GB Storage",
    projects:"Unlimited Public Project",
    access:"Community Access",
    priprojects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free Subdomain",
    reports:"Monthly Status Report"
  },
  {
    name : "PLUS",
    batch  :"/month",
    dollar:"$9",
    user:"5 User",
    storage:"50GB Storage",
    projects:"Unlimited Public Project",
    access:"Community Access",
    priprojects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free Subdomain",
    reports:"Monthly Status Report"
  },
  {
    name : "PRO",
    batch  :"/month",
    dollar:"$49",
    user:"Unlimated User",
    storage:"150GB Storage",
    projects:"Unlimited Public Project",
    access:"Community Access",
    priprojects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    domain:"Free Subdomain",
    reports:"Monthly Status Report"
  }]
  return (
    <div className="App">
    {
     data.map((person,indx) =>(
     <Home 
     key={indx}
     name={person.name}
     batch={person.batch}
     dollar={person.dollar}
     user={person.user}
     storage={person.storage}
     projects={person.projects}
     access={person.access}
     priprojects={person.priprojects}
     support={person.support}
     domain={person.domain}
     reports={person.reports}
     /> 
    ))
     }
    </div>
 );
}

export default App;

function Home(props){
 
  return (
<div className="home-component">
<div>
    <h2 className="card-title text-muted text-uppercase center">{props.name}</h2>
    <h3 className="card-price center">{props.dollar}<span className='size'>{props.batch}</span> </h3>
    <hr></hr>
    <ul class="fa-ul">
      <li className="fa-tick">{props.user}</li>
      <li className="fa-tick">{props.storage}</li>
      <li className="fa-tick">{props.projects}</li>
      <li className="fa-tick">{props.access}</li>
      <li className="text-muted"><span className="fa-cross"></span>{props.priprojects}</li>
      <li className="text-muted"><span className="fa-cross"></span>{props.support}</li>
      <li className="text-muted"><span className="fa-cross"></span>{props.domain}</li>
      <li className="text-muted"><span className="fa-cross"></span>{props.reports}</li>
    </ul>
    <button className="center btn"> Button </button>
    </div>
</div>
)
}