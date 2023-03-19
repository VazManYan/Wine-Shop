import Modal from 'react-modal';
import { useState } from 'react';
import './Visit.css';
import DateTimePicker from 'react-datetime-picker';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement("#root");

const Visit=()=>{
   // const navigate = useNavigate();
    const [modal, setIsOpen]= useState({isOpen:false});
    const [value, onChange] = useState('');
    const [iswornning, setWorrning] = useState(false);
    const [peopleValue, setPeopleValue] = useState('table for 1-2 people')
      
     
    const  openModal=()=>{
      //navigate('/booking');
      setWorrning(false);
      setIsOpen({isOpen:true});
    }

    const closeModal=()=> {
        setIsOpen({isOpen:false});
      }
    const saveModal =() =>{
      const current=new Date();
      value >= current ? setIsOpen({isOpen:false}): setWorrning(true);
    }
    
    const hendleOption=(event)=>{
      setPeopleValue(event.target.value)
      console.log(peopleValue)
    }

    return(
        <>
        <div className="bookstyle">
            <div>MAKE A RESERVATION</div>
            <div>We accept reservations only for dining. 
                Tables are available for 2.5 hours. <br/>
                The rest of the bar and service area is ready to
                <br/> welcome you without a reservation.</div>
            <div></div>
            <div><button onClick={openModal}>BooK NoW</button></div>   
            {modal.isOpen ? 
            <Modal
            isOpen={modal.isOpen}
            onRequestClose={closeModal}
            saveModal ={saveModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='modalView'>
            <div className='reserv'>RESERVATION</div>
            <div >
            <div className={iswornning ? 'worrningStyle':'worrningHiden'}>Please chage date and time</div>
            <label >Choose book date and time:</label>
            <DateTimePicker onChange={onChange} value={value} />
            </div>    
            <div className='people_dropdown'>
                <label htmlFor="cars">Choose a people count:</label>

                  <select name="people" id="people" onChange={hendleOption}>

                    <option value="table for 1-2 people">table for 1-2 people</option>
                    <option value="table for 2-4 people">table for 2-4 people</option>
                    <option value="table for 4-8 people">table for 4-8 people</option>
                    <option value="table for 8-12 people">table for 8-12 people</option>
                  </select> 
            </div> 
            <div className='cell_info'>If you have any questions<br/>
             about the reservation please<br/> call the number <br/>
             +30 222 22 22 22 <br/></div>
            <button className='btnModal btn_margin' onClick={saveModal}>save</button>
            <button  className='btnModal' onClick={closeModal}>close</button>
            </div>

        </Modal> : null}
        </div>
        <div className='visitStyle'></div>
        
        </>
    )
}
export default Visit;