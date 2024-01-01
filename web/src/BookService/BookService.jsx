import React, { useEffect, useState } from 'react'
import style from './BookService.module.css'
import { useParams } from 'react-router'
import Navbar from '../Home/Header/Navbar/Navbar';
import BookServiceSide from './BookServiceSide/BookServiceSide';
import Footer from '../Home/Footer/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Swal from 'sweetalert2'

export default function BookService({allServices}) {

    // to get the specific service according to serviceId which sent with url:
    let [service , setService] = useState({})
    let idFromUrl = useParams().serviceId;

    let bookServiceSchedule = document.getElementById('bookServiceSchedule');
    let bookServiceOther = document.getElementById('bookServiceOther');

    let [date, setDate] = useState(new Date());
    let [time , setTime] = useState('');
    let errorDateTime = document.getElementById('errorDateTime');

    let [formValues , setFormValues] = useState({});

    let schema = Yup.object({
        other1: Yup.string().required(),
        other2: Yup.string().required(),
        other3: Yup.string().required(),
        other4: Yup.string().required(),  
        option1: Yup.boolean(),
        option2: Yup.boolean(),
        option3: Yup.boolean(),
        option4: Yup.boolean(),  
    })
        let formik = useFormik({
        initialValues: {
          other1:'',
          other2:'',
          other3:'',
          other4:'',
          option1:'',
          option2:'',
          option3:'',
          option:'',          
        },
        validationSchema:schema,
        onSubmit: OthersandOptionsValues
      })

    let allValueToApi = {
        timeValue: time,
        dateValue: date,
        other1:'',
        other2: '',
        other3:'',
        other4: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
    }

    function getService(){
        let serviceId = allServices.filter((item) => item.id === idFromUrl)
        setService(serviceId);
    }

    function NextOthers(){
        if(date != '' && time != ''){
            bookServiceSchedule.style.display = 'none';
            bookServiceOther.style.display = 'inline-block';
        }
        else{
            console.log('error')
            errorDateTime.innerHTML='please choose date and time'
        }
    }

    function BackSchedule(){
        bookServiceOther.style.display = 'none';
        bookServiceSchedule.style.display = 'inline-block';
        errorDateTime.innerHTML=''
    } 

    function ChooseTime(e){
      let choosenTime = e.target.innerHTML
      setTime(choosenTime);
    }

    function OthersandOptionsValues(values){
        setFormValues(values);
        // console.log(values);

        Swal.fire({
            title: "Are you sure?",
            text: "message",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, book it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "sent!",
                text: "Service is booked",
                icon: "success"
              });
              
            }
          });        
    }

    useEffect(()=>{
        // getService();
    },[])



  return (
    <div>

        <Navbar />

        <div className={`${style.bookService} d-flex`}>

            <div className='col-3 bg-info'>
            <BookServiceSide />
            </div>

            <div className='col-9'>
                <div className={`${style.bookServiceSchedule}`} id='bookServiceSchedule'>

                    <div className='d-flex py-5'>
                    <div className='col-6 '>
                    <Calendar value={date} onChange={setDate} />
                    </div>

                    <div className='col-6 bg-danger'>
                    <h3>available time:</h3>
                    <div className='d-flex flex-column w-25 gap-2'>
                    <button onClick={ChooseTime}>time 1</button>
                    <button onClick={ChooseTime}>time 2</button>
                    <button onClick={ChooseTime}>time 3</button>
                    <button onClick={ChooseTime}>time 4</button>
                    </div>
                    </div>
                    </div>

                    <h2 id='errorDateTime'></h2>
                    <button onClick={NextOthers}>next</button>
                </div>

                <div className={`${style.bookServiceOther}`} id='bookServiceOther'>

                    <form className='d-flex bg-success' onSubmit={formik.handleSubmit} >
                        <div className=' bg-danger'>
                            <div>
                                <label htmlFor="">other1</label>
                                <input type="text" value={formik.values.other1} onChange={formik.handleChange} name='other1'/>
                            </div>
                            <div>
                                <label htmlFor="">other2</label>
                                <input type="text" value={formik.values.other2} onChange={formik.handleChange} name='other2'/>
                            </div>
                            <div>
                                <label htmlFor="">other3</label>
                                <input type="text" value={formik.values.other3} onChange={formik.handleChange} name='other3'/>
                            </div>
                            <div>
                                <label htmlFor="">other4</label>
                                <input type="text" value={formik.values.other4} onChange={formik.handleChange} name='other4'/>
                            </div>  
                        </div>                           

                        <div className='bg-info w-100'>
                            <div>
                                <label htmlFor="">option1</label>
                                <input type="checkbox" value={formik.values.option1} onChange={formik.handleChange} name='option1'/>
                            </div>
                            <div>
                                <label htmlFor="">option2</label>
                                <input type="checkbox" value={formik.values.option2} onChange={formik.handleChange} name='option2'/>
                            </div>
                            <div>
                                <label htmlFor="">option3</label>
                                <input type="checkbox" value={formik.values.option3} onChange={formik.handleChange} name='option3'/>
                            </div>
                            <div>
                                <label htmlFor="">option4</label>
                                <input type="checkbox" value={formik.values.option4} onChange={formik.handleChange} name='option4'/>
                            </div>                                                                                    
                        </div>
                        
                        <button onClick={BackSchedule}>back</button>      
                        <input type="submit" />

                    </form>
                     
                </div>            
     
            </div>
        </div>


        <Footer />


    </div>
  )
}
