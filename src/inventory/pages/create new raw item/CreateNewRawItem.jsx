import React from 'react';

import DragAnddrop from './../../icons/drag-and-drop.png';


import './CreateNewRawItem.css';

export default function CreateNewRawItem() {
  return (
    <div className='CreateNewRawItem'>
        <p className= 'title CreateNewRawItem-title'>Create New Raw Item</p>

        <div className='line CreateNewRawItem-line-1'></div>

        <div className='CreateNewRawItem-div-1'>
            <div className='CreateNewRawItem-div-1-left'>
                <div className='CreateNewRawItem-div-1-left-sub1'>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Name </label>
                            <p className='sub_title'>:</p>
                            <input className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Code </label>
                            <p className='sub_title'>:</p>
                            <input className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Measure Unit </label>
                            <p className='sub_title'>:</p>
                            <input className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Date </label>
                            <p className='sub_title'>:</p>
                            <input className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>User </label>
                            <p className='sub_title'>:</p>
                            <input className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Status </label>
                            <p className='sub_title'>:</p>
                            <input className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                    <div className='CreateNewRawItem-div-1-left-form'>
                        <div  className='CreateNewRawItem-div-1-left-form-sub'>
                            <label className='sub_title CreateNewRawItem-div-1-left-form-label'>Item Description </label>
                            <p className='sub_title'>:</p>
                            <textarea  className='CreateNewRawItem-div-1-left-form-input'/>
                        </div>
                        <p className='CreateNewRawItem-div-1-left-form-message'> wrong</p>
                    </div>
                   
                </div>
            </div>
            <div className='CreateNewRawItem-div-1-right'>
                <div className='CreateNewRawItem-div-1-right-sub'>
                    <p className='normal_titles'>add an image</p>
                    <div className='CreateNewRawItem-div-1-right-add-img-div'>
                        <input type="file" name="" id="my-file" className='CreateNewRawItem-div-1-right-add-img-input'/>
                        <label tabindex="0" for="my-file" class="input-file-trigger">
                        <img className='CreateNewRawItem-div-1-right-add-img-icon' src={DragAnddrop} alt="" />
                        </label>
                        <p className='sub_title'>Drag and drop an image here</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
