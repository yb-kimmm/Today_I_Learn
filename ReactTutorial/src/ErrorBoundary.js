import React , {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error : false
    };

    componentDidCatch(error , info){
        console.log('error 가 발생');
        console.log({
            error , info 
        });

        this.setstate({
            error:true
        });
    }

    render(){
        if(this.state.error){
            return <h1>에러 발생 </h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;