import React, {Component} from "react";

class Contact extends Component{
    render(){
        if(this.props.data){
            var name = this.props.data.name;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }

        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get in Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">{message}</p>
                    </div>
                </div>
                
                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Address and Email</h4>
                        <p className="address">
                            {name}<br />
                            {/* {street} <br /> */}
                            {city}, {state} {zip}<br />
                            <span>{email}</span>
                        </p>
                    </div>
                </aside>
            </section>
        );
    }
}

export default Contact;