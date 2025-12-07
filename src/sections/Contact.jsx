import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        number:"",
        message:""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("Success");
    const [alertMessage, setAlertMessage] = useState("")
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const showAlertMessage = (type, message)=>{
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            
        console.log("form submited" + formData);
        await emailjs.send("service_1y9frxo","template_lbdbtf3", {
            from_name: formData.name,
            to_name: "Sreenath",
            from_email: formData.email,
            to_email: "Sreenathselva8@gmail.com",
            message: formData.message,
        },
        "5TwcLUvBy2Zpr-GJh"
    );
        setIsLoading(false);
        setFormData({name: "",email: "",number:"",message:""});
        showAlertMessage("Success","Your message have been sent");
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            
        showAlertMessage("Danger","Something went wrong");
        }
        
        // service_1y9frxo
        // template_7kfkbaq
    }
  return (
    <section className='relative flex items-center c-space section-spacing'>
        {showAlert&& <Alert type={alertType} text={alertMessage}/>}
            <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <div className="flex flex-col items-center 
        max-w-md p-5 mx-auto border border-white/10 rounded-2xl
        bg-primary">
            <div>
                <h2 className='text-heading'>Let's Talk</h2>
                <p className="font-normal text-neutral-400">
                    Whether you're looking to build a webiste, improve your existing
                    platform, or bring unique project to life, I'm here to help.
                </p>
            </div>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className='field-label'>
                        Full Name
                    </label>
                    <input type="text" id="name" name="name" className='field-input field-input-focus'placeholder='Your name'
                    required autoComplete='name'
                    value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className='field-label'>
                        Email
                    </label>
                    <input type="email" id="email" name="email" className='field-input field-input-focus'placeholder='Your Email'
                    required autoComplete='email'
                    value={formData.email} onChange={handleChange}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="number" className='field-label' >
                        Phone Number
                    </label>
                    <input type="number" id="number" name="number" className='field-input field-input-focus' placeholder='987654321'
                    required autoComplete='number' value={formData.number} onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className='field-label'>
                        Message
                    </label>
                    <textarea type="message" id="message" name="message" className='field-input field-input-focus'placeholder='Share your thoughts...'
                    required autoComplete='message' value={formData.message} onChange={handleChange}
                    />
                </div>
                <button type="submit"
                 className='w-full px-1 py-3 text-lg text-center 
                rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                    {!isLoading ? "send" : "Sending..."}</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;