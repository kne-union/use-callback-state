import {useState, useEffect, useRef, useCallback} from 'react';

export default (props) => {
    const [state, setState] = useState(props);
    const callbackList = useRef([]);
    useEffect(() => {
        callbackList.current.forEach((callback) => callback(state));
        callbackList.current = [];
    }, [state]);
    const setCallbackState = useCallback((newProps, callback) => {
        setState(newProps);
        callback && callbackList.current.push(callback);
    }, [setState]);
    return [state, setCallbackState];
};
