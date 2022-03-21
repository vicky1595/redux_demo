export const depositeMoney = (amount ) => {
    return (dispatch) => { 
        dispatch({
            type:'deposite',
            payload:amount
        })
    }

} 

//comiiwithdrawc,jhehb
export const withdrawMoney = (amount ) => {
    return (dispatch) => { 
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }

} 