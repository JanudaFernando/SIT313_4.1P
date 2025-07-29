import React from 'react'
import './components.css'

class EmailSubscribe {
    render() {
        return (
            <div className="emailSubscribeContainer">
                <div className="subscribeContent">
                    <h2 className="subscribeTitle">SIGN UP FOR OUR DAILY INSIDER</h2>
                    <p className="subscribeDescription">
                        Get the latest news, tutorials, and insights delivered straight to your inbox.
                    </p>

                    {this.state.isSubscribed ? (
                        <div className="successMessage">
                            <h3>Thank you for subscribing!</h3>
                            <p>You'll receive our latest updates in your inbox.</p>
                        </div>
                    ) : (
                        <form className="subscribeForm">
                            <div className="inputGroup">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    className="emailInput"
                                />
                                <button type="submit" className="subscribeButton">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        )
    }
}

export default EmailSubscribe