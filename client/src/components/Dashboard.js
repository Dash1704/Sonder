import React, {useState} from 'react';


const Dashboard = () => {
  const mother = localStorage.getItem("mother")
  const motherJson = JSON.parse(mother)
  const [active, setActive] = useState([])
  const [pending, setPending] = useState([])
  const [finished, setFinished] = useState([])

  useEffect(()=>{
    fetch(`/requests/${motherJson._id}`,{
      headers:{
        'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        sortByStatus(results);
    })
    .catch((err) => {
        console.log('Failed to load requests...', err);
    })},[]);

    const sortByStatus = (requests) => {
        const activeRequests = [];
        const pendingRequests = [];
        const finishedRequests = [];

        requests.forEach( unit => {
            if(unit.status === 'NEW'){
                activeRequests.push(unit)
            }else if(unit.status === "PENDING"){
                pendingRequests.push(unit)
            }else{
                finishedRequests.push(unit)
            }
        })
        setActive(activeRequests);
        setPending(pendingRequests);
        setFinished(finishedRequests)
    };


  return (
   
    <>
    <h4>Active Requests</h4>
        {active.map(request => {
           return request.text
        })}
    <h4>Pending Requests</h4>
        {pending.map(request => {
            return `${request.fullfilledBy.name} has offered to donate these items`
        })}
    <h4>Finished Requests</h4>
        {finished.map(request => {
            return `${request.fullfilledBy.name} has donated these items`
        })}
    
    </>
  )
}

export default Dashboard