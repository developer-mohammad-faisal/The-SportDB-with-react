import React, { useEffect, useState } from 'react';
import Details from '../Show-Details/Details';
import SportsCard from '../Sports-Card/SportsCard';

const SportsField = () => {

  const [fields, setField] = useState([])
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
    .then(res => res.json())
    .then(data => setField(data.teams))
  }, [])

  const showDetails = (details) => {
    const newInfo = [...info, details]
    setInfo(newInfo)
  }

      
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-3 w-100 ">
        {
          fields.map(field => <SportsCard key={field.idTeam} handleShow={handleShow} showDetails={showDetails} field={field} ></SportsCard>)
        }
        <Details info={info} show={show} handleClose={handleClose} handleShow={handleShow} ></Details>
    </div>
  );
};

export default SportsField;