import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


function Main_form() {


    return (

        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">
                    <span className="contact100-form-title">
                        MARRIAGE CERTIFICATE   <br />   سند نکاح
                    </span>
                    <div className='row'>
                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Registor No. <br />رجسٹر نمبر</span>
                                <input className="input100" type="text" name="name" placeholder="Registor Number" />
                                <span className="focus-input100"></span>

                            </div>
                        </div>
                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Time <br /> وقت,</span>
                                <input className="input100" type="text" name="name" placeholder="Nikha Time" />
                                <span className="focus-input100"></span>

                            </div>
                        </div>
                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100"> Date <br /> تاریخ</span>
                                <input className="input100" type="text" name="name" placeholder="Nikha Date" />
                                <span className="focus-input100"></span>
                            </div>
                        </div>
                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 input100-select">
                                <span className="label-input100"> DAY <br />دن,  </span>
                                <br />
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Day</option>
                                    <option value="1">Monday پیر</option>
                                    <option value="2">Tuesday منگل</option>
                                    <option value="3">Wednesday بدھ</option>
                                    <option value="4">Thursday جمعرات</option>
                                    <option value="5">Friday جمعہ</option>
                                    <option value="6">Saturday ہفتہ</option>
                                    <option value="7">Sunday اتوار</option>
                                </select>

                            </div>
                        </div>


                    </div>

                    <div className='row'>
                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">  Groom's Name & address <br /> دولہا کا نام اور پتہ </span>
                                <textarea className="input100" name="message" placeholder="Name & Full Address..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>


                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100"> Bride's Name & Father Name <br />   دلہن کا نام اور والد کا نام </span>
                                <textarea className="input100" name="message" placeholder="Name & Full Address..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>


                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">   Bride's Father & Guardian Address <br /> دلہن کے والد اور سرپرست کا پتہ </span>
                                <textarea className="input100" name="message" placeholder="Name & Full Address..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>

                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">  Vakil pleader's Name & Address <br /> وکیل کا نام اور پتہ</span>
                                <textarea className="input100" name="message" placeholder="Name & Full Address..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>
                    </div>


                    <div className='row'>
                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100"> 1st Witness Name & Full Address <br /> پہلے گواہ کا نام اور پورا پتہ </span>
                                <textarea className="input100" name="message" placeholder="Name & Full Address..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>


                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">    2nd Witness Name & Full Address<br />    دوسرے گواہ کا نام اور پورا پتہ  </span>
                                <textarea className="input100" name="message" placeholder="Name & Full Address..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>


                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">
                                    MEHAR<br /> مہر  </span>
                                <textarea className="input100" name="message" placeholder="Mehar..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>

                        <div class="col-md-3 form-group mb-3">
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">
                                    Attestation By Quazi  <br /> قاضی کی طرف سے تصدیق

                                </span>
                                <textarea className="input100" name="message" placeholder="Quazi Name & Address ..."></textarea>
                                <span className="focus-input100"></span>
                            </div>    </div>




                    </div>


                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"></div>
                            <button className="contact100-form-btn">
                                <span>
                                    Submit
                                    <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"><FaArrowRight /></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Main_form
