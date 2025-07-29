import React from 'react'
import './components.css'

class EmailSubscribe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isSubscribed: false,
            error: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
            error: '' // Clear error when user starts typing
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (!this.state.email) {
            this.setState({ error: 'Please enter your email address' })
            return
        }

        // Simple email validation
        if (!this.state.email.includes('@')) {
            this.setState({ error: 'Please enter a valid email address' })
            return
        }

        // Simulate API call
        console.log('Subscribing email:', this.state.email)
        this.setState({
            isSubscribed: true,
            email: '',
            error: ''
        })

        // Reset success message after 3 seconds
        setTimeout(() => {
            this.setState({ isSubscribed: false })
        }, 3000)
    }

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
                        <form onSubmit={this.handleSubmit} className="subscribeForm">
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
                            {this.state.error && <p className="errorMessage">{this.state.error}</p>}
                        </form>
                    )}
                </div>
            </div>
        )
    }
}

export default EmailSubscribe