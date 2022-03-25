import { Offcanvas } from 'react-bootstrap';
import './Details.css'

const Details = ({info, show, handleClose, handleShow}) => {
  // const {info} = info

  let img = ''
  let name = '';
  let alternate = ''
  let country = ''
  let stadium = ''
  let description = ''

  
  for(const showing of info){

    img = showing.strStadiumThumb
    name = showing.strTeam
    alternate = showing.strAlternate
    country = showing.strCountry
    stadium = showing.strStadium
    description = showing.strStadiumDescription.slice(0, 200)

  }
 
  return (
    <div  className='offcanvas'>
           <button variant="primary" onClick={handleShow}>
        Launch
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>The SportsDB Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                
                 <img src={img} alt="" />
                 <h3> <span className='fw-bold'>Team:</span> {name}</h3>
                 <h4> <span className='fw-bold'>Alternate:</span> {alternate}</h4>
                 <h5> <span className='fw-bold'>Country:</span> {country}</h5>
                 <h5> <span className='fw-bold'>Stadium:</span> {stadium}</h5>
                 <p> <span className='fw-bold'>Description:</span> {description}</p>
            
        </Offcanvas.Body>
      </Offcanvas>
   </div>
   
  );
};

export default Details;