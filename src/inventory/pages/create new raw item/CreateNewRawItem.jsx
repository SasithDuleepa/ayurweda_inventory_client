import React, { useState , useEffect } from 'react';
import { MD5 } from 'crypto-js';

import DragAnddrop from './../../icons/drag-and-drop.png';
import DropDown from './../../icons/down-arrow.png';
import IdGenerate from '../../utils/IdGenerate';


import './CreateNewRawItem.css';

export default function CreateNewRawItem() {

    const[user,setUser] = useState('mr. Admin');
    const currentDate = new Date();
    const[itemName, setItemName] = useState('');
    const[itemShortName, setItemShortName] = useState('');
    const[itemCode,setItemCode] = useState('');
    const[itemMeasureUnit, setItemMeasureUnit] = useState('Select Measure Unit');
    const[itemDescription, setItemDescription] = useState('');

    const[nameWarning, setNameWarning] = useState('');
    const[shortNameWarning, setShortNameWarning] = useState('');
    const[codeWarning, setCodeWarning] = useState('');
    const[dateWarning,setDateWarning] = useState('');
    const[measureUnitWarning, setMeasureUnitWarning] = useState('');
    const[descriptionWarning, setDescriptionWarning] = useState('');



useEffect(()=>{
    setItemCode(IdGenerate('ITEM'))
},[])


    useEffect(() => {
        const generateShortName = () => {
          const words = itemName.split(' ');
      
          // If there is only one word, use the entire word as short name
          // If there are multiple words, use the initials of each word
          const shortName = words.length === 1
            ? words[0]
            : words.map((word) => word.charAt(0).toUpperCase()).join('');
      
          setItemShortName(shortName);
        };
      
        generateShortName();
      }, [itemName]);

const SelectHandler = (unit) =>{
    setItemMeasureUnit(unit);
    setShowDropdown(false);
};


        const [showDropdown, setShowDropdown] = useState(false);      
        const toggleDropdown = () => {
          setShowDropdown(!showDropdown);
        };      
        const filterFunction = (e) => {
          console.log(e.target.value);
        };



        const CancelHandler = () =>{
            window.alert('Are you sure you want to cancel?')
            window.location.reload()
        }

        const SubmitHandler = () =>{
            if(itemName === ''){
                setNameWarning('Item Name is required');
            }else{
                setNameWarning('');
            }

            if(itemShortName === ''){
                setShortNameWarning('Item Short Name is required');
            }else{
                setShortNameWarning('');
            }

            if(itemCode === ''){
                setCodeWarning('Item Code is required');
            }else{
                setCodeWarning('');
            }

            if(itemMeasureUnit === 'Select Measure Unit'){
                setMeasureUnitWarning('Measure Unit is required');
            }else{
                setMeasureUnitWarning('');
            }

            if(itemDescription === ''){
                setDescriptionWarning('Item Description is required');
            }else{
                setDescriptionWarning('');
            }


            if(itemName !== '' && itemShortName !== '' && itemCode !== '' && itemMeasureUnit !== 'Select Measure Unit' && itemDescription !== ''){
            }
        }
  return (
    <div className='CreateNewRawItem'>
        <div className='CreateNewRawItem-top-div'>
            <p className= 'title CreateNewRawItem-title'>Create A New Raw Item</p>

                <p className='normal_titles CreateNewRawItem-top-div-p'>{user}</p>

        </div>
        

        <div className='line CreateNewRawItem-line-1'></div>

        <div className='CreateNewRawItem-div-1'>
            <div className='CreateNewRawItem-div-1-left'>
                <div className='CreateNewRawItem-div-1-left-sub1'>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Name </label>
                            <p className='sub_title'>:</p>
                            <input className='form-input' value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
                        </div>
                        <p className='warning'>{nameWarning}</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Short Name </label>
                            <p className='sub_title'>:</p>
                            <input className='form-input' value={itemShortName} onChange={(e)=>setItemShortName(e.target.value)}/>
                        </div>
                        <p className='warning'>{shortNameWarning}</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Code </label>
                            <p className='sub_title'>:</p>
                            <input className='form-input' value={itemCode}/>
                        </div>
                        <p className='warning'>{codeWarning}</p>
                    </div>
                    
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Date </label>
                            <p className='sub_title'>:</p>
                            <input className='form-input ' value={currentDate}/>
                        </div>
                        <p className='warning'>{dateWarning}</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>User </label>
                            <p className='sub_title'>:</p>
                            <input className='form-input ' value={user} disabled/>
                        </div>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form-select'>
                        <div className='select-sub'>
                            <label>Measure Unit</label>
                            <p>:</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown} className="dropbtn">
                                    <input type="text" placeholder={itemMeasureUnit} id="myInput" onKeyUp={(e)=>filterFunction(e)}/>
                                    <img className={`${showDropdown ? 'drop-down-arrow-clos' : 'drop-down-arrow-expand'}`} src={DropDown} alt="" />
                                </button>
                             <div id="myDropdown" className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                                    <button onClick={()=>SelectHandler('g')} className='dropdown-select-btn'>g</button>
                                    <button onClick={()=>SelectHandler('ml')} className='dropdown-select-btn'>ml</button>
                                </div>
                            </div>

                        </div>
                        
                        <p className='warning'>{measureUnitWarning}</p>
                    </div>

                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Description </label>
                            <p className='sub_title'>:</p>
                            <textarea  className='CreateNewRawItem-div-1-left-form-input' value={itemDescription} onChange={(e)=>setItemDescription(e.target.value)}/>
                        </div>
                        <p className='warning'> {descriptionWarning}</p>
                    </div>
                   
                </div>
                <div className='CreateNewRawItem-btn-div'>
            <button  className=' btn CreateNewRawItem-btn-1' onClick={CancelHandler}>Cancel</button>
            <button className='btn CreateNewRawItem-btn-2' onClick={SubmitHandler}>Save</button>
        </div>
            </div>

        </div>


        

    </div>
  )
}
