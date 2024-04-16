// import React, { useRef } from 'react'
// import './Form.css'
// import { html2pdf } from 'html2pdf.js';
// export default function Form()
// {

//     const contentRef = useRef(null);
//     const convertToPdf = () => {
//         const content = contentRef.current;
//          const option = {
//             filename : 'test-document.pdf',
//             margin : 1,
//             image : {type: 'jpeg', quality : 0.98},
//             html2canvas: {scale : 2},
//             jsPDF :
//             {
//                 unit: 'in',
//                 formate : 'letter',
//                 orientation: 'portrait',
//             },
//          };
//          html2pdf().set(option).from(content).save();
//     };
import React, { useRef, useState } from 'react';
import './Form.css';
import { html2pdf } from 'html2pdf.js';
import { Link } from 'react-router-dom';

export default function Form() {
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({}); // State for form data

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const convertToPdf = async () => {
    try {
      const content = contentRef.current;
      const options = {
        filename: 'test-document.pdf',
       margin : 1,
             image : {type: 'jpeg', quality : 0.98},
             html2canvas: {scale : 2},
      };

      await html2pdf().set(options).from(content).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      
    }
  };



    return(<>
    <form onSubmit={convertToPdf} >
        <div ref={contentRef}>
        <div className="container">
            <div className="header"> 
            <div className="invoice_no"></div> <div className="date"><input type="date" placeholder='Date' /></div></div>
        <div className="top">
        <input type="text" placeholder='Billing party' />
        <input type="text" placeholder='GST Number' />
        <input type="text" placeholder='Contect Number' />
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
        <input type="text" placeholder='Country' />
        <input type="text" placeholder='Pin Code' />
        </div>
        <div className="middle">
            <span className="head">head</span>
            <input type="text" inputMode='decimal'  placeholder='actual weight'/>
            <input type="text" inputMode='decimal'  placeholder='a'/>
            <input type="text" inputMode='decimal'  placeholder='b'/>
            <input type="text" inputMode='decimal'  placeholder='c'/>


        </div>
        <div className="bottom"> <button ></button></div>
        </div></div>
    </form>
    <button className='bg-blue-500 rounded-lg shadow-lg p-2 m -2'> <Link to={"/"}> Home</Link> </button>
</>
    )
}