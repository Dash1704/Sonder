import React, {useState, useEffect} from 'react';


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
        sortByStatus(result.requests);
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


    const acceptHelp = (id) => {
        fetch(`/requests/accept/${id}`,{
            method: "post",
            headers:{
              'Content-Type':'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
            const oldPendingData = [...pending]
            const newPendingData = oldPendingData.filter(item => item._id != data[0]._id)
            setPending(newPendingData);
            setFinished([data[0], ...finished])
          })
    }

    const repeatRequest = (id) => {
        fetch(`/requests/repeat/${id}`,{
            method: "post",
            headers:{
              'Content-Type':'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
              const repeatRequest = data.repeat
              console.log(repeatRequest)
            setActive([repeatRequest, ...active])
          })
    }





  return (
   
    <>
    <h4>Active Requests</h4>
        {active.map(request => {
            return (
            <>
                <p>Item in this request: </p>
                {request.basket.join(',   ')}
                {request.text}
           </>
            )
        })}
    <h4>Pending Requests</h4>
        {pending.map(request => {
            return(
            <>
            <p> These items were requested by you: {request.basket.join(',   ')} </p>
            <p> {request.fulfilledBy.name} has offered to donate these items</p>
            <button 
                    onClick = {(e) => {
                    e.preventDefault();
                    acceptHelp(request._id)
                    }}> 
                    Accept this donation
            </button>
            </>
            )
        })}
    <h4>Finished Requests</h4>
        {finished.map(request => {
            return (
            <>
             <p> These items were requested by you: {request.basket.join(' ')} </p>
            <p>{request.fulfilledBy.name} has donated these items</p>
            <button 
                    onClick = {(e) => {
                    e.preventDefault();
                    repeatRequest(request._id)
                    }}> 
                    Repeat this request
            </button>
            </>
            )
        })}
    </>
  )
}

export default Dashboard