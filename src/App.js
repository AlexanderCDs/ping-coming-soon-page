/**
 * @author: alexandercds 
 * @description: 
 * @date 13/septiembre
**/  
import './assets/sass/App.scss'; 
import logo from './assets/svgs/logo.svg';
import illustration from './assets/images/illustration-dashboard.png';
import InputEmail from './components/InputEmail';
import InputButton from './components/InputButton';
import Form from './components/Form';
import { useForm } from 'react-hook-form';

const App = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        window.open("https://alexandercd.herokuapp.com/home")   
    }
    return (
        <section className="container">
            <div className="content">
                <div className="logo">
                    <img 
                    alt="Logo Ping Single column" 
                    src={logo} 
                    width="86" 
                    height="26"/>
                </div>
                <div className="header"> 
                    <h2>We are launching <span>soon!</span></h2>
                    <h3>Subcribe and get notified</h3>
                </div>
                <div className="form">
                    <Form
                    register={register}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}>
                        <InputEmail
                        placeholder="Email Address"
                        name="email"
                        errors={errors} 
                        required={true}
                        register={register} /> 
                        <InputButton value="Notify Me"/>
                    </Form>
                </div>
                <div className="illustration"> 
                    <img 
                    alt="Illustration Ping Single column" 
                    src={illustration} 
                    width="1000" 
                    height="610"/>
                </div>
                <div className="footer"> 
                    <div className="socila-medial">
                        <span className="facebook"></span>
                        <span className="twitter"></span>
                        <span className="instagram"></span>
                    </div>
                    <div className="copy-section">
                        <p className="copy">
                            Copyright Ping. All reserved.
                        </p> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
