import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'

function Register() {
    function generateArrayOfYears() {
        const max = new Date().getFullYear()
        const min = max - 150
        const years:any = []
      
        for (let i:number = max; i >= min; i--) {
          years.push(i)
        }
        return years
      }
      
    const years = generateArrayOfYears();
    const [mmActive, setmmActive] = useState(false);
    const [ddActive, setddActive] = useState(false);
    const [yyActive, setyyActive] = useState(false);

    const handleClick = (e) =>  {
        switch (e.target.name) {
            case 'mm':
                setmmActive(!mmActive);
                break;
            case 'dd':
                setddActive(!ddActive);
                break;
            case 'yy':
                setyyActive(!yyActive);
                break;
        }
    };

    useEffect(() => {
        const pageClickEvent = (e) => {
          setmmActive(false);
          setddActive(false);
          setyyActive(false);
        };
      
        if (mmActive || ddActive || yyActive) {
          window.addEventListener('click', pageClickEvent);
        }
      
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [mmActive, ddActive, yyActive]);

    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='register-container'>
                <form className='form-container' style={{position: 'relative', bottom: '13px'}}>
                    <p className='header-font f600' style={{fontSize: "25px", textAlign: 'center'}}>Create an account</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        <input type='email' name='email' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>USERNAME</label>
                        <input type='name' name='name' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input type='password' name='password' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>DATE OF BIRTH</label>
                        <div className='dropdown-container'>
                            <section className='full-dropdown'>
                                <section className={mmActive ? 'selection' : 'none'} style={{width: '150px'}}>
                                    <p>January</p>
                                    <p>February</p>
                                    <p>March</p>
                                    <p>April</p>
                                    <p>May</p>
                                    <p>June</p>
                                    <p>July</p>
                                    <p>August</p>
                                    <p>September</p>
                                    <p>October</p>
                                    <p>November</p>
                                    <p>December</p>
                                </section>
                                <input name='mm' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{width: '150px', cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <section className={ddActive ? 'selection' : 'none'} style={{width: '100px'}}>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>4</p>
                                    <p>5</p>
                                    <p>6</p>
                                    <p>7</p>
                                    <p>8</p>
                                    <p>9</p>
                                    <p>10</p>
                                    <p>11</p>
                                    <p>12</p>
                                    <p>13</p>
                                    <p>14</p>
                                    <p>15</p>
                                    <p>16</p>
                                    <p>17</p>
                                    <p>18</p>
                                    <p>19</p>
                                    <p>20</p>
                                    <p>21</p>
                                    <p>22</p>
                                    <p>23</p>
                                    <p>24</p>
                                    <p>25</p>
                                    <p>26</p>
                                    <p>27</p>
                                    <p>28</p>
                                    <p>29</p>
                                    <p>30</p>
                                    <p>31</p>
                                </section>
                                <input name='dd' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{width: '100px', cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <section className={yyActive ? 'selection' : 'none'}  style={{width: '122px'}}>
                                    {years?.map((item:string , i:number) => (
                                        <p key={i}>{item}</p>
                                    ))}
                                </section>
                                <input name='yy' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{width: '120px', cursor: 'default'}}/>
                            </section>
                        </div>
                    </div>
                    <button className='form-button normal-font' style={{marginTop: '11px'}}>Continue</button>
                    <p className='normal-font f300' style={{fontSize: "14px"}}><Link className='link f400' to='/login' style={{opacity: 1}}>Already have an account?</Link> </p>
                    <p className='normal-font f300' style={{fontSize: "12px", opacity: 0.3, marginTop: '12px'}}>By registering, you agree to Discord's Terms of Service and Privacy Policy</p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Register
