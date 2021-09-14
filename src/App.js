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
import FabLink from './components/FabLink';
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
                    width="130" 
                    height="40"/>
                </div>
                <div className="header"> 
                    <h2>We are launching <span>soon!</span></h2>
                    <h3>Subcribe and get notified</h3>
                </div>
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
                <div className="illustration"> 
                    <img 
                    alt="Illustration Ping Single column" 
                    src={illustration} 
                    width="800" 
                    height="410"/>
                </div>
                <div className="footer"> 
                    <div className="socila-medial"> 
                        <FabLink className="icon facebook"></FabLink>
                        <FabLink className="icon twitter"></FabLink>
                        <FabLink className="icon instagram"></FabLink>
                    </div>
                    <div className="copy-section">
                        <p className="copy">
                            © Copyright Ping. All reserved.
                        </p> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
