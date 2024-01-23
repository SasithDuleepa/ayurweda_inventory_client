import React from 'react';
import './CreateNewProduct.css';
import DragAnddrop from './../../icons/drag-and-drop.png';

export default function CreateNewProduct() {
  return (
    <div className='CreateNewProduct'>
      <p className= ' title CreateNewProduct-title'>Create New Product</p>
      <div className='line CreateNewProduct-line-1'></div>

      <div className='CreateNewProduct-div-1'>
        <div className='CreateNewProduct-div-1-left'>
          <div className='CreateNewProduct-div-1-left-sub1'>
            <div className='CreateNewProduct-div-1-left-form'>
              <div  className='CreateNewProduct-div-1-left-form-sub'>
                <label className='sub_title CreateNewProduct-div-1-left-form-label'>Product Name </label>
                <p className='sub_title'>:</p>
                <input className='CreateNewProduct-div-1-left-form-input'/>
              </div>
                <p className='CreateNewProduct-div-1-left-form-message'> wrong</p>
            </div>
            <div className='CreateNewProduct-div-1-left-form'>
              <div  className='CreateNewProduct-div-1-left-form-sub'>
                <label className='sub_title CreateNewProduct-div-1-left-form-label'>Measure Unit </label>
                <p className='sub_title'>:</p>
                <input className='CreateNewProduct-div-1-left-form-input'/>
              </div>
                <p className='CreateNewProduct-div-1-left-form-message'> wrong</p>
            </div>
            <div className='CreateNewProduct-div-1-left-form'>
              <div  className='CreateNewProduct-div-1-left-form-sub'>
                <label className='sub_title CreateNewProduct-div-1-left-form-label'>Product Description </label>
                <p className='sub_title'>:</p>
                <input className='CreateNewProduct-div-1-left-form-input'/>
              </div>
                <p className='CreateNewProduct-div-1-left-form-message'> wrong</p>
            </div>
          </div>  
        </div>
        <div className='CreateNewProduct-div-1-right'>
        <div className='CreateNewProduct-div-1-right-sub'>
                    <p className='normal_titles'>add an image</p>
                    <div className='CreateNewProduct-div-1-right-add-img-div'>
                        <input type="file" name="" id="my-file" className='CreateNewProduct-div-1-right-add-img-input'/>
                        <label tabindex="0" for="my-file" class="input-file-trigger">
                        <img className='CreateNewProduct-div-1-right-add-img-icon' src={DragAnddrop} alt="" />
                        </label>
                        <p className='sub_title'>Drag and drop an image here</p>
                    </div>
                </div>
        </div>
      </div>


    </div>
  )
}
