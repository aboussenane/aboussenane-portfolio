import React, { useEffect, Component } from 'react';
import { motion } from 'framer-motion';

function SplashContent() {
    return (
        <div>
            <motion.div
            className="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            style={{
                backgroundColor: 'var(--primary-color)',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999 
            }}
        >
            <motion.div
                className="circle"
                style={{
                    width: 'min(30vw, 30vh)',
                    height: 'min(30vw, 30vh)',
                    backgroundColor: 'var(--secondary-color)',
                    borderRadius: '50%',
                    opacity: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 0], opacity: [0.5,1,0.5], transition: { duration: 1.5, repeat: Infinity } }}
                transition={{ duration: 0.5 }}
            >
                
            </motion.div>
        </motion.div>
        </div>
    );
}
export default function Splash(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 2000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashContent();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}
