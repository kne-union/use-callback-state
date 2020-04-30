# useCallbackState
用于解决useState的setState的回调方法问题
```shell script
npm i @kne/use-callback-state
```
# Usage
1、组件引入npm
```shell script
import callbackState from '@kne/use-callback-state';
```
2、应用
```shell script
export default () => {
    const [count, setCount ] = callbackState('');
    const handleIncrease = () => {
        setCount(val => val + 1, (state) => {
            console.log(state);
        });
    };
    return (
        <button onClick={ handleIncrease }>加</button>
    )
}
```

